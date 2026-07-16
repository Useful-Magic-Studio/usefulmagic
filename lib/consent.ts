import posthog from 'posthog-js'
import * as Sentry from '@sentry/nextjs'

export const CONSENT_STORAGE_KEY = 'um_privacy_consent_v1'
export const CONSENT_CHANGE_EVENT = 'um:consent-change'
export const OPEN_PREFERENCES_EVENT = 'um:open-privacy-preferences'

export type ConsentChoice = 'accepted' | 'rejected'
export type ConsentState = ConsentChoice | 'pending'

type StoredConsent = {
  analyticsAndReplay: boolean
  updatedAt: string
}

export function readConsent(): ConsentState {
  if (typeof window === 'undefined') return 'pending'

  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY)
    if (!raw) return 'pending'
    const parsed = JSON.parse(raw) as StoredConsent
    if (typeof parsed.analyticsAndReplay !== 'boolean') return 'pending'
    return parsed.analyticsAndReplay ? 'accepted' : 'rejected'
  } catch {
    return 'pending'
  }
}

export function writeConsent(choice: ConsentChoice) {
  if (typeof window === 'undefined') return

  const payload: StoredConsent = {
    analyticsAndReplay: choice === 'accepted',
    updatedAt: new Date().toISOString(),
  }

  localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(payload))
  window.dispatchEvent(
    new CustomEvent(CONSENT_CHANGE_EVENT, { detail: choice satisfies ConsentChoice }),
  )
}

/**
 * Apply PostHog + Sentry Replay behavior for a consent decision.
 * Essential preference storage is handled separately via writeConsent().
 */
export async function applyConsent(
  choice: ConsentChoice,
  options?: { clearIdentifiers?: boolean },
) {
  if (typeof window === 'undefined') return

  if (choice === 'accepted') {
    posthog.opt_in_capturing()
    Sentry.getReplay()?.start()
    return
  }

  const replay = Sentry.getReplay()
  if (replay) {
    await replay.stop()
  }

  posthog.opt_out_capturing()

  if (options?.clearIdentifiers) {
    // Drop persistent PostHog IDs; keep only our essential consent preference.
    posthog.reset(true)
    posthog.opt_out_capturing()
  }
}

export function openPrivacyPreferences() {
  if (typeof window === 'undefined') return
  window.dispatchEvent(new Event(OPEN_PREFERENCES_EVENT))
}

export function consentLabel(state: ConsentState): string {
  switch (state) {
    case 'accepted':
      return 'Accepted'
    case 'rejected':
      return 'Rejected'
    default:
      return 'Not yet chosen'
  }
}

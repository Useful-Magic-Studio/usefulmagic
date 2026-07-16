'use client'

import { useEffect, useId, useRef, useState } from 'react'
import Link from 'next/link'
import { useConsent } from '@/components/privacy/consent-context'

export function PrivacyPreferencesModal() {
  const {
    consent,
    consentLabel,
    preferencesOpen,
    closePreferences,
    setAnalyticsEnabled,
  } = useConsent()
  const titleId = useId()
  const descId = useId()
  const closeRef = useRef<HTMLButtonElement>(null)
  const [analyticsEnabled, setAnalyticsEnabledLocal] = useState(
    consent === 'accepted',
  )
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    setAnalyticsEnabledLocal(consent === 'accepted')
  }, [consent, preferencesOpen])

  useEffect(() => {
    if (!preferencesOpen) return

    closeRef.current?.focus()
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closePreferences()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [closePreferences, preferencesOpen])

  if (!preferencesOpen) return null

  const onSave = async () => {
    setSaving(true)
    try {
      await setAnalyticsEnabled(analyticsEnabled)
      closePreferences()
    } finally {
      setSaving(false)
    }
  }

  return (
    <div
      className="fixed inset-0 z-110 flex items-end justify-center bg-[#2f4f4f]/45 p-4 sm:items-center"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) closePreferences()
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descId}
        className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-[18px] border-2 border-[#2f4f4f] bg-[#e9e9e6] p-5 shadow-lg sm:p-6"
      >
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <h2
              id={titleId}
              className="font-(family-name:--font-nunito-sans) text-[24px] font-bold text-[#2f4f4f]"
            >
              Privacy Preferences
            </h2>
            <p
              id={descId}
              className="mt-1 font-(family-name:--font-nunito-sans) text-[15px] text-[#2f4f4f]/opacity-80"
            >
              Current choice: {consentLabel}
            </p>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={closePreferences}
            className="rounded-full px-3 py-1 font-(family-name:--font-abeezee) text-[16px] text-[#2f4f4f] underline underline-offset-2 hover:text-[#6f42c1] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6f42c1]"
          >
            Close
          </button>
        </div>

        <div className="space-y-4">
          <section className="rounded-[14px] border border-[#2f4f4f]/30 bg-[#f2f2da] p-4">
            <h3 className="font-(family-name:--font-nunito-sans) text-[18px] font-bold text-[#2f4f4f]">
              Essential — Always active
            </h3>
            <p className="mt-2 font-(family-name:--font-nunito-sans) text-[15px] leading-relaxed text-[#2f4f4f]">
              Needed for site functionality, security, remembering this privacy
              choice, and privacy-minimized error monitoring (Sentry) when
              legally appropriate. This category cannot be turned off.
            </p>
          </section>

          <section className="rounded-[14px] border border-[#2f4f4f]/30 bg-white/60 p-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-(family-name:--font-nunito-sans) text-[18px] font-bold text-[#2f4f4f]">
                  Analytics and session recording — Optional
                </h3>
                <p className="mt-2 font-(family-name:--font-nunito-sans) text-[15px] leading-relaxed text-[#2f4f4f]">
                  Enables persistent PostHog analytics and Sentry Session Replay
                  (masked). If rejected, PostHog may still perform cookieless
                  measurement without storing analytics cookies.
                </p>
              </div>
              <label className="inline-flex cursor-pointer items-center gap-2 pt-1">
                <span className="sr-only">
                  Enable analytics and session recording
                </span>
                <input
                  type="checkbox"
                  checked={analyticsEnabled}
                  onChange={(event) =>
                    setAnalyticsEnabledLocal(event.target.checked)
                  }
                  className="h-5 w-5 accent-[#6f42c1]"
                />
              </label>
            </div>

            <ul className="mt-3 list-disc space-y-1 pl-5 font-(family-name:--font-nunito-sans) text-[14px] text-[#2f4f4f]">
              <li>
                <strong>PostHog</strong>: page views and explicit conversion /
                CTA events. No names, emails, or form contents.
              </li>
              <li>
                <strong>Sentry Session Replay</strong>: masked recordings to
                diagnose issues. Error monitoring can run separately under
                Essential.
              </li>
            </ul>
          </section>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/privacy"
            className="font-(family-name:--font-abeezee) text-[15px] text-[#2f4f4f] underline underline-offset-2 hover:text-[#6f42c1]"
            onClick={closePreferences}
          >
            Privacy Policy
          </Link>
          <button
            type="button"
            disabled={saving}
            onClick={() => void onSave()}
            className="min-h-11 rounded-full border border-[#f2f2da] bg-[#6f42c1] px-6 py-2 font-(family-name:--font-abeezee) text-[18px] text-white transition-colors hover:bg-[#5a35a0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6f42c1] disabled:opacity-60"
          >
            {saving ? 'Saving…' : 'Save preferences'}
          </button>
        </div>
      </div>
    </div>
  )
}

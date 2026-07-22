'use client'

import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from 'react'
import {
  applyConsent,
  CONSENT_CHANGE_EVENT,
  consentLabel,
  OPEN_PREFERENCES_EVENT,
  readConsent,
  writeConsent,
  type ConsentChoice,
  type ConsentState,
} from '@/lib/consent'
import {
  ConsentContextProvider,
  type ConsentContextValue,
} from '@/components/privacy/consent-context'
import { ConsentBanner } from '@/components/privacy/consent-banner'
import { PrivacyPreferencesModal } from '@/components/privacy/privacy-preferences-modal'

export { useConsent } from '@/components/privacy/consent-context'

const getServerConsent = (): ConsentState => 'pending'
const getClientHydration = () => true
const getServerHydration = () => false
const subscribeToHydration = () => () => undefined

function subscribeToConsent(onStoreChange: () => void) {
  window.addEventListener(CONSENT_CHANGE_EVENT, onStoreChange)
  return () => window.removeEventListener(CONSENT_CHANGE_EVENT, onStoreChange)
}

export function ConsentProvider({ children }: { children: ReactNode }) {
  const consent = useSyncExternalStore(
    subscribeToConsent,
    readConsent,
    getServerConsent,
  )
  const hydrated = useSyncExternalStore(
    subscribeToHydration,
    getClientHydration,
    getServerHydration,
  )
  const [preferencesOpen, setPreferencesOpen] = useState(false)

  useEffect(() => {
    const existing = readConsent()

    if (existing === 'accepted') {
      void applyConsent('accepted')
    } else if (existing === 'rejected') {
      void applyConsent('rejected')
    }

    const onOpenPreferences = () => setPreferencesOpen(true)

    window.addEventListener(OPEN_PREFERENCES_EVENT, onOpenPreferences)
    return () => {
      window.removeEventListener(OPEN_PREFERENCES_EVENT, onOpenPreferences)
    }
  }, [])

  const persistAndApply = useCallback(
    async (choice: ConsentChoice, clearIdentifiers: boolean) => {
      writeConsent(choice)
      await applyConsent(choice, { clearIdentifiers })
    },
    [],
  )

  const accept = useCallback(async () => {
    await persistAndApply('accepted', false)
  }, [persistAndApply])

  const reject = useCallback(async () => {
    const wasAccepted = consent === 'accepted'
    await persistAndApply('rejected', wasAccepted)
  }, [consent, persistAndApply])

  const setAnalyticsEnabled = useCallback(
    async (enabled: boolean) => {
      if (enabled) {
        await persistAndApply('accepted', false)
        return
      }
      const wasAccepted = consent === 'accepted'
      await persistAndApply('rejected', wasAccepted)
    },
    [consent, persistAndApply],
  )

  const value = useMemo<ConsentContextValue>(
    () => ({
      consent,
      consentLabel: consentLabel(consent),
      accept,
      reject,
      setAnalyticsEnabled,
      openPreferences: () => setPreferencesOpen(true),
      closePreferences: () => setPreferencesOpen(false),
      preferencesOpen,
    }),
    [accept, consent, preferencesOpen, reject, setAnalyticsEnabled],
  )

  return (
    <ConsentContextProvider value={value}>
      {children}
      {hydrated && consent === 'pending' ? <ConsentBanner /> : null}
      <PrivacyPreferencesModal />
    </ConsentContextProvider>
  )
}

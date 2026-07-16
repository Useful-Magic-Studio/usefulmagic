'use client'

import {
  createContext,
  useContext,
  type ReactNode,
} from 'react'
import type { ConsentState } from '@/lib/consent'

export type ConsentContextValue = {
  consent: ConsentState
  consentLabel: string
  accept: () => Promise<void>
  reject: () => Promise<void>
  setAnalyticsEnabled: (enabled: boolean) => Promise<void>
  openPreferences: () => void
  closePreferences: () => void
  preferencesOpen: boolean
}

export const ConsentContext = createContext<ConsentContextValue | null>(null)

export function useConsent() {
  const ctx = useContext(ConsentContext)
  if (!ctx) {
    throw new Error('useConsent must be used within ConsentProvider')
  }
  return ctx
}

export function ConsentContextProvider({
  value,
  children,
}: {
  value: ConsentContextValue
  children: ReactNode
}) {
  return (
    <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>
  )
}

'use client'

import { openPrivacyPreferences } from '@/lib/consent'

export function PrivacyPreferencesLink({
  className,
  children = 'Privacy Preferences',
}: {
  className?: string
  children?: string
}) {
  return (
    <button type="button" onClick={openPrivacyPreferences} className={className}>
      {children}
    </button>
  )
}

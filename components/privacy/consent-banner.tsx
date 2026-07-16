'use client'

import Link from 'next/link'
import { useConsent } from '@/components/privacy/consent-context'

export function ConsentBanner() {
  const { accept, reject, openPreferences } = useConsent()

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="consent-banner-title"
      aria-describedby="consent-banner-desc"
      className="fixed inset-x-0 bottom-0 z-100 border-t-2 border-[#2f4f4f] bg-[#f2f2da] p-4 shadow-[0_-4px_16px_rgba(0,0,0,0.12)] sm:p-5"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <h2
            id="consent-banner-title"
            className="mb-2 font-(family-name:--font-nunito-sans) text-[18px] font-bold text-[#2f4f4f]"
          >
            Privacy choices
          </h2>
          <p
            id="consent-banner-desc"
            className="font-(family-name:--font-nunito-sans) text-[15px] leading-relaxed text-[#2f4f4f]"
          >
            Useful Magic uses optional analytics and session recording to
            understand how the site is used and diagnose problems. You can
            accept or reject this tracking.{' '}
            <Link
              href="/privacy"
              className="underline underline-offset-2 hover:text-[#6f42c1]"
            >
              Privacy Policy
            </Link>
            {' · '}
            <button
              type="button"
              onClick={openPreferences}
              className="underline underline-offset-2 hover:text-[#6f42c1]"
            >
              Privacy Preferences
            </button>
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <button
            type="button"
            onClick={() => void reject()}
            className="min-h-11 min-w-34 rounded-full border-[3px] border-[#6f42c1] bg-transparent px-6 py-2 font-(family-name:--font-abeezee) text-[18px] text-[#2f4f4f] transition-colors hover:bg-[#6f42c1]/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6f42c1]"
          >
            Reject
          </button>
          <button
            type="button"
            onClick={() => void accept()}
            className="min-h-11 min-w-34 rounded-full border border-[#f2f2da] bg-[#6f42c1] px-6 py-2 font-(family-name:--font-abeezee) text-[18px] text-white transition-colors hover:bg-[#5a35a0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6f42c1]"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}

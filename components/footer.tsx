'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  trackContactConversion,
  trackNewsletterSignup,
  trackPrimaryCta,
} from '@/lib/analytics'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Kit (ConvertKit) embeds submit via JS; listen for form submit without reading field values.
  useEffect(() => {
    const onSubmit = (event: Event) => {
      const target = event.target
      if (!(target instanceof HTMLFormElement)) return
      if (!target.hasAttribute('data-sv-form')) return
      trackNewsletterSignup()
    }

    document.addEventListener('submit', onSubmit, true)
    return () => document.removeEventListener('submit', onSubmit, true)
  }, [])

  return (
    <footer className="bg-[#f1ab37] border-t-2 border-[#2f4f4f] px-6 py-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-6">
        {/* Logo */}
        <div className="shrink-0">
          <Image
            src="/images/logo.png?v=20260615"
            alt="Useful Magic Studio"
            width={120}
            height={120}
            className="h-20 w-auto"
          />
        </div>
        {/* Contact Us button */}
        <a
          href="mailto:sarah@usefulmagicstudio.com"
          onClick={() => {
            trackPrimaryCta('contact_us_footer')
            trackContactConversion()
          }}
          className="bg-[#6f42c1] text-white font-(family-name:--font-abeezee) text-[24px] px-8 py-2.5 rounded-full border border-[#f2f2da] shadow-[0px_4px_2px_rgba(0,0,0,0.25),4px_4px_2px_rgba(0,0,0,0.25)] hover:bg-[#5a35a0] transition-all"
        >
          Contact Us
        </a>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="flex flex-col items-center gap-2 group"
          aria-label="Back to top"
        >
          <div className="w-[62px] h-[62px] bg-[#f1ab37] border-[3px] border-[#6f42c1] rounded-[15px] flex items-center justify-center group-hover:brightness-95 transition-all">
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#6f42c1"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </div>
          <span className="font-(family-name:--font-abeezee) text-[24px] text-[#6f42c1]">
            Back to Top
          </span>
        </button>
      </div>
      <div className="max-w-7xl mx-auto mt-6 flex justify-center">
        <Link
          href="/privacy"
          className="font-(family-name:--font-abeezee) text-[16px] text-[#2f4f4f] underline underline-offset-2 hover:text-[#6f42c1] transition-colors"
        >
          Privacy Policy
        </Link>
      </div>
      <script async data-uid="7e1bfa35a1" src="https://usefulmagicstudio.kit.com/7e1bfa35a1/index.js"></script>
    </footer>
  )
}

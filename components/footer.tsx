'use client'

import Image from 'next/image'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#f1ab37] border-t-2 border-[#2f4f4f] px-6 py-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-6">
        {/* Logo */}
        <div className="shrink-0">
          <Image
            src="/images/logo.png"
            alt="Useful Magic Studio"
            width={120}
            height={120}
            className="h-20 w-auto"
          />
        </div>

        {/* Contact Us button */}
        <a
          href="mailto:sarah@usefulmagicstudio.com"
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
    </footer>
  )
}

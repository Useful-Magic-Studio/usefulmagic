'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  ClarityIcon,
  ConfidenceIcon,
  GrowthIcon,
  PeopleIcon,
} from '@/components/pillar-icons'
import {
  trackContactConversion,
  trackPrimaryCta,
} from '@/lib/analytics'
import { NewsletterForm } from '@/components/newsletter-form'
import { useConsent } from '@/components/privacy/consent-context'

const closing = [
  {
    title: 'Growth',
    body: 'With clarity and confidence, your organization can adapt, scale, and grow with purpose.',
    icon: <GrowthIcon />,
    titleClassName: 'text-[#59339d]',
  },
  {
    title: 'Confidence',
    body: 'Clear systems build trust and consistency-giving your team the confidence to work smarter.',
    icon: <ConfidenceIcon />,
    titleClassName: 'text-[#2f4f4f]',
  },
  {
    title: 'Clarity',
    body: 'We create clarity by untangling complexity and designing intuitive systems that make work flow.',
    icon: <ClarityIcon />,
    titleClassName: 'text-[#59339d]',
  },
  {
    title: 'People',
    body: 'We start with people. Understanding your team, their needs, and the work that matters.',
    icon: <PeopleIcon />,
    titleClassName: 'text-[#2f4f4f]',
  },
]

export function Footer() {
  const { openPreferences } = useConsent()

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' })
  }

  return (
    <footer className="bg-[#e9e9e6]">
      <div className="mx-auto w-full max-w-[1224px] px-6 pt-10">
        <ul className="grid list-none grid-cols-1 gap-10 sm:grid-cols-2 xl:grid-cols-4">
          {closing.map((item) => (
            <li key={item.title} className="mx-auto flex max-w-[216px] flex-col items-center text-center">
              {item.icon}
              <p className={`mt-2 font-(family-name:--font-nunito-sans) text-[36px] leading-[50px] font-bold ${item.titleClassName}`}>
                {item.title}
              </p>
              <p className="font-(family-name:--font-abeezee) text-[20px] leading-normal text-[#2f4f4f]">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10 border-2 border-[#2f4f4f] bg-[#f1ab37]">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 sm:grid-cols-3 lg:min-h-[178px] lg:grid-cols-[minmax(0,1fr)_175px_175px_175px]">
          <div className="col-span-2 flex items-center gap-6 px-8 py-4 sm:col-span-1">
            <Image
              src="/images/home/footer-mark.svg"
              alt="Useful Magic Studio"
              width={149}
              height={156}
            />
            <p className="font-(family-name:--font-abeezee) text-[16px] leading-snug text-black lg:text-[18px]">
              © 2026 Useful Magic Studio. Crafted with care.
            </p>
          </div>
          <Link
            href="/privacy"
            className="flex items-center justify-center border-l-2 border-[#2f4f4f] px-3 text-center font-(family-name:--font-league-spartan) text-[22px] leading-[28px] text-[#2f4f4f] shadow-[inset_8px_-8px_4px_0px_rgba(255,255,246,0.25)] focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#59339d] lg:text-[25px]"
          >
            Privacy Policy
          </Link>
          <a
            href="mailto:sarah@usefulmagicstudio.com"
            onClick={() => {
              trackPrimaryCta('contact_us_footer')
              trackContactConversion()
            }}
            className="flex items-center justify-center border-l-2 border-[#2f4f4f] bg-[#59339d] px-3 text-center font-(family-name:--font-league-spartan) text-[22px] leading-[28px] text-[#fffff6] shadow-[inset_8px_-8px_4px_0px_rgba(255,255,246,0.25)] focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#fffff6] lg:text-[25px]"
          >
            Contact
            <br />
            Us
          </a>
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center justify-center gap-2 border-l-2 border-[#2f4f4f] bg-[#2f4f4f] px-3 text-center font-(family-name:--font-league-spartan) text-[22px] leading-[28px] text-[#fffff6] shadow-[inset_8px_-8px_4px_0px_rgba(255,255,246,0.25)] focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#f1ab37] lg:text-[25px]"
          >
            <span>
              Back to
              <br />
              Top
            </span>
            <Image
              src="/images/home/footer-arrow.svg"
              alt=""
              width={50}
              height={29}
              className="-rotate-90"
              aria-hidden
            />
          </button>
        </div>
      </div>

      <div className="bg-[#f1ab37] px-6 py-4 text-center">
        <button
          type="button"
          onClick={openPreferences}
          className="font-(family-name:--font-abeezee) text-[16px] text-[#2f4f4f] underline underline-offset-2 hover:text-[#59339d] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#59339d]"
        >
          Privacy Preferences
        </button>
      </div>

      <NewsletterForm />
    </footer>
  )
}

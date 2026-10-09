'use client'

import Image from 'next/image'
import { CtaPill } from '@/components/cta-pill'
import { HeroInfo } from '@/components/hero-info'
import { trackPrimaryCta } from '@/lib/analytics'

export function HeroSection() {
  return (
    <section id="home" className="scroll-mt-25 bg-[#e9e9e6] px-6 pt-28 lg:px-16 lg:pt-35">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-8 lg:flex-row lg:items-center lg:gap-10">
        <Image
          src="/images/home/hero-mark.svg"
          alt="Useful Magic Studio"
          width={295}
          height={308}
          className="h-auto w-55 shrink-0 lg:w-73.75"
        />
        <div className="max-w-167.25 text-center lg:text-left">
          <h1 className="font-(family-name:--font-nunito-sans) text-[40px] leading-[1.15] font-bold text-[#2f4f4f] [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)] lg:text-[48px] lg:leading-12.5">
            Helping Growing Businesses Work Better
          </h1>
          <p className="mt-4 font-(family-name:--font-nunito-sans) text-[24px] leading-snug font-normal text-[#2f4f4f] lg:text-[32px] lg:leading-12.5">
            We research how your team works and design better workflows, tools, and systems.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-12 w-full max-w-306.5">
        <HeroInfo />
      </div>

      <div className="mx-auto mt-10 flex w-full max-w-7xl justify-center">
        <CtaPill
          href="#contact"
          onClick={() => trackPrimaryCta('work_with_us')}
        >
          Work With Us
        </CtaPill>
      </div>
    </section>
  )
}

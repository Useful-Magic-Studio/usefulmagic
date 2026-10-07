'use client'

import { CtaPill } from '@/components/cta-pill'
import { HeroInfo } from '@/components/hero-info'
import { trackPrimaryCta } from '@/lib/analytics'

export function HeroSection() {
  return (
    <section id="home" className="scroll-mt-[100px] bg-[#e9e9e6] px-6 pt-[112px] lg:px-16 lg:pt-[140px]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-8 lg:flex-row lg:items-center lg:gap-10">
        <img
          src="/images/home/hero-mark.svg"
          alt="Useful Magic Studio"
          width={295}
          height={308}
          className="h-auto w-[220px] shrink-0 lg:w-[295px]"
        />
        <div className="max-w-[669px] text-center lg:text-left">
          <h1 className="font-(family-name:--font-nunito-sans) text-[40px] leading-[1.15] font-bold text-[#2f4f4f] [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)] lg:text-[48px] lg:leading-[50px]">
            Helping Growing Businesses Work Better
          </h1>
          <p className="mt-4 font-(family-name:--font-nunito-sans) text-[24px] leading-snug font-normal text-[#2f4f4f] lg:text-[32px] lg:leading-[50px]">
            We research how your team works and design better workflows, tools, and systems.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-12 w-full max-w-[1226px]">
        <HeroInfo />
      </div>

      <div className="mx-auto mt-10 flex w-full max-w-[1280px] justify-center">
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

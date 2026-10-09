'use client'

import Image from 'next/image'
import { CtaPill } from '@/components/cta-pill'
import { trackPrimaryCta } from '@/lib/analytics'

type Step = {
  title: string
  subtitle: string
  body: string
  payment?: string
  icon: string
  iconWidth: number
  iconHeight: number
  titleColor: string
}

const arcSteps: Step[] = [
  {
    title: 'Initial Contact',
    subtitle: 'Consultation',
    body: 'We learn about your goals, challenges, and how your team works so we can understand what you need.',
    payment: 'Proposal / Deposit',
    icon: '/images/journey/initial-contact.png',
    iconWidth: 98,
    iconHeight: 98,
    titleColor: '#59339d',
  },
  {
    title: 'Untangle',
    subtitle: 'Research + Analysis',
    body: 'We learn from your team, examine how work happens, and identify needs, friction, and opportunities.',
    icon: '/images/journey/untangle.png',
    iconWidth: 94,
    iconHeight: 94,
    titleColor: '#128a96',
  },
  {
    title: 'Ways Forward',
    subtitle: 'Recommendation Options',
    body: 'We recommend a direction with three levels of support to fit your needs and budget.',
    payment: '1st Payment Due',
    icon: '/images/journey/ways-forward.png',
    iconWidth: 89,
    iconHeight: 89,
    titleColor: '#3f7d22',
  },
]

const pathSteps: Step[] = [
  {
    title: 'Build',
    subtitle: 'Prototype + Test',
    body: 'We create the solution, test it with the people who will use it, and refine it based on what we learn.',
    icon: '/images/journey/build.svg',
    iconWidth: 99,
    iconHeight: 101,
    titleColor: '#8a6b12',
  },
  {
    title: 'Refine',
    subtitle: 'Review + Adjust',
    body: 'We review the solution with your team and make final adjustments before implementation.',
    payment: '2nd Payment Due',
    icon: '/images/journey/refine.png',
    iconWidth: 98,
    iconHeight: 98,
    titleColor: '#e06a1a',
  },
  {
    title: 'Deliver',
    subtitle: 'Training + Handoff',
    body: "We provide documentation and training so your team is ready to use what we've built.",
    payment: 'Final Payment Due',
    icon: '/images/journey/deliver.png',
    iconWidth: 98,
    iconHeight: 98,
    titleColor: '#d4538a',
  },
  {
    title: 'Compass Consult',
    subtitle: 'Ongoing Support',
    body: 'We monitor and improve your systems as your needs change.',
    icon: '/images/journey/compass.png',
    iconWidth: 98,
    iconHeight: 98,
    titleColor: '#7a4db8',
  },
]

function JourneyCard({ step }: { step: Step }) {
  return (
    <article className="flex w-full max-w-62.5 flex-col items-center">
      <Image
        src={step.icon}
        alt=""
        width={step.iconWidth}
        height={step.iconHeight}
        className="relative z-10 -mb-12"
        aria-hidden
      />
      <div className="w-full rounded-t-[16px] border-2 border-b-0 border-[#59339d] bg-[#fffff6] px-4 pt-12 pb-4 text-center">
        <h3
          className="font-(family-name:--font-nunito-sans) text-[26px] leading-tight font-bold"
          style={{ color: step.titleColor }}
        >
          {step.title}
        </h3>
        <p className="mt-1 font-(family-name:--font-nunito-sans) text-[22px] leading-tight font-bold text-[#1c2f2f]">
          {step.subtitle}
        </p>
        <p className="mt-3 font-(family-name:--font-abeezee) text-[16px] leading-snug text-[#2f4f4f]">
          {step.body}
        </p>
      </div>
      {step.payment ? (
        <div className="flex min-h-18 w-full items-center justify-center bg-[#59339d] px-3 py-3 text-center font-(family-name:--font-nunito-sans) text-[20px] leading-tight font-bold text-white [clip-path:polygon(0_0,100%_0,100%_58%,50%_100%,0_58%)]">
          {step.payment}
        </div>
      ) : (
        <div className="h-18 w-full border-x-2 border-b-2 border-[#59339d] bg-[#fffff6] [clip-path:polygon(0_0,100%_0,100%_58%,50%_100%,0_58%)]" />
      )}
    </article>
  )
}

function StepRow({
  kicker,
  label,
  steps,
  timeline,
  timelineWidth,
}: {
  kicker: string
  label: string
  steps: Step[]
  timeline: string
  timelineWidth: number
}) {
  return (
    <div>
      <p className="font-(family-name:--font-nunito-sans) text-[40px] leading-none font-bold text-[#2f4f4f] lg:text-[48px]">
        {kicker}
      </p>
      <p className="mt-1 font-(family-name:--font-nunito-sans) text-[28px] leading-tight font-bold text-[#59339d] lg:text-[36px]">
        {label}
      </p>
      <div className="mt-8 flex flex-col items-center gap-8 lg:flex-row lg:items-stretch lg:justify-between">
        {steps.map((step) => (
          <JourneyCard key={step.title} step={step} />
        ))}
      </div>
      <Image
        src={timeline}
        alt=""
        width={timelineWidth}
        height={40}
        className="mt-6 hidden h-auto w-full lg:block"
        aria-hidden
      />
    </div>
  )
}

export function JourneySection() {
  return (
    <section id="how-we-work" className="scroll-mt-25 bg-[#e9e9e6] px-6 py-8 lg:px-16">
      <div className="mx-auto w-full max-w-7xl">
        <div className="text-center">
          <h2 className="font-(family-name:--font-nunito-sans) text-[40px] leading-tight font-bold text-[#59339d] lg:text-[48px]">
            Useful Magic Journey
          </h2>
          <p className="mt-2 font-(family-name:--font-nunito-sans) text-[32px] leading-tight font-bold text-[#2f4f4f] lg:text-[36px]">
            How We Work
          </p>
        </div>

        <div className="mt-10">
          <StepRow
            kicker="Arc"
            label="Research ✧ Understand ✧ Plan"
            steps={arcSteps}
            timeline="/images/home/timeline-arc.svg"
            timelineWidth={1266}
          />
        </div>
        <div className="mt-16">
          <StepRow
            kicker="Path"
            label="Build ✧ Test ✧ Deliver"
            steps={pathSteps}
            timeline="/images/home/timeline-path.svg"
            timelineWidth={1282}
          />
        </div>

        <div className="mt-12 max-w-180">
          <h3 className="font-(family-name:--font-nunito-sans) text-[36px] leading-tight font-bold text-[#2f4f4f] lg:text-[40px]">
            Let&apos;s help your team work better
          </h3>
          <div className="mt-6">
            <CtaPill href="#contact" onClick={() => trackPrimaryCta('work_with_us')}>
              Work With Us
            </CtaPill>
          </div>
        </div>
      </div>
    </section>
  )
}

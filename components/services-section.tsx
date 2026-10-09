'use client'

import { CtaPill } from '@/components/cta-pill'
import { SectionHeading } from '@/components/section-heading'
import { trackPrimaryCta } from '@/lib/analytics'

const services = [
  {
    title: '✧ UX Research',
    tagline: 'Understand what people actually need.',
    body: 'We learn from the people who use your systems to uncover needs, friction, and opportunities.',
    width: 'side',
  },
  {
    title: '✧ Workflow Design',
    tagline: 'Make everyday work simpler and clearer.',
    body: 'We map how work happens, find where it gets stuck, and design a better way forward.',
    width: 'side',
  },
  {
    title: '✧ Front-end Design',
    tagline: 'From design to working interface.',
    body: 'We design intuitive interfaces and carry them through front-end engineering and implementation.',
    width: 'center',
  },
  {
    title: '✧ Internal Systems',
    tagline: 'Build tools for the work behind the scenes.',
    body: 'We design practical internal tools and systems around how your team actually works.',
    width: 'side',
  },
  {
    title: '✧ AI Strategy',
    tagline: 'Use AI thoughtfully, where it truly helps.',
    body: 'We find where AI can reduce busywork and support your team while keeping human judgment at the center.',
    width: 'side',
  },
  {
    title: '✧ Workflow Training',
    tagline: 'Build confidence in new ways of working.',
    body: 'We help your team understand and adopt the best tools, systems, and workflows.',
    width: 'center',
  },
] as const

function ServiceBlock({
  title,
  tagline,
  body,
  wide = false,
}: {
  title: string
  tagline: string
  body: string
  wide?: boolean
}) {
  return (
    <article className={wide ? 'mx-auto w-full max-w-183.25' : 'w-full'}>
      <div className="rounded-[10px] bg-[#59339d] px-6 py-4">
        <h3 className="font-(family-name:--font-nunito-sans) text-[32px] leading-12.5 font-bold text-white lg:text-[36px]">
          {title}
        </h3>
        <p className="font-(family-name:--font-nunito-sans) text-[26px] leading-[1.3] font-bold text-white lg:text-[30px] lg:leading-12.5">
          {tagline}
        </p>
      </div>
      <p className="mt-2 px-2 font-(family-name:--font-abeezee) text-[24px] leading-[1.4] text-[#2f4f4f] lg:text-[28px] lg:leading-12.5">
        {body}
      </p>
    </article>
  )
}

export function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-25 bg-[#e9e9e6] px-6 py-8 lg:px-16">
      <div className="mx-auto w-full max-w-7xl">
        <SectionHeading
          title="Useful Services"
          subtitle="Practical ways we help your team work better."
        />

        <div className="mt-10 flex flex-col gap-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <ServiceBlock {...services[0]} />
            <ServiceBlock {...services[1]} />
          </div>
          <ServiceBlock {...services[2]} wide />
          <div className="grid gap-8 lg:grid-cols-2">
            <ServiceBlock {...services[3]} />
            <ServiceBlock {...services[4]} />
          </div>
          <ServiceBlock {...services[5]} wide />
        </div>

        <div className="mt-12 max-w-180">
          <h3 className="font-(family-name:--font-nunito-sans) text-[36px] leading-tight font-bold text-[#2f4f4f] lg:text-[40px]">
            Not sure where to start?
          </h3>
          <p className="mt-3 max-w-160 font-(family-name:--font-abeezee) text-[24px] leading-snug text-[#2f4f4f] lg:text-[28px]">
            Tell us what&apos;s getting in the way. We&apos;ll help you figure out what comes next.
          </p>
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

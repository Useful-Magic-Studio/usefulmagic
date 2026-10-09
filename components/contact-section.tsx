'use client'

import { CtaPill } from '@/components/cta-pill'
import { trackContactConversion, trackPrimaryCta } from '@/lib/analytics'

function SideCard({ title, body }: { title: string; body: string }) {
  return (
    <article className="w-full max-w-[350px] overflow-hidden rounded-[10px] border-2 border-[#2f4f4f]">
      <h3 className="bg-[#2f4f4f] px-4 py-3 text-center font-(family-name:--font-nunito-sans) text-[32px] leading-[50px] font-bold text-[#e9e9e6] lg:text-[36px]">
        {title}
      </h3>
      <p className="bg-[#fffff6] px-6 py-8 text-center font-(family-name:--font-abeezee) text-[24px] leading-normal text-[#2f4f4f] lg:min-h-[250px] lg:text-[28px]">
        {body}
      </p>
    </article>
  )
}

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-[100px] bg-[#e9e9e6] px-6 py-8 lg:px-16" data-sentry-block>
      <div className="mx-auto w-full max-w-[1280px] text-center">
        <h2 className="font-(family-name:--font-nunito-sans) text-[36px] leading-tight font-bold text-[#2f4f4f] lg:text-[48px]">
          Complexity is inevitable. Confusion isn&apos;t.
        </h2>
        <p className="mx-auto mt-4 max-w-[1100px] font-(family-name:--font-nunito-sans) text-[24px] leading-snug text-[#2f4f4f] lg:text-[32px] lg:leading-[50px]">
          We partner with growing businesses to untangle complexity, create clarity, and build systems that empower people to do their best work.
        </p>

        <div className="mt-12 grid items-end gap-8 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:gap-6">
          <div className="flex justify-center lg:justify-end">
            <SideCard
              title="Your Challenge"
              body="Growth brings complexity. Workflows get harder to manage, and once-useful systems start getting in the way."
            />
          </div>

          <div className="flex flex-col items-center">
            <article className="relative w-full max-w-[350px] overflow-hidden rounded-[10px] border-2 border-[#2f4f4f]">
              <img
                src="/images/home/partnership-sparkle.png"
                alt=""
                width={80}
                height={80}
                className="absolute top-2 left-2 size-[64px]"
                aria-hidden
              />
              <h3 className="bg-[#59339d] px-8 py-4 text-center font-(family-name:--font-nunito-sans) text-[32px] leading-[50px] font-bold text-[#e9e9e6] lg:text-[36px]">
                Our Partnership
              </h3>
              <p className="bg-[#fffff6] px-6 py-8 text-center font-(family-name:--font-abeezee) text-[24px] leading-normal text-[#2f4f4f] lg:text-[28px]">
                Together, we turn complexity into clarity through research, design, and systems built around your people.
              </p>
            </article>
            <img
              src="/images/home/partnership-flask.svg"
              alt=""
              width={154}
              height={305}
              className="-mt-6"
              aria-hidden
            />
          </div>

          <div className="flex justify-center lg:justify-start">
            <SideCard
              title="Your Growth"
              body="Clearer systems help your team work with confidence and focus on what matters most."
            />
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center">
          <h3 className="font-(family-name:--font-nunito-sans) text-[36px] leading-tight font-bold text-[#2f4f4f] lg:text-[40px]">
            Let&apos;s create clarity together
          </h3>
          <p className="mt-3 max-w-[720px] font-(family-name:--font-abeezee) text-[22px] leading-snug text-[#2f4f4f] lg:text-[28px]">
            Tell us what&apos;s getting in the way. We&apos;d love to learn about your business and help you figure out what comes next.
          </p>
          <div className="mt-6 w-full max-w-[624px]">
            <CtaPill
              href="mailto:hello@usefulmagicstudio.com"
              onClick={() => {
                trackPrimaryCta('work_with_us')
                trackContactConversion()
              }}
            >
              Work With Us
            </CtaPill>
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

import Image from 'next/image'
import { CtaPill } from '@/components/cta-pill'
import { trackContactConversion, trackPrimaryCta } from '@/lib/analytics'

const sarahBio = [
  'Sarah is a strategist, engineer, and systems thinker who helps organizations turn messy workflows into practical, human-centered systems.',
  'She brings experience across product strategy, software development, operations, and AI-enabled systems, with a particular talent for seeing how people, processes, and technology fit together. Her work is grounded in a simple belief: the best technology should reduce friction, preserve human judgment, and make good work easier to do.',
  'As co-founder of Useful Magic, Sarah helps clients identify what is slowing them down, design better ways of working, and build solutions that fit their real needs. She is tool-agnostic, deeply curious, and less interested in chasing the latest software trend than in creating systems that are useful, sustainable, and built to evolve.',
]

const feyBio = [
  'Fey is a UX researcher, designer, and systems thinker who believes every great solution begins with understanding people. She helps organizations untangle complexity by uncovering how teams work and identifying hidden opportunities for improvement.',
  'Her background in interactive theater and community leadership shaped a deeply collaborative approach to research, grounded in empathy, curiosity, and listening first. Through research, systems thinking, and human-centered design, she creates intuitive experiences that help people do their best work.',
  "As co-founder of Useful Magic Studio, Fey partners with clients to uncover what teams truly need before designing systems that feel natural from the very beginning. Whether she's conducting research, facilitating workshops, or exploring thoughtful uses of AI, her goal is always the same: create clarity that empowers people, builds confidence, and helps organizations grow.",
]

function Portrait({
  name,
  role,
  src,
}: {
  name: string
  role: string
  src: string
}) {
  return (
    <div className="flex w-67.5 shrink-0 flex-col items-center text-center">
      <p className="font-(family-name:--font-nunito-sans) text-[40px] leading-12.5 font-bold text-[#2f4f4f]">
        {name}
      </p>
      <p className="font-(family-name:--font-nunito-sans) text-[24px] leading-snug font-bold text-[#59339d]">
        {role}
      </p>
      <Image
        src={src}
        alt={`Illustrated portrait of ${name}`}
        width={200}
        height={200}
        className="mt-2 size-50 rounded-full object-cover"
      />
    </div>
  )
}

function Bio({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="max-w-227.75 space-y-4 font-(family-name:--font-abeezee) text-[18px] leading-relaxed text-[#2f4f4f] lg:text-[20px]">
      {paragraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 24)}>{paragraph}</p>
      ))}
    </div>
  )
}

export function TeamSection() {
  return (
    <section id="team" className="scroll-mt-25 bg-[#e9e9e6] px-6 py-8 lg:px-16">
      <div className="mx-auto w-full max-w-7xl">
        <div className="text-center">
          <h2 className="font-(family-name:--font-nunito-sans) text-[40px] leading-tight font-bold text-[#59339d] lg:text-[48px]">
            The People Behind the Magic
          </h2>
          <p className="mt-2 font-(family-name:--font-nunito-sans) text-[28px] leading-tight font-bold text-[#2f4f4f] lg:text-[36px]">
            Meet the people who turn complexity into clarity.
          </p>
        </div>

        <div className="mt-12 flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:gap-10">
          <Portrait name="Sarah" role="Lead Engineer" src="/images/team/sarah.png" />
          <Bio paragraphs={sarahBio} />
        </div>

        <div className="relative mx-auto my-12 max-w-226.75 border-y-2 border-[#59339d] px-14 py-6 text-center">
          <Image
            src="/images/home/sparkle.svg"
            alt=""
            width={39}
            height={39}
            className="absolute top-1/2 left-2 -translate-y-1/2"
            aria-hidden
          />
          <Image
            src="/images/home/sparkle.svg"
            alt=""
            width={39}
            height={39}
            className="absolute top-1/2 right-2 -translate-y-1/2"
            aria-hidden
          />
          <p className="font-(family-name:--font-nunito-sans) text-[28px] leading-snug font-bold text-[#2f4f4f] lg:text-[32px]">
            Together, we combine research, design, and engineering to create better systems
          </p>
        </div>

        <div className="flex flex-col-reverse items-center gap-8 lg:flex-row lg:items-start lg:gap-10">
          <Bio paragraphs={feyBio} />
          <Portrait name="Fey" role="Lead UX Researcher" src="/images/team/fey.png" />
        </div>

        <div className="mt-14 flex flex-col items-center text-center">
          <h3 className="max-w-140 font-(family-name:--font-nunito-sans) text-[36px] leading-tight font-bold text-[#2f4f4f] lg:text-[40px]">
            Let&apos;s build something your team will love
          </h3>
          <div className="mt-6 w-full max-w-156">
            <CtaPill
              href="mailto:hello@usefulmagicstudio.com"
              onClick={() => {
                trackPrimaryCta('get_in_touch')
                trackContactConversion()
              }}
            >
              Get in Touch
            </CtaPill>
          </div>
        </div>
      </div>
    </section>
  )
}

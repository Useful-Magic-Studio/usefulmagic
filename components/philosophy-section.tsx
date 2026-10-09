import { PhilosophyCard } from '@/components/philosophy-card'
import { SectionHeading } from '@/components/section-heading'

const cards = [
  {
    title: 'Human Centered',
    tagline: 'People come first.',
    description:
      'We design around the people who use the system, making work easier—not harder.',
    iconSrc: '/images/philosophy/icon-human-centered.png',
  },
  {
    title: 'Purposefully Simple',
    tagline: 'Clarity comes from simplicity.',
    description:
      'We remove unnecessary complexity so your team can focus on the work that matters.',
    iconSrc: '/images/philosophy/icon-purposefully-simple.png',
  },
  {
    title: 'Wisely Applied',
    tagline: 'Solve the right problem first.',
    description:
      'We choose tools and processes based on what genuinely helps your team.',
    iconSrc: '/images/philosophy/icon-wisely-applied.png',
  },
  {
    title: 'Thoughtful Technology',
    tagline: 'Technology should have a purpose.',
    description:
      'We use AI and automation to reduce busywork while keeping human judgment at the center.',
    iconSrc: '/images/philosophy/icon-thoughtful-technology.png',
  },
]

export function PhilosophySection() {
  return (
    <section id="values" className="scroll-mt-[100px] bg-[#e9e9e6] px-6 py-8 lg:px-16">
      <div className="mx-auto w-full max-w-[1280px]">
        <SectionHeading
          title="Our Design Philosophy"
          subtitle="Helping people thrive through better systems."
        />

        <div className="mt-10 flex flex-col items-center gap-8 lg:hidden">
          {cards.map((card) => (
            <PhilosophyCard key={card.title} {...card} />
          ))}
        </div>

        <div className="mt-12 hidden lg:block">
          <div className="flex items-start justify-between gap-8">
            <PhilosophyCard {...cards[0]} />
            <PhilosophyCard {...cards[1]} />
          </div>
          <div className="mt-8 flex items-start justify-center gap-16 pl-16">
            <PhilosophyCard {...cards[2]} />
            <PhilosophyCard {...cards[3]} />
          </div>
        </div>
      </div>
    </section>
  )
}

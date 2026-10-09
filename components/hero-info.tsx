import {
  ClarityIcon,
  ConfidenceIcon,
  GrowthIcon,
  PeopleIcon,
} from '@/components/pillar-icons'
import type { ReactNode } from 'react'

const pillars: {
  title: string
  body: string
  titleClassName: string
  icon: ReactNode
}[] = [
  {
    title: 'People',
    body: 'We start with your team, their needs, and the work that matters.',
    titleClassName: 'text-[#2f4f4f]',
    icon: <PeopleIcon />,
  },
  {
    title: 'Clarity',
    body: 'We untangle complexity and design systems that make work flow.',
    titleClassName: 'text-[#59339d]',
    icon: <ClarityIcon />,
  },
  {
    title: 'Confidence',
    body: 'Clear systems help your team work with confidence.',
    titleClassName: 'text-[#2f4f4f]',
    icon: <ConfidenceIcon />,
  },
  {
    title: 'Growth',
    body: 'Better systems help your organization adapt, scale, and grow.',
    titleClassName: 'text-[#59339d]',
    icon: <GrowthIcon />,
  },
]

export function HeroInfo() {
  return (
    <ul className="grid list-none grid-cols-1 gap-10 sm:grid-cols-2 xl:grid-cols-4">
      {pillars.map((pillar) => (
        <li key={pillar.title} className="mx-auto flex max-w-54 flex-col items-center text-center">
          {pillar.icon}
          <p
            className={`mt-2 font-(family-name:--font-nunito-sans) text-[36px] leading-12.5 font-bold ${pillar.titleClassName}`}
          >
            {pillar.title}
          </p>
          <p className="font-(family-name:--font-abeezee) text-[24px] leading-normal text-[#2f4f4f]">
            {pillar.body}
          </p>
        </li>
      ))}
    </ul>
  )
}

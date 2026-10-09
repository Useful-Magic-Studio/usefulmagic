'use client'

import type { ReactNode } from 'react'

type CtaPillProps = {
  href: string
  children: ReactNode
  onClick?: () => void
  className?: string
}

export function CtaPill({ href, children, onClick, className = '' }: CtaPillProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`inline-flex min-h-17.5 w-full max-w-156 items-center justify-center rounded-[50px] border-3 border-solid border-[#59339d] bg-[#f1ab37] px-8 py-2 text-center font-(family-name:--font-abeezee) text-[30px] leading-none text-[#1c2f2f] shadow-[4px_4px_2px_rgba(0,0,0,0.25)] transition-[filter] hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#59339d] sm:text-[32px] ${className}`}
    >
      {children}
    </a>
  )
}

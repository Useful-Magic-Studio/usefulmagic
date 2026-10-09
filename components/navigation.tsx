'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { trackPrimaryCta } from '@/lib/analytics'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Values', href: '#values' },
  { label: 'Services', href: '#services' },
  { label: 'How We Work', href: '#how-we-work' },
  { label: 'Team', href: '#team' },
]

const sectionIds = [...navItems.map((item) => item.href.slice(1)), 'contact']

function scrollToId(id: string) {
  const element = document.getElementById(id)
  if (!element) return
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  element.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' })
}

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120

      for (const section of sectionIds) {
        const element = document.getElementById(section)
        if (!element) continue
        const { offsetTop, offsetHeight } = element
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section)
          break
        }
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    scrollToId(href.slice(1))
  }

  return (
    <header className="fixed top-0 right-0 left-0 z-50">
      <nav aria-label="Primary" className="border-2 border-[#1c2f2f] bg-[#f1ab37]">
        <div className="mx-auto hidden h-25 max-w-360 lg:grid lg:grid-cols-[390px_repeat(6,minmax(0,1fr))]">
          <a
            href="#home"
            onClick={(event) => {
              event.preventDefault()
              handleNavClick('#home')
            }}
            className="flex items-center px-5.5 focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-[#1c2f2f]"
          >
            <Image
              src="/images/home/hero-mark.svg"
              alt="Useful Magic"
              width={295}
              height={308}
              className="h-22 w-auto"
            />
          </a>
          {navItems.map((item) => {
            const active = activeSection === item.href.slice(1)
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={active ? 'true' : undefined}
                onClick={(event) => {
                  event.preventDefault()
                  handleNavClick(item.href)
                }}
                className="flex items-center justify-center border-l border-black px-2 text-center font-(family-name:--font-league-spartan) text-[28px] leading-[1.05] font-normal text-[#2f4f4f] shadow-[inset_10px_-10px_4px_0px_rgba(255,255,246,0.25)] focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-[#59339d] xl:text-[36px]"
              >
                {item.label}
              </a>
            )
          })}
          <a
            href="#contact"
            aria-current={activeSection === 'contact' ? 'true' : undefined}
            onClick={(event) => {
              event.preventDefault()
              trackPrimaryCta('contact_us_nav')
              handleNavClick('#contact')
            }}
            className="flex items-center justify-center border-l border-black bg-[#59339d] px-2 text-center font-(family-name:--font-league-spartan) text-[28px] leading-[1.05] font-normal text-[#fffff6] shadow-[inset_10px_-10px_4px_0px_rgba(255,255,246,0.25)] focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-[#fffff6] xl:text-[36px]"
          >
            Contact
            <br />
            Us
          </a>
        </div>

        <div className="mx-auto flex h-18 max-w-360 items-center justify-between px-4 lg:hidden">
          <a
            href="#home"
            onClick={(event) => {
              event.preventDefault()
              handleNavClick('#home')
            }}
            className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1c2f2f]"
          >
            <Image
              src="/images/home/hero-mark.svg"
              alt="Useful Magic"
              width={295}
              height={308}
              className="h-16 w-auto"
            />
          </a>
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="p-2 text-[#2f4f4f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1c2f2f]"
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>

        {isOpen ? (
          <div className="border-t border-[#1c2f2f] px-4 py-4 lg:hidden">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(event) => {
                    event.preventDefault()
                    handleNavClick(item.href)
                  }}
                  className="font-(family-name:--font-league-spartan) text-[22px] text-[#2f4f4f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#59339d]"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(event) => {
                  event.preventDefault()
                  trackPrimaryCta('contact_us_nav')
                  handleNavClick('#contact')
                }}
                className="font-(family-name:--font-league-spartan) text-[22px] text-[#59339d] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#59339d]"
              >
                Contact Us
              </a>
            </div>
          </div>
        ) : null}
      </nav>
    </header>
  )
}

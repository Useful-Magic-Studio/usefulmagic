'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Team', href: '#team' },
  { label: 'Services', href: '#services' },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = [...navItems.map((item) => item.href.slice(1)), 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    const element = document.getElementById(href.slice(1))
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f1ab37] border-b border-[#2f4f4f]">
      <div className="max-w-7xl mx-auto px-6 py-2">
        <div className="flex items-center justify-between">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('#home')
            }}
            className="flex items-center"
          >
            <Image
              src="/images/logo.png"
              alt="Useful Magic Studio"
              width={100}
              height={80}
              className="h-16 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item.href)
                }}
                className={`font-(family-name:--font-league-spartan) text-[20px] font-normal transition-colors hover:text-[#6f42c1] ${
                  activeSection === item.href.slice(1)
                    ? 'text-[#6f42c1]'
                    : 'text-[#2f4f4f]'
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick('#contact')
              }}
              className="bg-[#6f42c1] text-white font-(family-name:--font-abeezee) text-[20px] px-5 py-2 rounded-full border border-[#f2f2da] shadow-[0px_4px_2px_rgba(0,0,0,0.25),4px_4px_2px_rgba(0,0,0,0.25)] hover:bg-[#5a35a0] transition-colors"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#2f4f4f]"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-[#2f4f4f] pt-4">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(item.href)
                  }}
                  className={`font-(family-name:--font-league-spartan) text-[18px] transition-colors hover:text-[#6f42c1] ${
                    activeSection === item.href.slice(1)
                      ? 'text-[#6f42c1]'
                      : 'text-[#2f4f4f]'
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick('#contact')
                }}
                className="bg-[#6f42c1] text-white font-(family-name:--font-abeezee) text-[18px] px-5 py-2 rounded-full text-center hover:bg-[#5a35a0] transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

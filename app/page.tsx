import { Analytics } from '@vercel/analytics/next'
import { Navigation } from '@/components/navigation'
import { HeroSection } from '@/components/hero-section'
import { OrnamentDivider } from '@/components/ornament-divider'
import { AboutSection } from '@/components/about-section'
import { ServicesSection } from '@/components/services-section'
import { JourneySection } from '@/components/journey-section'
import { TeamSection } from '@/components/team-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="relative bg-[#e9e9e6]">
      <Analytics />
      <Navigation />
      <HeroSection />
      <OrnamentDivider />
      <AboutSection />
      <OrnamentDivider />
      <ServicesSection />
      <OrnamentDivider />
      <JourneySection />
      <OrnamentDivider />
      <TeamSection />
      <OrnamentDivider />
      <ContactSection />
      <Footer />
    </main>
  )
}

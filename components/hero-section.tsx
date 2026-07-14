import Image from 'next/image'
import { HeroInfo } from '@/components/hero-info'
import { ZagDivider } from '@/components/ui/zag-divider'

export function HeroSection() {
  return (
    <section id="home" className="bg-[#e9e9e6] px-6 pt-20">
      <div className="mx-auto w-full max-w-[1166px]">
        <div className="flex flex-col items-center md:flex-row md:items-start md:pl-[135px]">
          <div className="shrink-0" data-node-id="20:41">
            <Image
              src="/images/logo.png"
              alt="Useful Magic Studio"
              width={337}
              height={341}
              className="h-auto w-[337px]"
              priority
            />
          </div>

          <h1
            data-node-id="6:44"
            className="mt-8 w-full max-w-[464px] text-center [word-break:break-word] font-(family-name:--font-nunito-sans) text-[40px] font-bold leading-[50px] text-[#2f4f4f] md:ml-[101px] md:mt-[133px]"
          >
            Boutique UX and Engineering Consultancy
          </h1>
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center px-6 pt-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <Image
            src="/images/logo.png?v=20260615"
            alt="Useful Magic Studio"
            width={600}
            height={400}
            className="mx-auto w-full max-w-lg md:max-w-xl lg:max-w-2xl h-auto"
            priority
          />
        </div>

        <p className="text-xl sm:text-2xl md:text-3xl text-foreground/90 mb-4 font-light">
          Helping teams use magic wisely
        </p>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          A boutique agency built on analyzing systems and making them
          human-friendly and AI upgraded
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
          >
            Work With Us
          </a>
          <a
            href="#about"
            className="px-8 py-4 border border-primary text-foreground rounded-full font-medium hover:bg-primary/10 transition-colors"
          >
            Learn More
          </a>
        </div>

        <div className="mt-[41px]">
          <HeroInfo />
        </div>

        <ZagDivider className="mt-[84px]" />
      </div>
    </section>
  )
}

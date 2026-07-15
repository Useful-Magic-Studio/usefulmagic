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
        </div>

        <div className="mt-[41px]">
          <HeroInfo />
        </div>

        <ZagDivider className="mt-[84px]" />
      </div>
    </section>
  )
}

'use client'

import { trackContactConversion, trackPrimaryCta } from '@/lib/analytics'

export function ContactSection() {
  return (
    <section id="contact" className="bg-[#e9e9e6]">
      {/* Ready to work? */}
      <div className="py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-(family-name:--font-nunito-sans) font-bold text-[40px] leading-[50px] text-[#2f4f4f] mb-6">
            Ready to work?
          </h2>
          <p className="font-(family-name:--font-nunito-sans) font-normal text-[24px] leading-[30px] text-[#2f4f4f] max-w-xl mx-auto mb-10">
            Arabica Acerbic Affogato Aftertaste Aged Americano And Aroma, cream
            As in half mountain con crema medium, At variety organic java lungo
            carajillo.
          </p>
          <a
            href="mailto:sarah@usefulmagicstudio.com"
            onClick={() => {
              trackPrimaryCta('get_in_touch')
              trackContactConversion()
            }}
            className="inline-block bg-[#f1ab37] border-[3px] border-[#6f42c1] text-[#2f4f4f] font-(family-name:--font-abeezee) text-[24px] px-10 py-3 rounded-full shadow-[4px_4px_2px_rgba(0,0,0,0.25)] hover:brightness-95 transition-all"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t-[3px] border-[#6f42c1] mx-6" />

      {/* Two-column CTAs */}
      <div className="py-24 px-6">
        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2">
          {/* Want to Know More? */}
          <div className="flex flex-col items-center text-center">
            <h3
              data-node-id="22:151"
              className="mb-6 [text-underline-position:from-font] [word-break:break-word] font-(family-name:--font-nunito-sans) text-[40px] font-bold leading-[50px] text-[#2f4f4f] underline decoration-from-font decoration-solid"
            >
              Want to Know More?
            </h3>
            <p
              data-node-id="22:153"
              className="mb-8 max-w-lg [word-break:break-word] font-(family-name:--font-nunito-sans) text-[24px] font-normal leading-[30px] text-[#2f4f4f]"
            >
              Arabica Acerbic Affogato Aftertaste Aged Americano And Aroma,
              cream As in half mountain con crema medium, At variety organic
              java lungo carajillo.
            </p>
            <a
              href="#about"
              data-node-id="22:155"
              onClick={() => trackPrimaryCta('learn_more')}
              className="inline-flex items-center justify-center rounded-[50px] border border-solid border-[#f2f2da] bg-[#6f42c1] px-[14px] pb-[9px] pt-[10px] font-(family-name:--font-abeezee) text-[24px] whitespace-nowrap text-white shadow-[0px_4px_2px_rgba(0,0,0,0.25),4px_4px_2px_rgba(0,0,0,0.25)] transition-all hover:bg-[#5a35a0]"
            >
              Learn More
            </a>
          </div>

          {/* Lets Get To Work! */}
          <div className="flex flex-col items-center text-center">
            <h3
              data-node-id="22:158"
              className="mb-6 [text-underline-position:from-font] [word-break:break-word] font-(family-name:--font-nunito-sans) text-[40px] font-bold leading-[50px] text-[#2f4f4f] underline decoration-from-font decoration-solid"
            >
              Lets Get To Work!
            </h3>
            <p
              data-node-id="22:160"
              className="mb-8 max-w-lg [word-break:break-word] font-(family-name:--font-nunito-sans) text-[24px] font-normal leading-[30px] text-[#2f4f4f]"
            >
              Arabica Acerbic Affogato Aftertaste Aged Americano And Aroma,
              cream As in half mountain con crema medium, At variety organic
              java lungo carajillo.
            </p>
            <a
              href="mailto:sarah@usefulmagicstudio.com"
              data-node-id="22:162"
              onClick={() => {
                trackPrimaryCta('contact_us')
                trackContactConversion()
              }}
              className="inline-flex items-center justify-center rounded-[50px] border-[3px] border-solid border-[#6f42c1] bg-[#f1ab37] pb-[4px] pl-[30px] pr-[29px] pt-[5px] font-(family-name:--font-abeezee) text-[24px] whitespace-nowrap text-[#2f4f4f] shadow-[4px_4px_2px_rgba(0,0,0,0.25)] transition-all hover:brightness-95"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

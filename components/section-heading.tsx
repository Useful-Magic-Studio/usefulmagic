import Image from 'next/image'

type SectionHeadingProps = {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  id?: string
}

export function SectionHeading({
  title,
  subtitle,
  align = 'left',
  id,
}: SectionHeadingProps) {
  const centered = align === 'center'

  return (
    <div className={centered ? 'text-center' : 'text-left'}>
      <div
        className={`flex items-center gap-3 ${centered ? 'justify-center' : ''}`}
      >
        <Image
          src="/images/home/sparkle.svg"
          alt=""
          width={43}
          height={43}
          className="size-10 shrink-0"
          aria-hidden
        />
        <h2
          id={id}
          className="font-(family-name:--font-nunito-sans) text-[40px] font-bold leading-[1.1] text-[#59339d] lg:text-[48px] lg:leading-22.5"
        >
          {title}
        </h2>
      </div>
      {subtitle ? (
        <p
          className={`mt-1 font-(family-name:--font-nunito-sans) text-[28px] font-bold leading-snug text-[#2f4f4f] lg:text-[36px] lg:leading-12.5 ${centered ? '' : 'lg:pl-13'}`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}

type PhilosophyCardProps = {
  title: string
  tagline: string
  description: string
  iconSrc: string
}

export function PhilosophyCard({
  title,
  tagline,
  description,
  iconSrc,
}: PhilosophyCardProps) {
  return (
    <article className="relative w-full max-w-[340px]">
      <div className="flex min-h-[90px] items-center gap-3 rounded-t-[18px] bg-[#59339d] px-4 py-3">
        <img
          src={iconSrc}
          alt=""
          width={72}
          height={72}
          className="size-[72px] shrink-0 object-contain"
          aria-hidden
        />
        <h3 className="font-(family-name:--font-nunito-sans) text-[32px] leading-[40px] font-bold text-[#e9e9e6] lg:text-[36px]">
          {title}
        </h3>
      </div>
      <div className="relative rounded-b-[18px] bg-[#fffff6] px-6 pt-8 pb-8 text-center">
        <img
          src="/images/home/sparkle.svg"
          alt=""
          width={43}
          height={43}
          className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/2"
          aria-hidden
        />
        <p className="font-(family-name:--font-nunito-sans) text-[28px] leading-tight font-bold text-[#59339d] lg:text-[32px]">
          {tagline}
        </p>
        <p className="mt-3 font-(family-name:--font-abeezee) text-[22px] leading-normal text-[#2f4f4f] lg:text-[24px]">
          {description}
        </p>
      </div>
    </article>
  )
}

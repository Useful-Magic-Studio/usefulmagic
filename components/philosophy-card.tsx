import Image from 'next/image'

type PhilosophyCardProps = {
  title: string
  description: string
  iconSrc: string
  iconClassName: string
  titleClassName?: string
  nodeId?: string
}

export function PhilosophyCard({
  title,
  description,
  iconSrc,
  iconClassName,
  titleClassName = 'top-[23px]',
  nodeId,
}: PhilosophyCardProps) {
  return (
    <div className="relative h-[356px] w-[348px]" data-node-id={nodeId}>
      <div className="absolute left-[5px] top-0 h-[85px] w-[340px] rounded-t-[18px] bg-[#6f42c1]" />
      <div className="absolute left-[5px] top-[85px] h-[245px] w-[340px] rounded-b-[18px] bg-[#e9e9e6]" />

      <Image
        src={iconSrc}
        alt=""
        width={85}
        height={85}
        className={`absolute object-contain ${iconClassName}`}
        aria-hidden
      />

      <h3
        className={`absolute left-[5px] w-[340px] text-center [word-break:break-word] font-(family-name:--font-nunito-sans) text-[32px] font-bold leading-[40px] text-[#e9e9e6] ${titleClassName}`}
      >
        {title}
      </h3>

      <Image
        src="/images/philosophy/corner-square.png"
        alt=""
        width={100}
        height={100}
        className="absolute left-0 top-[67px] size-[100px] object-cover"
        aria-hidden
      />
      <Image
        src="/images/philosophy/corner-square.png"
        alt=""
        width={100}
        height={100}
        className="absolute left-[245px] top-[256px] size-[100px] object-cover"
        aria-hidden
      />

      <p className="absolute left-[50px] top-[117px] w-[252px] text-center [word-break:break-word] font-(family-name:--font-abeezee) text-[20px] leading-normal text-[#2f4f4f]">
        {description}
      </p>

      <div className="absolute left-[30px] top-[331px] w-[290px]">
        <Image
          src="/images/philosophy/card-divider.svg"
          alt=""
          width={290}
          height={4}
          className="h-auto w-full"
          aria-hidden
        />
      </div>
    </div>
  )
}

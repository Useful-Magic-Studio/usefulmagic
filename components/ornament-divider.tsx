import Image from 'next/image'

export function OrnamentDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`mx-auto w-full max-w-327.75 px-4 ${className}`}>
      <Image
        src="/images/home/ornament.svg"
        alt=""
        width={1311}
        height={213}
        className="mx-auto h-auto w-full max-w-327.75"
        aria-hidden
      />
    </div>
  )
}

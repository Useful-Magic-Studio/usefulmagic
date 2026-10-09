export function OrnamentDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`mx-auto w-full max-w-[1311px] px-4 ${className}`}>
      <img
        src="/images/home/ornament.svg"
        alt=""
        width={1311}
        height={213}
        className="mx-auto h-auto w-full max-w-[1311px]"
        aria-hidden
      />
    </div>
  )
}

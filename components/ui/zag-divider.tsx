import { cn } from '@/lib/utils'

export function ZagDivider({
  className,
  nodeId = '20:47',
}: {
  className?: string
  nodeId?: string
}) {
  return (
    <div
      data-node-id={nodeId}
      className={cn('relative z-10 mx-auto w-full max-w-[1166px]', className)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1166 68"
        fill="none"
        className="h-auto w-full"
        aria-hidden="true"
      >
        <path
          d="M0 1.5H446.553L686.369 66.5H1166"
          stroke="#6F42C1"
          strokeWidth="3"
        />
      </svg>
    </div>
  )
}

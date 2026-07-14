import Image from 'next/image'
import { PhilosophyCard } from '@/components/philosophy-card'
import { ZagDivider } from '@/components/ui/zag-divider'

const cards = {
  humanCentered: {
    title: 'Human Centered',
    description:
      'Every system we analyze starts with understanding the people who use it. We design solutions that feel natural and intuitive.',
    iconSrc: '/images/philosophy/icon-human-centered.png',
    iconClassName: 'left-[10px] top-[9px] h-[67px] w-[70px]',
    titleClassName: 'top-[23px]',
    nodeId: '46:50',
    position: 'left-[403px] top-0',
  },
  aiEnhanced: {
    title: 'AI Enhanced',
    description:
      'We thoughtfully integrate AI where it adds real value—automating the tedious so humans can focus on what matters.',
    iconSrc: '/images/philosophy/icon-ai-enhanced.png',
    iconClassName: 'left-[12px] top-0 size-[75px]',
    titleClassName: 'top-[23px]',
    nodeId: '46:72',
    position: 'left-0 top-[338px]',
  },
  wiselyApplied: {
    title: 'Wisely Applied',
    description:
      'Not every problem needs AI. We help teams find the right balance of technology and human judgment.',
    iconSrc: '/images/philosophy/icon-wisely-applied.png',
    iconClassName: 'left-[4px] top-0 size-[85px]',
    titleClassName: 'top-[20px]',
    nodeId: '46:61',
    position: 'left-[819px] top-[338px]',
  },
  purposefullySimple: {
    title: 'Purposefully Simple',
    description:
      'Complexity hidden behind simplicity. We reduce friction at every turn so your team can move with confidence.',
    iconSrc: '/images/philosophy/icon-purposefully-simple.png',
    iconClassName: 'left-[9px] top-[2px] size-[83px]',
    titleClassName: 'top-0',
    nodeId: '46:49',
    position: 'left-[403px] top-[694px]',
  },
} as const

// Arrow positions from Figma metadata (x/y relative to diagram origin 142,1060).
// Each uses an outer bounding-box container → flex center → inner rotated image (207×243px).
const arrows = [
  { nodeId: '45:20', left: 380, top: 97,  w: 269, h: 238, rotate: 'rotate-[82.31deg]'   },
  { nodeId: '45:19', left: 1027, top: 299, w: 279, h: 301, rotate: 'rotate-[159.58deg]' },
  { nodeId: '46:85', left: 151,  top: 686, w: 246, h: 275, rotate: '-rotate-[9.73deg]'   },
  { nodeId: '46:83', left: 797,  top: 945, w: 298, h: 276, rotate: '-rotate-[109.2deg]'  },
] as const

export function AboutSection() {
  return (
    <section id="about" className="bg-[#e9e9e6] px-6 py-16">
      <div className="mx-auto w-full max-w-[1166px]">
        <div className="mb-[71px] flex items-center gap-3">
          <Image
            src="/images/philosophy/corner-square.png"
            alt=""
            width={100}
            height={100}
            className="size-[100px] shrink-0 object-cover"
            data-node-id="41:77"
            aria-hidden
          />
          <h2
            data-node-id="20:45"
            className="font-(family-name:--font-nunito-sans) text-[48px] font-bold leading-[90px] text-[#6f42c1]"
          >
            Philosophy
          </h2>
        </div>

        {/* Mobile: stacked cards */}
        <div className="flex flex-col items-center gap-10 lg:hidden">
          {Object.values(cards).map((card) => (
            <PhilosophyCard key={card.nodeId} {...card} />
          ))}
          <Image
            src="/images/philosophy/center-flask.png"
            alt="Useful Magic Studio"
            width={263}
            height={263}
            className="size-[200px] object-contain"
            data-node-id="46:87"
          />
        </div>

        {/* Desktop: diamond diagram */}
        <div className="relative mx-auto hidden min-h-[1221px] w-full lg:block">
          {arrows.map((arrow) => (
            // Outer div = Figma bounding box; inner flex+rotate matches Figma structure
            <div
              key={arrow.nodeId}
              data-node-id={arrow.nodeId}
              className="pointer-events-none absolute flex items-center justify-center"
              style={{ left: arrow.left, top: arrow.top, width: arrow.w, height: arrow.h }}
            >
              <div className={`flex-none ${arrow.rotate}`}>
                <div className="relative h-[243px] w-[207px] overflow-hidden">
                  <Image
                    src="/images/philosophy/arrow.png"
                    alt=""
                    fill
                    className="object-contain"
                    aria-hidden
                  />
                </div>
              </div>
            </div>
          ))}

          <Image
            src="/images/philosophy/center-flask.png"
            alt="Useful Magic Studio"
            width={263}
            height={263}
            className="absolute left-[447px] top-[373px] size-[263px] object-contain"
            data-node-id="46:87"
          />

          {Object.values(cards).map((card) => (
            <div key={card.nodeId} className={`absolute ${card.position}`}>
              <PhilosophyCard {...card} />
            </div>
          ))}
        </div>

        <ZagDivider className="mt-[80px]" nodeId="20:50" />
      </div>
    </section>
  )
}

import Image from 'next/image'

type Spark = {
  src: string
  width: number
  height: number
  left: number
  top: number
}

const peopleSparks: Spark[] = [
  { src: '/images/home/people/v1.svg', width: 30.876, height: 31.605, left: 137, top: 39 },
  { src: '/images/home/people/v10.svg', width: 30.876, height: 31.604, left: 33, top: 36 },
  { src: '/images/home/people/v9.svg', width: 30.876, height: 31.604, left: 86, top: 8 },
  { src: '/images/home/people/v2.svg', width: 8.376, height: 5.336, left: 132, top: 24 },
  { src: '/images/home/people/v3.svg', width: 8.376, height: 5.336, left: 119, top: 38 },
  { src: '/images/home/people/v4.svg', width: 8.376, height: 5.336, left: 74, top: 43 },
  { src: '/images/home/people/v5.svg', width: 8.376, height: 5.336, left: 58, top: 26 },
  { src: '/images/home/people/v6.svg', width: 8.376, height: 5.336, left: 171, top: 63 },
  { src: '/images/home/people/v7.svg', width: 8.376, height: 5.336, left: 130, top: 82 },
  { src: '/images/home/people/v8.svg', width: 8.376, height: 5.336, left: 61, top: 82 },
]

const clarityMarks: Spark[] = [
  { src: '/images/home/clarity/glass.svg', width: 113.733, height: 114.307, left: 41, top: 49 },
  { src: '/images/home/clarity/v1.svg', width: 3, height: 69.133, left: 98, top: 126 },
  { src: '/images/home/clarity/v2.svg', width: 3, height: 60.492, left: 81, top: 135 },
  { src: '/images/home/clarity/v3.svg', width: 22.39, height: 36.315, left: 33, top: 128 },
  { src: '/images/home/clarity/v4.svg', width: 17.091, height: 85.378, left: 17, top: 64 },
  { src: '/images/home/clarity/v5.svg', width: 3, height: 18.904, left: 44, top: 46 },
  { src: '/images/home/clarity/v6.svg', width: 3, height: 14.583, left: 78, top: 31 },
  { src: '/images/home/clarity/v7.svg', width: 13.858, height: 32.979, left: 118, top: 29 },
  { src: '/images/home/clarity/v8.svg', width: 34.433, height: 55.672, left: 128, top: 66 },
  { src: '/images/home/clarity/v9.svg', width: 3, height: 23.765, left: 142, top: 55 },
  { src: '/images/home/clarity/v10.svg', width: 32.104, height: 51.607, left: 151, top: 86 },
  { src: '/images/home/clarity/v11.svg', width: 7.324, height: 7.321, left: 18, top: 57 },
]

function StackedMarks({ marks }: { marks: Spark[] }) {
  return (
    <>
      {marks.map((mark) => (
        <Image
          key={mark.src}
          src={mark.src}
          alt=""
          width={mark.width}
          height={mark.height}
          className="absolute"
          style={{ left: mark.left, top: mark.top }}
        />
      ))}
    </>
  )
}

export function PeopleIcon() {
  return (
    <div className="relative h-51.75 w-51.75 shrink-0" aria-hidden>
      <Image
        src="/images/home/people/ring.svg"
        alt=""
        width={207.167}
        height={206.998}
      />
      <Image
        src="/images/home/people/fill.svg"
        alt=""
        width={202.167}
        height={201.998}
        className="absolute left-0.5 top-0.5"
        style={{
          maskImage: 'url(/images/home/people/mask.svg)',
          WebkitMaskImage: 'url(/images/home/people/mask.svg)',
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat',
          maskSize: '183.139px 145.018px',
          WebkitMaskSize: '183.139px 145.018px',
          maskPosition: '9.525px 50.51px',
          WebkitMaskPosition: '9.525px 50.51px',
        }}
      />
      <StackedMarks marks={peopleSparks} />
    </div>
  )
}

export function ClarityIcon() {
  return (
    <div className="relative h-51.75 w-51.75 shrink-0" aria-hidden>
      <Image
        src="/images/home/clarity/ring.svg"
        alt=""
        width={207.167}
        height={206.998}
      />
      <StackedMarks marks={clarityMarks} />
    </div>
  )
}

export function ConfidenceIcon() {
  return (
    <Image
      src="/images/home/icon-confidence.svg"
      alt=""
      width={207.167}
      height={206.998}
      className="shrink-0"
      aria-hidden
    />
  )
}

export function GrowthIcon() {
  return (
    <Image
      src="/images/home/icon-growth.svg"
      alt=""
      width={207.167}
      height={206.998}
      className="shrink-0"
      aria-hidden
    />
  )
}

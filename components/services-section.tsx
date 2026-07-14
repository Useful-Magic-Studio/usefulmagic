const services = [
  {
    title: 'The Outcome',
    description:
      'We deliver results that matter — streamlined workflows, reduced friction, and systems your team actually enjoys using.',
  },
  {
    title: 'AI',
    description:
      'Strategic implementation of AI tools where they add genuine value—not just buzzwords. We integrate AI thoughtfully.',
  },
  {
    title: 'Creative Human',
    description:
      'Every solution is crafted with a human-first perspective. We keep people at the center of every decision.',
  },
]

function ServiceCard({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div className="w-full max-w-[282px] rounded-[18px] overflow-hidden border-2 border-[#2f4f4f]">
      <div className="bg-[#2f4f4f] px-6 py-4">
        <h3 className="font-(family-name:--font-nunito-sans) font-bold text-[24px] leading-[50px] text-[#e9e9e6] text-center">
          {title}
        </h3>
      </div>
      <div className="bg-[#e9e9e6] px-6 py-6 h-[245px] flex items-center">
        <p className="font-(family-name:--font-abeezee) text-[20px] leading-relaxed text-[#2f4f4f] text-center">
          {description}
        </p>
      </div>
    </div>
  )
}

export function ServicesSection() {
  return (
    <section id="services" className="py-24 px-6 bg-[#e9e9e6]">
      <div className="max-w-7xl mx-auto">
        {/* Divider */}
        <div className="border-t-[3px] border-[#6f42c1] mb-16 w-full" />

        {/* Section header */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="w-[100px] h-[100px] rounded-[18px] bg-[#f1ab37] border border-[#2f4f4f] shrink-0" />
          <h2 className="font-(family-name:--font-nunito-sans) font-bold text-[48px] leading-[90px] text-[#6f42c1]">
            What Do We Do?
          </h2>
        </div>

        {/* Service cards */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 flex-wrap">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}

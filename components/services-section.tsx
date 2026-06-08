import { Search, Zap, RefreshCw, Lightbulb } from 'lucide-react'

const services = [
  {
    title: 'System Analysis',
    description:
      'Deep dive into your existing workflows to identify bottlenecks, redundancies, and opportunities for improvement.',
    icon: Search,
  },
  {
    title: 'AI Integration',
    description:
      'Strategic implementation of AI tools where they add genuine value—not just buzzwords.',
    icon: Zap,
  },
  {
    title: 'Process Redesign',
    description:
      'Transform clunky systems into streamlined, human-friendly experiences your team will actually enjoy using.',
    icon: RefreshCw,
  },
  {
    title: 'Strategy Consulting',
    description:
      'Navigate the ever-changing landscape of technology with clarity and confidence.',
    icon: Lightbulb,
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl text-[#e84b8a] mb-4 drop-shadow-sm">
            What We Do
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Practical magic for modern teams
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all"
            >
              <div className="absolute top-6 right-6 text-6xl font-bold text-muted/30 font-display">
                {String(index + 1).padStart(2, '0')}
              </div>
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-6 group-hover:bg-[#e84b8a]/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary group-hover:text-[#e84b8a] transition-colors" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

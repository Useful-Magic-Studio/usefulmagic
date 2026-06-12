import { Users, Cpu, Heart } from 'lucide-react'

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl text-primary mb-4 drop-shadow-sm">
            Our Philosophy
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We believe technology should serve people, not the other way around
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-colors">
            <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mb-6">
              <Users className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-card-foreground">
              Human-Centered
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Every system we analyze starts with understanding the people who
              use it. We design solutions that feel natural and intuitive.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-colors">
            <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mb-6">
              <Cpu className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-card-foreground">
              AI Enhanced
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              We thoughtfully integrate AI where it adds real value—automating
              the tedious so humans can focus on what matters.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-colors">
            <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mb-6">
              <Heart className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-card-foreground">
              Wisely Applied
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Not every problem needs AI. We help teams find the right balance
              of technology and human judgment.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

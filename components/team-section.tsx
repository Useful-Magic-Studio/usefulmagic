import { Settings, Palette } from 'lucide-react'

const team = [
  {
    name: 'Sarah Peony',
    role: 'Systems Analyst & Project Engineer',
    icon: Settings,
    bio: 'Sarah brings deep technical expertise in system analysis and architecture. She dissects complex workflows to find elegant, scalable solutions that just work.',
  },
  {
    name: 'Fey Smires',
    role: 'UX Researcher & Designer',
    icon: Palette,
    bio: 'Fey bridges the gap between business needs and user experience. With an eye for design and a mind for strategy, she ensures every solution is both beautiful and practical.',
  },
]

export function TeamSection() {
  return (
    <section id="team" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl text-[#e84b8a] mb-4 drop-shadow-sm">
            Meet the Studio
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A small team with big ideas and the skills to make them real
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all hover:shadow-lg"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-[#e84b8a]/20 flex items-center justify-center flex-shrink-0">
                  <member.icon className="w-8 h-8 text-[#e84b8a]" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-card-foreground">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium">{member.role}</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const team = [
  {
    name: 'Sarah',
    role: 'Lead Engineer',
    bio: 'Sarah brings deep technical expertise in system analysis and architecture. She dissects complex workflows to find elegant, scalable solutions that just work.',
  },
  {
    name: 'Fey',
    role: 'Lead UX Researcher',
    bio: 'Fey bridges the gap between business needs and user experience. With an eye for design and a mind for strategy, she ensures every solution is both beautiful and practical.',
  },
]

function TeamMemberCard({
  name,
  role,
  bio,
}: {
  name: string
  role: string
  bio: string
}) {
  return (
    <div className="flex flex-col items-center gap-4 max-w-[270px]">
      <h3 className="font-(family-name:--font-nunito-sans) font-bold text-[40px] leading-[50px] text-[#2f4f4f] text-center w-full">
        {name}
      </h3>
      <p className="font-(family-name:--font-nunito-sans) font-bold text-[24px] leading-[50px] text-[#2f4f4f] text-center">
        {role}
      </p>
      {/* Avatar circle */}
      <div className="w-[200px] h-[200px] rounded-full bg-[#d4c4e3] border-2 border-[#6f42c1] flex items-center justify-center overflow-hidden">
        <span className="font-(family-name:--font-nunito-sans) font-bold text-[48px] text-[#6f42c1]">
          {name[0]}
        </span>
      </div>
      <p className="font-(family-name:--font-abeezee) text-[18px] leading-relaxed text-[#2f4f4f] text-center mt-2">
        {bio}
      </p>
    </div>
  )
}

export function TeamSection() {
  return (
    <section id="team" className="py-24 px-6 bg-[#e9e9e6]">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="w-[100px] h-[100px] rounded-[18px] bg-[#f1ab37] border border-[#2f4f4f] shrink-0" />
          <h2 className="font-(family-name:--font-nunito-sans) font-bold text-[48px] leading-[90px] text-[#6f42c1]">
            Meet Our Team
          </h2>
        </div>

        {/* Divider */}
        <div className="border-t-[3px] border-[#6f42c1] mb-16 w-full" />

        {/* Team members — staggered */}
        <div className="flex flex-col md:flex-row items-start justify-around gap-16">
          <div className="md:mt-0">
            <TeamMemberCard {...team[0]} />
          </div>
          <div className="md:mt-24">
            <TeamMemberCard {...team[1]} />
          </div>
        </div>
      </div>
    </section>
  )
}

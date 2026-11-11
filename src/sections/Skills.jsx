import { Target } from 'lucide-react'
import Section from '../components/Section.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import BentoCard from '../components/BentoCard.jsx'
import Badge from '../components/Badge.jsx'
import TileLabel from '../components/TileLabel.jsx'
import { focusAreas, skillGroups } from '../data/skills'

export default function Skills() {
  return (
    <Section id="skills" labelledBy="skills-title">
      <SectionTitle
        id="skills-title"
       
        label="Skills"
        title="What I work on and the tools I use"
        intro="Technologies grouped by where each one fits in a system."
      />

      <div className="mt-10 grid gap-3 md:grid-cols-2 md:gap-4 lg:grid-cols-12">
        {/* Focus areas */}
        <BentoCard className="md:col-span-2 lg:col-span-4 lg:row-span-2">
          <TileLabel icon={Target}>Areas I’m developing</TileLabel>
          <ol className="mt-4">
            {focusAreas.map((area, i) => (
              <li key={area} className="flex gap-3 border-b border-line py-2.5 text-sm last:border-b-0">
                <span className="font-mono text-xs leading-5 text-primary">{String(i + 1).padStart(2, '0')}</span>
                {area}
              </li>
            ))}
          </ol>
        </BentoCard>

        {/* Technology groups */}
        {skillGroups.map((group) => (
          <BentoCard key={group.title} className="lg:col-span-4">
            <TileLabel icon={group.icon}>{group.title}</TileLabel>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item}>
                  <Badge>{item}</Badge>
                </li>
              ))}
            </ul>
          </BentoCard>
        ))}
      </div>
    </Section>
  )
}

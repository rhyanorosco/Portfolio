import Section from '../components/Section.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import SkillGroup from '../components/SkillGroup.jsx'
import { focusAreas, skillGroups } from '../data/skills'

export default function Skills() {
  return (
    <Section id="skills" labelledBy="skills-title">
      <SectionTitle
        id="skills-title"
        number="02"
        label="Skills"
        title="What I work on and the tools I use"
        intro="Technologies grouped by where each one fits in a system."
      />

      <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-16">
        <div>
          <h3 className="font-mono text-xs uppercase tracking-widest text-muted">Areas I’m developing</h3>
          <ol className="mt-4 space-y-3">
            {focusAreas.map((area, i) => (
              <li key={area} className="flex gap-3 border-b border-line pb-3 last:border-b-0">
                <span className="font-mono text-xs text-primary">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-sm">{area}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <SkillGroup key={group.title} {...group} />
          ))}
        </div>
      </div>
    </Section>
  )
}

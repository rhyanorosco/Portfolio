import Section from '../components/Section.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import BentoCard from '../components/BentoCard.jsx'
import Timeline from '../components/Timeline.jsx'
import { education } from '../data/education'

export default function Education() {
  return (
    <Section id="education" labelledBy="education-title">
      <div className="mx-auto max-w-4xl">
      <SectionTitle id="education-title" label="Education" title="Where I’m studying" />
      <BentoCard className="mt-10 max-w-2xl md:p-8">
        <Timeline items={education} />
      </BentoCard>
      </div>
    </Section>
  )
}

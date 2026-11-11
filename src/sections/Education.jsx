import Section from '../components/Section.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import Timeline from '../components/Timeline.jsx'
import { education } from '../data/education'

export default function Education() {
  return (
    <Section id="education" labelledBy="education-title">
      <SectionTitle id="education-title" number="04" label="Education" title="Where I’m studying" />
      <div className="mt-10 max-w-2xl">
        <Timeline items={education} />
      </div>
    </Section>
  )
}

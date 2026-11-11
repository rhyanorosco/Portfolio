import Section from '../components/Section.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import Placeholder from '../components/Placeholder.jsx'
import { profile } from '../data/profile'

const interests = [
  'Web development',
  'Mobile application development',
  'System analysis',
  'Database management',
  'UI/UX design',
  'Information systems',
]

export default function About() {
  return (
    <Section id="about" labelledBy="about-title">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-16">
        <div className="w-full max-w-[14rem] sm:max-w-xs">
          {profile.photo ? (
            <img src={profile.photo} alt={profile.name} className="aspect-[4/5] w-full rounded object-cover" />
          ) : (
            <Placeholder label="[ADD PROFILE PHOTO]" ratio="aspect-[4/5]" />
          )}
        </div>

        <div>
          <SectionTitle id="about-title" number="01" label="About" title="A student who likes to see how systems fit together" />
          <div className="mt-6 max-w-2xl space-y-4">
            <p>
              I’m an {profile.field} student at {profile.school}
              {profile.school.endsWith('.') ? '' : '.'} I’m interested in how information systems are
              planned and built — from understanding a problem and gathering requirements, to designing the
              database and interface, to documenting how everything works.
            </p>
            <p>
              My main project is an appointment system for Mary’s Angel Birthing Home, designed to help patients manage prenatal and
              postnatal appointments and help clinic staff organize records.
            </p>
            <p className="italic text-muted">[ADD WHAT KIND OF SYSTEMS YOU ENJOY BUILDING AND WHAT YOU ARE CURRENTLY IMPROVING]</p>
          </div>

          <h3 className="mt-10 font-mono text-xs uppercase tracking-widest text-muted">Areas of interest</h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {interests.map((item) => (
              <li key={item} className="rounded-sm border border-line px-3 py-1 text-sm">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}

import { ClipboardCheck, CodeXml, Database, Palette, Smartphone, Workflow } from 'lucide-react'
import Section from '../components/Section.jsx'

// The areas from the portfolio brief, shown as "what I work on" cards.
const areas = [
  {
    icon: Workflow,
    title: 'System Analysis & Design',
    text: 'Understanding the problem, gathering requirements, and modeling how a system should work.',
    hue: 'from-[#7c3aed] to-[#c084fc]',
  },
  {
    icon: CodeXml,
    title: 'Web Development',
    text: 'Building responsive web interfaces and the logic behind them.',
    hue: 'from-[#6d28d9] to-[#f0abfc]',
  },
  {
    icon: Smartphone,
    title: 'Mobile Application Development',
    text: 'Bringing the same system to a phone so users can reach it anywhere.',
    hue: 'from-[#4c1d95] to-[#a78bfa]',
  },
  {
    icon: Database,
    title: 'Database Management',
    text: 'Designing tables and relationships that keep records organized and consistent.',
    hue: 'from-[#5b21b6] to-[#e879f9]',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    text: 'Laying out screens that are clear for the people who use them every day.',
    hue: 'from-[#7e22ce] to-[#f5d0fe]',
  },
  {
    icon: ClipboardCheck,
    title: 'Documentation & Testing',
    text: 'Writing down how a system works and checking that each feature does what it should.',
    hue: 'from-[#6b21a8] to-[#c4b5fd]',
  },
]

export default function About() {
  return (
    <Section id="about" labelledBy="about-title">
      <div className="mx-auto max-w-4xl">
        <h2 id="about-title" className="text-2xl font-semibold tracking-[-0.01em] md:text-[2rem]">
          What I work on
        </h2>
        <p className="mt-2 text-muted">The areas I’m developing as a student developer.</p>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {areas.map(({ icon: Icon, title, text, hue }) => (
            <li key={title} className="glass glass-hover relative flex gap-5 overflow-hidden rounded-2xl p-5 md:p-6">
              <div className="relative shrink-0">
                <div className="glow -inset-4 opacity-70" aria-hidden="true" />
                <span
                  className={`relative grid h-14 w-14 place-items-center rounded-xl bg-gradient-to-br ${hue} text-white shadow-lg shadow-purple-900/40`}
                >
                  <Icon size={24} aria-hidden="true" />
                </span>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold leading-snug">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}

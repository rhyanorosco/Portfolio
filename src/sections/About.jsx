import Section from '../components/Section.jsx'

// The areas from the portfolio brief, shown as a numbered list.
const areas = [
  {
    title: 'System Analysis & Design',
    text: 'Understanding the problem, gathering requirements, and modeling how a system should work.',
  },
  {
    title: 'Web Development',
    text: 'Building responsive web interfaces and the logic behind them.',
  },
  {
    title: 'Mobile Application Development',
    text: 'Bringing the same system to a phone so users can reach it anywhere.',
  },
  {
    title: 'UI/UX Design',
    text: 'Laying out screens that are clear for the people who use them every day.',
  },
  {
    title: 'Documentation & Testing',
    text: 'Writing down how a system works and checking that each feature does what it should.',
  },
]

export default function About() {
  return (
    <Section id="about" labelledBy="about-title" className="pt-6 md:pt-8">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs font-medium uppercase tracking-[0.12em] text-primary">About</p>
        <h2 id="about-title" className="mt-3 text-2xl font-semibold tracking-[-0.01em] md:text-[2rem]">
          What I work on
        </h2>
        <p className="mt-2 text-muted">The areas I’m developing as a student developer.</p>

        <ol className="mt-10 grid gap-x-12 sm:grid-cols-2">
          {areas.map(({ title, text }, i) => (
            <li key={title} className="group flex gap-5 border-t border-line py-6">
              <span className="font-mono text-sm text-primary/70 transition-colors group-hover:text-primary">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold leading-snug">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  )
}

import Section from '../components/Section.jsx'
import Logo from '../components/Logo.jsx'
import { skillGroups } from '../data/skills'

export default function Skills() {
  const tools = skillGroups.flatMap((g) => g.items.map((item) => ({ item, group: g.title })))

  return (
    <Section id="skills" labelledBy="skills-title" className="overflow-hidden">
      <div className="mx-auto max-w-3xl text-center">
        <h2 id="skills-title" className="text-xl font-semibold leading-snug md:text-2xl">
          The tools I use to <span className="text-gradient">plan, build, and ship</span> systems.
        </h2>
        <p className="mt-2 text-sm text-muted">Frontend, backend, database, and everyday tools.</p>

        <ul className="mx-auto mt-8 flex max-w-2xl flex-wrap justify-center gap-2.5">
          {tools.map(({ item, group }) => (
            <li
              key={item}
              title={group}
              className="glass rounded-full px-4 py-2 font-mono text-xs text-badge-ink transition-colors hover:text-ink"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Decorative orbit with the logo at its center */}
      <div aria-hidden="true" className="relative mx-auto mt-10 h-[22rem] max-w-5xl md:h-[26rem]">
        <svg viewBox="0 0 1000 420" preserveAspectRatio="xMidYMid meet" className="absolute inset-0 h-full w-full">
          <defs>
            <linearGradient id="ring" x1="0" x2="1">
              <stop offset="0" stopColor="#a78bfa" stopOpacity="0" />
              <stop offset="0.5" stopColor="#c4b5fd" stopOpacity="0.7" />
              <stop offset="1" stopColor="#a78bfa" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="beam" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#c4b5fd" stopOpacity="0" />
              <stop offset="1" stopColor="#c4b5fd" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          {/* beams falling from the tools into the orb */}
          {[-320, -200, -90, 0, 90, 200, 320].map((dx) => (
            <path
              key={dx}
              d={`M${500 + dx} 0 C ${500 + dx} 120, ${500 + dx * 0.15} 140, 500 210`}
              stroke="url(#beam)"
              strokeWidth="1"
              fill="none"
            />
          ))}
          <ellipse cx="500" cy="250" rx="440" ry="90" stroke="url(#ring)" strokeWidth="1.2" fill="none" />
          <ellipse cx="500" cy="250" rx="320" ry="62" stroke="url(#ring)" strokeWidth="1" fill="none" />
          <ellipse cx="500" cy="250" rx="200" ry="38" stroke="#a78bfa" strokeOpacity="0.25" fill="none" />
          <circle cx="68" cy="262" r="3" fill="#e9d5ff" />
          <circle cx="930" cy="232" r="2.5" fill="#e9d5ff" />
          <circle cx="210" cy="300" r="2" fill="#c4b5fd" />
          <circle cx="800" cy="196" r="2" fill="#c4b5fd" />
        </svg>

        <div className="absolute left-1/2 top-[59%] -translate-x-1/2 -translate-y-1/2">
          <div className="pulse-glow absolute -inset-24 rounded-full bg-[radial-gradient(closest-side,rgba(139,92,246,0.55),transparent)]" />
          <div className="spin-slow absolute -inset-6 rounded-full border border-dashed border-primary/30" />
          <div className="relative grid h-32 w-32 place-items-center rounded-full bg-[radial-gradient(circle_at_30%_25%,#5b2bb8,#1a0e3a_70%)] text-ink shadow-[0_0_60px_10px_rgba(139,92,246,0.45),inset_0_0_30px_rgba(196,181,253,0.25)] md:h-36 md:w-36">
            <Logo size={56} />
          </div>
        </div>
      </div>
    </Section>
  )
}

import { useEffect, useState } from 'react'
import Section from '../components/Section.jsx'
import { skillGroups } from '../data/skills'
import { toolIcons } from '../data/toolIcons'

function ToolIcon({ name }) {
  const icon = toolIcons[name]
  if (!icon) return null
  return (
    <svg viewBox={icon.viewBox} width="16" height="16" fill={icon.color} aria-hidden="true" className="shrink-0">
      <path d={icon.path} />
    </svg>
  )
}


// Ellipse as a path, so dots can travel along it with <animateMotion>.
const orbit = (rx, ry) => `M ${500 - rx} 250 A ${rx} ${ry} 0 1 0 ${500 + rx} 250 A ${rx} ${ry} 0 1 0 ${500 - rx} 250`

// Dots that circle the orb: which ring, size, seconds per lap, and where they start (0–1).
const dots = [
  { rx: 440, ry: 90, r: 3.2, dur: 26, start: 0 },
  { rx: 440, ry: 90, r: 2.2, dur: 26, start: 0.5 },
  { rx: 320, ry: 62, r: 2.6, dur: 18, start: 0.25 },
  { rx: 320, ry: 62, r: 2, dur: 18, start: 0.75 },
  { rx: 200, ry: 38, r: 2.2, dur: 12, start: 0.6 },
]

// Twinkling stars scattered around the orb: position, size, seconds per twinkle, delay.
const stars = [
  { x: 120, y: 120, s: 7, d: 3.2, delay: 0 },
  { x: 260, y: 200, s: 4, d: 2.6, delay: 1.1 },
  { x: 330, y: 360, s: 5, d: 3.8, delay: 0.6 },
  { x: 410, y: 90, s: 3.5, d: 2.9, delay: 1.8 },
  { x: 610, y: 70, s: 5, d: 3.4, delay: 0.3 },
  { x: 700, y: 370, s: 4, d: 2.7, delay: 2.2 },
  { x: 780, y: 140, s: 6, d: 3.6, delay: 1.4 },
  { x: 880, y: 330, s: 4.5, d: 3, delay: 0.9 },
  { x: 945, y: 170, s: 3.5, d: 2.5, delay: 2.6 },
  { x: 40, y: 330, s: 4, d: 3.1, delay: 1.6 },
]

// Four-point sparkle centered on (0,0)
const sparkle = (s) =>
  `M0 ${-s} C ${s * 0.15} ${-s * 0.15} ${s * 0.15} ${-s * 0.15} ${s} 0 C ${s * 0.15} ${s * 0.15} ${s * 0.15} ${s * 0.15} 0 ${s} C ${-s * 0.15} ${s * 0.15} ${-s * 0.15} ${s * 0.15} ${-s} 0 C ${-s * 0.15} ${-s * 0.15} ${-s * 0.15} ${-s * 0.15} 0 ${-s} Z`

function useReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia?.('(prefers-reduced-motion: reduce)')
    if (!mq) return
    setReduced(mq.matches)
    const onChange = (e) => setReduced(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])
  return reduced
}

// Wireframe "web" globe for the center of the orb. Meridians widen and narrow so it looks like it is turning.
function WebGlobe({ reduced }) {
  const R = 30
  const meridians = [0, 1, 2, 3] // four lines, a quarter turn apart
  const lap = 8 // seconds per turn
  return (
    <svg width="64" height="64" viewBox="-34 -34 68 68" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <circle r={R} />
      {/* latitude lines */}
      <line x1={-R} y1="0" x2={R} y2="0" />
      <ellipse cy={-R * 0.5} rx={R * 0.87} ry="2.5" />
      <ellipse cy={R * 0.5} rx={R * 0.87} ry="2.5" />
      {/* longitude lines */}
      {meridians.map((m) => (
        <ellipse key={m} rx={R * Math.abs(Math.cos((m * Math.PI) / 4))} ry={R} opacity="0.9">
          {!reduced && (
            <animate
              attributeName="rx"
              values={`${R};0;${R}`}
              keyTimes="0;0.5;1"
              calcMode="spline"
              keySplines="0.4 0 0.6 1;0.4 0 0.6 1"
              dur={`${lap}s`}
              begin={`-${(m * lap) / 4}s`}
              repeatCount="indefinite"
            />
          )}
        </ellipse>
      ))}
    </svg>
  )
}

export default function Skills() {
  const reduced = useReducedMotion()
  const tools = skillGroups.flatMap((g) => g.items.map((item) => ({ item, group: g.title })))

  return (
    <Section id="skills" labelledBy="skills-title" className="overflow-hidden pt-6 md:pt-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-medium uppercase tracking-[0.12em] text-primary">Skills</p>
        <h2 id="skills-title" className="mt-3 text-xl font-semibold leading-snug md:text-2xl">
          The tools I use to <span className="text-gradient">plan, build, and ship</span> systems.
        </h2>
        <p className="mt-2 text-sm text-muted">Frontend, backend, database, and everyday tools.</p>

        <ul className="mx-auto mt-8 flex max-w-2xl flex-wrap justify-center gap-2.5">
          {tools.map(({ item, group }) => (
            <li
              key={item}
              title={group}
              className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 font-mono text-xs text-badge-ink transition-colors hover:text-ink"
            >
              <ToolIcon name={item} />
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
            <filter id="dot-glow" x="-200%" y="-200%" width="500%" height="500%">
              <feGaussianBlur stdDeviation="3" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
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
          {/* twinkling stars */}
          {stars.map((st, i) => (
            <g key={`star-${i}`} transform={`translate(${st.x} ${st.y})`}>
              <g className="twinkle" style={{ animationDuration: `${st.d}s`, animationDelay: `${st.delay}s` }}>
                <circle r={st.s * 2.2} fill="#a78bfa" opacity="0.3" filter="url(#dot-glow)" />
                <path d={sparkle(st.s * 1.7)} fill="#f5f0ff" filter="url(#dot-glow)" />
              </g>
            </g>
          ))}

          {/* orbiting dots (static for reduced-motion users) */}
          {dots.map((d, i) => {
            const path = orbit(d.rx, d.ry)
            return (
              <circle key={i} r={d.r} fill="#f3e8ff" filter="url(#dot-glow)">
                {reduced ? (
                  <animateMotion dur="1s" path={path} keyPoints={`${d.start};${d.start}`} keyTimes="0;1" calcMode="linear" fill="freeze" />
                ) : (
                  <animateMotion dur={`${d.dur}s`} begin={`-${d.start * d.dur}s`} repeatCount="indefinite" path={path} />
                )}
              </circle>
            )
          })}
        </svg>

        <div className="absolute left-1/2 top-[59%] -translate-x-1/2 -translate-y-1/2">
          <div className="pulse-glow absolute -inset-24 rounded-full bg-[radial-gradient(closest-side,rgba(139,92,246,0.55),transparent)]" />
          <div className="spin-slow absolute -inset-6 rounded-full border border-dashed border-primary/30" />
          <div className="relative grid h-32 w-32 place-items-center rounded-full bg-[radial-gradient(circle_at_30%_25%,#5b2bb8,#1a0e3a_70%)] text-ink shadow-[0_0_60px_10px_rgba(139,92,246,0.45),inset_0_0_30px_rgba(196,181,253,0.25)] md:h-36 md:w-36">
            <WebGlobe reduced={reduced} />
          </div>
        </div>
      </div>
    </Section>
  )
}

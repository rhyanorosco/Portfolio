import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ChevronDown } from 'lucide-react'
import Placeholder from '../components/Placeholder.jsx'
import Overview from '../sections/project/Overview.jsx'
import Problem from '../sections/project/Problem.jsx'
import Solution from '../sections/project/Solution.jsx'
import Objectives from '../sections/project/Objectives.jsx'
import Features from '../sections/project/Features.jsx'
import Role from '../sections/project/Role.jsx'
import TechStack from '../sections/project/TechStack.jsx'
import Architecture from '../sections/project/Architecture.jsx'
import Screens from '../sections/project/Screens.jsx'
import Challenges from '../sections/project/Challenges.jsx'
import Process from '../sections/project/Process.jsx'
import Status from '../sections/project/Status.jsx'
import { caseSections, caseStudy as data } from '../data/marysAngel'
import { useActiveSection } from '../hooks/useActiveSection'

const caseIds = caseSections.map((s) => s.id)

function SectionIndex({ active, onNavigate }) {
  return (
    <ol className="space-y-0.5 text-sm">
      {caseSections.map((s, i) => (
        <li key={s.id}>
          <Link
            to={`#${s.id}`}
            onClick={onNavigate}
            aria-current={active === s.id ? 'location' : undefined}
            className={`flex gap-3 border-l-2 py-1 pl-3 transition-colors ${
              active === s.id ? 'border-primary font-medium text-ink' : 'border-transparent text-muted hover:text-ink'
            }`}
          >
            <span className="font-mono text-xs leading-5 text-primary">{String(i + 1).padStart(2, '0')}</span>
            {s.label}
          </Link>
        </li>
      ))}
    </ol>
  )
}

export default function ProjectMarysAngel() {
  const mobileIndex = useRef(null)
  const active = useActiveSection(caseIds)
  const team = data.overview.facts.find((f) => f.term === 'Team')?.value

  return (
    <article className="container-page py-10 md:py-16">
      <Link to="/#project" className="inline-flex items-center gap-2 text-sm text-primary hover:underline">
        <ArrowLeft size={16} aria-hidden="true" /> Back to portfolio
      </Link>

      <header className="mt-8 max-w-4xl">
        <p className="font-mono text-xs uppercase tracking-widest text-accent">Case study · {data.label}</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">{data.title}</h1>
        <p className="mt-3 text-muted">{data.location}</p>
      </header>

      <div className="mt-10">
        {data.cover ? (
          <img src={data.cover} alt={`Screenshot of ${data.title}`} className="aspect-video w-full rounded border border-line object-cover" />
        ) : (
          <Placeholder label="[ADD COVER SCREENSHOT]" ratio="aspect-video md:aspect-[21/9]" />
        )}
      </div>

      {/* Section index for phones and tablets */}
      <details ref={mobileIndex} className="mt-10 rounded border border-line bg-surface lg:hidden">
        <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 font-mono text-xs uppercase tracking-widest text-muted [&::-webkit-details-marker]:hidden">
          On this page <ChevronDown size={16} aria-hidden="true" />
        </summary>
        <nav aria-label="Case study sections" className="border-t border-line px-4 py-3">
          <SectionIndex active={active} onNavigate={() => mobileIndex.current?.removeAttribute('open')} />
        </nav>
      </details>

      <div className="mt-10 grid gap-12 lg:mt-16 lg:grid-cols-[12rem_minmax(0,1fr)]">
        <aside className="hidden lg:block">
          <nav aria-label="Case study sections" className="sticky top-24">
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted">On this page</p>
            <SectionIndex active={active} />
          </nav>
        </aside>

        <div className="min-w-0">
          <Overview data={data.overview} />
          <Problem data={data.problem} />
          <Solution rows={data.solutionMap} />
          <Objectives data={data.objectives} />
          <Features groups={data.featureGroups} />
          <Role data={data.role} team={team} />
          <TechStack items={data.technologies} />
          <Architecture diagrams={data.diagrams} />
          <Screens screens={data.screens} startAt={data.diagrams.length + 1} />
          <Challenges items={data.challenges} />
          <Process steps={data.process} />
          <Status data={data.result} />
        </div>
      </div>
    </article>
  )
}

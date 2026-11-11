import CaseSection from '../../components/CaseSection.jsx'
import { isMissing } from '../../utils/content'

export default function Overview({ data }) {
  return (
    <CaseSection id="overview" number="01" label="Overview" title="What the system is for">
      <div className="grid gap-8 xl:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] xl:gap-12">
        <p className="max-w-prose text-lg">{data.summary}</p>
        <dl className="rounded border border-line bg-surface px-5">
          {data.facts.map((fact) => (
            <div key={fact.term} className="grid grid-cols-[7rem_minmax(0,1fr)] gap-4 border-b border-line py-3 last:border-b-0">
              <dt className="pt-0.5 font-mono text-[11px] uppercase tracking-widest text-muted">{fact.term}</dt>
              <dd className={`text-sm ${isMissing(fact.value) ? 'italic text-muted' : ''}`}>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </CaseSection>
  )
}

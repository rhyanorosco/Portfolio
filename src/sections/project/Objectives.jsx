import CaseSection from '../../components/CaseSection.jsx'
import { isMissing } from '../../utils/content'

export default function Objectives({ data }) {
  return (
    <CaseSection id="objectives" number="04" label="Objectives" title="What the project set out to do">
      <div className="max-w-prose">
        <h3 className="text-xs font-semibold uppercase tracking-[0.08em] text-muted">General objective</h3>
        <p className="mt-2 text-lg">{data.general}</p>
        <h3 className="mt-8 text-xs font-semibold uppercase tracking-[0.08em] text-muted">Specific objectives</h3>
        <ol className="mt-3 list-decimal space-y-2 pl-5">
          {data.specific.map((item, i) => (
            <li key={i} className={isMissing(item) ? 'italic text-muted' : ''}>
              {item}
            </li>
          ))}
        </ol>
      </div>
    </CaseSection>
  )
}

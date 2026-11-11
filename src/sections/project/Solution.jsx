import { Fragment } from 'react'
import { ArrowDown, ArrowRight } from 'lucide-react'
import CaseSection from '../../components/CaseSection.jsx'
import { isMissing } from '../../utils/content'

const columns = [
  { key: 'problem', label: 'Problem' },
  { key: 'feature', label: 'System feature' },
  { key: 'outcome', label: 'Outcome' },
]
const grid = 'md:grid md:grid-cols-[minmax(0,1fr)_1rem_minmax(0,1fr)_1rem_minmax(0,1fr)] md:items-center md:gap-4'

export default function Solution({ rows }) {
  return (
    <CaseSection
      id="solution"
      number="03"
      label="Proposed solution"
      title="How each problem maps to a feature"
      intro="How the system’s features respond to the clinic’s needs."
    >
      <div className="overflow-hidden rounded border border-line bg-surface">
        <div aria-hidden="true" className={`hidden border-b border-line px-5 py-3 ${grid}`}>
          {columns.map((col, i) => (
            <Fragment key={col.key}>
              {i > 0 && <span />}
              <span className="font-mono text-[11px] uppercase tracking-widest text-muted">{col.label}</span>
            </Fragment>
          ))}
        </div>
        <ol>
          {rows.map((row, r) => (
            <li key={r} className={`space-y-2 border-b border-line px-5 py-4 last:border-b-0 md:space-y-0 ${grid}`}>
              {columns.map((col, i) => (
                <Fragment key={col.key}>
                  {i > 0 && (
                    <span aria-hidden="true" className="block text-primary">
                      <ArrowDown size={14} className="md:hidden" />
                      <ArrowRight size={14} className="hidden md:block" />
                    </span>
                  )}
                  <p
                    className={`text-sm ${col.key === 'feature' ? 'font-medium' : ''} ${
                      isMissing(row[col.key]) ? 'italic text-muted' : ''
                    }`}
                  >
                    <span className="mr-2 font-mono text-[11px] uppercase not-italic tracking-widest text-muted md:sr-only">
                      {col.label}
                      <span className="sr-only">:</span>
                    </span>
                    {row[col.key]}
                  </p>
                </Fragment>
              ))}
            </li>
          ))}
        </ol>
      </div>
    </CaseSection>
  )
}

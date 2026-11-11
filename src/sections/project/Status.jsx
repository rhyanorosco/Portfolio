import { ArrowLeft } from 'lucide-react'
import CaseSection from '../../components/CaseSection.jsx'
import Button from '../../components/Button.jsx'
import { isMissing } from '../../utils/content'

export default function Status({ data }) {
  const muted = (v) => (isMissing(v) ? 'italic text-muted' : '')
  const rows = [
    { term: 'Status', value: data.status, large: true },
    { term: 'Progress so far', value: data.summary },
    { term: 'Next steps', value: data.next },
  ]

  return (
    <CaseSection id="status" number="12" label="Result / current status" title="Where the project stands">
      <dl className="max-w-prose space-y-6">
        {rows.map((row) => (
          <div key={row.term}>
            <dt className="font-mono text-xs uppercase tracking-widest text-muted">{row.term}</dt>
            <dd className={`mt-1 ${row.large ? 'text-lg' : ''} ${muted(row.value)}`}>{row.value}</dd>
          </div>
        ))}
      </dl>
      <div className="mt-12 flex flex-wrap gap-3 border-t border-line pt-8">
        <Button to="/#contact">Get in touch</Button>
        <Button to="/#project" variant="secondary">
          <ArrowLeft size={16} aria-hidden="true" /> Back to portfolio
        </Button>
      </div>
    </CaseSection>
  )
}

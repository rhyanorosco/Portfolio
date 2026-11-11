import CaseSection from '../../components/CaseSection.jsx'
import { isMissing } from '../../utils/content'

export default function Problem({ data }) {
  return (
    <CaseSection id="problem" number="02" label="Problem" title="What the clinic needed to solve">
      <div className="max-w-prose space-y-4">
        <p>{data.context}</p>
        <p className={isMissing(data.current) ? 'italic text-muted' : ''}>{data.current}</p>
      </div>
      <ul className="mt-6 max-w-prose list-disc space-y-2 pl-5">
        {data.points.map((point, i) => (
          <li key={i} className={isMissing(point) ? 'italic text-muted' : ''}>
            {point}
          </li>
        ))}
      </ul>
    </CaseSection>
  )
}

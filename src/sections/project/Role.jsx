import CaseSection from '../../components/CaseSection.jsx'
import Badge from '../../components/Badge.jsx'
import { isMissing } from '../../utils/content'

export default function Role({ data, team }) {
  return (
    <CaseSection id="role" number="06" label="My role" title="What I worked on">
      <div className="max-w-prose">
        <p className={isMissing(data.summary) ? 'italic text-muted' : ''}>{data.summary}</p>
        {!isMissing(team) && <p className="mt-2 text-sm text-muted">Team: {team}</p>}
        <h3 className="mt-8 text-xs font-semibold uppercase tracking-[0.08em] text-muted">Responsibilities</h3>
        {data.areas.length > 0 ? (
          <ul className="mt-3 flex flex-wrap gap-2">
            {data.areas.map((area) => (
              <li key={area}>
                <Badge>{area}</Badge>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-3 italic text-muted">[ADD YOUR RESPONSIBILITIES — e.g. System analysis, UI design, Database design]</p>
        )}
      </div>
    </CaseSection>
  )
}

import CaseSection from '../../components/CaseSection.jsx'
import StatusBadge from '../../components/StatusBadge.jsx'
import Badge from '../../components/Badge.jsx'

const groups = [
  { status: 'confirmed', title: 'In use' },
  { status: 'planned', title: 'Planned / proposed' },
  { status: 'unconfirmed', title: 'To confirm', hideWhenEmpty: true },
]

export default function TechStack({ items }) {
  return (
    <CaseSection
      id="technologies"
      number="07"
      label="Technologies"
      title="What the system is built with"
      intro="Technologies in use are listed separately from those that are planned."
    >
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {groups.map((group) => {
          const list = items.filter((t) => t.status === group.status)
          if (!list.length && group.hideWhenEmpty) return null
          return (
            <div key={group.status} className="rounded-xl border border-line bg-surface p-5 transition-colors duration-150 hover:border-primary-strong/40">
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-medium">{group.title}</h3>
                <StatusBadge status={group.status} />
              </div>
              {list.length ? (
                <ul className="mt-4 space-y-2.5">
                  {list.map((tech) => (
                    <li key={tech.name} className="flex flex-wrap items-center justify-between gap-2">
                      <Badge>{tech.name}</Badge>
                      <span className="font-mono text-xs text-muted">{tech.category}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-4 text-sm text-muted">None listed yet.</p>
              )}
            </div>
          )
        })}
      </div>
    </CaseSection>
  )
}

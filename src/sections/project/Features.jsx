import CaseSection from '../../components/CaseSection.jsx'
import FeatureItem from '../../components/FeatureItem.jsx'

export default function Features({ groups }) {
  return (
    <CaseSection
      id="features"
      number="05"
      label="Key features"
      title="What the system includes"
      intro="Each feature is marked with its current development status."
    >
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {groups.map((group) => (
          <div key={group.title} className="rounded-xl border border-line bg-surface transition-colors duration-150 hover:border-primary-strong/40 px-5 pt-5">
            <h3 className="text-xs font-semibold uppercase tracking-[0.08em] text-primary">{group.title}</h3>
            <ul className="mt-2">
              {group.items.map((item) => (
                <FeatureItem key={item.name} {...item} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </CaseSection>
  )
}

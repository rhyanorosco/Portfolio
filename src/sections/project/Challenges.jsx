import CaseSection from '../../components/CaseSection.jsx'

export default function Challenges({ items }) {
  return (
    <CaseSection
      id="challenges"
      number="10"
      label="Challenges"
      title="Development challenges"
      intro="Challenges encountered while building the system, and how they were handled."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <article key={item.title} className="rounded-xl border border-line bg-surface transition-colors duration-150 hover:border-primary-strong/40 p-5">
            <h3 className="font-semibold">{item.title}</h3>
            <dl className="mt-3 space-y-3 text-sm">
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-[0.08em] text-muted">Challenge</dt>
                <dd className={item.issue ? 'mt-1' : 'mt-1 italic text-muted'}>{item.issue || '[ADD WHAT HAPPENED]'}</dd>
              </div>
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-[0.08em] text-muted">How I handled it</dt>
                <dd className={item.approach ? 'mt-1' : 'mt-1 italic text-muted'}>{item.approach || '[ADD YOUR APPROACH]'}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </CaseSection>
  )
}

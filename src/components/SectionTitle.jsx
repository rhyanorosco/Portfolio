// Section heading: small uppercase label + H2 (28px semi-bold) + optional intro.
// `number` is optional (still used on the case study page until it is restyled).
export default function SectionTitle({ id, number, label, title, intro }) {
  return (
    <header className="max-w-2xl">
      <p className="text-xs font-semibold uppercase tracking-[0.08em] text-primary">
        {number && <span className="mr-2 font-mono">{number}</span>}
        {label}
      </p>
      <h2 id={id} className="mt-3 text-2xl font-semibold leading-[1.25] tracking-[-0.01em] md:text-[1.75rem]">
        {title}
      </h2>
      {intro && <p className="mt-3 text-muted">{intro}</p>}
    </header>
  )
}

export default function SectionTitle({ id, number, label, title, intro }) {
  return (
    <header className="max-w-2xl">
      <p className="font-mono text-xs uppercase tracking-widest text-primary">
        {number} — {label}
      </p>
      <h2 id={id} className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
        {title}
      </h2>
      {intro && <p className="mt-3 text-muted">{intro}</p>}
    </header>
  )
}

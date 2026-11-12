// Section heading: small violet label + H2 + optional intro.
export default function SectionTitle({ id, number, label, title, intro, center = false }) {
  return (
    <header className={`max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      {label && (
        <p className="text-xs font-medium uppercase tracking-[0.12em] text-primary">
          {number && <span className="mr-2 font-mono">{number}</span>}
          {label}
        </p>
      )}
      <h2 id={id} className="mt-3 text-2xl font-semibold leading-[1.25] tracking-[-0.01em] md:text-[2rem]">
        {title}
      </h2>
      {intro && <p className="mt-3 text-muted">{intro}</p>}
    </header>
  )
}

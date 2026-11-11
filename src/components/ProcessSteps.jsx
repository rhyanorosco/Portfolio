// Development process as numbered cards.
export default function ProcessSteps({ steps }) {
  return (
    <ol className="grid gap-3 sm:grid-cols-2 md:gap-4 lg:grid-cols-4">
      {steps.map((step, i) => (
        <li
          key={step.title}
          className="rounded-xl border border-line bg-surface p-5 transition-colors duration-150 hover:border-primary-strong/40"
        >
          <span className="font-mono text-xs text-primary">{String(i + 1).padStart(2, '0')}</span>
          <h3 className="mt-2 font-medium">{step.title}</h3>
          <p className="mt-1 text-sm text-muted">{step.description}</p>
        </li>
      ))}
    </ol>
  )
}

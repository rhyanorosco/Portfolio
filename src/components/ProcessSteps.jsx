export default function ProcessSteps({ steps }) {
  return (
    <ol className="grid gap-px overflow-hidden rounded border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, i) => (
        <li key={step.title} className="bg-surface p-5">
          <span className="font-mono text-xs text-primary">{String(i + 1).padStart(2, '0')}</span>
          <h3 className="mt-2 font-semibold">{step.title}</h3>
          <p className="mt-1 text-sm text-muted">{step.description}</p>
        </li>
      ))}
    </ol>
  )
}

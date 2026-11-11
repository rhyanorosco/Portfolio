// Pill badge for feature / technology status.
const styles = {
  implemented: { label: 'Implemented', cls: 'bg-badge text-badge-ink' },
  confirmed: { label: 'Confirmed', cls: 'bg-badge text-badge-ink' },
  'in-progress': { label: 'In progress', cls: 'border border-warn/50 text-warn' },
  planned: { label: 'Planned', cls: 'bg-surface-2 text-muted' },
  unconfirmed: { label: 'Status to confirm', cls: 'border border-dashed border-line italic text-muted' },
}

export default function StatusBadge({ status = 'unconfirmed' }) {
  const { label, cls } = styles[status] ?? styles.unconfirmed
  return (
    <span
      className={`inline-flex shrink-0 items-center whitespace-nowrap rounded-full px-2.5 py-1 font-mono text-xs font-medium leading-none ${cls}`}
    >
      {label}
    </span>
  )
}

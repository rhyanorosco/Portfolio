const styles = {
  implemented: { label: 'Implemented', cls: 'border-primary text-primary' },
  confirmed: { label: 'Confirmed', cls: 'border-primary text-primary' },
  'in-progress': { label: 'In progress', cls: 'border-accent text-accent' },
  planned: { label: 'Planned', cls: 'border-line text-muted' },
  unconfirmed: { label: 'Status to confirm', cls: 'border-dashed border-line italic text-muted' },
}

export default function StatusBadge({ status = 'unconfirmed' }) {
  const { label, cls } = styles[status] ?? styles.unconfirmed
  return (
    <span className={`inline-flex shrink-0 items-center whitespace-nowrap rounded-sm border px-2 py-0.5 font-mono text-[11px] ${cls}`}>
      {label}
    </span>
  )
}

// Pill-style tag for technologies and features.
export default function Badge({ children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center rounded-full bg-badge px-2.5 py-1 font-mono text-xs font-medium leading-snug text-badge-ink ${className}`}
    >
      {children}
    </span>
  )
}

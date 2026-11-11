import { isMissing } from '../utils/content'

// Shows a link when the value is real, or the plain placeholder text when it isn't yet.
export default function ContactLink({ icon: Icon, label, value, href }) {
  const missing = isMissing(value)
  const external = href?.startsWith('http')

  return (
    <li className="flex items-center gap-4 border-b border-line py-4 last:border-b-0">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded border border-line text-primary">
        <Icon size={18} aria-hidden="true" />
      </span>
      <div className="min-w-0">
        <p className="font-mono text-xs uppercase tracking-widest text-muted">{label}</p>
        {missing ? (
          <p className="italic text-muted">{value || `[ADD ${label.toUpperCase()}]`}</p>
        ) : (
          <a
            href={href}
            className="break-words text-ink hover:text-primary hover:underline"
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            {value}
          </a>
        )}
      </div>
    </li>
  )
}

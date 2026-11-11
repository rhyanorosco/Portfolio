import BentoCard from './BentoCard.jsx'
import { isMissing } from '../utils/content'

// Contact card: shows a link when the value is real, or the placeholder text when it isn't yet.
export default function ContactLink({ icon: Icon, label, value, href }) {
  const missing = isMissing(value)
  const external = href?.startsWith('http')

  return (
    <BentoCard as="li" className="flex items-center gap-4">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-badge text-primary-strong">
        <Icon size={18} aria-hidden="true" />
      </span>
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-[0.08em] text-muted">{label}</p>
        {missing ? (
          <p className="mt-0.5 italic text-muted">{value || `[ADD ${label.toUpperCase()}]`}</p>
        ) : (
          <a
            href={href}
            className="mt-0.5 block break-words font-medium text-ink hover:text-primary hover:underline"
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            {value}
          </a>
        )}
      </div>
    </BentoCard>
  )
}

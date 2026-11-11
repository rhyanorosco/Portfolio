import { isMissing } from '../utils/content'

export default function Timeline({ items }) {
  return (
    <ol className="border-l border-line">
      {items.map((item) => (
        <li key={`${item.title}-${item.period}`} className="relative ml-6 pb-10 last:pb-0">
          <span
            aria-hidden="true"
            className="absolute -left-[29.5px] top-1 h-2.5 w-2.5 rounded-full border-2 border-primary-strong bg-surface ring-4 ring-surface"
          />
          <p className={`font-mono text-xs text-muted ${isMissing(item.period) ? 'italic' : ''}`}>{item.period}</p>
          <h3 className="mt-1 text-xl font-medium">{item.title}</h3>
          <p className="text-muted">{item.subtitle}</p>
          {item.details?.length > 0 && (
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
              {item.details.map((detail) => (
                <li key={detail} className={isMissing(detail) ? 'italic text-muted' : ''}>
                  {detail}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ol>
  )
}

import Placeholder from './Placeholder.jsx'
import { isMissing } from '../utils/content'

// Image + figure number + title + caption. Real images open in the lightbox when clicked.
export default function ImageFrame({ item, figure, ratio = 'aspect-video', onOpen }) {
  const fit = item.fit === 'contain' ? 'object-contain' : 'object-cover'

  return (
    <figure className="flex flex-col">
      {item.image ? (
        <button
          type="button"
          onClick={() => onOpen?.(item, figure)}
          aria-label={`Enlarge ${figure ? `${figure}: ` : ''}${item.title}`}
          className="group block overflow-hidden rounded border border-line bg-surface"
        >
          <img
            src={item.image}
            alt={item.alt || item.title}
            loading="lazy"
            className={`${ratio} w-full ${fit} transition-transform duration-300 group-hover:scale-[1.02]`}
          />
        </button>
      ) : (
        <Placeholder label={`[ADD ${item.title.toUpperCase()}]`} ratio={ratio} />
      )}
      <figcaption className="mt-3">
        <p className="text-sm">
          {figure && <span className="mr-2 font-mono text-xs text-primary">{figure}</span>}
          <span className="font-medium">{item.title}</span>
        </p>
        {item.caption && (
          <p className={`mt-1 text-sm text-muted ${isMissing(item.caption) ? 'italic' : ''}`}>{item.caption}</p>
        )}
      </figcaption>
    </figure>
  )
}

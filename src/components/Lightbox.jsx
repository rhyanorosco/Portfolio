import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'

// Native <dialog>: handles focus trapping, Esc to close, and the backdrop.
export default function Lightbox({ item, figure, onClose }) {
  const ref = useRef(null)

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (item && !dialog.open) dialog.showModal()
    if (!item && dialog.open) dialog.close()
  }, [item])

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && ref.current.close()}
      aria-label={item ? item.title : 'Image viewer'}
      className="m-auto w-[min(96vw,80rem)] max-w-none rounded-xl border border-line bg-surface p-0 text-ink backdrop:bg-black/75"
    >
      {item && (
        <figure>
          <div className="flex items-center justify-between gap-4 border-b border-line px-4 py-3">
            <figcaption className="text-sm">
              {figure && <span className="mr-2 font-mono text-xs text-primary">{figure}</span>}
              {item.title}
            </figcaption>
            <button
              type="button"
              onClick={() => ref.current.close()}
              aria-label="Close image"
              className="grid h-9 w-9 place-items-center rounded-lg border border-line hover:bg-surface-2"
            >
              <X size={16} aria-hidden="true" />
            </button>
          </div>
          <img src={item.image} alt={item.alt || item.title} className="max-h-[80vh] w-full bg-bg object-contain" />
        </figure>
      )}
    </dialog>
  )
}

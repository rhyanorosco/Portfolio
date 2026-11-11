import { ImageIcon } from 'lucide-react'

// Marks where a real image (screenshot, photo, certificate) will go.
export default function Placeholder({ label, ratio = 'aspect-video', bare = false, className = '' }) {
  const frame = bare ? '' : 'rounded border border-dashed border-line'
  return (
    <div
      role="img"
      aria-label={`Placeholder: ${label}`}
      className={`grid w-full place-items-center bg-surface p-4 text-center ${ratio} ${frame} ${className}`}
    >
      <div>
        <ImageIcon size={20} aria-hidden="true" className="mx-auto text-muted" />
        <p className="mt-2 font-mono text-xs text-muted">{label}</p>
      </div>
    </div>
  )
}

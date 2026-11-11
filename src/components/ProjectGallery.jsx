import { useState } from 'react'
import ImageFrame from './ImageFrame.jsx'
import Lightbox from './Lightbox.jsx'

// Grid of numbered figures with a shared lightbox.
// `startAt` continues figure numbers from a previous gallery.
export default function ProjectGallery({ items, startAt = 1, ratio, className = 'sm:grid-cols-2 lg:grid-cols-3' }) {
  const [active, setActive] = useState(null)

  return (
    <>
      <div className={`grid gap-x-6 gap-y-10 ${className}`}>
        {items.map((item, i) => (
          <ImageFrame
            key={`${item.title}-${i}`}
            item={item}
            figure={`Fig. ${startAt + i}`}
            ratio={ratio}
            onOpen={(it, figure) => setActive({ item: it, figure })}
          />
        ))}
      </div>
      <Lightbox item={active?.item} figure={active?.figure} onClose={() => setActive(null)} />
    </>
  )
}

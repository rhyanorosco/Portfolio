import { useEffect, useState } from 'react'

// Returns the id of the section currently at the top of the viewport (or null).
// `offset` should be a little larger than the sticky navbar height.
export function useActiveSection(ids, offset = 120) {
  const [active, setActive] = useState(null)
  const key = ids.join(',')

  useEffect(() => {
    const sections = key
      .split(',')
      .filter(Boolean)
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (!sections.length) {
      setActive(null)
      return
    }

    let frame = 0
    const update = () => {
      frame = 0
      let current = null
      for (const section of sections) {
        if (section.getBoundingClientRect().top - offset <= 0) current = section.id
      }
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2
      if (atBottom) {
        // Sections near the end can't scroll to the top. Prefer the one the user just navigated to.
        const target = sections.find((s) => `#${s.id}` === decodeURIComponent(window.location.hash))
        const top = target?.getBoundingClientRect().top
        current = target && top >= 0 && top < window.innerHeight ? target.id : sections[sections.length - 1].id
      }
      setActive(current)
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [key, offset])

  return active
}

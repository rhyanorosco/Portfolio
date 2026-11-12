import { useEffect, useState } from 'react'

// Types and erases each phrase in turn. Reduced-motion users see the first phrase only.
export function useTypewriter(phrases, { typeMs = 70, eraseMs = 35, holdMs = 1800 } = {}) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState(phrases[0])
  const [phase, setPhase] = useState('hold')

  useEffect(() => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return
    const full = phrases[index]
    let t
    if (phase === 'hold') t = setTimeout(() => setPhase('erase'), holdMs)
    else if (phase === 'erase') {
      if (text.length === 0) {
        setIndex((i) => (i + 1) % phrases.length)
        setPhase('type')
      } else t = setTimeout(() => setText(full.slice(0, text.length - 1)), eraseMs)
    } else {
      const next = phrases[index]
      if (text === next) setPhase('hold')
      else t = setTimeout(() => setText(next.slice(0, text.length + 1)), typeMs)
    }
    return () => clearTimeout(t)
  }, [phrases, index, text, phase, typeMs, eraseMs, holdMs])

  return text
}

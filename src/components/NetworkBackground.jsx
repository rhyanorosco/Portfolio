import { useEffect, useRef } from 'react'

// Page background: dots joined by thin lines, like a network diagram.
// The dots drift slowly. Visitors who turn off animations see a still version.
const LINK_DISTANCE = 190 // px: dots closer than this get a line
const SPEED = 0.12 // px per frame

export default function NetworkBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    let width = 0
    let height = 0
    let dots = []
    let frame = 0

    const setup = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      // Size from the canvas itself (it fills the screen with CSS), not window.innerWidth,
      // which on phones can be wider than the screen and make the page slide sideways.
      const rect = canvas.getBoundingClientRect()
      width = rect.width
      height = rect.height
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      // About one dot per 26,000 px² (≈50 on a laptop, ≈15 on a phone)
      const count = Math.round((width * height) / 26000)
      dots = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 2 * SPEED,
        vy: (Math.random() - 0.5) * 2 * SPEED,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      for (let i = 0; i < dots.length; i++) {
        const a = dots[i]
        for (let j = i + 1; j < dots.length; j++) {
          const b = dots[j]
          const d = Math.hypot(a.x - b.x, a.y - b.y)
          if (d < LINK_DISTANCE) {
            ctx.strokeStyle = `rgba(167, 139, 250, ${0.4 * (1 - d / LINK_DISTANCE)})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }
      ctx.fillStyle = 'rgba(196, 181, 253, 0.7)'
      for (const d of dots) {
        ctx.beginPath()
        ctx.arc(d.x, d.y, 1.8, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const step = () => {
      for (const d of dots) {
        d.x += d.vx
        d.y += d.vy
        if (d.x < 0 || d.x > width) d.vx *= -1
        if (d.y < 0 || d.y > height) d.vy *= -1
      }
      draw()
      frame = requestAnimationFrame(step)
    }

    const start = () => {
      cancelAnimationFrame(frame)
      if (reduced) draw()
      else frame = requestAnimationFrame(step)
    }

    // Pause while the tab is hidden to save battery.
    const onVisibility = () => (document.hidden ? cancelAnimationFrame(frame) : start())

    let resizeTimer = 0
    const onResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(() => {
        setup()
        start()
      }, 150)
    }

    setup()
    start()
    window.addEventListener('resize', onResize)
    document.addEventListener('visibilitychange', onVisibility)
    return () => {
      cancelAnimationFrame(frame)
      clearTimeout(resizeTimer)
      window.removeEventListener('resize', onResize)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  return <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 block h-full w-full" />
}

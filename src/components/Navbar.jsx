import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../data/nav'
import { useActiveSection } from '../hooks/useActiveSection'
import Logo from './Logo.jsx'

const sectionIds = navLinks.map((l) => l.id)

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { key, pathname } = useLocation()
  const active = useActiveSection(pathname === '/' ? sectionIds : [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [key])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const solid = scrolled || open

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-200 ${
        solid ? 'border-b border-line/70 bg-bg/80 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <nav aria-label="Main" className="container-page flex h-16 items-center justify-between gap-4">
        <Link to="/" aria-label="Rhyan Orosco — home" className="text-ink transition-colors hover:text-primary">
          <Logo size={30} />
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive = active === link.id
            return (
              <li key={link.id}>
                <Link
                  to={`/#${link.id}`}
                  aria-current={isActive ? 'location' : undefined}
                  className={`text-sm transition-colors ${isActive ? 'text-ink' : 'text-muted hover:text-ink'}`}
                >
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="grid h-10 w-10 place-items-center rounded-lg border border-line text-muted transition-colors hover:bg-surface-2 hover:text-ink md:hidden"
        >
          {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
        </button>
      </nav>

      {open && (
        <div id="mobile-nav" className="menu-enter absolute inset-x-0 top-full px-4 pt-2 md:hidden">
          <ul className="glass rounded-xl p-2">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  to={`/#${link.id}`}
                  aria-current={active === link.id ? 'location' : undefined}
                  className={`block rounded-lg px-3 py-3 font-medium transition-colors ${
                    active === link.id ? 'bg-surface-2 text-ink' : 'text-muted hover:bg-surface-2 hover:text-ink'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

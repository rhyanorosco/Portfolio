import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../data/nav'
import { profile } from '../data/profile'
import { useActiveSection } from '../hooks/useActiveSection'
import ThemeToggle from './ThemeToggle.jsx'

const sectionIds = navLinks.map((l) => l.id)

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { key, pathname } = useLocation()
  const active = useActiveSection(pathname === '/' ? sectionIds : [])

  // Transparent at the top of the page; solid + blurred after scrolling.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu after any navigation.
  useEffect(() => {
    setOpen(false)
  }, [key])

  // Close the mobile menu with Escape.
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const solid = scrolled || open

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-colors duration-200 ${
        solid ? 'border-line bg-bg/85 backdrop-blur-md' : 'border-transparent bg-transparent'
      }`}
    >
      <nav aria-label="Main" className="container-page flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2.5 font-semibold tracking-tight">
          <span
            aria-hidden="true"
            className="grid h-8 w-8 place-items-center rounded-lg bg-primary font-mono text-[11px] font-medium text-primary-ink"
          >
            RO
          </span>
          {profile.name}
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = active === link.id
            return (
              <li key={link.id}>
                <Link
                  to={`/#${link.id}`}
                  aria-current={isActive ? 'location' : undefined}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-primary underline decoration-2 underline-offset-[10px]'
                      : 'text-muted hover:bg-surface-2 hover:text-ink'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="grid h-10 w-10 place-items-center rounded-lg border border-line text-muted transition-colors hover:bg-surface-2 hover:text-ink lg:hidden"
          >
            {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-nav" className="menu-enter absolute inset-x-0 top-full px-4 pt-2 lg:hidden">
          <ul className="rounded-xl border border-line bg-surface p-2 shadow-lg shadow-black/20">
            {navLinks.map((link) => {
              const isActive = active === link.id
              return (
                <li key={link.id}>
                  <Link
                    to={`/#${link.id}`}
                    aria-current={isActive ? 'location' : undefined}
                    className={`block rounded-lg px-3 py-3 font-medium transition-colors ${
                      isActive ? 'bg-surface-2 text-primary' : 'text-muted hover:bg-surface-2 hover:text-ink'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </header>
  )
}

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
  const { key, pathname } = useLocation()
  const active = useActiveSection(pathname === '/' ? sectionIds : [])

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

  const linkClass = (id) =>
    `transition-colors ${
      active === id ? 'text-ink underline decoration-primary decoration-2 underline-offset-[6px]' : 'text-muted hover:text-ink'
    }`

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg">
      <nav aria-label="Main" className="container-page flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2.5 font-semibold">
          <span
            aria-hidden="true"
            className="grid h-7 w-7 place-items-center rounded bg-primary font-mono text-[11px] font-medium text-primary-ink"
          >
            RO
          </span>
          {profile.name}
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                to={`/#${link.id}`}
                aria-current={active === link.id ? 'location' : undefined}
                className={`text-sm ${linkClass(link.id)}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="grid h-9 w-9 place-items-center rounded border border-line text-muted hover:border-primary hover:text-ink lg:hidden"
          >
            {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-nav" className="menu-enter absolute inset-x-0 top-full border-b border-t border-line bg-bg shadow-sm lg:hidden">
          <ul className="container-page py-2">
            {navLinks.map((link) => (
              <li key={link.id} className="border-b border-line last:border-b-0">
                <Link
                  to={`/#${link.id}`}
                  aria-current={active === link.id ? 'location' : undefined}
                  className={`block py-3 ${active === link.id ? 'font-medium text-ink' : 'text-muted hover:text-ink'}`}
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

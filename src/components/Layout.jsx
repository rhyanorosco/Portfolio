import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import NetworkBackground from './NetworkBackground.jsx'

export default function Layout() {
  const { pathname, hash, key } = useLocation()

  // Scroll to #section links (also from other pages); otherwise start new pages at the top.
  useEffect(() => {
    if (hash) {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)))
      if (target) {
        target.scrollIntoView()
        return
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash, key])

  return (
    <div className="flex min-h-screen flex-col">
      <NetworkBackground />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-surface focus:px-3 focus:py-2 focus:text-sm"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main" tabIndex={-1} className="flex-1 overflow-x-clip focus:outline-none">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

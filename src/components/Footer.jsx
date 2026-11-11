import { ArrowUp } from 'lucide-react'
import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container-page flex flex-col gap-2 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p>Built with React, Vite, and Tailwind CSS.</p>
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0 })}
          className="inline-flex items-center gap-1.5 self-start hover:text-ink sm:self-auto"
        >
          Back to top <ArrowUp size={14} aria-hidden="true" />
        </button>
      </div>
    </footer>
  )
}

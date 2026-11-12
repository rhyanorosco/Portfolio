import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { profile } from '../data/profile'
import { useTypewriter } from '../hooks/useTypewriter'

const roles = ['an IT Student.', 'a Student Developer.', 'a System Designer.']

function Avatar() {
  return (
    <div className="relative shrink-0">
      <div className="glow -inset-6" aria-hidden="true" />
      <div className="relative h-28 w-28 rounded-full bg-gradient-to-br from-[#c4b5fd] via-[#8b5cf6] to-[#e879f9] p-[3px] sm:h-32 sm:w-32">
        {profile.photo ? (
          <img
            src={profile.photo}
            alt={`Portrait of ${profile.name}`}
            className="h-full w-full rounded-full object-cover"
          />
        ) : (
          <div
            role="img"
            aria-label="Profile photo placeholder"
            className="grid h-full w-full place-items-center rounded-full bg-surface font-display text-3xl font-semibold text-primary"
          >
            RO
          </div>
        )}
      </div>
    </div>
  )
}

export default function Hero() {
  const role = useTypewriter(roles)

  return (
    <section id="home" aria-labelledby="hero-title" className="relative overflow-hidden pb-20 pt-14 md:pb-28 md:pt-20">
      <div className="container-page">
        {/* Tagline block */}
        <div className="enter mx-auto flex max-w-3xl flex-col items-center gap-6 text-center sm:flex-row sm:items-end sm:text-left">
          <Avatar />
          <div>
            <p className="text-sm text-muted">
              Hello! I’m <span className="text-primary">{profile.name}</span>
            </p>
            <p className="mt-1 font-display text-[2.25rem] font-semibold leading-[1.08] tracking-[-0.02em] sm:text-5xl">
              Builds systems from <br className="hidden sm:block" />
              the <span className="text-gradient">problem</span> up.
            </p>
          </div>
        </div>

        {/* Intro */}
        <div style={{ '--delay': '120ms' }} className="enter mx-auto mt-16 max-w-3xl md:mt-20">
          <h1
            id="hero-title"
            aria-label={`I’m ${roles[0]}`}
            className="font-display text-[1.875rem] font-semibold tracking-[-0.02em] sm:text-[2.5rem]"
          >
            <span aria-hidden="true">
              I’m {role}
              <span className="caret ml-0.5 font-light text-primary">|</span>
            </span>
          </h1>
          <p className="mt-2 text-muted">
            Currently studying {profile.field} at{' '}
            <span className="inline-flex items-center gap-1.5 text-ink">
              <span className="h-2 w-2 rounded-full bg-primary-strong" aria-hidden="true" />
              {profile.school}
            </span>
          </p>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-secondary">
            I analyze problems, design information systems, and build web and mobile applications for real-world
            needs — starting with an appointment system for a local birthing home.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/#project"
              className="btn-gradient inline-flex min-h-11 items-center gap-2 rounded-full px-6 text-sm font-semibold transition"
            >
              View my project <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link
              to="/#contact"
              className="inline-flex min-h-11 items-center rounded-full border border-line px-6 text-sm font-semibold text-ink transition-colors hover:border-primary-strong hover:text-primary"
            >
              Contact me
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

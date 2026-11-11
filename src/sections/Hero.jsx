import { ArrowRight } from 'lucide-react'
import Button from '../components/Button.jsx'
import Placeholder from '../components/Placeholder.jsx'
import { profile } from '../data/profile'

const facts = [
  { term: 'Program', value: profile.program },
  { term: 'School', value: profile.school },
  { term: 'Main project', value: 'Mary’s Angel Appointment System' },
]

export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="pb-16 pt-10 md:pb-24 md:pt-20">
      <div className="container-page">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-16">
          {/* Text */}
          <div className="order-2 lg:order-1">
            <p className="enter text-xs font-semibold uppercase tracking-[0.08em] text-primary">
              {profile.field} Student
            </p>
            <h1
              id="hero-title"
              style={{ '--delay': '60ms' }}
              className="enter mt-3 text-[1.875rem] font-bold leading-[1.15] tracking-[-0.02em] sm:text-[2.25rem]"
            >
              Hi, I’m {profile.name}.
            </h1>
            <p style={{ '--delay': '120ms' }} className="enter mt-5 max-w-xl text-lg text-muted">
              I analyze problems, design information systems, and build web and mobile applications for real-world
              needs — starting with an appointment system for a local birthing home.
            </p>
            <div style={{ '--delay': '180ms' }} className="enter mt-8 flex flex-wrap gap-3">
              <Button to="/#project">
                View my project <ArrowRight size={16} aria-hidden="true" />
              </Button>
              <Button to="/#contact" variant="secondary">
                Contact me
              </Button>
            </div>
          </div>

          {/* Photo */}
          <div style={{ '--delay': '100ms' }} className="enter order-1 w-36 sm:w-44 lg:order-2 lg:w-full">
            {profile.photo ? (
              <img
                src={profile.photo}
                alt={`Portrait of ${profile.name}`}
                className="aspect-[4/5] w-full rounded-xl border border-line object-cover"
              />
            ) : (
              <div className="overflow-hidden rounded-xl border border-dashed border-line">
                <Placeholder label="[ADD PROFILE PHOTO]" ratio="aspect-[4/5]" bare />
              </div>
            )}
          </div>
        </div>

        {/* Quick facts */}
        <dl style={{ '--delay': '260ms' }} className="enter mt-12 grid gap-3 sm:grid-cols-3">
          {facts.map((fact) => (
            <div key={fact.term} className="rounded-xl border border-line p-4">
              <dt className="font-mono text-xs text-muted">{fact.term}</dt>
              <dd className="mt-1 text-sm font-medium">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

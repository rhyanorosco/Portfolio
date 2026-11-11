import { ArrowRight } from 'lucide-react'
import Button from '../components/Button.jsx'
import { profile } from '../data/profile'

const facts = [
  { term: 'Program', value: profile.program },
  { term: 'School', value: profile.school },
  { term: 'Main project', value: 'Mary’s Angel Appointment System' },
]

export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="py-16 md:py-28">
      <div className="container-page">
        <p className="enter font-mono text-xs uppercase tracking-widest text-primary">{profile.field} Student</p>
        <h1 id="hero-title" style={{ '--delay': '60ms' }} className="enter mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
          Hi, I’m {profile.name}.
        </h1>
        <p style={{ '--delay': '120ms' }} className="enter mt-6 max-w-2xl text-lg text-muted md:text-xl">
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

        <dl style={{ '--delay': '260ms' }} className="enter mt-14 grid border-t border-line sm:grid-cols-3">
          {facts.map((fact) => (
            <div key={fact.term} className="border-b border-line py-4 sm:border-b-0 sm:pr-6">
              <dt className="font-mono text-xs uppercase tracking-widest text-muted">{fact.term}</dt>
              <dd className="mt-1 text-sm">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

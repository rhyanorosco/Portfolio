import { Github, Mail, Phone } from 'lucide-react'
import Section from '../components/Section.jsx'
import { profile } from '../data/profile'

export default function Contact() {
  const links = [
    { label: 'Email', icon: Mail, value: profile.email, href: `mailto:${profile.email}` },
    { label: 'GitHub', icon: Github, value: profile.github.replace('https://', ''), href: profile.github },
    { label: 'Contact number', icon: Phone, value: profile.phone, href: profile.phoneHref },
  ]

  return (
    <Section id="contact" labelledBy="contact-title">
      <div className="mx-auto max-w-4xl">
        <h2 id="contact-title" className="text-2xl font-semibold md:text-[2rem]">
          Contact
        </h2>
        <p className="mt-4 max-w-lg text-muted">
          Interested in working together or learning more about my projects? Feel free to reach out about internships,
          school projects, or anything you see in this portfolio.
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="text-gradient mt-8 inline-block break-all font-display text-xl font-semibold hover:opacity-80 md:text-2xl"
        >
          {profile.email}
        </a>

        <ul className="mt-8 grid gap-3 sm:grid-cols-3">
          {links.map(({ label, icon: Icon, value, href }) => {
            const external = href.startsWith('http')
            return (
              <li key={label}>
                <a
                  href={href}
                  className="glass glass-hover flex items-center gap-3 rounded-xl p-4"
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-badge text-primary">
                    <Icon size={18} aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-muted">{label}</span>
                    <span className="block truncate text-sm font-medium text-ink">{value}</span>
                  </span>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </Section>
  )
}

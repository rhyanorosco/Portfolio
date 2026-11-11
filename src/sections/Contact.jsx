import { Briefcase, FolderGit2, Link as LinkIcon, Mail } from 'lucide-react'
import Section from '../components/Section.jsx'
import BentoCard from '../components/BentoCard.jsx'
import Button from '../components/Button.jsx'
import ContactLink from '../components/ContactLink.jsx'
import { profile } from '../data/profile'
import { isMissing } from '../utils/content'

export default function Contact() {
  const links = [
    { label: 'Email', icon: Mail, value: profile.email, href: `mailto:${profile.email}` },
    { label: 'GitHub', icon: FolderGit2, value: profile.github, href: profile.github },
    { label: 'LinkedIn', icon: Briefcase, value: profile.linkedin, href: profile.linkedin },
    ...profile.otherLinks.map((l) => ({ label: l.label, icon: LinkIcon, value: l.url, href: l.url })),
  ]
  const hasEmail = !isMissing(profile.email)

  return (
    <Section id="contact" labelledBy="contact-title">
      <div className="grid gap-3 md:gap-4 lg:grid-cols-12">
        {/* Call to action */}
        <BentoCard className="flex flex-col justify-between gap-8 md:p-8 lg:col-span-7">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-primary">Contact</p>
            <h2
              id="contact-title"
              className="mt-3 max-w-lg text-2xl font-semibold leading-[1.25] tracking-[-0.01em] md:text-[1.75rem]"
            >
              Interested in working together or learning more about my projects?
            </h2>
            <p className="mt-3 max-w-lg text-muted">
              Feel free to reach out about internships, school projects, or anything you see in this portfolio.
            </p>
          </div>
          {hasEmail ? (
            <div>
              <Button href={`mailto:${profile.email}`}>
                <Mail size={16} aria-hidden="true" /> Email me
              </Button>
            </div>
          ) : (
            <p className="text-sm italic text-muted">[ADD EMAIL — the “Email me” button appears once it’s added]</p>
          )}
        </BentoCard>

        {/* Links */}
        <ul className="grid gap-3 md:grid-cols-3 md:gap-4 lg:col-span-5 lg:grid-cols-1">
          {links.map((link) => (
            <ContactLink key={link.label} {...link} />
          ))}
        </ul>
      </div>
    </Section>
  )
}

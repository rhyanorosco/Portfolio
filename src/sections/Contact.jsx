import { Briefcase, FolderGit2, Link as LinkIcon, Mail } from 'lucide-react'
import Section from '../components/Section.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import ContactLink from '../components/ContactLink.jsx'
import { profile } from '../data/profile'

export default function Contact() {
  const links = [
    { label: 'Email', icon: Mail, value: profile.email, href: `mailto:${profile.email}` },
    { label: 'GitHub', icon: FolderGit2, value: profile.github, href: profile.github },
    { label: 'LinkedIn', icon: Briefcase, value: profile.linkedin, href: profile.linkedin },
    ...profile.otherLinks.map((l) => ({ label: l.label, icon: LinkIcon, value: l.url, href: l.url })),
  ]

  return (
    <Section id="contact" labelledBy="contact-title">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <SectionTitle
          id="contact-title"
          number="06"
          label="Contact"
          title="Interested in working together or learning more about my projects?"
          intro="Feel free to reach out about internships, school projects, or anything you see in this portfolio."
        />
        <ul className="rounded border border-line bg-surface px-5">
          {links.map((link) => (
            <ContactLink key={link.label} {...link} />
          ))}
        </ul>
      </div>
    </Section>
  )
}

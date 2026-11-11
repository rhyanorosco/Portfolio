import Section from '../components/Section.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import CertificateCard from '../components/CertificateCard.jsx'
import { certificates } from '../data/certificates'

// Shown only until real certificates are added in src/data/certificates.js
const placeholders = Array.from({ length: 3 }, (_, i) => ({
  id: `placeholder-${i}`,
  title: '[ADD CERTIFICATE TITLE]',
  issuer: '[ADD ISSUING ORGANIZATION]',
  date: '[ADD DATE]',
}))

export default function Certificates() {
  const items = certificates.length > 0 ? certificates : placeholders

  return (
    <Section id="certificates" labelledBy="certificates-title">
      <SectionTitle id="certificates-title" number="05" label="Certificates" title="Certificates" />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((cert, i) => (
          <CertificateCard key={cert.id ?? `${cert.title}-${i}`} cert={cert} />
        ))}
      </div>
    </Section>
  )
}

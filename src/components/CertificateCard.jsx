import BentoCard from './BentoCard.jsx'
import Placeholder from './Placeholder.jsx'
import { isMissing } from '../utils/content'

export default function CertificateCard({ cert }) {
  const muted = (value) => (isMissing(value) ? 'italic' : '')

  return (
    <BentoCard as="article" padded={false} className="flex flex-col p-3">
      <div className="overflow-hidden rounded-lg border border-line">
        {cert.image ? (
          <a href={cert.image} target="_blank" rel="noopener noreferrer" aria-label={`Open full certificate: ${cert.title}`}>
            <img
              src={cert.image}
              alt={`Certificate: ${cert.title}`}
              loading="lazy"
              className={`w-full bg-white object-cover ${cert.portrait ? 'aspect-[3/4] object-top' : 'aspect-[4/3]'}`}
            />
          </a>
        ) : (
          <Placeholder label="[ADD CERTIFICATE IMAGE]" ratio="aspect-[4/3]" bare />
        )}
      </div>
      <div className="px-2 pb-2 pt-4">
        <h3 className={`font-medium ${muted(cert.title) && 'italic text-muted'}`}>{cert.title}</h3>
        <p className={`mt-1 text-sm text-muted ${muted(cert.issuer)}`}>{cert.issuer}</p>
        <p className={`mt-2 font-mono text-xs text-muted ${muted(cert.date)}`}>{cert.date}</p>
        {cert.description && <p className="mt-3 text-sm text-muted">{cert.description}</p>}
      </div>
    </BentoCard>
  )
}

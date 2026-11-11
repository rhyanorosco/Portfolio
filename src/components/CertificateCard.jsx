import Placeholder from './Placeholder.jsx'
import { isMissing } from '../utils/content'

export default function CertificateCard({ cert }) {
  const muted = (value) => (isMissing(value) ? 'italic text-muted' : '')

  return (
    <article className="flex flex-col overflow-hidden rounded border border-line bg-surface">
      <div className="border-b border-line">
        {cert.image ? (
          <img
            src={cert.image}
            alt={`Certificate: ${cert.title}`}
            loading="lazy"
            className="aspect-[4/3] w-full object-cover"
          />
        ) : (
          <Placeholder label="[ADD CERTIFICATE IMAGE]" ratio="aspect-[4/3]" bare />
        )}
      </div>
      <div className="p-4">
        <h3 className={`font-semibold ${muted(cert.title)}`}>{cert.title}</h3>
        <p className={`mt-1 text-sm text-muted ${muted(cert.issuer)}`}>{cert.issuer}</p>
        <p className={`mt-1 font-mono text-xs text-muted ${muted(cert.date)}`}>{cert.date}</p>
        {cert.description && <p className="mt-3 text-sm">{cert.description}</p>}
      </div>
    </article>
  )
}

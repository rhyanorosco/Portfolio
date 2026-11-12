import Reveal from './Reveal.jsx'

// Standard wrapper for Home page sections: consistent spacing and fade-in.
export default function Section({ id, labelledBy, className = '', children }) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`relative py-16 md:py-24 ${className}`}>
      <Reveal className="container-page">{children}</Reveal>
    </section>
  )
}

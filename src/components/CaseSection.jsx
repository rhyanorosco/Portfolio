import Reveal from './Reveal.jsx'
import SectionTitle from './SectionTitle.jsx'

// A numbered section on the case study page.
export default function CaseSection({ id, number, label, title, intro, children }) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="border-t border-line py-12 first:border-t-0 first:pt-0 md:py-16"
    >
      <Reveal>
        <SectionTitle id={`${id}-title`} number={number} label={label} title={title} intro={intro} />
        <div className="mt-8">{children}</div>
      </Reveal>
    </section>
  )
}

import { ArrowRight } from 'lucide-react'
import Button from './Button.jsx'
import Placeholder from './Placeholder.jsx'
import { isMissing } from '../utils/content'

export default function ProjectCard({ project }) {
  return (
    <article className="group grid overflow-hidden rounded border border-line bg-surface transition-colors hover:border-primary/50 lg:grid-cols-2">
      <div className="overflow-hidden border-b border-line lg:border-b-0 lg:border-r">
        {project.cover ? (
          <img
            src={project.cover}
            alt={`Screenshot of ${project.title}`}
            loading="lazy"
            className="aspect-video h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        ) : (
          <Placeholder label="[ADD COVER SCREENSHOT]" bare className="h-full" />
        )}
      </div>

      <div className="flex flex-col p-6 md:p-8">
        <p className="font-mono text-xs uppercase tracking-widest text-accent">{project.label}</p>
        <h3 className="mt-3 text-xl font-semibold leading-snug md:text-2xl">{project.title}</h3>
        <p className="mt-1 text-sm text-muted">{project.location}</p>
        <p className="mt-4">{project.summary}</p>

        <p className="mt-5 font-mono text-[11px] uppercase tracking-widest text-muted">Key features</p>
        <ul className="mt-2 grid gap-2 text-sm sm:grid-cols-2">
          {project.highlights.map((item) => (
            <li key={item} className="flex gap-2">
              <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 bg-primary" />
              {item}
            </li>
          ))}
        </ul>

        <p className="mt-5 font-mono text-xs text-muted">
          Status: <span className={isMissing(project.status) ? 'italic' : 'text-ink'}>{project.status}</span>
        </p>

        <div className="mt-6 lg:mt-auto lg:pt-6">
          <Button to={`/projects/${project.slug}`}>
            Read the case study <ArrowRight size={16} aria-hidden="true" />
          </Button>
        </div>
      </div>
    </article>
  )
}

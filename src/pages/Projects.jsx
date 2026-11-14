import { ArrowLeft, ArrowUpRight, Github } from 'lucide-react'
import { Link } from 'react-router-dom'
import Placeholder from '../components/Placeholder.jsx'
import { moreProjects } from '../data/project'

export default function Projects() {
  return (
    <section aria-labelledby="projects-title" className="py-10 md:py-14">
      <div className="container-page">
        <div className="mx-auto max-w-5xl">
          <Link
            to="/#project"
            className="inline-flex min-h-10 items-center gap-2 rounded-full border border-line px-4 text-sm font-semibold text-ink transition-colors hover:border-primary-strong hover:text-primary"
          >
            <ArrowLeft size={16} aria-hidden="true" /> Back to project
          </Link>
          <p className="mt-10 text-xs font-medium uppercase tracking-[0.12em] text-primary">Projects</p>
          <h1 id="projects-title" className="mt-3 text-3xl font-semibold md:text-[2.5rem]">
            More projects
          </h1>
          <p className="mt-3 max-w-xl text-muted">Other systems and apps I’ve worked on.</p>

          <ul className="mt-10 grid gap-5 md:grid-cols-2">
            {moreProjects.map((p) => (
              <li key={p.title} className="glass glass-hover flex flex-col overflow-hidden rounded-2xl">
                {p.cover ? (
                  <img src={p.cover} alt={`Screenshot of ${p.title}`} loading="lazy" className="aspect-[16/10] w-full object-cover object-top" />
                ) : (
                  <Placeholder label="[ADD SCREENSHOT]" ratio="aspect-[16/10]" bare />
                )}
                <div className="flex flex-1 flex-col p-5 md:p-6">
                  <h2 className="font-display text-lg font-semibold">{p.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{p.summary}</p>
                  {p.tags?.length > 0 && (
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <li key={t} className="rounded-full bg-badge px-3 py-1 font-mono text-[11px] text-badge-ink">
                          {t}
                        </li>
                      ))}
                    </ul>
                  )}
                  {(p.link || p.github) && (
                    <div className="mt-auto flex gap-5 pt-5 text-sm font-semibold">
                      {p.link && (
                        <a href={p.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-primary hover:text-ink">
                          Live demo <ArrowUpRight size={15} aria-hidden="true" />
                        </a>
                      )}
                      {p.github && (
                        <a href={p.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-primary hover:text-ink">
                          <Github size={15} aria-hidden="true" /> Code
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

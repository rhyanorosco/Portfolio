import { ArrowRight, ArrowUpRight, Monitor, Smartphone } from 'lucide-react'
import { Link } from 'react-router-dom'
import Section from '../components/Section.jsx'
import Placeholder from '../components/Placeholder.jsx'
import { featuredProject as project, moreProjects } from '../data/project'

// Browser-window frame around the project screenshot.
function BrowserFrame() {
  return (
    <div className="relative">
      <div className="glow -inset-4 opacity-60 sm:-inset-10" aria-hidden="true" />
      <div className="relative overflow-hidden rounded-xl bg-black shadow-2xl shadow-black/60">
        <div className="flex items-center gap-1.5 border-b border-white/10 bg-black px-3 py-2" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        {project.cover ? (
          <img
            src={project.cover}
            alt={`Screenshot of ${project.title}`}
            loading="lazy"
            className="block h-auto w-full"
          />
        ) : (
          <Placeholder label="[ADD COVER SCREENSHOT]" ratio="aspect-[16/10]" bare className="!bg-surface" />
        )}
      </div>
    </div>
  )
}

export default function FeaturedProject() {
  return (
    <Section id="project" labelledBy="project-title">
      <div className="mx-auto max-w-5xl">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-0">
          {/* Text + overlapping card */}
          <div className="relative z-10 lg:col-span-6">
            <p className="text-sm text-primary">{project.label}</p>
            <h2 id="project-title" className="mt-1 text-xl font-semibold leading-snug md:text-2xl">
              AN AUTOMATED WEB AND MOBILE APPOINTMENT SYSTEM FOR MARY’S ANGEL BIRTHING HOME IN TAYSAN, LEGAZPI CITY
            </h2>
            <p className="mt-2 text-sm text-muted">{project.location}</p>

            <div className="glass mt-6 rounded-xl p-5 md:p-6 lg:-mr-24">
              <p className="text-[15px] leading-relaxed text-secondary">{project.summary}</p>
            </div>

            <ul className="mt-5 flex flex-wrap gap-2" aria-label="Key features">
              {project.highlights.slice(0, 4).map((item) => (
                <li key={item} className="rounded-full bg-badge px-3 py-1 font-mono text-[11px] text-badge-ink">
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex items-center gap-4">
              <span className="flex gap-2 text-primary" aria-label="Web and mobile">
                <Monitor size={18} aria-hidden="true" />
                <Smartphone size={18} aria-hidden="true" />
              </span>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gradient inline-flex min-h-10 items-center gap-1.5 rounded-full px-5 text-sm font-semibold transition"
                >
                  Visit the system <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              )}
              {moreProjects.length > 0 && (
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-ink"
                >
                  View more projects <ArrowRight size={16} aria-hidden="true" />
                </Link>
              )}
            </div>
          </div>

          {/* Screenshot */}
          <div className="lg:col-span-6 lg:pl-16 xl:-mr-8">
            <BrowserFrame />
          </div>
        </div>
      </div>
    </Section>
  )
}

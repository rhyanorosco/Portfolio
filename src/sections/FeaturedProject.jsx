import { ArrowRight, CircleDot, ListChecks, Monitor, Smartphone, Users } from 'lucide-react'
import Section from '../components/Section.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import BentoCard from '../components/BentoCard.jsx'
import Badge from '../components/Badge.jsx'
import Button from '../components/Button.jsx'
import Placeholder from '../components/Placeholder.jsx'
import TileLabel from '../components/TileLabel.jsx'
import { featuredProject as project } from '../data/project'
import { isMissing } from '../utils/content'

export default function FeaturedProject() {
  return (
    <Section id="project" labelledBy="project-title">
      <SectionTitle
        id="project-title"
       
        label="Featured project"
        title="Appointment management for a birthing home"
        intro="A web and mobile system for managing prenatal and postnatal appointments."
      />

      <div className="mt-10 grid gap-3 md:grid-cols-2 md:gap-4 lg:grid-cols-12">
        {/* Main tile */}
        <BentoCard as="article" padded={false} className="group overflow-hidden md:col-span-2 lg:col-span-8 lg:row-span-2">
          <div className="overflow-hidden border-b border-line">
            {project.cover ? (
              <img
                src={project.cover}
                alt={`Screenshot of ${project.title}`}
                loading="lazy"
                className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            ) : (
              <Placeholder label="[ADD COVER SCREENSHOT]" bare />
            )}
          </div>
          <div className="p-5 md:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-primary">{project.label}</p>
            <h3 className="mt-2 text-xl font-medium leading-snug">{project.title}</h3>
            <p className="mt-1 text-sm text-muted">{project.location}</p>
            <p className="mt-4 text-muted">{project.summary}</p>
            <div className="mt-6">
              <Button to={`/projects/${project.slug}`}>
                Read the case study <ArrowRight size={16} aria-hidden="true" />
              </Button>
            </div>
          </div>
        </BentoCard>

        {/* Platform */}
        <BentoCard className="lg:col-span-4">
          <TileLabel>Platform</TileLabel>
          <div className="mt-4 flex gap-3 text-primary-strong" aria-hidden="true">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-badge">
              <Monitor size={18} />
            </span>
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-badge">
              <Smartphone size={18} />
            </span>
          </div>
          <p className="mt-4 font-medium">Web and mobile application</p>
        </BentoCard>

        {/* Users */}
        <BentoCard className="lg:col-span-4">
          <TileLabel icon={Users}>Users</TileLabel>
          <ul className="mt-4 space-y-2">
            <li className="font-medium">Patients</li>
            <li className="font-medium">Clinic staff</li>
          </ul>
        </BentoCard>

        {/* Key features */}
        <BentoCard className="lg:col-span-8">
          <TileLabel icon={ListChecks}>Key features</TileLabel>
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.highlights.map((item) => (
              <li key={item}>
                <Badge>{item}</Badge>
              </li>
            ))}
          </ul>
        </BentoCard>

        {/* Status */}
        <BentoCard className="lg:col-span-4">
          <TileLabel icon={CircleDot}>Status</TileLabel>
          <p className={`mt-4 font-medium ${isMissing(project.status) ? 'italic text-muted' : ''}`}>{project.status}</p>
        </BentoCard>
      </div>
    </Section>
  )
}

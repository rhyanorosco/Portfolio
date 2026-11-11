import Section from '../components/Section.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { featuredProject } from '../data/project'

export default function FeaturedProject() {
  return (
    <Section id="project" labelledBy="project-title">
      <SectionTitle
        id="project-title"
        number="03"
        label="Featured project"
        title="Appointment management for a birthing home"
        intro="A web and mobile system for managing prenatal and postnatal appointments."
      />
      <div className="mt-10">
        <ProjectCard project={featuredProject} />
      </div>
    </Section>
  )
}

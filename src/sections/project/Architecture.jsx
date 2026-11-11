import CaseSection from '../../components/CaseSection.jsx'
import ProjectGallery from '../../components/ProjectGallery.jsx'

export default function Architecture({ diagrams }) {
  return (
    <CaseSection
      id="architecture"
      number="08"
      label="System architecture"
      title="Design and system diagrams"
      intro="Diagrams produced during analysis and design. Select a diagram to enlarge it."
    >
      <ProjectGallery items={diagrams} startAt={1} ratio="aspect-[4/3]" className="sm:grid-cols-2" />
    </CaseSection>
  )
}

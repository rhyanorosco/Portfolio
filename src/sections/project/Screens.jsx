import CaseSection from '../../components/CaseSection.jsx'
import ProjectGallery from '../../components/ProjectGallery.jsx'

export default function Screens({ screens, startAt }) {
  return (
    <CaseSection
      id="screens"
      number="09"
      label="UI screenshots"
      title="Inside the system"
      intro="Screens from the web and mobile applications. Select a screenshot to enlarge it."
    >
      <ProjectGallery items={screens} startAt={startAt} className="sm:grid-cols-2 xl:grid-cols-3" />
    </CaseSection>
  )
}

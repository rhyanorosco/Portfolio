import CaseSection from '../../components/CaseSection.jsx'
import ProcessSteps from '../../components/ProcessSteps.jsx'

export default function Process({ steps }) {
  return (
    <CaseSection id="process" number="11" label="Development process" title="How the project moved forward">
      <ProcessSteps steps={steps} />
    </CaseSection>
  )
}

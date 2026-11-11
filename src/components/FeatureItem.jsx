import StatusBadge from './StatusBadge.jsx'
import { isMissing } from '../utils/content'

export default function FeatureItem({ name, description, status }) {
  return (
    <li className="flex flex-col items-start gap-2 border-b border-line py-4 last:border-b-0">
      <h4 className="font-medium">{name}</h4>
      <p className={`text-sm text-muted ${isMissing(description) ? 'italic' : ''}`}>{description}</p>
      <StatusBadge status={status} />
    </li>
  )
}

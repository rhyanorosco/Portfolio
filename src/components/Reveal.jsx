import { useReveal } from '../hooks/useReveal'

// Fades its content in once when it scrolls into view. Disabled for reduced-motion users (see index.css).
export default function Reveal({ as: Tag = 'div', className = '', children, ...rest }) {
  const [ref, visible] = useReveal()
  return (
    <Tag ref={ref} className={`reveal ${visible ? 'is-visible' : ''} ${className}`} {...rest}>
      {children}
    </Tag>
  )
}

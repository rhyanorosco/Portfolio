// Card used in bento grids: surface, 1px border, 12px radius, subtle hover.
export default function BentoCard({ as: Tag = 'div', className = '', padded = true, children, ...rest }) {
  return (
    <Tag
      className={`rounded-xl border border-line bg-surface transition-colors duration-150 hover:border-primary-strong/40 ${
        padded ? 'p-5 md:p-6' : ''
      } ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  )
}

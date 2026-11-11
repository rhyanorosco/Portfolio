// Small uppercase heading used at the top of bento tiles.
export default function TileLabel({ icon: Icon, children, as: Tag = 'h3' }) {
  return (
    <Tag className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.08em] text-muted">
      {Icon && <Icon size={14} aria-hidden="true" className="text-primary-strong" />}
      {children}
    </Tag>
  )
}

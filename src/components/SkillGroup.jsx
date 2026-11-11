export default function SkillGroup({ title, icon: Icon, items }) {
  return (
    <div className="rounded border border-line bg-surface p-5">
      <h3 className="flex items-center gap-2 font-semibold">
        {Icon && <Icon size={18} aria-hidden="true" className="text-primary" />}
        {title}
      </h3>
      <ul className="mt-4 flex flex-wrap gap-2">
        {items.map((item) => (
          <li key={item} className="rounded-sm border border-line px-2.5 py-1 font-mono text-xs">
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

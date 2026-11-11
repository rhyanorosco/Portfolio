import { Link } from 'react-router-dom'

const base =
  'inline-flex items-center justify-center gap-2 rounded px-4 py-2.5 text-sm font-medium transition-colors active:translate-y-px'
const variants = {
  primary: 'bg-primary text-primary-ink hover:bg-primary/90',
  secondary: 'border border-line bg-surface text-ink hover:border-primary hover:text-primary',
}

// Internal routes use `to`; external links use `href`.
export default function Button({ to, href, variant = 'primary', className = '', children, ...rest }) {
  const classes = `${base} ${variants[variant]} ${className}`
  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    )
  }
  return (
    <a href={href} className={classes} {...rest}>
      {children}
    </a>
  )
}

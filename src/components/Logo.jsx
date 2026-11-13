// "Orbit R" logo: the R monogram with a tilted orbit ring and a small planet.
// The R uses currentColor, so it follows the link's text color (and hover).
export default function Logo({ size = 28, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true" className={className}>
      <ellipse
        cx="20"
        cy="20"
        rx="17"
        ry="7"
        stroke="#a78bfa"
        strokeOpacity="0.8"
        strokeWidth="1.5"
        transform="rotate(-20 20 20)"
      />
      <path
        d="M15 29V11h6a5 5 0 0 1 0 10h-3l6 8"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="35.5" cy="14.5" r="3.6" fill="#c4b5fd" opacity="0.3" />
      <circle cx="35.5" cy="14.5" r="2.2" fill="#fff" />
    </svg>
  )
}

// "R" monogram used in the navbar, the skills orb, and the favicon.
export default function Logo({ size = 28, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M9 26V6h8.5a6.5 6.5 0 0 1 0 13H13l10 7"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M9 6l5 0" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  )
}

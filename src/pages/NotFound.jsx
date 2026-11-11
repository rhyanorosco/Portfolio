import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="container-page py-24">
      <p className="font-mono text-sm text-muted">404</p>
      <h1 className="mt-2 text-3xl font-semibold">Page not found</h1>
      <Link to="/" className="mt-6 inline-block text-primary hover:underline">
        Go to the homepage
      </Link>
    </div>
  )
}

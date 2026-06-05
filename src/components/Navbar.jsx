import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const { pathname } = useLocation()

  return (
    <nav className="border-b bg-background sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link to="/" className="font-bold text-lg tracking-tight">
          DummyData
        </Link>
        <div className="flex gap-6 text-sm font-medium">
          <Link
            to="/"
            className={pathname === '/' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground transition-colors'}
          >
            Home
          </Link>
          <Link
            to="/entities"
            className={pathname === '/entities' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground transition-colors'}
          >
            Entities
          </Link>
        </div>
      </div>
    </nav>
  )
}
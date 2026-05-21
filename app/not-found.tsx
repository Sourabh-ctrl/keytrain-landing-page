import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-lg text-center">
        <div className="mb-8">
          <span className="stat-value text-8xl">404</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
          Page Not Found
        </h1>
        <p className="text-muted-foreground mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/" className="btn-primary inline-flex">
          Return Home
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </main>
  )
}

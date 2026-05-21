'use client'

import Link from 'next/link'

export default function Error({ error }: { error: Error }) {
  console.error(error)
  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-2xl text-center py-24">
        <p className="text-sm uppercase tracking-[0.3em] text-[var(--accent)] mb-6">Something went wrong</p>
        <h1 className="text-4xl sm:text-5xl font-bold text-[var(--foreground)] mb-6">We’re working on it.</h1>
        <p className="text-lg text-[var(--muted-foreground)] mb-10">
          An unexpected issue occurred. Refresh the page or return to the homepage.
        </p>
        <Link href="/" className="inline-flex rounded-2xl bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-[var(--accent-foreground)] hover:opacity-90 transition-opacity">
          Return home
        </Link>
      </div>
    </main>
  )
}

'use client'

import Link from 'next/link'
import { ArrowRight, RefreshCw } from 'lucide-react'

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error)
  
  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-lg text-center">
        <div className="w-16 h-16 rounded-2xl bg-destructive/10 flex items-center justify-center mx-auto mb-6">
          <span className="text-3xl">!</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
          Something Went Wrong
        </h1>
        <p className="text-muted-foreground mb-8">
          An unexpected error occurred. Please try again or return to the homepage.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button onClick={reset} className="btn-secondary">
            <RefreshCw className="w-4 h-4" />
            Try Again
          </button>
          <Link href="/" className="btn-primary">
            Return Home
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  )
}

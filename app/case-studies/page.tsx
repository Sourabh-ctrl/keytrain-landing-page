import Link from 'next/link'
import { caseStudies } from '@/lib/content'

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.25em] text-[var(--muted-foreground)] mb-4">Case Studies</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-[var(--foreground)] mb-4">Production work with measurable impact.</h1>
            <p className="text-lg text-[var(--muted-foreground)] max-w-3xl mx-auto">
              Real project examples from SaaS, fintech, and logistics companies that needed reliable technology and faster results.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {caseStudies.map((study) => (
              <div key={study.slug} className="rounded-3xl border border-[var(--border)] bg-[var(--background)] p-8 shadow-sm">
                <div className="mb-4">
                  <span className="inline-flex rounded-full bg-[rgba(59,130,246,0.1)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                    {study.tag}
                  </span>
                </div>
                <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-4">{study.projectType}</h2>
                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-6">{study.summary}</p>
                <ul className="mb-6 space-y-2 text-sm text-[var(--muted-foreground)]">
                  {study.metrics.map((metric) => (
                    <li key={metric}>• {metric}</li>
                  ))}
                </ul>
                <Link href={`/case-studies/${study.slug}`} className="inline-flex text-sm font-semibold text-[var(--accent)] hover:underline">
                  Read full case study →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

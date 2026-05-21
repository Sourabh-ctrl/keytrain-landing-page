import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getAllCaseStudySlugs, getCaseStudyBySlug } from '@/lib/content'

type Params = {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  return getAllCaseStudySlugs()
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params
  const caseStudy = getCaseStudyBySlug(slug)

  if (!caseStudy) {
    return {
      title: 'Case study not found | Keytrain',
      description: 'The case study you requested could not be found.',
    }
  }

  return {
    title: `${caseStudy.projectType} | Keytrain case study`,
    description: caseStudy.summary,
  }
}

export default async function CaseStudyPage({ params }: Params) {
  const { slug } = await params
  const study = getCaseStudyBySlug(slug)
  if (!study) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <Link href="/case-studies" className="text-sm font-medium text-[var(--accent)] hover:underline">
              ← Back to case studies
            </Link>
          </div>

          <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--secondary)] p-10 shadow-sm">
            <div className="mb-8">
              <span className="inline-flex rounded-full bg-[rgba(59,130,246,0.1)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                {study.tag}
              </span>
              <h1 className="mt-4 text-5xl font-bold text-[var(--foreground)] mb-4">{study.projectType}</h1>
              <p className="text-lg text-[var(--muted-foreground)] max-w-3xl">{study.challenge}</p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <div className="rounded-3xl border border-[var(--border)] bg-[var(--background)] p-8">
                <h2 className="text-xl font-semibold text-[var(--foreground)] mb-4">Challenge</h2>
                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">{study.challenge}</p>
              </div>
              <div className="rounded-3xl border border-[var(--border)] bg-[var(--background)] p-8">
                <h2 className="text-xl font-semibold text-[var(--foreground)] mb-4">Solution</h2>
                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">{study.solution}</p>
              </div>
            </div>

            <div className="mt-8 rounded-3xl border border-[var(--border)] bg-[var(--background)] p-8">
              <h2 className="text-xl font-semibold text-[var(--foreground)] mb-4">Outcome</h2>
              <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-4">{study.outcome}</p>
              <ul className="grid gap-3 text-sm text-[var(--muted-foreground)]">
                {study.metrics.map((metric) => (
                  <li key={metric} className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
                    <span>{metric}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/#contact" className="inline-flex items-center justify-center rounded-2xl bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-[var(--accent-foreground)] hover:opacity-90 transition-opacity">
                Book a quick call
              </Link>
              <Link href="/services" className="inline-flex items-center justify-center rounded-2xl border border-[var(--border)] px-6 py-3 text-sm font-semibold text-[var(--foreground)] hover:bg-[var(--secondary)] transition-colors">
                View services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

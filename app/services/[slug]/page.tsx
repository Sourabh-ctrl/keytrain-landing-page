import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getAllServiceSlugs, getServiceBySlug } from '@/lib/content'

type Params = {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  return getAllServiceSlugs()
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    return {
      title: 'Service not found | Keytrain',
      description: 'The requested service could not be found.',
    }
  }

  return {
    title: `${service.title} | Keytrain`,
    description: service.description,
  }
}

export default async function ServicePage({ params }: Params) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <Link href="/services" className="text-sm font-medium text-[var(--accent)] hover:underline">
              ← Back to Services
            </Link>
          </div>

          <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--secondary)] p-10 shadow-sm">
            <div className="mb-8">
              <p className="text-sm uppercase tracking-[0.28em] text-[var(--accent)] mb-4">{service.category}</p>
              <h1 className="text-5xl font-bold text-[var(--foreground)] mb-4">{service.title}</h1>
              <p className="text-lg text-[var(--muted-foreground)] max-w-3xl">{service.description}</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-3xl border border-[var(--border)] bg-[var(--background)] p-8">
                <h2 className="text-xl font-semibold text-[var(--foreground)] mb-4">What you get</h2>
                <ul className="space-y-3 text-sm text-[var(--muted-foreground)]">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl border border-[var(--border)] bg-[var(--background)] p-8">
                <h2 className="text-xl font-semibold text-[var(--foreground)] mb-4">Expected outcome</h2>
                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-6">
                  {service.outcome}. Our team designs delivery plans and milestones to keep the work predictable and visible.
                </p>
                <div className="rounded-3xl bg-[var(--background)] p-6 border border-[var(--border)]">
                  <p className="text-sm text-[var(--muted-foreground)] mb-3">Quick start</p>
                  <p className="font-semibold text-[var(--foreground)]">Discovery call → scoped plan → pilot sprint</p>
                </div>
              </div>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <Link
                href="/#contact"
                className="inline-flex w-full items-center justify-center rounded-2xl bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-[var(--accent-foreground)] hover:opacity-90 transition-opacity sm:w-auto"
              >
                Schedule a consultation
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex w-full items-center justify-center rounded-2xl border border-[var(--border)] px-6 py-3 text-sm font-semibold text-[var(--foreground)] hover:bg-[var(--secondary)] transition-colors sm:w-auto"
              >
                Review related case studies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

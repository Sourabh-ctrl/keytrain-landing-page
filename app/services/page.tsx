import Link from 'next/link'
import { serviceCategories } from '@/lib/content'

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.25em] text-[var(--muted-foreground)] mb-4">Services</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-[var(--foreground)] mb-4">Solutions built for growth, resilience, and speed.</h1>
            <p className="text-lg text-[var(--muted-foreground)] max-w-3xl mx-auto">
              Explore service capabilities for AI, software, cloud, and IT operations designed to help your team move faster with confidence.
            </p>
          </div>

          <div className="space-y-14">
            {serviceCategories.map((category) => (
              <div key={category.category}>
                <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-6">{category.category}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="group rounded-3xl border border-[var(--border)] bg-[var(--background)] p-8 transition hover:-translate-y-1 hover:shadow-xl"
                    >
                      <div className="mb-4 text-sm uppercase tracking-[0.25em] text-[var(--accent)]">{category.category}</div>
                      <h3 className="text-xl font-semibold text-[var(--foreground)] mb-3">{service.title}</h3>
                      <p className="text-sm leading-relaxed text-[var(--muted-foreground)] mb-6">{service.description}</p>
                      <div className="text-sm font-semibold text-[var(--foreground)]">
                        Outcome: <span className="text-[var(--accent)]">{service.outcome}</span>
                      </div>
                      <p className="mt-6 text-sm font-medium text-[var(--accent)]">Learn more →</p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

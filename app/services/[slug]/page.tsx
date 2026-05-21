import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react'
import { getAllServiceSlugs, getServiceBySlug } from '@/lib/content'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/cta-footer'

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
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-20">
        <section className="section-wrapper">
          <div className="container-md">
            {/* Back Link */}
            <Link 
              href="/services" 
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Services
            </Link>

            {/* Header */}
            <div className="mb-12">
              <span className="badge-accent mb-4 inline-flex">
                {service.category}
              </span>
              <h1 className="text-foreground mb-4">
                {service.title}
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                {service.description}
              </p>
            </div>

            {/* Content Grid */}
            <div className="grid lg:grid-cols-2 gap-6 mb-12">
              {/* Features */}
              <div className="card-elevated">
                <h2 className="text-xl font-semibold text-foreground mb-6">
                  What You Get
                </h2>
                <ul className="space-y-4">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outcome */}
              <div className="card-elevated">
                <h2 className="text-xl font-semibold text-foreground mb-6">
                  Expected Outcome
                </h2>
                <div className="p-6 rounded-xl bg-secondary mb-6">
                  <p className="stat-value text-2xl mb-2">{service.outcome}</p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Our team designs delivery plans and milestones to keep the work 
                  predictable and visible throughout the engagement.
                </p>
              </div>
            </div>

            {/* Process */}
            <div className="card-elevated mb-12">
              <h2 className="text-xl font-semibold text-foreground mb-6">
                How We Deliver
              </h2>
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="text-center sm:text-left">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center text-sm font-bold mb-3 mx-auto sm:mx-0">
                    01
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">Discovery</h3>
                  <p className="text-sm text-muted-foreground">Align on goals and scope</p>
                </div>
                <div className="text-center sm:text-left">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center text-sm font-bold mb-3 mx-auto sm:mx-0">
                    02
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">Plan & Build</h3>
                  <p className="text-sm text-muted-foreground">Iterative development sprints</p>
                </div>
                <div className="text-center sm:text-left">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center text-sm font-bold mb-3 mx-auto sm:mx-0">
                    03
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">Launch & Support</h3>
                  <p className="text-sm text-muted-foreground">Production rollout and ongoing care</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/#contact" className="btn-primary">
                Schedule a Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/case-studies" className="btn-secondary">
                View Related Case Studies
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

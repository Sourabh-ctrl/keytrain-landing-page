import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react'
import { getAllCaseStudySlugs, getCaseStudyBySlug } from '@/lib/content'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/cta-footer'

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
    title: `${caseStudy.projectType} | Keytrain Case Study`,
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
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-20">
        <section className="section-wrapper">
          <div className="container-md">
            {/* Back Link */}
            <Link 
              href="/case-studies" 
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Case Studies
            </Link>

            {/* Header */}
            <div className="mb-12">
              <span className="badge-accent mb-4 inline-flex">
                {study.tag}
              </span>
              <h1 className="text-foreground mb-4">
                {study.projectType}
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                {study.summary}
              </p>
            </div>

            {/* Challenge & Solution */}
            <div className="grid lg:grid-cols-2 gap-6 mb-8">
              <div className="card-elevated">
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  The Challenge
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {study.challenge}
                </p>
              </div>

              <div className="card-elevated">
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  Our Solution
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {study.solution}
                </p>
              </div>
            </div>

            {/* Outcome & Metrics */}
            <div className="card-elevated mb-12">
              <h2 className="text-xl font-semibold text-foreground mb-6">
                Results Delivered
              </h2>
              
              <div className="p-6 rounded-xl bg-secondary mb-6">
                <p className="text-lg font-medium text-foreground">
                  {study.outcome}
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                {study.metrics.map((metric) => (
                  <div 
                    key={metric} 
                    className="flex items-center gap-3 p-4 rounded-xl bg-accent/5 border border-accent/10"
                  >
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-sm font-medium text-foreground">{metric}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/#contact" className="btn-primary">
                Discuss Your Project
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/services" className="btn-secondary">
                Explore Our Services
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

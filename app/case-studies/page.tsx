'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react'
import { caseStudies } from '@/lib/content'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/cta-footer'
import { FadeInUp, StaggerContainer, StaggerItem } from '@/lib/animations'

export default function CaseStudiesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-20">
        {/* Hero */}
        <section className="section-wrapper bg-background">
          <div className="container-lg">
            <FadeInUp className="max-w-3xl">
              <Link 
                href="/" 
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
              <p className="section-label">Case Studies</p>
              <h1 className="text-foreground mb-6">
                Production Work with Measurable Impact
              </h1>
              <p className="text-lg text-muted-foreground">
                Real project examples from SaaS, fintech, and logistics companies 
                that needed reliable technology and faster results.
              </p>
            </FadeInUp>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="section-wrapper-sm bg-secondary/30">
          <div className="container-lg">
            <StaggerContainer className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {caseStudies.map((study) => (
                <StaggerItem key={study.slug}>
                  <Link href={`/case-studies/${study.slug}`}>
                    <motion.article
                      whileHover={{ y: -4 }}
                      className="group card-elevated h-full flex flex-col"
                    >
                      {/* Tag */}
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <span className="badge-accent">
                          {study.tag}
                        </span>
                        <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </div>

                      {/* Title */}
                      <h2 className="text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                        {study.projectType}
                      </h2>

                      {/* Summary */}
                      <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                        {study.summary}
                      </p>

                      {/* Metrics */}
                      <div className="space-y-2 mb-6">
                        {study.metrics.map((metric) => (
                          <div key={metric} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                            <span className="text-foreground">{metric}</span>
                          </div>
                        ))}
                      </div>

                      {/* Link */}
                      <div className="pt-4 border-t border-border">
                        <span className="text-sm font-medium text-accent group-hover:underline">
                          Read full case study
                        </span>
                      </div>
                    </motion.article>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* CTA */}
        <section className="section-wrapper bg-foreground text-background">
          <div className="container-md text-center">
            <FadeInUp>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Ready to Become Our Next Success Story?
              </h2>
              <p className="text-lg text-background/70 max-w-xl mx-auto mb-8">
                Let&apos;s discuss how we can help you achieve similar results 
                for your business.
              </p>
              <Link 
                href="/#contact"
                className="btn-primary inline-flex"
              >
                Start a Conversation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeInUp>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

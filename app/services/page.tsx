'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import { serviceCategories } from '@/lib/content'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/cta-footer'
import { FadeInUp, StaggerContainer, StaggerItem } from '@/lib/animations'

export default function ServicesPage() {
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
              <p className="section-label">Our Services</p>
              <h1 className="text-foreground mb-6">
                Solutions Built for Growth, Resilience, and Speed
              </h1>
              <p className="text-lg text-muted-foreground">
                Explore service capabilities for AI, software, cloud, and IT operations 
                designed to help your team move faster with confidence.
              </p>
            </FadeInUp>
          </div>
        </section>

        {/* Services by Category */}
        {serviceCategories.map((category, categoryIndex) => (
          <section 
            key={category.category} 
            className={`section-wrapper-sm ${categoryIndex % 2 === 0 ? 'bg-secondary/30' : 'bg-background'}`}
          >
            <div className="container-lg">
              <FadeInUp className="mb-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                  {category.category}
                </h2>
              </FadeInUp>

              <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {category.items.map((service) => (
                  <StaggerItem key={service.slug}>
                    <Link href={`/services/${service.slug}`}>
                      <motion.div
                        whileHover={{ y: -4 }}
                        className="group card-elevated h-full flex flex-col"
                      >
                        <div className="flex items-start justify-between gap-4 mb-4">
                          <span className="badge-accent text-xs">
                            {category.category}
                          </span>
                          <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                        </div>
                        
                        <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                          {service.title}
                        </h3>
                        
                        <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                          {service.description}
                        </p>
                        
                        <div className="pt-4 border-t border-border">
                          <p className="text-sm">
                            <span className="text-muted-foreground">Outcome: </span>
                            <span className="font-medium text-accent">{service.outcome}</span>
                          </p>
                        </div>
                      </motion.div>
                    </Link>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="section-wrapper bg-foreground text-background">
          <div className="container-md text-center">
            <FadeInUp>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Not Sure Where to Start?
              </h2>
              <p className="text-lg text-background/70 max-w-xl mx-auto mb-8">
                Book a free 30-minute consultation and we&apos;ll help identify 
                the highest-impact opportunities for your team.
              </p>
              <Link 
                href="/#contact"
                className="btn-primary inline-flex"
              >
                Schedule a Call
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

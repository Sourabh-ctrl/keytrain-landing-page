'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Star, Quote } from 'lucide-react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '@/components/ui/carousel'
import { FadeInUp, StaggerContainer, StaggerItem } from '@/lib/animations'

const results = [
  {
    metric: '40%',
    label: 'Average cost reduction',
    description: 'Infrastructure optimization within 6 months',
  },
  {
    metric: '3x',
    label: 'Faster deployments',
    description: 'After DevOps engagement',
  },
  {
    metric: '99.9%',
    label: 'System uptime',
    description: 'Production reliability',
  },
]

const caseStudies = [
  {
    slug: 'saas-architecture',
    tag: 'SaaS',
    title: 'SaaS Architecture Overhaul',
    challenge: 'Scaling to 10k+ customers with frequent downtime issues.',
    solution: 'Re-architected to microservices with autoscaling and observability.',
    outcome: '3x higher concurrency and 40% cost reduction.',
  },
  {
    slug: 'ai-automation',
    tag: 'Fintech',
    title: 'AI-Powered Reconciliation',
    challenge: 'Manual reconciliation consuming engineering hours weekly.',
    solution: 'Built automated extraction and matching using NLP.',
    outcome: 'Reduced manual effort by 40% and 3x faster processing.',
  },
  {
    slug: 'computer-vision',
    tag: 'Logistics',
    title: 'Quality Control Vision System',
    challenge: 'Error-prone quality checks on the packing line.',
    solution: 'Deployed edge CV model with real-time alerts.',
    outcome: '92% accuracy and defects cut in half.',
  },
]

const testimonials = [
  {
    quote: 'Their engineers integrated a reconciliation workflow that saved our ops team hours every week — pragmatic and reliable.',
    author: 'David Kim',
    title: 'CTO',
    company: 'PulseOps',
    color: 'bg-accent',
  },
  {
    quote: 'We reduced deployment pain and improved uptime. They paired with our team and transferred knowledge well.',
    author: 'Rachel Torres',
    title: 'VP Engineering',
    company: 'Meridian Health',
    color: 'bg-emerald-500',
  },
  {
    quote: 'Delivered a pragmatic AI feature that became core to our roadmap. Clear milestones and no surprises.',
    author: 'James Okafor',
    title: 'Head of Product',
    company: 'Stacklane',
    color: 'bg-amber-500',
  },
]

export function Results() {
  return (
    <section id="results" className="section-wrapper bg-foreground text-background">
      <div className="container-lg">
        {/* Section Header */}
        <FadeInUp className="text-center mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] font-medium text-background/60 mb-4">
            Proven Results
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Outcomes We Deliver
          </h2>
          <p className="text-base sm:text-lg text-background/70 max-w-2xl mx-auto">
            Real metrics from real projects with measurable business impact.
          </p>
        </FadeInUp>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Metrics */}
          <StaggerContainer className="space-y-4">
            {results.map((result) => (
              <StaggerItem key={result.metric}>
                <div className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="flex items-end gap-4 mb-3">
                    <span className="text-4xl sm:text-5xl font-bold text-accent">
                      {result.metric}
                    </span>
                    <span className="text-lg font-semibold text-background pb-1">
                      {result.label}
                    </span>
                  </div>
                  <p className="text-sm text-background/60">{result.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Case Studies Preview */}
          <StaggerContainer className="space-y-4">
            {caseStudies.map((study) => (
              <StaggerItem key={study.slug}>
                <Link
                  href={`/case-studies/${study.slug}`}
                  className="group block p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <span className="inline-flex px-2.5 py-1 rounded-full bg-accent/20 text-accent text-xs font-medium mb-2">
                        {study.tag}
                      </span>
                      <h3 className="text-lg font-semibold text-background group-hover:text-accent transition-colors">
                        {study.title}
                      </h3>
                    </div>
                    <ArrowRight className="w-5 h-5 text-background/40 group-hover:text-accent group-hover:translate-x-1 transition-all flex-shrink-0" />
                  </div>
                  <p className="text-sm text-background/70 mb-2">
                    <span className="text-background/50">Challenge:</span> {study.challenge}
                  </p>
                  <p className="text-sm text-accent font-medium">
                    {study.outcome}
                  </p>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* View All */}
        <FadeInUp delay={0.3} className="text-center mt-10">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            View all case studies
            <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeInUp>
      </div>
    </section>
  )
}

export function Testimonials() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return
    
    const onSelect = () => setCurrent(api.selectedScrollSnap())
    api.on('select', onSelect)
    
    const timer = setInterval(() => {
      if (api.canScrollNext()) api.scrollNext()
      else api.scrollTo(0)
    }, 5000)

    return () => {
      api.off('select', onSelect)
      clearInterval(timer)
    }
  }, [api])

  return (
    <section id="testimonials" className="section-wrapper bg-background">
      <div className="container-lg">
        {/* Section Header */}
        <FadeInUp className="text-center mb-12 sm:mb-16">
          <p className="section-label">Testimonials</p>
          <h2 className="section-title">What Leaders Say</h2>
          <p className="section-description">
            Feedback from engineering and operations leaders we&apos;ve worked with.
          </p>
        </FadeInUp>

        <FadeInUp delay={0.1}>
          <Carousel 
            setApi={setApi} 
            opts={{ loop: true, align: 'start' }} 
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => {
                const initials = testimonial.author.split(' ').map((n) => n[0]).join('')
                
                return (
                  <CarouselItem key={testimonial.author} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                    <motion.div
                      initial={{ opacity: 0.5, scale: 0.98 }}
                      animate={{ 
                        opacity: current === index ? 1 : 0.7,
                        scale: current === index ? 1 : 0.98
                      }}
                      transition={{ duration: 0.3 }}
                      className="card-elevated h-full flex flex-col"
                    >
                      {/* Quote Icon */}
                      <Quote className="w-8 h-8 text-accent/20 mb-4" />
                      
                      {/* Stars */}
                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                        ))}
                      </div>

                      {/* Quote */}
                      <p className="text-foreground leading-relaxed mb-6 flex-1">
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>

                      {/* Author */}
                      <div className="flex items-center gap-3 pt-4 border-t border-border">
                        <div className={`w-10 h-10 rounded-full ${testimonial.color} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}>
                          {initials}
                        </div>
                        <div>
                          <p className="font-semibold text-foreground text-sm">
                            {testimonial.author}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {testimonial.title}, {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </CarouselItem>
                )
              })}
            </CarouselContent>
            <div className="flex items-center justify-center gap-4 mt-8">
              <CarouselPrevious className="static translate-y-0" />
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => api?.scrollTo(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      current === index ? 'bg-accent w-6' : 'bg-border'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </FadeInUp>
      </div>
    </section>
  )
}

'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '@/components/ui/carousel'

export function Results() {
  const results = [
    {
      metric: '40%',
      label: 'Average infrastructure cost reduction',
      description: 'within 6 months',
    },
    {
      metric: '3x',
      label: 'Faster deployment cycles',
      description: 'after DevOps engagement',
    },
    {
      metric: '7+',
      label: 'Years delivering for US and European clients since 2018',
      description: '',
    },
  ]

  const featuredCaseStudies = [
    {
      slug: 'saas-architecture',
      projectType: 'SaaS Architecture',
      challenge: 'Scaling product to 10k+ customers with frequent downtime.',
      solution: 'Re-architected to microservices, added autoscaling and observability.',
      outcome: '3x higher concurrency and 40% reduction in infrastructure cost.',
    },
    {
      slug: 'ai-automation',
      projectType: 'AI Automation',
      challenge: 'Manual reconciliation consumed engineering time every week.',
      solution: 'Built automated extraction and matching with NLP and rules.',
      outcome: 'Reduced manual workload by 40% and sped processing 3x.',
    },
    {
      slug: 'computer-vision',
      projectType: 'Computer Vision',
      challenge: 'Packing-line quality checks were error-prone and slow.',
      solution: 'Deployed edge CV model with real-time alerts and monitoring.',
      outcome: 'Accuracy improved to 92% and defects were cut in half.',
    },
  ]

  return (
    <section id="results" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">Outcomes we've delivered</h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            A sample of measurable delivery outcomes from real projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12">
          <div className="flex flex-col gap-4 sm:gap-8">
            {results.map((result) => (
              <div key={result.metric} className="p-5 sm:p-8 border border-slate-700 bg-slate-800 rounded-2xl">
                <div className="mb-4 sm:mb-6">
                  <div className="text-blue-400 text-4xl sm:text-5xl font-bold mb-2">{result.metric}</div>
                  <p className="text-lg font-semibold text-white">{result.label}</p>
                </div>
                <p className="text-sm text-slate-300">{result.description}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4 sm:gap-6">
            {featuredCaseStudies.map((study) => (
              <div key={study.slug} className="p-5 sm:p-6 border border-slate-700 bg-slate-800 rounded-2xl">
                <h3 className="text-lg font-bold text-white mb-4">{study.projectType}</h3>
                <p className="text-sm text-slate-200 mb-3"><strong>Challenge:</strong> {study.challenge}</p>
                <p className="text-sm text-slate-200 mb-3"><strong>Solution:</strong> {study.solution}</p>
                <p className="text-sm text-blue-300 font-medium mb-4"><strong>Result:</strong> {study.outcome}</p>
                <Link href={`/case-studies/${study.slug}`} className="inline-block text-sm text-blue-300 font-semibold">View full case study -&gt;</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function Testimonials() {
  const [api, setApi] = useState<CarouselApi>()
  const testimonials = [
    {
      quote: 'Their engineers integrated a reconciliation workflow that saved our ops team hours every week - pragmatic and reliable.',
      author: 'David Kim',
      title: 'CTO',
      company: 'PulseOps',
    },
    {
      quote: 'We reduced deployment pain and improved uptime. They paired with our team and transferred knowledge well.',
      author: 'Rachel Torres',
      title: 'VP Engineering',
      company: 'Meridian Health',
    },
    {
      quote: 'Delivered a pragmatic AI feature that became core to our roadmap. Clear milestones and no surprises.',
      author: 'James Okafor',
      title: 'Head of Product',
      company: 'Stacklane',
    },
  ]

  useEffect(() => {
    if (!api) return
    const timer = setInterval(() => {
      if (api.canScrollNext()) api.scrollNext()
      else api.scrollTo(0)
    }, 4500)

    return () => clearInterval(timer)
  }, [api])

  return (
    <section id="testimonials" style={{ backgroundColor: 'var(--background)' }} className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 style={{ color: 'var(--foreground)' }} className="text-3xl sm:text-5xl font-bold mb-4">
            What Our Customers Say
          </h2>
          <p style={{ color: 'var(--muted-foreground)' }} className="text-lg max-w-2xl mx-auto">
            What engineering and operations leaders say about working with us.
          </p>
        </div>

        <Carousel setApi={setApi} opts={{ loop: true }} className="px-1 sm:px-8">
          <CarouselContent>
            {testimonials.map((testimonial, i) => {
              const initials = testimonial.author.split(' ').map((n) => n[0]).join('')
              const colors = ['#2563EB', '#22C55E', '#F59E0B']
              const bgColor = colors[i % colors.length]

              return (
                <CarouselItem key={testimonial.author} className="basis-full md:basis-1/2 lg:basis-1/3">
                  <div style={{ backgroundColor: 'var(--background)', borderColor: 'var(--border)' }} className="p-5 sm:p-8 border h-full rounded-2xl">
                    <div className="flex gap-1 mb-6" aria-label="5 out of 5 stars">
                      {[...Array(5)].map((_, j) => (
                        <span key={j} style={{ color: 'var(--accent)' }}>*</span>
                      ))}
                    </div>

                    <p style={{ color: 'var(--foreground)' }} className="mb-6 leading-relaxed italic text-sm">
                      "{testimonial.quote}"
                    </p>

                    <div style={{ borderTopColor: 'var(--border)' }} className="border-t pt-6 flex items-center gap-4">
                      <div style={{ backgroundColor: bgColor, color: 'white' }} className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                        {initials}
                      </div>
                      <div>
                        <p style={{ color: 'var(--foreground)' }} className="font-semibold">{testimonial.author}</p>
                        <p style={{ color: 'var(--muted-foreground)' }} className="text-sm">{testimonial.title}</p>
                        <p style={{ color: 'var(--muted-foreground)' }} className="text-sm">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              )
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:inline-flex" />
          <CarouselNext className="hidden sm:inline-flex" />
        </Carousel>
      </div>
    </section>
  )
}

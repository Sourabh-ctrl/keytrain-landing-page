'use client'

import { useEffect, useRef } from 'react'
import { Landmark, Truck } from 'lucide-react'

export function Results() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const items = containerRef.current.querySelectorAll('[data-stat]')
        items.forEach((item) => {
          const rect = item.getBoundingClientRect()
          if (rect.top < window.innerHeight) {
            item.classList.add('animate-fade-up')
          }
        })
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const results = [
    {
      metric: '40%',
      label: 'Average infrastructure cost reduction',
      description: 'within 6 months'
    },
    {
      metric: '3×',
      label: 'Faster deployment cycles',
      description: 'after DevOps engagement'
    },
    {
      metric: '7+',
      label: 'Years delivering for US and European clients since 2018',
      description: ''
    }
  ]

  const caseStudies = [
    {
      tag: 'Fintech',
      title: 'Migrated legacy monolith to microservices in 14 weeks',
      result: 'Result: 60% reduction in downtime'
    },
    {
      tag: 'Logistics',
      title: 'Built real-time data pipeline processing 2M events/day',
      result: 'Result: Decisions 4× faster'
    }
  ]

  return (
    <section id="results" style={{ backgroundColor: 'var(--secondary)' }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 style={{ color: 'var(--foreground)' }} className="text-4xl sm:text-5xl font-bold mb-4">
            Outcomes we've delivered
          </h2>
          <p style={{ color: 'var(--muted-foreground)' }} className="text-lg max-w-2xl mx-auto">
            A sample of what Keytrain has built and improved for clients.
          </p>
        </div>

        <div ref={containerRef} className="grid grid-cols-2 gap-12">
          {/* Left Column: Statistics */}
          <div className="flex flex-col gap-8">
            {results.map((result, i) => (
              <div key={i} data-stat="" style={{ backgroundColor: 'var(--background)', borderColor: 'var(--border)' }} className="p-8 border">
                <div className="mb-6">
                  <div style={{ color: 'var(--accent)' }} className="text-5xl font-bold mb-2">
                    {result.metric}
                  </div>
                  <p style={{ color: 'var(--foreground)' }} className="text-lg font-semibold">
                    {result.label}
                  </p>
                </div>
                <p style={{ color: 'var(--muted-foreground)' }} className="text-sm">
                  {result.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column: Case Studies */}
          <div className="flex flex-col gap-8">
            {caseStudies.map((study, i) => {
              const Icon = i === 0 ? Landmark : Truck
              const bgColor = i === 0 ? 'rgba(37, 99, 235, 0.1)' : 'rgba(34, 197, 94, 0.1)'
              const iconColor = i === 0 ? '#2563EB' : '#22C55E'
              
              return (
                <div key={i} data-stat="" style={{ backgroundColor: 'var(--background)', borderColor: 'var(--border)' }} className="p-8 border">
                  {/* Icon placeholder */}
                  <div style={{ backgroundColor: bgColor }} className="w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                    <Icon size={32} style={{ color: iconColor }} />
                  </div>
                  
                  <span style={{ backgroundColor: 'rgba(37, 99, 235, 0.1)', color: 'var(--accent)' }} className="inline-block px-3 py-1 text-xs font-semibold mb-4 block text-center">
                    {study.tag}
                  </span>
                  <h3 style={{ color: 'var(--foreground)' }} className="text-lg font-bold mb-4">
                    {study.title}
                  </h3>
                  <p style={{ color: 'var(--accent)' }} className="text-sm font-medium">
                    {study.result}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const testimonials = containerRef.current.querySelectorAll('[data-testimonial]')
        testimonials.forEach((testimonial) => {
          const rect = testimonial.getBoundingClientRect()
          if (rect.top < window.innerHeight) {
            testimonial.classList.add('animate-fade-up')
          }
        })
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const testimonials = [
    {
      quote: 'Keytrain didn&apos;t just consult — they built alongside us. Our infra is finally something we&apos;re proud of.',
      author: 'David Kim',
      title: 'CTO',
      company: 'PulseOps'
    },
    {
      quote: 'We went from 2-week release cycles to daily deploys in 3 months. Exceptional team.',
      author: 'Rachel Torres',
      title: 'VP Engineering',
      company: 'Meridian Health'
    },
    {
      quote: 'The AI integration they delivered is now core to our product. Couldn&apos;t have done it without them.',
      author: 'James Okafor',
      title: 'CEO',
      company: 'Stacklane'
    }
  ]

  return (
    <section id="testimonials" style={{ backgroundColor: 'var(--background)' }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 style={{ color: 'var(--foreground)' }} className="text-4xl sm:text-5xl font-bold mb-4">
            What Our Customers Say
          </h2>
          <p style={{ color: 'var(--muted-foreground)' }} className="text-lg max-w-2xl mx-auto">
            What engineering and operations leaders say about working with us.
          </p>
        </div>

        <div ref={containerRef} className="grid grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => {
            const initials = testimonial.author.split(' ').map(n => n[0]).join('')
            const colors = ['#2563EB', '#22C55E', '#F59E0B']
            const bgColor = colors[i % colors.length]
            
            return (
              <div
                key={i}
                data-testimonial=""
                style={{ backgroundColor: 'var(--background)', borderColor: 'var(--border)' }}
                className="p-8 border hover:opacity-80 transition-opacity"
              >
                {/* Star Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} style={{ color: 'var(--accent)' }}>★</span>
                  ))}
                </div>

                <p style={{ color: 'var(--foreground)' }} className="mb-6 leading-relaxed italic text-sm">
                  "{testimonial.quote}"
                </p>

                <div style={{ borderTopColor: 'var(--border)' }} className="border-t pt-6 flex items-center gap-4">
                  <div
                    style={{ backgroundColor: bgColor, color: 'white' }}
                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
                  >
                    {initials}
                  </div>
                  <div>
                    <p style={{ color: 'var(--foreground)' }} className="font-semibold">{testimonial.author}</p>
                    <p style={{ color: 'var(--muted-foreground)' }} className="text-sm">{testimonial.title}</p>
                    <p style={{ color: 'var(--muted-foreground)' }} className="text-sm">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

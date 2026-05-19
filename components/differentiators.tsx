'use client'

import { useEffect, useRef } from 'react'
import { ChevronDown } from 'lucide-react'

export function Differentiators() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const items = containerRef.current.querySelectorAll('[data-diff]')
        items.forEach((item, index) => {
          const rect = item.getBoundingClientRect()
          if (rect.top < window.innerHeight) {
            setTimeout(() => {
              item.classList.add('animate-fade-up')
            }, index * 100)
          }
        })
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const diffs = [
    {
      number: '01',
      title: 'Engineer-led teams',
      description: 'Our consultants are practicing engineers, not account managers. You get people who have actually built what they&apos;re advising on.'
    },
    {
      number: '02',
      title: 'No fluff consulting',
      description: 'We embed with your team, learn your stack, and deliver working solutions — not slide decks.'
    },
    {
      number: '03',
      title: 'Startup speed, enterprise depth',
      description: 'We move fast without cutting corners. Mid-market clients get senior-level expertise without the big-firm overhead.'
    }
  ]

  return (
    <section style={{ backgroundColor: 'var(--secondary)' }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 style={{ color: 'var(--foreground)' }} className="text-4xl sm:text-5xl font-bold mb-4">
            Why Choose Keytrain?
          </h2>
          <p style={{ color: 'var(--muted-foreground)' }} className="text-lg max-w-2xl mx-auto">
            Industry-leading technology combined with exceptional support and results.
          </p>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {diffs.map((item, i) => (
            <div key={i} data-diff="" className="space-y-4">
              <div className="flex items-baseline gap-2">
                <span style={{ color: 'var(--accent)' }} className="text-5xl font-bold">{item.number}</span>
              </div>
              <h3 style={{ color: 'var(--foreground)' }} className="text-2xl font-bold">
                {item.title}
              </h3>
              <p style={{ color: 'var(--muted-foreground)' }} className="leading-relaxed">
                {item.description}
              </p>
              <div style={{ borderTopColor: 'var(--border)' }} className="pt-4 border-t"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const steps = containerRef.current.querySelectorAll('[data-step]')
        steps.forEach((step) => {
          const rect = step.getBoundingClientRect()
          if (rect.top < window.innerHeight) {
            step.classList.add('animate-fade-up')
          }
        })
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const steps = [
    {
      title: 'Discover',
      description: 'We audit your systems, understand your goals, and identify gaps'
    },
    {
      title: 'Architect',
      description: 'We design a solution tailored to your stack and team capacity'
    },
    {
      title: 'Build',
      description: 'Our engineers deliver — with weekly check-ins and full transparency'
    },
    {
      title: 'Scale',
      description: 'We hand off cleanly or stay on as your long-term technology partner'
    }
  ]

  return (
    <section id="how-it-works" style={{ backgroundColor: 'var(--background)' }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 style={{ color: 'var(--foreground)' }} className="text-4xl sm:text-5xl font-bold mb-4">
            How It Works
          </h2>
          <p style={{ color: 'var(--muted-foreground)' }} className="text-lg max-w-2xl mx-auto">
            Get started in four simple steps and see results within weeks.
          </p>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connecting Line Above */}
          <div style={{ backgroundColor: 'var(--border)' }} className="absolute md:top-6 top-0 left-0 right-0 h-px md:h-px" />

          {steps.map((step, i) => (
            <div key={i} data-step="" className="relative">
              <div style={{ backgroundColor: 'rgba(37, 99, 235, 0.1)', borderColor: 'var(--accent)', color: 'var(--accent)' }} className="w-12 h-12 border flex items-center justify-center font-bold mb-6 relative z-10 bg-white">
                {i + 1}
              </div>
              <h3 style={{ color: 'var(--foreground)' }} className="text-xl font-bold mb-2">
                {step.title}
              </h3>
              <p style={{ color: 'var(--muted-foreground)' }} className="text-sm leading-relaxed">
                {step.description}
              </p>
              {/* Mobile connector arrow */}
              {i < steps.length - 1 ? (
                <div className="md:hidden flex justify-center mt-6">
                  <ChevronDown size={20} className="text-[var(--muted-foreground)]" />
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

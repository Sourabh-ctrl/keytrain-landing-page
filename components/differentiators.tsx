'use client'

import { useEffect, useRef } from 'react'
import { CheckCircle, Clock, Users, Zap, Layers, Globe } from 'lucide-react'

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
    { icon: CheckCircle, title: 'Senior engineering expertise', description: 'Hands-on senior engineers lead every engagement — not juniors.' },
    { icon: Zap, title: 'AI-first development', description: 'We prioritize data and models that create measurable business value.' },
    { icon: Clock, title: 'Fast delivery cycles', description: 'Short sprints and frequent demos keep momentum and reduce risk.' },
    { icon: Layers, title: 'Startup speed + enterprise quality', description: 'Move quickly while maintaining high reliability and security.' },
    { icon: Users, title: 'Transparent communication', description: 'Weekly updates, access to engineers, and clear reporting.' },
    { icon: Globe, title: 'Long-term technical partnership', description: 'We focus on maintainable systems and ongoing growth.' },
  ]

  return (
    <section id="why-choose-us" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 style={{ color: 'var(--foreground)' }} className="text-4xl sm:text-5xl font-bold mb-4">
            Why Choose Keytrain?
          </h2>
          <p style={{ color: 'var(--muted-foreground)' }} className="text-lg max-w-2xl mx-auto">
            Industry-leading technology combined with exceptional support and results.
          </p>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
          {diffs.map((item, i) => {
            const Icon = item.icon as any
            return (
              <div key={i} data-diff="" className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-5 sm:p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 rounded-md bg-[rgba(59,130,246,0.08)] text-[var(--accent)]">
                    {Icon ? <Icon size={20} /> : null}
                  </div>
                  <h3 style={{ color: 'var(--foreground)' }} className="text-xl font-semibold">{item.title}</h3>
                </div>
                <p style={{ color: 'var(--muted-foreground)' }} className="leading-relaxed">
                  {item.description}
                </p>
              </div>
            )
          })}
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
    { title: 'Discovery Call', description: 'Align on goals, scope, and success metrics.' },
    { title: 'Technical Planning', description: 'Architecture, milestones, and deliverables.' },
    { title: 'Development Sprint', description: 'Iterative delivery with weekly demos.' },
    { title: 'QA & Testing', description: 'Automated and manual validation for reliability.' },
    { title: 'Launch', description: 'Production rollout and monitoring.' },
    { title: 'Ongoing Support', description: 'SLA-backed support and continuous improvements.' },
  ]

  return (
    <section id="process" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 style={{ color: 'var(--foreground)' }} className="text-4xl sm:text-5xl font-bold mb-4">
            How It Works
          </h2>
          <p style={{ color: 'var(--muted-foreground)' }} className="text-lg max-w-2xl mx-auto">
            Get started in four simple steps and see results within weeks.
          </p>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-6 gap-5 sm:gap-8 relative">
          <div style={{ backgroundColor: 'var(--border)' }} className="hidden md:block absolute top-8 left-0 right-0 h-px" />

          {steps.map((step, i) => (
            <div key={i} data-step="" className="relative text-center md:text-left">
              <div className="mx-auto md:mx-0 w-12 h-12 rounded-full bg-[rgba(59,130,246,0.08)] border border-[var(--accent)] flex items-center justify-center font-bold mb-4">
                {i + 1}
              </div>
              <h3 style={{ color: 'var(--foreground)' }} className="text-lg font-semibold mb-2">
                {step.title}
              </h3>
              <p style={{ color: 'var(--muted-foreground)' }} className="text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


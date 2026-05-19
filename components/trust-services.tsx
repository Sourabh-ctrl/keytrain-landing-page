'use client'

import { useEffect, useRef } from 'react'
import { HeartPulse, Activity, Layers, Building2, Cloud, CheckCircle2, Zap, Settings, Code, RefreshCw, Users, Shield, Database, Rocket } from 'lucide-react'

export function TrustBar() {
  const stats = [
    { value: '7+', label: 'Years in business' },
    { value: '50+', label: 'Clients served' },
    { value: 'US & Europe', label: 'Locations' },
    { value: '14', label: 'Service areas' },
  ]

  return (
    <section style={{ backgroundColor: 'var(--background)', borderTopColor: 'var(--border)', borderBottomColor: 'var(--border)' }} className="py-12 px-4 sm:px-6 lg:px-8 border-t border-b">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[var(--border)] text-center">
          {stats.map((stat, i) => (
            <div key={i} className="py-6 px-4">
              <div style={{ color: 'var(--foreground)' }} className="text-3xl font-bold">
                {stat.value}
              </div>
              {stat.label ? (
                <div style={{ color: 'var(--muted-foreground)' }} className="text-sm mt-2">
                  {stat.label}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ServicesGrid() {
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (gridRef.current) {
        const cards = gridRef.current.querySelectorAll('[data-fade]')
        cards.forEach((card) => {
          const rect = card.getBoundingClientRect()
          if (rect.top < window.innerHeight) {
            card.classList.add('animate-fade-up')
          }
        })
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const services = [
    { title: 'IT Consulting & Strategy', description: 'Align your technology roadmap with business goals', icon: Settings },
    { title: 'Software Development', description: 'Custom applications built for scale and maintainability', icon: Code },
    { title: 'AI/ML Integration', description: 'Embed intelligence into your existing systems and workflows', icon: Zap },
    { title: 'DevOps & Automation', description: 'Ship faster with CI/CD pipelines and automated infrastructure', icon: RefreshCw },
    { title: 'Cloud & Infrastructure', description: 'Design, migrate, and optimize cloud environments on AWS, GCP, or Azure', icon: Cloud },
    { title: 'Data Engineering & Analytics', description: 'Build data pipelines and dashboards that drive decisions', icon: Database },
    { title: 'Managed IT Services', description: 'Ongoing support and monitoring so your team stays focused', icon: CheckCircle2 },
    { title: 'QA & Testing Automation', description: 'Automated test suites that catch issues before your customers do', icon: CheckCircle2 },
    { title: 'API Design & Integration', description: 'Well-documented, scalable APIs that connect your systems reliably', icon: Zap },
    { title: 'Legacy System Modernization', description: 'Migrate outdated systems to modern architecture without disrupting operations', icon: RefreshCw },
    { title: 'IT Staff Augmentation', description: 'Senior engineers embedded in your team, available on-demand', icon: Users },
    { title: 'Cybersecurity Advisory', description: 'Threat assessments, compliance readiness, and security architecture for growing teams', icon: Shield },
    { title: 'ERP / CRM Implementation', description: 'Salesforce, SAP, and HubSpot implementations tailored to your workflows', icon: Database },
    { title: 'Product Engineering', description: 'End-to-end product development from wireframe to production-ready system', icon: Rocket }
  ]

  return (
    <section id="services" style={{ backgroundColor: 'var(--background)' }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 style={{ color: 'var(--foreground)' }} className="text-4xl sm:text-5xl font-bold mb-4">
            What We Do
          </h2>
          <p style={{ color: 'var(--muted-foreground)' }} className="text-lg max-w-2xl mx-auto">
            Comprehensive services to modernize your infrastructure and accelerate your engineering.
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {services.slice(0, 15).map((service, i) => {
            const Icon = service.icon
            return (
              <div
                key={i}
                data-fade=""
                style={{ backgroundColor: 'var(--background)', borderColor: 'var(--border)' }}
                className="p-6 border hover:opacity-80 transition-opacity"
              >
                <Icon size={24} style={{ color: 'var(--accent)' }} className="mb-4" />
                <h3 style={{ color: 'var(--foreground)' }} className="text-base font-bold mb-2">
                  {service.title}
                </h3>
                <p style={{ color: 'var(--muted-foreground)' }} className="text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Note: removed duplicate last card to keep exactly 14 unique service cards */}
      </div>
    </section>
  )
}

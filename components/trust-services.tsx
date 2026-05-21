'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import { Activity, Layers, Landmark, FileText, Building2, Cloud, Zap, Settings, Code, RefreshCw, Users, Shield, Database, Rocket } from 'lucide-react'
import { serviceCategories } from '@/lib/content'

const serviceIcons: Record<string, React.ComponentType<{ size?: number }>> = {
  'ai-agents': Zap,
  'custom-ai-solutions': Rocket,
  'computer-vision': Landmark,
  'nlp-systems': FileText,
  'workflow-automation': RefreshCw,
  chatbots: Activity,
  'web-development': Code,
  'saas-development': Layers,
  'custom-software': Settings,
  'enterprise-apps': Building2,
  'api-integrations': Zap,
  'cloud-solutions': Cloud,
  'it-consulting': Settings,
  devops: RefreshCw,
  cybersecurity: Shield,
  'digital-transformation': Layers,
  infrastructure: Database,
  'technical-support': Users,
}

export function TrustBar() {
  const stats = [
    { value: '7+', label: 'Years experience' },
    { value: '50+', label: 'Projects completed' },
    { value: '14', label: 'Industries served' },
    { value: 'US + Europe', label: 'Primary markets' },
    { value: '95%', label: 'Client satisfaction' },
  ]

  return (
    <section style={{ backgroundColor: 'var(--background)', borderTopColor: 'var(--border)', borderBottomColor: 'var(--border)' }} className="py-10 sm:py-12 px-4 sm:px-6 lg:px-8 border-t border-b">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-6 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="py-4 sm:py-6 px-3 sm:px-4 rounded-2xl border border-[var(--border)] bg-[var(--background)]">
              <div style={{ color: 'var(--accent)' }} className="text-2xl sm:text-3xl font-bold">
                {stat.value}
              </div>
              <div style={{ color: 'var(--muted-foreground)' }} className="text-xs sm:text-sm mt-1.5 sm:mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ServicesGrid() {
  const gridRef = useRef<HTMLDivElement>(null)
  const [activeTab, setActiveTab] = useState<'ai-data' | 'infrastructure' | 'consulting'>('ai-data')

  useEffect(() => {
    const handleScroll = () => {
      if (!gridRef.current) return
      const cards = gridRef.current.querySelectorAll('[data-fade]')
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect()
        if (rect.top < window.innerHeight) {
          card.classList.add('animate-fade-up')
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [activeTab])

  const allServices = useMemo(() => serviceCategories.flatMap((category) => category.items), [])

  const tabbedServices = useMemo(
    () => ({
      'ai-data': allServices.filter((service) => ['ai-agents', 'custom-ai-solutions', 'computer-vision', 'nlp-systems'].includes(service.slug)),
      infrastructure: allServices.filter((service) => ['cloud-solutions', 'infrastructure', 'devops', 'cybersecurity'].includes(service.slug)),
      consulting: allServices.filter((service) => ['it-consulting', 'digital-transformation', 'enterprise-apps', 'technical-support'].includes(service.slug)),
    }),
    [allServices],
  )

  return (
    <section id="services" style={{ backgroundColor: 'var(--background)' }} className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 style={{ color: 'var(--foreground)' }} className="text-3xl sm:text-5xl font-bold mb-4">
            What We Do
          </h2>
          <p style={{ color: 'var(--muted-foreground)' }} className="text-lg max-w-2xl mx-auto">
            Comprehensive services to modernize your infrastructure and accelerate your engineering.
          </p>
        </div>

        <div className="mb-6 sm:mb-8 flex gap-2 sm:gap-3 overflow-x-auto pb-2" role="tablist" aria-label="Service categories">
          {[
            { id: 'ai-data' as const, label: 'AI & Data' },
            { id: 'infrastructure' as const, label: 'IT Infrastructure' },
            { id: 'consulting' as const, label: 'Consulting' },
          ].map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`shrink-0 rounded-full px-4 sm:px-5 py-2.5 text-sm font-semibold transition-colors ${
                activeTab === tab.id ? 'bg-[var(--accent)] text-[var(--accent-foreground)]' : 'bg-slate-100 text-slate-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {tabbedServices[activeTab].map((service) => {
            const Icon = serviceIcons[service.slug]
            return (
              <div key={service.slug} data-fade="" className="p-5 sm:p-6 rounded-2xl border border-[var(--border)] bg-[var(--background)] hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div style={{ color: 'var(--accent)' }} className="p-2 rounded-md bg-[rgba(59,130,246,0.08)]">
                      {Icon ? <Icon size={20} /> : null}
                    </div>
                    <h4 style={{ color: 'var(--foreground)' }} className="text-base font-semibold leading-snug">{service.title}</h4>
                  </div>
                  <Link href={`/services/${service.slug}`} className="text-sm text-[var(--accent)] font-medium">
                    Learn more -&gt;
                  </Link>
                </div>
                <p style={{ color: 'var(--muted-foreground)' }} className="text-sm mb-3">{service.description}</p>
                <div className="text-sm text-[var(--foreground)] font-semibold">Outcome: <span className="text-[var(--accent)] font-bold">{service.outcome}</span></div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

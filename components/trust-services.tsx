'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Zap, Rocket, Landmark, FileText, RefreshCw, Activity, 
  Code, Layers, Settings, Building2, Cloud, Shield, 
  Database, Users, ArrowRight 
} from 'lucide-react'
import { serviceCategories } from '@/lib/content'
import { FadeInUp, StaggerContainer, StaggerItem } from '@/lib/animations'

const serviceIcons: Record<string, React.ComponentType<{ className?: string }>> = {
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

const stats = [
  { value: '7+', label: 'Years of Experience' },
  { value: '50+', label: 'Projects Delivered' },
  { value: '14', label: 'Industries Served' },
  { value: '95%', label: 'Client Satisfaction' },
]

export function TrustBar() {
  return (
    <section className="section-wrapper-sm bg-secondary/50">
      <div className="container-lg">
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="text-center p-6 sm:p-8 rounded-2xl bg-card border border-border">
                <div className="stat-value mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

const tabs = [
  { id: 'ai-data', label: 'AI & Data', icon: Zap },
  { id: 'software', label: 'Software', icon: Code },
  { id: 'infrastructure', label: 'Infrastructure', icon: Cloud },
] as const

type TabId = (typeof tabs)[number]['id']

export function ServicesGrid() {
  const [activeTab, setActiveTab] = useState<TabId>('ai-data')

  const allServices = serviceCategories.flatMap((category) => category.items)

  const tabbedServices = {
    'ai-data': allServices.filter((service) => 
      ['ai-agents', 'custom-ai-solutions', 'computer-vision', 'nlp-systems', 'workflow-automation', 'chatbots'].includes(service.slug)
    ),
    software: allServices.filter((service) => 
      ['web-development', 'saas-development', 'custom-software', 'enterprise-apps', 'api-integrations'].includes(service.slug)
    ),
    infrastructure: allServices.filter((service) => 
      ['cloud-solutions', 'infrastructure', 'devops', 'cybersecurity', 'it-consulting', 'digital-transformation'].includes(service.slug)
    ),
  }

  return (
    <section id="services" className="section-wrapper bg-background">
      <div className="container-lg">
        {/* Section Header */}
        <FadeInUp className="text-center mb-12 sm:mb-16">
          <p className="section-label">Our Services</p>
          <h2 className="section-title">What We Build</h2>
          <p className="section-description">
            Comprehensive solutions to modernize your infrastructure and accelerate engineering velocity.
          </p>
        </FadeInUp>

        {/* Tabs */}
        <FadeInUp delay={0.1} className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-secondary">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    activeTab === tab.id
                      ? 'text-accent-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="services-tab"
                      className="absolute inset-0 bg-accent rounded-xl shadow-lg shadow-accent/20"
                      transition={{ type: 'spring', bounce: 0.15, duration: 0.5 }}
                    />
                  )}
                  <Icon className="w-4 h-4 relative z-10" />
                  <span className="relative z-10 hidden sm:inline">{tab.label}</span>
                </button>
              )
            })}
          </div>
        </FadeInUp>

        {/* Services Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          >
            {tabbedServices[activeTab].map((service, index) => {
              const Icon = serviceIcons[service.slug]
              return (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Link
                    href={`/services/${service.slug}`}
                    className="group card-interactive flex flex-col h-full"
                  >
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="icon-box">
                        {Icon && <Icon className="w-5 h-5" />}
                      </div>
                      <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </div>
                    
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground mb-4 flex-1">
                      {service.description}
                    </p>
                    
                    <div className="pt-4 border-t border-border">
                      <p className="text-sm">
                        <span className="text-muted-foreground">Outcome: </span>
                        <span className="font-medium text-accent">{service.outcome}</span>
                      </p>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </motion.div>
        </AnimatePresence>

        {/* View All Link */}
        <FadeInUp delay={0.2} className="text-center mt-10">
          <Link 
            href="/services" 
            className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
          >
            View all services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeInUp>
      </div>
    </section>
  )
}

'use client'

import { useEffect, useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import {
  Cloud,
  CloudRain,
  Server,
  Box,
  HardDrive,
  Database,
  Terminal,
  Atom,
  Cpu,
  Layers,
  Shield,
  Flame,
  Zap,
  Landmark,
  HeartPulse,
  Truck,
  ShoppingBag,
  Settings2,
  FileText,
  RefreshCw,
  UserPlus,
  Clock,
  CheckCircle,
  Mail,
  ArrowRight,
} from 'lucide-react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { toast } from '@/hooks/use-toast'
import { FadeInUp, StaggerContainer, StaggerItem } from '@/lib/animations'

const techStack = [
  { icon: Cloud, label: 'AWS' },
  { icon: CloudRain, label: 'Google Cloud' },
  { icon: Server, label: 'Azure' },
  { icon: Box, label: 'Kubernetes' },
  { icon: HardDrive, label: 'Docker' },
  { icon: Database, label: 'PostgreSQL' },
  { icon: Terminal, label: 'Python' },
  { icon: Atom, label: 'React' },
  { icon: Cpu, label: 'Node.js' },
  { icon: Layers, label: 'Terraform' },
  { icon: Shield, label: 'Snowflake' },
  { icon: Flame, label: 'Apache Spark' },
  { icon: Database, label: 'dbt' },
  { icon: Zap, label: 'FastAPI' },
]

const industries = [
  {
    icon: Landmark,
    title: 'Fintech & Banking',
    description: 'Compliance-ready systems, real-time data, and secure infrastructure',
  },
  {
    icon: HeartPulse,
    title: 'Healthcare',
    description: 'HIPAA-aware architectures and data pipelines for clinical operations',
  },
  {
    icon: Truck,
    title: 'Logistics',
    description: 'Real-time tracking, routing optimization, and warehouse integrations',
  },
  {
    icon: Layers,
    title: 'SaaS',
    description: 'Scalable backends, CI/CD pipelines, and AI-powered product features',
  },
  {
    icon: ShoppingBag,
    title: 'Retail',
    description: 'High-availability storefronts, inventory systems, and analytics',
  },
  {
    icon: Settings2,
    title: 'Manufacturing',
    description: 'IoT integrations, MES systems, and operational data platforms',
  },
]

const engagementModels = [
  {
    icon: FileText,
    title: 'Fixed-Price Project',
    description: 'Defined scope, timeline, and deliverables. Best for discrete projects with clear requirements.',
    footer: 'Typical: 6-16 weeks',
    popular: false,
  },
  {
    icon: RefreshCw,
    title: 'Monthly Retainer',
    description: 'A dedicated team embedded with yours on an ongoing basis. Best for continuous development needs.',
    footer: 'Min: 3-month commitment',
    popular: true,
  },
  {
    icon: UserPlus,
    title: 'Staff Augmentation',
    description: 'Senior engineers placed directly in your team. You manage the work, we provide the talent.',
    footer: 'Available: 1-10 engineers',
    popular: false,
  },
]

const faqs = [
  {
    question: 'How do engagements typically start?',
    answer: 'We begin with a free 30-minute discovery call to understand your goals, current stack, and pain points. From there we send a scoped proposal within 5 business days — no fluff, no upsells.',
  },
  {
    question: 'What time zones does your team work in?',
    answer: 'Our engineering team operates across IST and overlaps 4-6 hours daily with US Eastern and Central time. Our US-based client lead is available full US business hours.',
  },
  {
    question: 'Do you work with early-stage startups?',
    answer: 'Our sweet spot is mid-market companies (50-5,000 employees) with established products. We take on select startup projects where the technical challenge is a strong fit.',
  },
  {
    question: 'Who owns the IP and code you build?',
    answer: 'You do. 100%. All work product, code, documentation, and assets transfer to you upon final payment. We sign NDAs and IP assignment agreements before any engagement begins.',
  },
  {
    question: 'Can we start with a small pilot project?',
    answer: 'Absolutely. Most clients start with a 4-6 week fixed-price pilot. This lets both teams validate the fit before a longer commitment.',
  },
  {
    question: 'What makes Keytrain different?',
    answer: "We're not a body shop. Every engagement is led by a senior engineer who has built production systems at scale. We consult on architecture decisions, not just execute tickets.",
  },
]

export function TechStackStrip() {
  return (
    <section className="section-wrapper-sm bg-background border-y border-border">
      <div className="container-lg">
        <FadeInUp className="text-center mb-8">
          <p className="section-label">Our Technology Stack</p>
        </FadeInUp>
        
        <FadeInUp delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((item) => (
              <motion.div
                key={item.label}
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-secondary border border-border text-sm font-medium text-foreground"
              >
                <item.icon className="w-4 h-4 text-muted-foreground" />
                {item.label}
              </motion.div>
            ))}
          </div>
        </FadeInUp>
      </div>
    </section>
  )
}

export function IndustriesGrid() {
  return (
    <section id="industries" className="section-wrapper bg-secondary/30">
      <div className="container-lg">
        <FadeInUp className="text-center mb-12 sm:mb-16">
          <p className="section-label">Industries</p>
          <h2 className="section-title">Domains We Know</h2>
          <p className="section-description">
            We understand your industry, not just your tech stack.
          </p>
        </FadeInUp>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {industries.map((industry) => {
            const Icon = industry.icon
            return (
              <StaggerItem key={industry.title}>
                <motion.div 
                  whileHover={{ y: -4 }}
                  className="card-elevated h-full text-center"
                >
                  <div className="icon-box icon-box-lg mx-auto mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {industry.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {industry.description}
                  </p>
                </motion.div>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}

export function EngagementModels() {
  return (
    <section className="section-wrapper bg-background">
      <div className="container-lg">
        <FadeInUp className="text-center mb-12 sm:mb-16">
          <p className="section-label">Engagement Models</p>
          <h2 className="section-title">How to Work With Us</h2>
          <p className="section-description">
            Flexible structures built around your team and goals.
          </p>
        </FadeInUp>

        <StaggerContainer className="grid lg:grid-cols-3 gap-4 sm:gap-6">
          {engagementModels.map((model) => {
            const Icon = model.icon
            return (
              <StaggerItem key={model.title}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className={`relative card-elevated h-full ${
                    model.popular ? 'border-accent shadow-lg shadow-accent/10' : ''
                  }`}
                >
                  {model.popular && (
                    <div className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="flex items-center gap-3 mb-4">
                    <div className="icon-box">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {model.title}
                    </h3>
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {model.description}
                  </p>
                  
                  <p className="text-sm font-semibold text-accent">
                    {model.footer}
                  </p>
                </motion.div>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}

export function MeetTheTeam() {
  const processSteps = [
    { title: 'Discovery', description: 'Rapid assessment, stakeholder interviews, and success criteria.' },
    { title: 'Planning', description: 'Technical roadmap, architecture, and milestone-based proposals.' },
    { title: 'Delivery', description: 'Weekly sprints, demos, and measurable outcomes.' },
  ]

  return (
    <section id="about" className="section-wrapper bg-secondary/30">
      <div className="container-lg">
        <FadeInUp className="text-center mb-12 sm:mb-16">
          <p className="section-label">Our Approach</p>
          <h2 className="section-title">Engineering-First Process</h2>
          <p className="section-description">
            A predictable approach that reduces risk and accelerates outcomes.
          </p>
        </FadeInUp>

        <StaggerContainer className="grid md:grid-cols-3 gap-4 sm:gap-6">
          {processSteps.map((step, index) => (
            <StaggerItem key={step.title}>
              <div className="card-elevated h-full">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-lg bg-accent/10 text-accent flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

export function FAQSection() {
  return (
    <section id="faq" className="section-wrapper bg-background">
      <div className="container-lg">
        <FadeInUp className="text-center mb-12 sm:mb-16">
          <p className="section-label">FAQ</p>
          <h2 className="section-title">Common Questions</h2>
          <p className="section-description">
            Everything you need to know before our first call.
          </p>
        </FadeInUp>

        <FadeInUp delay={0.1} className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={faq.question} 
                value={`faq-${index}`} 
                className="card-elevated px-6 data-[state=open]:border-accent/50"
              >
                <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:text-accent hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeInUp>
      </div>
    </section>
  )
}

export function ContactFormSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
    honeypot: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = (state: typeof formState) => {
    const nextErrors: Record<string, string> = {}
    if (!state.name.trim()) nextErrors.name = 'Name is required.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email.trim())) nextErrors.email = 'Enter a valid email.'
    if (state.message.trim().length < 20) nextErrors.message = 'Message must be at least 20 characters.'
    return nextErrors
  }

  useEffect(() => {
    const timeout = setTimeout(() => setErrors(validate(formState)), 300)
    return () => clearTimeout(timeout)
  }, [formState])

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors = validate(formState)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
          honeypot: formState.honeypot,
          company: 'Not provided',
          service: 'General Inquiry',
          budget: 'Not specified',
          timeline: 'Not specified',
        }),
      })
      const data = await response.json()

      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Unable to send your message.')
      }

      setSubmitted(true)
      toast({
        title: 'Message sent',
        description: 'We received your message and will reply within 1 business day.',
      })
    } catch (error) {
      toast({
        title: 'Submission failed',
        description: error instanceof Error ? error.message : 'Please try again.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-wrapper bg-secondary/30">
      <div className="container-lg">
        <FadeInUp className="text-center mb-12 sm:mb-16">
          <p className="section-label">Contact</p>
          <h2 className="section-title">Start a Conversation</h2>
          <p className="section-description">
            Tell us what you&apos;re building and where you need help.
          </p>
        </FadeInUp>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <FadeInUp delay={0.1}>
            <div className="card-elevated">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Thank you!
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    We&apos;ll be in touch within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <label className="hidden" aria-hidden="true">
                    <input
                      value={formState.honeypot}
                      onChange={(e) => setFormState((s) => ({ ...s, honeypot: e.target.value }))}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </label>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={formState.name}
                      onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                      placeholder="John Smith"
                    />
                    {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Work Email
                    </label>
                    <input
                      type="email"
                      value={formState.email}
                      onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                      placeholder="john@company.com"
                    />
                    {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      How can we help?
                    </label>
                    <textarea
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors resize-none"
                      placeholder="Tell us about your project, challenges, and timeline..."
                    />
                    {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full justify-center disabled:opacity-60"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </FadeInUp>

          {/* Contact Info */}
          <FadeInUp delay={0.2}>
            <div className="card-elevated h-full flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-6">
                  Get in Touch
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="icon-box">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email us at</p>
                      <a href="mailto:hello@keytrain.io" className="font-semibold text-foreground hover:text-accent transition-colors">
                        hello@keytrain.io
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="icon-box">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Response time</p>
                      <p className="font-semibold text-foreground">Within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="icon-box">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Consultation</p>
                      <p className="font-semibold text-foreground">Free discovery call</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">
                  Prefer to schedule directly?
                </p>
                <a
                  href="#"
                  className="btn-secondary w-full justify-center"
                >
                  Book a 30-min call
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  )
}

export function InsightsSection() {
  const posts = [
    {
      title: 'How AI Automation Cuts Costs in Mid-Market Teams',
      excerpt: 'A practical framework for identifying high-ROI automation opportunities.',
      href: '/case-studies',
    },
    {
      title: 'Modern Cloud Foundations for Fast-Growth SaaS',
      excerpt: 'Key infrastructure decisions for reliability and cost control.',
      href: '/services/cloud-solutions',
    },
    {
      title: 'From Pilot to Production: Shipping AI Features Safely',
      excerpt: 'What changes between MVP and production readiness.',
      href: '/services/custom-ai-solutions',
    },
  ]

  return (
    <section className="section-wrapper bg-background border-t border-border">
      <div className="container-lg">
        <FadeInUp className="text-center mb-12 sm:mb-16">
          <p className="section-label">Insights</p>
          <h2 className="section-title">Latest Thinking</h2>
          <p className="section-description">
            Fresh perspectives on AI, software delivery, and infrastructure.
          </p>
        </FadeInUp>

        <StaggerContainer className="grid md:grid-cols-3 gap-4 sm:gap-6">
          {posts.map((post) => (
            <StaggerItem key={post.title}>
              <motion.a
                href={post.href}
                whileHover={{ y: -4 }}
                className="group card-interactive block h-full"
              >
                <div className="aspect-video w-full bg-secondary rounded-xl mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </p>
              </motion.a>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

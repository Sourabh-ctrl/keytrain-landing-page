'use client'

import { useState, FormEvent } from 'react'
import {
  Atom,
  Box,
  ChevronDown,
  CircleCheck,
  Cloud,
  CloudRain,
  Cpu,
  Database,
  FileText,
  Flame,
  Globe2,
  HardDrive,
  HeartPulse,
  Landmark,
  Layers,
  Linkedin,
  RefreshCw,
  Server,
  Settings2,
  Shield,
  ShoppingBag,
  Snowflake,
  Toolbox,
  Terminal,
  Truck,
  UserPlus,
  Zap,
  Clock4,
} from 'lucide-react'

const techStack = [
  { icon: Cloud, label: 'AWS' },
  { icon: CloudRain, label: 'Google Cloud' },
  { icon: Server, label: 'Microsoft Azure' },
  { icon: Snowflake, label: 'Snowflake' },
  { icon: Box, label: 'Kubernetes' },
  { icon: HardDrive, label: 'Docker' },
  { icon: Toolbox, label: 'Terraform' },
  { icon: Database, label: 'PostgreSQL' },
  { icon: Terminal, label: 'Python' },
  { icon: Atom, label: 'React' },
  { icon: Cpu, label: 'Node.js' },
  { icon: Layers, label: 'Salesforce' },
  { icon: Shield, label: 'SAP' },
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
    title: 'Healthcare & Life Sciences',
    description: 'HIPAA-aware architectures and data pipelines for clinical operations',
  },
  {
    icon: Truck,
    title: 'Logistics & Supply Chain',
    description: 'Real-time tracking, routing optimization, and warehouse integrations',
  },
  {
    icon: Layers,
    title: 'SaaS & Product Companies',
    description: 'Scalable backends, CI/CD pipelines, and AI-powered product features',
  },
  {
    icon: ShoppingBag,
    title: 'Retail & E-commerce',
    description: 'High-availability storefronts, inventory systems, and analytics',
  },
  {
    icon: Settings2,
    title: 'Manufacturing & Industrial',
    description: 'IoT integrations, MES systems, and operational data platforms',
  },
]

const engagementModels = [
  {
    icon: FileText,
    title: 'Fixed-price project',
    description: 'Defined scope, timeline, and deliverables. Best for discrete projects with clear requirements. No surprises on cost.',
    footer: 'Typical duration: 6–16 weeks',
  },
  {
    icon: RefreshCw,
    title: 'Monthly retainer',
    description: 'A dedicated team embedded with yours on an ongoing basis. Best for continuous development, DevOps, or managed IT needs.',
    footer: 'Minimum: 3-month commitment',
    popular: true,
  },
  {
    icon: UserPlus,
    title: 'Staff augmentation',
    description: 'Senior engineers placed directly in your team. You manage the work, we provide the talent. Ramp up or down as needed.',
    footer: 'Available: 1–10 engineers',
  },
]

const teamMembers = [
  {
    initials: 'RK',
    color: '#2563EB',
    name: 'Rahul Kapoor',
    role: 'Founder & CTO',
    bio: '15 years in enterprise software. Previously led engineering at two Y Combinator-backed startups.',
  },
  {
    initials: 'PS',
    color: '#16A34A',
    name: 'Priya Sharma',
    role: 'Head of Cloud & DevOps',
    bio: 'AWS certified architect with 10+ years building cloud infrastructure for fintech and healthcare clients.',
  },
  {
    initials: 'AV',
    color: '#7C3AED',
    name: 'Arjun Verma',
    role: 'Lead AI/ML Engineer',
    bio: 'Built production ML systems at scale. Specializes in LLM integration and real-time data pipelines.',
  },
  {
    initials: 'SM',
    color: '#F59E0B',
    name: 'Sara Mitchell',
    role: 'Client Success Lead (US)',
    bio: 'Based in Austin, TX. Manages US client relationships and ensures engagements run on time and on budget.',
  },
]

const faqs = [
  {
    question: 'How do engagements typically start?',
    answer: 'We begin with a free 30-minute discovery call to understand your goals, current stack, and pain points. From there we send a scoped proposal within 5 business days — no fluff, no upsells.',
  },
  {
    question: 'What time zones does your team work in?',
    answer: 'Our engineering team operates across IST and overlaps 4–6 hours daily with US Eastern and Central time. Our US-based client lead Sara Mitchell is available full US business hours.',
  },
  {
    question: 'Do you work with early-stage startups?',
    answer: 'Our sweet spot is mid-market companies (50–5,000 employees) with established products or infrastructure. We take on select startup projects where the technical challenge is a strong fit.',
  },
  {
    question: 'Who owns the IP and code you build?',
    answer: 'You do. 100%. All work product, code, documentation, and assets transfer to you upon final payment. We sign NDAs and IP assignment agreements before any engagement begins.',
  },
  {
    question: 'Can we start with a small pilot project?',
    answer: 'Absolutely. Most clients start with a 4–6 week fixed-price pilot. This lets both teams validate the fit before a longer commitment.',
  },
  {
    question: 'What makes Keytrain different from a typical offshore dev shop?',
    answer: 'We\'re not a body shop. Every engagement is led by a senior engineer who has built production systems at scale. We consult on architecture decisions, not just execute tickets.',
  },
  {
    question: 'Do you offer post-delivery support?',
    answer: 'Yes. All project engagements include a 30-day support window post-launch. Ongoing support is available via monthly retainer.',
  },
  {
    question: 'How do we get started?',
    answer: 'Click "Schedule a call" below. We\'ll confirm within 1 business day and send a calendar invite for a 30-minute intro call.',
  },
]

const servicesOptions = [
  'IT Consulting & Strategy',
  'Software Development',
  'AI/ML Integration',
  'DevOps & Automation',
  'Cloud & Infrastructure',
  'Data Engineering & Analytics',
  'Managed IT Services',
  'QA & Testing Automation',
  'API Design & Integration',
  'Legacy System Modernization',
  'IT Staff Augmentation',
  'Cybersecurity Advisory',
  'ERP / CRM Implementation',
  'Product Engineering',
]

export function TechStackStrip() {
  return (
    <section style={{ backgroundColor: 'var(--background)' }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <p style={{ color: 'var(--muted-foreground)' }} className="text-sm uppercase tracking-[0.25em] font-medium text-center mb-6">
          Technologies & platforms we work with
        </p>
        <div className="overflow-x-auto">
          <div className="flex items-center justify-center gap-3 min-w-max py-2">
            {techStack.map((item) => {
              return (
                <div key={item.label} className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-slate-900 whitespace-nowrap">
                  {item.label}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export function IndustriesGrid() {
  return (
    <section style={{ backgroundColor: 'var(--secondary)' }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 style={{ color: 'var(--foreground)' }} className="text-3xl sm:text-4xl font-bold mb-4">
            Industries we serve
          </h2>
          <p style={{ color: 'var(--muted-foreground)' }} className="text-lg max-w-2xl mx-auto">
            We understand your domain, not just your stack.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-6">
          {industries.map((industry) => {
            const Icon = industry.icon
            return (
              <div key={industry.title} className="rounded-3xl border border-[var(--border)] bg-[var(--background)] p-8 transition-transform hover:-translate-y-1">
                <div className="mx-auto mb-6 w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-900">
                  <Icon size={28} />
                </div>
                <h3 style={{ color: 'var(--foreground)' }} className="text-xl font-bold mb-3 text-center">
                  {industry.title}
                </h3>
                <p style={{ color: 'var(--muted-foreground)' }} className="text-sm leading-relaxed text-center">
                  {industry.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function EngagementModels() {
  return (
    <section style={{ backgroundColor: 'var(--background)' }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 style={{ color: 'var(--foreground)' }} className="text-3xl sm:text-4xl font-bold mb-4">
            How you can work with us
          </h2>
          <p style={{ color: 'var(--muted-foreground)' }} className="text-lg max-w-2xl mx-auto">
            Flexible engagement structures built around your team and goals.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {engagementModels.map((model) => {
            const Icon = model.icon
            return (
              <div key={model.title} className="rounded-3xl border border-[var(--border)] bg-[var(--secondary)] p-8 shadow-sm">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <Icon size={24} className="text-[var(--accent)]" />
                  {model.popular ? (
                    <span className="rounded-full border border-blue-500 text-blue-500 px-3 py-1 text-xs font-semibold">Most popular</span>
                  ) : null}
                </div>
                <h3 style={{ color: 'var(--foreground)' }} className="text-xl font-bold mb-3">
                  {model.title}
                </h3>
                <p style={{ color: 'var(--muted-foreground)' }} className="text-sm leading-relaxed mb-6">
                  {model.description}
                </p>
                <p style={{ color: 'var(--foreground)' }} className="text-sm font-semibold">
                  {model.footer}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function MeetTheTeam() {
  return (
    <section id="about" style={{ backgroundColor: 'var(--secondary)' }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 style={{ color: 'var(--foreground)' }} className="text-3xl sm:text-4xl font-bold mb-4">
            The team behind Keytrain
          </h2>
          <p style={{ color: 'var(--muted-foreground)' }} className="text-lg max-w-2xl mx-auto">
            Engineer-led from day one. No account managers, no middlemen.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div key={member.name} className="rounded-3xl border border-[var(--border)] bg-[var(--background)] p-8">
              <div className="mb-6">
                <div
                  style={{ backgroundColor: member.color }}
                  className="w-14 h-14 rounded-full flex items-center justify-center font-bold text-white text-lg"
                >
                  {member.initials}
                </div>
              </div>
              <h3 style={{ color: 'var(--foreground)' }} className="text-xl font-bold mb-1">
                {member.name}
              </h3>
              <p style={{ color: 'var(--accent)' }} className="text-sm font-semibold mb-4">
                {member.role}
              </p>
              <p style={{ color: 'var(--muted-foreground)' }} className="text-sm leading-relaxed mb-6">
                {member.bio}
              </p>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:underline"
              >
                <Linkedin size={16} />
                View profile
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section style={{ backgroundColor: 'var(--background)' }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 style={{ color: 'var(--foreground)' }} className="text-3xl sm:text-4xl font-bold mb-4">
            Common questions
          </h2>
          <p style={{ color: 'var(--muted-foreground)' }} className="text-lg max-w-2xl mx-auto">
            Everything you need to know before our first call.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {faqs.map((faq, index) => (
            <div key={faq.question} className="rounded-3xl border border-[var(--border)] bg-[var(--secondary)] p-6">
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between gap-4 text-left"
              >
                <span style={{ color: 'var(--foreground)' }} className="text-base font-semibold">
                  {faq.question}
                </span>
                <ChevronDown
                  size={20}
                  className={`transform transition-transform duration-200 ${openIndex === index ? 'rotate-180' : 'rotate-0'}`}
                />
              </button>
              {openIndex === index ? (
                <p style={{ color: 'var(--muted-foreground)' }} className="mt-4 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ContactFormSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    companySize: '50–200',
    service: servicesOptions[0],
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (field: string, value: string) => {
    setFormState((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section style={{ backgroundColor: 'var(--secondary)' }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 style={{ color: 'var(--foreground)' }} className="text-3xl sm:text-4xl font-bold mb-4">
            Start a conversation
          </h2>
          <p style={{ color: 'var(--muted-foreground)' }} className="text-lg max-w-2xl mx-auto">
            Tell us about your project. We&apos;ll respond within 1 business day.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <form onSubmit={handleSubmit} className="space-y-6 rounded-3xl border border-[var(--border)] bg-[var(--background)] p-8">
            {submitted ? (
              <div className="rounded-3xl bg-emerald-100 p-6 text-center">
                <p className="text-lg font-semibold text-emerald-900">Thanks! We&apos;ll be in touch within one business day.</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 gap-6">
                  <label className="space-y-2 text-sm font-medium text-slate-900">
                    <span>Full name</span>
                    <input
                      value={formState.name}
                      onChange={(event) => handleChange('name', event.target.value)}
                      required
                      className="w-full rounded-2xl border border-[var(--border)] bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-slate-400"
                    />
                  </label>

                  <label className="space-y-2 text-sm font-medium text-slate-900">
                    <span>Work email</span>
                    <input
                      type="email"
                      value={formState.email}
                      onChange={(event) => handleChange('email', event.target.value)}
                      required
                      className="w-full rounded-2xl border border-[var(--border)] bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-slate-400"
                    />
                  </label>

                  <label className="space-y-2 text-sm font-medium text-slate-900">
                    <span>Company name</span>
                    <input
                      value={formState.company}
                      onChange={(event) => handleChange('company', event.target.value)}
                      required
                      className="w-full rounded-2xl border border-[var(--border)] bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-slate-400"
                    />
                  </label>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  <label className="space-y-2 text-sm font-medium text-slate-900">
                    <span>Company size</span>
                    <select
                      value={formState.companySize}
                      onChange={(event) => handleChange('companySize', event.target.value)}
                      className="w-full rounded-2xl border border-[var(--border)] bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-slate-400"
                    >
                      <option>50–200</option>
                      <option>200–500</option>
                      <option>500–2000</option>
                      <option>2000+</option>
                    </select>
                  </label>

                  <label className="space-y-2 text-sm font-medium text-slate-900">
                    <span>Service interested in</span>
                    <select
                      value={formState.service}
                      onChange={(event) => handleChange('service', event.target.value)}
                      className="w-full rounded-2xl border border-[var(--border)] bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-slate-400"
                    >
                      {servicesOptions.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </label>

                  <label className="space-y-2 text-sm font-medium text-slate-900">
                    <span>Tell us about your project</span>
                    <textarea
                      rows={4}
                      value={formState.message}
                      onChange={(event) => handleChange('message', event.target.value)}
                      required
                      className="w-full rounded-2xl border border-[var(--border)] bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-slate-400"
                    />
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-2xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
                >
                  Send message →
                </button>
              </>
            )}
          </form>

          <div className="rounded-3xl border border-[var(--border)] bg-[var(--background)] p-8 flex flex-col justify-between gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Cloud size={20} className="text-[var(--accent)]" />
                <div>
                  <p style={{ color: 'var(--foreground)' }} className="font-semibold">hello@keytrain.io</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock4 size={20} className="text-[var(--accent)]" />
                <div>
                  <p style={{ color: 'var(--foreground)' }} className="font-semibold">Response within 1 business day</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CircleCheck size={20} className="text-[var(--accent)]" />
                <div>
                  <p style={{ color: 'var(--foreground)' }} className="font-semibold">Free 30-min discovery call included</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Globe2 size={20} className="text-[var(--accent)]" />
                <div>
                  <p style={{ color: 'var(--foreground)' }} className="font-semibold">US & Europe timezone coverage</p>
                </div>
              </div>
            </div>

            <div>
              <div style={{ borderTopColor: 'var(--border)' }} className="border-t pt-6">
                <p style={{ color: 'var(--muted-foreground)' }} className="text-sm mb-4">
                  Or book directly:
                </p>
                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-2xl border border-slate-300 px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100 transition-colors"
                >
                  Schedule on Calendly →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

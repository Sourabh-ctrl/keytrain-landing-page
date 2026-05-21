'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Linkedin, Github, ExternalLink } from 'lucide-react'
import { ScheduleModal } from '@/components/schedule-modal'
import { FadeInUp } from '@/lib/animations'

export function CTABanner() {
  return (
    <section className="section-wrapper bg-foreground text-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container-md relative z-10">
        <FadeInUp className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Build Something{' '}
            <span className="text-accent">That Scales?</span>
          </h2>
          <p className="text-lg text-background/70 max-w-2xl mx-auto mb-8">
            Let&apos;s discuss your infrastructure, your team, and where you want to be.
            Start with a free 30-minute consultation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <ScheduleModal label="Schedule a Call" />
            <Link 
              href="/case-studies" 
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-background/20 text-background font-semibold hover:bg-background/10 transition-colors"
            >
              View Case Studies
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </FadeInUp>
      </div>
    </section>
  )
}

const footerLinks = {
  services: [
    { label: 'IT Consulting', href: '/services/it-consulting' },
    { label: 'Software Development', href: '/services/saas-development' },
    { label: 'AI/ML Integration', href: '/services/custom-ai-solutions' },
    { label: 'DevOps & Automation', href: '/services/devops' },
    { label: 'Cloud Solutions', href: '/services/cloud-solutions' },
  ],
  company: [
    { label: 'About', href: '/#about' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Contact', href: '/#contact' },
  ],
  social: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com', icon: Linkedin },
    { label: 'GitHub', href: 'https://www.github.com', icon: Github },
  ],
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background">
      <div className="container-lg section-wrapper-sm">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link 
              href="/" 
              className="inline-block text-2xl font-bold mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Keytrain
            </Link>
            <p className="text-sm text-background/60 mb-6 max-w-xs">
              Intelligent systems. Real outcomes. Trusted by startups and mid-market companies.
            </p>
            <div className="flex gap-3">
              {footerLinks.social.map((link) => {
                const Icon = link.icon
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center text-background/60 hover:text-background hover:bg-background/20 transition-colors"
                    aria-label={link.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                )
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-background">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-sm text-background/60 hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-background">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-sm text-background/60 hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-background">Contact</h4>
            <div className="space-y-3">
              <a 
                href="mailto:hello@keytrain.io"
                className="block text-sm text-background/60 hover:text-background transition-colors"
              >
                hello@keytrain.io
              </a>
              <p className="text-sm text-background/60">
                Response within 24 hours
              </p>
              <p className="text-sm text-background/60">
                Serving US, Europe & India
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-background/50">
              {currentYear} Keytrain. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a 
                href="https://www.clutch.co" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-background/50 hover:text-background transition-colors"
              >
                View on Clutch
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

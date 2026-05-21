'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Zap, Shield, Globe } from 'lucide-react'
import { ScheduleModal } from '@/components/schedule-modal'
import Link from 'next/link'

const stats = [
  { value: '7+', label: 'Years Experience' },
  { value: '50+', label: 'Projects Delivered' },
  { value: '95%', label: 'Client Satisfaction' },
]

const technologies = ['AWS', 'GCP', 'Azure', 'React', 'Node.js', 'Python', 'Docker', 'Kubernetes']

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container-lg relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <span className="badge-accent">
                <Zap className="w-3 h-3" />
                Trusted by startups & enterprises
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-foreground mb-6"
            >
              AI, Software & IT Solutions{' '}
              <span className="gradient-text">That Actually Scale</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-8"
            >
              We help startups and mid-market companies build scalable software, AI systems, 
              and digital infrastructure — faster, smarter, and production-ready.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <ScheduleModal label="Book Free Consultation" />
              <Link 
                href="/case-studies" 
                className="btn-secondary group"
              >
                View Case Studies
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-accent" />
                <span>SOC 2 Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-accent" />
                <span>Serving US, Europe & India</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-accent" />
                <span>24hr Response Time</span>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Stats Card */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative"
            >
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-accent/10 rounded-3xl blur-2xl" />
              
              <div className="relative card-glass">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Why Engineering Leaders Choose Us
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Senior-led teams delivering production-grade solutions
                  </p>
                </div>

                <div className="space-y-4 mb-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                      className="flex items-center justify-between py-3 border-b border-border last:border-0"
                    >
                      <span className="text-sm text-muted-foreground">{stat.label}</span>
                      <span className="stat-value text-2xl">{stat.value}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground mb-3">Industries we serve</p>
                  <div className="flex flex-wrap gap-2">
                    {['Fintech', 'Healthcare', 'SaaS', 'Logistics'].map((industry) => (
                      <span key={industry} className="badge text-xs">
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Tech Stack Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 pt-8 border-t border-border"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4 text-center">
            Technologies we work with
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-secondary text-sm font-medium text-secondary-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

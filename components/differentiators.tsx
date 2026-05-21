'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Clock, Users, Zap, Layers, Globe, ArrowRight } from 'lucide-react'
import { FadeInUp, StaggerContainer, StaggerItem } from '@/lib/animations'

const differentiators = [
  { 
    icon: CheckCircle, 
    title: 'Senior Engineering Expertise', 
    description: 'Every engagement is led by senior engineers with 10+ years of experience building production systems at scale.' 
  },
  { 
    icon: Zap, 
    title: 'AI-First Development', 
    description: 'We prioritize AI and automation that creates measurable business value, not just technical novelty.' 
  },
  { 
    icon: Clock, 
    title: 'Fast Delivery Cycles', 
    description: 'Short sprints, frequent demos, and continuous deployment keep momentum high and risks low.' 
  },
  { 
    icon: Layers, 
    title: 'Startup Speed + Enterprise Quality', 
    description: 'Move fast without breaking things. We balance velocity with reliability and security.' 
  },
  { 
    icon: Users, 
    title: 'Transparent Communication', 
    description: 'Weekly updates, direct access to engineers, and clear reporting — no black boxes.' 
  },
  { 
    icon: Globe, 
    title: 'Long-term Partnership', 
    description: 'We build maintainable systems and stay engaged for ongoing growth and optimization.' 
  },
]

const processSteps = [
  { 
    step: '01', 
    title: 'Discovery Call', 
    description: 'Align on goals, scope, and success metrics in a 30-minute intro call.',
    duration: 'Day 1'
  },
  { 
    step: '02', 
    title: 'Technical Planning', 
    description: 'Architecture design, milestone definition, and detailed proposal.',
    duration: 'Week 1'
  },
  { 
    step: '03', 
    title: 'Development Sprint', 
    description: 'Iterative delivery with weekly demos and continuous feedback.',
    duration: 'Weeks 2-8'
  },
  { 
    step: '04', 
    title: 'QA & Testing', 
    description: 'Automated and manual validation for production reliability.',
    duration: 'Ongoing'
  },
  { 
    step: '05', 
    title: 'Launch', 
    description: 'Production deployment with monitoring and rollback plans.',
    duration: 'Week 8+'
  },
  { 
    step: '06', 
    title: 'Ongoing Support', 
    description: 'SLA-backed support, maintenance, and continuous improvements.',
    duration: 'Post-launch'
  },
]

export function Differentiators() {
  return (
    <section id="why-choose-us" className="section-wrapper bg-secondary/30">
      <div className="container-lg">
        {/* Section Header */}
        <FadeInUp className="text-center mb-12 sm:mb-16">
          <p className="section-label">Why Choose Us</p>
          <h2 className="section-title">Built Different</h2>
          <p className="section-description">
            We combine startup agility with enterprise-grade engineering practices.
          </p>
        </FadeInUp>

        {/* Differentiators Grid */}
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {differentiators.map((item) => {
            const Icon = item.icon
            return (
              <StaggerItem key={item.title}>
                <div className="card-elevated h-full">
                  <div className="icon-box mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}

export function HowItWorks() {
  return (
    <section id="process" className="section-wrapper bg-background">
      <div className="container-lg">
        {/* Section Header */}
        <FadeInUp className="text-center mb-12 sm:mb-16">
          <p className="section-label">Our Process</p>
          <h2 className="section-title">How We Work</h2>
          <p className="section-description">
            A proven methodology that reduces risk and accelerates time-to-value.
          </p>
        </FadeInUp>

        {/* Process Timeline */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-4">
            {processSteps.map((item, index) => (
              <StaggerItem key={item.step}>
                <motion.div 
                  className="relative text-center lg:text-left"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Step Number */}
                  <div className="relative z-10 mx-auto lg:mx-0 w-12 h-12 rounded-2xl bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold mb-4 shadow-lg shadow-accent/20">
                    {item.step}
                  </div>
                  
                  {/* Arrow - Desktop only */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-5 left-14 text-muted-foreground">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  )}
                  
                  <h3 className="text-base font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2 leading-relaxed">
                    {item.description}
                  </p>
                  <p className="text-xs font-medium text-accent">
                    {item.duration}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}

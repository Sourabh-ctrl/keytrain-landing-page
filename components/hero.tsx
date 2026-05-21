'use client'

import { useEffect, useRef } from 'react'
import { ScheduleModal } from '@/components/schedule-modal'

export function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (titleRef.current) {
        const rect = titleRef.current.getBoundingClientRect()
        if (rect.top < window.innerHeight) {
          titleRef.current.classList.add('animate-fade-up')
        }
      }
      if (subtitleRef.current) {
        const rect = subtitleRef.current.getBoundingClientRect()
        if (rect.top < window.innerHeight) {
          subtitleRef.current.classList.add('animate-fade-up')
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Subtle animated background blobs */}
      <div className="absolute -left-16 -top-16 w-72 h-72 rounded-full bg-gradient-to-br from-blue-200 to-transparent opacity-30 animate-blob" />
      <div className="absolute right-0 top-24 w-56 h-56 rounded-full bg-gradient-to-br from-slate-200 to-transparent opacity-20 animate-blob animation-delay-2000" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-4 flex-wrap">
              <span className="text-sm text-muted">Trusted by startups & SMEs</span>
              <span className="h-6 w-px bg-[var(--border)]" />
              <span className="text-sm font-medium text-[var(--accent)]">Response within 24 hours</span>
              <span className="h-6 w-px bg-[var(--border)]" />
              <span className="text-sm">Serving US, Europe & India</span>
            </div>

            <h1 ref={titleRef} className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-[var(--foreground)]">
              AI, Software & IT Solutions That Actually Scale
            </h1>

            <p ref={subtitleRef} className="mt-6 text-lg text-[var(--muted-foreground)] max-w-2xl">
              We help startups and businesses build scalable software, AI systems, automation, and digital infrastructure — faster, smarter, and production-ready.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 items-start">
              <ScheduleModal label="Book Free Consultation" />
              <a href="/case-studies" className="inline-flex items-center justify-center rounded-2xl border border-[var(--border)] text-[var(--foreground)] px-6 py-3 font-semibold hover:bg-[var(--secondary)] transition-colors">View Case Studies</a>
            </div>

            <div className="mt-8 flex items-center gap-6 flex-wrap">
              <div className="text-sm text-[var(--muted-foreground)]">Industries: Fintech · Healthcare · Logistics · SaaS</div>
              <div className="h-6 w-px bg-[var(--border)]" />
              <div className="text-sm text-[var(--muted-foreground)]">Tech: React · Node · Python · AWS · Docker</div>
            </div>
          </div>

          {/* Right column: small trust card */}
          <div className="w-full lg:w-80">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-sm text-[var(--muted-foreground)]">Average response</div>
                  <div className="text-lg font-bold text-[var(--foreground)]"><span className="text-[var(--accent)]">24</span> hours</div>
                </div>
                <div className="text-xs text-[var(--muted-foreground)]">Serving US · Europe · India</div>
              </div>

              <div className="h-px bg-[var(--border)] my-4" />

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[var(--accent)] flex items-center justify-center text-white font-semibold">7+</div>
                  <div>
                    <div className="text-sm text-[var(--muted-foreground)]">Years experience</div>
                    <div className="text-sm font-semibold text-[var(--foreground)]">7+</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-900 font-semibold">50+</div>
                  <div>
                    <div className="text-sm text-[var(--muted-foreground)]">Projects</div>
                    <div className="text-sm font-semibold text-[var(--foreground)]">50+</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Minimal tech strip */}
        <div className="mt-10 overflow-x-auto">
          <div className="flex items-center gap-3 min-w-max py-2">
            {['AWS','GCP','Azure','React','Node.js','Python','Docker','Kubernetes'].map((t) => (
              <div key={t} className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-900 whitespace-nowrap">{t}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

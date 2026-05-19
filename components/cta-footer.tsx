'use client'

import { useEffect, useRef } from 'react'

export function CTABanner() {
  const bannerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (bannerRef.current) {
        const rect = bannerRef.current.getBoundingClientRect()
        if (rect.top < window.innerHeight) {
          bannerRef.current.classList.add('animate-fade-up')
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section style={{ backgroundColor: 'var(--primary)' }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div ref={bannerRef} className="max-w-4xl mx-auto text-center">
        <h2 style={{ color: 'var(--primary-foreground)' }} className="text-4xl sm:text-5xl font-bold mb-6">
          Ready to build something that scales?
        </h2>
        <p style={{ color: 'rgba(245, 245, 243, 0.8)' }} className="text-lg mb-8 max-w-2xl mx-auto">
          Let&apos;s talk about your infrastructure, your team, and where you want to be.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button style={{ backgroundColor: 'var(--accent)', color: 'var(--primary)' }} className="px-8 py-3 text-base font-medium hover:opacity-90 transition-opacity w-full sm:w-auto border border-current">
            Schedule a call
          </button>
          <button style={{ color: 'var(--primary-foreground)', borderColor: 'var(--primary-foreground)' }} className="px-8 py-3 text-base font-medium border hover:bg-white/10 transition-colors w-full sm:w-auto">
            View case studies
          </button>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer style={{ backgroundColor: 'var(--foreground)', color: 'var(--background)' }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <div className="text-2xl font-bold mb-4">Keytrain</div>
            <p style={{ color: 'rgba(245, 245, 243, 0.7)' }} className="text-sm mb-6">
              Intelligent systems. Real outcomes.
            </p>
            <div className="flex gap-4 text-sm">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(245, 245, 243, 0.7)' }} className="hover:opacity-100 transition-opacity">LinkedIn</a>
              <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(245, 245, 243, 0.7)' }} className="hover:opacity-100 transition-opacity">GitHub</a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" style={{ color: 'rgba(245, 245, 243, 0.7)' }} className="hover:opacity-100 transition-opacity">IT Consulting</a></li>
              <li><a href="#" style={{ color: 'rgba(245, 245, 243, 0.7)' }} className="hover:opacity-100 transition-opacity">Software Development</a></li>
              <li><a href="#" style={{ color: 'rgba(245, 245, 243, 0.7)' }} className="hover:opacity-100 transition-opacity">AI/ML Integration</a></li>
              <li><a href="#" style={{ color: 'rgba(245, 245, 243, 0.7)' }} className="hover:opacity-100 transition-opacity">DevOps & Automation</a></li>
              <li><a href="#" style={{ color: 'rgba(245, 245, 243, 0.7)' }} className="hover:opacity-100 transition-opacity">Cloud & Infrastructure</a></li>
              <li><a href="#" style={{ color: 'rgba(245, 245, 243, 0.7)' }} className="hover:opacity-100 transition-opacity">Data Engineering</a></li>
              <li><a href="#" style={{ color: 'rgba(245, 245, 243, 0.7)' }} className="hover:opacity-100 transition-opacity">Managed IT Services</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" style={{ color: 'rgba(245, 245, 243, 0.7)' }} className="hover:opacity-100 transition-opacity">About</a></li>
              <li><a href="#" style={{ color: 'rgba(245, 245, 243, 0.7)' }} className="hover:opacity-100 transition-opacity">Careers</a></li>
              <li><a href="#" style={{ color: 'rgba(245, 245, 243, 0.7)' }} className="hover:opacity-100 transition-opacity">Blog</a></li>
              <li><a href="#" style={{ color: 'rgba(245, 245, 243, 0.7)' }} className="hover:opacity-100 transition-opacity">Contact</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Contact</h4>
            <p style={{ color: 'rgba(245, 245, 243, 0.7)' }} className="text-sm mb-4">
              <a href="mailto:hello@keytrain.io" style={{ color: 'rgba(245, 245, 243, 0.7)' }} className="hover:opacity-100 transition-opacity">hello@keytrain.io</a>
            </p>
            <div className="flex gap-4 text-sm">
              <a href="#" style={{ color: 'rgba(245, 245, 243, 0.7)' }} className="hover:opacity-100 transition-opacity">LinkedIn</a>
              <a href="#" style={{ color: 'rgba(245, 245, 243, 0.7)' }} className="hover:opacity-100 transition-opacity">GitHub</a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTopColor: 'rgba(245, 245, 243, 0.2)' }} className="border-t pt-8">
          <p style={{ color: 'rgba(245, 245, 243, 0.7)' }} className="text-sm text-center">
            © 2025 Keytrain. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    const ids = ['hero', 'services', 'industries', 'why-choose-us', 'process', 'testimonials', 'faq', 'contact']
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id || null)
          }
        })
      },
      { root: null, rootMargin: '0px 0px -45% 0px', threshold: 0.1 },
    )

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const links = [
    { id: 'hero', label: 'Hero' },
    { id: 'services', label: 'Services' },
    { id: 'industries', label: 'Industries' },
    { id: 'why-choose-us', label: 'Why Choose Us' },
    { id: 'process', label: 'Process' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' },
  ]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (!element) return
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    window.history.replaceState(null, '', `/#${id}`)
    setIsOpen(false)
  }

  return (
    <nav style={{ backgroundColor: 'var(--background)', borderBottomColor: 'var(--border)' }} className="fixed top-0 left-0 right-0 z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold" style={{ color: 'var(--foreground)' }}>
              Keytrain
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.id}
                href={`/#${link.id}`}
                onClick={(event) => {
                  event.preventDefault()
                  scrollToSection(link.id)
                }}
                className={`text-sm hover:opacity-80 transition-opacity ${
                  activeId === link.id ? 'text-blue-600 font-semibold border-b-2 border-blue-500 pb-1' : 'text-sm font-medium'
                }`}
                style={{ color: 'var(--foreground)' }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href="/#contact"
              onClick={(event) => {
                event.preventDefault()
                scrollToSection('contact')
              }}
              className="hidden md:inline-flex rounded-2xl bg-[var(--accent)] px-6 py-2 text-sm font-medium text-[var(--accent-foreground)] hover:opacity-90 transition-opacity"
            >
              Get in touch
            </a>
            <button onClick={() => setIsOpen((s) => !s)} aria-label="Toggle menu" className="p-3 -mr-2 md:hidden">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            </button>
          </div>
        </div>

        {isOpen ? (
          <div className="md:hidden py-3 border-t border-[var(--border)]">
            <div className="flex flex-col gap-1">
              {links.map((link) => (
                <Link
                  key={link.id}
                  href={`/#${link.id}`}
                  onClick={(event) => {
                    event.preventDefault()
                    scrollToSection(link.id)
                  }}
                  className={`block px-3 py-3 rounded-md text-base ${activeId === link.id ? 'text-blue-600 font-semibold bg-slate-100' : 'font-medium'}`}
                  style={{ color: 'var(--foreground)' }}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="/#contact"
                onClick={(event) => {
                  event.preventDefault()
                  scrollToSection('contact')
                }}
                className="mt-2 inline-flex items-center justify-center rounded-xl bg-[var(--accent)] px-4 py-3 text-base font-semibold text-[var(--accent-foreground)]"
              >
                Get in touch
              </a>
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  )
}

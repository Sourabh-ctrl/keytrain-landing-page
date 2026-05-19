'use client'

import { useEffect, useState } from 'react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    const ids = ['services', 'how-it-works', 'results', 'about', 'testimonials']
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id || null)
          }
        })
      },
      { root: null, rootMargin: '0px 0px -45% 0px', threshold: 0 }
    )

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const links = [
    { id: 'services', label: 'Services' },
    { id: 'how-it-works', label: 'How We Work' },
    { id: 'results', label: 'Results' },
    { id: 'about', label: 'About' },
  ]

  return (
    <nav style={{ backgroundColor: 'var(--background)', borderBottomColor: 'var(--border)' }} className="fixed top-0 left-0 right-0 z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div style={{ color: 'var(--foreground)' }} className="text-2xl font-bold">Keytrain</div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setIsOpen(false)}
                className={`text-sm hover:opacity-80 transition-opacity ${activeId === link.id ? 'text-blue-600 font-semibold border-b-2 border-blue-500 pb-1' : 'text-sm font-medium'}`}
                style={{ color: 'var(--foreground)' }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <div className="flex items-center gap-4 md:hidden">
            <button onClick={() => setIsOpen((s) => !s)} aria-label="Toggle menu" className="p-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            </button>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <button style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-foreground)' }} className="px-6 py-2 text-sm font-medium hover:opacity-90 transition-opacity">
              Get in touch
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {isOpen ? (
          <div className="md:hidden py-2">
            <div className="flex flex-col gap-2">
              {links.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md ${activeId === link.id ? 'text-blue-600 font-semibold' : 'text-sm'}`}
                  style={{ color: 'var(--foreground)' }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  )
}

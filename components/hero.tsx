'use client'

import { useEffect, useRef } from 'react'

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
    <section style={{ backgroundColor: 'var(--background)' }} className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Geometric Grid Pattern Background */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(0deg, transparent 24%, var(--border) 25%, var(--border) 26%, transparent 27%, transparent 74%, var(--border) 75%, var(--border) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, var(--border) 25%, var(--border) 26%, transparent 27%, transparent 74%, var(--border) 75%, var(--border) 76%, transparent 77%, transparent)
          `,
          backgroundSize: '50px 50px'
        }}
      />
      
      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        {/* Main Headline */}
        <h1
          ref={titleRef}
          style={{ color: 'var(--foreground)' }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight"
        >
          Intelligent systems.<br /><span style={{ color: 'var(--accent)' }}>Real outcomes.</span>
        </h1>

        {/* Subheadline */}
        <p
          ref={subtitleRef}
          style={{ color: 'var(--muted-foreground)' }}
          className="text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          Since 2018, Keytrain has helped 50+ mid-market companies across the US and Europe modernize infrastructure, integrate AI, and ship better software — without the enterprise overhead.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
          <button style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-foreground)' }} className="px-8 py-3 text-base font-medium hover:opacity-90 transition-opacity w-full sm:w-auto border border-current">
            Start a project
          </button>
          <button style={{ color: 'var(--foreground)', borderColor: 'var(--border)' }} className="px-8 py-3 text-base font-medium border hover:bg-[var(--muted)] transition-colors w-full sm:w-auto">
            See our work
          </button>
        </div>

        {/* Trust Badge */}
        <div className="pt-8">
          <p style={{ color: 'var(--muted-foreground)' }} className="text-sm mb-4">Trusted by engineering and operations teams</p>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <div style={{ color: 'var(--foreground)' }} className="text-sm font-medium">TechCorp</div>
            <div style={{ backgroundColor: 'var(--border)' }} className="w-px h-6"></div>
            <div style={{ color: 'var(--foreground)' }} className="text-sm font-medium">GlobalBrand</div>
            <div style={{ backgroundColor: 'var(--border)' }} className="w-px h-6"></div>
            <div style={{ color: 'var(--foreground)' }} className="text-sm font-medium">FutureScale</div>
          </div>
        </div>
      </div>
    </section>
  )
}

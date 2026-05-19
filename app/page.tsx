import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { TrustBar, ServicesGrid } from '@/components/trust-services'
import { Differentiators, HowItWorks } from '@/components/differentiators'
import { Results, Testimonials } from '@/components/results-testimonials'
import { CTABanner, Footer } from '@/components/cta-footer'
import {
  TechStackStrip,
  IndustriesGrid,
  EngagementModels,
  MeetTheTeam,
  FAQSection,
  ContactFormSection,
} from '@/components/extra-sections'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <TechStackStrip />
      <IndustriesGrid />
      <Differentiators />
      <EngagementModels />
      <HowItWorks />
      <Results />
      <MeetTheTeam />
      <Testimonials />
      <FAQSection />
      <CTABanner />
      <ContactFormSection />
      <Footer />
    </main>
  )
}

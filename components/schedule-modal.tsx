'use client'

import { useState, FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from '@/components/ui/dialog'
import { Calendar } from '@/components/ui/calendar'
import { toast } from '@/hooks/use-toast'
import { ArrowRight, Calendar as CalendarIcon, Clock, Globe, CheckCircle } from 'lucide-react'

const timeOptions = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00']
const timezones = [
  { value: 'America/New_York', label: 'Eastern (ET)' },
  { value: 'America/Chicago', label: 'Central (CT)' },
  { value: 'America/Los_Angeles', label: 'Pacific (PT)' },
  { value: 'Europe/London', label: 'London (GMT)' },
  { value: 'Europe/Berlin', label: 'Berlin (CET)' },
  { value: 'Asia/Kolkata', label: 'India (IST)' },
]

export function ScheduleModal({ label = 'Schedule consultation' }: { label?: string }) {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL
  const [open, setOpen] = useState(false)
  const [step, setStep] = useState(1)
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
  const [time, setTime] = useState('')
  const [timezone, setTimezone] = useState(timezones[0].value)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [message, setMessage] = useState('')
  const [honeypot, setHoneypot] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  if (calendlyUrl) {
    return (
      <a
        href={calendlyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary group"
      >
        {label}
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
      </a>
    )
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!selectedDate || !time) return

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          company,
          date: selectedDate.toISOString().split('T')[0],
          time,
          timezone,
          message,
          honeypot,
        }),
      })

      const data = await response.json()
      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Unable to send booking request')
      }

      setSubmitted(true)
      toast({
        title: 'Request sent!',
        description: 'We received your preferred time and will confirm shortly.',
      })
    } catch (error) {
      toast({
        title: 'Unable to send request',
        description: error instanceof Error ? error.message : 'Please try again.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setStep(1)
    setSelectedDate(undefined)
    setTime('')
    setName('')
    setEmail('')
    setCompany('')
    setMessage('')
    setSubmitted(false)
  }

  const canProceedStep1 = selectedDate && time
  const canProceedStep2 = name && email && company

  return (
    <Dialog open={open} onOpenChange={(o) => { setOpen(o); if (!o) resetForm() }}>
      <DialogTrigger asChild>
        <button className="btn-primary group">
          {label}
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
        </button>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-xl p-0 gap-0 overflow-hidden">
        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="p-8 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Request Received!
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                We&apos;ll confirm your consultation within 24 hours.
              </p>
              <DialogClose asChild>
                <button className="btn-secondary">Close</button>
              </DialogClose>
            </motion.div>
          ) : (
            <motion.form
              key={`step-${step}`}
              initial={{ opacity: 0, x: step === 1 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: step === 1 ? 20 : -20 }}
              onSubmit={handleSubmit}
            >
              <DialogHeader className="p-6 pb-0">
                <DialogTitle className="text-xl">Book a 30-minute consultation</DialogTitle>
                <DialogDescription>
                  {step === 1 ? 'Select your preferred date and time' : 'Tell us about yourself'}
                </DialogDescription>
              </DialogHeader>

              {/* Progress */}
              <div className="px-6 py-4">
                <div className="flex gap-2">
                  <div className={`h-1 flex-1 rounded-full ${step >= 1 ? 'bg-accent' : 'bg-secondary'}`} />
                  <div className={`h-1 flex-1 rounded-full ${step >= 2 ? 'bg-accent' : 'bg-secondary'}`} />
                </div>
              </div>

              {/* Honeypot */}
              <label className="hidden" aria-hidden="true">
                <input value={honeypot} onChange={(e) => setHoneypot(e.target.value)} tabIndex={-1} autoComplete="off" />
              </label>

              <div className="px-6 pb-6">
                {step === 1 && (
                  <div className="space-y-6">
                    {/* Date Selection */}
                    <div>
                      <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-3">
                        <CalendarIcon className="w-4 h-4 text-muted-foreground" />
                        Select Date
                      </label>
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 6}
                        className="rounded-xl border border-border p-3"
                      />
                    </div>

                    {/* Time Selection */}
                    <div>
                      <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-3">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        Select Time
                      </label>
                      <div className="grid grid-cols-4 gap-2">
                        {timeOptions.map((t) => (
                          <button
                            key={t}
                            type="button"
                            onClick={() => setTime(t)}
                            className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                              time === t
                                ? 'bg-accent text-accent-foreground'
                                : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Timezone */}
                    <div>
                      <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-3">
                        <Globe className="w-4 h-4 text-muted-foreground" />
                        Timezone
                      </label>
                      <select
                        value={timezone}
                        onChange={(e) => setTimezone(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:border-accent focus:ring-1 focus:ring-accent outline-none"
                      >
                        {timezones.map((tz) => (
                          <option key={tz.value} value={tz.value}>{tz.label}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:border-accent focus:ring-1 focus:ring-accent outline-none"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:border-accent focus:ring-1 focus:ring-accent outline-none"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Company</label>
                      <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:border-accent focus:ring-1 focus:ring-accent outline-none"
                        placeholder="Acme Inc."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        What would you like to discuss?
                      </label>
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={3}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:border-accent focus:ring-1 focus:ring-accent outline-none resize-none"
                        placeholder="Tell us about your project, challenges, and goals..."
                      />
                    </div>
                  </div>
                )}
              </div>

              <DialogFooter className="p-6 pt-0 gap-3">
                {step === 2 && (
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="btn-secondary"
                  >
                    Back
                  </button>
                )}
                <DialogClose asChild>
                  <button type="button" className="btn-ghost">Cancel</button>
                </DialogClose>
                
                {step === 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    disabled={!canProceedStep1}
                    className="btn-primary disabled:opacity-50"
                  >
                    Continue
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting || !canProceedStep2}
                    className="btn-primary disabled:opacity-50"
                  >
                    {isSubmitting ? 'Sending...' : 'Submit Request'}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </DialogFooter>
            </motion.form>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  )
}

'use client'

import { useState, FormEvent } from 'react'
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from '@/components/ui/dialog'
import { Calendar } from '@/components/ui/calendar'
import { toast } from '@/hooks/use-toast'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'

const timeOptions = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00']
const timezones = ['UTC', 'America/New_York', 'America/Chicago', 'Europe/London', 'Europe/Berlin', 'Asia/Kolkata']

export function ScheduleModal({ label = 'Schedule consultation' }: { label?: string }) {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [time, setTime] = useState(timeOptions[0])
  const [timezone, setTimezone] = useState(timezones[0])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [message, setMessage] = useState('')
  const [honeypot, setHoneypot] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  if (calendlyUrl) {
    return (
      <a
        href={calendlyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex w-full max-w-full items-center justify-center rounded-2xl bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-[var(--accent-foreground)] hover:opacity-90 transition-opacity sm:w-auto"
      >
        {label}
      </a>
    )
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!selectedDate) return

    setIsSubmitting(true)

    const payload = {
      name,
      email,
      company,
      date: selectedDate.toISOString().split('T')[0],
      time,
      timezone,
      message,
      honeypot,
    }

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const data = await response.json()
      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Unable to send booking request')
      }

      toast({
        title: 'Booking request sent',
        description: 'We received your preferred date and will reach out to confirm.',
      })
      setName('')
      setEmail('')
      setCompany('')
      setMessage('')
      setHoneypot('')
    } catch (error) {
      toast({
        title: 'Unable to send request',
        description: error instanceof Error ? error.message : 'Please try again.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary" className="rounded-2xl px-6 py-3 text-sm font-semibold w-full sm:w-auto">
          {label}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Book a 30-minute consultation</DialogTitle>
          <DialogDescription>
            Pick a date, time, and tell us what you need. We'll follow up with a confirmed session.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <label className="hidden" aria-hidden="true">
            <span>Leave empty</span>
            <input value={honeypot} onChange={(event) => setHoneypot(event.target.value)} tabIndex={-1} autoComplete="off" />
          </label>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="space-y-2 text-sm font-medium text-[var(--foreground)]">
              <span>Name</span>
              <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
                className="w-full rounded-2xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm text-[var(--foreground)] outline-none focus:border-slate-400"
              />
            </label>
            <label className="space-y-2 text-sm font-medium text-[var(--foreground)]">
              <span>Email</span>
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                className="w-full rounded-2xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm text-[var(--foreground)] outline-none focus:border-slate-400"
              />
            </label>
          </div>

          <label className="space-y-2 text-sm font-medium text-[var(--foreground)]">
            <span>Company</span>
            <input
              type="text"
              value={company}
              onChange={(event) => setCompany(event.target.value)}
              required
              className="w-full rounded-2xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm text-[var(--foreground)] outline-none focus:border-slate-400"
            />
          </label>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <label className="space-y-2 text-sm font-medium text-[var(--foreground)]">
              <span>Date</span>
              <Calendar mode="single" selected={selectedDate} onSelect={setSelectedDate} className="w-full" />
            </label>
            <label className="space-y-2 text-sm font-medium text-[var(--foreground)]">
              <span>Time</span>
              <select
                value={time}
                onChange={(event) => setTime(event.target.value)}
                className="w-full rounded-2xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm text-[var(--foreground)] outline-none focus:border-slate-400"
              >
                {timeOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </label>
            <label className="space-y-2 text-sm font-medium text-[var(--foreground)]">
              <span>Timezone</span>
              <select
                value={timezone}
                onChange={(event) => setTimezone(event.target.value)}
                className="w-full rounded-2xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm text-[var(--foreground)] outline-none focus:border-slate-400"
              >
                {timezones.map((zone) => (
                  <option key={zone} value={zone}>{zone}</option>
                ))}
              </select>
            </label>
          </div>

          <label className="space-y-2 text-sm font-medium text-[var(--foreground)]">
            <span>Tell us about your challenge</span>
            <textarea
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              required
              rows={4}
              className="w-full rounded-2xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm text-[var(--foreground)] outline-none focus:border-slate-400"
            />
          </label>

          <DialogFooter>
            <DialogClose asChild>
              <button type="button" className="rounded-2xl border border-[var(--border)] px-5 py-3 text-sm font-medium text-[var(--foreground)] hover:bg-[var(--secondary)] transition-colors">
                Cancel
              </button>
            </DialogClose>
            <Button type="submit" disabled={isSubmitting} className="rounded-2xl px-6 py-3 text-sm font-semibold">
              {isSubmitting ? 'Sending...' : 'Submit request'}
              <ChevronRight className="ml-2 size-4" />
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

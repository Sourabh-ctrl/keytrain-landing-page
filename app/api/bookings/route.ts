import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { Resend } from 'resend'
import { z } from 'zod'
import { appendFile, mkdir } from 'node:fs/promises'
import path from 'node:path'

const WINDOW_MS = 10 * 60 * 1000
const MAX_REQUESTS = 5
const requestLog = new Map<string, number[]>()

const bookingSchema = z.object({
  name: z.string().trim().min(2),
  email: z.string().trim().email(),
  company: z.string().trim().min(2),
  date: z.string().trim().min(5),
  time: z.string().trim().min(3),
  timezone: z.string().trim().min(3),
  message: z.string().trim().min(10),
  honeypot: z.string().optional().default(''),
})

const hasSmtpConfig = Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS)
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

const transporter = hasSmtpConfig
  ? nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })
  : null

const recipient = process.env.CONTACT_EMAIL ?? 'hello@keytrain.io'
const fromAddress = process.env.FROM_EMAIL ?? 'Keytrain <noreply@keytrain.io>'

function getClientIp(request: NextRequest) {
  const forwardedFor = request.headers.get('x-forwarded-for')
  if (forwardedFor) return forwardedFor.split(',')[0].trim()
  return 'unknown'
}

function isRateLimited(ip: string) {
  const now = Date.now()
  const requests = requestLog.get(ip) ?? []
  const recent = requests.filter((time) => now - time < WINDOW_MS)
  if (recent.length >= MAX_REQUESTS) return true
  recent.push(now)
  requestLog.set(ip, recent)
  return false
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

async function persistBooking(payload: z.infer<typeof bookingSchema>) {
  const dataDir = path.join(process.cwd(), 'data')
  await mkdir(dataDir, { recursive: true })
  const record = {
    ...payload,
    createdAt: new Date().toISOString(),
  }
  await appendFile(path.join(dataDir, 'bookings.jsonl'), `${JSON.stringify(record)}\n`, 'utf8')
}

async function sendEmail(subject: string, html: string, replyTo: string, to: string) {
  if (resend) {
    await resend.emails.send({
      from: fromAddress,
      to,
      replyTo,
      subject,
      html,
    })
    return
  }

  if (transporter) {
    await transporter.sendMail({
      from: fromAddress,
      to,
      replyTo,
      subject,
      html,
    })
    return
  }

  console.warn('No email provider configured, logging booking payload.')
  console.log({ subject, to })
}

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request)
    if (isRateLimited(ip)) {
      return NextResponse.json({ success: false, message: 'Too many requests. Please try again later.' }, { status: 429 })
    }

    const rawBody = await request.json()
    const payload = bookingSchema.parse(rawBody)

    if (payload.honeypot) {
      return NextResponse.json({ success: true })
    }

    await persistBooking(payload)

    const html = `
      <div style="font-family:Arial,sans-serif;padding:24px;background:#f5f5f3;color:#0A0E1A;">
        <h1 style="margin-bottom:16px;">New consultation request</h1>
        <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
        <p><strong>Company:</strong> ${escapeHtml(payload.company)}</p>
        <p><strong>Preferred date:</strong> ${escapeHtml(payload.date)}</p>
        <p><strong>Preferred time:</strong> ${escapeHtml(payload.time)} (${escapeHtml(payload.timezone)})</p>
        <p><strong>Notes:</strong><br/>${escapeHtml(payload.message)}</p>
      </div>`

    await sendEmail(`Booking request from ${payload.name}`, html, payload.email, recipient)

    return NextResponse.json({ success: true })
  } catch (error) {
    const message = error instanceof z.ZodError ? error.errors.map((item) => item.message).join(', ') : 'Unable to submit booking request.'
    return NextResponse.json({ success: false, message }, { status: 400 })
  }
}

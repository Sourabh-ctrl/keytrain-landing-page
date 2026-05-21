import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { Resend } from 'resend'
import { z } from 'zod'
import { appendFile, mkdir } from 'node:fs/promises'
import path from 'node:path'

const WINDOW_MS = 10 * 60 * 1000
const MAX_REQUESTS = 5
const requestLog = new Map<string, number[]>()

const contactSchema = z.object({
  name: z.string().trim().min(2),
  email: z.string().trim().email(),
  company: z.string().trim().min(2).optional().default('Not provided'),
  service: z.string().trim().min(2).optional().default('General Inquiry'),
  budget: z.string().trim().min(1).optional(),
  projectBudget: z.string().trim().min(1).optional(),
  timeline: z.string().trim().min(1).optional().default('Not specified'),
  message: z.string().trim().min(20),
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

async function persistInquiry(payload: z.infer<typeof contactSchema>) {
  const dataDir = path.join(process.cwd(), 'data')
  await mkdir(dataDir, { recursive: true })
  const record = {
    ...payload,
    createdAt: new Date().toISOString(),
  }
  await appendFile(path.join(dataDir, 'inquiries.jsonl'), `${JSON.stringify(record)}\n`, 'utf8')
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

  console.warn('No email provider configured, logging email payload.')
  console.log({ subject, to })
}

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request)
    if (isRateLimited(ip)) {
      return NextResponse.json({ success: false, message: 'Too many requests. Please try again later.' }, { status: 429 })
    }

    const rawBody = await request.json()
    const payload = contactSchema.parse(rawBody)

    if (payload.honeypot) {
      return NextResponse.json({ success: true })
    }

    await persistInquiry(payload)

    const budgetValue = payload.budget ?? payload.projectBudget ?? 'Not specified'

    const html = `
      <div style="font-family:Arial,sans-serif;padding:24px;background:#f5f5f3;color:#0A0E1A;">
        <h1 style="margin-bottom:16px;">New Keytrain inquiry</h1>
        <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
        <p><strong>Company:</strong> ${escapeHtml(payload.company)}</p>
        <p><strong>Service:</strong> ${escapeHtml(payload.service)}</p>
        <p><strong>Budget:</strong> ${escapeHtml(budgetValue)}</p>
        <p><strong>Timeline:</strong> ${escapeHtml(payload.timeline)}</p>
        <p><strong>Message:</strong><br/>${escapeHtml(payload.message)}</p>
      </div>`

    const autoReplyHtml = `
      <div style="font-family:Arial,sans-serif;padding:24px;background:#f5f5f3;color:#0A0E1A;">
        <h1 style="margin-bottom:16px;">Thank you for contacting Keytrain</h1>
        <p>Hi ${escapeHtml(payload.name)},</p>
        <p>We received your inquiry and our team will respond within 24 business hours.</p>
        <p>In the meantime, you can reply to this email with any additional context.</p>
        <p style="margin-top:20px;">- Keytrain Team</p>
      </div>`

    await sendEmail(`New contact request from ${payload.name}`, html, payload.email, recipient)
    await sendEmail('Thank you for contacting Keytrain', autoReplyHtml, recipient, payload.email)

    return NextResponse.json({ success: true })
  } catch (error) {
    const message = error instanceof z.ZodError ? error.errors.map((item) => item.message).join(', ') : 'Unable to submit contact form.'
    return NextResponse.json({ success: false, message }, { status: 400 })
  }
}

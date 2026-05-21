# Deployment Guide - Keytrain Landing Page

## Quick Start

### Local Development
```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build
pnpm start
```

Navigate to `http://localhost:3000`

## Email Setup (Required for Forms)

### Option 1: Gmail + App Password (Easiest for Testing)
1. Enable 2-Factor Authentication on Gmail
2. Generate App Password: https://myaccount.google.com/apppasswords
3. Create `.env.local`:
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_SECURE=false
CONTACT_EMAIL=hello@keytrain.io
FROM_EMAIL=Keytrain <noreply@keytrain.io>
```

### Option 2: SendGrid (Recommended for Production)
1. Create SendGrid account
2. Generate API key
3. Use SendGrid SMTP credentials:
```
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASS=SG.your-api-key-here
SMTP_SECURE=false
```

### Option 3: Mailgun
```
SMTP_HOST=smtp.mailgun.org
SMTP_PORT=587
SMTP_USER=postmaster@yourdomain.mailgun.org
SMTP_PASS=your-password
SMTP_SECURE=false
```

### Option 4: Resend (For Vercel)
If deploying on Vercel, use Resend for best experience:
1. Create Resend account
2. Alternative: Add to `app/api/contact/route.ts` (see commented code)

## Deployment to Vercel (Recommended)

### 1. Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/keytrain-landing-page
git push -u origin main
```

### 2. Deploy on Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Select your GitHub repository
4. Add Environment Variables:
   - `SMTP_HOST`
   - `SMTP_PORT`
   - `SMTP_USER`
   - `SMTP_PASS`
   - `SMTP_SECURE`
   - `CONTACT_EMAIL`
   - `FROM_EMAIL`
5. Click "Deploy"

That's it! Your site is live.

## Deployment to Other Platforms

### Netlify
1. Connect GitHub repo to Netlify
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Add environment variables in Site Settings > Build & Deploy
5. Deploy

### Railway or Render
1. Connect GitHub repo
2. Add Dockerfile (or use auto-detection)
3. Configure environment variables
4. Deploy

## Post-Deployment Checklist

- [ ] Test contact form submission
- [ ] Verify emails are received
- [ ] Check all navigation links
- [ ] Test mobile responsiveness
- [ ] Verify service detail pages load
- [ ] Verify case study pages load
- [ ] Test booking modal date picker
- [ ] Check 404 page
- [ ] Monitor Vercel Analytics

## Custom Domain

### On Vercel
1. Go to Project Settings > Domains
2. Add your domain
3. Update DNS records:
   ```
   CNAME: cname.vercel-dns.com
   ```

### On Other Platforms
Follow platform-specific DNS setup instructions.

## Monitoring & Analytics

### Already Integrated
- Vercel Analytics (automatically tracks page views, web vitals)

### Recommended Additions
- **Error Tracking**: Add Sentry for error monitoring
- **Email Tracking**: SendGrid/Mailgun dashboards track delivery
- **Lead Tracking**: Implement Zapier integration to Airtable/Google Sheets

## Security Best Practices

✅ Done:
- Environment variables for secrets
- Zod validation on all forms
- Email validation

🔄 Consider Adding:
- Rate limiting on API routes (install `ratelimit` package)
- CAPTCHA on forms (Vercel has turnstile support)
- CSP headers in next.config.js

## Troubleshooting

### Forms not sending emails
1. Check environment variables are set
2. Verify SMTP credentials are correct
3. Check email spam folder
4. Review server logs: `npm run build` then `npm start`

### 404 errors on deployed version
1. Ensure build completed successfully
2. Clear Vercel cache and redeploy
3. Check dynamic routes are working

### Styling issues
1. Clear browser cache
2. Rebuild: `npm run build`

## Performance

Current metrics (from `npm run build`):
- ✓ Zero compilation errors
- ✓ 28 pages pre-generated
- ✓ 18 service pages (SSG)
- ✓ 3 case study pages (SSG)
- ✓ API routes optimized for serverless

## Support

For questions or issues:
1. Check `IMPLEMENTATION.md` for feature overview
2. Review `.env.example` for configuration
3. Check Next.js docs: https://nextjs.org/docs

Happy deploying! 🚀

# Architecture (Static v1) — Hemangini Nursing College

**Decision:** v1 is a fully **static website**. No backend, no database, no CMS. Backend/dynamic features are planned for v2 (see §9). This file replaces `02_ARCHITECTURE.md` for v1.

---

## 1. Overview

```
Visitor ──HTTPS──► CDN (Netlify / Vercel / Cloudflare Pages)
                        │
                 Pre-built static HTML/CSS/JS
                        │
        ┌───────────────┼───────────────────┐
        ▼               ▼                   ▼
 Form service      Google Maps         GA4 (optional)
 (Web3Forms /      embed               analytics
  Formspree)
 → emails college
 WhatsApp / tel: links
```

Everything is generated at build time. Content (courses, notices, faculty, news) lives in code files; to change content, edit a file and redeploy (one git push).

---

## 2. Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14 (App Router) with **static export** (`output: 'export'`), TypeScript |
| Alternative | Plain HTML + Tailwind + vanilla JS (simplest, no build) |
| Styling | Tailwind CSS + CSS variables (tokens from `03_DESIGN.md`) |
| Animation | Framer Motion (light) |
| Forms | HTML form → Web3Forms/Formspree endpoint (emails the college); client validation with Zod/HTML5 |
| Spam | Honeypot field (+ Turnstile optional, free) |
| Content | Typed files in `/data` (JSON/TS) and `.mdx` for news |
| Search | Client-side (Fuse.js) — optional |
| Hosting | Netlify / Cloudflare Pages / Vercel / GitHub Pages (free tier OK) |
| Analytics | GA4 (optional) |

`next.config.js`:
```js
module.exports = { output: 'export', images: { unoptimized: true }, trailingSlash: true };
```

---

## 3. Folder Structure

```
hemangini-nursing-college/
├─ app/
│  ├─ page.tsx                     # Home
│  ├─ about/page.tsx
│  ├─ courses/page.tsx
│  ├─ courses/[slug]/page.tsx      # generateStaticParams from /data/courses
│  ├─ admissions/page.tsx          # process, eligibility, documents, fees, dates
│  ├─ facilities/page.tsx
│  ├─ faculty/page.tsx
│  ├─ gallery/page.tsx
│  ├─ placements/page.tsx
│  ├─ news/page.tsx
│  ├─ news/[slug]/page.tsx
│  ├─ notices/page.tsx
│  ├─ faqs/page.tsx
│  ├─ contact/page.tsx
│  ├─ legal/{privacy,terms,anti-ragging,disclosure}/page.tsx
│  ├─ sitemap.ts  robots.ts  layout.tsx  not-found.tsx
├─ components/ (layout, sections, ui, forms/EnquiryForm)
├─ data/
│  ├─ site.ts            # name, phone, email, address, socials, stats, admission year
│  ├─ courses.ts  faculty.ts  testimonials.ts  faqs.ts  partners.ts  notices.ts
│  └─ news/*.mdx
├─ public/
│  ├─ images/  icons/  logos/  og/
│  └─ downloads/ (prospectus.pdf, fee-structure.pdf, admission-form.pdf)
├─ styles/globals.css
└─ .env.example
```

---

## 4. Environment Variables (v1)

```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_GA_ID=                       # optional, G-XXXXXXXX
NEXT_PUBLIC_FORM_ACCESS_KEY=             # Web3Forms access key (public by design)
```
Optional: `NEXT_PUBLIC_TURNSTILE_SITE_KEY=`. No secrets are needed in v1. The Web3Forms key is meant to be public and is tied to the college's email in their dashboard.

---

## 5. Forms Without a Backend

- **Enquiry form** (name, phone, email, course, city, message): `fetch('https://api.web3forms.com/submit')` → college receives an email. Show inline success/error state.
- **Spam:** hidden honeypot input; block if filled.
- **Admission application (v1):** link to a downloadable PDF form **or** a Google Form embed/link. Online upload comes in v2.
- **Quick contact:** `tel:` link, `https://wa.me/91XXXXXXXXXX?text=...` WhatsApp link with prefilled message, `mailto:`.
- **Privacy:** consent checkbox + link to Privacy Policy on every form.

---

## 6. Rendering & Performance
- All pages pre-rendered at build; dynamic routes use `generateStaticParams`.
- Images: pre-compress to WebP/AVIF, explicit width/height, `loading="lazy"` except hero.
- Fonts: `next/font` (Outfit, Inter), `display: swap`.
- Budget: JS < 120 KB home, LCP < 2.5s, CLS < 0.1.
- Defer GA; no heavy third-party scripts.

## 7. SEO
Per-page metadata/OG, canonical, `sitemap.xml`, `robots.txt`, JSON-LD (`CollegeOrUniversity`, `Course`, `FAQPage`, `BreadcrumbList`, `LocalBusiness`), clean slugs, alt text, Google Business Profile + Search Console.

## 8. Security
HTTPS (auto on host), security headers (`_headers`/`netlify.toml`: CSP, X-Frame-Options, Referrer-Policy), no secrets in the repo, honeypot/Turnstile on forms, form service rate limiting. Being static, there's no server or database to attack.

## 9. Upgrade Path to Dynamic (v2)
| v1 (static) | v2 (dynamic) |
|---|---|
| `/data/*.ts` content | Sanity/Strapi CMS (`SANITY_*`) |
| Web3Forms email | API routes + Postgres/Supabase (`DATABASE_URL`, `SUPABASE_*`) |
| PDF / Google Form application | Multi-step online application + document upload |
| Email via form service | Resend/SMTP (`RESEND_API_KEY`, `ADMIN_NOTIFY_EMAIL`) |
| `output: 'export'` | Remove it → ISR/SSR on Vercel |
| Manual notice updates | Admin dashboard |

To make migration easy: keep all content behind functions like `getCourses()`, `getNotices()` in `/lib/content.ts`. Today they read `/data`; in v2 only those functions change, not the pages.

## 10. Content Updating (v1)
Edit the file in `/data` (or add an `.mdx` news post) → commit → host auto-deploys in ~1 minute. Notices: add an object to `notices.ts` and a PDF into `/public/downloads`. A short "how to update" README is included.

## 11. Testing & Deployment
Lighthouse ≥ 90, axe accessibility check, mobile device test, form test with real inbox, broken link check. Deploy: connect GitHub repo to Netlify/Vercel/Cloudflare Pages; set domain + HTTPS; add env vars.

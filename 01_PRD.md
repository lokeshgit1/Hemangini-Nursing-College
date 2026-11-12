# PRD — Hemangini Nursing College Website

**Version:** 1.0 | **Status:** Draft for approval
**Note:** Items in `[BRACKETS]` are placeholders. Replace with the college's verified facts (affiliations, fees, seats, address) before launch. Never publish unverified approval/affiliation claims.

---

## 1. Overview

### 1.1 Purpose
A standalone, professional, mobile-first website for **Hemangini Nursing College** that builds trust with students and parents, explains courses and admissions clearly, and converts visitors into enquiries and applications.

### 1.2 Reference
Visual rhythm inspired by the Careers Collectiv layout: soft gradient hero, stats strip, course card grid, "simple journey" steps, testimonials, partner logos, "why choose us", news, dark footer. Content, colours and imagery must be original and nursing/healthcare specific. No copying of text or assets.

### 1.3 Goals
| # | Goal | Metric |
|---|------|--------|
| G1 | Increase admission enquiries | ≥ 5% of visitors submit enquiry form / call / WhatsApp |
| G2 | Build trust | Affiliation, approvals, faculty, hospital tie-ups visible above the fold or within 1 scroll |
| G3 | Reduce phone load for FAQs | Clear fees, eligibility, dates, documents |
| G4 | Strong local SEO | Rank for "nursing college in [city]", "GNM / B.Sc Nursing in [city]" |
| G5 | Fast and accessible | Lighthouse ≥ 90 (Performance, SEO, Accessibility) |

### 1.4 Non-goals (v1)
Online payment of fees, full student ERP/LMS, multi-language CMS (planned v2: English + Hindi/Gujarati).

---

## 2. Target Users (Personas)

1. **Aspiring student (17–22)** — completed 12th (Science/PCB); browses on mobile; wants course, eligibility, fees, placement.
2. **Parent/guardian** — wants safety, hostel, recognition, hospital training, fees transparency.
3. **Working nurse / ANM / GNM holder** — wants Post Basic B.Sc / bridge options.
4. **Admin/Staff** — updates notices, admissions, gallery, results without a developer.

---

## 3. Scope: Pages & Features

### 3.1 Sitemap
- Home
- About (Overview, Vision & Mission, Chairman/Principal message, Affiliations & Approvals)
- Courses (listing) → Course detail pages (one per course)
- Admissions (process, eligibility, documents, fees, important dates, Apply Online)
- Facilities (Labs, Library, Hostel, Hospital/Clinical training, Transport, Cafeteria)
- Faculty
- Student Life & Gallery (photos/videos)
- Placements & Alumni
- News & Notices (blog + notice board + downloads)
- FAQs
- Contact (form, map, phone, WhatsApp)
- Legal: Privacy Policy, Terms, Anti-ragging notice, Mandatory public disclosure

### 3.2 Courses (editable; confirm with college)
- ANM (Auxiliary Nurse Midwifery) `[confirm]`
- GNM (General Nursing & Midwifery) `[confirm]`
- B.Sc Nursing `[confirm]`
- Post Basic B.Sc Nursing `[confirm]`
- M.Sc Nursing `[confirm]`

Each course page: duration, eligibility, seats, fees, syllabus summary, clinical training, career options, FAQs, "Apply Now" CTA.

### 3.3 Home page sections (top → bottom)
1. **Top bar:** phone, email, admission-open badge, notice ticker.
2. **Header/nav:** logo, Home, About, Courses, Admissions, Facilities, Gallery, News, Contact, primary CTA "Apply Now".
3. **Hero:** headline "Care. Learn. Lead." (or similar), subtext, CTAs (*Explore Courses*, *Book Campus Visit*), hero photo in diamond/rounded-shape mask, floating badges (e.g. "[X]+ Students", "[X]% Placement").
4. **Stats strip (4 cards):** Students enrolled, Years of excellence, Hospital tie-ups, Placement %.
5. **Approvals bar:** INC / State Nursing Council / University / State Govt logos `[verify]`.
6. **Courses grid (6 cards):** image, title, one-line description, "Learn More".
7. **Your Path to a Nursing Career (4 steps):** Enquire → Apply & Documents → Admission & Fees → Start Clinical Training.
8. **Why Choose Hemangini:** 6 icon points (experienced faculty, hospital training, hostel, labs, scholarship guidance, placement support).
9. **Facilities highlights:** carousel (labs, library, hostel, hospital).
10. **Testimonials:** 3 student/alumni cards with rating.
11. **Hospital & placement partners:** logo strip.
12. **News, notices & events:** 3 latest.
13. **CTA banner:** "Admissions Open [Year]" + enquiry mini-form.
14. **Footer (dark):** logo + tagline, quick links, courses, contact info, map link, social, copyright.

### 3.4 Functional requirements
| ID | Requirement | Priority |
|----|-------------|----------|
| F1 | Enquiry form (name, phone, email, course, city, message) with validation + spam protection | P0 |
| F2 | Online application form (multi-step: personal, academic, documents upload, declaration) | P0 |
| F3 | Email + dashboard notification on every submission; auto-reply to applicant | P0 |
| F4 | Floating WhatsApp & Call buttons (mobile) | P0 |
| F5 | Course listing with filter (Diploma / UG / PG) | P0 |
| F6 | Admin CMS: courses, notices, news, gallery, faculty, testimonials, FAQs, downloads | P0 |
| F7 | Downloadable prospectus, fee structure, admission form (PDF) | P1 |
| F8 | Notice board with date + category + attachment | P1 |
| F9 | Search (courses, news, notices) | P2 |
| F10 | Gallery with lightbox + YouTube embeds | P1 |
| F11 | Google Maps embed, "Get Directions" | P0 |
| F12 | Appointment/campus visit booking | P2 |
| F13 | Multi-language toggle | P3 (v2) |
| F14 | Cookie consent + privacy compliance | P1 |

### 3.5 Non-functional requirements
- **Performance:** LCP < 2.5s on 4G; images WebP/AVIF; lazy loading.
- **Responsive:** 360px → 1920px; mobile-first.
- **Accessibility:** WCAG 2.2 AA (contrast, keyboard, alt text, focus states).
- **SEO:** semantic HTML, meta/OG, JSON-LD (`CollegeOrUniversity`, `FAQPage`, `Course`), sitemap.xml, robots.txt.
- **Security:** HTTPS, CSRF, rate-limit forms, reCAPTCHA/Turnstile, file-upload validation (PDF/JPG ≤ 2MB), data stored securely.
- **Availability:** 99.9%; daily backups.
- **Privacy:** applicant data used only for admission; consent checkbox; deletion on request.

---

## 4. Content Requirements
Provided by college: logo, approvals/affiliation letters, course details & fees, faculty list, photos (campus, labs, hostel, students), testimonials with consent, hospital tie-ups, address/phone/email, social links, prospectus.
Writing tone: warm, trustworthy, clear, no exaggerated claims ("100% placement" only if provable).

---

## 5. Compliance & Trust
- Display approvals (INC / State Nursing Council / University) with registration numbers `[verify]`.
- Mandatory public disclosure page; anti-ragging statement/helpline.
- Fee structure transparent; no misleading guarantees.

---

## 6. Success Metrics & Analytics
GA4 events: `enquiry_submit`, `apply_start`, `apply_complete`, `whatsapp_click`, `call_click`, `prospectus_download`. Google Search Console, Meta Pixel (optional), heatmap (Clarity).

---

## 7. Milestones
| Phase | Deliverable | Duration |
|-------|-------------|----------|
| 0 | Content collection, approvals | 1 wk |
| 1 | UX wireframes + UI design | 1–2 wks |
| 2 | Frontend build (static pages) | 2 wks |
| 3 | CMS + forms + integrations | 2 wks |
| 4 | QA, SEO, accessibility, performance | 1 wk |
| 5 | Launch + training | 1 wk |

## 8. Risks
| Risk | Mitigation |
|------|-----------|
| Late/low-quality content | Content checklist, stock fallback, deadlines |
| Unverified claims | College sign-off on every claim |
| Spam enquiries | CAPTCHA + rate-limit |
| Slow media | Image pipeline, CDN |

## 9. Acceptance Criteria (launch)
All P0 features working; forms deliver to admin; Lighthouse ≥ 90; no console errors; all pages responsive; legal pages present; approvals content signed off.

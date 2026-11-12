# Design System — Hemangini Nursing College

## 1. Design Direction
**Feel:** Clean, caring, modern, trustworthy. Soft pastel gradients, rounded cards, generous whitespace, one bold accent for CTAs. Same layout rhythm as the reference (hero → stats → course cards → journey steps → testimonials → why choose → news → dark footer) but with a healthcare palette and original imagery.

**Principles:** 1) Clarity first, 2) Trust visible early, 3) One primary action per section, 4) Mobile-first, 5) Calm, not clinical.

---

## 2. Colour Tokens

```css
:root{
  /* Brand */
  --primary:        #0E8F8A;  /* medical teal – icons, links, borders */
  --primary-dark:   #0A6B67;
  --accent:         #E8348A;  /* magenta – primary CTA (as in reference) */
  --accent-dark:    #C42473;
  --navy:           #12263F;  /* footer, headings */

  /* Surfaces */
  --bg:             #FFFFFF;
  --bg-cream:       #FFF8F1;  /* soft warm section */
  --bg-mint:        #E8F7F8;  /* soft cyan section (course grid) */
  --bg-blush:       #FDEAF1;  /* soft pink */
  --bg-sun:         #FFF4D6;  /* soft yellow (step card 1) */
  --bg-grey:        #EEF0F3;  /* step card 2 */

  /* Text */
  --text:           #1B2A3B;
  --text-muted:     #5B6B7C;
  --border:         #E3E8EE;

  /* Feedback */
  --success:#1E9E5A; --warning:#F2A900; --error:#D93A3A; --star:#FFC21A;

  /* Gradients */
  --hero-gradient: linear-gradient(120deg,#FDE3EC 0%,#FFF1EA 40%,#DDF3F6 100%);
  --diamond-gradient: linear-gradient(135deg,#F6A5BE 0%,#8FD3DE 100%);
}
```
**Contrast:** body text on white ≥ 7:1; white on `--accent` ≥ 4.5:1 (use `--accent-dark` if needed); never rely on colour alone.

---

## 3. Typography
- **Headings:** *Outfit* (or Poppins) — 600/700
- **Body/UI:** *Inter* — 400/500/600
- Fallback: `system-ui, -apple-system, Segoe UI, Roboto, sans-serif`

| Token | Desktop | Mobile | Weight | Line-height |
|---|---|---|---|---|
| Display (hero H1) | 56px | 36px | 700 | 1.1 |
| H2 (section) | 40px | 28px | 600 | 1.2 |
| H3 (card title) | 20px | 18px | 600 | 1.3 |
| Eyebrow (small caps label) | 12px, letter-spacing .12em, uppercase, `--accent` | same | 600 | 1.2 |
| Body L | 18px | 16px | 400 | 1.6 |
| Body | 16px | 15px | 400 | 1.6 |
| Caption | 13px | 13px | 400 | 1.5 |

---

## 4. Spacing, Grid, Radius, Shadow
- **Spacing scale (px):** 4, 8, 12, 16, 24, 32, 48, 64, 96
- **Section padding:** 96px desktop / 56px mobile
- **Container:** max-width 1200px, 24px side padding (16px mobile)
- **Grid:** 12-col desktop, 4-col mobile; course grid 3 → 2 → 1 columns
- **Radius:** buttons 8px, cards 14px, images 12px, pills 999px
- **Shadows:** `card: 0 4px 20px rgba(18,38,63,.06)`, `hover: 0 10px 30px rgba(18,38,63,.12)`
- **Breakpoints:** 480 / 768 / 1024 / 1280

---

## 5. Components

### Buttons
- **Primary:** bg `--accent`, white text, 8px radius, 14×28 padding, hover `--accent-dark`, lift 1px.
- **Secondary:** white bg, 1px `--border`, text `--navy`, hover border `--primary`.
- **Link:** `--primary`, underlined with offset, arrow icon.
- Focus ring: 3px `rgba(14,143,138,.4)`.

### Header
Top bar (navy, small text: phone, email, "Admissions Open"), main nav white sticky with subtle shadow on scroll, active link in `--accent`, CTA "Apply Now" right. Mobile: hamburger → full-height drawer.

### Hero
Left: eyebrow ("Nursing College in [City]"), H1 "Care. Learn. Lead.", paragraph, two buttons (primary + secondary), small trust chips (INC / Govt. recognised `[verify]`). Right: portrait photo of nurse/student masked in a rotated diamond shape with gradient frame; two floating white badges ("[X]+ Students", "[X]% Success"). Background `--hero-gradient` with faint dotted pattern and small decorative squiggle.

### Stats strip (4 cards)
White cards, 14px radius, teal outline icon (48px), big number (32px/700), label (13px muted), 3px teal bottom border. Overlaps hero bottom by -40px.

### Course card
Image 16:10 (12px radius) top, H3 title, 2-line description (muted), "Learn More →" link. Card white on `--bg-mint` section. Hover: lift + shadow.

### Journey steps (4 cards, tinted)
Yellow (Enquire), Grey (Apply), Pink (Pay & Admit), Mint (Start Training). Each: line icon, title, 2–3 lines. Centered primary CTA beneath.

### Testimonial card
Avatar 40px, name + course/batch, quote (italic 15px), 5 gold stars. Section on `--bg-cream`.

### Partner logo strip
Grayscale logos, colour on hover, evenly spaced, auto-scroll on mobile.

### Why Choose list
Left: collage of 2 overlapping photos with rounded corners; right: 6 rows with soft-coloured circle icons, bold title, one-line text.

### News card
Cover image, date + time muted, title (2 lines), excerpt (2 lines), "Learn More".

### Footer
Navy bg, 4 columns: Brand + tagline + "Get Free Quote→Apply Now" outline button; Quick Links; Courses; Contact Info with round pink icons (phone, mail, location). Bottom bar copyright.

### Forms
Label above field, 48px height inputs, 8px radius, 1px border, inline error in `--error` with icon + text, success toast, progress bar for multi-step.

### Floating actions (mobile)
WhatsApp (green) and Call (teal) round buttons bottom-right, 56px, above safe area.

---

## 6. Iconography & Imagery
- Icons: Lucide / Phosphor, 1.5px stroke, teal.
- Photography: real campus, lab, ward training, students in uniform, warm natural light, diverse, candid. Avoid generic stock where possible. Consistent 12px radius. Provide alt text.
- Illustration accents: dotted grids, small squiggle, soft blurred gradient blobs (very subtle).

---

## 7. Motion
- Fade-up on scroll (16px, 400ms, ease-out, once).
- Card hover lift 200ms; counter animation on stats (once).
- Respect `prefers-reduced-motion`.

---

## 8. Page Layout Blueprints
- **Course detail:** breadcrumb → hero (title, key facts bar: duration/eligibility/seats/fees) → overview → syllabus accordion → clinical training → careers → fees table → FAQ → sticky "Apply Now" side card.
- **Admissions:** steps timeline → eligibility table → documents checklist → important dates → fee table → Apply CTA.
- **Contact:** two columns (form | details + map), WhatsApp button.
- **Gallery:** masonry grid with album filter + lightbox.

---

## 9. Accessibility Checklist
Semantic landmarks, skip link, visible focus, alt text, 44px tap targets, labels linked to inputs, error summaries, no autoplay with sound, headings in order, AA contrast.

---

## 10. Content Tone Examples
- Hero: "Care. Learn. Lead. Begin your nursing career with hands-on hospital training."
- Stats labels: "Students Enrolled", "Years of Excellence", "Hospital Tie-ups", "Placement Support".
- CTA labels: "Apply Now", "Explore Courses", "Book Campus Visit", "Download Prospectus".

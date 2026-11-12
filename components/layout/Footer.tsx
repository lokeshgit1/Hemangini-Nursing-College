import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from 'lucide-react';
import { Course, SiteConfig } from '@/lib/types';
import { buildTelHref } from '@/lib/utils';

interface FooterProps {
  site: SiteConfig;
  courses: Course[];
}

export function Footer({ site, courses }: FooterProps) {
  const cleanEmail = site.email.replace(/\s*\[CONFIRM\]/g, '').trim();

  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-container px-4 py-14 md:px-6 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <img
                src="/logos/hemangini-mark.png"
                alt=""
                width={48}
                height={48}
                className="h-12 w-12 rounded-xl bg-white object-contain p-1.5 shadow-sm"
              />
              <div>
                <span className="block font-heading text-xl font-bold text-white">Hemangini</span>
                <span className="block text-xs font-semibold uppercase tracking-wider text-[#8FD3DE]">
                  Nursing College
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-white/75">{site.tagline}</p>
            <Link
              href="/admissions/"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-btn border border-white/30 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-accent hover:bg-accent-dark"
            >
              <span>Apply Now</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={site.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Hemangini Nursing College on Facebook"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/85 transition-colors hover:bg-primary"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={site.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Hemangini Nursing College on Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/85 transition-colors hover:bg-accent-dark"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={site.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Hemangini Nursing College on YouTube"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/85 transition-colors hover:bg-accent-dark"
              >
                <Youtube className="h-4 w-4" />
              </a>
              <a
                href={site.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Hemangini Nursing College on LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/85 transition-colors hover:bg-primary"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h2 className="mb-4 font-heading text-base font-semibold text-white">Quick Links</h2>
            <ul className="space-y-2.5 text-sm text-white/75">
              <li>
                <Link href="/about/" className="transition-colors hover:text-white">
                  About Us &amp; Approvals
                </Link>
              </li>
              <li>
                <Link href="/admissions/" className="transition-colors hover:text-white">
                  Admissions &amp; Fees
                </Link>
              </li>
              <li>
                <Link href="/facilities/" className="transition-colors hover:text-white">
                  Campus &amp; Labs
                </Link>
              </li>
              <li>
                <Link href="/faculty/" className="transition-colors hover:text-white">
                  Faculty Directory
                </Link>
              </li>
              <li>
                <Link href="/placements/" className="transition-colors hover:text-white">
                  Placements &amp; Hospitals
                </Link>
              </li>
              <li>
                <Link href="/notices/" className="transition-colors hover:text-white">
                  Official Notices
                </Link>
              </li>
              <li>
                <Link href="/faqs/" className="transition-colors hover:text-white">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/gallery/" className="transition-colors hover:text-white">
                  Campus Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Courses */}
          <div>
            <h2 className="mb-4 font-heading text-base font-semibold text-white">
              Nursing Programmes
            </h2>
            <ul className="space-y-2.5 text-sm text-white/75">
              {courses.map((course) => (
                <li key={course.slug}>
                  <Link
                    href={`/courses/${course.slug}/`}
                    className="transition-colors hover:text-white"
                  >
                    {course.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info with round pink icons */}
          <div>
            <h2 className="mb-4 font-heading text-base font-semibold text-white">Contact Info</h2>
            <ul className="space-y-4 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-dark text-white">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                </span>
                <div>
                  <span className="block text-xs uppercase tracking-wide text-white/60">
                    Admissions Helpline
                  </span>
                  <a href={buildTelHref(site.phone)} className="font-medium hover:text-white">
                    {site.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-dark text-white">
                  <Mail className="h-4 w-4" aria-hidden="true" />
                </span>
                <div>
                  <span className="block text-xs uppercase tracking-wide text-white/60">
                    Email Desk
                  </span>
                  <a
                    href={`mailto:${cleanEmail}`}
                    className="break-all font-medium hover:text-white"
                  >
                    {site.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-dark text-white">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                </span>
                <div>
                  <span className="block text-xs uppercase tracking-wide text-white/60">
                    Campus Address
                  </span>
                  <span className="leading-relaxed">{site.address}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/15 pt-7 text-xs text-white/70 md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} {site.name}, Itamati, Nayagarh. All rights reserved.
          </p>
          <nav aria-label="Legal Navigation" className="flex flex-wrap items-center gap-5">
            <Link href="/legal/privacy/" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/legal/terms/" className="transition-colors hover:text-white">
              Terms of Use
            </Link>
            <Link href="/legal/anti-ragging/" className="transition-colors hover:text-white">
              Anti-Ragging Notice
            </Link>
            <Link href="/legal/disclosure/" className="transition-colors hover:text-white">
              Mandatory Disclosure
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

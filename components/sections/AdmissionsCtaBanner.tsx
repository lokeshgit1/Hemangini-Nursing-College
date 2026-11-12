'use client';

import React from 'react';
import Link from 'next/link';
import { Download, ExternalLink, PhoneCall } from 'lucide-react';
import { Course, SiteConfig } from '@/lib/types';
import { EnquiryForm } from '@/components/forms/EnquiryForm';
import { buildTelHref } from '@/lib/utils';
import { trackEvent } from '@/lib/analytics';

interface AdmissionsCtaBannerProps {
  site: SiteConfig;
  courses: Course[];
}

export function AdmissionsCtaBanner({ site, courses }: AdmissionsCtaBannerProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy via-[#153554] to-[#0A6B67] py-14 text-white md:py-20">
      <div
        aria-hidden="true"
        className="bg-accent/20 pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full blur-3xl"
      />
      <div className="relative mx-auto grid max-w-container grid-cols-1 items-center gap-10 px-4 md:px-6 lg:grid-cols-12">
        {/* Left CTA Copy */}
        <div className="lg:col-span-6">
          <span className="inline-flex items-center rounded-full bg-white/15 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#F6A5BE]">
            Admissions Open {site.admissionYear}
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold leading-tight text-white md:text-[42px]">
            Ready to Begin Your Nursing Journey?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/85 md:text-lg">
            Speak with our academic counselling team about course eligibility, scholarship guidance,
            hostel safety, and clinical rotations.
          </p>

          <div className="mt-7 flex flex-wrap gap-3.5">
            <a
              href={site.applicationLinks.prospectusPdf}
              download
              onClick={() => trackEvent('prospectus_download', { source: 'home_cta_banner' })}
              className="inline-flex min-h-[48px] items-center gap-2 rounded-btn bg-white px-5 py-3 text-sm font-semibold text-navy shadow-sm transition-transform hover:-translate-y-0.5"
            >
              <Download className="h-4 w-4 text-primary-dark" aria-hidden="true" />
              <span>Download Prospectus (PDF)</span>
            </a>

            <Link
              href="/admissions/"
              className="inline-flex min-h-[48px] items-center gap-2 rounded-btn border border-white/35 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-navy"
            >
              <span>Admission Process &amp; Fees</span>
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-6 flex items-center gap-3 text-sm text-white/85">
            <PhoneCall className="h-4 w-4 text-[#8FD3DE]" aria-hidden="true" />
            <span>
              Prefer speaking directly? Call{' '}
              <a
                href={buildTelHref(site.admissionsPhone)}
                onClick={() => trackEvent('call_click', { location: 'home_cta_banner' })}
                className="font-semibold text-white underline underline-offset-4"
              >
                {site.admissionsPhone}
              </a>
            </span>
          </div>
        </div>

        {/* Right Mini Enquiry Form */}
        <div className="lg:col-span-6">
          <EnquiryForm
            variant="compact"
            heading="Quick Admission Enquiry"
            courses={courses.map((c) => ({ slug: c.slug, title: c.title }))}
          />
        </div>
      </div>
    </section>
  );
}

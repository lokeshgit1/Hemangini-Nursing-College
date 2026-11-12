'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { FacilityItem } from '@/lib/types';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { cn } from '@/lib/utils';

export function FacilitiesCarousel({ facilities }: { facilities: FacilityItem[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => setActiveIndex((i) => (i === 0 ? facilities.length - 1 : i - 1));
  const next = () => setActiveIndex((i) => (i === facilities.length - 1 ? 0 : i + 1));

  const current = facilities[activeIndex] ?? facilities[0];

  if (!current) return null;

  return (
    <section className="bg-white py-14 md:py-24" aria-label="Campus Facilities Highlights">
      <div className="mx-auto max-w-container px-4 md:px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader
            align="left"
            eyebrow="Campus & Clinical Infrastructure"
            title="Modern Labs, Library & Safe Student Facilities"
            description="Explore the teaching labs, residential hostel, and clinical environments supporting everyday nursing learning."
          />

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous facility"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-navy shadow-soft transition-colors hover:border-primary hover:bg-surface-mint"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next facility"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-navy shadow-soft transition-colors hover:border-primary hover:bg-surface-mint"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Highlight Showcase Card */}
        <div className="mt-8 overflow-hidden rounded-card border border-border bg-white shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="relative aspect-[16/10] bg-surface-grey lg:col-span-7 lg:aspect-auto lg:min-h-[380px]">
              <img
                src={current.image}
                alt={current.imageAlt}
                width={800}
                height={500}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <span className="bg-navy/85 absolute left-4 top-4 rounded-full px-3.5 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                {current.category}
              </span>
            </div>

            <div className="flex flex-col justify-between p-6 md:p-8 lg:col-span-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-primary-dark">
                  Facility {activeIndex + 1} of {facilities.length}
                </p>
                <h3 className="mt-2 font-heading text-2xl font-semibold text-navy">
                  {current.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">{current.details}</p>

                <ul className="mt-5 space-y-2.5">
                  {current.highlights.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2.5 text-sm text-navy">
                      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-surface-mint text-primary-dark">
                        <Check className="h-3.5 w-3.5" aria-hidden="true" />
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-5">
                <div
                  className="flex items-center gap-1.5"
                  role="tablist"
                  aria-label="Select facility slide"
                >
                  {facilities.map((fac, idx) => (
                    <button
                      key={fac.id}
                      type="button"
                      role="tab"
                      aria-selected={idx === activeIndex}
                      aria-label={`View ${fac.title}`}
                      onClick={() => setActiveIndex(idx)}
                      className={cn(
                        'h-2.5 rounded-full transition-all',
                        idx === activeIndex
                          ? 'w-7 bg-accent-dark'
                          : 'hover:bg-primary/50 w-2.5 bg-border'
                      )}
                    />
                  ))}
                </div>

                <Link
                  href="/facilities/"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-dark underline underline-offset-4 hover:text-accent-dark"
                >
                  <span>Explore All Facilities</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

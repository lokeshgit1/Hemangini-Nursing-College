'use client';

import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { FacilityItem } from '@/lib/types';
import { cn } from '@/lib/utils';

const categories: ('All' | FacilityItem['category'])[] = [
  'All',
  'Laboratories',
  'Clinical',
  'Academic',
  'Campus Life',
];

export function FacilitiesCatalogClient({ facilities }: { facilities: FacilityItem[] }) {
  const [activeCat, setActiveCat] = useState<'All' | FacilityItem['category']>('All');

  const items =
    activeCat === 'All' ? facilities : facilities.filter((f) => f.category === activeCat);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter facilities by category">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveCat(cat)}
            className={cn(
              'min-h-[42px] rounded-full px-4 py-2 text-sm font-semibold transition-colors',
              activeCat === cat
                ? 'bg-accent-dark text-white'
                : 'border border-border bg-white text-navy hover:bg-surface-mint'
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {items.map((fac) => (
          <article
            key={fac.id}
            className="flex flex-col overflow-hidden rounded-card border border-border bg-white shadow-card transition-shadow hover:shadow-card-hover"
          >
            <div className="relative aspect-[16/10] bg-surface-grey">
              <img
                src={fac.image}
                alt={fac.imageAlt}
                width={700}
                height={440}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <span className="bg-navy/85 absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold text-white">
                {fac.category}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h2 className="font-heading text-xl font-semibold text-navy">{fac.title}</h2>
              <p className="mt-2.5 text-[15px] leading-relaxed text-ink-muted">{fac.details}</p>
              <ul className="mt-4 space-y-2 border-t border-border pt-4">
                {fac.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-navy">
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-primary-dark"
                      aria-hidden="true"
                    />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

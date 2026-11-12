'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface AccordionEntry {
  id: string;
  title: string;
  content: React.ReactNode;
  badge?: string;
}

export function Accordion({
  items,
  defaultOpenIndex = 0,
}: {
  items: AccordionEntry[];
  defaultOpenIndex?: number | null;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  return (
    <div className="space-y-3">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        const buttonId = `acc-btn-${item.id}`;
        const panelId = `acc-panel-${item.id}`;

        return (
          <div
            key={item.id}
            className="overflow-hidden rounded-card border border-border bg-white shadow-soft transition-colors"
          >
            <h3 className="m-0">
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="hover:bg-surface-mint/40 flex min-h-[56px] w-full items-center justify-between gap-4 px-5 py-4 text-left font-heading text-base font-semibold text-navy transition-colors md:text-lg"
              >
                <span className="flex flex-wrap items-center gap-2.5">
                  <span>{item.title}</span>
                  {item.badge ? (
                    <span className="rounded-full bg-surface-mint px-2.5 py-0.5 text-xs font-semibold text-primary-dark">
                      {item.badge}
                    </span>
                  ) : null}
                </span>
                <ChevronDown
                  className={cn(
                    'h-5 w-5 shrink-0 text-primary transition-transform duration-200',
                    isOpen && 'rotate-180'
                  )}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="border-border/70 border-t px-5 py-4 text-[15px] leading-relaxed text-ink-muted"
            >
              {item.content}
            </div>
          </div>
        );
      })}
    </div>
  );
}

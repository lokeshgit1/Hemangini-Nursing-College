'use client';

import React, { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { FAQItem } from '@/lib/types';
import { Accordion } from '@/components/ui/Accordion';
import { cn } from '@/lib/utils';

const categories: ('All' | FAQItem['category'])[] = [
  'All',
  'Admissions & Eligibility',
  'Fees & Scholarships',
  'Clinical Training',
  'Hostel & Campus',
  'Approvals',
];

export function FaqsClient({ faqs }: { faqs: FAQItem[] }) {
  const [selectedCat, setSelectedCat] = useState<'All' | FAQItem['category']>('All');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return faqs.filter((f) => {
      const catOk = selectedCat === 'All' || f.category === selectedCat;
      const qOk = !q || f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q);
      return catOk && qOk;
    });
  }, [faqs, selectedCat, query]);

  const accordionItems = filtered.map((f) => ({
    id: f.id,
    title: f.question,
    badge: f.category,
    content: <p>{f.answer}</p>,
  }));

  return (
    <div className="space-y-8">
      <div className="flex flex-col justify-between gap-4 rounded-card border border-border bg-white p-4 shadow-soft lg:flex-row lg:items-center">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter FAQs by topic">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCat(cat)}
              className={cn(
                'min-h-[40px] rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors sm:text-sm',
                selectedCat === cat
                  ? 'bg-accent-dark text-white'
                  : 'bg-surface-mint/60 text-navy hover:bg-surface-mint'
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full lg:w-72">
          <Search
            className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted"
            aria-hidden="true"
          />
          <label htmlFor="faq-search" className="sr-only">
            Search frequently asked questions
          </label>
          <input
            id="faq-search"
            type="search"
            placeholder="Search questions..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="focus:ring-primary/25 h-11 w-full rounded-btn border border-border bg-white pl-10 pr-3 text-sm text-navy placeholder:text-ink-muted focus:border-primary focus:outline-none focus:ring-2"
          />
        </div>
      </div>

      {accordionItems.length > 0 ? (
        <Accordion items={accordionItems} defaultOpenIndex={0} />
      ) : (
        <div className="rounded-card border border-border bg-white p-8 text-center text-sm text-ink-muted">
          No questions matched your filter. Contact our admissions desk for personalised help.
        </div>
      )}
    </div>
  );
}

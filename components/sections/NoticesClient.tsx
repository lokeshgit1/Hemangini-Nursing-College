'use client';

import React, { useMemo, useState } from 'react';
import { Calendar, Download, FileText, Search } from 'lucide-react';
import { NoticeCategory, NoticeItem } from '@/lib/types';
import { cn, formatDate } from '@/lib/utils';

const categories: ('All' | NoticeCategory)[] = [
  'All',
  'Admissions',
  'Examinations',
  'Circulars',
  'Scholarships',
  'Events',
];

export function NoticesClient({ notices }: { notices: NoticeItem[] }) {
  const [selectedCat, setSelectedCat] = useState<'All' | NoticeCategory>('All');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return notices.filter((n) => {
      const catOk = selectedCat === 'All' || n.category === selectedCat;
      const qOk = !q || n.title.toLowerCase().includes(q) || n.summary.toLowerCase().includes(q);
      return catOk && qOk;
    });
  }, [notices, selectedCat, query]);

  return (
    <div className="space-y-8">
      <div className="flex flex-col justify-between gap-4 rounded-card border border-border bg-white p-4 shadow-soft md:flex-row md:items-center">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter notices by category">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCat(cat)}
              className={cn(
                'min-h-[40px] rounded-full px-4 py-2 text-sm font-semibold transition-colors',
                selectedCat === cat
                  ? 'bg-accent-dark text-white'
                  : 'bg-surface-mint/60 text-navy hover:bg-surface-mint'
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-72">
          <Search
            className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted"
            aria-hidden="true"
          />
          <label htmlFor="notice-search" className="sr-only">
            Search official notices
          </label>
          <input
            id="notice-search"
            type="search"
            placeholder="Search circulars, exams..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="focus:ring-primary/25 h-11 w-full rounded-btn border border-border bg-white pl-10 pr-3 text-sm text-navy placeholder:text-ink-muted focus:border-primary focus:outline-none focus:ring-2"
          />
        </div>
      </div>

      <div className="space-y-4">
        {filtered.map((notice) => (
          <article
            key={notice.id}
            className="flex flex-col justify-between gap-4 rounded-card border border-border bg-white p-5 shadow-soft transition-shadow hover:shadow-card md:flex-row md:items-center md:p-6"
          >
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2.5 text-xs">
                <span className="rounded-full bg-surface-mint px-3 py-1 font-semibold text-primary-dark">
                  {notice.category}
                </span>
                {notice.isNew ? (
                  <span className="rounded-full bg-accent-dark px-2.5 py-0.5 text-[11px] font-bold uppercase text-white">
                    New
                  </span>
                ) : null}
                <span className="inline-flex items-center gap-1 text-ink-muted">
                  <Calendar className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                  <time dateTime={notice.date}>{formatDate(notice.date)}</time>
                </span>
              </div>

              <h2 className="font-heading text-lg font-semibold text-navy md:text-xl">
                {notice.title}
              </h2>
              <p className="max-w-3xl text-sm leading-relaxed text-ink-muted">{notice.summary}</p>
            </div>

            {notice.downloadUrl ? (
              <div className="shrink-0">
                <a
                  href={notice.downloadUrl}
                  download
                  className="border-primary/30 bg-surface-mint/50 inline-flex min-h-[44px] items-center gap-2 rounded-btn border px-4 py-2.5 text-sm font-semibold text-primary-dark transition-colors hover:bg-primary-dark hover:text-white"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  <span>Download PDF</span>
                </a>
              </div>
            ) : (
              <span className="inline-flex shrink-0 items-center gap-1.5 text-xs font-medium text-ink-muted">
                <FileText className="h-4 w-4" aria-hidden="true" />
                <span>Notice Circular</span>
              </span>
            )}
          </article>
        ))}

        {filtered.length === 0 ? (
          <div className="rounded-card border border-border bg-white p-8 text-center text-sm text-ink-muted">
            No notices matched your current filter.
          </div>
        ) : null}
      </div>
    </div>
  );
}

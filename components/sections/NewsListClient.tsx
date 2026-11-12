'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock, Search } from 'lucide-react';
import { NewsFrontmatter } from '@/lib/types';
import { cn, formatDate } from '@/lib/utils';

export function NewsListClient({ articles }: { articles: NewsFrontmatter[] }) {
  const categories = useMemo(
    () => ['All', ...Array.from(new Set(articles.map((a) => a.category)))],
    [articles]
  );
  const [selectedCat, setSelectedCat] = useState('All');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return articles.filter((item) => {
      const catMatch = selectedCat === 'All' || item.category === selectedCat;
      const qMatch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.excerpt.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q);
      return catMatch && qMatch;
    });
  }, [articles, selectedCat, query]);

  return (
    <div className="space-y-8">
      <div className="flex flex-col justify-between gap-4 rounded-card border border-border bg-white p-4 shadow-soft md:flex-row md:items-center">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter news by category">
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
          <label htmlFor="news-search" className="sr-only">
            Search news and events
          </label>
          <input
            id="news-search"
            type="search"
            placeholder="Search news & workshops..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="focus:ring-primary/25 h-11 w-full rounded-btn border border-border bg-white pl-10 pr-3 text-sm text-navy placeholder:text-ink-muted focus:border-primary focus:outline-none focus:ring-2"
          />
        </div>
      </div>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((fm) => (
            <article
              key={fm.slug}
              className="group flex h-full flex-col overflow-hidden rounded-card border border-border bg-white shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-card-hover"
            >
              <Link href={`/news/${fm.slug}/`} className="block overflow-hidden">
                <div className="aspect-[16/10] w-full overflow-hidden bg-surface-grey">
                  <img
                    src={fm.coverImage}
                    alt={fm.coverAlt}
                    width={640}
                    height={400}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </Link>
              <div className="flex flex-1 flex-col p-5">
                <div className="flex flex-wrap items-center gap-3 text-xs text-ink-muted">
                  <span className="rounded-full bg-surface-blush px-2.5 py-0.5 font-semibold text-accent-dark">
                    {fm.category}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                    <time dateTime={fm.date}>{formatDate(fm.date)}</time>
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                    <span>{fm.readTime}</span>
                  </span>
                </div>
                <h2 className="mt-3 line-clamp-2 font-heading text-lg font-semibold leading-snug text-navy md:text-xl">
                  <Link href={`/news/${fm.slug}/`} className="hover:text-primary-dark">
                    {fm.title}
                  </Link>
                </h2>
                <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-ink-muted">
                  {fm.excerpt}
                </p>
                <div className="mt-4 pt-2">
                  <Link
                    href={`/news/${fm.slug}/`}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-primary-dark underline underline-offset-4 hover:text-accent-dark"
                  >
                    <span>Read Full Story</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="rounded-card border border-border bg-white p-10 text-center">
          <p className="font-heading text-lg font-semibold text-navy">No matching articles</p>
          <p className="mt-1 text-sm text-ink-muted">Try a different keyword or category.</p>
        </div>
      )}
    </div>
  );
}

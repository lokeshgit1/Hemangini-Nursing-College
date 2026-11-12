import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className="flex flex-wrap items-center gap-1.5 text-[13px] text-ink-muted">
        <li className="inline-flex items-center">
          <Link
            href="/"
            className="inline-flex items-center gap-1 font-medium text-ink-muted transition-colors hover:text-primary-dark"
          >
            <Home className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={item.label} className="inline-flex items-center gap-1.5">
              <ChevronRight className="text-ink-muted/70 h-3.5 w-3.5" aria-hidden="true" />
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="font-medium text-ink-muted transition-colors hover:text-primary-dark"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="font-semibold text-navy" aria-current="page">
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

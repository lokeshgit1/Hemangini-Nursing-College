import React from 'react';
import { Breadcrumb, BreadcrumbItem } from '@/components/ui/Breadcrumb';

interface PageBannerProps {
  eyebrow: string;
  title: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
  children?: React.ReactNode;
}

export function PageBanner({
  eyebrow,
  title,
  description,
  breadcrumbs,
  children,
}: PageBannerProps) {
  return (
    <section className="bg-hero-gradient relative overflow-hidden border-b border-border py-12 md:py-16">
      <div className="hero-dots-pattern pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-container px-4 md:px-6">
        <Breadcrumb items={breadcrumbs} />
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-accent-dark">
          {eyebrow}
        </p>
        <h1 className="max-w-3xl font-heading text-[32px] font-bold leading-[1.15] text-navy md:text-[46px]">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted md:text-[18px]">
          {description}
        </p>
        {children ? <div className="mt-6">{children}</div> : null}
      </div>
    </section>
  );
}

import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className
      )}
    >
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-accent-dark">
        {eyebrow}
      </p>
      <h2 className="font-heading text-[28px] font-semibold leading-[1.2] text-navy md:text-[40px]">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-[15px] leading-relaxed text-ink-muted md:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}

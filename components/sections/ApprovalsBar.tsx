import React from 'react';
import Link from 'next/link';
import { ArrowRight, BadgeCheck } from 'lucide-react';
import { ApprovalItem } from '@/lib/types';

export function ApprovalsBar({ approvals }: { approvals: ApprovalItem[] }) {
  return (
    <section
      aria-label="Approvals and Recognition"
      className="border-border/70 border-y bg-white py-8"
    >
      <div className="mx-auto max-w-container px-4 md:px-6">
        <div className="mb-5 flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent-dark">
              Recognition &amp; Affiliations
            </p>
            <p className="mt-0.5 text-sm text-ink-muted">
              Promoter trust registration, campus safety clearances, and council/clinical NOC status
            </p>
          </div>
          <Link
            href="/legal/disclosure/"
            className="inline-flex items-center gap-1 text-sm font-semibold text-primary-dark underline underline-offset-4 hover:text-navy"
          >
            <span>Mandatory Disclosure</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
          {approvals.map((item) => (
            <div
              key={item.id}
              className="bg-surface-mint/35 flex flex-col justify-between rounded-card border border-border p-4"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-start gap-2.5">
                  <BadgeCheck
                    className="mt-0.5 h-5 w-5 shrink-0 text-primary-dark"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="font-heading text-sm font-semibold text-navy">{item.title}</h3>
                    <p className="text-xs text-ink-muted">{item.authority}</p>
                  </div>
                </div>
              </div>
              <div className="border-border/70 mt-3 flex flex-wrap items-center justify-between gap-2 border-t pt-2.5 text-xs">
                <span className="font-medium text-navy">{item.regNumber}</span>
                <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-800">
                  {item.status || 'Verified'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

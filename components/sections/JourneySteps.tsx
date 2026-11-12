import React from 'react';
import Link from 'next/link';
import { Activity, ArrowRight, CreditCard, FileCheck2, MessageSquare } from 'lucide-react';
import { SiteConfig } from '@/lib/types';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { FadeInView } from '@/components/ui/MotionPrimitives';

const stepIcons = {
  messageSquare: MessageSquare,
  fileCheck: FileCheck2,
  creditCard: CreditCard,
  activity: Activity,
};

export function JourneySteps({ steps }: { steps: SiteConfig['journeySteps'] }) {
  return (
    <section className="bg-white py-14 md:py-24">
      <div className="mx-auto max-w-container px-4 md:px-6">
        <SectionHeader
          eyebrow="Simple Admission Journey"
          title="Your Path to a Nursing Career"
          description="A clear, transparent four-step admission process from first enquiry to your first clinical rotation."
        />

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item, idx) => {
            const Icon = stepIcons[item.iconName];
            return (
              <FadeInView key={item.step} delay={idx * 0.06}>
                <div
                  className={`${item.bgClass} flex h-full flex-col rounded-card border border-black/5 p-6 shadow-soft transition-transform duration-200 hover:-translate-y-1`}
                >
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white text-primary-dark shadow-soft">
                      <Icon className="h-6 w-6" strokeWidth={1.6} aria-hidden="true" />
                    </span>
                    <span className="text-navy/70 text-xs font-bold uppercase tracking-wider">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="mt-5 font-heading text-xl font-semibold text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-ink-muted">
                    {item.description}
                  </p>
                </div>
              </FadeInView>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/admissions/"
            className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-btn bg-accent-dark px-8 py-3.5 text-[15px] font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#a91c61]"
          >
            <span>Start Your Application</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

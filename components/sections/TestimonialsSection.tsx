import React from 'react';
import { Quote, Star } from 'lucide-react';
import { Testimonial } from '@/lib/types';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { FadeInView } from '@/components/ui/MotionPrimitives';

export function TestimonialsSection({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <section className="bg-surface-cream py-14 md:py-24">
      <div className="mx-auto max-w-container px-4 md:px-6">
        <SectionHeader
          eyebrow="Student & Parent Voices"
          title="Trusted by Aspiring Nurses & Their Families"
          description="Hear how structured clinical training, faculty mentorship, and campus safety shape student confidence at Hemangini Nursing College."
        />

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((item, idx) => (
            <FadeInView key={item.id} delay={idx * 0.06}>
              <article className="border-border/80 flex h-full flex-col justify-between rounded-card border bg-white p-6 shadow-card">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <div
                      className="flex items-center gap-1"
                      aria-label={`${item.rating} out of 5 stars`}
                    >
                      {Array.from({ length: item.rating }).map((_, sIdx) => (
                        <Star
                          key={sIdx}
                          className="h-4 w-4 fill-feedback-star text-feedback-star"
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <Quote className="text-primary/25 h-6 w-6" aria-hidden="true" />
                  </div>

                  <blockquote className="mt-4 text-[15px] italic leading-relaxed text-ink">
                    &ldquo;{item.quote}&rdquo;
                  </blockquote>
                </div>

                <div className="border-border/70 mt-6 flex items-center justify-between gap-3 border-t pt-4">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface-mint font-heading text-sm font-bold text-primary-dark">
                      {item.initials}
                    </span>
                    <div>
                      <p className="font-heading text-sm font-semibold text-navy">{item.name}</p>
                      <p className="text-xs text-ink-muted">
                        {item.role} • {item.course}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}

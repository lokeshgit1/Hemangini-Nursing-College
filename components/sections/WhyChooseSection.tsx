import React from 'react';
import { GraduationCap, HeartHandshake, Home, Microscope, Stethoscope, Wallet } from 'lucide-react';
import { SiteConfig } from '@/lib/types';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { FadeInView } from '@/components/ui/MotionPrimitives';
import { cn } from '@/lib/utils';

const iconMap = {
  graduation: GraduationCap,
  stethoscope: Stethoscope,
  home: Home,
  microscope: Microscope,
  wallet: Wallet,
  heartHandshake: HeartHandshake,
};

const tintMap = {
  teal: 'bg-surface-mint text-primary-dark',
  pink: 'bg-surface-blush text-accent-dark',
  sun: 'bg-surface-sun text-amber-900',
  blue: 'bg-sky-50 text-sky-800',
  mint: 'bg-emerald-50 text-emerald-800',
  cream: 'bg-surface-cream text-navy',
};

export function WhyChooseSection({ items }: { items: SiteConfig['whyChoose'] }) {
  return (
    <section className="bg-surface-cream/60 py-14 md:py-24">
      <div className="mx-auto grid max-w-container grid-cols-1 items-center gap-12 px-4 md:px-6 lg:grid-cols-12">
        {/* Left: Overlapping rounded photos collage */}
        <FadeInView className="lg:col-span-5">
          <div className="relative mx-auto max-w-md pb-12 pr-6 sm:pb-16 sm:pr-10">
            <div
              aria-hidden="true"
              className="hero-dots-pattern absolute -left-4 -top-4 h-36 w-36 rounded-2xl opacity-70"
            />
            <div className="relative overflow-hidden rounded-card border-4 border-white shadow-card-hover">
              <img
                src="/images/clinical-training.jpg"
                alt="Student nurses in uniform reviewing patient care charts in a hospital ward"
                width={640}
                height={480}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>

            <div className="relative -mt-14 ml-auto w-3/4 overflow-hidden rounded-card border-4 border-white shadow-card-hover sm:-mt-20">
              <img
                src="/images/skills-lab.jpg"
                alt="Nursing faculty guiding students in the Nursing Foundation simulation lab"
                width={520}
                height={360}
                loading="lazy"
                className="aspect-[16/10] w-full object-cover"
              />
            </div>

            <div className="absolute bottom-2 left-2 rounded-card border border-border bg-white px-4 py-3 shadow-card">
              <p className="font-heading text-xl font-bold text-primary-dark">Est. 2025</p>
              <p className="text-xs font-medium text-ink-muted">Itamati, Nayagarh • Odisha</p>
            </div>
          </div>
        </FadeInView>

        {/* Right: 6 Why-Choose Points */}
        <div className="lg:col-span-7">
          <SectionHeader
            align="left"
            eyebrow="Why Choose Hemangini"
            title="Supportive Mentorship Meets Real Hospital Training"
            description="Every detail of campus life—from simulation labs to hostel safety—is structured to help students grow into calm, capable nurses."
          />

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {items.map((item, idx) => {
              const Icon = iconMap[item.iconName];
              return (
                <FadeInView key={item.id} delay={idx * 0.04}>
                  <div className="border-border/80 flex items-start gap-3.5 rounded-card border bg-white p-4 shadow-soft">
                    <span
                      className={cn(
                        'inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full',
                        tintMap[item.tint]
                      )}
                    >
                      <Icon className="h-5 w-5" strokeWidth={1.7} aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-heading text-base font-semibold text-navy">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </FadeInView>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

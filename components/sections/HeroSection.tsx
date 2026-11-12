import React from 'react';
import Link from 'next/link';
import { ArrowRight, CalendarCheck, CheckCircle2, GraduationCap, ShieldCheck } from 'lucide-react';
import { SiteConfig } from '@/lib/types';
import { FadeInView } from '@/components/ui/MotionPrimitives';

export function HeroSection({ site }: { site: SiteConfig }) {
  return (
    <section className="bg-hero-gradient relative overflow-hidden pb-20 pt-10 md:pb-24 md:pt-16">
      {/* Subtle decorative background accents */}
      <div className="hero-dots-pattern pointer-events-none absolute inset-0 opacity-50" />
      <div
        aria-hidden="true"
        className="bg-primary/10 pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full blur-3xl"
      />
      <div
        aria-hidden="true"
        className="bg-accent/10 pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full blur-3xl"
      />

      <div className="relative mx-auto grid max-w-container grid-cols-1 items-center gap-12 px-4 md:px-6 lg:grid-cols-12 lg:gap-8">
        {/* Left Content Column */}
        <FadeInView className="lg:col-span-7">
          <div className="border-accent/20 inline-flex items-center gap-2 rounded-full border bg-white/80 px-3.5 py-1.5 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-accent-dark" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-[0.12em] text-accent-dark">
              {site.hero.eyebrow}
            </span>
          </div>

          <h1 className="mt-5 font-heading text-[36px] font-bold leading-[1.1] tracking-tight text-navy md:text-[56px]">
            {site.hero.headline}
          </h1>

          <p className="mt-5 max-w-xl text-base leading-[1.6] text-ink-muted md:text-[18px]">
            {site.hero.subheadline}
          </p>

          {/* Primary & Secondary CTAs */}
          <div className="mt-7 flex flex-wrap items-center gap-3.5">
            <Link
              href="/courses/"
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-btn bg-accent-dark px-7 py-3.5 text-[15px] font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#a91c61]"
            >
              <span>{site.hero.primaryCta}</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/contact/"
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-btn border border-border bg-white px-7 py-3.5 text-[15px] font-semibold text-navy shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-primary hover:text-primary-dark"
            >
              <CalendarCheck className="h-4 w-4 text-primary-dark" aria-hidden="true" />
              <span>{site.hero.secondaryCta}</span>
            </Link>
          </div>

          {/* Trust Chips */}
          <div className="text-navy/85 mt-7 flex flex-wrap items-center gap-3 text-[13px] font-medium">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/85 px-3.5 py-1.5 shadow-soft">
              <ShieldCheck className="h-4 w-4 text-primary-dark" aria-hidden="true" />
              <span>INC &amp; State Council Norms</span>
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/85 px-3.5 py-1.5 shadow-soft">
              <CheckCircle2 className="h-4 w-4 text-primary-dark" aria-hidden="true" />
              <span>Hospital Clinical Rotations</span>
            </span>
          </div>

          {/* Decorative squiggle SVG matching design notes */}
          <svg
            aria-hidden="true"
            className="text-primary/45 mt-6 hidden h-4 w-24 md:block"
            viewBox="0 0 120 18"
            fill="none"
          >
            <path
              d="M2 9C12 2 22 16 32 9C42 2 52 16 62 9C72 2 82 16 92 9C102 2 112 16 118 9"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </FadeInView>

        {/* Right Visual Column: Diamond-Masked Portrait + Floating Badges */}
        <FadeInView delay={0.1} className="lg:col-span-5">
          <div className="relative mx-auto flex h-[320px] w-[320px] items-center justify-center sm:h-[390px] sm:w-[390px]">
            {/* Gradient rotated diamond backdrop */}
            <div
              aria-hidden="true"
              className="bg-diamond-gradient absolute inset-8 rotate-45 rounded-[38px] opacity-90 shadow-card-hover"
            />

            {/* Diamond-masked upright portrait */}
            <div className="relative h-[240px] w-[240px] rotate-45 overflow-hidden rounded-[34px] border-4 border-white bg-white shadow-card-hover sm:h-[290px] sm:w-[290px]">
              <img
                src={site.hero.image}
                alt={site.hero.imageAlt}
                width={580}
                height={580}
                loading="eager"
                className="h-full w-full -rotate-45 scale-[1.42] object-cover object-top"
              />
            </div>

            {/* Top Floating Stat Badge */}
            <div className="border-border/70 absolute left-0 top-6 flex items-center gap-2.5 rounded-card border bg-white/95 px-3.5 py-2.5 shadow-card backdrop-blur-sm sm:-left-4">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-surface-mint text-primary-dark">
                <GraduationCap className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="font-heading text-lg font-bold leading-none text-navy">
                  {site.hero.floatingBadges.topValue}
                </p>
                <p className="mt-0.5 text-[11px] font-medium text-ink-muted">
                  {site.hero.floatingBadges.topLabel}
                </p>
              </div>
            </div>

            {/* Bottom Floating Stat Badge */}
            <div className="border-border/70 absolute bottom-4 right-0 flex items-center gap-2.5 rounded-card border bg-white/95 px-3.5 py-2.5 shadow-card backdrop-blur-sm sm:-right-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-surface-blush text-accent-dark">
                <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="font-heading text-lg font-bold leading-none text-navy">
                  {site.hero.floatingBadges.bottomValue}
                </p>
                <p className="mt-0.5 text-[11px] font-medium text-ink-muted">
                  {site.hero.floatingBadges.bottomLabel}
                </p>
              </div>
            </div>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}

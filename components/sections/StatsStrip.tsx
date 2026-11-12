import React from 'react';
import { Award, Briefcase, Building2, Users } from 'lucide-react';
import { StatItem } from '@/lib/types';
import { AnimatedCounter, FadeInView } from '@/components/ui/MotionPrimitives';

const iconMap = {
  users: Users,
  award: Award,
  hospital: Building2,
  briefcase: Briefcase,
};

export function StatsStrip({ stats }: { stats: StatItem[] }) {
  return (
    <section aria-label="College Key Statistics" className="relative z-10 -mt-10 pb-8 md:pb-12">
      <div className="mx-auto max-w-container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {stats.map((stat, idx) => {
            const Icon = iconMap[stat.iconName];
            return (
              <FadeInView key={stat.id} delay={idx * 0.06}>
                <div className="border-border/80 flex h-full flex-col justify-between rounded-card border border-b-[3px] border-b-primary bg-white p-6 shadow-card transition-shadow hover:shadow-card-hover">
                  <div className="flex items-start justify-between gap-2">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-surface-mint text-primary">
                      <Icon className="h-6 w-6" strokeWidth={1.6} aria-hidden="true" />
                    </span>
                  </div>
                  <div className="mt-4">
                    <p className="font-heading text-[32px] font-bold leading-none text-navy">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="mt-1.5 text-[13px] font-medium text-ink-muted">{stat.label}</p>
                  </div>
                </div>
              </FadeInView>
            );
          })}
        </div>
      </div>
    </section>
  );
}

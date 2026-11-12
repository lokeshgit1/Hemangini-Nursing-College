import React from 'react';
import Link from 'next/link';
import { ArrowRight, Clock, Users } from 'lucide-react';
import { Course } from '@/lib/types';

export function CourseCard({ course }: { course: Course }) {
  return (
    <article className="border-border/80 group flex h-full flex-col overflow-hidden rounded-card border bg-white p-4 shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-card-hover">
      <Link href={`/courses/${course.slug}/`} className="block overflow-hidden rounded-img">
        <div className="aspect-[16/10] w-full overflow-hidden bg-surface-grey">
          <img
            src={course.image}
            alt={course.imageAlt}
            width={640}
            height={400}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </Link>

      <div className="mt-4 flex flex-1 flex-col">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="rounded-full bg-surface-mint px-3 py-1 text-xs font-semibold text-primary-dark">
            {course.level}
          </span>
          <span className="inline-flex items-center gap-1 text-xs font-medium text-ink-muted">
            <Clock className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
            <span>{course.duration}</span>
          </span>
        </div>

        <h3 className="mt-3 font-heading text-lg font-semibold leading-snug text-navy md:text-xl">
          <Link
            href={`/courses/${course.slug}/`}
            className="transition-colors hover:text-primary-dark"
          >
            {course.title}
          </Link>
        </h3>

        <p className="mt-2 line-clamp-2 flex-1 text-[15px] leading-relaxed text-ink-muted">
          {course.shortDescription}
        </p>

        <div className="border-border/70 mt-4 flex items-center justify-between border-t pt-3.5">
          <span className="inline-flex items-center gap-1 text-xs font-medium text-ink-muted">
            <Users className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
            <span>{course.seats}</span>
          </span>
          <Link
            href={`/courses/${course.slug}/`}
            className="decoration-primary/40 inline-flex items-center gap-1 text-sm font-semibold text-primary-dark underline underline-offset-4 transition-colors hover:text-accent-dark"
          >
            <span>Learn More</span>
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </article>
  );
}

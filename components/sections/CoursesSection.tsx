import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Course } from '@/lib/types';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { FadeInView } from '@/components/ui/MotionPrimitives';
import { CourseCard } from '@/components/sections/CourseCard';

export function CoursesSection({ courses }: { courses: Course[] }) {
  return (
    <section className="bg-surface-mint py-14 md:py-24">
      <div className="mx-auto max-w-container px-4 md:px-6">
        <SectionHeader
          eyebrow="Academic Programmes"
          title="GNM & ANM Nursing Programmes"
          description="Focused diploma nursing education in General Nursing & Midwifery (GNM) and Auxiliary Nurse Midwifery (ANM), pairing classroom foundations with supervised hospital and community care."
        />

        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
          {courses.map((course, idx) => (
            <FadeInView key={course.slug} delay={idx * 0.08}>
              <CourseCard course={course} />
            </FadeInView>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/courses/"
            className="border-primary/30 inline-flex min-h-[48px] items-center justify-center gap-2 rounded-btn border bg-white px-7 py-3 text-[15px] font-semibold text-primary-dark shadow-soft transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary-dark hover:text-white"
          >
            <span>Compare GNM &amp; ANM Eligibility &amp; Syllabus</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

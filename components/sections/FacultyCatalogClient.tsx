'use client';

import React, { useMemo, useState } from 'react';
import { GraduationCap } from 'lucide-react';
import { FacultyMember } from '@/lib/types';
import { cn } from '@/lib/utils';

export function FacultyCatalogClient({ faculty }: { faculty: FacultyMember[] }) {
  const departments = useMemo(
    () => ['All', ...Array.from(new Set(faculty.map((f) => f.department)))],
    [faculty]
  );
  const [selectedDept, setSelectedDept] = useState('All');

  const filtered =
    selectedDept === 'All' ? faculty : faculty.filter((f) => f.department === selectedDept);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter faculty by role group">
        {departments.map((dept) => (
          <button
            key={dept}
            type="button"
            onClick={() => setSelectedDept(dept)}
            className={cn(
              'min-h-[40px] rounded-full px-4 py-2 text-xs font-semibold transition-colors sm:text-sm',
              selectedDept === dept
                ? 'bg-accent-dark text-white'
                : 'border border-border bg-white text-navy hover:bg-surface-mint'
            )}
          >
            {dept}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((member) => {
          const isPortrait = Boolean(member.image);
          return (
            <article
              key={member.id}
              className="flex flex-col overflow-hidden rounded-card border border-border bg-white shadow-card"
            >
              <div className="bg-surface-mint/45 relative flex items-center gap-4 border-b border-border p-5">
                {isPortrait && member.image ? (
                  <img
                    src={member.image}
                    alt={`${member.name} — ${member.designation}`}
                    width={84}
                    height={84}
                    loading="lazy"
                    className="h-20 w-20 shrink-0 rounded-full border-2 border-white object-cover object-top shadow-soft"
                  />
                ) : (
                  <span className="inline-flex h-20 w-20 shrink-0 items-center justify-center rounded-full border-2 border-white bg-navy font-heading text-xl font-bold text-white shadow-soft">
                    {member.initials ||
                      member.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')
                        .slice(0, 2)
                        .toUpperCase()}
                  </span>
                )}

                <div className="min-w-0">
                  <span className="inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-0.5 text-[11px] font-semibold text-primary-dark shadow-soft">
                    <GraduationCap className="h-3 w-3" aria-hidden="true" />
                    <span>{member.department}</span>
                  </span>
                  <h2 className="mt-2 font-heading text-lg font-semibold leading-snug text-navy">
                    {member.name}
                  </h2>
                  <p className="text-sm font-medium text-accent-dark">{member.designation}</p>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <dl className="space-y-2.5 text-xs text-ink-muted">
                  <div>
                    <dt className="font-semibold text-navy">Highest Qualification</dt>
                    <dd>{member.qualification}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-navy">Role</dt>
                    <dd>{member.experience}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-navy">Focus Areas</dt>
                    <dd>{member.specialization}</dd>
                  </div>
                </dl>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

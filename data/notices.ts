import { NoticeItem } from '@/lib/types';

export const noticesData: NoticeItem[] = [
  {
    id: 'not-1',
    title: 'Admissions Open for Academic Session 2026–27 (GNM & ANM)',
    date: '2026-10-15',
    category: 'Admissions',
    summary:
      'Applications and prospectus downloads are open for the upcoming nursing academic intake. Eligible 10+2 candidates may submit pre-admission forms or visit the counselling desk.',
    downloadUrl: '/downloads/prospectus.pdf',
    isNew: true,
    confirm: false,
  },
  {
    id: 'not-2',
    title: 'Revised Fee Schedule & Scholarship Document Submission Timeline',
    date: '2026-10-08',
    category: 'Scholarships',
    summary:
      'Students applying for State Post-Matric Scholarship schemes are advised to collect their fee structure certificate and bonafide verification from the Accounts Desk.',
    downloadUrl: '/downloads/fee-structure.pdf',
    isNew: true,
    confirm: false,
  },
  {
    id: 'not-3',
    title: 'Hospital Clinical Posting Roster — Winter Term 2026',
    date: '2026-09-25',
    category: 'Circulars',
    summary:
      'Updated morning shift clinical schedules and uniform checklist for GNM and ANM batches posted to affiliated clinical wards.',
    downloadUrl: '/downloads/admission-form.pdf',
    isNew: false,
    confirm: false,
  },
  {
    id: 'not-4',
    title: 'University Practical & OSCE Examination Schedule Announcement',
    date: '2026-09-12',
    category: 'Examinations',
    summary:
      'Internal OSCE lab assessments and viva dates prior to annual university practical examinations. Attendance clearance ≥ 80% is mandatory.',
    isNew: false,
    confirm: false,
  },
  {
    id: 'not-5',
    title: 'Annual Lamp Lighting & Florence Nightingale Oath Ceremony Invitation',
    date: '2026-08-29',
    category: 'Events',
    summary:
      'Parents and guardians of the incoming nursing batch are cordially invited to the induction and oath ceremony at the college auditorium.',
    isNew: false,
    confirm: false,
  },
];

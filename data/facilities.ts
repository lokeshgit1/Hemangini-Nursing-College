import { FacilityItem } from '@/lib/types';

export const facilitiesData: FacilityItem[] = [
  {
    id: 'nursing-foundation-lab',
    title: 'Nursing Foundation & Simulation Lab',
    category: 'Laboratories',
    shortDescription:
      'Hospital-grade beds, CPR/BLS trainers, IV cannulation arms, and OSCE stations for hands-on skill mastery before ward entry.',
    details:
      'Designed as a realistic 15-bed clinical mock ward, our Nursing Foundation Laboratory equips first-year students to practise vital signs, sterile dressing, catheterisation, injection safety, and resuscitation under faculty observation.',
    highlights: [
      'Adult & paediatric CPR/BLS training manikins',
      'Sterile procedure & medication administration carts',
      'Audio-visual demonstration monitors for small groups',
    ],
    image: '/images/skills-lab.jpg',
    imageAlt:
      'Nursing students practising clinical procedures with an instructor inside the Nursing Foundation Lab',
  },
  {
    id: 'hospital-clinical-training',
    title: 'Affiliated Multi-Specialty Hospital Rotations',
    category: 'Clinical',
    shortDescription:
      'Structured ward, ICU, OT, NICU, and maternity rotations with dedicated college clinical instructors.',
    details:
      'Clinical practice is the heart of nursing education. Students rotate across general medical-surgical wards, critical care units, labour rooms, operation theatres, and outpatient clinics with daily logbook sign-offs.',
    highlights: [
      'Supervised morning & afternoon clinical shifts',
      'Exposure to ICU, NICU, Dialysis, Emergency & OT units',
      'College buses for off-campus community & specialty rotations',
    ],
    image: '/images/clinical-training.jpg',
    imageAlt:
      'Student nurses reviewing bedside patient charts in a clean multi-specialty hospital ward',
  },
  {
    id: 'central-library',
    title: 'Central Library & Digital Nursing Resources',
    category: 'Academic',
    shortDescription:
      'Over 4,500+ nursing textbooks, reference volumes, national/international journals, and quiet computer workstations.',
    details:
      'Our sunlit library supports GNM and ANM coursework, OSCE prep, and clinical case studies with current INC-prescribed textbooks, peer-reviewed nursing journals, and e-library database terminals.',
    highlights: [
      '4,500+ textbooks and reference manuals',
      'E-journal access & research workstations with Wi-Fi',
      'Extended exam-season reading room hours',
    ],
    image: '/images/library.jpg',
    imageAlt:
      'Nursing students studying textbooks and digital journals in the sunlit college library',
  },
  {
    id: 'mch-anatomy-labs',
    title: 'Anatomy, Physiology & MCH / OBG Labs',
    category: 'Laboratories',
    shortDescription:
      'Dedicated anatomical models, skeletons, obstetric pelvis simulators, and newborn care stations.',
    details:
      'Separate subject laboratories for Anatomy & Physiology, Maternal & Child Health (OBG), Nutrition & Dietetics, and Community Health Nursing enable practical demonstrations tailored to each semester.',
    highlights: [
      'Full-scale anatomical models & histology microscopes',
      'Birthing & neonatal resuscitation trainers',
      'Community health bag kits & nutrition kitchen setup',
    ],
    image: '/images/community-camp.jpg',
    imageAlt: 'Nursing students conducting community health and maternal care education',
  },
  {
    id: 'girls-hostel',
    title: 'Safe Residential Hostel & Dining',
    category: 'Campus Life',
    shortDescription:
      'On-campus accommodation with 24×7 security, resident wardens, study rooms, and balanced hygienic meals.',
    details:
      'Designed to give outstation families peace of mind, our residential hostel offers well-ventilated shared rooms, RO drinking water, solar hot water, backup power, and caring resident wardens.',
    highlights: [
      '24×7 CCTV perimeter & female warden supervision',
      'Nutritious vegetarian mess & recreation common room',
      'Immediate campus medical & emergency hospital access',
    ],
    image: '/images/campus-building.jpg',
    imageAlt: 'Modern academic and residential nursing college building surrounded by greenery',
  },
  {
    id: 'auditorium-seminar',
    title: 'Auditorium, Smart Classrooms & Transport',
    category: 'Campus Life',
    shortDescription:
      'Projector-equipped lecture halls, seminar auditorium for workshops, cafeteria, and college bus connectivity.',
    details:
      'Bright, spacious classrooms support interactive case discussions, OSCE briefings, and visiting specialist lectures, while college transport ensures reliable daily commutes to clinical sites.',
    highlights: [
      'Audio-visual smart lecture halls as per INC norms',
      '300-seat auditorium for Lamp Lighting & CMEs',
      'Clean student cafeteria & dedicated bus routes',
    ],
    image: '/images/lamp-ceremony.jpg',
    imageAlt:
      'Nursing students taking part in the traditional Lamp Lighting Ceremony in the college auditorium',
  },
];

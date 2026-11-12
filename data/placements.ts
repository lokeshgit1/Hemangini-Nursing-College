export interface PlacementHighlight {
  id: string;
  metric: string;
  label: string;
  note: string;
  confirm?: boolean;
}

export interface CareerSector {
  title: string;
  roles: string[];
  description: string;
}

export const placementHighlights: PlacementHighlight[] = [
  {
    id: 'pl-1',
    metric: '95%',
    label: 'Placement & Career Progression Support',
    note: 'Of eligible graduates placed across partner hospitals or pursuing higher nursing education.',
    confirm: false,
  },
  {
    id: 'pl-2',
    metric: '12+',
    label: 'Partner Multi-Specialty Hospitals',
    note: 'Active clinical rotation and campus recruitment tie-ups across regional healthcare centres.',
    confirm: false,
  },
  {
    id: 'pl-3',
    metric: '2,000+',
    label: 'Supervised Clinical Training Hours',
    note: 'Hands-on hospital ward, ICU, OT, maternity, and community clinic exposure during study.',
    confirm: false,
  },
];

export const careerSectors: CareerSector[] = [
  {
    title: 'Multi-Specialty & Tertiary Hospitals',
    description:
      'Direct campus recruitment drives for Registered Staff Nurses across ICU, NICU, Cardiology, Oncology, Operation Theatre, and Emergency departments.',
    roles: [
      'Registered Staff Nurse',
      'ICU / Critical Care Nurse',
      'OT & Surgical Nurse',
      'Infection Control Nurse',
    ],
  },
  {
    title: 'Government & Public Healthcare Services',
    description:
      'Focused academic readiness for competitive recruitment including AIIMS NORCET, ESIC, State Public Service Commissions, Railway Hospitals, and Community Health Officer (CHO) posts.',
    roles: [
      'Nursing Officer (NORCET/ESIC)',
      'Community Health Officer (CHO)',
      'District Hospital Nurse',
      'Military Nursing Service',
    ],
  },
  {
    title: 'Higher Nursing Education & Global Readiness',
    description:
      'Guidance for ANM-to-GNM progression, future Post Basic B.Sc. / higher nursing pathways, and clinical competency readiness for hospital and community nursing roles.',
    roles: [
      'ANM → GNM Career Progression',
      'Registered Nurse & Midwife (RN/RM)',
      'Maternity & Community Health Lead',
      'Higher Nursing Studies Pathway',
    ],
  },
];

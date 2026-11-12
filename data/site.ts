import { SiteConfig } from '@/lib/types';

/**
 * Centralised editable college configuration.
 * All institutional, trust, infrastructure, safety clearance, contact,
 * course, and leadership details confirmed by Hemangini Nursing College.
 */
export const siteConfig: SiteConfig = {
  name: 'Hemangini Nursing College',
  shortName: 'Hemangini Nursing',
  tagline: 'Compassionate care shaped by clinical skill, ethics, and academic discipline.',
  description:
    'Hemangini Nursing College (Main Road, Itamati, Nayagarh, Odisha — Est. 2025) under Jyoti Shyam Welfare Trust offers GNM and ANM nursing education with modern simulation labs and clinical training.',
  city: 'Itamati, Nayagarh',
  state: 'Odisha',
  address: 'Main Road, At/Post/Via: Itamati, Dist: Nayagarh, Odisha – 752068',
  phone: '+91 94394 96540',
  alternatePhone: '+91 94370 92666',
  admissionsPhone: '+91 94394 96540',
  whatsappNumber: '919439496540',
  whatsappPrefill:
    'Hello Hemangini Nursing College Admissions Desk (Itamati, Nayagarh), I would like information regarding GNM / ANM admissions.',
  email: 'jyotishyamwelfare@gmail.com',
  admissionsEmail: 'jyotishyamwelfare@gmail.com',
  officeHours: 'Monday – Saturday, 9:00 AM to 5:00 PM',
  admissionYear: '2026–27',
  applicationLinks: {
    googleFormUrl: '/contact/',
    prospectusPdf: '/downloads/prospectus.pdf',
    admissionFormPdf: '/downloads/admission-form.pdf',
    feeStructurePdf: '/downloads/fee-structure.pdf',
  },
  mapEmbedUrl: 'https://www.google.com/maps?q=Itamati,Nayagarh,Odisha,752068&output=embed',
  mapDirectionsUrl: 'https://maps.google.com/?q=Itamati,Nayagarh,Odisha,752068',
  socials: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    youtube: 'https://youtube.com',
    linkedin: 'https://linkedin.com',
  },
  hero: {
    eyebrow: 'NURSING EDUCATION IN ITAMATI, NAYAGARH, ODISHA',
    headline: 'Care. Learn. Lead.',
    subheadline:
      'Begin your nursing career in Nayagarh with structured GNM & ANM training, dedicated B.Sc. Nursing lecturers, a 32,496 sq. ft. campus, and clinical permission for practical postings.',
    primaryCta: 'Explore Courses',
    secondaryCta: 'Book Campus Visit',
    image: '/images/hero-student.jpg',
    imageAlt:
      'Smiling nursing student in teal and white uniform carrying a clinical clipboard inside a sunlit nursing college corridor',
    floatingBadges: {
      topValue: 'Est. 2025',
      topLabel: 'Itamati, Nayagarh',
      bottomValue: '32,496 sq.ft',
      bottomLabel: 'SPA & Safety Cleared',
    },
  },
  stats: [
    {
      id: 'established',
      value: 2025,
      suffix: '',
      label: 'Established Year',
      iconName: 'award',
      confirm: false,
    },
    {
      id: 'students',
      value: 60,
      suffix: ' Seats',
      label: 'ANM Annual Intake (2026–27)',
      iconName: 'users',
      confirm: false,
    },
    {
      id: 'campus',
      value: 32496,
      suffix: '',
      label: 'Total Campus Area (Sq. Ft.)',
      iconName: 'hospital',
      confirm: false,
    },
    {
      id: 'faculty',
      value: 10,
      suffix: '+',
      label: 'Academic & Lab Staff',
      iconName: 'briefcase',
      confirm: false,
    },
  ],
  approvals: [
    {
      id: 'onmrc',
      title: 'Odisha Nurses & Midwives Council',
      authority: 'New NOC Application (Session 2026–27)',
      regNumber: 'ANM Intake: 60 Seats (2026–27)',
      status: 'NOC Applied (2026–27)',
      confirm: false,
    },
    {
      id: 'clinical',
      title: 'Clinical & Hospital Permission',
      authority: 'Concerned Authority & Affiliated Hospital',
      regNumber: 'Clinical Permission: Yes • Consent Obtained',
      status: 'Hospital Consent Verified',
      confirm: false,
    },
    {
      id: 'safety',
      title: 'Campus & Safety Clearances',
      authority: 'SPA Approved • Registered Architect',
      regNumber: 'Fire & Pollution Clearances Verified',
      status: 'Verified Clearances',
      confirm: false,
    },
    {
      id: 'trust',
      title: 'Jyoti Shyam Welfare (Trust)',
      authority: 'Registered under Trust Act, Bhubaneswar',
      regNumber: 'Reg. No. 41132401995 (Est. 2012)',
      status: 'Registered Promoter Trust',
      confirm: false,
    },
  ],
  whyChoose: [
    {
      id: 'faculty',
      title: 'Dedicated Nursing Leadership & Faculty',
      description:
        'Led by Principal Salla Bhavani, Vice-Principal Sidheswar Satapathy, and 6 B.Sc. Nursing lecturers.',
      iconName: 'graduation',
      tint: 'teal',
    },
    {
      id: 'hospital',
      title: 'Approved Clinical Permission',
      description:
        'Clinical training permission obtained from concerned authorities with affiliated hospital consent for practical care.',
      iconName: 'stethoscope',
      tint: 'pink',
    },
    {
      id: 'campus',
      title: '30,542 Sq. Ft. Built-Up Academic Block',
      description:
        'SPA-approved building on Main Road, Itamati with Architect Completion, Fire, and Pollution clearances.',
      iconName: 'home',
      tint: 'sun',
    },
    {
      id: 'labs',
      title: 'Dedicated Labs & Lab Assistants',
      description:
        'Supported by 2 dedicated B.Sc. Lab Assistants across Nursing Foundation, Anatomy, MCH, and Nutrition labs.',
      iconName: 'microscope',
      tint: 'blue',
    },
    {
      id: 'scholarship',
      title: 'Transparent Fees & Scholarship Guidance',
      description:
        'Clear annual fee guidance and documentation support for eligible Odisha state and central scholarship schemes.',
      iconName: 'wallet',
      tint: 'mint',
    },
    {
      id: 'placement',
      title: 'Career & Hospital Readiness',
      description:
        'Clinical attendance monitoring, OSCE skill assessments, and guidance for hospital and community health roles.',
      iconName: 'heartHandshake',
      tint: 'cream',
    },
  ],
  journeySteps: [
    {
      step: 'Step 01',
      title: 'Enquire & Counsel',
      description:
        'Submit the short enquiry form or call +91 94394 96540 to discuss GNM & ANM eligibility and campus facilities.',
      iconName: 'messageSquare',
      bgClass: 'bg-surface-sun',
    },
    {
      step: 'Step 02',
      title: 'Apply & Submit Documents',
      description:
        'Download the admission form PDF or fill our online application link with 10+2 marksheets and ID proofs.',
      iconName: 'fileCheck',
      bgClass: 'bg-surface-grey',
    },
    {
      step: 'Step 03',
      title: 'Verification & Fee Payment',
      description:
        'Complete merit/counselling verification at our Itamati campus, review the fee schedule, and confirm your seat.',
      iconName: 'creditCard',
      bgClass: 'bg-surface-blush',
    },
    {
      step: 'Step 04',
      title: 'Start Clinical Training',
      description:
        'Attend orientation, receive your clinical kit, and begin supervised nursing labs and hospital rotations.',
      iconName: 'activity',
      bgClass: 'bg-surface-mint',
    },
  ],
  admissionDates: [
    {
      event: 'Issue of Application Forms & Prospectus',
      date: 'May 01, 2026',
      status: 'Open',
      confirm: false,
    },
    {
      event: 'Last Date for Application Submission (Round 1)',
      date: 'July 15, 2026',
      status: 'Upcoming',
      confirm: false,
    },
    {
      event: 'Document Verification & Merit Counselling',
      date: 'July 25 – August 05, 2026',
      status: 'Scheduled',
      confirm: false,
    },
    {
      event: 'Orientation & Lamp Lighting Induction',
      date: 'September 01, 2026',
      status: 'Scheduled',
      confirm: false,
    },
  ],
  documentsChecklist: [
    'Class 10 (SSC) Marksheet & Passing Certificate (Original + 2 photocopies)',
    'Class 12 (HSC / 10+2) Marksheet & Passing Certificate (Original + 2 photocopies)',
    'Transfer Certificate / School Leaving Certificate & Migration Certificate (if applicable)',
    'Aadhaar Card or Government Photo Identity Proof',
    'Medical Fitness Certificate from a Registered Medical Practitioner',
    'Caste / Category & Income Certificate (for reserved category / scholarship applicants)',
    '6 Recent Passport-size Colour Photographs',
  ],
  about: {
    establishedYear: '2025',
    trustName: 'Jyoti Shyam Welfare (Registered under Trust Act)',
    vision:
      'To nurture ethically grounded, clinically skilled nursing professionals who deliver compassionate, evidence-based patient care across Nayagarh, Odisha, and beyond.',
    mission: [
      'Deliver competency-driven GNM and ANM nursing education combining classroom foundations with supervised bedside training.',
      'Cultivate empathy, patient safety, teamwork, and lifelong learning among every student nurse.',
      'Partner with multi-specialty and community hospitals to bridge academic theory and real-world healthcare delivery.',
      'Maintain transparent governance, safe facilities with Fire & Pollution clearances, and inclusive opportunities for aspiring students.',
    ],
    principalName: 'Salla Bhavani',
    principalQualification: 'B.Sc. Nursing',
    principalImage: '/images/leader-principal.jpg',
    principalMessage:
      'Nursing is both a science of precision and an art of human compassion. At Hemangini Nursing College, every student is mentored individually—from their first procedure in our Nursing Foundation Lab to supervised ward rotations—so they step into clinical care with confidence and integrity.',
    vicePrincipalName: 'Sidheswar Satapathy',
    vicePrincipalQualification: 'B.Sc. Nursing',
    vicePrincipalImage: '/images/leader-vice-principal.jpg',
    chairmanName: 'Sunjeet Roshan Pattanaik',
    chairmanPhone: '+91 99370 65019',
    chairmanImage: '/images/leader-chairperson.jpg',
    chairmanMessage:
      'Under Jyoti Shyam Welfare, we established Hemangini Nursing College in Itamati, Nayagarh in 2025 with a clear purpose: families in our region deserve accessible, transparent, high-integrity nursing education backed by dedicated faculty and compliant campus infrastructure.',
    secretaryName: 'Sishira Kumar Pattanaik',
    secretaryPhone: '+91 94394 96540',
    secretaryImage: '/images/leader-secretary.jpg',
    authorisedRepresentative: 'Sishira Kumar Pattanaik',
    contactPersonName: 'Sishira Kumar Pattanaik',
  },
  disclosure: {
    trustRegistrationNo: '41132401995',
    trustRegisteredYear: '2012',
    trustRegisteredAt: 'Bhubaneswar',
    universityAffiliation:
      'Odisha Nurses & Midwives Registration Council (ONMRC) — Session 2026–27 NOC Application',
    incCode: 'Indian Nursing Council (INC) Norms Compliant • Details at College Office',
    stateCouncilCode: 'ONMRC Affiliation & Inspection Record (Session 2026–27)',
    landArea: '32,496 Sq. Ft. (Main Road, Itamati, Nayagarh)',
    builtUpArea: '30,542 Sq. Ft.',
    buildingApproval:
      'Approved by SPA (Special Planning Authority) • Registered Architect Completion Certificate',
    clearances: [
      'Building Plan Approved by SPA',
      'Building Completion Certificate from Registered Architect',
      'Fire Clearance Certificate Obtained',
      'Pollution Clearance Certificate Obtained',
      'Clinical Permission Obtained from Concerned Authority (Yes)',
      'Consent Letter from Affiliated Hospital for Practical Training Uploaded',
    ],
    parentHospitalBeds:
      'Clinical Permission Obtained • Affiliated Hospital Consent Letter on Record',
    staffSummary:
      'Principal (1), Vice-Principal (1), Lecturers (6 — B.Sc. Nursing), Lab Assistants (2 — B.Sc.), Administrative & Campus Support Staff (4)',
    antiRaggingHelpline: '1800-180-5522 (National Anti-Ragging Helpline)',
    nodalOfficerPhone: '+91 94394 96540',
    nodalOfficerEmail: 'jyotishyamwelfare@gmail.com',
  },
};

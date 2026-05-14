export type Locale = 'id' | 'en';
export type Localized = { id: string; en: string };

export type Service = {
  slug: string;
  icon: string;
  title: Localized;
  short: Localized;
  description: Localized;
  bullets: Localized[];
  deliverables: Localized[];
  applications: string[];
  seoTitle: string;
  seoDescription: string;
};

export const siteConfig = {
  companyName: 'PT VPE',
  legalName: 'PT Velocity Power Engineering',
  headlineName: 'PT Velocity Power Engineering',
  brandLine: 'Rotating & Reverse Engineering Solution',
  tagline: 'Presisi dalam Kesempurnaan',
  url: 'https://www.velocitypowerengineering.com',
  phone: '0822 3313 1688',
  whatsapp: '6282233131688',
  email: 'admin@velocitypowerengineering.com',
  salesEmail: 'vpesales1@velocitypowerengineering.com',
  founded: '2025',
  locale: 'id_ID',
  description:
    'PT Velocity Power Engineering menyediakan rotating service, reverse engineering, refurbishment, measurement, plant inspection, consultant engineering, dan supply spare part untuk kebutuhan industri.',
  keywords: [
    'PT Velocity Power Engineering',
    'PT VPE',
    'rotating service',
    'reverse engineering',
    'turbine service',
    'pump repair',
    'compressor maintenance',
    'spare part supply',
    'refurbishment',
    'measurement service',
    'plant inspection',
    'ISO 9001',
    'ISO 14001',
    'ISO 45001'
  ],
  social: {
    youtube: 'https://www.youtube.com/watch?v=uWJ3vtU0OZQ',
    linkedin: '#',
    instagram: '#'
  }
};

export const offices = [
  {
    title: { id: 'Operational Office', en: 'Operational Office' },
    address:
      'Jl. Lap. Tembak, Blok H-4 Dusun Pesisir Sumberanyar, Kec. Paiton, Kab. Probolinggo, Provinsi Jawa Timur'
  },
  {
    title: { id: 'Workshop', en: 'Workshop' },
    address:
      'Jl. BKKBN No. 20 RT 002 RW 008, Kelurahan Mustika Jaya, Kecamatan Mustika Jaya Bekasi, Kota Bekasi, Provinsi Jawa Barat, Kode Pos: 17158'
  }
];

export const stats = [
  { label: { id: 'Established', en: 'Established' }, value: '2025' },
  { label: { id: 'Core Services', en: 'Core Services' }, value: '6+' },
  { label: { id: 'ISO Systems', en: 'ISO Systems' }, value: '3' },
  { label: { id: 'Service Model', en: 'Service Model' }, value: 'Workshop + Site' }
];

export const heroCopy = {
  eyebrow: { id: 'Industrial engineering partner', en: 'Industrial engineering partner' },
  title: {
    id: 'Rotating & Reverse Engineering for Industrial Reliability',
    en: 'Rotating & Reverse Engineering for Industrial Reliability'
  },
  description: {
    id: 'PT Velocity Power Engineering membantu plant, maintenance, dan procurement team menjaga performa critical rotating equipment melalui rotating service, refurbishment, measurement, plant inspection, reverse engineering, dan spare part supply yang terdokumentasi.',
    en: 'PT Velocity Power Engineering supports plant, maintenance, and procurement teams through rotating service, refurbishment, measurement, plant inspection, reverse engineering, and spare part supply for critical industrial assets.'
  }
};

export const aboutCopy = {
  overview: {
    id: 'PT Velocity Power Engineering berdiri pada 2025 dan berfokus pada rotating & reverse engineering service untuk meningkatkan efisiensi operasional, keandalan equipment, dan kesiapan material industri.',
    en: 'PT Velocity Power Engineering was established in 2025 and focuses on rotating & reverse engineering services to improve operational efficiency, equipment reliability, and industrial material readiness.'
  },
  vision: {
    id: 'Menjadi perusahaan terdepan dalam reverse engineering yang dikenal melalui inovasi, keandalan, dan kontribusi nyata terhadap kemajuan teknologi serta efisiensi industri.',
    en: 'To become a leading company in reverse engineering, recognized for innovation, reliability, and significant contributions to technological advancement and industrial efficiency.'
  },
  mission: [
    {
      id: 'Mengembangkan solusi reverse engineering yang inovatif dan sesuai kebutuhan klien.',
      en: 'Develop innovative reverse engineering solutions tailored to client needs.'
    },
    {
      id: 'Menjalankan pekerjaan dengan presisi tinggi, akurasi, dan kesesuaian terhadap standar internasional.',
      en: 'Execute work with high precision, accuracy, and alignment with international standards.'
    },
    {
      id: 'Mendukung analisis, improvement, dan product development melalui layanan engineering yang komprehensif.',
      en: 'Support analysis, improvement, and product development through comprehensive engineering services.'
    },
    {
      id: 'Meningkatkan kompetensi teknis melalui training, riset, dan pembaruan teknologi.',
      en: 'Enhance technical competence through training, research, and continuous technology updates.'
    },
    {
      id: 'Menjaga integritas, compliance, dan penghormatan terhadap hak kekayaan intelektual.',
      en: 'Maintain integrity, compliance, and respect for intellectual property rights.'
    },
    {
      id: 'Membangun partnership jangka panjang melalui komunikasi transparan dan layanan responsif.',
      en: 'Build long-term partnerships through transparent communication and responsive service.'
    }
  ]
};

export const values = [
  {
    title: { id: 'Innovation', en: 'Innovation' },
    description: {
      id: 'Continuous improvement dan teknologi engineering digunakan untuk mempercepat diagnosis serta meningkatkan kualitas solusi.',
      en: 'Continuous improvement and engineering technology are applied to accelerate diagnosis and improve solution quality.'
    }
  },
  {
    title: { id: 'Integrity', en: 'Integrity' },
    description: {
      id: 'Transparansi, akuntabilitas, dan etika kerja menjadi dasar hubungan dengan klien, partner, dan stakeholder.',
      en: 'Transparency, accountability, and ethical conduct form the basis of relationships with clients, partners, and stakeholders.'
    }
  },
  {
    title: { id: 'Customer Focus', en: 'Customer Focus' },
    description: {
      id: 'Setiap solusi disesuaikan dengan kebutuhan operasi, kondisi equipment, timeline, dan target reliability pelanggan.',
      en: 'Every solution is tailored to operational needs, equipment condition, timeline, and customer reliability targets.'
    }
  },
  {
    title: { id: 'Excellence', en: 'Excellence' },
    description: {
      id: 'Quality control, workmanship presisi, dan standar industri diterapkan untuk menjaga safety, reliability, dan efisiensi.',
      en: 'Quality control, precision workmanship, and industrial standards are applied to protect safety, reliability, and efficiency.'
    }
  }
];

export const services: Service[] = [
  {
    slug: 'rotating-service',
    icon: 'turbine',
    title: { id: 'Rotating Service', en: 'Rotating Service' },
    short: {
      id: 'Maintenance, repair, refurbishment, diagnostics, balancing, dan alignment untuk equipment kritikal.',
      en: 'Maintenance, repair, refurbishment, diagnostics, balancing, and alignment for critical equipment.'
    },
    description: {
      id: 'Layanan untuk turbine auxiliary, compressor, pump, fan, blower, gearbox, dan motor-driven equipment dengan fokus pada optimal performance, longevity, dan downtime prevention.',
      en: 'Service for turbine auxiliary, compressor, pump, fan, blower, gearbox, and motor-driven equipment with a focus on optimal performance, longevity, and downtime prevention.'
    },
    bullets: [
      { id: 'Inspection, disassembly, dan technical assessment', en: 'Inspection, disassembly, and technical assessment' },
      { id: 'Dynamic balancing dan precision alignment', en: 'Dynamic balancing and precision alignment' },
      { id: 'Repair, refurbishment, dan performance restoration', en: 'Repair, refurbishment, and performance restoration' },
      { id: 'QA/QC report dan readiness verification', en: 'QA/QC report and readiness verification' }
    ],
    deliverables: [
      { id: 'Inspection report', en: 'Inspection report' },
      { id: 'Balancing and alignment record', en: 'Balancing and alignment record' },
      { id: 'Repair recommendation', en: 'Repair recommendation' },
      { id: 'Completion report', en: 'Completion report' }
    ],
    applications: ['Turbine auxiliary', 'Pump system', 'Compressor train', 'Fan & blower', 'Gearbox assembly'],
    seoTitle: 'Rotating Service untuk Turbine, Pump, Compressor, Fan, dan Gearbox',
    seoDescription: 'PT VPE menyediakan rotating service, overhaul, balancing, alignment, repair, dan refurbishment untuk equipment kritikal industri.'
  },
  {
    slug: 'spare-part-supply',
    icon: 'supply',
    title: { id: 'Spare Part Supply', en: 'Spare Part Supply' },
    short: {
      id: 'Supply spare part dan consumable material sesuai spesifikasi teknis untuk mendukung operasi industri.',
      en: 'Spare part and consumable material supply according to technical specifications for industrial operations.'
    },
    description: {
      id: 'Pengadaan material, part replacement, dan komponen kritikal untuk mendukung maintenance, outage, refurbishment, dan reliability program.',
      en: 'Material sourcing, replacement parts, and critical components to support maintenance, outage, refurbishment, and reliability programs.'
    },
    bullets: [
      { id: 'Material sourcing and verification', en: 'Material sourcing and verification' },
      { id: 'Technical specification matching', en: 'Technical specification matching' },
      { id: 'Custom component support', en: 'Custom component support' },
      { id: 'Outage and maintenance readiness', en: 'Outage and maintenance readiness' }
    ],
    deliverables: [
      { id: 'Material list confirmation', en: 'Material list confirmation' },
      { id: 'Technical compliance sheet', en: 'Technical compliance sheet' },
      { id: 'Delivery status update', en: 'Delivery status update' },
      { id: 'Supporting documents', en: 'Supporting documents' }
    ],
    applications: ['Shutdown support', 'Routine replacement', 'Critical stocking', 'Procurement support'],
    seoTitle: 'Supply Spare Part Industri untuk Rotating Equipment',
    seoDescription: 'PT VPE menyediakan spare part supply dan consumable material untuk kebutuhan maintenance, outage, dan equipment reliability.'
  },
  {
    slug: 'refurbishment',
    icon: 'refurbish',
    title: { id: 'Refurbishment', en: 'Refurbishment' },
    short: {
      id: 'Restorasi komponen aus atau outdated agar kembali mencapai performa yang dibutuhkan operasi.',
      en: 'Restoration of worn or outdated components to reach the performance required by operations.'
    },
    description: {
      id: 'Refurbishment dilakukan melalui condition review, dimensional recovery, surface repair, verification, dan dokumentasi hasil untuk memperpanjang service life equipment.',
      en: 'Refurbishment is performed through condition review, dimensional recovery, surface repair, verification, and result documentation to extend equipment service life.'
    },
    bullets: [
      { id: 'Condition review and feasibility check', en: 'Condition review and feasibility check' },
      { id: 'Dimensional and surface recovery', en: 'Dimensional and surface recovery' },
      { id: 'Component repair and restoration', en: 'Component repair and restoration' },
      { id: 'Final verification and documentation', en: 'Final verification and documentation' }
    ],
    deliverables: [
      { id: 'Condition assessment', en: 'Condition assessment' },
      { id: 'Repair scope summary', en: 'Repair scope summary' },
      { id: 'Refurbishment record', en: 'Refurbishment record' },
      { id: 'Final verification note', en: 'Final verification note' }
    ],
    applications: ['Legacy components', 'Wear recovery', 'Asset life extension', 'Cost optimization'],
    seoTitle: 'Refurbishment Equipment dan Spare Part Industri',
    seoDescription: 'PT VPE membantu refurbishment komponen industri untuk memperpanjang usia pakai dan memulihkan performa equipment.'
  },
  {
    slug: 'measurements',
    icon: 'measure',
    title: { id: 'Measurements', en: 'Measurements' },
    short: {
      id: 'Laser scanning, 3D modeling, dan dimensional analysis untuk reverse engineering dan quality verification.',
      en: 'Laser scanning, 3D modeling, and dimensional analysis for reverse engineering and quality verification.'
    },
    description: {
      id: 'Measurement service memberikan data teknis yang akurat untuk membuat model, memverifikasi dimensi, mengidentifikasi deviasi, dan mendukung keputusan engineering.',
      en: 'Measurement service provides accurate technical data to create models, verify dimensions, identify deviations, and support engineering decisions.'
    },
    bullets: [
      { id: 'Laser scanning and digital capture', en: 'Laser scanning and digital capture' },
      { id: '3D modeling support', en: '3D modeling support' },
      { id: 'Dimensional inspection and verification', en: 'Dimensional inspection and verification' },
      { id: 'Deviation analysis for engineering decision', en: 'Deviation analysis for engineering decision' }
    ],
    deliverables: [
      { id: 'Measurement report', en: 'Measurement report' },
      { id: '3D/dimensional output', en: '3D/dimensional output' },
      { id: 'Deviation analysis', en: 'Deviation analysis' },
      { id: 'Engineering support data', en: 'Engineering support data' }
    ],
    applications: ['Reverse engineering', 'Part verification', 'Assembly checking', 'Refurbishment planning'],
    seoTitle: 'Measurement Service, Laser Scanning, dan 3D Modeling',
    seoDescription: 'Layanan measurement PT VPE mencakup laser scanning, 3D modeling, dimensional analysis, dan verifikasi komponen.'
  },
  {
    slug: 'consultant-engineering',
    icon: 'consult',
    title: { id: 'Consultant Engineering', en: 'Consultant Engineering' },
    short: {
      id: 'Technical advisory, troubleshooting, dan improvement recommendation untuk maintenance dan reliability.',
      en: 'Technical advisory, troubleshooting, and improvement recommendations for maintenance and reliability.'
    },
    description: {
      id: 'Konsultasi engineering membantu tim plant memahami root issue, menentukan prioritas tindakan, dan menyusun rekomendasi berbasis kondisi aktual equipment.',
      en: 'Engineering consultation helps plant teams understand root issues, prioritize actions, and develop recommendations based on actual equipment condition.'
    },
    bullets: [
      { id: 'Technical review and diagnosis', en: 'Technical review and diagnosis' },
      { id: 'Troubleshooting and reliability improvement', en: 'Troubleshooting and reliability improvement' },
      { id: 'Maintenance strategy support', en: 'Maintenance strategy support' },
      { id: 'Engineering recommendation', en: 'Engineering recommendation' }
    ],
    deliverables: [
      { id: 'Technical advisory note', en: 'Technical advisory note' },
      { id: 'Troubleshooting summary', en: 'Troubleshooting summary' },
      { id: 'Improvement recommendation', en: 'Improvement recommendation' },
      { id: 'Action plan outline', en: 'Action plan outline' }
    ],
    applications: ['Recurring failure', 'Reliability review', 'Maintenance planning', 'Performance improvement'],
    seoTitle: 'Consultant Engineering untuk Maintenance dan Reliability',
    seoDescription: 'PT VPE menyediakan consultant engineering untuk troubleshooting, reliability improvement, dan maintenance strategy.'
  },
  {
    slug: 'plant-inspection',
    icon: 'inspection',
    title: { id: 'Plant Inspection', en: 'Plant Inspection' },
    short: {
      id: 'Condition assessment melalui inspection, vibration analysis, thermographic review, dan failure assessment.',
      en: 'Condition assessment through inspection, vibration analysis, thermographic review, and failure assessment.'
    },
    description: {
      id: 'Plant inspection membantu mengidentifikasi potensi masalah sejak dini, menyusun prioritas corrective action, dan menjaga safety serta efficiency plant.',
      en: 'Plant inspection helps identify potential issues early, prioritize corrective actions, and maintain plant safety and efficiency.'
    },
    bullets: [
      { id: 'Visual and condition inspection', en: 'Visual and condition inspection' },
      { id: 'Vibration and thermographic assessment', en: 'Vibration and thermographic assessment' },
      { id: 'Issue identification and priority ranking', en: 'Issue identification and priority ranking' },
      { id: 'Corrective action recommendation', en: 'Corrective action recommendation' }
    ],
    deliverables: [
      { id: 'Inspection finding report', en: 'Inspection finding report' },
      { id: 'Condition summary', en: 'Condition summary' },
      { id: 'Priority recommendation', en: 'Priority recommendation' },
      { id: 'Corrective action input', en: 'Corrective action input' }
    ],
    applications: ['Routine inspection', 'Shutdown planning', 'Failure prevention', 'Safety and efficiency review'],
    seoTitle: 'Plant Inspection dan Condition Assessment Industri',
    seoDescription: 'PT VPE menyediakan plant inspection, condition assessment, vibration analysis, thermographic review, dan failure assessment.'
  }
];

export const technologyFeatures = [
  {
    title: { id: 'Digital Measurement', en: 'Digital Measurement' },
    description: {
      id: 'Laser scanning, dimensional analysis, dan 3D modeling untuk data engineering yang presisi.',
      en: 'Laser scanning, dimensional analysis, and 3D modeling for precise engineering data.'
    }
  },
  {
    title: { id: 'Condition Intelligence', en: 'Condition Intelligence' },
    description: {
      id: 'Vibration analysis, thermographic inspection, dan failure assessment untuk mendeteksi risiko lebih awal.',
      en: 'Vibration analysis, thermographic inspection, and failure assessment to detect risk earlier.'
    }
  },
  {
    title: { id: 'Reverse Engineering Workflow', en: 'Reverse Engineering Workflow' },
    description: {
      id: 'Capture, model, verify, refurbish, dan dokumentasi teknis dalam satu alur kerja yang terkendali.',
      en: 'Capture, model, verify, refurbish, and technical documentation in one controlled workflow.'
    }
  },
  {
    title: { id: 'Traceable Reporting', en: 'Traceable Reporting' },
    description: {
      id: 'Report pekerjaan memuat finding, verification, dan rekomendasi yang dapat digunakan untuk maintenance history serta procurement decision.',
      en: 'Work reports include findings, verification, and recommendations for maintenance history and procurement decisions.'
    }
  }
];

export const certifications = [
  {
    standard: 'ISO 45001:2018',
    title: { id: 'Occupational Health and Safety Management System', en: 'Occupational Health and Safety Management System' },
    image: '/certificates/iso-45001.webp',
    description: {
      id: 'Mendukung kontrol risiko K3 untuk aktivitas workshop, site service, dan pekerjaan engineering.',
      en: 'Supports occupational health and safety risk control for workshop, site service, and engineering activities.'
    }
  },
  {
    standard: 'ISO 9001:2015',
    title: { id: 'Quality Management System', en: 'Quality Management System' },
    image: '/certificates/iso-9001.webp',
    description: {
      id: 'Menegaskan sistem mutu, konsistensi proses, dan orientasi kepada kepuasan pelanggan.',
      en: 'Strengthens quality systems, process consistency, and customer satisfaction orientation.'
    }
  },
  {
    standard: 'ISO 14001:2015',
    title: { id: 'Environmental Management System', en: 'Environmental Management System' },
    image: '/certificates/iso-14001.webp',
    description: {
      id: 'Mendukung pengelolaan aspek lingkungan dalam kegiatan industri dan engineering.',
      en: 'Supports environmental aspect management in industrial and engineering activities.'
    }
  }
];

export const processSteps = [
  {
    title: { id: 'Assess', en: 'Assess' },
    description: {
      id: 'Menganalisis kondisi equipment, kebutuhan operasi, criticality, dan timeline pekerjaan.',
      en: 'Analyze equipment condition, operational needs, criticality, and work timeline.'
    }
  },
  {
    title: { id: 'Engineer', en: 'Engineer' },
    description: {
      id: 'Menyusun method, scope, measurement, material requirement, dan risk control.',
      en: 'Define methods, scope, measurements, material requirements, and risk controls.'
    }
  },
  {
    title: { id: 'Execute', en: 'Execute' },
    description: {
      id: 'Melaksanakan service, refurbishment, supply, atau inspection dengan kontrol kualitas yang rapi.',
      en: 'Execute service, refurbishment, supply, or inspection with disciplined quality control.'
    }
  },
  {
    title: { id: 'Verify', en: 'Verify' },
    description: {
      id: 'Melakukan verification, reporting, dan rekomendasi tindak lanjut untuk reliability improvement.',
      en: 'Perform verification, reporting, and follow-up recommendations for reliability improvement.'
    }
  }
];

export const industries = ['Power Generation', 'Oil & Gas Support', 'Petrochemical', 'Manufacturing', 'Utilities', 'Process Plant', 'EPC & Maintenance', 'General Industry'];

export const portfolioItems = [
  { title: 'Project & Service Portfolio', image: '/gallery/project-portfolio.webp' },
  { title: 'Procurement & Supply Gallery', image: '/gallery/gallery-1.webp' },
  { title: 'Machining & Component Work', image: '/gallery/gallery-2.webp' },
  { title: 'Rotating Equipment Service', image: '/gallery/gallery-3.webp' },
  { title: 'Site Execution & Team Activity', image: '/gallery/gallery-4.webp' },
  { title: 'Workshop Activity', image: '/gallery/workshop.webp' }
];

export const profileAssets = [
  { title: 'Company Profile Cover', image: '/company-profile/cover.webp' },
  { title: 'About PT VPE', image: '/company-profile/about.webp' },
  { title: 'Vision & Mission', image: '/company-profile/vision-mission.webp' },
  { title: 'Corporate Values', image: '/company-profile/corporate-values.webp' },
  { title: 'Why Choose PT VPE', image: '/company-profile/why-choose.webp' },
  { title: 'Our Team', image: '/company-profile/team.webp' }
];

export const team = [
  'Rovita Yuni Hasanah — Director',
  'Helilatul Hayati, S.Pd. — Commissioner',
  'Ira Dwi Novianty, S.H. — Procurement Manager',
  'Chusnul Agustini Putri, S.Tr.T — Finance Manager',
  'Mohammad Fachrur Rozy, S.Pt. — Project Manager',
  'Heny Wahyudi, ST — SPV. Technician 1',
  'Agung Baharuddin, ST — SPV. Technician 2'
];

export const faqs = [
  {
    question: { id: 'Apakah PT VPE melayani pekerjaan on-site?', en: 'Does PT VPE provide on-site service?' },
    answer: {
      id: 'Ya. PT VPE mendukung pekerjaan workshop dan on-site sesuai scope, tingkat urgensi, akses equipment, dan kebutuhan safety permit.',
      en: 'Yes. PT VPE supports workshop and on-site work based on scope, urgency, equipment access, and safety permit requirements.'
    }
  },
  {
    question: { id: 'Apa fokus utama layanan PT VPE?', en: 'What are PT VPE’s main services?' },
    answer: {
      id: 'Rotating service, reverse engineering, spare part supply, refurbishment, measurements, consultant engineering, dan plant inspection.',
      en: 'Rotating service, reverse engineering, spare part supply, refurbishment, measurements, consultant engineering, and plant inspection.'
    }
  },
  {
    question: { id: 'Apakah layanan dapat disesuaikan dengan kondisi plant?', en: 'Can the service be tailored to plant conditions?' },
    answer: {
      id: 'Ya. Scope dapat disesuaikan dengan kondisi equipment, timeline shutdown, target reliability, dan kebutuhan dokumentasi klien.',
      en: 'Yes. The scope can be tailored to equipment condition, shutdown timeline, reliability target, and client documentation requirements.'
    }
  }
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function text(value: Localized, locale: Locale) {
  return value[locale];
}

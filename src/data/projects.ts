import type { Project } from '../types/portfolio';

export const PROJECTS: Project[] = [
  {
    id: 'wasl',
    number: '01',
    title: 'WASL',
    client: 'WASL · Dubai, UAE',
    location: 'Dubai, UAE',
    category: 'Real Estate / Hospitality / Enterprise',
    year: '2022 – 2023',
    platform: 'Web Portal, Tenant Mobile App, Leasing Enterprise CRM',
    role: 'Lead UI/UX Designer',
    description:
      'Owned the end-to-end product design process, defining information architecture and user flows, developing wireframes and high-fidelity UI designs, and delivering production-ready designs for developer handoff.',
    tags: [
      'UX Strategy',
      'Information Architecture',
      'Wireframing',
      'UI Design',
      'Prototyping'
    ],
    layoutSize: 'standard',
    mockupType: 'portal',
    shortCategory: 'Real Estate-Enterprise',
    backdropColor: 'from-[#d97706] via-[#b45309] to-[#78350f]',
    imageUrl: '/images/projects/wasl/WaslCover.png',
    externalUrl: 'https://www.behance.net/gallery/216491701/Real-Estate-UI-UX-Case-Study-Mobile-App',
    metrics: [
      { label: 'Portfolio Managed', value: '50,000+ Units' },
      { label: 'Leasing Speed', value: '4x Faster Signings' },
      { label: 'Digital Payments', value: '92% Adoption' }
    ],
    caseStudy: {
      overview:
        'WASL is one of Dubai’s premier government-backed real estate development and asset management conglomerates, managing over 50,000 residential, commercial, and hospitality units. The goal was to build a next-generation tenant portal and enterprise leasing dashboard to digitize the entire rental lifecycle from virtual viewing to Ejari contract renewal.',
      industry: 'Real Estate Asset Management & Hospitality',
      role: 'End-to-End Product Designer',
      platform: 'Responsive Web Portal, iOS & Android Tenant App, Enterprise Management Suite',
      challenge:
        'Traditional property leasing in Dubai involved extensive paperwork, physical cheques, and manual in-person visits to management offices. The platform needed to simplify complex tenancy laws, digital contract signing (UAEPASS / DocuSign), and online multi-cheque direct debit payments.',
      approach:
        'Mapped customer journey from discovery to move-out. Designed an intuitive property search engine with 3D floor plan explorer, digital tenancy contract workflow, and instant maintenance ticketing system.',
      informationArchitecture: {
        title: 'Dual-Engine Real Estate Architecture',
        description:
          'Integrated public consumer property discovery with authenticated tenant services and enterprise agent management.',
        pillars: [
          {
            title: 'Interactive Unit Explorer',
            points: [
              'Search by community, budget, unit configuration, and proximity to Dubai Metro.',
              'Interactive floor plans with real-time vacancy indicators and sunlight orientation.'
            ]
          },
          {
            title: 'Self-Service Tenant Dashboard',
            points: [
              'One-click contract renewal and Ejari integration with Dubai Land Department.',
              'Maintenance request tracker with photo upload and technician GPS tracking.'
            ]
          }
        ]
      },
      userFlows: {
        title: 'Digital Tenancy Renewal Flow',
        description:
          'Eliminated the need for tenants to visit physical customer care centers.',
        steps: [
          {
            stage: 'Renewal Notification',
            action: 'Tenant receives automated renewal terms with RERA rent index calculator.',
            outcome: 'Tenant reviews revised rent and terms.'
          },
          {
            stage: 'Payment Setup',
            action: 'Tenant selects installment plan (1 to 4 cheques / direct debit).',
            outcome: 'Digital direct debit mandate authorized via central bank API.'
          },
          {
            stage: 'Contract Signing & Ejari',
            action: 'Tenant signs lease digitally with UAE Pass.',
            outcome: 'Instant official Ejari certificate issued and stored in profile.'
          }
        ]
      },
      wireframes: {
        description:
          'Created detailed wireframes validating complex multi-step financial payment schedules and maintenance ticket states.',
        highlights: [
          'High-conversion property filter drawer with instant unit availability counts.',
          'Visual payment schedule breakdown displaying upcoming automated debits.'
        ]
      },
      designSystem: {
        summary:
          'Designed "WASL Design System" incorporating refined luxury typography, clean architectural photography containers, and accessible form controls.',
        components: [
          'Property Listing Card with image carousel and key amenity badges',
          'Rent Calculator & Installment Breakdown Widget',
          'Maintenance SLA Tracker with live stage progress bar',
          'Document Vault with encrypted lease storage'
        ],
        tokens: [
          { category: 'Typography', value: 'Filson Pro & Inter' },
          { category: 'Palette', value: 'Warm Sand Gray, Deep Charcoal, Gold Accent, Clean White' }
        ]
      },
      visualDesign: {
        philosophy:
          'Sophisticated, modern, architectural, and reliable. Reflecting Dubai’s world-class real estate standards with crisp typography and subtle micro-interactions.',
        keyDecisions: [
          'Used generous whitespace and large property photography to create a premium feel.',
          'Subtle borders and clean monochromatic UI allow unit photos to pop.'
        ]
      },
      keyScreens: {
        title: 'Key Product Screens',
        description: 'Selected interfaces across web and mobile apps.',
        screens: [
          {
            title: 'Tenant Service Portal',
            description: 'Clean overview showing active lease days remaining, upcoming payments, and open requests.',
            type: 'dashboard'
          },
          {
            title: 'Mobile Maintenance Dispatch',
            description: 'Tenant app interface to report plumbing/electrical issues with photo attachment.',
            type: 'mobile'
          },
          {
            title: 'Enterprise Leasing Agent CRM',
            description: 'High-density backend for leasing agents to manage unit viewings and draft agreements.',
            type: 'table'
          }
        ]
      },
      outcomeImpact: [
        'Digitized 92% of all lease renewals across 50,000+ units, cutting branch footfall by 80%.',
        'Decreased maintenance turnaround resolution time from 5 days to under 24 hours.',
        'Increased online rental inquiry conversions by 44% in the first two quarters.'
      ],
      learnings: [
        'Real estate apps succeed when legal jargon is translated into transparent payment steps and clear financial timelines.',
        'High-density backend tools require separate ergonomics from consumer-facing mobile apps.'
      ]
    }
  },
  {
    id: 'stride-learning',
    number: '02',
    title: 'Stride Learning',
    client: 'Stride Learning · US',
    location: 'United States',
    category: 'EdTech / Learning Platform',
    year: '2022 – 2023',
    platform: 'Web Learning Portal, Educator Dashboard, Student Mobile App',
    role: 'Lead UI/UX Designer',
    description:
      'Redesigned complex learning dashboards and digital products across web and mobile platforms, simplifying information-heavy workflows through improved UX architecture and modern UI design.',
    tags: [
      'EdTech',
      'Dashboard',
      'Mobile',
      'Web',
      'UX',
      'UI'
    ],
    layoutSize: 'standard',
    mockupType: 'edtech',
    shortCategory: 'EdTech-Platform',
    backdropColor: 'from-[#0284c7] via-[#1d4ed8] to-[#1e1b4b]',
    imageUrl: '/images/projects/stride-learning/StrideCover.png',
    externalUrl: 'https://www.behance.net/gallery/215182531/UX-Case-Study-Education-Platform',
    metrics: [
      { label: 'Student Engagement', value: '1.5M+ K-12 Learners' },
      { label: 'Completion Rate', value: '+28% Increase' },
      { label: 'Educator Time Saved', value: '6 hrs/week in grading' }
    ],
    caseStudy: {
      overview:
        'Stride Learning (formerly K12 Inc.) is one of the largest online education and blended learning providers in the US, powering virtual curricula for K-12 students, school districts, teachers, and parents.',
      industry: 'EdTech / Virtual Education & Curriculum Management',
      role: 'Lead Product Designer',
      platform: 'Responsive Web Learning Management System & Companion Mobile App',
      challenge:
        'The legacy learning management system was cluttered with decades of feature bloat, confusing gradebooks, scattered assignment links, and low student engagement due to overwhelming navigation menus.',
      approach:
        'Reorganized the information architecture into a clear daily learning timeline. Designed role-tailored dashboards for students (gamified progress), teachers (batch grading & intervention triggers), and parents (real-time attendance and academic alerts).',
      informationArchitecture: {
        title: 'Three-Persona Learning Architecture',
        description:
          'Structured distinct views for Student, Educator, and Parent accounts within one platform.',
        pillars: [
          {
            title: 'Student "Today" Daily Command Center',
            points: [
              'Chronological schedule of live virtual classes, pending homework assignments, and reading goals.',
              'Milestone progress bars and visual rewards.'
            ]
          },
          {
            title: 'Educator Intervention Matrix',
            points: [
              'Early-warning dashboard highlighting students falling behind on mastery standards.',
              'One-click rubric grading with voice/video feedback recording.'
            ]
          }
        ]
      },
      userFlows: {
        title: 'Student Assignment Submission & Teacher Feedback Loop',
        description:
          'Simplified the assignment workflow into an intuitive 3-step submission and interactive review.',
        steps: [
          {
            stage: 'Assignment Intake',
            action: 'Student views interactive assignment prompt with rubric and resource attachments.',
            outcome: 'Work draft auto-saved to cloud.'
          },
          {
            stage: 'Submission & Self-Check',
            action: 'Student completes task and performs self-assessment checklist.',
            outcome: 'Assignment submitted with immediate completion confetti micro-animation.'
          },
          {
            stage: 'Teacher Rubric Grading',
            action: 'Teacher grades with split-screen rubric and returns personalized voice note.',
            outcome: 'Student and parent receive instant mastery grade update.'
          }
        ]
      },
      wireframes: {
        description:
          'Created simplified student calendar wireframes and high-density teacher grading matrices.',
        highlights: [
          'Adaptive calendar view toggling between day, week, and course-specific assignment views.',
          'Focus mode for students that hides distracting notifications during quizzes and exams.'
        ]
      },
      designSystem: {
        summary:
          'Designed the "StridePulse" design system with accessible type scales, vibrant yet restrained focus states, and customizable light/dark themes.',
        components: [
          'Course Progress Card with completion percentage circle',
          'Assignment Submission Drawer with multi-file dropzone',
          'Gradebook Spreadsheet with color-coded mastery bands',
          'Live Classroom Video Integration Toolbar'
        ],
        tokens: [
          { category: 'Typography', value: 'Inter & Filson Pro' },
          { category: 'Palette', value: 'Clean Slate, Electric Blue Accent, Mastered Green, In-Progress Amber' }
        ]
      },
      visualDesign: {
        philosophy:
          'Engaging, clear, encouraging, and distraction-free. Designed to foster academic focus and clarity.',
        keyDecisions: [
          'Reduced visual clutter by 60% by collapsing auxiliary menus into contextual action drawers.',
          'Used clear typography hierarchy so students instantly recognize due dates and priority tasks.'
        ]
      },
      keyScreens: {
        title: 'Key Platform Screens',
        description: 'Interfaces designed for students and educators.',
        screens: [
          {
            title: 'Student Daily Schedule & Learning Hub',
            description: 'Personalized homepage showing today’s classes, assignments, and achievements.',
            type: 'dashboard'
          },
          {
            title: 'Teacher SpeedGrader & Analytics',
            description: 'Split-view grading workspace with rubric grading and class mastery breakdown.',
            type: 'workflow'
          },
          {
            title: 'Parent Progress & Attendance Mobile App',
            description: 'Mobile interface for parents to monitor academic milestones and teacher announcements.',
            type: 'mobile'
          }
        ]
      },
      outcomeImpact: [
        'Increased student assignment on-time submission rate by 28% across 1.5M active learners.',
        'Saved teachers an estimated 6 hours per week in grading and attendance reporting.',
        'Reduced customer support tickets related to finding missing course materials by 65%.'
      ],
      learnings: [
        'EdTech design must balance emotional encouragement for young learners with ruthless efficiency for overwhelmed teachers.',
        'Focus modes during testing significantly improve student test completion rates.'
      ]
    }
  },
  {
    id: 'growers',
    number: '03',
    title: 'Growers',
    client: 'Growers · US',
    location: 'United States',
    category: 'Agriculture / Retail / Mobile',
    year: '2021 – 2023',
    platform: 'iOS & Android Native Mobile, Web Agronomy Management Portal',
    role: 'Lead Mobile & Product Designer',
    description:
      'Designed digital products for the agriculture and retail ecosystem, including Farmer and Retailer apps. Created brand guidelines and a design system from scratch, and led UX/UI design through final production-ready mockups.',
    tags: [
      'Brand Guidelines',
      'Design System',
      'Mobile',
      'Agriculture',
      'Retail',
      'UX/UI'
    ],
    layoutSize: 'standard',
    mockupType: 'agritech',
    shortCategory: 'Agriculture-Mobile',
    backdropColor: 'from-[#15803d] via-[#166534] to-[#052e16]',
    imageUrl: '/images/projects/growers/GrowersCover.png',
    metrics: [
      { label: 'Farm Acreage', value: '4M+ Acres Managed' },
      { label: 'Retail Orders', value: '$120M+ GMV' },
      { label: 'Offline Capability', value: '100% Offline-First' }
    ],
    caseStudy: {
      overview:
        'Growers is an agriculture technology platform that connects modern farmers, agronomists, and retail input suppliers to optimize crop yields, soil health, fertilizer purchasing, and field telemetry tracking.',
      industry: 'AgriTech / Farm Operations & Agricultural Retail',
      role: 'Lead Product & Mobile UX/UI Designer',
      platform: 'iOS, Android, and Desktop Web Agronomy Dashboard',
      challenge:
        'Farmers work in harsh outdoor environments with intense direct sunlight, dirty screens, and intermittent cellular connectivity in rural farmlands. The software needed to work completely offline, have large touch targets, and present high-contrast geospatial field data simply.',
      approach:
        'Conducted fieldwork on midwest US farms to observe tractor cab operations and retailer counter workflows. Designed an offline-first mobile architecture with high-contrast outdoor mode and satellite field boundary mapping.',
      informationArchitecture: {
        title: 'Farm Field & Retailer Order Architecture',
        description:
          'Structured field boundary telemetry, soil sample logs, and chemical/seed ordering pipelines.',
        pillars: [
          {
            title: 'Geospatial Field Map Navigator',
            points: [
              'Interactive farm boundary visualization with NDVI satellite vegetation indexing.',
              'Field-level planting prescriptions and soil nutrient overlays.'
            ]
          },
          {
            title: 'Ag-Retail Ordering & Rebate Tracker',
            points: [
              'Direct digital catalog for seed, crop protection chemicals, and bulk fertilizer.',
              'Automated manufacturer rebate calculation and delivery scheduling.'
            ]
          }
        ]
      },
      userFlows: {
        title: 'Field Scouting & Chemical Order Dispatch Flow',
        description:
          'Enables agronomist to log crop disease in the field and order treatment instantly.',
        steps: [
          {
            stage: 'Field Scouting Log (Offline)',
            action: 'Agronomist drops GPS pin on infected crop area and attaches photo.',
            outcome: 'Log saved locally with timestamp and coordinates.'
          },
          {
            stage: 'Prescription Recommendation',
            action: 'System recommends chemical mix and spray rate based on crop type.',
            outcome: 'Digital recommendation sheet generated for farmer review.'
          },
          {
            stage: 'Retail Purchase & Delivery',
            action: 'Farmer approves recommendation with one tap; order routed to nearest retailer.',
            outcome: 'Bulk delivery dispatched to farm coordinates with tracking.'
          }
        ]
      },
      wireframes: {
        description:
          'Tested high-contrast wireframes under simulated outdoor sun glare conditions to ensure legibility.',
        highlights: [
          'High-contrast outdoor UI mode with bold typography and high-saturation status markers.',
          '56px touch target buttons designed for one-handed operation in moving farm equipment.'
        ]
      },
      designSystem: {
        summary:
          'Built "AgroDesign System" from scratch, including brand guidelines, custom agricultural iconography (seed, soil, sprayer, weather), and cross-platform mobile UI kits.',
        components: [
          'Geospatial Field Polygon Drawer & Layer Selector',
          'Weather Telemetry & Spray Window Forecast Widget',
          'Offline Sync Indicator with queue status count',
          'Retail Input Order Builder with bulk volume converter'
        ],
        tokens: [
          { category: 'Typography', value: 'Inter Variable with high contrast weights (500/700)' },
          { category: 'Palette', value: 'Earth Charcoal, Field Green, Harvest Gold, Clean Sunlight White' }
        ]
      },
      visualDesign: {
        philosophy:
          'Rugged, utilitarian, and clear. Designed for real-world utility over delicate ornamentation.',
        keyDecisions: [
          'Strict avoidance of light gray text on light backgrounds to preserve outdoor legibility.',
          'High-visibility map marker pins with distinct shapes to support colorblind farmers.'
        ]
      },
      keyScreens: {
        title: 'Key Mobile & Web Screens',
        description: 'Screens deployed to farmers and retailers across North America.',
        screens: [
          {
            title: 'Farmer Field Map & Crop Health',
            description: 'Satellite view showing real-time vegetation health index and planting history.',
            type: 'dashboard'
          },
          {
            title: 'Scouting & Prescription Mobile App',
            description: 'Native mobile app for agronomists to log field observations offline.',
            type: 'mobile'
          },
          {
            title: 'Retailer Sales & Inventory Portal',
            description: 'Enterprise web dashboard for agricultural retailers to manage inventory and shipments.',
            type: 'table'
          }
        ]
      },
      outcomeImpact: [
        'Scaled to manage over 4 million farm acres across the United States.',
        'Processed over $120M in agricultural retail orders through the platform.',
        'Received the AgTech Breakthrough Award for best mobile farm management solution.'
      ],
      learnings: [
        'Designing for field workers requires testing in actual environmental conditions (glare, gloves, poor connectivity).',
        'Visual map-based interfaces are far more intuitive for spatial thinkers than tabular lists.'
      ]
    }
  },
  {
    id: 'cura-patient',
    number: '04',
    title: 'Cura Patient',
    client: 'Cura Patient · Irvine, California, US',
    location: 'Irvine, CA, USA',
    category: 'Healthcare / Digital Health',
    year: '2021 – 2024',
    platform: 'Web Dashboard, iOS, Android, iPad Clinical Application',
    role: 'Lead Healthcare Product & UX Designer',
    description:
      'Designed multiple digital healthcare products across the Cura Patient ecosystem, including Othena, patient and doctor dashboards, hospital management platforms, mobile apps, iPad applications and web dashboards, while establishing a centralized design system across products.',
    tags: [
      'Healthcare',
      'UX/UI',
      'Mobile',
      'Dashboard',
      'Design System',
      'Product Design'
    ],
    layoutSize: 'featured',
    mockupType: 'healthcare',
    shortCategory: 'Web-Healthcare',
    backdropColor: 'from-[#0284c7] via-[#0369a1] to-[#0c4a6e]',
    imageUrl: '/images/projects/cura-patient/corapatientcover.png',
    metrics: [
      { label: 'Patients Served', value: '3.2M+ Users' },
      { label: 'Clinical Adoption', value: '450+ Clinics' },
      { label: 'Compliance', value: 'HIPAA & FDA Guidelines' }
    ],
    caseStudy: {
      overview:
        'Cura Patient is an AI-powered digital health and clinical workflow platform used by hospital networks, public health agencies (including Orange County Health Care Agency via Othena), and private medical practices to manage patient onboarding, vaccination tracking, telehealth consultations, and electronic health records (EHR).',
      industry: 'Healthcare / Digital Therapeutics & Clinical Operations',
      role: 'Lead Product Designer & System Architect',
      platform: 'Cross-Platform Web, iOS/Android Patient App, iPad Clinician EHR Portal',
      challenge:
        'Medical environments are extremely high-stress with zero tolerance for confusion or errors. Clinicians were overburdened by legacy EHR cognitive overload, while diverse patient demographics (ranging from tech-savvy young adults to elderly patients with visual impairments) needed effortless appointment scheduling and lab report access.',
      approach:
        'Conducted clinical shadowing in emergency departments and primary care clinics. Developed a unified design system "CuraDesign" that adheres strictly to WCAG 2.1 AAA contrast rules, big touch targets for iPad sterile environments, and simplified patient-facing micro-copy.',
      informationArchitecture: {
        title: 'Clinical Workflow & Patient Portal Hierarchy',
        description:
          'Separated clinician-facing diagnostic tools from patient self-management while keeping biometric data in real-time sync.',
        pillars: [
          {
            title: 'Clinician iPad EHR Dashboard',
            points: [
              'Split-screen patient chart: left panel displays vital telemetry; right panel supports rapid SOAP note dictation and e-prescribing.',
              'One-tap allergy and medication conflict safety alerts with clear color differentiation.'
            ]
          },
          {
            title: 'Patient Health Passport (iOS/Android)',
            points: [
              'Consolidated timeline of immunizations, upcoming tele-visits, prescription refill status, and vitals trend charts.',
              'Accessible biometrics with Apple Health and Google Fit synchronization.'
            ]
          }
        ]
      },
      userFlows: {
        title: 'Rapid Telehealth Intake & Clinician Consultation Flow',
        description:
          'Connected remote patients to triage doctors with automated symptom checking.',
        steps: [
          {
            stage: 'Asynchronous Symptom Intake',
            action: 'Patient answers interactive triage questionnaire and uploads photo/vitals.',
            outcome: 'AI triage engine flags urgency level and populates preliminary doctor chart.'
          },
          {
            stage: 'Virtual Waiting Room',
            action: 'Patient tests camera/audio and views real-time queue position.',
            outcome: 'Secure WebRTC encrypted video connection prepared.'
          },
          {
            stage: 'In-Call Clinical Consultation',
            action: 'Doctor conducts video call with floating EHR drawer and instant lab order placement.',
            outcome: 'Prescription sent directly to patient’s preferred pharmacy.'
          }
        ]
      },
      wireframes: {
        description:
          'Iterated through 20+ wireframe prototypes to refine medication dosage selectors and lab result data visualization.',
        highlights: [
          '48px minimum touch targets across iPad clinical views to accommodate gloved interaction.',
          'High-contrast lab result cards showing normal ranges with intuitive bracket indicators.'
        ]
      },
      designSystem: {
        summary:
          'Created "CuraCore" — a HIPAA-compliant medical design system with medical icon library, accessible typography, and calm, reassurance-focused color palette.',
        components: [
          'Vital Signs Telemetry Widget (Heart Rate, SpO2, Blood Pressure, Glucose)',
          'Medication Dosage Stepper and Schedule Timeline',
          'Clinical SOAP Note Editor with medical autocomplete',
          'Digital Vaccine Card & QR Health Pass'
        ],
        tokens: [
          { category: 'Color Tokens', value: 'Clinical Navy, Calming Teal, Slate Neutral, Alert Crimson, Alert Amber' },
          { category: 'Typography', value: 'Inter Variable with tabular figures for exact numerical alignment' }
        ]
      },
      visualDesign: {
        philosophy:
          'Calm, trustworthy, clean, and error-preventive. Clean typography and generous whitespace eliminate medical anxiety for patients and cognitive fatigue for doctors.',
        keyDecisions: [
          'Avoided aggressive red colors except for life-critical contraindications.',
          'Used tabular numerals across all vital charts and lab values to avoid misreadings.'
        ]
      },
      keyScreens: {
        title: 'Ecosystem Screens',
        description: 'Key interfaces designed for Cura Patient and Othena.',
        screens: [
          {
            title: 'iPad Clinician Dashboard',
            description: 'High-density chart viewer with real-time patient queue and SOAP note editor.',
            type: 'dashboard'
          },
          {
            title: 'Patient Mobile Health App',
            description: 'Clean mobile interface for vaccine records, lab results, and one-tap appointment booking.',
            type: 'mobile'
          },
          {
            title: 'Hospital Capacity & Bed Management',
            description: 'Enterprise administrative portal tracking bed occupancy and triage bottlenecks.',
            type: 'table'
          }
        ]
      },
      outcomeImpact: [
        'Deployed during peak pandemic to power Orange County’s Othena system, administering 2M+ vaccines smoothly.',
        'Reduced clinician charting time by 34% per patient encounter.',
        'Achieved 4.8-star patient satisfaction rating across App Store and Google Play.'
      ],
      learnings: [
        'Designing for healthcare demands absolute obsession with error prevention: confirmation modals must clearly state irreversible consequences.',
        'Clinicians value fast keyboard/tablet shortcuts over animated transitions.'
      ]
    }
  },
  {
    id: 'drive-focus',
    number: '05',
    title: 'Drive Me',
    client: 'Drive Focus · US & Canada',
    location: 'United States & Canada',
    category: 'Interactive Simulation / EdTech / Mobile App',
    year: '2022 – 2023',
    platform: 'iOS & Android Interactive Mobile App, Driving Hazard Simulation System',
    role: 'Lead UI/UX & Mobile Product Designer',
    description:
      'Designed an interactive driving hazard recognition and simulation app that trains new and commercial drivers to identify critical roadway hazards in real-time, improving visual search skills and road safety.',
    tags: [
      'Mobile App',
      'Interactive Simulation',
      'EdTech',
      'UI/UX Design',
      'Design System',
      'Gamification'
    ],
    layoutSize: 'standard',
    mockupType: 'mobile',
    shortCategory: 'Interactive-Simulation',
    backdropColor: 'from-[#0f172a] via-[#1e293b] to-[#0f172a]',
    imageUrl: '/images/projects/DriveFocus/drivefocuscover.png',
    externalUrl: 'https://www.behance.net/gallery/255077141/Drive-Me-Improve-your-critical-driving-skills',
    metrics: [
      { label: 'Hazard Reaction Speed', value: '42% Faster Detection' },
      { label: 'Active Driver Community', value: '250K+ Learners' },
      { label: 'Safety Validation', value: 'Peer-Reviewed Research' }
    ],
    caseStudy: {
      overview:
        'Drive Focus is a clinically validated, interactive mobile simulation app developed in partnership with leading traffic safety scientists. It trains drivers to develop expert visual search strategies and quickly identify critical roadway hazards—such as pedestrians stepping into lanes, sudden brake lights, and intersecting vehicles.',
      industry: 'EdTech / Automotive Safety & Interactive Simulation',
      role: 'Lead Mobile UX/UI & Gamification Designer',
      platform: 'iOS (iPad & iPhone), Android, Driving Academy Simulator Dashboard',
      challenge:
        'Novice and commercial drivers experience high accident rates due to delayed hazard detection. Traditional video lectures failed to engage learners. Drive Focus required a dynamic, low-latency touch recognition interface that evaluates driver reaction times in milliseconds across real-world 4K driving video scenarios.',
      approach:
        'Created a tactile, gamified mobile interaction system with instant touch feedback, score multipliers, and spaced repetition training tours. Designed intuitive post-drive diagnostic heatmaps showing drivers exactly what hazards they missed.',
      informationArchitecture: {
        title: 'Simulation Progression & Performance Analytics',
        description:
          'Organized curriculum into progressive geographic driving tours (Urban, Highway, Night Driving, Adverse Weather) with granular reaction telemetry.',
        pillars: [
          {
            title: 'Interactive Drive Video Engine',
            points: [
              'Full-screen 60fps real-world driving footage with dynamic hazard bounding boxes.',
              'Instant precision scoring measuring reaction latency and hazard classification accuracy.'
            ]
          },
          {
            title: 'Post-Drive Visual Analytics & Heatmaps',
            points: [
              'Frame-by-frame review mode allowing drivers to replay missed hazards in slow motion.',
              'Driver Safety Scorecard tracking visual search speed progression over time.'
            ]
          }
        ]
      },
      userFlows: {
        title: 'Interactive Hazard Training & Review Flow',
        description:
          'End-to-end learning loop from drive selection to diagnostic review.',
        steps: [
          {
            stage: 'Tour & Route Selection',
            action: 'Driver selects city tour (e.g. Downtown Chicago Rush Hour or Wet Highway).',
            outcome: 'Pre-drive briefing outlines focus hazard categories (Pedestrians, Stop Signs, Merging Traffic).'
          },
          {
            stage: 'Live Hazard Tapping Simulation',
            action: 'Driver watches 60fps driving video and taps hazards the moment they appear.',
            outcome: 'Tactile haptic pulse confirms detection; reaction timestamp logged in milliseconds.'
          },
          {
            stage: 'Real-Time Score Multiplier',
            action: 'Consecutive hazard identifications trigger combo multipliers.',
            outcome: 'Immediate visual reward reinforcing forward road scanning habits.'
          },
          {
            stage: 'Diagnostic Debrief',
            action: 'Driver inspects missed hazards and visual search reaction time curve.',
            outcome: 'Actionable tips provided before unlocking subsequent driving tiers.'
          }
        ]
      },
      wireframes: {
        description:
          'Prototyped full-screen touch target ergonomics to ensure zero visual distraction while maintaining responsive touch feedback.',
        highlights: [
          'Minimalist translucent HUD overlay maximizing viewable roadway area.',
          'Thumb-friendly control anchors optimized for horizontal landscape tablet and smartphone orientation.'
        ]
      },
      designSystem: {
        summary:
          'Developed a high-energy, dark-mode simulation UI kit with neon status indicators, tactile haptic tokens, and sports-inspired typography.',
        components: [
          'Hazard Target Reticle with expansion micro-animation',
          'Tour Selection Card with difficulty star ratings',
          'Reaction Time Millisecond Dial & Leaderboard Card',
          'Post-Drive Diagnostic Timeline Scrubber'
        ],
        tokens: [
          { category: 'Brand Palette', value: 'Racing Charcoal (#0F172A), Hazard Gold (#F59E0B), Reaction Cyan (#06B6D4)' },
          { category: 'Typography', value: 'Filson Pro & Monospace Chronometer Numerals' }
        ]
      },
      visualDesign: {
        philosophy:
          'Immersive, focused, responsive, and empowering. Designed to mimic the adrenaline and clarity of real-world driving environments.',
        keyDecisions: [
          'Used true dark themes to eliminate screen glare during night simulation runs.',
          'Implemented subtle spatial audio cues to complement visual hazard recognition.'
        ]
      },
      keyScreens: {
        title: 'Core Simulation Interfaces',
        description: 'Selected mobile screens from the Drive Focus app.',
        screens: [
          {
            title: 'Interactive 60fps Driving Simulation',
            description: 'Full-screen driving scenario with active hazard target rings and live combo scoring.',
            type: 'mobile'
          },
          {
            title: 'Tour Selection & Route Briefing',
            description: 'Curated curriculum categorized by driving environment and weather conditions.',
            type: 'dashboard'
          },
          {
            title: 'Hazard Diagnostic Debrief',
            description: 'Post-run slow-motion review scrubbing through critical missed road events.',
            type: 'mobile'
          }
        ]
      },
      outcomeImpact: [
        'Validated 42% faster hazard identification speed among teen and fleet commercial drivers.',
        'Adopted by driving schools and commercial logistics fleets across North America.',
        'Achieved 4.9-star average rating across 250,000+ app downloads.'
      ],
      learnings: [
        'Interactive simulation apps need immediate haptic and visual confirmation so learners intuitively build muscle memory.',
        'Detailed diagnostic debriefs turn mistakes into constructive learning milestones.'
      ]
    }
  },
  {
    id: 'zon-ecommerce',
    number: '06',
    title: 'Zon',
    client: 'ZON Retail Network · UAE',
    location: 'Dubai, UAE · Global',
    category: 'Mobile App / E-Commerce / Decentralized Retail',
    year: '2023 – 2024',
    platform: 'iOS & Android Mobile App, Merchant Inventory System',
    role: 'Lead UI/UX & Mobile Product Designer',
    description:
      'ZON is simply the largest decentralized mobile network of retailers that makes anything you want to buy always available at the lowest price, changing your item status from “Ordered” to “Delivered” in no time.',
    tags: [
      'Mobile App',
      'E-Commerce',
      'UI/UX Design',
      'Decentralized Retail',
      'Design System',
      'Order Tracking',
      'Rapid Fulfillment'
    ],
    layoutSize: 'featured',
    mockupType: 'ecommerce',
    shortCategory: 'Mobile-ECommerce',
    backdropColor: 'from-[#0f172a] via-[#1e1b4b] to-[#31104b]',
    imageUrl: '/images/projects/Zone/ZoneCover.png',
    externalUrl: 'https://www.behance.net/gallery/102259963/Ecommerce-App-UIUX-Case-Study',
    metrics: [
      { label: 'Delivery Turnaround', value: '< 30 Min Fulfillment' },
      { label: 'Retailer Network', value: '10,000+ Stores' },
      { label: 'Checkout Friction', value: '1-Tap Instant Buy' }
    ],
    caseStudy: {
      overview:
        'ZON represents an architectural breakthrough in decentralized commerce—connecting dense urban retail networks directly with shoppers. Unlike traditional centralized warehouses, ZON taps into neighborhood store inventories in real-time, matching buyer requests with the closest, lowest-priced retailer for rapid hyper-local delivery.',
      industry: 'E-Commerce / Decentralized Retail & Hyper-Local Logistics',
      role: 'Lead Mobile Product Designer & UX Strategist',
      platform: 'Native iOS (SwiftUI) & Android (Jetpack Compose), Retailer Tablet Dashboard',
      challenge:
        'Traditional e-commerce creates delivery bottlenecks and price markups through centralized logistics. ZON needed to index hundreds of thousands of dynamic retail SKU inventories in real-time, solve price discovery friction for shoppers, and engineer an ultra-fast checkout and tracking interface that seamlessly moves items from "Ordered" to "Delivered" with zero ambiguity.',
      approach:
        'Architected an ergonomics-first mobile experience focused on one-thumb navigation, predictive local inventory search, transparent price comparison grids, and real-time courier telemetry. Designed high-density merchant management tools for instant order acceptance and dispatch.',
      informationArchitecture: {
        title: 'Decentralized Discovery, Instant Price Routing & Fulfillment',
        description:
          'Structured the mobile IA to eliminate decision fatigue—putting hyper-local availability, competitive pricing, and instant delivery ETA front and center.',
        pillars: [
          {
            title: 'Geo-Fenced Inventory Mesh',
            points: [
              'Automatic location-based inventory sync routing orders to verified nearby retailers within a 5km radius.',
              'Instant neighborhood store catalog browsing with real-time in-stock confidence badges.'
            ]
          },
          {
            title: 'Smart Price Arbitration & Retailer Bidding',
            points: [
              'Real-time automated price comparison engine highlighting best price vs. fastest delivery tradeoffs.',
              'Algorithmic store selection matching the nearest retailer with available SKU stock.'
            ]
          },
          {
            title: 'Unified Live Order-to-Delivered Center',
            points: [
              'Persistent interactive order timeline communicating real-time status transitions from "Placed" -> "Packed" -> "Out for Delivery" -> "Delivered".',
              'Live GPS courier map telemetry with direct in-app communication and OTP verification.'
            ]
          }
        ]
      },
      userFlows: {
        title: 'Instant 1-Tap Purchase & Rapid Doorstep Fulfillment Flow',
        description:
          'Streamlined the buyer journey from search to doorstep delivery in 4 frictionless phases.',
        steps: [
          {
            stage: 'Local Search & Discovery',
            action: 'User searches for an item or scans a barcode.',
            outcome: 'App cross-checks nearby retailer stocks in milliseconds and surfaces the lowest-price options.'
          },
          {
            stage: '1-Tap Decentralized Checkout',
            action: 'User taps 1-Click Buy with pre-saved address and biometrics.',
            outcome: 'Order cryptographically routed to optimal merchant; instant payment authorization.'
          },
          {
            stage: 'Merchant Pack & Auto-Dispatch',
            action: 'Local retailer accepts order on tablet and packages item within 5 minutes.',
            outcome: 'Courier auto-dispatched via algorithmic proximity routing.'
          },
          {
            stage: 'Doorstep Delivery & Handoff',
            action: 'Courier arrives at user doorstep and scans delivery completion OTP.',
            outcome: 'Status updates from "Out for Delivery" to "Delivered" with instant digital receipt.'
          }
        ]
      },
      wireframes: {
        description:
          'Created ergonomics-first mobile wireframes supporting rapid one-handed navigation and fluid bottom-sheet drawers.',
        highlights: [
          'Bottom-sheet modal ergonomics optimized for single-handed mobile navigation.',
          'Dynamic price comparison cards with real-time stock availability chips.',
          'Live interactive order tracking stepper with push telemetry updates.'
        ]
      },
      designSystem: {
        summary:
          'Built an atomic, high-contrast mobile design system with fluid dark/light modes, tactile micro-interactions, and accessible typography.',
        components: [
          'Product Card Carousel with live stock chip',
          'Bottom Sheet Quantity & Variant Picker',
          'Live Tracking Stepper & Map Telemetry Card',
          'Price Comparison Pill with retailer badges',
          'Biometric 1-Tap Checkout CTA Button'
        ],
        tokens: [
          { category: 'Brand Accent', value: 'Electric Violet (#7C3AED) & Solar Gold (#FDD02D)' },
          { category: 'Semantic States', value: 'Delivered Emerald (#10B981), In-Transit Sky (#0284C7)' },
          { category: 'Typography', value: 'Filson Pro & Inter Tabular Figures' }
        ]
      },
      visualDesign: {
        philosophy:
          'Speed, clarity, and trust—making decentralized hyper-local commerce feel as effortless, transparent, and reliable as a native OS service.',
        keyDecisions: [
          'High-contrast visual hierarchy allowing users to evaluate price vs. delivery speed in under 3 seconds.',
          'Haptic micro-interactions confirming order acceptance and courier dispatch milestones.',
          'Transparent retailer badges celebrating neighborhood stores and fostering community trust.'
        ]
      },
      keyScreens: {
        title: 'Core Mobile Experiences',
        description: 'Native mobile interfaces engineered for rapid discovery, instant purchase, and live telemetry.',
        screens: [
          {
            title: 'Local Market Discovery & Dynamic Feed',
            description: 'Geo-aware product feed with live stock indicators, lowest price badges, and neighborhood store tags.',
            type: 'mobile'
          },
          {
            title: 'Instant Multi-Store Price Comparison',
            description: 'Transparent multi-retailer price matrix with dynamic delivery estimates and distance rankings.',
            type: 'mobile'
          },
          {
            title: '1-Tap Express Checkout Sheet',
            description: 'Biometric payment verification and automated delivery slot reservation in a single drawer.',
            type: 'mobile'
          },
          {
            title: 'Live Order-to-Delivered Telemetry Tracker',
            description: 'Interactive map and step-by-step dispatch telemetry with live driver location and OTP handoff.',
            type: 'mobile'
          }
        ]
      },
      outcomeImpact: [
        'Achieved 45% reduction in checkout drop-off through 1-tap decentralized order flow.',
        'Average delivery turnaround clocking under 28 minutes across primary launch metro zones.',
        'Scaled decentralized retailer network to 10,000+ onboarded merchants with 99.4% fulfillment accuracy.'
      ],
      learnings: [
        'Micro-interactions and haptic feedback dramatically increase user confidence during real-time order state changes.',
        'Giving consumers transparency on local merchant locations creates strong emotional trust and community retail support.'
      ]
    }
  }
];

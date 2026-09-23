import type { ExpertiseItem, LeadershipPrinciple } from '../types/portfolio';

export const EXPERTISE_ITEMS: ExpertiseItem[] = [
  {
    id: 'product-design',
    number: '01',
    title: 'End-to-End Product Design',
    category: 'Product Design',
    accentColor: '#92D0AB',
    tag: 'Concept → Production',
    description: 'Guiding digital products from architecture to production for web and mobile, using Figma AI to speed up UI variations, component states, and screen craft.',
    subSkills: [
      { title: 'Concept to Production', subtitle: 'Full lifecycle ownership from initial concept through design QA and production launch' },
      { title: 'Figma AI Screen Styling', subtitle: 'Speeding up UI variations, component states, and high-fidelity screen craft' },
      { title: 'Web + Mobile Platforms', subtitle: 'Responsive enterprise web portals, tablet apps, and native iOS & Android' },
      { title: 'Bilingual MENA & Global (RTL/LTR)', subtitle: 'Native Arabic & English dual-direction layout architecture' }
    ],
    deliverables: ['Full Lifecycle', 'Figma AI Variants', 'iOS & Android Native', 'Hi-Fi UI']
  },
  {
    id: 'ux-strategy',
    number: '02',
    title: 'UX Discovery & Strategy',
    category: 'Discovery & Strategy',
    accentColor: '#FDD02D',
    tag: 'Vision to Roadmaps',
    description: 'Framing complex problem spaces, facilitating discovery workshops, and defining actionable UX strategies that align user needs with business goals.',
    subSkills: [
      { title: 'Problem Framing & Value Mapping', subtitle: 'Deconstructing ambiguous business challenges and identifying high-impact user opportunities' },
      { title: 'Discovery Workshops & Sprints', subtitle: 'Facilitating stakeholder alignment sessions, design sprints, and executive vision mapping' },
      { title: 'Journey Maps & Service Blueprints', subtitle: 'Mapping cross-channel customer journeys, ecosystem touchpoints, and mental models' },
      { title: 'Strategic UX Roadmapping', subtitle: 'Translating user insights and business OKRs into prioritized product backlog initiatives' }
    ],
    deliverables: ['Discovery Sprints', 'Journey Blueprints', 'Stakeholder Alignment', 'UX Roadmaps']
  },
  {
    id: 'design-systems',
    number: '03',
    title: 'Scalable Design Systems',
    category: 'Systems & Architecture',
    accentColor: '#DD1251',
    tag: 'Enterprise Velocity',
    description: 'Architecting centralized component libraries, semantic design tokens, and governance frameworks that bridge design and engineering.',
    subSkills: [
      { title: 'Figma Components & Variants', subtitle: 'Deep component sets, boolean properties, and multi-state variant architecture' },
      { title: 'Auto-Layout + Design Tokens', subtitle: 'W3C-compliant semantic tokens for color, typography, spacing, and elevation' },
      { title: 'Cross-Platform Consistency', subtitle: 'Unified brand identity and UX patterns across web, desktop, and mobile' },
      { title: 'Engineer-Friendly Handoff', subtitle: 'Token schemas, edge-case documentation, and pairing with frontend teams' }
    ],
    deliverables: ['Figma Auto-Layout', 'W3C Design Tokens', 'Cross-Platform', 'Zero-Loss Handoff']
  },
  {
    id: 'research-testing',
    number: '04',
    title: 'User Research & Usability Testing',
    category: 'Research & Testing',
    accentColor: '#38bdf8',
    tag: 'Evidence-Based UX',
    description: 'Validating hypotheses through qualitative interviews, heuristic audits, and user testing to de-risk design decisions before code is written.',
    subSkills: [
      { title: 'Guerrilla & User Interviews', subtitle: 'Qualitative user interviews, contextual inquiries, and persona validation' },
      { title: 'Heuristic UX Audits', subtitle: 'Comprehensive cognitive walkthroughs, Nielsen heuristics, and friction mapping' },
      { title: 'Usability Testing Labs', subtitle: 'Moderated & unmoderated task testing, SUS benchmarking, and feedback loops' },
      { title: 'Synthesis → Opportunity', subtitle: 'Translating user pain points into prioritized product roadmaps and features' }
    ],
    deliverables: ['Heuristic Audits', 'Usability Labs', 'Friction Mapping', 'Roadmap Synthesis']
  },
  {
    id: 'wireframing-prototyping',
    number: '05',
    title: 'Wireframing & Prototyping',
    category: 'Prototyping & Motion',
    accentColor: '#c084fc',
    tag: 'Simulation & Validation',
    description: 'Translating complex ideas into ergonomic wireframes and interactive prototypes that simulate real-world product behavior.',
    subSkills: [
      { title: 'Lo-Fi to Hi-Fi Prototypes', subtitle: 'Low-fidelity structural wireframes progressing to production-grade interactive flows' },
      { title: 'Interaction & Motion', subtitle: 'Fluid micro-interactions, state transitions, and responsive motion choreography' },
      { title: 'Accessibility & States', subtitle: 'WCAG AAA contrast compliance, keyboard navigation, empty and loading states' },
      { title: 'Validation in Figma', subtitle: 'Interactive click-through simulations for stakeholder sign-off and user trials' }
    ],
    deliverables: ['Lo-Fi & Hi-Fi Flows', 'Micro-Interactions', 'WCAG AAA Access', 'Figma Clickthrough']
  },
  {
    id: 'ai-assisted-design',
    number: '06',
    title: 'AI-Assisted Design Workflows',
    category: 'AI Velocity',
    accentColor: '#92D0AB',
    tag: 'AI-First Velocity',
    description: 'Harnessing advanced LLMs and generative AI tools to accelerate research synthesis, explore variations, and elevate strategic output.',
    subSkills: [
      { title: 'Claude for Research Synthesis', subtitle: 'Synthesizing dense customer interviews, competitive benchmarks, and user data' },
      { title: 'Figma AI for Variation', subtitle: 'Rapid exploration of layout variations, copywriting options, and design tokens' },
      { title: 'Spec & Doc Generation', subtitle: 'Automated user story definitions, edge-case documentation, and PRD alignment' },
      { title: 'Faster Ideation, Sharper Output', subtitle: 'Eliminating repetitive manual tasks to invest deeper focus on product strategy' }
    ],
    deliverables: ['Claude Synthesis', 'Figma AI Variations', 'Automated Specs', '3x Velocity']
  }
];

export const LEADERSHIP_PRINCIPLES: LeadershipPrinciple[] = [
  {
    number: '01',
    title: 'Cross-Functional Collaboration',
    description: 'Lead cross-functional design collaboration across Product, Engineering, QA, Business and Leadership teams to build unified alignment.',
    tag: 'Product · Eng · Business Alignment',
    practice: 'Co-creation workshops, design-to-code pairings, and weekly syncs to eliminate delivery silos.',
    metric: '100% Team Alignment'
  },
  {
    number: '02',
    title: 'Complexity to Clarity',
    description: 'Translate complex business requirements into clear UX strategies, scalable solutions and intuitive product experiences.',
    tag: 'Mental Models & Workflows',
    practice: 'Deconstructing dense data architectures and multi-tenant hierarchies into intuitive task flows.',
    metric: 'Zero-Friction UX'
  },
  {
    number: '03',
    title: 'System Standards & Governance',
    description: 'Define and implement design systems and visual standards across multiple enterprise products to ensure coherence and engineering velocity.',
    tag: 'Tokens & Multi-Brand Scale',
    practice: 'Architecting semantic design tokens, WCAG AAA guidelines, and strict component versioning.',
    metric: '4x Dev Velocity'
  },
  {
    number: '04',
    title: 'Strategic Influence & Discovery',
    description: 'Influence UX direction and product decisions through discovery, workshops, design reviews and stakeholder alignment.',
    tag: 'Evidence-Based Roadmaps',
    practice: 'Framing qualitative research and customer analytics to influence executive product roadmaps.',
    metric: 'Data-Driven ROI'
  },
  {
    number: '05',
    title: 'Mentorship & Quality Craft',
    description: 'Mentor designers and promote design quality, consistency and continuous improvement across distributed design teams.',
    tag: 'Design Critique & Growth',
    practice: 'Structured design reviews, systems coaching, and fostering a culture of pixel-perfect craft.',
    metric: 'Design Excellence'
  }
];

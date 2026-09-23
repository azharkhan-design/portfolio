import type { ExpertiseItem, LeadershipPrinciple } from '../types/portfolio';

export const EXPERTISE_ITEMS: ExpertiseItem[] = [
  {
    id: 'product-design',
    number: '01',
    title: 'End-to-End Product Design',
    category: 'Product Design',
    accentColor: '#92D0AB',
    tag: 'Concept → Production',
    description: 'Guiding digital products from architecture to production for web and mobile, leveraging Claude Design and Figma Make / AI to rapidly explore UI variants, responsive states, and high-fidelity screen craft.',
    subSkills: [
      { title: 'Concept to Production', subtitle: 'Full lifecycle ownership from initial concept through design QA and production launch' },
      { title: 'Claude Design & Figma Make', subtitle: 'Prompting and generating rapid multi-device UI variations, state matrices, and component exploration' },
      { title: 'Web + Mobile Platforms', subtitle: 'Responsive enterprise web portals, tablet apps, and native iOS & Android' },
      { title: 'Bilingual MENA & Global (RTL/LTR)', subtitle: 'Native Arabic & English dual-direction layout architecture' }
    ],
    deliverables: ['Concept → Launch', 'Claude Design / Figma Make', 'iOS & Android Native', 'Hi-Fi UI']
  },
  {
    id: 'ux-strategy',
    number: '02',
    title: 'UX Discovery & Strategy',
    category: 'Discovery & Strategy',
    accentColor: '#FDD02D',
    tag: 'Vision to Roadmaps',
    description: 'Framing complex problem spaces using ChatGPT & Claude for rapid domain immersion, market landscape benchmarking, and user-aligned business strategies.',
    subSkills: [
      { title: 'AI-Assisted Domain Immersion', subtitle: 'Using Claude & ChatGPT for rapid market benchmarking, ecosystem landscape analysis, and stakeholder prompts' },
      { title: 'Problem Framing & Value Mapping', subtitle: 'Deconstructing ambiguous enterprise challenges and identifying high-impact user opportunities' },
      { title: 'Discovery Workshops & Sprints', subtitle: 'Facilitating stakeholder alignment sessions, design sprints, and executive vision mapping' },
      { title: 'Strategic UX Roadmapping', subtitle: 'Translating synthesized user insights and business OKRs into prioritized product backlog initiatives' }
    ],
    deliverables: ['AI Domain Benchmarks', 'Journey Blueprints', 'Stakeholder Alignment', 'UX Roadmaps']
  },
  {
    id: 'design-systems',
    number: '03',
    title: 'Scalable Design Systems',
    category: 'Systems & Architecture',
    accentColor: '#DD1251',
    tag: 'Enterprise Velocity',
    description: 'Architecting centralized component libraries, semantic design tokens, and AI-accelerated documentation that bridge Figma with engineering codebases.',
    subSkills: [
      { title: 'Figma Components & Variants', subtitle: 'Deep component sets, boolean properties, and multi-state variant architecture' },
      { title: 'Auto-Layout + Design Tokens', subtitle: 'W3C-compliant semantic tokens for color, typography, spacing, and elevation' },
      { title: 'AI-Generated Specs & Tokens', subtitle: 'Leveraging LLMs to generate token documentation, schema definitions, and dev handoff notes' },
      { title: 'Engineer-Friendly Handoff', subtitle: 'Token schemas, edge-case documentation, and pairing with frontend teams' }
    ],
    deliverables: ['Figma Auto-Layout', 'W3C Design Tokens', 'AI Spec Docs', 'Zero-Loss Handoff']
  },
  {
    id: 'research-testing',
    number: '04',
    title: 'User Research & Usability Testing',
    category: 'Research & Testing',
    accentColor: '#38bdf8',
    tag: 'Evidence-Based UX',
    description: 'Validating hypotheses through qualitative interviews, heuristic audits, and using Claude & ChatGPT for rapid transcript synthesis, persona matrices, and sentiment clustering.',
    subSkills: [
      { title: 'Claude & ChatGPT Research Synthesis', subtitle: 'Synthesizing 40+ hours of user interview transcripts, clustering qualitative patterns, and extracting sentiment' },
      { title: 'Guerrilla & User Interviews', subtitle: 'Qualitative user interviews, contextual inquiries, and persona validation' },
      { title: 'Heuristic UX & AI Audits', subtitle: 'Comprehensive cognitive walkthroughs, Nielsen heuristics, and automated friction mapping with UX Pilot' },
      { title: 'Usability Testing Labs', subtitle: 'Moderated & unmoderated task testing, SUS benchmarking, and feedback loops' }
    ],
    deliverables: ['Claude / GPT Synthesis', 'Usability Labs', 'Heuristic Audits', 'Evidence-Based UX']
  },
  {
    id: 'wireframing-prototyping',
    number: '05',
    title: 'Wireframing & Prototyping',
    category: 'Prototyping & Motion',
    accentColor: '#c084fc',
    tag: 'Simulation & Validation',
    description: 'Translating complex ideas into ergonomic wireframes and interactive prototypes, using AI for prompt-assisted layout exploration and generative microcopy.',
    subSkills: [
      { title: 'AI-Accelerated Wireframing', subtitle: 'Prompting layout wireframes and rapid structural variations to de-risk UX before high-fidelity visual design' },
      { title: 'Lo-Fi to Hi-Fi Prototypes', subtitle: 'Low-fidelity structural wireframes progressing to production-grade interactive flows' },
      { title: 'Interaction & Motion', subtitle: 'Fluid micro-interactions, state transitions, and responsive motion choreography' },
      { title: 'Accessibility & States', subtitle: 'WCAG AAA contrast compliance, keyboard navigation, empty and loading states' }
    ],
    deliverables: ['AI Wireframe Ideation', 'Lo-Fi & Hi-Fi Flows', 'Micro-Interactions', 'WCAG AAA Access']
  },
  {
    id: 'ai-assisted-design',
    number: '06',
    title: 'AI-First Velocity & Tooling',
    category: 'AI Acceleration',
    accentColor: '#92D0AB',
    tag: 'Claude · GPT · Figma Make',
    description: 'Integrating Claude, ChatGPT, Claude Design, Figma Make, and UX Pilot into everyday product design to multiply execution velocity by 3x–5x without sacrificing craft.',
    subSkills: [
      { title: 'Claude & ChatGPT for Deep Synthesis', subtitle: 'Distilling dense customer research, competitive teardowns, and user data in minutes' },
      { title: 'Claude Design & Figma Make', subtitle: 'Instant screen ideation, multi-state UI variations, and production-ready visual exploration' },
      { title: 'Automated Specs & PRD Alignment', subtitle: 'Generating edge-case documentation, accessibility audits, and engineering acceptance criteria' },
      { title: '3x–5x Velocity Multiplier', subtitle: 'Eliminating repetitive manual tasks to spend 90% of focus on deep strategy and user empathy' }
    ],
    deliverables: ['Claude & ChatGPT', 'Claude Design / Figma Make', 'Automated PRD Specs', '3x–5x Velocity']
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

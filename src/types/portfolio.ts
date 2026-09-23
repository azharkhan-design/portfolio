export interface ProjectScreen {
  title: string;
  description: string;
  type: 'dashboard' | 'mobile' | 'workflow' | 'analytics' | 'table';
}

export interface Project {
  id: string;
  number: string;
  title: string;
  client: string;
  location: string;
  category: string;
  year: string;
  platform: string;
  role: string;
  description: string;
  tags: string[];
  layoutSize: 'hero-feature' | 'featured' | 'standard';
  mockupType: 'dashboard' | 'mobile' | 'healthcare' | 'portal' | 'hr' | 'agritech' | 'edtech' | 'logistics' | 'fintech' | 'ecommerce';
  backdropColor?: string;
  accentColor?: string;
  shortCategory?: string;
  imageUrl?: string;
  externalUrl?: string;
  metrics?: { label: string; value: string }[];
  caseStudy: {
    overview: string;
    industry: string;
    role: string;
    platform: string;
    challenge: string;
    approach: string;
    informationArchitecture: {
      title: string;
      description: string;
      pillars: { title: string; points: string[] }[];
    };
    userFlows: {
      title: string;
      description: string;
      steps: { stage: string; action: string; outcome: string }[];
    };
    wireframes: {
      description: string;
      highlights: string[];
    };
    designSystem: {
      summary: string;
      components: string[];
      tokens: { category: string; value: string }[];
    };
    visualDesign: {
      philosophy: string;
      keyDecisions: string[];
    };
    keyScreens: {
      title: string;
      description: string;
      screens: ProjectScreen[];
    };
    outcomeImpact: string[];
    learnings: string[];
  };
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  employmentType?: string;
  logoImage?: string;
  logoText?: string;
  logoBg?: string;
  logoColor?: string;
  location?: string;
  description?: string;
  highlights?: string[];
}

export interface ExpertiseItem {
  id: string;
  number?: string;
  title: string;
  description: string;
  category: string;
  subSkills?: { title: string; subtitle?: string }[];
  deliverables?: string[];
  tools?: string[];
  tag?: string;
  accentColor?: string;
}

export interface LeadershipPrinciple {
  number: string;
  title: string;
  description: string;
  tag?: string;
  practice?: string;
  metric?: string;
}

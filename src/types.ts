export interface CaseStudy {
  overview: string;
  problem: string;
  solution: string;
  researchInsights: string[];
  userFlowSteps: string[];
  wireframesDescription: string;
  designSystem: {
    colors: { name: string; hex: string }[];
    typography: string;
    elements: string[];
  };
  prototypeDescription: string;
  finalScreensDescription: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  year: string;
  client: string;
  image: string;
  tags: string[];
  caseStudy: CaseStudy;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
  tags: string[];
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level: number }[];
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  imageUrl: string;
}

export interface ExplorationItem {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  tags: string[];
}

export interface DesignStage {
  step: string;
  title: string;
  description: string;
  details: string[];
  insights: string;
}



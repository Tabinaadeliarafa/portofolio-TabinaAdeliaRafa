export interface Project {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  highlights: string[];
  technologies: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  role: string;
  architectureDetails?: {
    overview: string;
    keyDeliverables: string[];
    schemaOrStack: string;
  };
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  type: 'Internship' | 'Project-Based' | 'Course';
  description: string;
  responsibilities: string[];
  tags: string[];
}

export interface OrganizationItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  description?: string;
  responsibilities: string[];
  featured?: boolean;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
  sublabel?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: string[];
  iconName: string;
}

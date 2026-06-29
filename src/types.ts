export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  images: { src: string; alt: string }[];
  focusAreas?: string[];
  details?: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  department: string;
  location: string;
  highlights: string[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}

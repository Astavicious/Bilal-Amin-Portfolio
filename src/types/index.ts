export interface SiteConfig extends HeaderProps {
  title: string;
  description: string;
  lang: string;
  author: string;
  socialLinks: { text: string; href: string }[];
  canonicalURL?: string;
}

export interface SiteContent {
  hero: HeroProps;
  education: EducationProps[];
  certifications: CertificationProps[];
  experience: ExperienceProps[];
  projects: ProjectProps[];
  skills: SkillGroupProps[];
  hackathons: HackathonProps[];
  about: AboutProps;
}

export interface HeroProps {
  name: string;
  specialty: string;
  summary: string;
  email: string;
  phone?: string;
  location?: string;
  resumeUrl?: string;
}

export interface EducationProps {
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
  location: string;
  grade?: string;
  detail?: string;
}

export interface CertificationProps {
  name: string;
  provider: string;
  status?: string;
}

export interface ExperienceProps {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  location?: string;
  summary: string | string[];
}

export interface ProjectProps {
  name: string;
  summary: string;
  image: string;
  technologies?: string[];
  status?: string;
  linkPreview?: string;
  linkSource?: string;
  linkSourceLabel?: string;
}

export interface SkillGroupProps {
  category: string;
  items: string[];
}

export interface HackathonProps {
  name: string;
  location: string;
  summary: string;
  rank?: string;
  images: string[];
  link?: string;
  preview?: string;
}

export interface AboutProps {
  description: string;
  image: string;
}

export interface HeaderProps {
  siteLogo: string;
  navLinks: { text: string; href: string }[];
}

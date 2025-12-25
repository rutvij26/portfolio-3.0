export interface Experience {
  company: string;
  role: string;
  startDate: string;
  endDate: string | "Present";
  employmentType: "Full Time" | "Freelance" | "Intern";
  location: string;
  bullets: string[];
}

export interface Education {
  degree: string;
  institution: string;
  startDate: string;
  endDate: string;
  location?: string;
}

export interface Skill {
  name: string;
  category:
    | "Languages"
    | "Frameworks"
    | "Databases"
    | "Cloud"
    | "Tools"
    | "Testing"
    | "Other";
  years?: string;
  projects?: string[];
  proficiency?: "Beginner" | "Intermediate" | "Advanced" | "Expert";
}

export interface Project {
  id: string;
  name: string;
  description: string;
  summary: string;
  url?: string;
  githubUrl: string;
  language: string;
  technologies: string[];
  featured?: boolean;
  slug?: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  text: string;
  date: string;
  linkedinUrl?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: "Job Opportunity" | "Collaboration" | "Question";
  message: string;
  honeypot?: string;
  recaptchaToken?: string;
}

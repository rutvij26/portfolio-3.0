import { Experience, Education, Skill, Testimonial } from "@/types";

export const contactInfo = {
  email: "rut26sathe@gmail.com",
  contactEmail: "contact@rutvijsathe.dev",
  location: "Toronto, Canada",
  linkedin: "https://linkedin.com/in/rutvijs",
  portfolio: "https://rutvijsathe.dev",
  github: "https://github.com/rutvij26",
  phone: "9057825025",
};

export const professionalSummary =
  "Results-driven Full Stack Developer with expertise in React.js, Next.js, Node.js, and AdonisJS, known for architecting scalable solutions and migrating complex systems. Adept at collaborating across teams to deliver high-performance web applications that enhance user engagement and operational efficiency.";

export const whyICode =
  "I'm passionate about building scalable, secure systems that solve real-world problems. I thrive on the challenge of architecting solutions that handle millions of transactions while maintaining code quality and team collaboration.";

export const currentLearning =
  "Currently preparing for AWS Certified Solutions Architect exam and exploring advanced system design patterns.";

export const experiences: Experience[] = [
  {
    company: "American Express",
    role: "Software Engineer II",
    startDate: "Oct 2024",
    endDate: "Present",
    employmentType: "Full Time",
    location: "Toronto, ON",
    bullets: [
      "Led the migration of multiple backend services from AdonisJS v5 to v6, ensuring seamless transition to ESM modules and updated IoC container patterns, which improved code maintainability and reduced build times by 20%.",
      "Built responsive user interfaces with Next.js and Tailwind CSS, leading to a 25% increase in user engagement and a 15% reduction in bounce rates.",
      "Implemented robust authentication mechanisms utilizing AdonisJS's built-in Auth module, strengthening security compliance and reducing unauthorized access attempts by 40%.",
      "Adopted Test-Driven Development (TDD) practices with Jest, increasing code reliability and reducing post-deployment defects by 30%.",
      "Improved deployment efficiency by 40% through streamlining CI/CD pipelines using GitHub Actions and Jenkins.",
    ],
  },
  {
    company: "Glitchy Digital Marketing",
    role: "Senior Software Engineer",
    startDate: "May 2024",
    endDate: "Oct 2024",
    employmentType: "Freelance",
    location: "Los Angeles, CA",
    bullets: [
      "Managed a team of 6 software engineers, ensuring on-time product delivery and successful releases.",
      "Enforced GitHub Action checks and conducted thorough code reviews to maintain high code quality.",
      "Designed and architected scalable solutions for new features according to the product roadmap.",
    ],
  },
  {
    company: "Viral Nation",
    role: "Software Engineer",
    startDate: "June 2023",
    endDate: "May 2024",
    employmentType: "Full Time",
    location: "Toronto, ON",
    bullets: [
      "Engineered and optimized GraphQL APIs and backend services, achieving a 50% improvement in data retrieval and manipulation speeds, thereby enhancing overall application performance.",
      "Architected a comprehensive full-stack system, integrating BFF, middleware, orchestration, and backend layers, which bolstered application scalability by 45% and reduced PostgreSQL query times by 80% through strategic caching with Redis.",
    ],
  },
  {
    company: "Nanoleaf",
    role: "Full Stack Developer Intern",
    startDate: "Sept 2022",
    endDate: "Dec 2022",
    employmentType: "Intern",
    location: "Toronto, ON",
    bullets: [
      "Developed an ETL pipeline integrating diverse data sources with Google BigQuery, reducing manual data handling by 50% and enhancing data accessibility.",
      "Improved website loading time by 30% through lazy loading, resulting in a better user experience.",
    ],
  },
];

export const education: Education[] = [
  {
    degree:
      "Post Graduate Certificate, Business Intelligence System Infrastructure",
    institution: "Algonquin College",
    startDate: "Jan 2022",
    endDate: "Dec 2022",
    location: "Ottawa, Canada",
  },
  {
    degree: "Post Graduate Certificate, Big Data Analytics",
    institution: "Georgian College",
    startDate: "May 2021",
    endDate: "Dec 2021",
    location: "Ontario, Canada",
  },
  {
    degree: "B.E. Information Technology",
    institution: "Pune University",
    startDate: "May 2016",
    endDate: "May 2020",
    location: "India",
  },
];

export const skills: Skill[] = [
  // Languages
  {
    name: "TypeScript",
    category: "Languages",
    years: "3+",
    projects: ["Amex", "Viral Nation"],
    proficiency: "Advanced",
  },
  {
    name: "JavaScript",
    category: "Languages",
    years: "4+",
    projects: ["Amex", "Viral Nation", "Nanoleaf"],
    proficiency: "Advanced",
  },
  {
    name: "Go",
    category: "Languages",
    years: "2+",
    projects: ["Amex"],
    proficiency: "Intermediate",
  },
  {
    name: "C#",
    category: "Languages",
    years: "2+",
    projects: [],
    proficiency: "Intermediate",
  },
  {
    name: "SQL",
    category: "Languages",
    years: "4+",
    projects: ["Viral Nation", "Nanoleaf"],
    proficiency: "Advanced",
  },
  {
    name: "Ruby",
    category: "Languages",
    years: "1+",
    projects: [],
    proficiency: "Intermediate",
  },
  {
    name: "Bash",
    category: "Languages",
    years: "3+",
    projects: [],
    proficiency: "Intermediate",
  },
  {
    name: "HTML",
    category: "Languages",
    years: "5+",
    projects: [],
    proficiency: "Expert",
  },
  {
    name: "CSS",
    category: "Languages",
    years: "5+",
    projects: [],
    proficiency: "Expert",
  },
  {
    name: "JSON",
    category: "Languages",
    years: "5+",
    projects: [],
    proficiency: "Expert",
  },
  {
    name: "YAML",
    category: "Languages",
    years: "3+",
    projects: [],
    proficiency: "Advanced",
  },

  // Frameworks
  {
    name: "Node.js",
    category: "Frameworks",
    years: "4+",
    projects: ["Amex", "Viral Nation"],
    proficiency: "Advanced",
  },
  {
    name: "AdonisJS",
    category: "Frameworks",
    years: "2+",
    projects: ["Amex"],
    proficiency: "Advanced",
  },
  {
    name: "Express.js",
    category: "Frameworks",
    years: "4+",
    projects: ["Viral Nation"],
    proficiency: "Advanced",
  },
  {
    name: "Fastify",
    category: "Frameworks",
    years: "2+",
    projects: [],
    proficiency: "Intermediate",
  },
  {
    name: "React.js",
    category: "Frameworks",
    years: "3+",
    projects: ["Amex", "Viral Nation"],
    proficiency: "Advanced",
  },
  {
    name: "Next.js",
    category: "Frameworks",
    years: "2+",
    projects: ["Amex"],
    proficiency: "Advanced",
  },
  {
    name: "Tailwind CSS",
    category: "Frameworks",
    years: "2+",
    projects: ["Amex"],
    proficiency: "Advanced",
  },
  {
    name: "Bootstrap",
    category: "Frameworks",
    years: "3+",
    projects: [],
    proficiency: "Intermediate",
  },
  {
    name: "Redux",
    category: "Frameworks",
    years: "2+",
    projects: [],
    proficiency: "Intermediate",
  },
  {
    name: "Zustand",
    category: "Frameworks",
    years: "1+",
    projects: [],
    proficiency: "Intermediate",
  },

  // Databases
  {
    name: "PostgreSQL",
    category: "Databases",
    years: "3+",
    projects: ["Viral Nation"],
    proficiency: "Advanced",
  },
  {
    name: "MySQL",
    category: "Databases",
    years: "2+",
    projects: [],
    proficiency: "Intermediate",
  },
  {
    name: "MongoDB",
    category: "Databases",
    years: "2+",
    projects: [],
    proficiency: "Intermediate",
  },
  {
    name: "Redis",
    category: "Databases",
    years: "2+",
    projects: ["Viral Nation"],
    proficiency: "Advanced",
  },
  {
    name: "Cassandra",
    category: "Databases",
    years: "1+",
    projects: [],
    proficiency: "Intermediate",
  },
  {
    name: "BigQuery",
    category: "Databases",
    years: "1+",
    projects: ["Nanoleaf"],
    proficiency: "Intermediate",
  },
  {
    name: "SQLite",
    category: "Databases",
    years: "2+",
    projects: [],
    proficiency: "Intermediate",
  },
  {
    name: "Firebase Realtime DB",
    category: "Databases",
    years: "1+",
    projects: [],
    proficiency: "Intermediate",
  },

  // Cloud
  {
    name: "AWS (EC2, S3, RDS)",
    category: "Cloud",
    years: "2+",
    projects: [],
    proficiency: "Intermediate",
  },
  {
    name: "Google Cloud Platform",
    category: "Cloud",
    years: "1+",
    projects: ["Nanoleaf"],
    proficiency: "Intermediate",
  },
  {
    name: "Microsoft Azure",
    category: "Cloud",
    years: "1+",
    projects: [],
    proficiency: "Beginner",
  },
  {
    name: "Vercel",
    category: "Cloud",
    years: "2+",
    projects: [],
    proficiency: "Advanced",
  },
  {
    name: "Netlify",
    category: "Cloud",
    years: "1+",
    projects: [],
    proficiency: "Intermediate",
  },
  {
    name: "Docker",
    category: "Cloud",
    years: "2+",
    projects: [],
    proficiency: "Intermediate",
  },
  {
    name: "GitHub Actions",
    category: "Cloud",
    years: "2+",
    projects: ["Amex"],
    proficiency: "Advanced",
  },
  {
    name: "Jenkins",
    category: "Cloud",
    years: "1+",
    projects: ["Amex"],
    proficiency: "Intermediate",
  },

  // Tools
  {
    name: "Git",
    category: "Tools",
    years: "5+",
    projects: [],
    proficiency: "Expert",
  },
  {
    name: "GitHub",
    category: "Tools",
    years: "5+",
    projects: [],
    proficiency: "Expert",
  },
  {
    name: "Bitbucket",
    category: "Tools",
    years: "2+",
    projects: [],
    proficiency: "Intermediate",
  },
  {
    name: "Postman",
    category: "Tools",
    years: "3+",
    projects: [],
    proficiency: "Advanced",
  },
  {
    name: "Swagger",
    category: "Tools",
    years: "2+",
    projects: [],
    proficiency: "Intermediate",
  },
  {
    name: "Figma",
    category: "Tools",
    years: "2+",
    projects: [],
    proficiency: "Intermediate",
  },
  {
    name: "VS Code",
    category: "Tools",
    years: "4+",
    projects: [],
    proficiency: "Expert",
  },
  {
    name: "Jira",
    category: "Tools",
    years: "3+",
    projects: [],
    proficiency: "Advanced",
  },
  {
    name: "Slack",
    category: "Tools",
    years: "4+",
    projects: [],
    proficiency: "Advanced",
  },

  // Testing
  {
    name: "Jest",
    category: "Testing",
    years: "2+",
    projects: ["Amex"],
    proficiency: "Advanced",
  },
  {
    name: "Mocha",
    category: "Testing",
    years: "1+",
    projects: [],
    proficiency: "Intermediate",
  },
  {
    name: "Chai",
    category: "Testing",
    years: "1+",
    projects: [],
    proficiency: "Intermediate",
  },
  {
    name: "TDD",
    category: "Testing",
    years: "2+",
    projects: ["Amex"],
    proficiency: "Advanced",
  },
  {
    name: "ESLint",
    category: "Testing",
    years: "3+",
    projects: [],
    proficiency: "Advanced",
  },
  {
    name: "Prettier",
    category: "Testing",
    years: "3+",
    projects: [],
    proficiency: "Advanced",
  },

  // Other
  {
    name: "RESTful APIs",
    category: "Other",
    years: "4+",
    projects: [],
    proficiency: "Expert",
  },
  {
    name: "GraphQL",
    category: "Other",
    years: "2+",
    projects: ["Viral Nation"],
    proficiency: "Advanced",
  },
  {
    name: "OAuth2",
    category: "Other",
    years: "2+",
    projects: [],
    proficiency: "Intermediate",
  },
  {
    name: "MVC Architecture",
    category: "Other",
    years: "3+",
    projects: [],
    proficiency: "Advanced",
  },
  {
    name: "WebSockets",
    category: "Other",
    years: "1+",
    projects: [],
    proficiency: "Intermediate",
  },
  {
    name: "Caching Strategies",
    category: "Other",
    years: "2+",
    projects: ["Viral Nation"],
    proficiency: "Advanced",
  },
  {
    name: "Design Patterns",
    category: "Other",
    years: "3+",
    projects: [],
    proficiency: "Advanced",
  },
  {
    name: "Agile & Scrum",
    category: "Other",
    years: "4+",
    projects: [],
    proficiency: "Advanced",
  },
  {
    name: "System Design",
    category: "Other",
    years: "3+",
    projects: [],
    proficiency: "Advanced",
  },
  {
    name: "Data Structures & Algorithms",
    category: "Other",
    years: "5+",
    projects: [],
    proficiency: "Advanced",
  },
];

export const softSkills = [
  "Problem Solving & Critical Thinking",
  "Adaptability",
  "Ownership & Accountability",
  "Attention to Detail",
];

export const testimonials: Testimonial[] = [
  // Placeholder - to be filled from LinkedIn recommendations
  // Structure: { name, role, company, text, date, linkedinUrl? }
];

export const featuredEngineeringFocus = [
  {
    title: "Scalability",
    description:
      "Built systems handling 1M+ daily transactions with optimized performance",
    icon: "⚡",
  },
  {
    title: "Security",
    description:
      "Implemented robust authentication reducing unauthorized access by 40%",
    icon: "🔒",
  },
  {
    title: "Collaboration",
    description:
      "Led teams of 6+ engineers, ensuring code quality and on-time delivery",
    icon: "👥",
  },
];

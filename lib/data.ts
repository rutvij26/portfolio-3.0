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
  {
    name: "Arjun TP",
    role: "Full Stack Engineer",
    company: "Viral Nation",
    text: "I am thrilled to recommend Rutvij as a full stack developer with exceptional logical thinking and top-notch problem-solving abilities. Throughout our collaboration, I have been continually impressed by Rutvij's technical prowess and his ability to tackle complex challenges with ease. Rutvij's logical thinking sets him apart as a full stack developer. He has a remarkable knack for breaking down problems into manageable components and devising elegant solutions that demonstrate both creativity and efficiency. His approach to problem-solving is methodical and thorough, ensuring that every aspect of a project is meticulously addressed. As a teammate, Rutvij is an absolute pleasure to work with. He brings a positive attitude and a collaborative spirit to every task, fostering an environment where ideas are freely exchanged, and teamwork thrives.",
    date: "May 2024",
  },
  {
    name: "Paula Melero Ramírez",
    role: "Software Engineer",
    company: "Viral Nation",
    text: "Rutvij is a top-tier full-stack developer. He was always the first person to provide assistance when I had a TypeScript question or needed a second pair of eyes to debug a problem. During code reviews, Rutvij quickly offered meaningful suggestions to improve the performance and readability of the codebase, always doing so in a respectful and humble manner. One of the things that really impressed me about Rutvij is how quickly he adapted to our new team. He mastered a new backend framework, delivered results in record time, and proactively reached out to team members needing assistance, helping to maintain the team's momentum. I truly believe any team would be fortunate to have Rutvij as a member.",
    date: "May 2024",
  },
  {
    name: "Manpreet Singh Sarao",
    role: "Senior Software Engineer",
    company: "Viral Nation",
    text: "I am pleased to recommend Rutvij Sathe for any software engineering role. Having worked with him on multiple applications, I can attest to his exceptional technical skills and collaborative spirit. Rutvij is a highly skilled developer with extensive experience in modern tech stacks. His expertise in building and optimizing backend architecture, along with writing clean and efficient code, is impressive. He quickly learns new technologies and consistently provides valuable guidance on coding challenges and performance optimizations. Rutvij excels in communication and teamwork, fostering a productive and innovative environment. His commitment to continuous learning and staying updated with industry advancements is commendable.",
    date: "May 2024",
  },
  {
    name: "Mahmoud Mraisi",
    role: "Senior Software Engineer",
    company: "Viral Nation",
    text: "I had the pleasure of working with Rutvij Sathe at Viral Nation. During this time, he demonstrated exceptional skills in social data and API development. Rutvij's technical expertise in building and optimizing backend architecture is impressive and noteworthy. Rutvij is a talented problem-solver with strong coding skills and a collaborative spirit. His innovative approach to backend services and teamwork consistently led to successful project outcomes. I highly recommend Rutvij for any software engineering role. His technical skills, problem-solving abilities, and dedication make him a valuable asset to any team.",
    date: "May 2024",
  },
  {
    name: "Kaushal Luffa",
    role: "Intermediate Software Engineer",
    company: "Viral Nation",
    text: "Rutvij was the person who taught me how to learn new things fast. He is best in class developer with experience in almost all modern tech stack. I remember anytime i had a problem with my code or if i wanted a performance optimization review on my code i couldnt think of anyone but him. He always suggested and directed me towards the best possible method to do it. I would recommend him because he is an awesome developer, a teammate and also if you want someone who can adapt to new stack or even upgrade and improve existing code rutvij is your guy.",
    date: "May 2024",
  },
  {
    name: "Klevis Doga",
    role: "Software Engineer",
    company: "Viral Nation",
    text: "I had the pleasure of working closely with Rutvij, and I can confidently say he is an exceptional full stack developer who consistently delivers top-notch results. His technical expertise spans both front-end and back-end development, allowing him to contribute significantly to our projects from start to finish. Rutvij is a master at writing clean, efficient, and maintainable code. He has a knack for optimizing existing systems, resulting in improved performance and reliability. His ability to stay updated with the latest industry advancements and technologies demonstrates his commitment to continuous learning and excellence. Beyond his technical skills, Rutvij excels in communication and collaboration. He is always willing to share his knowledge and innovative ideas, fostering a collaborative and productive team environment.",
    date: "May 2024",
  },
  {
    name: "Muskan Dhakla",
    role: "Software Engineer",
    company: "Viral Nation",
    text: "Rutvij is an outstanding full stack developer who consistently surpasses expectations to deliver exceptional results. He excels in communication, collaborating with the team and effectively presenting innovative ideas for better results. He is not only proficient in writing clean and efficient code but also excels in optimizing existing systems for improved performance. He remains updated on the most recent industry advancements demonstrating a commitment to continuous learning. I highly recommend Rutvij for a full stack developer role, knowing that he will bring dedication and innovation to the table.",
    date: "December 2023",
  },
  {
    name: "Javier Munster",
    role: "Cloud Architect",
    company: "Nanoleaf",
    text: "Rutvij is a great coworker and great guy. He picked up our tech stack very fast and was making contributions right away. Highly recommended.",
    date: "January 2023",
  },
  {
    name: "Vinit Acharekar",
    role: "Engineering Manager",
    company: "Nanoleaf",
    text: "Rutvij did a great job as Full-stack developer Intern at Nanoleaf during his term with us. He is a quick learner and adapted to our wide-spread tech-stack in no time. He has exceptional command over his front-end skills and did a great job at picking up nodejs and creating some useful tools for us for Data Analytics automations. He is really good with solving technical problems and coming up with quick solutions. He is a great listener which helps him understand the requirements without many problems. With his technical skills, problem solving abilities and knowledge of Big Data, he will be a great asset to any team that he joins.",
    date: "December 2022",
  },
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

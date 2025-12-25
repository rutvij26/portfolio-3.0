"use client";

import React from "react";
import {
  SiTypescript,
  SiJavascript,
  SiGo,
  SiSharp,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiNodedotjs,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiRedux,
  SiExpress,
  SiDocker,
  SiAmazon,
  SiGooglecloud,
  SiVercel,
  SiNetlify,
  SiGithub,
  SiGit,
  SiBitbucket,
  SiPostman,
  SiSwagger,
  SiFigma,
  SiJira,
  SiSlack,
  SiJest,
  SiGraphql,
  SiFirebase,
  SiJenkins,
  SiHtml5,
  SiCss3,
  SiRuby,
  SiAdonisjs,
  SiFastify,
  SiJson,
  SiYaml,
} from "react-icons/si";
import { FaDatabase, FaCode, FaTools, FaFlask } from "react-icons/fa";

interface SkillIconProps {
  skillName: string;
}

export function SkillIcon({ skillName }: SkillIconProps) {
  const iconProps = { size: 24 };

  const getIcon = (): React.ReactElement => {
    switch (skillName) {
      // Languages
      case "TypeScript":
        return (
          <SiTypescript {...iconProps} className="w-6 h-6 text-blue-600" />
        );
      case "JavaScript":
        return (
          <SiJavascript {...iconProps} className="w-6 h-6 text-yellow-500" />
        );
      case "Go":
        return <SiGo {...iconProps} className="w-6 h-6 text-cyan-500" />;
      case "C#":
        return <SiSharp {...iconProps} className="w-6 h-6 text-purple-600" />;
      case "SQL":
        return <FaDatabase {...iconProps} className="w-6 h-6 text-blue-500" />;
      case "Ruby":
        return <SiRuby {...iconProps} className="w-6 h-6 text-red-600" />;
      case "Bash":
        return (
          <FaCode
            {...iconProps}
            className="w-6 h-6 text-gray-700 dark:text-gray-300"
          />
        );
      case "HTML":
        return <SiHtml5 {...iconProps} className="w-6 h-6 text-orange-600" />;
      case "CSS":
        return <SiCss3 {...iconProps} className="w-6 h-6 text-blue-500" />;
      case "JSON":
        return (
          <SiJson
            {...iconProps}
            className="w-6 h-6 text-gray-700 dark:text-gray-300"
          />
        );
      case "YAML":
        return <SiYaml {...iconProps} className="w-6 h-6 text-red-600" />;

      // Frameworks
      case "Node.js":
        return (
          <SiNodedotjs {...iconProps} className="w-6 h-6 text-green-600" />
        );
      case "AdonisJS":
        return (
          <SiAdonisjs {...iconProps} className="w-6 h-6 text-indigo-600" />
        );
      case "Express.js":
        return (
          <SiExpress
            {...iconProps}
            className="w-6 h-6 text-gray-800 dark:text-gray-200"
          />
        );
      case "Fastify":
        return (
          <SiFastify
            {...iconProps}
            className="w-6 h-6 text-black dark:text-white"
          />
        );
      case "React.js":
        return <SiReact {...iconProps} className="w-6 h-6 text-cyan-500" />;
      case "Next.js":
        return (
          <SiNextdotjs
            {...iconProps}
            className="w-6 h-6 text-black dark:text-white"
          />
        );
      case "Tailwind CSS":
        return (
          <SiTailwindcss {...iconProps} className="w-6 h-6 text-cyan-500" />
        );
      case "Bootstrap":
        return (
          <SiBootstrap {...iconProps} className="w-6 h-6 text-purple-600" />
        );
      case "Redux":
        return <SiRedux {...iconProps} className="w-6 h-6 text-purple-600" />;
      case "Zustand":
        return <FaCode {...iconProps} className="w-6 h-6 text-orange-600" />;

      // Databases
      case "PostgreSQL":
        return (
          <SiPostgresql {...iconProps} className="w-6 h-6 text-blue-600" />
        );
      case "MySQL":
        return <SiMysql {...iconProps} className="w-6 h-6 text-blue-600" />;
      case "MongoDB":
        return <SiMongodb {...iconProps} className="w-6 h-6 text-green-600" />;
      case "Redis":
        return <SiRedis {...iconProps} className="w-6 h-6 text-red-600" />;
      case "Cassandra":
        return <FaDatabase {...iconProps} className="w-6 h-6 text-blue-600" />;
      case "BigQuery":
        return (
          <SiGooglecloud {...iconProps} className="w-6 h-6 text-blue-500" />
        );
      case "SQLite":
        return <FaDatabase {...iconProps} className="w-6 h-6 text-blue-500" />;
      case "Firebase Realtime DB":
        return (
          <SiFirebase {...iconProps} className="w-6 h-6 text-orange-500" />
        );

      // Cloud
      case "AWS (EC2, S3, RDS)":
        return <SiAmazon {...iconProps} className="w-6 h-6 text-orange-500" />;
      case "Google Cloud Platform":
        return (
          <SiGooglecloud {...iconProps} className="w-6 h-6 text-blue-500" />
        );
      case "Microsoft Azure":
        return <FaCode {...iconProps} className="w-6 h-6 text-blue-600" />;
      case "Vercel":
        return (
          <SiVercel
            {...iconProps}
            className="w-6 h-6 text-black dark:text-white"
          />
        );
      case "Netlify":
        return <SiNetlify {...iconProps} className="w-6 h-6 text-teal-500" />;
      case "Docker":
        return <SiDocker {...iconProps} className="w-6 h-6 text-blue-500" />;
      case "GitHub Actions":
        return (
          <SiGithub
            {...iconProps}
            className="w-6 h-6 text-gray-800 dark:text-gray-200"
          />
        );
      case "Jenkins":
        return <SiJenkins {...iconProps} className="w-6 h-6 text-red-600" />;

      // Tools
      case "Git":
        return <SiGit {...iconProps} className="w-6 h-6 text-orange-600" />;
      case "GitHub":
        return (
          <SiGithub
            {...iconProps}
            className="w-6 h-6 text-gray-800 dark:text-gray-200"
          />
        );
      case "Bitbucket":
        return <SiBitbucket {...iconProps} className="w-6 h-6 text-blue-600" />;
      case "Postman":
        return <SiPostman {...iconProps} className="w-6 h-6 text-orange-500" />;
      case "Swagger":
        return <SiSwagger {...iconProps} className="w-6 h-6 text-green-600" />;
      case "Figma":
        return <SiFigma {...iconProps} className="w-6 h-6 text-purple-600" />;
      case "VS Code":
        return <FaCode {...iconProps} className="w-6 h-6 text-blue-600" />;
      case "Jira":
        return <SiJira {...iconProps} className="w-6 h-6 text-blue-600" />;
      case "Slack":
        return <SiSlack {...iconProps} className="w-6 h-6 text-purple-600" />;

      // Testing
      case "Jest":
        return <SiJest {...iconProps} className="w-6 h-6 text-red-600" />;
      case "Mocha":
        return <FaFlask {...iconProps} className="w-6 h-6 text-amber-600" />;
      case "Chai":
        return <FaFlask {...iconProps} className="w-6 h-6 text-red-600" />;
      case "TDD":
        return <FaCode {...iconProps} className="w-6 h-6 text-green-600" />;
      case "ESLint":
        return <FaCode {...iconProps} className="w-6 h-6 text-purple-600" />;
      case "Prettier":
        return (
          <FaCode
            {...iconProps}
            className="w-6 h-6 text-gray-800 dark:text-gray-200"
          />
        );

      // Other
      case "RESTful APIs":
        return <FaCode {...iconProps} className="w-6 h-6 text-blue-600" />;
      case "GraphQL":
        return <SiGraphql {...iconProps} className="w-6 h-6 text-pink-600" />;
      case "OAuth2":
        return <FaCode {...iconProps} className="w-6 h-6 text-blue-600" />;
      case "MVC Architecture":
        return (
          <FaCode
            {...iconProps}
            className="w-6 h-6 text-gray-700 dark:text-gray-300"
          />
        );
      case "WebSockets":
        return <FaCode {...iconProps} className="w-6 h-6 text-green-600" />;
      case "Caching Strategies":
        return (
          <FaDatabase {...iconProps} className="w-6 h-6 text-yellow-600" />
        );
      case "Design Patterns":
        return <FaCode {...iconProps} className="w-6 h-6 text-purple-600" />;
      case "Agile & Scrum":
        return <FaTools {...iconProps} className="w-6 h-6 text-blue-600" />;
      case "System Design":
        return <FaCode {...iconProps} className="w-6 h-6 text-indigo-600" />;
      case "Data Structures & Algorithms":
        return <FaCode {...iconProps} className="w-6 h-6 text-orange-600" />;

      default:
        return <FaCode {...iconProps} className="w-6 h-6 text-gray-500" />;
    }
  };

  return getIcon();
}

"use client";

import Link from "next/link";
import { Project } from "@/types";
import { trackProjectView } from "@/lib/analytics";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const handleExternalClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    trackProjectView(project.name);
    const url = e.currentTarget.href;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleInternalClick = () => {
    trackProjectView(project.name);
  };

  return (
    <div className="p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white pr-2">
          {project.name}
        </h3>
        {project.featured && (
          <span className="px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded flex-shrink-0">
            Featured
          </span>
        )}
      </div>
      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
        {project.summary}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded">
          {project.language}
        </span>
        {project.technologies
          .filter((tech) => tech !== project.language)
          .slice(0, 3)
          .map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded"
            >
              {tech}
            </span>
          ))}
      </div>
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
            onClick={handleExternalClick}
          >
            Live Demo
          </a>
        )}
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
          onClick={handleExternalClick}
        >
          GitHub
        </a>
        {project.slug && (
          <Link
            href={`/projects/${project.slug}`}
            className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
            onClick={handleInternalClick}
          >
            Details
          </Link>
        )}
      </div>
    </div>
  );
}

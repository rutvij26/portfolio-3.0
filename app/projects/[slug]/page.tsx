import { Navbar } from "@/components/Navbar";
import { fetchGitHubProjects } from "@/lib/github";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const projects = await fetchGitHubProjects();
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <Link
            href="/projects"
            className="text-sm sm:text-base text-blue-600 dark:text-blue-400 hover:underline mb-6 inline-block"
          >
            ← Back to Projects
          </Link>

          <div className="mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {project.name}
            </h1>
            {project.featured && (
              <span className="px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded">
                Featured
              </span>
            )}
          </div>

          <div className="prose prose-sm sm:prose-base md:prose-lg dark:prose-invert max-w-none">
            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 sm:mb-8">
              {project.description || project.summary}
            </p>

            <div className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Technologies
              </h2>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded">
                  {project.language}
                </span>
                {project.technologies
                  .filter((tech) => tech !== project.language)
                  .map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded"
                    >
                      {tech}
                    </span>
                  ))}
              </div>
            </div>

            <div className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Links
              </h2>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Live Demo →
                  </a>
                )}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base text-blue-600 dark:text-blue-400 hover:underline"
                >
                  View on GitHub →
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

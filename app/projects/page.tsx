import { Navbar } from "@/components/Navbar";
import { fetchGitHubProjects } from "@/lib/github";
import { ProjectFilter } from "@/components/ProjectFilter";

export default async function ProjectsPage() {
  const projects = await fetchGitHubProjects();

  // Extract unique technologies and languages for filtering
  const allTechnologies = Array.from(
    new Set(projects.flatMap((p) => p.technologies))
  ).sort();

  const allLanguages = Array.from(
    new Set(projects.map((p) => p.language))
  ).sort();

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Projects
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
              Curated selection of my work from GitHub
            </p>
          </div>

          <ProjectFilter
            projects={projects}
            technologies={allTechnologies}
            languages={allLanguages}
          />
        </div>
      </main>
    </>
  );
}

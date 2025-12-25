import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { ResumeDownload } from "@/components/ResumeDownload";
import {
  contactInfo,
  professionalSummary,
  whyICode,
  currentLearning,
  featuredEngineeringFocus,
} from "@/lib/data";
import { getFeaturedProjects } from "@/lib/github";
import { ProjectCard } from "@/components/ProjectCard";

export default async function Home() {
  const featuredProjects = await getFeaturedProjects();

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white dark:bg-gray-900">
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
          <div className="text-center space-y-4 sm:space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
              Rutvij Sathe
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-gray-400">
              Software Engineer II @ American Express
            </p>
            <p className="text-base sm:text-lg text-gray-500 dark:text-gray-500">
              {contactInfo.location}
            </p>
            <p className="text-base sm:text-lg max-w-2xl mx-auto text-gray-700 dark:text-gray-300 leading-relaxed px-4">
              {professionalSummary}
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 pt-4 px-4">
              <ResumeDownload className="w-full sm:w-auto" />
              <Link
                href="/projects"
                className="w-full sm:w-auto text-center px-6 py-3 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-lg font-medium transition-colors"
              >
                See My Work
              </Link>
            </div>
          </div>
        </section>

        {/* Why I Code */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Why I Code
          </h2>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {whyICode}
          </p>
        </section>

        {/* Current Learning */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Currently Learning
          </h2>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300">
            {currentLearning}
          </p>
        </section>

        {/* Featured Engineering Focus */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">
            Core Strengths
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {featuredEngineeringFocus.map((focus, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="text-4xl mb-4">{focus.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {focus.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {focus.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href="/projects"
                className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
              >
                View All Projects →
              </Link>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 sm:p-8 text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Let&apos;s Connect
            </h2>
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-6">
              Interested in collaborating or have a question? I&apos;d love to
              hear from you.
            </p>
            <Link
              href="/contact"
              className="inline-block w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
            >
              Get In Touch
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

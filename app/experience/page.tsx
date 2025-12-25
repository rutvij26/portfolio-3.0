import { Navbar } from "@/components/Navbar";
import { ResumeDownload } from "@/components/ResumeDownload";
import { experiences } from "@/lib/data";

export default function ExperiencePage() {
  const getEmploymentBadgeColor = (type: string) => {
    switch (type) {
      case "Freelance":
        return "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200";
      case "Intern":
        return "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200";
      default:
        return "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200";
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Experience
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
              A timeline of my professional journey
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative pl-8 pb-8 border-l-2 border-gray-200 dark:border-gray-700"
              >
                <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full border-2 border-white dark:border-gray-900" />
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex-1">
                      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                        {exp.role}
                      </h2>
                      <h3 className="text-lg sm:text-xl text-gray-700 dark:text-gray-300">
                        {exp.company}
                      </h3>
                    </div>
                    <div className="flex flex-col items-start md:items-end mt-2 md:mt-0">
                      <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                        {exp.startDate} – {exp.endDate}
                      </span>
                      <span
                        className={`px-2 sm:px-3 py-1 text-xs font-medium rounded-full mt-2 ${getEmploymentBadgeColor(
                          exp.employmentType
                        )}`}
                      >
                        {exp.employmentType}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4">
                    {exp.location}
                  </p>
                  <ul className="space-y-2">
                    {exp.bullets.map((bullet, bulletIndex) => (
                      <li
                        key={bulletIndex}
                        className="text-sm sm:text-base text-gray-700 dark:text-gray-300 flex items-start"
                      >
                        <span className="mr-2 text-blue-600 dark:text-blue-400 flex-shrink-0">
                          •
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <ResumeDownload />
          </div>
        </div>
      </main>
    </>
  );
}

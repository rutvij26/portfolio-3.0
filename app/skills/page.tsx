import { Navbar } from "@/components/Navbar";
import { skills } from "@/lib/data";
import { SkillIcon } from "@/components/SkillIcon";

export default function SkillsPage() {
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  const categories = Object.keys(skillsByCategory);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Skills
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
              Technologies and tools I work with
            </p>
          </div>

          <div className="space-y-8 sm:space-y-12">
            {categories.map((category) => (
              <div key={category}>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                  {category}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                  {skillsByCategory[category].map((skill, index) => (
                    <div
                      key={index}
                      className="p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="flex-shrink-0">
                          <SkillIcon skillName={skill.name} />
                        </div>
                        <div className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white">
                          {skill.name}
                        </div>
                      </div>
                      {skill.years && (
                        <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-1 ml-9">
                          {skill.years} years
                        </div>
                      )}
                      {skill.projects && skill.projects.length > 0 && (
                        <div className="text-xs text-gray-500 dark:text-gray-500 mt-2 ml-9 line-clamp-2">
                          Used in: {skill.projects.join(", ")}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

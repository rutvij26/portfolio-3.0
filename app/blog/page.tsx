import { Navbar } from '@/components/Navbar';

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Blog
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
              Technical articles and insights
            </p>
          </div>

          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">
              Blog posts will be displayed here once published.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}


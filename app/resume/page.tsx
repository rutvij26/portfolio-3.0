import { Navbar } from '@/components/Navbar';
import { ResumeDownload } from '@/components/ResumeDownload';

export default function ResumePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Resume
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-6">
              ATS-friendly resume optimized for applicant tracking systems
            </p>
            <ResumeDownload />
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 sm:p-6 overflow-hidden">
            <iframe
              src="/api/resume"
              className="w-full h-[600px] sm:h-[800px] border-0"
              title="Resume Preview"
            />
          </div>

          <div className="mt-8 text-center">
            <ResumeDownload />
          </div>
        </div>
      </main>
    </>
  );
}


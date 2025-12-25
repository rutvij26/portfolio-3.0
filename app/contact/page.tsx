import { Navbar } from '@/components/Navbar';
import { ResumeDownload } from '@/components/ResumeDownload';
import { ContactForm } from '@/components/ContactForm';
import { contactInfo } from '@/lib/data';

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Contact
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
              Let's connect and discuss opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Get In Touch
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                    Email
                  </h3>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {contactInfo.email}
                  </a>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                    Location
                  </h3>
                  <p className="text-gray-900 dark:text-white">
                    {contactInfo.location}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                    Connect
                  </h3>
                  <div className="flex flex-col space-y-2">
                    <a
                      href={contactInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      LinkedIn
                    </a>
                    <a
                      href={contactInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      GitHub
                    </a>
                    <a
                      href={contactInfo.portfolio}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Portfolio
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <ResumeDownload />
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}


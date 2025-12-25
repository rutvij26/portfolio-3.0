'use client';

import { trackResumeDownload } from '@/lib/analytics';

interface ResumeDownloadProps {
  variant?: 'button' | 'link';
  className?: string;
}

export function ResumeDownload({ variant = 'button', className = '' }: ResumeDownloadProps) {
  const handleDownload = (e?: React.MouseEvent<HTMLAnchorElement>) => {
    if (e) {
      e.preventDefault();
    }
    trackResumeDownload();
    window.open('/api/resume', '_blank', 'noopener,noreferrer');
  };

  if (variant === 'link') {
    return (
      <a
        href="/api/resume"
        onClick={handleDownload}
        className={`text-blue-600 dark:text-blue-400 hover:underline ${className}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Download Resume
      </a>
    );
  }

  return (
    <button
      onClick={() => handleDownload()}
      className={`w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors ${className}`}
    >
      Download Resume
    </button>
  );
}


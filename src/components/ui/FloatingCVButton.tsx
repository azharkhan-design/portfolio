import React from 'react';

interface FloatingCVButtonProps {
  /**
   * PDF path or URL. Defaults to the local file in public/Resume/
   */
  pdfUrl?: string;
  className?: string;
}

export const FloatingCVButton: React.FC<FloatingCVButtonProps> = ({
  pdfUrl = '/Resume/Azhar-CV-New.pdf',
  className = ''
}) => {
  return (
    <div
      className={`fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 ${className}`}
    >
      <a
        href={pdfUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open Azhar Khan Resume in new window"
        title="Open Resume / CV (PDF in new window)"
        className="group relative p-[1.5px] rounded-full flex items-center justify-center overflow-hidden border border-subtle transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer select-none"
      >
        {/* Animated tracing border beam */}
        <span
          className="absolute inset-[-250%] animate-border-beam pointer-events-none"
          style={{
            background:
              'conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent 240deg, #92D0AB 360deg)'
          }}
          aria-hidden="true"
        />

        {/* Base subtle border ring for structural definition */}
        <span className="absolute inset-0 rounded-full border border-subtle/80 pointer-events-none" />

        {/* Inner Button Content Pill */}
        <span className="relative z-10 flex items-center gap-3 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-white dark:bg-[#111216] text-primary transition-all">
          {/* PDF Document Icon */}
          <svg
            className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-secondary group-hover:text-[#92D0AB] group-hover:scale-110 transition-all duration-300 shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
          </svg>

          {/* Bold Text: Resume */}
          <span className="text-sm sm:text-[15px] font-mono font-bold tracking-wider text-primary group-hover:text-[#92D0AB] transition-colors">
            Resume
          </span>
        </span>
      </a>
    </div>
  );
};

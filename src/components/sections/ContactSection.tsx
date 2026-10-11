import React, { useState } from 'react';

interface ContactSectionProps {
  onNavigate?: (sectionId: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onNavigate: _onNavigate }) => {
  const [copied, setCopied] = useState(false);

  const contactData = {
    email: 'almaazkhan@gmail.com',
    linkedin: 'https://www.linkedin.com/in/azharkhan1/',
    behance: 'https://www.behance.net/azharkhan1',
    location: 'Delhi NCR - INDIA'
  };

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(contactData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <section id="contact" className="py-16 md:py-24 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Section Category Header */}
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <div className="flex items-center gap-3">
            <div className="flex items-center -space-x-1">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FDD02D]" title="Gold" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#DD1251]" title="Crimson" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#92D0AB]" title="Mint" />
            </div>
            <span className="text-[13px] sm:text-[14px] font-mono uppercase tracking-[0.25em] text-[#92D0AB] font-semibold">
              GET IN TOUCH
            </span>
          </div>

          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-subtle text-xs font-mono text-secondary">
            <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
            <span>{contactData.location}</span>
          </div>
        </div>

        {/* Modern Bento Dispatch Layout */}
        <div className="space-y-4 sm:space-y-5">
          {/* Main Canvas Card */}
          <div className="w-full p-6 sm:p-8 md:p-10 rounded-3xl bg-surface border border-subtle flex flex-col justify-between relative overflow-hidden group">
            {/* Ambient radial blur glow */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#92D0AB]/10 blur-[90px] pointer-events-none" />

            <div>
              {/* Headline */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-display font-extrabold text-primary tracking-tight leading-[1.12] mb-4">
                Have a project in mind?{' '}
                <span className="font-serif italic font-normal text-primary">
                  Let's work together.
                </span>
              </h2>

              <p className="text-xs sm:text-sm text-secondary leading-relaxed max-w-2xl font-normal mb-8">
                Available for Lead and Senior Product Design roles, design systems, and complex enterprise applications across Fintech, Healthcare, and SaaS — based in <strong className="text-primary font-medium">{contactData.location}</strong>.
              </p>
            </div>

            {/* 1-Click Magnetic Email Capsule */}
            <div className="pt-4 border-t border-subtle flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2.5 sm:gap-3 p-1.5 sm:p-2 rounded-2xl sm:rounded-full bg-white dark:bg-neutral-900 border border-subtle">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-badge flex items-center justify-center text-primary shrink-0">
                  <svg
                    className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.8}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                <span className="text-xs sm:text-sm font-mono font-medium text-primary px-1 select-all">
                  {contactData.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="ml-auto px-3 py-1 rounded-full text-xs font-mono font-semibold bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:scale-105 active:scale-95 transition-all cursor-pointer"
                >
                  {copied ? '✓ Copied' : 'Copy'}
                </button>
              </div>

              <a
                href={`mailto:${contactData.email}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-subtle hover:border-strong text-xs font-mono text-primary hover:bg-badge transition-all"
              >
                <span>Open Mail App</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

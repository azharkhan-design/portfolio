import React, { useState } from 'react';

interface ContactSectionProps {
  onNavigate?: (sectionId: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onNavigate: _onNavigate }) => {
  const [copied, setCopied] = useState(false);

  const contactData = {
    email: 'almaazkhan@gmail.com',
    linkedin: 'https://linkedin.com/in/azharkhan1',
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
                <span className="font-serif italic font-normal text-secondary">
                  Let's work together.
                </span>
              </h2>

              <p className="text-xs sm:text-sm text-secondary leading-relaxed max-w-2xl font-normal mb-8">
                Available for Lead and Senior Product Design roles, design systems, and complex enterprise applications across Fintech, Healthcare, and SaaS — based in <strong className="text-primary font-medium">{contactData.location}</strong> (open to Remote & Hybrid).
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

          {/* Bottom Row: 4 Connection Tiles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            
            {/* Tile 1: Location */}
            <div className="p-5 rounded-2xl bg-surface border border-subtle flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white dark:bg-neutral-900 border border-subtle flex items-center justify-center text-[#92D0AB] shrink-0">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
              </div>
              <div className="min-w-0">
                <div className="text-xs font-bold text-primary">Location</div>
                <div className="text-[11px] font-mono text-secondary truncate">{contactData.location}</div>
              </div>
            </div>

            {/* Tile 2: LinkedIn */}
            <a
              href={contactData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-surface border border-subtle hover:border-strong flex items-center justify-between group transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white dark:bg-neutral-900 border border-subtle flex items-center justify-center text-primary group-hover:text-[#0D99FF] transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.762-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-bold text-primary">LinkedIn</div>
                  <div className="text-[11px] font-mono text-muted">/in/azharkhan1</div>
                </div>
              </div>
              <span className="text-secondary group-hover:text-primary transition-transform group-hover:translate-x-0.5">
                ↗
              </span>
            </a>

            {/* Tile 3: Behance */}
            <a
              href={contactData.behance}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-surface border border-subtle hover:border-strong flex items-center justify-between group transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white dark:bg-neutral-900 border border-subtle flex items-center justify-center text-primary group-hover:text-[#0057ff] transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16.969 16.927a2.561 2.561 0 0 0 1.901.677 2.501 2.501 0 0 0 1.531-.475c.362-.235.636-.584.779-.99h2.585a5.091 5.091 0 0 1-1.9 2.896 5.292 5.292 0 0 1-3.091.88 5.839 5.839 0 0 1-2.284-.433 4.871 4.871 0 0 1-1.723-1.211 5.657 5.657 0 0 1-1.08-1.874 7.057 7.057 0 0 1-.383-2.393c-.005-.8.129-1.595.396-2.349a5.313 5.313 0 0 1 5.088-3.604 4.87 4.87 0 0 1 2.376.563c.661.362 1.231.87 1.668 1.485a6.2 6.2 0 0 1 .943 2.133c.194.821.263 1.666.205 2.508h-7.699c-.063.79.184 1.574.688 2.187ZM6.947 4.084a8.065 8.065 0 0 1 1.928.198 4.29 4.29 0 0 1 1.49.638c.418.303.748.711.958 1.182.241.579.357 1.203.341 1.83a3.506 3.506 0 0 1-.506 1.961 3.726 3.726 0 0 1-1.503 1.287 3.588 3.588 0 0 1 2.027 1.437c.464.747.697 1.615.67 2.494a4.593 4.593 0 0 1-.423 2.032 3.945 3.945 0 0 1-1.163 1.413 5.114 5.114 0 0 1-1.683.807 7.135 7.135 0 0 1-1.928.259H0V4.084h6.947Zm-.235 12.9c.308.004.616-.029.916-.099a2.18 2.18 0 0 0 .766-.332c.228-.158.411-.371.534-.619.142-.317.208-.663.191-1.009a2.08 2.08 0 0 0-.642-1.715 2.618 2.618 0 0 0-1.696-.505h-3.54v4.279h3.471Zm13.635-5.967a2.13 2.13 0 0 0-1.654-.619 2.336 2.336 0 0 0-1.163.259 2.474 2.474 0 0 0-.738.62 2.359 2.359 0 0 0-.396.792c-.074.239-.12.485-.137.734h4.769a3.239 3.239 0 0 0-.679-1.785l-.002-.001Zm-13.813-.648a2.254 2.254 0 0 0 1.423-.433c.399-.355.607-.88.56-1.413a1.916 1.916 0 0 0-.178-.891 1.298 1.298 0 0 0-.495-.533 1.851 1.851 0 0 0-.711-.274 3.966 3.966 0 0 0-.835-.073H3.241v3.631h3.293v-.014ZM21.62 5.122h-5.976v1.527h5.976V5.122Z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-bold text-primary">Behance</div>
                  <div className="text-[11px] font-mono text-muted">/azharkhan1</div>
                </div>
              </div>
              <span className="text-secondary group-hover:text-primary transition-transform group-hover:translate-x-0.5">
                ↗
              </span>
            </a>

            {/* Tile 4: Direct Correspondence Rate */}
            <div className="p-5 rounded-2xl bg-surface border border-subtle flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white dark:bg-neutral-900 border border-subtle flex items-center justify-center text-primary shrink-0">
                ⚡
              </div>
              <div>
                <div className="text-xs font-bold text-primary">Response Time</div>
                <div className="text-[11px] font-mono text-[#92D0AB] font-medium">Within 24 hours</div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

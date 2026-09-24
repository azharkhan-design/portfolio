import React, { useState, useEffect } from 'react';
import { EXPERIENCES } from '../../data/experience';
import { useSmoothScroll } from '../../context/SmoothScroll';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  driveUrl?: string;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  driveUrl = '/Resume/Azhar-CV.pdf'
}) => {
  const [activeTab, setActiveTab] = useState<'summary' | 'printable'>('summary');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const { lenis } = useSmoothScroll();

  // Close on Escape key press and manage Lenis scroll interception
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      lenis?.stop();
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
      lenis?.start();
    }

    return () => {
      document.body.style.overflow = '';
      lenis?.start();
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, lenis]);

  if (!isOpen) return null;

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText('almaazkhan@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleDownload = () => {
    setIsDownloading(true);
    if (driveUrl && driveUrl.trim() !== '' && driveUrl !== '#') {
      window.open(driveUrl, '_blank');
      setIsDownloading(false);
    } else {
      // If no external URL provided, trigger formatted print/PDF save
      setTimeout(() => {
        setIsDownloading(false);
        window.print();
      }, 400);
    }
  };

  return (
    <div
      data-lenis-prevent
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 bg-black/75 backdrop-blur-md animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Azhar Khan Resume Modal"
    >
      <div
        data-lenis-prevent
        className="relative w-full max-w-4xl h-[88vh] max-h-[88vh] bg-surface border border-subtle dark:border-white/15 rounded-2xl sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden text-primary transition-all duration-300 transform-gpu"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header Bar */}
        <div className="flex items-center justify-between px-5 sm:px-7 py-4 sm:py-5 border-b border-subtle bg-surface/80 backdrop-blur-md sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-subtle p-1 bg-surface flex items-center justify-center shrink-0">
              <img
                src="/images/Logo/AzharLogo.svg"
                alt="Azhar Khan Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-display font-bold text-primary tracking-tight">
                  Azhar Khan
                </h2>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-medium bg-[#92D0AB]/15 text-[#92D0AB] border border-[#92D0AB]/30">
                  Lead UI/UX
                </span>
              </div>
              <p className="text-xs text-secondary font-mono">
                15+ Years Experience · Enterprise SaaS & Healthcare
              </p>
            </div>
          </div>

          {/* Quick Actions & Close */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-subtle hover:border-strong text-xs font-mono text-secondary hover:text-primary transition-colors cursor-pointer"
              title="Print Resume or Save as PDF"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              <span>Print</span>
            </button>

            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:scale-105 active:scale-95 text-xs font-mono font-medium shadow-sm transition-all cursor-pointer"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span>{isDownloading ? 'Preparing...' : 'Download PDF'}</span>
            </button>

            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-1.5 rounded-full border border-subtle hover:border-strong text-secondary hover:text-primary hover:bg-badge active:scale-95 transition-all cursor-pointer ml-1"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-2 px-5 sm:px-7 pt-3 border-b border-subtle bg-surface/50 text-xs font-mono">
          <button
            onClick={() => setActiveTab('summary')}
            className={`pb-2.5 px-2 border-b-2 font-medium transition-colors cursor-pointer ${
              activeTab === 'summary'
                ? 'border-[#92D0AB] text-primary'
                : 'border-transparent text-muted hover:text-primary'
            }`}
          >
            Profile & Highlights
          </button>
          <button
            onClick={() => setActiveTab('printable')}
            className={`pb-2.5 px-2 border-b-2 font-medium transition-colors cursor-pointer ${
              activeTab === 'printable'
                ? 'border-[#92D0AB] text-primary'
                : 'border-transparent text-muted hover:text-primary'
            }`}
          >
            Full ATS Printable Sheet
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div
          data-lenis-prevent
          className="flex-1 min-h-0 overflow-y-auto overscroll-contain p-5 sm:p-7 md:p-8 space-y-8"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {activeTab === 'summary' ? (
            <>
              {/* 4 Core Career Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                <div className="p-3.5 sm:p-4 rounded-xl bg-surface-elevated border border-subtle">
                  <div className="text-xl sm:text-2xl font-display font-extrabold text-primary">15+</div>
                  <div className="text-[11px] font-mono text-muted uppercase tracking-wider mt-0.5">Years Experience</div>
                </div>
                <div className="p-3.5 sm:p-4 rounded-xl bg-surface-elevated border border-subtle">
                  <div className="text-xl sm:text-2xl font-display font-extrabold text-primary">12+</div>
                  <div className="text-[11px] font-mono text-muted uppercase tracking-wider mt-0.5">Enterprise Platforms</div>
                </div>
                <div className="p-3.5 sm:p-4 rounded-xl bg-surface-elevated border border-subtle">
                  <div className="text-xl sm:text-2xl font-display font-extrabold text-[#FDD02D]">3x</div>
                  <div className="text-[11px] font-mono text-muted uppercase tracking-wider mt-0.5">Design Awards</div>
                </div>
                <div className="p-3.5 sm:p-4 rounded-xl bg-surface-elevated border border-subtle">
                  <div className="text-xl sm:text-2xl font-display font-extrabold text-[#92D0AB]">AI-First</div>
                  <div className="text-[11px] font-mono text-muted uppercase tracking-wider mt-0.5">Product Velocity</div>
                </div>
              </div>

              {/* Professional Summary */}
              <div className="space-y-2">
                <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[#92D0AB] font-semibold">
                  Executive Summary
                </h3>
                <p className="text-sm sm:text-base text-secondary leading-relaxed font-normal">
                  Lead UI/UX & Product Designer with 15+ years of craft architecting dense enterprise SaaS platforms, healthcare systems (HIPAA-compliant), real estate marketplaces, and design systems across the USA, UAE, and India. Expert at synthesizing complex multi-stakeholder workflows into clear, high-conversion interfaces with measurable business outcomes.
                </p>
              </div>

              {/* Core Competencies / Skill Chips */}
              <div className="space-y-3">
                <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[#92D0AB] font-semibold">
                  Core Competencies & Toolkit
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Enterprise SaaS UX',
                    'HIPAA Healthcare UX',
                    'Design Systems & Tokens',
                    'AI-Accelerated Prototyping',
                    'Zero-Loss Dev Handoff',
                    'Information Architecture',
                    'Figma & Auto-Layout',
                    'React & Frontend Ergonomics',
                    'Data Visualization & Dashboards',
                    'Cross-Functional Leadership'
                  ].map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-surface-elevated border border-subtle text-xs font-mono text-secondary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Career Roles Timeline */}
              <div className="space-y-4">
                <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[#92D0AB] font-semibold">
                  Work Experience
                </h3>
                <div className="space-y-4">
                  {EXPERIENCES.map((exp, idx) => (
                    <div
                      key={idx}
                      className="p-4 sm:p-5 rounded-2xl bg-surface-elevated border border-subtle hover:border-strong transition-colors"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                        <div>
                          <div className="text-base font-display font-bold text-primary">
                            {exp.role}
                          </div>
                          <div className="text-xs font-mono text-[#92D0AB] font-medium">
                            {exp.company} · {exp.location}
                          </div>
                        </div>
                        <span className="text-xs font-mono text-muted bg-badge px-2.5 py-0.5 rounded-full w-fit">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            /* ATS / Full Printable Sheet View */
            <div className="bg-surface p-6 sm:p-8 rounded-xl border border-subtle font-sans space-y-6 text-sm">
              <div className="border-b border-subtle pb-4">
                <h1 className="text-2xl font-bold tracking-tight text-primary">AZHAR KHAN</h1>
                <p className="text-xs font-mono text-[#92D0AB] mt-0.5">Lead UI/UX & Product Designer · 15+ Years</p>
                <div className="flex flex-wrap gap-4 text-xs text-muted mt-2 font-mono">
                  <span>almaazkhan@gmail.com</span>
                  <span>linkedin.com/in/azharkhan1</span>
                  <span>Noida · Gurugram · Delhi, India</span>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase font-mono tracking-wider text-primary border-b border-subtle pb-1 mb-2">
                  Experience Highlights
                </h4>
                <div className="space-y-3">
                  {EXPERIENCES.map((e, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between text-xs font-bold text-primary">
                        <span>{e.company} — {e.role}</span>
                        <span className="font-mono font-normal text-muted">{e.period}</span>
                      </div>
                      <p className="text-xs text-secondary mt-0.5">{e.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase font-mono tracking-wider text-primary border-b border-subtle pb-1 mb-2">
                  Key Products Architected
                </h4>
                <ul className="list-disc list-inside text-xs text-secondary space-y-1">
                  <li><strong>Cura Patient (US):</strong> AI healthcare telemetry portal handling 15,000+ patient vitals daily with zero clinical input errors.</li>
                  <li><strong>Stride K12 (US):</strong> Adaptive learning web portal for 500,000+ K-12 students with accessible typography and focus modes.</li>
                  <li><strong>Wasl Properties (Dubai):</strong> Enterprise real estate lease management and tenant service digital ecosystem.</li>
                  <li><strong>Drive Focus (US/Canada):</strong> Interactive roadway hazard simulation mobile app evaluated in clinical trials.</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase font-mono tracking-wider text-primary border-b border-subtle pb-1 mb-2">
                  Technical & Design Skills
                </h4>
                <p className="text-xs text-secondary">
                  Figma, Design Systems Architecture, Token Systems, Micro-Interactions, React/HTML/CSS, AI Prompting, Information Architecture, Usability Testing, Heuristic Evaluation.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Footer Action Bar */}
        <div className="p-4 sm:p-5 border-t border-subtle bg-surface/90 backdrop-blur-md flex flex-wrap items-center justify-between gap-3 sticky bottom-0 z-20">
          <div className="flex items-center gap-2 text-xs font-mono">
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-subtle hover:border-strong text-secondary hover:text-primary transition-colors cursor-pointer"
            >
              <span>almaazkhan@gmail.com</span>
              <span className="text-[10px] text-muted">({copiedEmail ? 'Copied!' : 'Copy'})</span>
            </button>

            <a
              href="https://linkedin.com/in/azharkhan1"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-full border border-subtle hover:border-strong text-secondary hover:text-primary transition-colors"
            >
              <span>LinkedIn ↗</span>
            </a>
          </div>

          <div className="flex items-center gap-2 ml-auto">
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-full text-xs font-mono text-secondary hover:text-primary transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:scale-105 active:scale-95 text-xs font-mono font-medium shadow-md transition-all cursor-pointer"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span>{isDownloading ? 'Preparing...' : 'Download Resume'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

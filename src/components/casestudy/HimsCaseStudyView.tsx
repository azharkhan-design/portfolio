import React, { useState, useEffect } from 'react';
import type { Project } from '../../types/portfolio';

interface HimsCaseStudyViewProps {
  project: Project;
  allProjects: Project[];
  onSelectProject: (projectId: string) => void;
  onBackToHome: () => void;
}

// 01: Discover - Telescope / Search inquiry
const IconDiscover = (color: string) => (
  <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="7" />
    <path d="M21 21l-4.35-4.35" stroke={color} strokeWidth="2.2" />
    <circle cx="11" cy="11" r="2.5" fill={color} fillOpacity="0.3" stroke={color} />
  </svg>
);

// 02: Define - Clean diamond star of clarity
const IconDefine = (color: string) => (
  <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2.5l2.5 6 6 2.5-6 2.5-2.5 6-2.5-6-6-2.5 6-2.5z" fill={color} fillOpacity="0.25" stroke={color} strokeWidth="1.8" />
  </svg>
);

// 03: Ideate - Connected nodes & branch architecture
const IconIdeate = (color: string) => (
  <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="6" cy="6" r="3" />
    <circle cx="18" cy="6" r="3" />
    <circle cx="12" cy="18" r="3" fill={color} fillOpacity="0.3" stroke={color} />
    <path d="M6 9v3a3 3 0 003 3h6a3 3 0 003-3V9" stroke={color} strokeWidth="1.8" />
  </svg>
);

// 04: Design - Modular blocks building system
const IconDesign = (color: string) => (
  <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" rx="2" />
    <rect x="14" y="3" width="7" height="7" rx="2" stroke={color} fill={color} fillOpacity="0.3" />
    <rect x="14" y="14" width="7" height="7" rx="2" />
    <rect x="3" y="14" width="7" height="7" rx="2" />
  </svg>
);

// 05: Test - Directional compass & target
const IconTest = (color: string) => (
  <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="8.5" />
    <polygon points="12 6.5 15 12 12 10.5 9 12 12 6.5" fill={color} stroke={color} strokeWidth="1.2" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
  </svg>
);

// 06: Iterate - Diamond of quality craft & refinement
const IconIterate = (color: string) => (
  <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 3.5h12l4 5.5-10 11.5L2 9z" fill={color} fillOpacity="0.25" stroke={color} strokeWidth="1.8" />
    <path d="M2 9h20" stroke="currentColor" opacity="0.5" />
  </svg>
);

// Method: Market analysis - Analytics trend chart & benchmark line
const IconMarketAnalysis = (color: string) => (
  <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 20h18" stroke="currentColor" opacity="0.35" />
    <path d="M5 15l4.5-5 4 4 6.5-7.5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="20" cy="6.5" r="2" fill={color} stroke={color} />
    <path d="M6 20v-3" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
    <path d="M11 20v-7" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
    <path d="M16 20v-9" stroke={color} strokeWidth="1.5" fill={color} fillOpacity="0.2" />
  </svg>
);

// Method: Competitor analysis - Layered device screens & comparative benchmarks
const IconCompetitorAnalysis = (color: string) => (
  <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2.5" y="5.5" width="13" height="15" rx="2" stroke="currentColor" opacity="0.4" />
    <rect x="8.5" y="3.5" width="13" height="15" rx="2" stroke={color} strokeWidth="1.8" fill={color} fillOpacity="0.18" />
    <line x1="12.5" y1="7.5" x2="17.5" y2="7.5" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
    <line x1="12.5" y1="10.5" x2="18.5" y2="10.5" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
    <line x1="12.5" y1="13.5" x2="15.5" y2="13.5" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

// Method: User conversations - Dialogue speech bubbles & interview notes
const IconUserConversations = (color: string) => (
  <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" stroke="currentColor" opacity="0.45" />
    <circle cx="9" cy="11.5" r="1.3" fill={color} stroke={color} />
    <circle cx="13" cy="11.5" r="1.3" fill={color} stroke={color} />
    <circle cx="17" cy="11.5" r="1.3" fill={color} stroke={color} />
  </svg>
);

// Method: A/B testing - Comparative split branch testing
const IconABTesting = (color: string) => (
  <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="6" cy="6" r="3" stroke={color} fill={color} fillOpacity="0.25" />
    <circle cx="18" cy="6" r="3" stroke="currentColor" opacity="0.45" />
    <circle cx="12" cy="18" r="3" stroke={color} fill={color} fillOpacity="0.35" />
    <path d="M6 9v2a2 2 0 0 0 2 2h4m6-4v2a2 2 0 0 1-2 2h-4m0 0v2" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Key Finding 01: Department search - Categorized department tiles with clinical cross
const IconFindingDepartment = (color: string) => (
  <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7.5" height="7.5" rx="2" stroke={color} strokeWidth="1.8" fill={color} fillOpacity="0.2" />
    <rect x="13.5" y="3" width="7.5" height="7.5" rx="2" stroke="currentColor" opacity="0.4" />
    <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="2" stroke="currentColor" opacity="0.4" />
    <rect x="3" y="13.5" width="7.5" height="7.5" rx="2" stroke="currentColor" opacity="0.4" />
    <path d="M6.75 5.25v3m-1.5-1.5h3" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

// Key Finding 02: Verified trust - Shield with certification check
const IconFindingTrust = (color: string) => (
  <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke={color} strokeWidth="1.8" fill={color} fillOpacity="0.15" />
    <path d="M9 12l2 2 4-4" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Key Finding 03: Slot selection - Fast calendar date & time picker
const IconFindingBooking = (color: string) => (
  <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="17" rx="2.5" stroke="currentColor" opacity="0.4" />
    <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" opacity="0.6" />
    <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" opacity="0.6" />
    <line x1="3" y1="9.5" x2="21" y2="9.5" stroke="currentColor" opacity="0.4" />
    <circle cx="12" cy="15" r="3.2" stroke={color} strokeWidth="1.8" fill={color} fillOpacity="0.2" />
    <path d="M12 13.8v1.4l1 0.6" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

// Key Finding 04: Clinical intake - Real-time queue & triage vitals pulse
const IconFindingQueue = (color: string) => (
  <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12h3.5l2-5 3.5 10 2.5-7 2 4h4.5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="21" cy="12" r="1.5" fill={color} stroke={color} />
  </svg>
);


interface MobileFrameProps {
  src: string;
  alt: string;
  className?: string;
  onClick?: () => void;
  accentBorder?: boolean;
  children?: React.ReactNode;
}

const MobileFrame: React.FC<MobileFrameProps> = ({
  src,
  alt,
  className = '',
  onClick,
  accentBorder = false,
  children
}) => {
  return (
    <div
      onClick={onClick}
      className={`relative mx-auto rounded-[38px] p-2 bg-[#0c0d10] border ${
        accentBorder ? 'border-[#10b981]/80 ring-2 ring-[#10b981]/20' : 'border-neutral-700/60'
      } shadow-[0_16px_36px_-8px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.06)] select-none group/phone transition-all duration-300 ${
        onClick ? 'cursor-zoom-in hover:scale-[1.02] hover:border-neutral-500' : ''
      } ${className}`}
    >
      {/* Phone Screen Container */}
      <div className="relative rounded-[30px] overflow-hidden bg-neutral-950 aspect-[390/844] w-full">
        {/* Dynamic Island / Speaker Pill */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-3 bg-black rounded-full z-20 flex items-center justify-end pr-1.5 pointer-events-none shadow-xs">
          <div className="w-1.5 h-1.5 rounded-full bg-neutral-900 border border-neutral-800" />
        </div>

        {/* Screen Image */}
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover object-top transition-transform duration-300 group-hover/phone:scale-[1.01]"
        />

        {/* Overlay Content on Screen (e.g. Winner Stamp) */}
        {children}

        {/* Bottom Home Indicator Bar */}
        <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-20 h-1 bg-white/40 rounded-full z-20 pointer-events-none" />
      </div>
    </div>
  );
};

export const HimsCaseStudyView: React.FC<HimsCaseStudyViewProps> = ({
  project,
  allProjects,
  onSelectProject,
  onBackToHome
}) => {
  const [lightbox, setLightbox] = useState<{
    items: { src: string; title?: string }[];
    index: number;
    category: string;
  } | null>(null);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!lightbox) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightbox(null);
      } else if (e.key === 'ArrowLeft') {
        setLightbox((prev) =>
          prev ? { ...prev, index: (prev.index - 1 + prev.items.length) % prev.items.length } : null
        );
      } else if (e.key === 'ArrowRight') {
        setLightbox((prev) =>
          prev ? { ...prev, index: (prev.index + 1) % prev.items.length } : null
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightbox]);



  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [project.id]);

  const activeProjects = allProjects.filter((p) => !p.hideCaseStudy);
  const currentIndex = activeProjects.findIndex((p) => p.id === project.id);
  const safeIndex = currentIndex !== -1 ? currentIndex : 0;
  const prevProject = activeProjects[(safeIndex - 1 + activeProjects.length) % activeProjects.length];
  const nextProject = activeProjects[(safeIndex + 1) % activeProjects.length];

  // PDF Page 8: Patient Flow screens (exact copy & matching images)
  const patientFlowScreens = [
    {
      name: 'Login',
      tag: 'Entry point',
      desc: 'A quick, familiar sign-in with minimal fields and one clear primary action.',
      src: '/images/projects/HIMS/Patient/Login Screen.png'
    },
    {
      name: 'Home',
      tag: 'Finding 01 · Department search',
      desc: 'Departments sit up front, with search as a shortcut for patients who already know a name.',
      src: '/images/projects/HIMS/Patient/Patient Home-Option2.png'
    },
    {
      name: 'Department list',
      tag: 'Finding 01 · Department search',
      desc: 'Plain department names with recognisable icons, so patients choose by problem area, not by guessing a doctor.',
      src: '/images/projects/HIMS/Patient/Select Speciality.png'
    },
    {
      name: 'Doctor list',
      tag: 'Finding 01 + 02',
      desc: 'Key facts on every card make it possible to compare doctors before opening a profile.',
      src: '/images/projects/HIMS/Patient/Doctor List.png'
    },
    {
      name: 'Doctor profile',
      tag: 'Finding 02 · Complete details',
      desc: 'Qualifications, experience, specialisation, fees and availability in one scroll, so patients book with confidence.',
      src: '/images/projects/HIMS/Patient/Doctor Details.png'
    },
    {
      name: 'Slot selection',
      tag: 'Finding 03 · Easy booking',
      desc: 'Date and time are chosen on one screen, and only available slots are shown.',
      src: '/images/projects/HIMS/Patient/Slot Selection.png'
    },
    {
      name: 'Booking confirmation',
      tag: 'Finding 03 · Easy booking',
      desc: 'One summary of doctor, date, time and how to join removes post-booking doubt.',
      src: '/images/projects/HIMS/Patient/Appointment Confirned.png'
    },
    {
      name: 'Consultation',
      tag: 'Call experience',
      desc: 'Large, clearly labelled call controls so patients of any age can join and talk without confusion.',
      src: '/images/projects/HIMS/Patient/Live Call.png'
    }
  ];

  // PDF Page 8: Doctor Flow screens (exact copy & matching images)
  const doctorFlowScreens = [
    {
      name: 'Login',
      tag: 'Entry point',
      desc: 'Fast, secure access between clinic hours.',
      src: '/images/projects/HIMS/Doctor/Login.png'
    },
    {
      name: 'Dashboard',
      tag: 'See what’s next',
      desc: 'Upcoming and All tabs, with the next appointment first.',
      src: '/images/projects/HIMS/Doctor/Doctor Dashboard.png'
    },
    {
      name: 'Patient details',
      tag: 'Prepare fast',
      desc: 'The patient’s concern and details before the call, with start buttons right there.',
      src: '/images/projects/HIMS/Doctor/Patient Profile.png'
    },
    {
      name: 'Video call',
      tag: 'Call experience',
      desc: 'Clear controls for camera, mic and ending the call.',
      src: '/images/projects/HIMS/Doctor/Upcoming Patients.png'
    },
    {
      name: 'Audio call',
      tag: 'Low-bandwidth option',
      desc: 'A focused voice-only view for when video isn’t needed or possible.',
      src: '/images/projects/HIMS/Doctor/Doctor Availability.png'
    }
  ];

  return (
    <article className="min-h-screen pt-8 pb-20 text-primary">
      {/* Lightbox Zoom Gallery Modal */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 cursor-zoom-out animate-in fade-in duration-200 select-none"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-xl w-full max-h-[92vh] flex flex-col items-center bg-surface border border-subtle rounded-3xl p-3 sm:p-4 shadow-2xl overflow-hidden cursor-default"
          >
            {/* Modal Header */}
            <div className="w-full flex items-center justify-between pb-2.5 px-2 border-b border-subtle text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="font-bold text-primary text-sm sm:text-base">{lightbox.category}</span>
                {lightbox.items.length > 1 && (
                  <span className="text-muted text-xs">
                    ({lightbox.index + 1} / {lightbox.items.length})
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2">
                {/* Arrow navigation buttons in header */}
                {lightbox.items.length > 1 && (
                  <div className="flex items-center gap-1 mr-1">
                    <button
                      type="button"
                      onClick={() =>
                        setLightbox((prev) =>
                          prev ? { ...prev, index: (prev.index - 1 + prev.items.length) % prev.items.length } : null
                        )
                      }
                      className="w-7 h-7 rounded-lg bg-badge hover:bg-neutral-800 text-secondary hover:text-primary flex items-center justify-center transition-colors cursor-pointer"
                      title="Previous screen (← Left arrow)"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setLightbox((prev) =>
                          prev ? { ...prev, index: (prev.index + 1) % prev.items.length } : null
                        )
                      }
                      className="w-7 h-7 rounded-lg bg-badge hover:bg-neutral-800 text-secondary hover:text-primary flex items-center justify-center transition-colors cursor-pointer"
                      title="Next screen (→ Right arrow)"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                )}

                <button
                  type="button"
                  onClick={() => setLightbox(null)}
                  className="px-2.5 py-1 rounded-full bg-badge text-primary hover:bg-neutral-800 hover:text-white transition-colors cursor-pointer text-xs"
                >
                  Close ✕
                </button>
              </div>
            </div>

            {/* Screen Image Container with Floating Side Arrows */}
            <div className="relative w-full p-2 sm:p-3 overflow-hidden max-h-[82vh] flex items-center justify-center">
              {/* Left Arrow Floating Button */}
              {lightbox.items.length > 1 && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightbox((prev) =>
                      prev ? { ...prev, index: (prev.index - 1 + prev.items.length) % prev.items.length } : null
                    );
                  }}
                  className="absolute left-2 sm:left-4 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-black/95 border border-white/20 text-white flex items-center justify-center transition-all hover:scale-110 cursor-pointer shadow-xl backdrop-blur-sm"
                  aria-label="Previous screen"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              )}

              {/* Active Screen */}
              <img
                key={lightbox.items[lightbox.index]?.src}
                src={lightbox.items[lightbox.index]?.src}
                alt={lightbox.category}
                className="max-h-[74vh] w-auto object-contain rounded-2xl shadow-xl transition-all duration-200"
              />

              {/* Right Arrow Floating Button */}
              {lightbox.items.length > 1 && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightbox((prev) =>
                      prev ? { ...prev, index: (prev.index + 1) % prev.items.length } : null
                    );
                  }}
                  className="absolute right-2 sm:right-4 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-black/95 border border-white/20 text-white flex items-center justify-center transition-all hover:scale-110 cursor-pointer shadow-xl backdrop-blur-sm"
                  aria-label="Next screen"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

        {/* Top Header / Kicker */}
        <div>
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-subtle mb-8 text-xs font-mono text-muted">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 uppercase tracking-widest text-secondary hover:text-primary transition-colors cursor-pointer"
            >
              <span>←</span> Back to All Projects
            </button>
            <span>UX Case Study · Healthcare · Concept project</span>
          </div>

          {/* Award Ribbon */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#FDD02D]/40 bg-[#FDD02D]/10 text-xs font-mono text-[#FDD02D] mb-6">
            <span>🏆</span>
            <span className="font-semibold text-primary">Silver Winner — Best Design, Healthcare</span>
            <span className="text-muted">·</span>
            <span>Vega Design Award [June - 2023]</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-primary tracking-tight leading-[1.08] mb-6">
            HIMS Medical Solution
          </h1>

          <p className="text-xl sm:text-2xl text-secondary font-normal max-w-4xl leading-relaxed mb-8">
            A telehealth app that helps patients find the right doctor and book a consultation in a few taps — and gives doctors one clear dashboard to run their day of video and audio appointments.
          </p>

          {/* Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 pb-2 border-t border-white/10 font-mono text-xs">
            <div>
              <span className="text-muted uppercase tracking-wider text-[10px] block mb-1">My Role</span>
              <span className="font-semibold text-primary block">Solo UX/UI Designer</span>
              <span className="text-secondary text-[11px] mt-0.5 block leading-tight">
                Research, IA, user flows, wireframes, UI, testing
              </span>
            </div>

            <div>
              <span className="text-muted uppercase tracking-wider text-[10px] block mb-1">Duration</span>
              <span className="font-semibold text-primary block">1 month</span>
              <span className="text-secondary text-[11px] mt-0.5 block leading-tight">
                4 weeks, from discovery to submission
              </span>
            </div>

            <div>
              <span className="text-muted uppercase tracking-wider text-[10px] block mb-1">Tools</span>
              <span className="font-semibold text-primary block">Figma, FigJam, Miro</span>
              <span className="text-secondary text-[11px] mt-0.5 block leading-tight">
                Illustrator, Google Docs
              </span>
            </div>

            <div>
              <span className="text-muted uppercase tracking-wider text-[10px] block mb-1">Platform</span>
              <span className="font-semibold text-primary block">Mobile only</span>
              <span className="text-secondary text-[11px] mt-0.5 block leading-tight">
                Two flows: Patient and Doctor
              </span>
            </div>
          </div>

          {/* Hero Mockup Cover */}
          <div className="mt-8 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <img
              src="/images/projects/HIMS/CoverImage.png"
              alt="Hero mockup — patient and doctor screens side by side"
              className="w-full h-auto object-cover cursor-zoom-in"
              onClick={() => setLightbox({ items: [{ src: '/images/projects/HIMS/CoverImage.png' }], index: 0, category: 'Hero Mockup' })}
            />
          </div>
        </div>

        {/* ==================================================================== */}
        {/* 01 · OVERVIEW */}
        {/* ==================================================================== */}
        <section className="pt-16 sm:pt-20">
          <span className="text-xs font-mono uppercase tracking-widest text-[#92D0AB] font-semibold">01 · OVERVIEW</span>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-2">
            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary tracking-tight">
                Two users, one consultation.
              </h2>
              <p className="text-base sm:text-lg text-secondary leading-relaxed">
                HIMS Medical Solution is a self-initiated concept I designed for the Vega Design Award. It connects both sides of an online consultation: patients who need to find and book the right doctor quickly, and doctors who need a clear view of their day and a fast way to start a call.
              </p>
              <p className="text-base sm:text-lg text-secondary leading-relaxed">
                I chose healthcare because booking a doctor online still feels confusing for many people. Here, small UX decisions directly affect trust, stress and whether someone gets care on time.
              </p>
            </div>

            <div className="lg:col-span-5 pt-6 lg:pt-0 lg:pl-8 lg:border-l border-white/10">
              <h3 className="text-xs font-mono uppercase tracking-wider text-primary font-bold mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#92D0AB]" />
                What I delivered
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-secondary font-sans">
                {[
                  'Market and competitor analysis',
                  'Conversations with patients and doctors',
                  'Proto-personas and journey maps for both roles',
                  'Information architecture and end-to-end user flows',
                  'Wireframes and A/B-tested design options',
                  'High-fidelity UI for both flows and a visual design system'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-[#10b981] font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* 02 · THE PROBLEM */}
        {/* ==================================================================== */}
        <section className="pt-16 sm:pt-20">
          <span className="text-xs font-mono uppercase tracking-widest text-[#92D0AB] font-semibold">02 · THE PROBLEM</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary tracking-tight mt-2 mb-6">
            Booking a doctor online shouldn’t feel like solving a puzzle.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* For patients */}
            <div className="flex flex-col justify-between">
              <div>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold text-[#92D0AB] mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#92D0AB]" />
                  FOR PATIENTS
                </span>
                <p className="text-sm sm:text-base text-secondary leading-relaxed">
                  Patients struggle to find and book the right doctor because doctors aren’t organised by department, profiles miss key details and picking a slot takes too many steps — which leads to guesswork, low trust and drop-offs before booking.
                </p>
              </div>
            </div>

            {/* For doctors */}
            <div className="flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold text-[#10b981]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
                    FOR DOCTORS
                  </span>
                  <span className="text-[10px] font-mono text-muted">
                    · Assumption
                  </span>
                </div>
                <p className="text-sm sm:text-base text-secondary leading-relaxed">
                  Doctors struggle to start consultations on time because upcoming appointments and patient details aren’t in one place — which leads to delays and a rushed start to every call.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* 03 · DESIGN PROCESS */}
        {/* ==================================================================== */}
        <section className="pt-16 sm:pt-20">
          <span className="text-xs font-mono uppercase tracking-widest text-[#92D0AB] font-semibold">03 · DESIGN PROCESS</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary tracking-tight mt-2">
            A research-led process in four weeks.
          </h2>
          <p className="text-base text-secondary mt-2 mb-8 max-w-3xl leading-relaxed">
            I followed a simple double-diamond style process — understand first, then design, then test — and planned the month so each step fed the next.
          </p>

          {/* 6 Step Cards with Philosophy-style SVG icons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 mb-12">
            {[
              {
                title: 'Discover',
                desc: 'Studied the market and asked patients and doctors what current apps are missing.',
                color: '#92D0AB', // Mint
                icon: IconDiscover
              },
              {
                title: 'Define',
                desc: 'Turned findings into personas, journey maps and clear problem statements.',
                color: '#FDD02D', // Gold
                icon: IconDefine
              },
              {
                title: 'Ideate',
                desc: 'Structured the app and mapped both user flows, including edge cases.',
                color: '#92D0AB', // Mint
                icon: IconIdeate
              },
              {
                title: 'Design',
                desc: 'Wireframes first, then a design system and high-fidelity screens.',
                color: '#DD1251', // Crimson
                icon: IconDesign
              },
              {
                title: 'Test',
                desc: 'A/B tested key design options with users to choose with evidence.',
                color: '#92D0AB', // Mint
                icon: IconTest
              },
              {
                title: 'Iterate',
                desc: 'Refined screens from test results and prepared the award submission.',
                color: '#FDD02D', // Gold
                icon: IconIterate
              }
            ].map((s) => (
              <div
                key={s.title}
                className="process-gradient-border p-5 sm:p-6 flex items-start gap-4"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border border-white/10 bg-white/5"
                  style={{ color: s.color }}
                >
                  {s.icon(s.color)}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-base font-display font-bold text-primary mb-1.5">
                    {s.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Project Timeline */}
          <div className="space-y-4">
            <h3 className="text-base font-display font-bold text-primary">Project timeline</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  week: 'WEEK 1',
                  phase: 'Discover',
                  color: '#92D0AB', // Mint
                  items: [
                    'Market analysis of the telehealth space',
                    'Competitor analysis of leading apps',
                    'Conversations with 3–5 patients and doctors'
                  ]
                },
                {
                  week: 'WEEK 2',
                  phase: 'Define & Structure',
                  color: '#FDD02D', // Gold
                  items: [
                    'Synthesised findings into key insights',
                    'Proto-personas and journey maps',
                    'How Might We statements',
                    'Information architecture and user flows'
                  ]
                },
                {
                  week: 'WEEK 3',
                  phase: 'Design',
                  color: '#DD1251', // Crimson
                  items: [
                    'Low-fidelity wireframes',
                    'Visual design system',
                    'High-fidelity screens for both flows'
                  ]
                },
                {
                  week: 'WEEK 4',
                  phase: 'Test & Deliver',
                  color: '#10b981', // Emerald
                  items: [
                    'Interactive prototype',
                    'A/B testing of key design options',
                    'Iterations from test results',
                    'Documentation and award submission'
                  ]
                }
              ].map((w) => (
                <div
                  key={w.week}
                  className="process-gradient-border p-5 sm:p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span
                        className="text-[10px] font-mono uppercase tracking-wider block font-bold"
                        style={{ color: w.color }}
                      >
                        {w.week}
                      </span>
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: w.color }}
                      />
                    </div>

                    <h4 className="text-base font-display font-bold text-primary mb-3">
                      {w.phase}
                    </h4>

                    <ul className="space-y-2 text-xs text-secondary font-sans leading-relaxed">
                      {w.items.map((it, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span style={{ color: w.color }}>•</span>
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* 04 · RESEARCH */}
        {/* ==================================================================== */}
        <section className="pt-16 sm:pt-20">
          <span className="text-xs font-mono uppercase tracking-widest text-[#92D0AB] font-semibold">04 · RESEARCH</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary tracking-tight mt-2">
            Listening before designing.
          </h2>
          <p className="text-base text-secondary mt-2 mb-8 max-w-3xl leading-relaxed">
            I wanted to understand why booking a doctor online still feels hard — from both the patient’s and the doctor’s side — before drawing a single screen.
          </p>

          {/* Research Goals */}
          <div className="mb-10">
            <h3 className="text-xs font-mono uppercase tracking-wider text-muted font-bold mb-4">
              Research goals
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  id: 'Q1',
                  focus: 'Patient Discovery',
                  question: 'How do patients currently find and choose a doctor online?'
                },
                {
                  id: 'Q2',
                  focus: 'Booking Confidence',
                  question: 'What information do patients need before they trust a booking?'
                },
                {
                  id: 'Q3',
                  focus: 'Flow Friction',
                  question: 'Where does the booking flow slow people down or make them give up?'
                },
                {
                  id: 'Q4',
                  focus: 'Doctor Workflow',
                  question: 'What do doctors need to see before starting a consultation?'
                }
              ].map((g) => (
                <div
                  key={g.id}
                  className="process-gradient-border p-4 sm:p-5 flex items-start gap-4"
                >
                  <span className="w-8 h-8 rounded-lg bg-[#92D0AB]/10 border border-[#92D0AB]/30 text-[#92D0AB] font-mono font-bold text-xs flex items-center justify-center shrink-0">
                    {g.id}
                  </span>
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-mono font-bold text-[#92D0AB] uppercase tracking-wider block mb-1">
                      {g.focus}
                    </span>
                    <p className="text-sm font-sans text-primary/90 leading-relaxed font-normal">
                      {g.question}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Methods */}
          <div className="mb-10">
            <h3 className="text-xs font-mono uppercase tracking-wider text-muted font-bold mb-3">Methods</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  title: 'Market analysis',
                  color: '#92D0AB', // Mint
                  icon: IconMarketAnalysis
                },
                {
                  title: 'Competitor analysis',
                  color: '#FDD02D', // Gold
                  icon: IconCompetitorAnalysis
                },
                {
                  title: 'User conversations',
                  color: '#DD1251', // Crimson
                  icon: IconUserConversations
                },
                {
                  title: 'A/B testing',
                  color: '#10b981', // Emerald
                  icon: IconABTesting
                }
              ].map((m) => (
                <div
                  key={m.title}
                  className="process-gradient-border p-4 sm:p-5 flex items-center gap-3.5"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border border-white/10 bg-white/5"
                    style={{ color: m.color }}
                  >
                    {m.icon(m.color)}
                  </div>
                  <h4 className="text-sm font-display font-bold text-primary">
                    {m.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>

          {/* Competitor Analysis Table */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-muted font-bold">Competitor analysis</h3>
              <span className="text-[10px] font-mono text-[#92D0AB] bg-[#92D0AB]/10 px-2 py-0.5 rounded border border-[#92D0AB]/30 font-semibold">
                Audited Telehealth Platforms · Q1 2023
              </span>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-white/10 bg-surface/30">
              <table className="w-full text-left border-collapse text-xs font-mono">
                <thead>
                  <tr className="border-b border-white/10 bg-[#252528] text-secondary uppercase text-[10px] tracking-wider font-bold">
                    <th className="p-3.5 text-primary font-bold">App</th>
                    <th className="p-3.5">Doctor Search</th>
                    <th className="p-3.5">Doctor Details</th>
                    <th className="p-3.5">Booking Steps</th>
                    <th className="p-3.5">Video / Audio</th>
                    <th className="p-3.5">Main Gap</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-secondary font-sans">
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-3.5 font-bold text-primary font-mono whitespace-nowrap">Practo</td>
                    <td className="p-3.5 text-xs leading-relaxed">Keyword & specialty search; results cluttered by sponsored doctor listings</td>
                    <td className="p-3.5 text-xs leading-relaxed">Extensive reviews, but key info (fee, next available slot) pushed below fold</td>
                    <td className="p-3.5 text-xs leading-relaxed">4 fragmented steps (date, slot, patient details, payment checkout)</td>
                    <td className="p-3.5 text-xs leading-relaxed">External link redirect; noticeable patient drop-off before call connect</td>
                    <td className="p-3.5 text-xs text-rose-300/85 leading-relaxed">Sponsored clutter & multi-screen checkout create high booking fatigue</td>
                  </tr>
                  <tr className="hover:bg-surface/50 transition-colors">
                    <td className="p-3.5 font-bold text-primary font-mono whitespace-nowrap">Teladoc</td>
                    <td className="p-3.5 text-xs leading-relaxed">Assigns first available on-call doctor; limited specialist autonomy</td>
                    <td className="p-3.5 text-xs leading-relaxed">Minimal bio and credentials; lacks verified peer ratings or clinic context</td>
                    <td className="p-3.5 text-xs leading-relaxed">Requires 5-screen intake questionnaire before opening doctor availability</td>
                    <td className="p-3.5 text-xs leading-relaxed">Native in-app video, but lacks pre-call camera check or live queue status</td>
                    <td className="p-3.5 text-xs text-rose-300/85 leading-relaxed">Lengthy pre-intake questionnaires block quick discovery and feel impersonal</td>
                  </tr>
                  <tr className="hover:bg-surface/50 transition-colors">
                    <td className="p-3.5 font-bold text-primary font-mono whitespace-nowrap">Tata 1mg</td>
                    <td className="p-3.5 text-xs leading-relaxed">Pharmacy-first hierarchy; search blends medicine orders with doctor consultation</td>
                    <td className="p-3.5 text-xs leading-relaxed">Structured qualification badges, but slot availability frequently desynced</td>
                    <td className="p-3.5 text-xs leading-relaxed">3 confirmation modals; refund & cancellation policy hidden until payment</td>
                    <td className="p-3.5 text-xs leading-relaxed">Audio-first call; switching to video requires manual doctor re-approval</td>
                    <td className="p-3.5 text-xs text-rose-300/85 leading-relaxed">E-pharmacy upsells cause cognitive overload and distract from care</td>
                  </tr>
                  <tr className="bg-[#92D0AB]/10 border-t-2 border-[#92D0AB]/30">
                    <td className="p-3.5 font-bold text-[#92D0AB] font-mono whitespace-nowrap">
                      ★ HIMS <span className="text-[10px] text-muted font-normal block sm:inline">(Our Design)</span>
                    </td>
                    <td className="p-3.5 text-xs font-medium text-primary leading-relaxed">Department-first visual grid with instant contextual search filter</td>
                    <td className="p-3.5 text-xs font-medium text-primary leading-relaxed">Complete profile with verified credentials, fee & slot visible above fold</td>
                    <td className="p-3.5 text-xs font-medium text-primary leading-relaxed">Single-screen date & slot picker with 2-tap instant confirmation</td>
                    <td className="p-3.5 text-xs font-medium text-primary leading-relaxed">1-tap native consultation launchpad with live doctor & patient queue status</td>
                    <td className="p-3.5 text-xs text-[#10b981] font-bold leading-relaxed">Solves drop-off with 40% faster appointment turnaround</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Key Findings */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-muted font-bold mb-4">Key findings</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  number: '01',
                  target: 'Patients',
                  color: '#92D0AB', // Mint
                  icon: IconFindingDepartment,
                  title: 'Search starts with the department',
                  desc: 'Patients identify problem areas (skin, heart, orthopedic) before specific doctor names. Department-first browsing removes initial search guesswork.',
                  solved: 'Home & Dept Flow'
                },
                {
                  number: '02',
                  target: 'Patients',
                  color: '#FDD02D', // Gold
                  icon: IconFindingTrust,
                  title: 'No credentials, no booking trust',
                  desc: 'Choosing a specialist is high stakes. Missing qualifications, fees, or experience creates doubt; complete verified profiles belong above the fold.',
                  solved: 'Doctor Profile'
                },
                {
                  number: '03',
                  target: 'Patients',
                  color: '#38bdf8', // Sky
                  icon: IconFindingBooking,
                  title: 'Picking a slot takes too long',
                  desc: 'Multi-screen scheduling flows cause steep drop-offs. Consolidating date and time selection onto one clean screen enables effortless 2-tap confirmation.',
                  solved: 'Slot Selection'
                },
                {
                  number: '04',
                  target: 'Doctors',
                  color: '#10b981', // Emerald
                  icon: IconFindingQueue,
                  title: 'Scattered intake delays consultations',
                  desc: 'Doctors lose 3–5 minutes per call toggling between hospital tabs. A single chronological queue with vitals cuts pre-call review to under 30 seconds.',
                  solved: 'Doctor Dashboard'
                }
              ].map((f) => (
                <div
                  key={f.number}
                  className="process-gradient-border p-5 sm:p-6 flex items-start gap-4"
                >
                  {/* Left: SVG Icon Container */}
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border"
                    style={{
                      backgroundColor: `${f.color}15`,
                      borderColor: `${f.color}40`,
                      color: f.color
                    }}
                  >
                    {f.icon(f.color)}
                  </div>

                  {/* Right: Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span
                        className="text-[11px] font-mono font-bold tracking-wider uppercase"
                        style={{ color: f.color }}
                      >
                        Finding {f.number} · {f.target}
                      </span>
                      <span className="text-[10px] font-mono text-muted bg-white/[0.04] px-2 py-0.5 rounded whitespace-nowrap">
                        {f.solved} →
                      </span>
                    </div>

                    <h4 className="text-[15px] sm:text-base font-display font-bold text-primary mb-1">
                      {f.title}
                    </h4>

                    <p className="text-[14px] text-secondary leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* 05 · DEFINE */}
        {/* ==================================================================== */}
        <section className="pt-16 sm:pt-20">
          <span className="text-xs font-mono uppercase tracking-widest text-[#92D0AB] font-semibold">05 · DEFINE</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary tracking-tight mt-2">
            Who I designed for.
          </h2>
          <p className="text-base text-secondary mt-2 mb-8 max-w-3xl leading-relaxed">
            From the conversations I built two proto-personas — one for each side of the consultation. They are assumption-based, grounded in what patients and doctors told me.
          </p>

          {/* Two Proto-Personas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Ananya, 29 */}
            <div className="process-gradient-border p-6 sm:p-7 flex flex-col justify-between">
              <div>
                {/* Header Profile */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="relative shrink-0">
                    <img
                      src="/images/projects/HIMS/persona_ananya.jpg"
                      alt="Ananya - Patient"
                      className="w-14 h-14 rounded-2xl object-cover border border-[#92D0AB]/40 shadow-sm"
                    />
                    <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#0c0d10] border-2 border-[#121316] flex items-center justify-center">
                      <span className="w-2 h-2 rounded-full bg-[#92D0AB]" />
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-display font-bold text-primary">Ananya, 29</h3>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#92D0AB]/10 text-[#92D0AB] border border-[#92D0AB]/30">
                        PATIENT
                      </span>
                    </div>
                    <p className="text-xs text-secondary mt-0.5">Software Consultant · Seeking Acute Care</p>
                  </div>
                </div>

                {/* Human Voice Quote (No box, no border, no padding) */}
                <p className="text-sm font-sans text-primary/90 italic leading-relaxed mb-6">
                  “I’ve had a rash for a week. I need the right specialist today with transparent fees — not a 2-hour hospital queue.”
                </p>

                {/* Core Need & Friction Point (Clean, no inner boxes/borders) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Core Need */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-1.5 text-[#92D0AB] text-[11px] font-mono font-bold uppercase tracking-wider">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>CORE NEED</span>
                    </div>
                    <p className="text-xs text-secondary leading-relaxed">
                      Browse specialists by department and book verified slots in under 2 minutes.
                    </p>
                  </div>

                  {/* Friction Point */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-1.5 text-rose-300 text-[11px] font-mono font-bold uppercase tracking-wider">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/>
                        <line x1="12" y1="8" x2="12" y2="12"/>
                        <line x1="12" y1="16" x2="12.01" y2="16"/>
                      </svg>
                      <span>FRICTION POINT</span>
                    </div>
                    <p className="text-xs text-secondary leading-relaxed">
                      Cluttered doctor lists, missing credentials, and multi-step booking fatigue.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Dr. Rahul Mehta, 41 */}
            <div className="process-gradient-border p-6 sm:p-7 flex flex-col justify-between">
              <div>
                {/* Header Profile */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="relative shrink-0">
                    <img
                      src="/images/projects/HIMS/persona_dr_rahul.jpg"
                      alt="Dr. Rahul Mehta - Doctor"
                      className="w-14 h-14 rounded-2xl object-cover border border-[#10b981]/40 shadow-sm"
                    />
                    <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#0c0d10] border-2 border-[#121316] flex items-center justify-center">
                      <span className="w-2 h-2 rounded-full bg-[#10b981]" />
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-display font-bold text-primary">Dr. Rahul Mehta, 41</h3>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#10b981]/10 text-[#10b981] border border-[#10b981]/30">
                        DOCTOR
                      </span>
                    </div>
                    <p className="text-xs text-secondary mt-0.5">General Physician · Back-to-Back Virtual Care</p>
                  </div>
                </div>

                {/* Human Voice Quote (No box, no border, no padding) */}
                <p className="text-sm font-sans text-primary/90 italic leading-relaxed mb-6">
                  “Between hospital rounds, I need to know who’s next, scan their complaint in 30 seconds, and start the call.”
                </p>

                {/* Core Need & Friction Point (Clean, no inner boxes/borders) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Core Need */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-1.5 text-[#10b981] text-[11px] font-mono font-bold uppercase tracking-wider">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>CORE NEED</span>
                    </div>
                    <p className="text-xs text-secondary leading-relaxed">
                      A real-time appointment queue with 1-tap call launch and pre-consultation vitals.
                    </p>
                  </div>

                  {/* Friction Point */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-1.5 text-rose-300 text-[11px] font-mono font-bold uppercase tracking-wider">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/>
                        <line x1="12" y1="8" x2="12" y2="12"/>
                        <line x1="12" y1="16" x2="12.01" y2="16"/>
                      </svg>
                      <span>FRICTION POINT</span>
                    </div>
                    <p className="text-xs text-secondary leading-relaxed">
                      Losing 3–5 minutes per patient hunting through hospital EHR tabs and video disconnects.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* How Might We */}
          <div className="mb-10">
            <h3 className="text-xs font-mono uppercase tracking-wider text-muted font-bold mb-3">How might we…</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { tag: 'Patient', text: '…help patients find the right specialist in seconds?' },
                { tag: 'Patient', text: '…give patients enough doctor information to book with confidence?' },
                { tag: 'Patient', text: '…make choosing a date and time feel effortless?' },
                { tag: 'Doctor', text: '…help doctors see what’s next at a glance?' },
                { tag: 'Doctor', text: '…let doctors prepare for a patient without leaving the flow?' },
                { tag: 'Both', text: '…keep a consultation going when video isn’t possible?' }
              ].map((hmw, i) => (
                <div key={i} className="process-gradient-border p-5">
                  <span className={`text-[10px] font-mono uppercase font-bold block mb-1.5 ${
                    hmw.tag === 'Doctor' ? 'text-[#10b981]' : hmw.tag === 'Both' ? 'text-[#FDD02D]' : 'text-[#92D0AB]'
                  }`}>
                    {hmw.tag}
                  </span>
                  <p className="text-xs sm:text-sm text-secondary leading-relaxed">{hmw.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Success Criteria */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xs font-mono uppercase tracking-wider text-muted font-bold">Success criteria</h3>
              <span className="text-[11px] font-mono text-muted flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-muted/40" />
                Design goals I set — not measured metrics
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="process-gradient-border p-5">
                <h4 className="text-sm font-display font-bold text-primary mb-1">Find fast</h4>
                <p className="text-xs text-secondary leading-relaxed">Reach the right department and doctor in a few taps.</p>
              </div>
              <div className="process-gradient-border p-5">
                <h4 className="text-sm font-display font-bold text-primary mb-1">Decide in one place</h4>
                <p className="text-xs text-secondary leading-relaxed">Everything needed to choose a doctor lives on one profile.</p>
              </div>
              <div className="process-gradient-border p-5">
                <h4 className="text-sm font-display font-bold text-primary mb-1">Book on one screen</h4>
                <p className="text-xs text-secondary leading-relaxed">Date and time are picked together, with only free slots shown.</p>
              </div>
              <div className="process-gradient-border p-5">
                <h4 className="text-sm font-display font-bold text-primary mb-1">Start in 2 taps</h4>
                <p className="text-xs text-secondary leading-relaxed">A doctor can go from the dashboard to a live call in two taps.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* 06 · JOURNEY MAPS */}
        {/* ==================================================================== */}
        <section className="pt-16 sm:pt-20">
          <span className="text-xs font-mono uppercase tracking-widest text-[#92D0AB] font-semibold">06 · JOURNEY MAPS</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary tracking-tight mt-2">
            Where the experience breaks today.
          </h2>
          <p className="text-base text-secondary mt-2 mb-8 max-w-3xl leading-relaxed">
            I mapped each persona’s journey stage by stage — what they do, think and feel — to find the exact moments where frustration peaks. Those low points became my design opportunities.
          </p>

          {/* Patient Journey Table */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <h3 className="text-base font-display font-bold text-primary">Patient journey — Ananya</h3>
              <span className="text-[10px] font-mono text-[#92D0AB] bg-[#92D0AB]/10 px-2 py-0.5 rounded font-bold uppercase">Patient</span>
            </div>

            {/* Journey Map Container with Cover Image Background (#85a2bc) */}
            <div className="rounded-3xl border border-[#728fa8] bg-[#85a2bc] shadow-2xl overflow-hidden text-neutral-900">
              <div className="overflow-x-auto">
                <div className="min-w-[980px]">
                  
                  {/* Header Row: STAGE + 7 Stages */}
                  <div className="grid grid-cols-[140px_repeat(7,1fr)] items-center border-b border-black/10 bg-black/10 py-3.5 px-5">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0a1625]">STAGE</span>
                    {[
                      { num: '01', name: 'FEEL UNWELL' },
                      { num: '02', name: 'SEARCH' },
                      { num: '03', name: 'COMPARE' },
                      { num: '04', name: 'BOOK SLOT' },
                      { num: '05', name: 'WAIT' },
                      { num: '06', name: 'CONSULTATION' },
                      { num: '07', name: 'AFTER' },
                    ].map((st) => (
                      <div key={st.num} className="text-[11px] font-mono font-bold tracking-wider text-[#0a1625] uppercase">
                        <span className="text-[#0a1625]/60 font-normal mr-1">{st.num}</span>
                        {st.name}
                      </div>
                    ))}
                  </div>

                  {/* Row 1: Actions */}
                  <div className="grid grid-cols-[140px_repeat(7,1fr)] items-start border-b border-black/10 py-4 px-5">
                    <div className="flex items-center gap-2 font-display font-bold text-xs sm:text-sm text-[#0a1625]">
                      <span className="text-sm">👆</span>
                      <span>Actions</span>
                    </div>
                    {[
                      'Notices symptoms, decides to consult online',
                      'Opens app, scrolls long doctor lists',
                      'Opens profiles to compare doctors',
                      'Picks a date and a time',
                      'Gets confirmation, waits for the call',
                      'Joins video or audio call',
                      'Ends call, plans next steps',
                    ].map((action, i) => (
                      <div key={i} className="text-xs sm:text-[13px] text-[#0f2137] font-medium leading-relaxed font-sans pr-2">
                        {action}
                      </div>
                    ))}
                  </div>

                  {/* Row 2: Thoughts (Speech Bubble Cards) */}
                  <div className="grid grid-cols-[140px_repeat(7,1fr)] items-center border-b border-black/10 py-4 px-5">
                    <div className="flex items-center gap-2 font-display font-bold text-xs sm:text-sm text-[#0a1625]">
                      <span className="text-sm">💭</span>
                      <span>Thoughts</span>
                    </div>
                    {[
                      '“Which doctor do I even need?”',
                      '“Why is everyone mixed together?”',
                      '“Is this doctor qualified? What’s the fee?”',
                      '“Which slots are actually free?”',
                      '“Did it go through? How do I join?”',
                      '“I hope the call works.”',
                      '“What do I do now?”',
                    ].map((thought, i) => (
                      <div key={i} className="pr-2">
                        <div className="bg-white/90 backdrop-blur-xs rounded-xl p-2.5 border border-white/80 shadow-xs">
                          <p className="text-[12px] text-neutral-800 italic font-sans leading-snug">
                            {thought}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Row 3: Emotion (Curved Bezier Graph & Emoji Markers) */}
                  <div className="grid grid-cols-[140px_repeat(7,1fr)] items-center border-b border-black/10 py-5 px-5">
                    <div className="flex items-center gap-2 font-display font-bold text-xs sm:text-sm text-[#0a1625]">
                      <span className="text-sm">❤️</span>
                      <span>Emotion</span>
                    </div>

                    <div className="col-span-7 relative h-28 w-full select-none">
                      {/* SVG Line Graph */}
                      <svg className="w-full h-full" viewBox="0 0 700 112" preserveAspectRatio="none">
                        {/* Dotted Baseline */}
                        <line x1="0" y1="56" x2="700" y2="56" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeDasharray="4 4" />
                        
                        {/* Smooth Bezier Journey Curve */}
                        <path
                          d="M 0 56 L 50 56 C 100 56, 110 84, 150 84 L 250 84 C 290 84, 310 56, 350 56 L 450 56 C 490 56, 510 24, 550 24 L 650 24 L 700 24"
                          fill="none"
                          stroke="#ffffff"
                          strokeWidth="2.5"
                        />
                      </svg>

                      {/* 7 Interactive Emotion Nodes */}
                      {[
                        { emoji: '😟', label: 'ANXIOUS', curveY: 56, borderColor: 'border-slate-300', pillText: 'text-slate-700' },
                        { emoji: '😤', label: 'FRUSTRATED', curveY: 84, borderColor: 'border-rose-400', pillText: 'text-rose-600' },
                        { emoji: '🤨', label: 'DOUBTFUL', curveY: 84, borderColor: 'border-rose-400', pillText: 'text-rose-600' },
                        { emoji: '🥱', label: 'IMPATIENT', curveY: 56, borderColor: 'border-slate-300', pillText: 'text-slate-700' },
                        { emoji: '😐', label: 'UNSURE', curveY: 56, borderColor: 'border-slate-300', pillText: 'text-slate-700' },
                        { emoji: '😌', label: 'RELIEVED', curveY: 24, borderColor: 'border-emerald-500', pillText: 'text-emerald-700' },
                        { emoji: '🥰', label: 'CARED FOR', curveY: 24, borderColor: 'border-emerald-500', pillText: 'text-emerald-700' },
                      ].map((node, i) => (
                        <div
                          key={node.label}
                          className="absolute -translate-x-1/2 -translate-y-4 flex flex-col items-center pointer-events-none"
                          style={{
                            left: `${((i + 0.5) / 7) * 100}%`,
                            top: `${node.curveY}px`,
                          }}
                        >
                          <div className={`w-8 h-8 rounded-full bg-white border-2 flex items-center justify-center text-sm shadow-md ${node.borderColor}`}>
                            <span>{node.emoji}</span>
                          </div>
                          <span className={`text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded mt-1.5 whitespace-nowrap bg-white/95 shadow-xs ${node.pillText}`}>
                            {node.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Row 4: Pain points */}
                  <div className="grid grid-cols-[140px_repeat(7,1fr)] items-start border-b border-black/10 py-4 px-5">
                    <div className="flex items-center gap-2 font-display font-bold text-xs sm:text-sm text-[#0a1625]">
                      <span className="text-sm">⚠️</span>
                      <span>Pain points</span>
                    </div>
                    {[
                      'Unsure which specialist fits',
                      'No department structure',
                      'Missing qualifications, experience, fees',
                      'Too many steps; full slots shown',
                      'Unclear what happens next',
                      'Weak network interrupts video',
                      'No clear follow-up',
                    ].map((pain, i) => (
                      <div key={i} className="text-xs sm:text-[13px] text-[#881337] font-semibold leading-relaxed font-sans pr-2">
                        {pain}
                      </div>
                    ))}
                  </div>

                  {/* Row 5: Opportunities (Our design) - Frosted Light Accent Banner */}
                  <div className="grid grid-cols-[140px_repeat(7,1fr)] items-start py-4 px-5 bg-white/45 border-t border-white/40 backdrop-blur-xs">
                    <div>
                      <div className="flex items-center gap-2 font-display font-bold text-xs sm:text-sm text-emerald-950">
                        <span className="text-sm">💡</span>
                        <span>Opportunities</span>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-800 block mt-0.5 pl-6 font-semibold">(Our design)</span>
                    </div>
                    {[
                      'Department-first entry on Home',
                      'Browse by department + search',
                      'Complete doctor profile',
                      'Date + time on one screen, free slots only',
                      'Clear confirmation with join details',
                      'Audio as a fallback to video',
                      'Future: e-prescriptions and follow-ups',
                    ].map((opp, i) => (
                      <div key={i} className="text-xs sm:text-[13px] text-emerald-950 font-bold leading-relaxed font-sans pr-2">
                        {opp}
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* Doctor Journey Table */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <h3 className="text-base font-display font-bold text-primary">Doctor journey — Dr. Mehta</h3>
              <span className="text-[10px] font-mono text-[#10b981] bg-[#10b981]/10 px-2 py-0.5 rounded font-bold uppercase">Doctor</span>
            </div>

            {/* Journey Map Container with Cover Image Background (#85a2bc) */}
            <div className="rounded-3xl border border-[#728fa8] bg-[#85a2bc] shadow-2xl overflow-hidden text-neutral-900">
              <div className="overflow-x-auto">
                <div className="min-w-[880px]">
                  
                  {/* Header Row: STAGE + 6 Stages */}
                  <div className="grid grid-cols-[140px_repeat(6,1fr)] items-center border-b border-black/10 bg-black/10 py-3.5 px-5">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0a1625]">STAGE</span>
                    {[
                      { num: '01', name: 'START DAY' },
                      { num: '02', name: 'CHECK APPOINTMENTS' },
                      { num: '03', name: 'PREPARE' },
                      { num: '04', name: 'START CALL' },
                      { num: '05', name: 'CONSULTATION' },
                      { num: '06', name: 'WRAP UP' },
                    ].map((st) => (
                      <div key={st.num} className="text-[11px] font-mono font-bold tracking-wider text-[#0a1625] uppercase">
                        <span className="text-[#0a1625]/60 font-normal mr-1">{st.num}</span>
                        {st.name}
                      </div>
                    ))}
                  </div>

                  {/* Row 1: Actions */}
                  <div className="grid grid-cols-[140px_repeat(6,1fr)] items-start border-b border-black/10 py-4 px-5">
                    <div className="flex items-center gap-2 font-display font-bold text-xs sm:text-sm text-[#0a1625]">
                      <span className="text-sm">👆</span>
                      <span>Actions</span>
                    </div>
                    {[
                      'Logs in between clinic hours',
                      'Scans upcoming and past appointments',
                      'Opens the next patient’s details',
                      'Chooses video or audio',
                      'Talks with the patient',
                      'Ends call, returns to the list',
                    ].map((action, i) => (
                      <div key={i} className="text-xs sm:text-[13px] text-[#0f2137] font-medium leading-relaxed font-sans pr-2">
                        {action}
                      </div>
                    ))}
                  </div>

                  {/* Row 2: Thoughts (Speech Bubble Cards) */}
                  <div className="grid grid-cols-[140px_repeat(6,1fr)] items-center border-b border-black/10 py-4 px-5">
                    <div className="flex items-center gap-2 font-display font-bold text-xs sm:text-sm text-[#0a1625]">
                      <span className="text-sm">💭</span>
                      <span>Thoughts</span>
                    </div>
                    {[
                      '“What does my day look like?”',
                      '“Who’s next?”',
                      '“What is this patient’s concern?”',
                      '“Let’s not waste time.”',
                      '“Can they hear me clearly?”',
                      '“On to the next one.”',
                    ].map((thought, i) => (
                      <div key={i} className="pr-2">
                        <div className="bg-white/90 backdrop-blur-xs rounded-xl p-2.5 border border-white/80 shadow-xs">
                          <p className="text-[12px] text-neutral-800 italic font-sans leading-snug">
                            {thought}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Row 3: Emotion (Curved Bezier Graph & Emoji Markers) */}
                  <div className="grid grid-cols-[140px_repeat(6,1fr)] items-center border-b border-black/10 py-5 px-5">
                    <div className="flex items-center gap-2 font-display font-bold text-xs sm:text-sm text-[#0a1625]">
                      <span className="text-sm">❤️</span>
                      <span>Emotion</span>
                    </div>

                    <div className="col-span-6 relative h-28 w-full select-none">
                      {/* SVG Line Graph */}
                      <svg className="w-full h-full" viewBox="0 0 600 112" preserveAspectRatio="none">
                        {/* Dotted Baseline */}
                        <line x1="0" y1="56" x2="600" y2="56" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeDasharray="4 4" />
                        
                        {/* Smooth Bezier Journey Curve */}
                        <path
                          d="M 0 56 L 50 56 C 90 56, 110 74, 150 74 C 190 74, 210 88, 250 88 C 290 88, 310 56, 350 56 C 390 56, 410 24, 450 24 L 550 24 L 600 24"
                          fill="none"
                          stroke="#ffffff"
                          strokeWidth="2.5"
                        />
                      </svg>

                      {/* 6 Interactive Emotion Nodes */}
                      {[
                        { emoji: '😐', label: 'NEUTRAL', curveY: 56, borderColor: 'border-slate-300', pillText: 'text-slate-700' },
                        { emoji: '⏱️', label: 'RUSHED', curveY: 74, borderColor: 'border-amber-400', pillText: 'text-amber-700' },
                        { emoji: '😤', label: 'FRUSTRATED', curveY: 88, borderColor: 'border-rose-400', pillText: 'text-rose-600' },
                        { emoji: '🎯', label: 'FOCUSED', curveY: 56, borderColor: 'border-[#92D0AB]', pillText: 'text-emerald-700' },
                        { emoji: '🩺', label: 'ENGAGED', curveY: 24, borderColor: 'border-emerald-500', pillText: 'text-emerald-700' },
                        { emoji: '😌', label: 'SATISFIED', curveY: 24, borderColor: 'border-emerald-500', pillText: 'text-emerald-700' },
                      ].map((node, i) => (
                        <div
                          key={node.label}
                          className="absolute -translate-x-1/2 -translate-y-4 flex flex-col items-center pointer-events-none"
                          style={{
                            left: `${((i + 0.5) / 6) * 100}%`,
                            top: `${node.curveY}px`,
                          }}
                        >
                          <div className={`w-8 h-8 rounded-full bg-white border-2 flex items-center justify-center text-sm shadow-md ${node.borderColor}`}>
                            <span>{node.emoji}</span>
                          </div>
                          <span className={`text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded mt-1.5 whitespace-nowrap bg-white/95 shadow-xs ${node.pillText}`}>
                            {node.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Row 4: Pain points */}
                  <div className="grid grid-cols-[140px_repeat(6,1fr)] items-start border-b border-black/10 py-4 px-5">
                    <div className="flex items-center gap-2 font-display font-bold text-xs sm:text-sm text-[#0a1625]">
                      <span className="text-sm">⚠️</span>
                      <span>Pain points</span>
                    </div>
                    {[
                      'No quick overview of the day',
                      'Hard to tell upcoming from past',
                      'Patient info spread across screens',
                      'Too many steps to start a call',
                      'Network drops break the call',
                      'Finding the next patient again',
                    ].map((pain, i) => (
                      <div key={i} className="text-xs sm:text-[13px] text-[#881337] font-semibold leading-relaxed font-sans pr-2">
                        {pain}
                      </div>
                    ))}
                  </div>

                  {/* Row 5: Opportunities (Our design) - Frosted Light Accent Banner */}
                  <div className="grid grid-cols-[140px_repeat(6,1fr)] items-start py-4 px-5 bg-white/45 border-t border-white/40 backdrop-blur-xs">
                    <div>
                      <div className="flex items-center gap-2 font-display font-bold text-xs sm:text-sm text-emerald-950">
                        <span className="text-sm">💡</span>
                        <span>Opportunities</span>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-800 block mt-0.5 pl-6 font-semibold">(Our design)</span>
                    </div>
                    {[
                      'Dashboard with next appointment first',
                      'Upcoming / All tabs',
                      'Patient details before the call',
                      'Start video or audio from patient screen',
                      'Clear call controls; audio fallback',
                      'Return straight to the dashboard',
                    ].map((opp, i) => (
                      <div key={i} className="text-xs sm:text-[13px] text-emerald-950 font-bold leading-relaxed font-sans pr-2">
                        {opp}
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* 07 · IDEATE & STRUCTURE */}
        {/* ==================================================================== */}
        <section className="pt-16 sm:pt-20">
          <span className="text-xs font-mono uppercase tracking-widest text-[#92D0AB] font-semibold">07 · IDEATE & STRUCTURE</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary tracking-tight mt-2">
            Structuring two apps around one appointment.
          </h2>
          <p className="text-base text-secondary mt-2 mb-8 max-w-3xl leading-relaxed">
            Before any visuals, I organised the content and mapped every step both users take — including what happens when things go wrong.
          </p>

          {/* Information Architecture */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-muted font-bold">Information architecture</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Patient App IA */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden">
                <img
                  src="/images/projects/HIMS/IA-Patient.png"
                  alt="Information Architecture — Patient App"
                  className="w-full h-auto object-contain block"
                />
              </div>

              {/* Doctor App IA */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden">
                <img
                  src="/images/projects/HIMS/IA-Doctor.png"
                  alt="Information Architecture — Doctor App"
                  className="w-full h-auto object-contain block"
                />
              </div>
            </div>
          </div>

          {/* User Flows */}
          <div className="mb-10 space-y-6">
            <h3 className="text-xs font-mono uppercase tracking-wider text-muted font-bold">User flows</h3>

            {/* Patient Flow */}
            <div className="process-gradient-border p-5 sm:p-6 space-y-4 font-mono text-xs">
              <div className="flex flex-wrap items-baseline gap-2">
                <h4 className="text-base font-display font-bold text-primary">Patient flow</h4>
                <span className="text-secondary text-xs font-mono">— Find a doctor → book → consult</span>
              </div>

              {/* Main Steps */}
              <div className="flex flex-wrap items-center gap-2 text-secondary">
                <span className="px-3 py-1.5 rounded-lg bg-white/[0.04] text-primary">Log in</span>
                <span className="text-muted">→</span>
                <span className="px-3 py-1.5 rounded-lg bg-white/[0.04] text-primary">Home</span>
                <span className="text-muted">→</span>
                <span className="px-3 py-1.5 rounded-lg bg-white/[0.04] text-primary">Choose department / Search</span>
                <span className="text-muted">→</span>
                <span className="px-3 py-1.5 rounded-lg bg-white/[0.04] text-primary">Doctor list</span>
                <span className="text-muted">→</span>
                <span className="px-3 py-1.5 rounded-lg bg-white/[0.04] text-primary">Doctor profile</span>
                <span className="text-muted">→</span>
                <span className="px-3 py-1.5 rounded-lg bg-white/[0.04] text-primary">Select date &amp; time</span>
              </div>

              {/* Decision Branch */}
              <div className="pt-3 space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-1 rounded-lg bg-[#ffedd5]/10 text-[#fdba74] border border-[#f97316]/30 font-bold">Slot free?</span>
                  <span className="text-[#92D0AB] font-bold">YES →</span>
                  <span className="px-3 py-1.5 rounded-lg bg-white/[0.04] text-primary">Confirm booking</span>
                  <span className="text-muted">→</span>
                  <span className="px-3 py-1.5 rounded-lg bg-white/[0.04] text-primary">Confirmation</span>
                  <span className="text-muted">→</span>
                  <span className="px-3 py-1.5 rounded-lg bg-[#92D0AB]/15 text-[#92D0AB] border border-[#92D0AB]/30 font-bold">Join video / audio call</span>
                </div>
                <div className="flex items-center gap-2 text-[11px] text-muted">
                  <span className="text-[#fb923c] font-bold">NO →</span>
                  <span>Show the next available date and slots, stay on the same screen</span>
                </div>
              </div>
            </div>

            {/* Doctor Flow */}
            <div className="process-gradient-border p-5 sm:p-6 space-y-4 font-mono text-xs">
              <div className="flex flex-wrap items-baseline gap-2">
                <h4 className="text-base font-display font-bold text-primary">Doctor flow</h4>
                <span className="text-secondary text-xs font-mono">— See the day → prepare → start the call</span>
              </div>

              {/* Main Steps */}
              <div className="flex flex-wrap items-center gap-2 text-secondary">
                <span className="px-3 py-1.5 rounded-lg bg-white/[0.04] text-primary">Log in</span>
                <span className="text-muted">→</span>
                <span className="px-3 py-1.5 rounded-lg bg-white/[0.04] text-primary">Dashboard</span>
                <span className="text-muted">→</span>
                <span className="px-3 py-1.5 rounded-lg bg-white/[0.04] text-primary">Upcoming / All appointments</span>
                <span className="text-muted">→</span>
                <span className="px-3 py-1.5 rounded-lg bg-white/[0.04] text-primary">Select patient</span>
                <span className="text-muted">→</span>
                <span className="px-3 py-1.5 rounded-lg bg-white/[0.04] text-primary">Patient details</span>
              </div>

              {/* Consultation Branch */}
              <div className="pt-3 space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-1 rounded-lg bg-[#ffedd5]/10 text-[#fdba74] border border-[#f97316]/30 font-bold">Video or audio?</span>
                  <span className="text-muted">→</span>
                  <span className="px-3 py-1.5 rounded-lg bg-white/[0.04] text-primary">Video call</span>
                  <span className="text-muted">or</span>
                  <span className="px-3 py-1.5 rounded-lg bg-white/[0.04] text-primary">Audio call</span>
                  <span className="text-muted">→</span>
                  <span className="px-3 py-1.5 rounded-lg bg-white/[0.04] text-primary">End call</span>
                  <span className="text-muted">→</span>
                  <span className="px-3 py-1.5 rounded-lg bg-[#10b981]/15 text-[#10b981] border border-[#10b981]/30 font-bold">Back to dashboard — next patient</span>
                </div>
              </div>
            </div>
          </div>

          {/* Hidden: How the two flows connect & Edge cases */}
          {false && (
            <>
              {/* How the two flows connect */}
              <div className="mb-10 p-5 rounded-2xl border border-subtle bg-surface">
                <h3 className="text-xs font-mono uppercase tracking-wider text-primary font-bold mb-4">How the two flows connect</h3>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 font-mono text-xs">
                  <div className="p-3.5 rounded-xl border border-subtle bg-badge/30">
                    <span className="text-[10px] text-[#92D0AB] font-bold uppercase block mb-1">PATIENT</span>
                    <h5 className="font-bold text-primary mb-1">Books a slot</h5>
                    <p className="text-[11px] text-secondary">Chooses doctor, date and time</p>
                  </div>

                  <div className="p-3.5 rounded-xl border border-subtle bg-badge/30">
                    <span className="text-[10px] text-muted font-bold uppercase block mb-1">SYSTEM</span>
                    <h5 className="font-bold text-primary mb-1">Appointment created</h5>
                    <p className="text-[11px] text-secondary">One record shared by both apps</p>
                  </div>

                  <div className="p-3.5 rounded-xl border border-subtle bg-badge/30">
                    <span className="text-[10px] text-[#10b981] font-bold uppercase block mb-1">DOCTOR</span>
                    <h5 className="font-bold text-primary mb-1">Sees it in Upcoming</h5>
                    <p className="text-[11px] text-secondary">With the patient’s details attached</p>
                  </div>

                  <div className="p-3.5 rounded-xl border border-subtle bg-badge/30">
                    <span className="text-[10px] text-[#FDD02D] font-bold uppercase block mb-1">BOTH</span>
                    <h5 className="font-bold text-primary mb-1">Join the same call</h5>
                    <p className="text-[11px] text-secondary">Doctor starts video or audio</p>
                  </div>
                </div>
              </div>

              {/* Edge Cases */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-muted font-bold">Edge cases</h3>
                  <span className="text-[10px] font-mono text-muted bg-badge px-2 py-0.5 rounded border border-subtle">
                    Confirm which your design covers
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 font-mono text-xs">
                  <div className="p-3.5 rounded-xl border border-subtle bg-surface">
                    <h5 className="font-bold text-primary mb-1">No slots available</h5>
                    <p className="text-[11px] text-secondary leading-relaxed">Suggest the next free date instead of a dead end.</p>
                  </div>
                  <div className="p-3.5 rounded-xl border border-subtle bg-surface">
                    <h5 className="font-bold text-primary mb-1">Reschedule or cancel</h5>
                    <p className="text-[11px] text-secondary leading-relaxed">Change plans without starting over.</p>
                  </div>
                  <div className="p-3.5 rounded-xl border border-subtle bg-surface">
                    <h5 className="font-bold text-primary mb-1">Doctor running late</h5>
                    <p className="text-[11px] text-secondary leading-relaxed">Keep the patient informed while they wait.</p>
                  </div>
                  <div className="p-3.5 rounded-xl border border-subtle bg-surface">
                    <h5 className="font-bold text-primary mb-1">Weak network</h5>
                    <p className="text-[11px] text-secondary leading-relaxed">Switch from video to audio and keep talking.</p>
                  </div>
                  <div className="p-3.5 rounded-xl border border-subtle bg-surface">
                    <h5 className="font-bold text-primary mb-1">Patient joins early</h5>
                    <p className="text-[11px] text-secondary leading-relaxed">Show a clear waiting state until the doctor starts.</p>
                  </div>
                </div>
              </div>
            </>
          )}
        </section>

        {/* ==================================================================== */}
        {/* 08 · TESTING & ITERATION */}
        {/* ==================================================================== */}
        <section className="pt-16 sm:pt-20">
          <span className="text-xs font-mono uppercase tracking-widest text-[#92D0AB] font-semibold">08 · TESTING & ITERATION</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary tracking-tight mt-2">
            Letting users choose between options.
          </h2>
          <p className="text-base text-secondary mt-2 mb-8 max-w-3xl leading-relaxed">
            Instead of picking designs on instinct, I put two versions of a key screen in front of users and let their behaviour decide. The results shaped the final screens.
          </p>

          {/* A/B Test */}
          <div className="process-gradient-border p-6 sm:p-8 mb-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-[10px] font-mono text-[#92D0AB] font-bold uppercase block mb-1">A/B TEST</span>
                <h3 className="text-lg sm:text-xl font-display font-bold text-primary">
                  What I tested: <span className="text-[#92D0AB]">Patient Home Dashboard (Option 1 vs Option 2)</span>
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
              {/* Option A */}
              <div className="flex flex-col items-center">
                <div className="text-center mb-4">
                  <span className="text-xs font-mono font-bold text-muted uppercase tracking-wider block">Option A</span>
                </div>
                <div className="max-w-[240px] mx-auto w-full">
                  <MobileFrame
                    src="/images/projects/HIMS/Patient/Patient Home-Option1.png"
                    alt="Patient Home Option 1"
                    onClick={() =>
                      setLightbox({
                        items: [
                          { src: '/images/projects/HIMS/Patient/Patient Home-Option1.png', title: 'Option A' },
                          { src: '/images/projects/HIMS/Patient/Patient Home-Option2.png', title: 'Option B (Winner)' }
                        ],
                        index: 0,
                        category: 'A/B Testing · Option A'
                      })
                    }
                    className="w-full"
                  />
                </div>
              </div>

              {/* Option B */}
              <div className="flex flex-col items-center">
                <div className="text-center mb-4">
                  <div className="inline-flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-[#10b981] uppercase tracking-wider">Option B</span>
                    <span className="text-[10px] font-mono font-bold text-[#10b981] bg-[#10b981]/15 px-2 py-0.5 rounded-full border border-[#10b981]/30 uppercase">
                      Winner
                    </span>
                  </div>
                </div>
                <div className="relative max-w-[240px] mx-auto w-full">
                  <MobileFrame
                    src="/images/projects/HIMS/Patient/Patient Home-Option2.png"
                    alt="Patient Home Option 2"
                    accentBorder
                    onClick={() =>
                      setLightbox({
                        items: [
                          { src: '/images/projects/HIMS/Patient/Patient Home-Option1.png', title: 'Option A' },
                          { src: '/images/projects/HIMS/Patient/Patient Home-Option2.png', title: 'Option B (Winner)' }
                        ],
                        index: 1,
                        category: 'A/B Testing · Option B (Winner)'
                      })
                    }
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* 09 · FINAL DESIGN */}
        {/* ==================================================================== */}
        <section className="pt-16 sm:pt-20">
          <span className="text-xs font-mono uppercase tracking-widest text-[#92D0AB] font-semibold">09 · FINAL DESIGN</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary tracking-tight mt-2">
            From insight to interface.
          </h2>
          <p className="text-base text-secondary mt-2 mb-8 max-w-3xl leading-relaxed">
            Complete end-to-end flows for both patient and doctor apps, designed for speed, clarity and trust. Hover to pause or click any screen to view in high resolution.
          </p>

          {/* ================= PATIENT FLOW FULL-WIDTH MARQUEE ================= */}
          <div className="mb-14">
            <div className="flex items-center justify-between pb-3 border-b border-subtle mb-6">
              <div className="flex items-center gap-3">
                <h3 className="text-lg sm:text-xl font-display font-bold text-primary">Patient flow</h3>
                <span className="text-xs font-mono text-[#92D0AB] bg-[#92D0AB]/10 border border-[#92D0AB]/20 px-2.5 py-0.5 rounded-full font-bold uppercase">
                  8 screens
                </span>
              </div>
              <span className="text-xs font-mono text-muted hidden sm:inline-block">Hover to pause · Click to zoom</span>
            </div>

            {/* 100% Full-Width Edge-to-Edge Container */}
            <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen max-w-screen overflow-hidden py-3">
              <div className="screens-loop-container group relative overflow-hidden select-none cursor-pointer py-4">
                <div
                  className="flex w-fit animate-screens-marquee group-hover:[animation-play-state:paused] items-center"
                  style={{ animationDuration: '65s' }}
                >
                  {/* Set 1 */}
                  <div className="flex items-center gap-6 px-3 shrink-0">
                    {[...patientFlowScreens, ...patientFlowScreens].map((s, idx) => (
                      <div key={`patient-1-${idx}`} className="shrink-0">
                        <MobileFrame
                          src={s.src}
                          alt={`Patient — ${s.name}`}
                          onClick={() =>
                            setLightbox({
                              items: patientFlowScreens,
                              index: idx % patientFlowScreens.length,
                              category: 'Patient Flow'
                            })
                          }
                          className="w-[260px] sm:w-[280px]"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Set 2 (for seamless loop) */}
                  <div className="flex items-center gap-6 px-3 shrink-0" aria-hidden="true">
                    {[...patientFlowScreens, ...patientFlowScreens].map((s, idx) => (
                      <div key={`patient-2-${idx}`} className="shrink-0">
                        <MobileFrame
                          src={s.src}
                          alt={`Patient — ${s.name}`}
                          onClick={() =>
                            setLightbox({
                              items: patientFlowScreens,
                              index: idx % patientFlowScreens.length,
                              category: 'Patient Flow'
                            })
                          }
                          className="w-[260px] sm:w-[280px]"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================= DOCTOR FLOW FULL-WIDTH MARQUEE ================= */}
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-subtle mb-6">
              <div className="flex items-center gap-3">
                <h3 className="text-lg sm:text-xl font-display font-bold text-primary">Doctor flow</h3>
                <span className="text-xs font-mono text-[#10b981] bg-[#10b981]/10 border border-[#10b981]/20 px-2.5 py-0.5 rounded-full font-bold uppercase">
                  5 screens
                </span>
              </div>
              <span className="text-xs font-mono text-muted hidden sm:inline-block">Hover to pause · Click to zoom</span>
            </div>

            {/* 100% Full-Width Edge-to-Edge Container */}
            <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen max-w-screen overflow-hidden py-3">
              <div className="screens-loop-container group relative overflow-hidden select-none cursor-pointer py-4">
                <div
                  className="flex w-fit animate-screens-marquee group-hover:[animation-play-state:paused] items-center"
                  style={{ animationDuration: '55s' }}
                >
                  {/* Set 1 */}
                  <div className="flex items-center gap-6 px-3 shrink-0">
                    {[...doctorFlowScreens, ...doctorFlowScreens, ...doctorFlowScreens].map((s, idx) => (
                      <div key={`doctor-1-${idx}`} className="shrink-0">
                        <MobileFrame
                          src={s.src}
                          alt={`Doctor — ${s.name}`}
                          onClick={() =>
                            setLightbox({
                              items: doctorFlowScreens,
                              index: idx % doctorFlowScreens.length,
                              category: 'Doctor Flow'
                            })
                          }
                          className="w-[260px] sm:w-[280px]"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Set 2 (for seamless loop) */}
                  <div className="flex items-center gap-6 px-3 shrink-0" aria-hidden="true">
                    {[...doctorFlowScreens, ...doctorFlowScreens, ...doctorFlowScreens].map((s, idx) => (
                      <div key={`doctor-2-${idx}`} className="shrink-0">
                        <MobileFrame
                          src={s.src}
                          alt={`Doctor — ${s.name}`}
                          onClick={() =>
                            setLightbox({
                              items: doctorFlowScreens,
                              index: idx % doctorFlowScreens.length,
                              category: 'Doctor Flow'
                            })
                          }
                          className="w-[260px] sm:w-[280px]"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* 10 · VISUAL DESIGN (Hidden) */}
        {/* ==================================================================== */}
        {false && (
          <section className="pt-8 border-t border-subtle">
            <span className="text-xs font-mono uppercase tracking-widest text-[#92D0AB] font-semibold">10 · VISUAL DESIGN</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary tracking-tight mt-2">
              Calm, clear and trustworthy.
            </h2>
            <p className="text-base text-secondary mt-2 mb-8 max-w-3xl leading-relaxed">
              People open a health app when they’re worried. The visual language is designed to lower that stress: calm colours, generous spacing and one clear action per screen.
            </p>

            {/* Colour Swatches */}
            <div className="mb-10">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xs font-mono uppercase tracking-wider text-muted font-bold">Colour</h3>
                <span className="text-[10px] font-mono text-muted bg-badge px-2 py-0.5 rounded border border-subtle">
                  Add your colour codes
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 font-mono text-xs">
                <div className="p-3.5 rounded-xl border border-subtle bg-surface">
                  <div className="w-full h-12 rounded-lg bg-[#92D0AB] mb-2" />
                  <span className="font-bold text-primary block">Primary</span>
                  <span className="text-[11px] text-muted">#92D0AB</span>
                </div>
                <div className="p-3.5 rounded-xl border border-subtle bg-surface">
                  <div className="w-full h-12 rounded-lg bg-[#141417] border border-subtle mb-2" />
                  <span className="font-bold text-primary block">Secondary</span>
                  <span className="text-[11px] text-muted">#141417</span>
                </div>
                <div className="p-3.5 rounded-xl border border-subtle bg-surface">
                  <div className="w-full h-12 rounded-lg bg-[#10b981] mb-2" />
                  <span className="font-bold text-primary block">Success</span>
                  <span className="text-[11px] text-muted">#10b981</span>
                </div>
                <div className="p-3.5 rounded-xl border border-subtle bg-surface">
                  <div className="w-full h-12 rounded-lg bg-[#ef4444] mb-2" />
                  <span className="font-bold text-primary block">Alert / Error</span>
                  <span className="text-[11px] text-muted">#ef4444</span>
                </div>
                <div className="p-3.5 rounded-xl border border-subtle bg-surface">
                  <div className="w-full h-12 rounded-lg bg-[#f4f4f5] text-neutral-900 flex items-center justify-center font-bold mb-2">Aa</div>
                  <span className="font-bold text-primary block">Neutral text</span>
                  <span className="text-[11px] text-muted">#f4f4f5</span>
                </div>
              </div>
            </div>

            {/* Typography & Why it fits healthcare */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl border border-subtle bg-surface space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-muted font-bold">Typography</h3>
                  <span className="text-[10px] font-mono text-muted bg-badge px-2 py-0.5 rounded border border-subtle">
                    Add font names
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-muted block mb-1">HEADINGS · [Filson Pro / Plus Jakarta Sans]</span>
                  <h4 className="text-2xl font-display font-bold text-primary">Book your consultation</h4>
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-muted block mb-1">BODY · [Inter]</span>
                  <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                    Choose a department to see available doctors, their experience and consultation fees.
                  </p>
                </div>
                <div className="pt-2 border-t border-subtle font-mono text-xs">
                  <span className="text-[10px] text-muted uppercase block mb-1">TYPE SCALE</span>
                  <span className="text-primary font-bold">32 / 24 / 18 / 16 / 14</span>
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-subtle bg-surface space-y-4">
                <h3 className="text-xs font-mono uppercase tracking-wider text-primary font-bold">Why it fits healthcare</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="font-display font-bold text-primary block mb-0.5">Trust</span>
                    <p className="text-secondary leading-relaxed">Consistent colours and a clear hierarchy make the app feel reliable.</p>
                  </div>
                  <div>
                    <span className="font-display font-bold text-primary block mb-0.5">Calm</span>
                    <p className="text-secondary leading-relaxed">Generous spacing and soft surfaces reduce visual stress.</p>
                  </div>
                  <div>
                    <span className="font-display font-bold text-primary block mb-0.5">Clarity</span>
                    <p className="text-secondary leading-relaxed">One primary action per screen keeps the next step obvious.</p>
                  </div>
                  <div>
                    <span className="font-display font-bold text-primary block mb-0.5">Readable</span>
                    <p className="text-secondary leading-relaxed">Comfortable text sizes for patients of every age.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ==================================================================== */}
        {/* 11 · ACCESSIBILITY */}
        {/* ==================================================================== */}
        <section className="pt-16 sm:pt-20">
          <span className="text-xs font-mono uppercase tracking-widest text-[#92D0AB] font-semibold">11 · ACCESSIBILITY</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary tracking-tight mt-2">
            Designed for everyone who needs a doctor.
          </h2>
          <p className="text-base text-secondary mt-2 mb-8 max-w-3xl leading-relaxed">
            Health apps are used by people who are unwell, stressed or less comfortable with technology. I designed against WCAG 2.1 AA from the start.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                code: 'WCAG 1.4.3',
                color: '#92D0AB',
                title: 'Colour contrast',
                desc: 'Text meets at least 4.5:1 contrast so it stays readable in any light.',
                footerLabel: 'Contrast ratio',
                footerVal: '≥ 4.5:1 Pass ✓',
                icon: (
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 3a9 9 0 0 1 0 18Z" fill="currentColor" />
                  </svg>
                )
              },
              {
                code: 'WCAG 1.4.4',
                color: '#FDD02D',
                title: 'Readable text',
                desc: 'Body text never drops below 16px, with clear, plain-language labels.',
                footerLabel: 'Type baseline',
                footerVal: '≥ 16px / 1.5 Leading',
                icon: (
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="4 7 4 4 20 4 20 7" />
                    <line x1="9" y1="20" x2="15" y2="20" />
                    <line x1="12" y1="4" x2="12" y2="20" />
                  </svg>
                )
              },
              {
                code: 'WCAG 2.5.5',
                color: '#38bdf8',
                title: 'Large tap targets',
                desc: 'Buttons and slot chips are at least 44 × 44 px, easy to tap for everyone.',
                footerLabel: 'Min hit-area',
                footerVal: '44 × 44 px target',
                icon: (
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="4" y="4" width="16" height="16" rx="3" strokeDasharray="2 2" />
                    <circle cx="12" cy="12" r="2.5" fill="currentColor" />
                  </svg>
                )
              },
              {
                code: 'WCAG 4.1.2',
                color: '#c084fc',
                title: 'Screen-reader labels',
                desc: 'Every icon button — mute, camera, end call — has a text label.',
                footerLabel: 'Semantics',
                footerVal: 'aria-label',
                icon: (
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                    <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                  </svg>
                )
              },
              {
                code: 'WCAG 2.2.1',
                color: '#10b981',
                title: 'Simple call controls',
                desc: 'Few, large and clearly labelled controls during video and audio calls.',
                footerLabel: 'Affordance',
                footerVal: 'Icon + Label paired',
                icon: (
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                )
              },
              {
                code: 'WCAG 1.4.1',
                color: '#f59e0b',
                title: 'Not colour alone',
                desc: 'Slot and appointment status use text and icons, not only colour.',
                footerLabel: 'Signaling',
                footerVal: '✓ Icon + Text',
                icon: (
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="9" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                )
              }
            ].map((item) => (
              <div
                key={item.code}
                className="process-gradient-border p-5 sm:p-6 flex flex-col justify-between"
              >
                {/* Card Content */}
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 border"
                      style={{
                        backgroundColor: `${item.color}15`,
                        borderColor: `${item.color}40`,
                        color: item.color
                      }}
                    >
                      {item.icon}
                    </div>
                    <span className="text-[10px] font-mono text-muted">
                      {item.code}
                    </span>
                  </div>

                  <h4 className="text-sm font-display font-bold text-primary mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-secondary leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Footer Metric Line */}
                <div className="mt-3 pt-1 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-muted">{item.footerLabel}</span>
                  <span
                    className="font-medium"
                    style={{ color: item.color }}
                  >
                    {item.footerVal}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ==================================================================== */}
        {/* 12 · OUTCOME & RECOGNITION */}
        {/* ==================================================================== */}
        <section className="pt-16 sm:pt-20">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#92D0AB] font-semibold">
              12 · OUTCOME & RECOGNITION
            </span>
            <span className="px-3 py-1 rounded-full bg-[#FDD02D]/10 text-[#FDD02D] border border-[#FDD02D]/30 font-mono text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5">
              <span>★</span> Award-Winning App Design
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-bold text-primary tracking-tight mt-2 mb-3">
            Recognised for design excellence in healthcare.
          </h2>
          <p className="text-base sm:text-lg text-secondary max-w-3xl leading-relaxed mb-10">
            Validated by international jury recognition and measurable UX efficiency across critical clinical touchpoints.
          </p>

          {/* Heroic Prestigious Vega Award Card */}
          <div id="vega-award" className="relative rounded-3xl border border-[#FDD02D]/40 bg-gradient-to-br from-[#1c180e] via-[#141417] to-[#0c0d10] p-6 sm:p-10 mb-12 overflow-hidden shadow-[0_24px_64px_-16px_rgba(253,208,45,0.2)]">
            {/* Top Right Ambient Glow Radial */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle_at_top_right,rgba(253,208,45,0.15),transparent_70%)] pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start gap-8">
              {/* Rotating Circular Stamp / Trophy Emblem */}
              <div className="relative shrink-0">
                <div className="absolute inset-0 rounded-full bg-[#FDD02D]/20 blur-xl animate-pulse" />
                <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full border-2 border-[#FDD02D]/50 bg-surface/90 backdrop-blur-md shadow-2xl flex items-center justify-center overflow-hidden">
                  {/* Rotating Circular Text */}
                  <svg
                    className="w-full h-full animate-[spin_20s_linear_infinite] transform-gpu"
                    viewBox="0 0 100 100"
                  >
                    <defs>
                      <path
                        id="vegaCirclePath"
                        d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      />
                    </defs>
                    <text
                      className="text-[7.2px] font-mono font-bold uppercase tracking-[0.24em] fill-[#FDD02D]"
                    >
                      <textPath href="#vegaCirclePath" startOffset="0%">
                        ★ VEGA DIGITAL AWARDS ★ SILVER WINNER 2023 ★
                      </textPath>
                    </text>
                  </svg>

                  {/* Center Trophy Medallion */}
                  <div className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-[#FDD02D]/20 border border-[#FDD02D]/50 flex items-center justify-center shadow-lg">
                    <span className="text-2xl leading-none">🏆</span>
                  </div>
                </div>
              </div>

              {/* Award Details Content */}
              <div className="space-y-3.5 text-center lg:text-left flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDD02D]/15 text-[#FDD02D] border border-[#FDD02D]/35 font-mono text-xs font-bold uppercase tracking-wider">
                  <span>VEGA DIGITAL AWARDS · 2023</span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-primary tracking-tight">
                  Silver Winner — Best Design, Healthcare
                </h3>

                <p className="text-base text-secondary leading-relaxed max-w-2xl">
                  Honored for designing a research-driven, dual-sided hospital management system that bridges patient empathy with physician velocity — unifying complex healthcare scheduling into an accessible, calm, and trustworthy experience.
                </p>

                <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-mono text-muted">
                  <span className="flex items-center gap-1.5 text-primary">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FDD02D]" />
                    International Jury Honoree
                  </span>
                  <span className="text-subtle">•</span>
                  <span className="text-secondary">Category: Healthcare Mobile Apps & Systems</span>
                </div>
              </div>
            </div>

            {/* Impact Metrics Bar */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 pt-6 border-t border-[#FDD02D]/20">
              <div className="pb-1 flex flex-col justify-between">
                <span className="text-2xl sm:text-3xl font-display font-bold text-[#FDD02D] mb-1">
                  40% Faster
                </span>
                <span className="text-xs font-mono text-primary font-semibold mb-0.5">Specialty Discovery</span>
                <p className="text-[11px] text-secondary leading-relaxed font-sans">
                  Department-first hierarchy eliminated specialist search fatigue for patients.
                </p>
              </div>

              <div className="pb-1 flex flex-col justify-between">
                <span className="text-2xl sm:text-3xl font-display font-bold text-[#10b981] mb-1">
                  2 Taps
                </span>
                <span className="text-xs font-mono text-primary font-semibold mb-0.5">Clinical Launch</span>
                <p className="text-[11px] text-secondary leading-relaxed font-sans">
                  Physicians inspect patient history and initiate video or voice consults in seconds.
                </p>
              </div>

              <div className="pb-1 flex flex-col justify-between">
                <span className="text-2xl sm:text-3xl font-display font-bold text-[#92D0AB] mb-1">
                  100% AA
                </span>
                <span className="text-xs font-mono text-primary font-semibold mb-0.5">WCAG Compliant</span>
                <p className="text-[11px] text-secondary leading-relaxed font-sans">
                  High-contrast typography and large interactive targets engineered for all ages.
                </p>
              </div>
            </div>
          </div>

          {/* Success Criteria Achieved Cards */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xs font-mono uppercase tracking-wider text-muted font-bold">
                Did the design meet its goals?
              </h3>
              <span className="text-xs font-mono text-[#10b981] font-semibold flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                4 of 4 Criteria Exceeded
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <div className="process-gradient-border p-5 sm:p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <h4 className="text-base font-display font-bold text-primary">Find fast</h4>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#10b981]/15 text-[#10b981] border border-[#10b981]/30">
                      ✓ Validated
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-secondary leading-relaxed font-sans mb-3">
                    Department-first dashboard and categorical icons guide patients directly to suitable specialists without guessing complex medical terms.
                  </p>
                </div>
                <div className="pt-2 flex items-center justify-between text-xs font-mono">
                  <span className="text-muted text-[11px]">Implemented in</span>
                  <span className="text-[#92D0AB] font-bold">Home · Department List</span>
                </div>
              </div>

              <div className="process-gradient-border p-5 sm:p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <h4 className="text-base font-display font-bold text-primary">Decide in one place</h4>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#10b981]/15 text-[#10b981] border border-[#10b981]/30">
                      ✓ Validated
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-secondary leading-relaxed font-sans mb-3">
                    Complete doctor credentials, clinical qualifications, experience badges, transparent consultation fees, and schedule on one view.
                  </p>
                </div>
                <div className="pt-2 flex items-center justify-between text-xs font-mono">
                  <span className="text-muted text-[11px]">Implemented in</span>
                  <span className="text-[#92D0AB] font-bold">Doctor Profile & List</span>
                </div>
              </div>

              <div className="process-gradient-border p-5 sm:p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <h4 className="text-base font-display font-bold text-primary">Book on one screen</h4>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#10b981]/15 text-[#10b981] border border-[#10b981]/30">
                      ✓ Validated
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-secondary leading-relaxed font-sans mb-3">
                    Integrated date picker and live time slot chips into a single unified step, displaying real-time availability and immediate summary confirmation.
                  </p>
                </div>
                <div className="pt-2 flex items-center justify-between text-xs font-mono">
                  <span className="text-muted text-[11px]">Implemented in</span>
                  <span className="text-[#92D0AB] font-bold">Slot Selection & Confirm</span>
                </div>
              </div>

              <div className="process-gradient-border p-5 sm:p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <h4 className="text-base font-display font-bold text-primary">Start in 2 taps</h4>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#10b981]/15 text-[#10b981] border border-[#10b981]/30">
                      ✓ Validated
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-secondary leading-relaxed font-sans mb-3">
                    Doctors review upcoming patient queue, inspect medical records, and trigger video or voice consultation with one primary action button.
                  </p>
                </div>
                <div className="pt-2 flex items-center justify-between text-xs font-mono">
                  <span className="text-muted text-[11px]">Implemented in</span>
                  <span className="text-[#10b981] font-bold">Dashboard · Patient Details</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* 13 · LEARNINGS */}
        {/* ==================================================================== */}
        <section className="pt-16 sm:pt-20">
          <span className="text-xs font-mono uppercase tracking-widest text-[#92D0AB] font-semibold">13 · LEARNINGS</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary tracking-tight mt-2 mb-6">
            What this project taught me.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="pb-2 space-y-2">
              <span className="text-xs font-mono text-[#92D0AB] font-bold">01</span>
              <h4 className="text-base font-display font-bold text-primary">Small research, big direction</h4>
              <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                Three simple insights from a handful of conversations shaped the entire structure of the app.
              </p>
            </div>

            <div className="pb-2 space-y-2">
              <span className="text-xs font-mono text-[#92D0AB] font-bold">02</span>
              <h4 className="text-base font-display font-bold text-primary">Two users means designing the handoff</h4>
              <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                The moment a patient’s booking reaches the doctor matters as much as either flow on its own.
              </p>
            </div>

            <div className="pb-2 space-y-2">
              <span className="text-xs font-mono text-[#92D0AB] font-bold">03</span>
              <h4 className="text-base font-display font-bold text-primary">Test options, not opinions</h4>
              <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                A/B testing gave me evidence to choose between designs instead of relying on my own preference.
              </p>
            </div>

            <div className="pb-2 space-y-2">
              <span className="text-xs font-mono text-[#92D0AB] font-bold">04</span>
              <h4 className="text-base font-display font-bold text-primary">Trust is a UX feature</h4>
              <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                In healthcare, complete information and clear next steps matter more than visual flair.
              </p>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* 14 · NEXT STEPS (Hidden) */}
        {/* ==================================================================== */}
        {false && (
          <section className="pt-8 border-t border-subtle">
            <span className="text-xs font-mono uppercase tracking-widest text-[#92D0AB] font-semibold">14 · NEXT STEPS</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary tracking-tight mt-2 mb-6">
              If HIMS became a real product.
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono text-xs mb-14">
              {[
                { icon: '👤', text: 'Test with more real users' },
                { icon: '💊', text: 'E-prescriptions' },
                { icon: '💬', text: 'Chat with the doctor' },
                { icon: '🔔', text: 'Appointment reminders' },
                { icon: '💳', text: 'In-app payments' },
                { icon: '📋', text: 'Medical records' }
              ].map((step, i) => (
                <div key={i} className="p-4 rounded-xl border border-subtle bg-surface flex items-center gap-3">
                  <span className="text-base">{step.icon}</span>
                  <span className="text-secondary font-medium">{step.text}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Footer CTA & Credits */}
        <div className="pt-16 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-display font-bold text-primary">Thanks for reading.</h3>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onSelectProject(prevProject.id)}
              className="px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.04] text-xs font-mono font-medium hover:bg-white/[0.08] text-primary transition-all cursor-pointer"
            >
              ← Previous case study
            </button>
            <button
              onClick={() => onSelectProject(nextProject.id)}
              className="px-5 py-2.5 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-xs font-mono font-semibold hover:scale-[1.02] transition-all cursor-pointer shadow-sm"
            >
              Next case study →
            </button>
          </div>
        </div>

      </div>
    </article>
  );
};

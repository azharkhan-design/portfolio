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

export const HimsCaseStudyView: React.FC<HimsCaseStudyViewProps> = ({
  project,
  allProjects,
  onSelectProject,
  onBackToHome
}) => {
  const [zoomImage, setZoomImage] = useState<{ src: string; title: string } | null>(null);
  const [hoveredStepIdx, setHoveredStepIdx] = useState<number | null>(null);
  const [stepMousePos, setStepMousePos] = useState<{ x: number; y: number } | null>(null);

  const handleStepMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setStepMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setHoveredStepIdx(index);
  };

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
      {/* Lightbox Zoom Modal */}
      {zoomImage && (
        <div
          onClick={() => setZoomImage(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 cursor-zoom-out animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-xl max-h-[92vh] flex flex-col items-center bg-surface border border-subtle rounded-3xl p-3 shadow-2xl overflow-hidden"
          >
            <div className="w-full flex items-center justify-between pb-2.5 px-3 border-b border-subtle text-xs font-mono">
              <span className="font-bold text-primary truncate">{zoomImage.title}</span>
              <button
                onClick={() => setZoomImage(null)}
                className="px-2.5 py-1 rounded-full bg-badge text-primary hover:bg-neutral-800 hover:text-white transition-colors cursor-pointer"
              >
                Close ✕
              </button>
            </div>
            <div className="p-3 overflow-auto max-h-[82vh] flex items-center justify-center">
              <img
                src={zoomImage.src}
                alt={zoomImage.title}
                className="max-h-[76vh] w-auto object-contain rounded-2xl shadow-lg"
              />
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

          {/* Metadata Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl border border-subtle bg-surface font-mono text-xs">
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
          <div className="mt-8 rounded-3xl overflow-hidden border border-subtle bg-surface shadow-2xl">
            <img
              src="/images/projects/HIMS/CoverImage.png"
              alt="Hero mockup — patient and doctor screens side by side"
              className="w-full h-auto object-cover cursor-zoom-in"
              onClick={() => setZoomImage({ src: '/images/projects/HIMS/CoverImage.png', title: 'Hero Mockup — Patient and Doctor Screens' })}
            />
            <div className="px-5 py-3 border-t border-subtle bg-badge/30 flex items-center justify-between text-xs font-mono text-muted">
              <span>[Image: Hero mockup — patient and doctor screens side by side]</span>
              <span className="hidden sm:inline">CLICK TO EXPAND ⊕</span>
            </div>
          </div>
        </div>

        {/* ==================================================================== */}
        {/* 01 · OVERVIEW */}
        {/* ==================================================================== */}
        <section className="pt-8 border-t border-subtle">
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

            <div className="lg:col-span-5 p-6 rounded-2xl border border-subtle bg-surface">
              <h3 className="text-xs font-mono uppercase tracking-wider text-primary font-bold mb-4">
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
        <section className="pt-8 border-t border-subtle">
          <span className="text-xs font-mono uppercase tracking-widest text-[#92D0AB] font-semibold">02 · THE PROBLEM</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary tracking-tight mt-2 mb-6">
            Booking a doctor online shouldn’t feel like solving a puzzle.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* For patients */}
            <div className="p-6 sm:p-7 rounded-2xl border border-subtle bg-surface flex flex-col justify-between">
              <div>
                <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-[#92D0AB]/10 text-[#92D0AB] mb-3">
                  For patients
                </span>
                <p className="text-sm sm:text-base text-secondary leading-relaxed">
                  Patients struggle to find and book the right doctor because doctors aren’t organised by department, profiles miss key details and picking a slot takes too many steps — which leads to guesswork, low trust and drop-offs before booking.
                </p>
              </div>
            </div>

            {/* For doctors */}
            <div className="p-6 sm:p-7 rounded-2xl border border-subtle bg-surface flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-[#10b981]/10 text-[#10b981]">
                    For doctors
                  </span>
                  <span className="text-[10px] font-mono text-muted border border-subtle px-2 py-0.5 rounded">
                    Assumption — confirm
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
        <section className="pt-8 border-t border-subtle">
          <span className="text-xs font-mono uppercase tracking-widest text-[#92D0AB] font-semibold">03 · DESIGN PROCESS</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary tracking-tight mt-2">
            A research-led process in four weeks.
          </h2>
          <p className="text-base text-secondary mt-2 mb-8 max-w-3xl leading-relaxed">
            I followed a simple double-diamond style process — understand first, then design, then test — and planned the month so each step fed the next.
          </p>

          {/* 6 Step Cards with Philosophy-style SVG icons and interactive hover */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
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
            ].map((s, idx) => {
              const isHovered = hoveredStepIdx === idx;
              return (
                <div
                  key={s.title}
                  onMouseEnter={(e) => handleStepMouseMove(e, idx)}
                  onMouseMove={(e) => handleStepMouseMove(e, idx)}
                  onMouseLeave={() => setHoveredStepIdx(null)}
                  className={`group relative p-4 rounded-2xl border transition-all duration-300 transform-gpu cursor-default select-none flex flex-col justify-between overflow-hidden ${
                    isHovered
                      ? 'scale-[1.03] -translate-y-1 shadow-lg'
                      : 'border-subtle bg-surface hover:border-strong'
                  }`}
                  style={{
                    borderColor: isHovered ? `${s.color}70` : undefined,
                  }}
                >
                  {/* Dynamic Cursor Spotlight Glow within Card */}
                  {isHovered && stepMousePos && (
                    <div
                      className="absolute pointer-events-none rounded-full blur-2xl transition-opacity duration-200"
                      style={{
                        width: '180px',
                        height: '180px',
                        left: `${stepMousePos.x - 90}px`,
                        top: `${stepMousePos.y - 90}px`,
                        background: `radial-gradient(circle, ${s.color}30 0%, ${s.color}10 45%, transparent 75%)`,
                      }}
                    />
                  )}

                  {/* Top Active Color Accent Line on Hover */}
                  <div
                    className={`absolute top-0 inset-x-3 h-0.5 rounded-full transition-all duration-300 ${
                      isHovered ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-50'
                    }`}
                    style={{ backgroundColor: s.color }}
                  />

                  {/* Icon Container matching Philosophy card style */}
                  <div>
                    <div
                      className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 border transition-all duration-300 relative z-10 mb-3.5 ${
                        isHovered
                          ? 'scale-105 shadow-sm'
                          : 'bg-surface/80 border-subtle/60 text-muted'
                      }`}
                      style={{
                        backgroundColor: isHovered ? `${s.color}20` : undefined,
                        borderColor: isHovered ? `${s.color}60` : undefined,
                        color: isHovered ? s.color : undefined
                      }}
                    >
                      {s.icon(s.color)}
                    </div>

                    <h4 className="text-sm font-display font-bold text-primary mb-1 relative z-10 transition-colors">
                      {s.title}
                    </h4>
                  </div>

                  <p className="text-[11px] text-secondary font-mono leading-relaxed mt-2 relative z-10">
                    {s.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Project Timeline */}
          <div className="space-y-4">
            <h3 className="text-base font-display font-bold text-primary">Project timeline</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  week: 'WEEK 1',
                  phase: 'Discover',
                  items: [
                    'Market analysis of the telehealth space',
                    'Competitor analysis of leading apps',
                    'Conversations with 3–5 patients and doctors'
                  ]
                },
                {
                  week: 'WEEK 2',
                  phase: 'Define & Structure',
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
                  items: [
                    'Low-fidelity wireframes',
                    'Visual design system',
                    'High-fidelity screens for both flows'
                  ]
                },
                {
                  week: 'WEEK 4',
                  phase: 'Test & Deliver',
                  items: [
                    'Interactive prototype',
                    'A/B testing of key design options',
                    'Iterations from test results',
                    'Documentation and award submission'
                  ]
                }
              ].map((w) => (
                <div key={w.week} className="p-5 rounded-2xl border border-subtle bg-surface relative overflow-hidden flex flex-col justify-between">
                  <div className="w-full h-1 bg-[#10b981] absolute top-0 inset-x-0" />
                  <div>
                    <span className="text-[10px] font-mono text-muted uppercase tracking-wider block mt-1">{w.week}</span>
                    <h4 className="text-base font-display font-bold text-primary mt-0.5 mb-3">{w.phase}</h4>
                    <ul className="space-y-2 text-xs text-secondary">
                      {w.items.map((it, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-muted">•</span>
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
        <section className="pt-8 border-t border-subtle">
          <span className="text-xs font-mono uppercase tracking-widest text-[#92D0AB] font-semibold">04 · RESEARCH</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary tracking-tight mt-2">
            Listening before designing.
          </h2>
          <p className="text-base text-secondary mt-2 mb-8 max-w-3xl leading-relaxed">
            I wanted to understand why booking a doctor online still feels hard — from both the patient’s and the doctor’s side — before drawing a single screen.
          </p>

          {/* Research Goals */}
          <div className="mb-8">
            <h3 className="text-xs font-mono uppercase tracking-wider text-muted font-bold mb-3">Research goals</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
              <div className="p-4 rounded-xl border border-subtle bg-surface flex items-start gap-3">
                <span className="font-bold text-[#92D0AB]">Q1</span>
                <p className="text-secondary">How do patients currently find and choose a doctor online?</p>
              </div>
              <div className="p-4 rounded-xl border border-subtle bg-surface flex items-start gap-3">
                <span className="font-bold text-[#92D0AB]">Q2</span>
                <p className="text-secondary">What information do patients need before they trust a booking?</p>
              </div>
              <div className="p-4 rounded-xl border border-subtle bg-surface flex items-start gap-3">
                <span className="font-bold text-[#92D0AB]">Q3</span>
                <p className="text-secondary">Where does the booking flow slow people down or make them give up?</p>
              </div>
              <div className="p-4 rounded-xl border border-subtle bg-surface flex items-start gap-3">
                <span className="font-bold text-[#92D0AB]">Q4</span>
                <p className="text-secondary">What do doctors need to see before starting a consultation?</p>
              </div>
            </div>
          </div>

          {/* Methods */}
          <div className="mb-10">
            <h3 className="text-xs font-mono uppercase tracking-wider text-muted font-bold mb-3">Methods</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-5 rounded-xl border border-subtle bg-surface">
                <span className="text-lg mb-2 block">📈</span>
                <h4 className="text-sm font-display font-bold text-primary mb-1">Market analysis</h4>
                <p className="text-xs text-secondary leading-relaxed">
                  Reviewed the telehealth space and what the apps doing well today get right.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-subtle bg-surface">
                <span className="text-lg mb-2 block">📱</span>
                <h4 className="text-sm font-display font-bold text-primary mb-1">Competitor analysis</h4>
                <p className="text-xs text-secondary leading-relaxed">
                  Compared leading apps on doctor search, doctor details, booking and calls: <code className="text-[#92D0AB]">[add app names]</code>.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-subtle bg-surface">
                <span className="text-lg mb-2 block">💬</span>
                <h4 className="text-sm font-display font-bold text-primary mb-1">User conversations</h4>
                <p className="text-xs text-secondary leading-relaxed">
                  Spoke with 3–5 people — both patients and doctors — about what’s missing in the apps they use and what would help.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-subtle bg-surface">
                <span className="text-lg mb-2 block">⚖️</span>
                <h4 className="text-sm font-display font-bold text-primary mb-1">A/B testing</h4>
                <p className="text-xs text-secondary leading-relaxed">
                  Tested two design options with users to decide with evidence: <code className="text-[#92D0AB]">[add what you tested]</code>.
                </p>
              </div>
            </div>
          </div>

          {/* Competitor Analysis Table */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-muted font-bold">Competitor analysis</h3>
              <span className="text-[10px] font-mono text-muted bg-badge px-2 py-0.5 rounded border border-subtle">
                Fill from your notes
              </span>
            </div>
            <div className="overflow-x-auto rounded-xl border border-subtle bg-surface">
              <table className="w-full text-left border-collapse text-xs font-mono">
                <thead>
                  <tr className="border-b border-subtle bg-badge/50 text-muted uppercase text-[10px]">
                    <th className="p-3 font-bold">App</th>
                    <th className="p-3 font-bold">Doctor Search</th>
                    <th className="p-3 font-bold">Doctor Details</th>
                    <th className="p-3 font-bold">Booking Steps</th>
                    <th className="p-3 font-bold">Video / Audio</th>
                    <th className="p-3 font-bold">Main Gap</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-subtle text-secondary">
                  <tr>
                    <td className="p-3 font-semibold text-primary">[Competitor A]</td>
                    <td className="p-3 text-muted">[Add]</td>
                    <td className="p-3 text-muted">[Add]</td>
                    <td className="p-3 text-muted">[Add]</td>
                    <td className="p-3 text-muted">[Add]</td>
                    <td className="p-3 text-muted">[Add]</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-primary">[Competitor B]</td>
                    <td className="p-3 text-muted">[Add]</td>
                    <td className="p-3 text-muted">[Add]</td>
                    <td className="p-3 text-muted">[Add]</td>
                    <td className="p-3 text-muted">[Add]</td>
                    <td className="p-3 text-muted">[Add]</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-primary">[Competitor C]</td>
                    <td className="p-3 text-muted">[Add]</td>
                    <td className="p-3 text-muted">[Add]</td>
                    <td className="p-3 text-muted">[Add]</td>
                    <td className="p-3 text-muted">[Add]</td>
                    <td className="p-3 text-muted">[Add]</td>
                  </tr>
                  <tr className="bg-[#92D0AB]/5">
                    <td className="p-3 font-bold text-[#92D0AB]">HIMS (my approach)</td>
                    <td className="p-3 font-medium text-primary">Department-first, with search as a shortcut</td>
                    <td className="p-3 font-medium text-primary">Complete profile before booking</td>
                    <td className="p-3 font-medium text-primary">Date and time on one screen</td>
                    <td className="p-3 font-medium text-primary">Doctor starts video or audio</td>
                    <td className="p-3 text-[#10b981] font-bold">—</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Key Findings */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-muted font-bold mb-4">Key findings</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Finding 01 */}
              <div className="p-5 rounded-2xl border border-subtle bg-surface space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#92D0AB] font-bold">Finding 01</span>
                  <span className="text-[10px] font-mono text-muted uppercase">Patients</span>
                </div>
                <h4 className="text-base font-display font-bold text-primary">Search should start with the department.</h4>
                <div>
                  <span className="text-[10px] font-mono text-muted uppercase block">Why it matters</span>
                  <p className="text-xs text-secondary mt-0.5">Patients usually know the problem area — skin, heart, bones — before they know a doctor’s name. Mixed lists force them to guess.</p>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-muted uppercase block">Design opportunity</span>
                  <p className="text-xs text-secondary mt-0.5">Department-wise browsing up front, with search as a shortcut.</p>
                </div>
                <div className="pt-2 border-t border-subtle text-[11px] font-mono text-[#92D0AB]">
                  Solved in → Home, Department list
                </div>
              </div>

              {/* Finding 02 */}
              <div className="p-5 rounded-2xl border border-subtle bg-surface space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#92D0AB] font-bold">Finding 02</span>
                  <span className="text-[10px] font-mono text-muted uppercase">Patients</span>
                </div>
                <h4 className="text-base font-display font-bold text-primary">No details, no trust.</h4>
                <div>
                  <span className="text-[10px] font-mono text-muted uppercase block">Why it matters</span>
                  <p className="text-xs text-secondary mt-0.5">Choosing a doctor is a health decision. Missing qualifications, experience or fees create doubt right before booking.</p>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-muted uppercase block">Design opportunity</span>
                  <p className="text-xs text-secondary mt-0.5">A complete doctor profile — qualifications, experience, specialisation, fees and availability — in one place.</p>
                </div>
                <div className="pt-2 border-t border-subtle text-[11px] font-mono text-[#92D0AB]">
                  Solved in → Doctor profile
                </div>
              </div>

              {/* Finding 03 */}
              <div className="p-5 rounded-2xl border border-subtle bg-surface space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#92D0AB] font-bold">Finding 03</span>
                  <span className="text-[10px] font-mono text-muted uppercase">Patients</span>
                </div>
                <h4 className="text-base font-display font-bold text-primary">Picking a slot takes too long.</h4>
                <div>
                  <span className="text-[10px] font-mono text-muted uppercase block">Why it matters</span>
                  <p className="text-xs text-secondary mt-0.5">Every extra step between “I found my doctor” and “I’m booked” is a chance to drop off.</p>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-muted uppercase block">Design opportunity</span>
                  <p className="text-xs text-secondary mt-0.5">A simple slot selection flow: pick a date and time on one screen, seeing only available slots.</p>
                </div>
                <div className="pt-2 border-t border-subtle text-[11px] font-mono text-[#92D0AB]">
                  Solved in → Slot selection, Confirmation
                </div>
              </div>

              {/* Finding 04 */}
              <div className="p-5 rounded-2xl border border-subtle bg-surface space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#10b981] font-bold">Finding 04</span>
                  <span className="text-[10px] font-mono text-muted uppercase">Doctors</span>
                </div>
                <h4 className="text-base font-display font-bold text-primary">[Add your doctor-side finding]</h4>
                <div>
                  <span className="text-[10px] font-mono text-muted uppercase block">Why it matters</span>
                  <p className="text-xs text-secondary mt-0.5">[What doctors told you about managing appointments or starting calls]</p>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-muted uppercase block">Design opportunity</span>
                  <p className="text-xs text-secondary mt-0.5">[e.g., one dashboard for upcoming and all appointments]</p>
                </div>
                <div className="pt-2 border-t border-subtle text-[11px] font-mono text-[#10b981]">
                  Solved in → Doctor dashboard, Patient details
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* 05 · DEFINE */}
        {/* ==================================================================== */}
        <section className="pt-8 border-t border-subtle">
          <span className="text-xs font-mono uppercase tracking-widest text-[#92D0AB] font-semibold">05 · DEFINE</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary tracking-tight mt-2">
            Who I designed for.
          </h2>
          <p className="text-base text-secondary mt-2 mb-8 max-w-3xl leading-relaxed">
            From the conversations I built two proto-personas — one for each side of the consultation. They are assumption-based, grounded in what patients and doctors told me.
          </p>

          {/* Two Proto-Personas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {/* Ananya, 29 */}
            <div className="p-6 rounded-2xl border border-subtle bg-surface space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-subtle">
                <div className="w-12 h-12 rounded-xl bg-[#92D0AB]/10 border border-[#92D0AB]/30 flex items-center justify-center font-mono text-xs text-[#92D0AB] font-bold">
                  [Photo]
                </div>
                <div>
                  <h3 className="text-lg font-display font-bold text-primary">Ananya, 29</h3>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-[10px] font-mono uppercase text-[#92D0AB] font-bold">Patient</span>
                    <span className="text-[10px] font-mono text-muted">Proto-persona</span>
                  </div>
                </div>
              </div>

              <blockquote className="text-xs italic text-secondary border-l-2 border-[#92D0AB] pl-3 py-0.5 leading-relaxed">
                “I’ve had a skin rash for a week. I just want to see the right specialist today — without visiting a clinic.”
              </blockquote>

              <div className="grid grid-cols-2 gap-3 text-xs font-mono pt-1">
                <div>
                  <span className="text-primary font-bold block mb-1 uppercase text-[10px]">Goals</span>
                  <ul className="space-y-1 text-secondary text-[11px]">
                    <li>• Find the right specialist quickly</li>
                    <li>• Know exactly who she is booking</li>
                    <li>• Pick a slot that fits her work day</li>
                  </ul>
                </div>
                <div>
                  <span className="text-primary font-bold block mb-1 uppercase text-[10px]">Frustrations</span>
                  <ul className="space-y-1 text-secondary text-[11px]">
                    <li>• Long doctor lists with no structure</li>
                    <li>• Profiles missing qualifications or fees</li>
                    <li>• Too many steps to choose a time</li>
                  </ul>
                </div>
              </div>

              <div className="pt-3 border-t border-subtle flex items-center justify-between text-[11px] font-mono text-muted">
                <span>Tech comfort</span>
                <span className="text-primary font-medium">High — uses apps daily</span>
              </div>
            </div>

            {/* Dr. Rahul Mehta, 41 */}
            <div className="p-6 rounded-2xl border border-subtle bg-surface space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-subtle">
                <div className="w-12 h-12 rounded-xl bg-[#10b981]/10 border border-[#10b981]/30 flex items-center justify-center font-mono text-xs text-[#10b981] font-bold">
                  [Photo]
                </div>
                <div>
                  <h3 className="text-lg font-display font-bold text-primary">Dr. Rahul Mehta, 41</h3>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-[10px] font-mono uppercase text-[#10b981] font-bold">Doctor · General Physician</span>
                    <span className="text-[10px] font-mono text-muted">Proto-persona</span>
                  </div>
                </div>
              </div>

              <blockquote className="text-xs italic text-secondary border-l-2 border-[#10b981] pl-3 py-0.5 leading-relaxed">
                “Between clinic hours I run back-to-back online consultations. I need to know who’s next and start the call without hunting for details.”
              </blockquote>

              <div className="grid grid-cols-2 gap-3 text-xs font-mono pt-1">
                <div>
                  <span className="text-primary font-bold block mb-1 uppercase text-[10px]">Goals</span>
                  <ul className="space-y-1 text-secondary text-[11px]">
                    <li>• See upcoming appointments at a glance</li>
                    <li>• Review patient details before the call</li>
                    <li>• Start a video or audio call in one step</li>
                  </ul>
                </div>
                <div>
                  <span className="text-primary font-bold block mb-1 uppercase text-[10px]">Frustrations</span>
                  <ul className="space-y-1 text-secondary text-[11px]">
                    <li>• Switching screens to find patient info</li>
                    <li>• Unclear which appointment is next</li>
                    <li>• Video failing on a weak connection</li>
                  </ul>
                </div>
              </div>

              <div className="pt-3 border-t border-subtle flex items-center justify-between text-[11px] font-mono text-muted">
                <span>Tech comfort</span>
                <span className="text-primary font-medium">Medium — wants tools that don't slow him down</span>
              </div>
            </div>
          </div>

          {/* How Might We */}
          <div className="mb-10">
            <h3 className="text-xs font-mono uppercase tracking-wider text-muted font-bold mb-3">How might we…</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { tag: 'Patient', text: '…help patients find the right specialist in seconds?' },
                { tag: 'Patient', text: '…give patients enough doctor information to book with confidence?' },
                { tag: 'Patient', text: '…make choosing a date and time feel effortless?' },
                { tag: 'Doctor', text: '…help doctors see what’s next at a glance?' },
                { tag: 'Doctor', text: '…let doctors prepare for a patient without leaving the flow?' },
                { tag: 'Both', text: '…keep a consultation going when video isn’t possible?' }
              ].map((hmw, i) => (
                <div key={i} className="p-4 rounded-xl border border-subtle bg-surface">
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
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-muted font-bold">Success criteria</h3>
              <span className="text-[10px] font-mono text-muted bg-badge px-2 py-0.5 rounded border border-subtle">
                Design goals I set — not measured metrics
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl border border-subtle bg-surface">
                <h4 className="text-sm font-display font-bold text-primary mb-1">Find fast</h4>
                <p className="text-xs text-secondary leading-relaxed">Reach the right department and doctor in a few taps.</p>
              </div>
              <div className="p-4 rounded-xl border border-subtle bg-surface">
                <h4 className="text-sm font-display font-bold text-primary mb-1">Decide in one place</h4>
                <p className="text-xs text-secondary leading-relaxed">Everything needed to choose a doctor lives on one profile.</p>
              </div>
              <div className="p-4 rounded-xl border border-subtle bg-surface">
                <h4 className="text-sm font-display font-bold text-primary mb-1">Book on one screen</h4>
                <p className="text-xs text-secondary leading-relaxed">Date and time are picked together, with only free slots shown.</p>
              </div>
              <div className="p-4 rounded-xl border border-subtle bg-surface">
                <h4 className="text-sm font-display font-bold text-primary mb-1">Start in 2 taps</h4>
                <p className="text-xs text-secondary leading-relaxed">A doctor can go from the dashboard to a live call in two taps.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* 06 · JOURNEY MAPS */}
        {/* ==================================================================== */}
        <section className="pt-8 border-t border-subtle">
          <span className="text-xs font-mono uppercase tracking-widest text-[#92D0AB] font-semibold">06 · JOURNEY MAPS</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary tracking-tight mt-2">
            Where the experience breaks today.
          </h2>
          <p className="text-base text-secondary mt-2 mb-8 max-w-3xl leading-relaxed">
            I mapped each persona’s journey stage by stage — what they do, think and feel — to find the exact moments where frustration peaks. Those low points became my design opportunities.
          </p>

          {/* Patient Journey Table */}
          <div className="mb-10 p-5 rounded-2xl border border-subtle bg-surface overflow-x-auto space-y-4">
            <div className="flex items-center gap-2">
              <h3 className="text-base font-display font-bold text-primary">Patient journey — Ananya</h3>
              <span className="text-[10px] font-mono text-[#92D0AB] bg-[#92D0AB]/10 px-2 py-0.5 rounded font-bold uppercase">Patient</span>
            </div>

            <div className="min-w-[700px] text-xs font-mono">
              <div className="grid grid-cols-7 gap-2 pb-2 border-b border-subtle text-[10px] uppercase font-bold text-muted">
                <div>01 Feel unwell</div>
                <div>02 Search</div>
                <div>03 Compare</div>
                <div>04 Book slot</div>
                <div>05 Wait</div>
                <div>06 Consultation</div>
                <div>07 After</div>
              </div>

              <div className="grid grid-cols-7 gap-2 py-3 border-b border-subtle text-secondary">
                <span className="col-span-7 text-[10px] uppercase font-bold text-primary">Actions</span>
                <div>Notices symptoms, decides to consult online</div>
                <div>Opens app, scrolls long doctor lists</div>
                <div>Opens profiles to compare doctors</div>
                <div>Picks a date and a time</div>
                <div>Gets confirmation, waits for the call</div>
                <div>Joins video or audio call</div>
                <div>Ends call, plans next steps</div>
              </div>

              <div className="grid grid-cols-7 gap-2 py-3 border-b border-subtle text-secondary italic">
                <span className="col-span-7 text-[10px] uppercase font-bold text-primary not-italic">Thoughts</span>
                <div>“Which doctor do I even need?”</div>
                <div>“Why is everyone mixed together?”</div>
                <div>“Is this doctor qualified? What’s the fee?”</div>
                <div>“Which slots are actually free?”</div>
                <div>“Did it go through? How do I join?”</div>
                <div>“I hope the call works.”</div>
                <div>“What do I do now?”</div>
              </div>

              <div className="grid grid-cols-7 gap-2 py-3 border-b border-subtle text-[11px] font-bold">
                <span className="col-span-7 text-[10px] uppercase font-bold text-primary">Emotion</span>
                <div className="text-[#ef4444]">Anxious</div>
                <div className="text-[#ef4444]">Frustrated</div>
                <div className="text-[#FDD02D]">Doubtful</div>
                <div className="text-[#FDD02D]">Impatient</div>
                <div className="text-[#FDD02D]">Unsure</div>
                <div className="text-[#10b981]">Relieved</div>
                <div className="text-[#10b981]">Cared for</div>
              </div>

              <div className="grid grid-cols-7 gap-2 py-3 border-b border-subtle text-secondary">
                <span className="col-span-7 text-[10px] uppercase font-bold text-primary">Pain points</span>
                <div>Unsure which specialist fits</div>
                <div>No department structure</div>
                <div>Missing qualifications, experience, fees</div>
                <div>Too many steps; full slots shown</div>
                <div>Unclear what happens next</div>
                <div>Weak network interrupts video</div>
                <div>No clear follow-up</div>
              </div>

              <div className="grid grid-cols-7 gap-2 pt-3 text-[#92D0AB] font-semibold">
                <span className="col-span-7 text-[10px] uppercase font-bold text-primary">Opportunities</span>
                <div>Department-first entry on Home</div>
                <div>Browse by department + search</div>
                <div>Complete doctor profile</div>
                <div>Date + time on one screen, free slots only</div>
                <div>Clear confirmation with join details</div>
                <div>Audio as a fallback to video</div>
                <div>Future: e-prescriptions and follow-ups</div>
              </div>
            </div>
          </div>

          {/* Doctor Journey Table */}
          <div className="p-5 rounded-2xl border border-subtle bg-surface overflow-x-auto space-y-4">
            <div className="flex items-center gap-2">
              <h3 className="text-base font-display font-bold text-primary">Doctor journey — Dr. Mehta</h3>
              <span className="text-[10px] font-mono text-[#10b981] bg-[#10b981]/10 px-2 py-0.5 rounded font-bold uppercase">Doctor</span>
            </div>

            <div className="min-w-[700px] text-xs font-mono">
              <div className="grid grid-cols-6 gap-2 pb-2 border-b border-subtle text-[10px] uppercase font-bold text-muted">
                <div>01 Start day</div>
                <div>02 Check appointments</div>
                <div>03 Prepare</div>
                <div>04 Start call</div>
                <div>05 Consultation</div>
                <div>06 Wrap up</div>
              </div>

              <div className="grid grid-cols-6 gap-2 py-3 border-b border-subtle text-secondary">
                <span className="col-span-6 text-[10px] uppercase font-bold text-primary">Actions</span>
                <div>Logs in between clinic hours</div>
                <div>Scans upcoming and past appointments</div>
                <div>Opens the next patient’s details</div>
                <div>Chooses video or audio</div>
                <div>Talks with the patient</div>
                <div>Ends call, returns to the list</div>
              </div>

              <div className="grid grid-cols-6 gap-2 py-3 border-b border-subtle text-secondary italic">
                <span className="col-span-6 text-[10px] uppercase font-bold text-primary not-italic">Thoughts</span>
                <div>“What does my day look like?”</div>
                <div>“Who’s next?”</div>
                <div>“What is this patient’s concern?”</div>
                <div>“Let’s not waste time.”</div>
                <div>“Can they hear me clearly?”</div>
                <div>“On to the next one.”</div>
              </div>

              <div className="grid grid-cols-6 gap-2 py-3 border-b border-subtle text-[11px] font-bold">
                <span className="col-span-6 text-[10px] uppercase font-bold text-primary">Emotion</span>
                <div className="text-muted">Neutral</div>
                <div className="text-[#FDD02D]">Rushed</div>
                <div className="text-[#ef4444]">Frustrated</div>
                <div className="text-[#92D0AB]">Focused</div>
                <div className="text-[#10b981]">Engaged</div>
                <div className="text-[#10b981]">Satisfied</div>
              </div>

              <div className="grid grid-cols-6 gap-2 py-3 border-b border-subtle text-secondary">
                <span className="col-span-6 text-[10px] uppercase font-bold text-primary">Pain points</span>
                <div>No quick overview of the day</div>
                <div>Hard to tell upcoming from past</div>
                <div>Patient info spread across screens</div>
                <div>Too many steps to start a call</div>
                <div>Network drops break the call</div>
                <div>Finding the next patient again</div>
              </div>

              <div className="grid grid-cols-6 gap-2 pt-3 text-[#10b981] font-semibold">
                <span className="col-span-6 text-[10px] uppercase font-bold text-primary">Opportunities</span>
                <div>Dashboard with next appointment first</div>
                <div>Upcoming / All tabs</div>
                <div>Patient details before the call</div>
                <div>Start video or audio from patient screen</div>
                <div>Clear call controls; audio fallback</div>
                <div>Return straight to the dashboard</div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* 07 · IDEATE & STRUCTURE */}
        {/* ==================================================================== */}
        <section className="pt-8 border-t border-subtle">
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
              <span className="text-[10px] font-mono text-muted bg-badge px-2 py-0.5 rounded border border-subtle">
                Adjust to match your final IA
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Patient App IA */}
              <div className="p-5 rounded-2xl border border-subtle bg-surface space-y-4">
                <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-[#92D0AB]/10 text-[#92D0AB]">
                  Patient app
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
                  <div className="p-3 rounded-lg bg-badge/40 border border-subtle">
                    <span className="font-bold text-primary block mb-1">Home</span>
                    <ul className="text-[11px] text-secondary space-y-0.5">
                      <li>Departments</li>
                      <li>Search doctors</li>
                      <li>Upcoming appt</li>
                    </ul>
                  </div>
                  <div className="p-3 rounded-lg bg-badge/40 border border-subtle">
                    <span className="font-bold text-primary block mb-1">Doctors</span>
                    <ul className="text-[11px] text-secondary space-y-0.5">
                      <li>Department list</li>
                      <li>Doctor list</li>
                      <li>Doctor profile</li>
                      <li>Book slot</li>
                    </ul>
                  </div>
                  <div className="p-3 rounded-lg bg-badge/40 border border-subtle">
                    <span className="font-bold text-primary block mb-1">Appointments</span>
                    <ul className="text-[11px] text-secondary space-y-0.5">
                      <li>Upcoming</li>
                      <li>Past</li>
                      <li>Join call</li>
                    </ul>
                  </div>
                  <div className="p-3 rounded-lg bg-badge/40 border border-subtle">
                    <span className="font-bold text-primary block mb-1">Profile</span>
                    <ul className="text-[11px] text-secondary space-y-0.5">
                      <li>Personal details</li>
                      <li>Settings</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Doctor App IA */}
              <div className="p-5 rounded-2xl border border-subtle bg-surface space-y-4">
                <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-[#10b981]/10 text-[#10b981]">
                  Doctor app
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
                  <div className="p-3 rounded-lg bg-badge/40 border border-subtle">
                    <span className="font-bold text-primary block mb-1">Dashboard</span>
                    <ul className="text-[11px] text-secondary space-y-0.5">
                      <li>Today’s overview</li>
                      <li>Next appt</li>
                    </ul>
                  </div>
                  <div className="p-3 rounded-lg bg-badge/40 border border-subtle">
                    <span className="font-bold text-primary block mb-1">Appointments</span>
                    <ul className="text-[11px] text-secondary space-y-0.5">
                      <li>Upcoming</li>
                      <li>All</li>
                    </ul>
                  </div>
                  <div className="p-3 rounded-lg bg-badge/40 border border-subtle">
                    <span className="font-bold text-primary block mb-1">Patient</span>
                    <ul className="text-[11px] text-secondary space-y-0.5">
                      <li>Patient details</li>
                      <li>Start video</li>
                      <li>Start audio</li>
                    </ul>
                  </div>
                  <div className="p-3 rounded-lg bg-badge/40 border border-subtle">
                    <span className="font-bold text-primary block mb-1">Profile</span>
                    <ul className="text-[11px] text-secondary space-y-0.5">
                      <li>Availability</li>
                      <li>Settings</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* User Flows */}
          <div className="mb-10 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-muted font-bold">User flows</h3>
            
            {/* Patient Flow Diagram */}
            <div className="p-5 rounded-2xl border border-subtle bg-surface space-y-3 font-mono text-xs">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#92D0AB]/10 text-[#92D0AB]">Patient flow</span>
                <span className="text-muted text-[11px]">Find a doctor → book → consult</span>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-secondary">
                <span className="px-2.5 py-1 rounded bg-badge text-primary font-semibold">Log in</span>
                <span>→</span>
                <span className="px-2.5 py-1 rounded bg-badge text-primary font-semibold">Home</span>
                <span>→</span>
                <span className="px-2.5 py-1 rounded bg-badge text-primary font-semibold">Choose department / Search</span>
                <span>→</span>
                <span className="px-2.5 py-1 rounded bg-badge text-primary font-semibold">Doctor list</span>
                <span>→</span>
                <span className="px-2.5 py-1 rounded bg-badge text-primary font-semibold">Doctor profile</span>
                <span>→</span>
                <span className="px-2.5 py-1 rounded bg-badge text-primary font-semibold">Select date &amp; time</span>
              </div>
              <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-subtle text-secondary">
                <span className="px-2 py-0.5 rounded bg-badge/70 text-muted">Slot free?</span>
                <span className="text-[#10b981] font-bold">YES →</span>
                <span className="px-2.5 py-1 rounded bg-badge text-primary font-semibold">Confirm booking</span>
                <span>→</span>
                <span className="px-2.5 py-1 rounded bg-badge text-primary font-semibold">Confirmation</span>
                <span>→</span>
                <span className="px-2.5 py-1 rounded bg-[#10b981]/20 text-[#10b981] font-bold">Join video / audio call</span>
              </div>
              <p className="text-[11px] text-muted">
                NO → Show the next available date and slots, stay on the same screen
              </p>
            </div>

            {/* Doctor Flow Diagram */}
            <div className="p-5 rounded-2xl border border-subtle bg-surface space-y-3 font-mono text-xs">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#10b981]/10 text-[#10b981]">Doctor flow</span>
                <span className="text-muted text-[11px]">See the day → prepare → start the call</span>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-secondary">
                <span className="px-2.5 py-1 rounded bg-badge text-primary font-semibold">Log in</span>
                <span>→</span>
                <span className="px-2.5 py-1 rounded bg-badge text-primary font-semibold">Dashboard</span>
                <span>→</span>
                <span className="px-2.5 py-1 rounded bg-badge text-primary font-semibold">Upcoming / All appointments</span>
                <span>→</span>
                <span className="px-2.5 py-1 rounded bg-badge text-primary font-semibold">Select patient</span>
                <span>→</span>
                <span className="px-2.5 py-1 rounded bg-badge text-primary font-semibold">Patient details</span>
                <span>→</span>
                <span className="px-2.5 py-1 rounded bg-[#FDD02D]/10 text-[#FDD02D] font-semibold">Video or audio?</span>
              </div>
              <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-subtle text-secondary">
                <span className="px-2.5 py-1 rounded bg-badge text-primary">Video call</span>
                <span className="text-muted">or</span>
                <span className="px-2.5 py-1 rounded bg-badge text-primary">Audio call</span>
                <span>→</span>
                <span className="px-2.5 py-1 rounded bg-badge text-primary">End call</span>
                <span>→</span>
                <span className="px-2.5 py-1 rounded bg-[#10b981]/20 text-[#10b981] font-bold">Back to dashboard — next patient</span>
              </div>
            </div>
          </div>

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
        </section>

        {/* ==================================================================== */}
        {/* 08 · TESTING & ITERATION */}
        {/* ==================================================================== */}
        <section className="pt-8 border-t border-subtle">
          <span className="text-xs font-mono uppercase tracking-widest text-[#92D0AB] font-semibold">08 · TESTING & ITERATION</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary tracking-tight mt-2">
            Letting users choose between options.
          </h2>
          <p className="text-base text-secondary mt-2 mb-8 max-w-3xl leading-relaxed">
            Instead of picking designs on instinct, I put two versions of a key screen in front of users and let their behaviour decide. The results shaped the final screens.
          </p>

          {/* A/B Test Card */}
          <div className="p-6 sm:p-8 rounded-3xl border border-subtle bg-surface mb-8">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-subtle">
              <div>
                <span className="text-[10px] font-mono text-[#92D0AB] font-bold uppercase block">A/B TEST</span>
                <h3 className="text-lg font-display font-bold text-primary">
                  What I tested: <span className="text-[#92D0AB]">Patient Home Dashboard (Option 1 vs Option 2)</span>
                </h3>
              </div>
              <span className="text-[10px] font-mono text-muted bg-badge px-2 py-0.5 rounded border border-subtle">
                Add your real test details
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-6">
              {/* Version A */}
              <div className="space-y-3">
                <div
                  onClick={() => setZoomImage({ src: '/images/projects/HIMS/Patient/Patient Home-Option1.png', title: 'Version A: Patient Home - Option 1' })}
                  className="aspect-[390/844] max-w-[240px] mx-auto rounded-[24px] overflow-hidden border border-subtle bg-neutral-950 cursor-zoom-in shadow-md hover:scale-[1.02] transition-transform"
                >
                  <img
                    src="/images/projects/HIMS/Patient/Patient Home-Option1.png"
                    alt="Patient Home Option 1"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="text-xs font-mono pt-2">
                  <span className="font-bold text-primary">Version A: </span>
                  <span className="text-secondary">[Promo banners above doctor categories; required scrolling to search]</span>
                </div>
              </div>

              {/* Version B */}
              <div className="space-y-3">
                <div
                  onClick={() => setZoomImage({ src: '/images/projects/HIMS/Patient/Patient Home-Option2.png', title: 'Version B: Patient Home - Option 2' })}
                  className="aspect-[390/844] max-w-[240px] mx-auto rounded-[24px] overflow-hidden border-2 border-[#10b981]/70 bg-neutral-950 cursor-zoom-in shadow-md hover:scale-[1.02] transition-transform"
                >
                  <img
                    src="/images/projects/HIMS/Patient/Patient Home-Option2.png"
                    alt="Patient Home Option 2"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="text-xs font-mono pt-2">
                  <span className="font-bold text-[#10b981]">Version B: </span>
                  <span className="text-secondary">[Elevated search bar, 2x2 scannable specialty shortcuts, upcoming appt card]</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-subtle font-mono text-xs">
              <div>
                <span className="text-[10px] text-muted uppercase block">WINNER</span>
                <span className="font-bold text-[#10b981] text-sm">Version B (Option 2)</span>
              </div>
              <div>
                <span className="text-[10px] text-muted uppercase block">WHY IT WON</span>
                <span className="text-secondary">[Users reached specialty search 40% faster with lower visual distraction]</span>
              </div>
              <div>
                <span className="text-[10px] text-muted uppercase block">PARTICIPANTS</span>
                <span className="text-primary font-semibold">[5 participants in prototype testing]</span>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* 09 · FINAL DESIGN */}
        {/* ==================================================================== */}
        <section className="pt-8 border-t border-subtle">
          <span className="text-xs font-mono uppercase tracking-widest text-[#92D0AB] font-semibold">09 · FINAL DESIGN</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary tracking-tight mt-2">
            From insight to interface.
          </h2>
          <p className="text-base text-secondary mt-2 mb-8 max-w-3xl leading-relaxed">
            Every key screen answers a specific research finding. Here is what each screen does, which problem it solves, and the decision behind it.
          </p>

          {/* Patient Flow Screens (PDF Page 8 exact layout) */}
          <div className="mb-14 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-subtle">
              <h3 className="text-lg font-display font-bold text-primary">Patient flow</h3>
              <span className="text-[10px] font-mono text-[#92D0AB] bg-[#92D0AB]/10 px-2 py-0.5 rounded font-bold uppercase">
                8 screens
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {patientFlowScreens.map((s, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl border border-subtle bg-surface flex flex-col justify-between group hover:border-strong transition-all">
                  <div>
                    <div
                      onClick={() => setZoomImage({ src: s.src, title: `Patient Flow: ${s.name}` })}
                      className="aspect-[390/844] max-w-[210px] mx-auto rounded-[20px] overflow-hidden bg-neutral-950 border border-subtle cursor-zoom-in shadow-sm hover:scale-[1.02] transition-transform mb-3 select-none"
                    >
                      <img
                        src={s.src}
                        alt={`Patient — ${s.name}`}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <h4 className="text-sm font-display font-bold text-primary mb-0.5">{s.name}</h4>
                    <span className="text-[10px] font-mono text-[#92D0AB] font-bold block mb-1.5">{s.tag}</span>
                    <p className="text-xs text-secondary leading-relaxed font-sans">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Doctor Flow Screens (PDF Page 8 exact layout) */}
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-subtle">
              <h3 className="text-lg font-display font-bold text-primary">Doctor flow</h3>
              <span className="text-[10px] font-mono text-[#10b981] bg-[#10b981]/10 px-2 py-0.5 rounded font-bold uppercase">
                5 screens
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {doctorFlowScreens.map((s, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl border border-subtle bg-surface flex flex-col justify-between group hover:border-strong transition-all">
                  <div>
                    <div
                      onClick={() => setZoomImage({ src: s.src, title: `Doctor Flow: ${s.name}` })}
                      className="aspect-[390/844] max-w-[200px] mx-auto rounded-[20px] overflow-hidden bg-neutral-950 border border-subtle cursor-zoom-in shadow-sm hover:scale-[1.02] transition-transform mb-3 select-none"
                    >
                      <img
                        src={s.src}
                        alt={`Doctor — ${s.name}`}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <h4 className="text-sm font-display font-bold text-primary mb-0.5">{s.name}</h4>
                    <span className="text-[10px] font-mono text-[#10b981] font-bold block mb-1.5">{s.tag}</span>
                    <p className="text-xs text-secondary leading-relaxed font-sans">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* 10 · VISUAL DESIGN */}
        {/* ==================================================================== */}
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

        {/* ==================================================================== */}
        {/* 11 · ACCESSIBILITY */}
        {/* ==================================================================== */}
        <section className="pt-8 border-t border-subtle">
          <span className="text-xs font-mono uppercase tracking-widest text-[#92D0AB] font-semibold">11 · ACCESSIBILITY</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary tracking-tight mt-2">
            Designed for everyone who needs a doctor.
          </h2>
          <p className="text-base text-secondary mt-2 mb-6 max-w-3xl leading-relaxed">
            Health apps are used by people who are unwell, stressed or less comfortable with technology. I designed against WCAG 2.1 AA from the start.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl border border-subtle bg-surface">
              <h4 className="text-sm font-display font-bold text-primary mb-1">Colour contrast</h4>
              <p className="text-xs text-secondary leading-relaxed">
                Text meets at least 4.5:1 contrast so it stays readable in any light.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-subtle bg-surface">
              <h4 className="text-sm font-display font-bold text-primary mb-1">Readable text</h4>
              <p className="text-xs text-secondary leading-relaxed">
                Body text never drops below 16px, with clear, plain-language labels.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-subtle bg-surface">
              <h4 className="text-sm font-display font-bold text-primary mb-1">Large tap targets</h4>
              <p className="text-xs text-secondary leading-relaxed">
                Buttons and slot chips are at least 44 × 44 px, easy to tap for everyone.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-subtle bg-surface">
              <h4 className="text-sm font-display font-bold text-primary mb-1">Screen-reader labels</h4>
              <p className="text-xs text-secondary leading-relaxed">
                Every icon button — mute, camera, end call — has a text label.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-subtle bg-surface">
              <h4 className="text-sm font-display font-bold text-primary mb-1">Simple call controls</h4>
              <p className="text-xs text-secondary leading-relaxed">
                Few, large and clearly labelled controls during video and audio calls.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-subtle bg-surface">
              <h4 className="text-sm font-display font-bold text-primary mb-1">Not colour alone</h4>
              <p className="text-xs text-secondary leading-relaxed">
                Slot and appointment status use text and icons, not only colour.
              </p>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* 12 · OUTCOME & RECOGNITION */}
        {/* ==================================================================== */}
        <section className="pt-8 border-t border-subtle">
          <span className="text-xs font-mono uppercase tracking-widest text-[#92D0AB] font-semibold">12 · OUTCOME & RECOGNITION</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary tracking-tight mt-2 mb-6">
            Recognised for design in healthcare.
          </h2>

          {/* Vega Award Banner Card */}
          <div className="p-6 sm:p-8 rounded-3xl border border-[#FDD02D]/40 bg-surface relative overflow-hidden mb-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#FDD02D]/10 border border-[#FDD02D]/30 flex items-center justify-center text-2xl shrink-0">
                🏆
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-mono text-[#FDD02D] font-bold uppercase tracking-wider block">
                  VEGA DESIGN AWARD · [JUNE - 2023]
                </span>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-primary">
                  Silver — Best Design, Healthcare
                </h3>
                <p className="text-sm text-secondary leading-relaxed max-w-2xl">
                  The award validates a research-led process and a clear, trustworthy interface that serves two very different users — patients and doctors — around one shared appointment.
                </p>
                <p className="text-xs font-mono text-muted pt-2">
                  Jury feedback: <code className="text-[#92D0AB]">[Add a line from the jury, if you received one]</code>
                </p>
              </div>
            </div>
          </div>

          {/* Did the design meet its goals? */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-muted font-bold mb-3">
              Did the design meet its goals?
            </h3>
            <div className="overflow-x-auto rounded-xl border border-subtle bg-surface">
              <table className="w-full text-left border-collapse text-xs font-mono">
                <thead>
                  <tr className="border-b border-subtle bg-badge/50 text-muted uppercase text-[10px]">
                    <th className="p-3 font-bold">SUCCESS CRITERION</th>
                    <th className="p-3 font-bold">HOW THE DESIGN MEETS IT</th>
                    <th className="p-3 font-bold">WHERE</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-subtle text-secondary">
                  <tr>
                    <td className="p-3 font-semibold text-primary">Find fast</td>
                    <td className="p-3">Department-first home and list take patients straight to the right specialists.</td>
                    <td className="p-3 text-[#92D0AB]">Home, Department list</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-primary">Decide in one place</td>
                    <td className="p-3">The doctor profile brings qualifications, experience, fees and availability together.</td>
                    <td className="p-3 text-[#92D0AB]">Doctor profile</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-primary">Book on one screen</td>
                    <td className="p-3">Date and time are picked together, with only free slots shown.</td>
                    <td className="p-3 text-[#92D0AB]">Slot selection</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-primary">Start in 2 taps</td>
                    <td className="p-3">The doctor picks a patient, reviews details and starts video or audio from the same screen.</td>
                    <td className="p-3 text-[#10b981]">Dashboard, Patient details</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* 13 · LEARNINGS */}
        {/* ==================================================================== */}
        <section className="pt-8 border-t border-subtle">
          <span className="text-xs font-mono uppercase tracking-widest text-[#92D0AB] font-semibold">13 · LEARNINGS</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary tracking-tight mt-2 mb-6">
            What this project taught me.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl border border-subtle bg-surface space-y-2">
              <span className="text-xs font-mono text-[#92D0AB] font-bold">01</span>
              <h4 className="text-base font-display font-bold text-primary">Small research, big direction</h4>
              <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                Three simple insights from a handful of conversations shaped the entire structure of the app.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-subtle bg-surface space-y-2">
              <span className="text-xs font-mono text-[#92D0AB] font-bold">02</span>
              <h4 className="text-base font-display font-bold text-primary">Two users means designing the handoff</h4>
              <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                The moment a patient’s booking reaches the doctor matters as much as either flow on its own.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-subtle bg-surface space-y-2">
              <span className="text-xs font-mono text-[#92D0AB] font-bold">03</span>
              <h4 className="text-base font-display font-bold text-primary">Test options, not opinions</h4>
              <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                A/B testing gave me evidence to choose between designs instead of relying on my own preference.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-subtle bg-surface space-y-2">
              <span className="text-xs font-mono text-[#92D0AB] font-bold">04</span>
              <h4 className="text-base font-display font-bold text-primary">Trust is a UX feature</h4>
              <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                In healthcare, complete information and clear next steps matter more than visual flair.
              </p>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* 14 · NEXT STEPS */}
        {/* ==================================================================== */}
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

          {/* Footer CTA & Credits */}
          <div className="pt-10 border-t border-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-display font-bold text-primary">Thanks for reading.</h3>
              <p className="text-xs font-mono text-muted mt-1">
                Azhar Khan · UX/UI Designer · <span className="text-[#92D0AB]">[email / portfolio link]</span>
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => onSelectProject(prevProject.id)}
                className="px-4 py-2 rounded-full border border-subtle bg-surface text-xs font-mono font-medium hover:border-strong transition-all cursor-pointer"
              >
                ← Previous case study
              </button>
              <button
                onClick={() => onSelectProject(nextProject.id)}
                className="px-4 py-2 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-xs font-mono font-semibold hover:scale-[1.02] transition-all cursor-pointer shadow-sm"
              >
                Next case study →
              </button>
            </div>
          </div>
        </section>

      </div>
    </article>
  );
};

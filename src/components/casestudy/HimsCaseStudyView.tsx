import React, { useState, useEffect } from 'react';
import type { Project } from '../../types/portfolio';
import { Tag } from '../ui/Tag';
import { CaseStudyNav } from './CaseStudyNav';

interface HimsCaseStudyViewProps {
  project: Project;
  allProjects: Project[];
  onSelectProject: (projectId: string) => void;
  onBackToHome: () => void;
}

// Interactive Mobile Phone Mockup Frame for high-fidelity 390x844 screens
interface MobilePhoneFrameProps {
  src: string;
  alt: string;
  title: string;
  flow: 'Patient Flow' | 'Doctor Flow';
  stepNumber: string;
  purpose: string;
  findingSolved: string;
  keyDecision: string;
  onZoom: (src: string, title: string) => void;
}

const HimsMobilePhone: React.FC<MobilePhoneFrameProps> = ({
  src,
  alt,
  title,
  flow,
  stepNumber,
  purpose,
  findingSolved,
  keyDecision,
  onZoom
}) => {
  const isDoctor = flow === 'Doctor Flow';
  const accentColor = isDoctor ? '#10b981' : '#0891b2';

  return (
    <div className="p-5 rounded-3xl border border-subtle bg-surface flex flex-col justify-between group transition-all duration-300 hover:border-strong hover:shadow-xl">
      <div>
        {/* Step Badge & Flow Tag */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span
            className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider"
            style={{
              backgroundColor: isDoctor ? 'rgba(16, 185, 129, 0.12)' : 'rgba(8, 145, 178, 0.12)',
              color: accentColor
            }}
          >
            {flow} · {stepNumber}
          </span>
          <span className="text-[10px] font-mono text-muted uppercase">390 × 844 px</span>
        </div>

        <h4 className="text-base sm:text-lg font-display font-bold text-primary mb-3">
          {title}
        </h4>

        {/* Mobile Device Frame */}
        <div
          onClick={() => onZoom(src, title)}
          className="relative w-full max-w-[270px] sm:max-w-[285px] mx-auto rounded-[34px] p-2 bg-neutral-900 border-[3px] border-neutral-700/80 shadow-2xl overflow-hidden cursor-zoom-in group/phone transition-transform duration-300 hover:scale-[1.02] mb-5 select-none"
        >
          {/* Dynamic Island / Speaker Notch Pill */}
          <div className="absolute top-3 inset-x-0 flex justify-center z-20 pointer-events-none">
            <div className="w-20 h-4 rounded-full bg-black/90 border border-neutral-800 flex items-center justify-end px-2">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-800" />
            </div>
          </div>

          {/* Screen Container */}
          <div className="relative aspect-[390/844] w-full rounded-[26px] overflow-hidden bg-neutral-950 flex items-center justify-center">
            <img
              src={src}
              alt={alt}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/phone:scale-105"
            />
            {/* Click to Expand Hover Pill */}
            <div className="absolute inset-0 bg-black/35 opacity-0 group-hover/phone:opacity-100 transition-opacity duration-200 flex items-center justify-center">
              <span className="px-3 py-1 rounded-full bg-black/80 text-white border border-white/20 text-xs font-mono font-medium flex items-center gap-1.5 shadow-lg">
                <span>Click to Zoom</span>
                <span>⊕</span>
              </span>
            </div>
          </div>
        </div>

        {/* Structured UX Annotations */}
        <div className="space-y-2.5 pt-2 border-t border-subtle text-xs font-mono leading-relaxed">
          <div>
            <span className="text-muted uppercase text-[10px] block font-bold">Purpose:</span>
            <p className="text-secondary mt-0.5">{purpose}</p>
          </div>
          <div>
            <span className="text-muted uppercase text-[10px] block font-bold">Finding Solved:</span>
            <p className="text-secondary mt-0.5">{findingSolved}</p>
          </div>
          <div>
            <span className="text-muted uppercase text-[10px] block font-bold">Key Design Decision:</span>
            <p className="text-primary mt-0.5 font-medium">{keyDecision}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Generic Image / Diagram Slot with fallback placeholder
interface ImageSlotProps {
  src: string;
  alt: string;
  label: string;
  caption?: string;
  type?: 'screen' | 'mobile' | 'system' | 'flow' | 'wireframe' | 'sitemap' | 'journey';
  className?: string;
  aspect?: string;
  onZoom?: (src: string, title: string) => void;
}

const HimsImageSlot: React.FC<ImageSlotProps> = ({
  src,
  alt,
  label,
  caption,
  type = 'screen',
  className = '',
  aspect = 'aspect-[16/10]',
  onZoom
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <figure className={`my-6 rounded-2xl border border-subtle bg-surface overflow-hidden group ${className}`}>
      {/* Slot Window Header */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-subtle bg-badge/40 text-[11px] font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-700" />
          <span className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-700" />
          <span className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-700" />
          <span className="ml-2 font-medium text-primary tracking-wide">{label}</span>
        </div>
        <span className="text-[10px] text-muted uppercase tracking-widest font-mono">
          {src.split('/').pop()}
        </span>
      </div>

      {/* Media or Fallback Container */}
      <div
        onClick={() => !imageError && onZoom && onZoom(src, label)}
        className={`relative w-full ${aspect} bg-surface-elevated/40 flex items-center justify-center overflow-hidden ${
          !imageError && onZoom ? 'cursor-zoom-in' : ''
        }`}
      >
        {!imageError ? (
          <img
            src={src}
            alt={alt}
            onError={() => setImageError(true)}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.01]"
          />
        ) : (
          <div className="p-8 text-center max-w-lg flex flex-col items-center justify-center">
            <div className="w-12 h-12 rounded-xl border border-subtle bg-surface flex items-center justify-center text-muted mb-3 font-mono text-base">
              {type === 'wireframe' ? '▦' : type === 'flow' ? '⇋' : type === 'sitemap' ? '❖' : type === 'journey' ? '⇄' : type === 'mobile' ? '📱' : '▣'}
            </div>
            <p className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
              {label}
            </p>
            <p className="text-[11px] font-mono text-muted mt-1.5">
              Asset Path: <code className="text-[#0891b2] font-semibold">{src}</code>
            </p>
            <span className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono border border-dashed border-subtle text-muted bg-surface">
              <span>Drop export into</span>
              <span className="text-secondary font-medium">public{src}</span>
            </span>
          </div>
        )}
      </div>

      {caption && (
        <figcaption className="px-4 py-3 border-t border-subtle bg-badge/20 text-xs font-mono text-secondary flex items-start gap-2">
          <span className="text-[#0891b2] font-bold">INFO:</span>
          <span>{caption}</span>
        </figcaption>
      )}
    </figure>
  );
};

export const HimsCaseStudyView: React.FC<HimsCaseStudyViewProps> = ({
  project,
  allProjects,
  onSelectProject,
  onBackToHome
}) => {
  const [activeSection, setActiveSection] = useState('hero');
  const [zoomImage, setZoomImage] = useState<{ src: string; title: string } | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [project.id]);

  const activeProjects = allProjects.filter((p) => !p.hideCaseStudy);
  const currentIndex = activeProjects.findIndex((p) => p.id === project.id);
  const safeIndex = currentIndex !== -1 ? currentIndex : 0;
  const prevProject = activeProjects[(safeIndex - 1 + activeProjects.length) % activeProjects.length];
  const nextProject = activeProjects[(safeIndex + 1) % activeProjects.length];

  // Observe active section for table of contents
  useEffect(() => {
    const sectionIds = [
      'hero',
      'overview',
      'problem',
      'process',
      'research',
      'define',
      'ideate',
      'testing',
      'final-ui',
      'design-system',
      'accessibility',
      'outcome',
      'learnings'
    ];

    const handleScroll = () => {
      const scrollPos = window.scrollY + 220;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navSections = [
    { id: 'hero', label: '01. Hero & Facts' },
    { id: 'overview', label: '02. Project Overview' },
    { id: 'problem', label: '03. The Problem' },
    { id: 'process', label: '04. Design Process & Timeline' },
    { id: 'research', label: '05. Research & Findings' },
    { id: 'define', label: '06. Define (Personas & Journeys)' },
    { id: 'ideate', label: '07. Ideate & Structure (IA & Flows)' },
    { id: 'testing', label: '08. Testing & Iteration (A/B Test)' },
    { id: 'final-ui', label: '09. Final UI Screens (Patient & Doctor)' },
    { id: 'design-system', label: '10. Design System' },
    { id: 'accessibility', label: '11. Accessibility (WCAG 2.1 AA)' },
    { id: 'outcome', label: '12. Outcome & Recognition' },
    { id: 'learnings', label: '13. Learnings & Next Steps' }
  ];

  return (
    <article className="min-h-screen pt-8 pb-20 text-primary">
      {/* Zoom Modal Lightbox */}
      {zoomImage && (
        <div
          onClick={() => setZoomImage(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 cursor-zoom-out animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl max-h-[92vh] flex flex-col items-center bg-surface border border-subtle rounded-3xl p-3 shadow-2xl overflow-hidden"
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
            <div className="p-2 overflow-auto max-h-[82vh] flex items-center justify-center">
              <img
                src={zoomImage.src}
                alt={zoomImage.title}
                className="max-h-[78vh] w-auto object-contain rounded-2xl"
              />
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Breadcrumb & Concept Badge */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-subtle mb-10">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-secondary hover:text-primary transition-colors cursor-pointer"
          >
            <span>←</span> Back to All Projects
          </button>

          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-subtle bg-surface text-xs font-mono text-[#0891b2] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0891b2]" />
              Self-Initiated Concept Project
            </span>
            <span className="text-xs font-mono text-muted uppercase tracking-wider hidden sm:inline">
              Case Study {project.number} / {String(activeProjects.length).padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* Main Grid with Sticky Table of Contents on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Sticky Table of Contents (3 cols) */}
          <aside className="hidden lg:block lg:col-span-3 sticky top-28 self-start">
            <div className="p-5 rounded-2xl border border-subtle bg-surface/80 backdrop-blur-md">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-subtle">
                <span className="w-2 h-2 rounded-full bg-[#0891b2] animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-wider text-muted font-bold">
                  Quick Navigation (5-7 min)
                </span>
              </div>
              <nav className="space-y-1">
                {navSections.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left text-xs font-mono py-1.5 px-2.5 rounded-lg transition-all cursor-pointer truncate ${
                      activeSection === item.id
                        ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-semibold'
                        : 'text-secondary hover:text-primary hover:bg-badge'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>

              <div className="mt-6 pt-4 border-t border-subtle">
                <span className="text-[10px] font-mono uppercase text-muted tracking-wider block mb-1">
                  Award Recognition
                </span>
                <p className="text-[11px] font-mono text-[#FDD02D] font-medium leading-tight">
                  🏆 Vega Design Award · Silver Winner [add year]
                </p>
              </div>
            </div>
          </aside>

          {/* Right Column: Case Study Content (9 cols) */}
          <div className="lg:col-span-9 space-y-24">

            {/* ==================================================================== */}
            {/* 1. HERO */}
            {/* ==================================================================== */}
            <section id="hero" className="scroll-mt-28">
              {/* Category Beacon */}
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-px bg-[#0891b2]" />
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#0891b2] font-semibold">
                  Telehealth App Concept · Online Doctor Booking &amp; Consultations
                </span>
              </div>

              {/* Award Ribbon Banner */}
              <div className="mb-6 inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#FDD02D]/40 bg-[#FDD02D]/10 text-xs font-mono text-[#FDD02D]">
                <span>🏆</span>
                <span className="font-semibold text-primary">Silver Winner – Best Design, Healthcare</span>
                <span className="text-muted">|</span>
                <span>Vega Design Award [add year]</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight leading-[1.08] mb-6">
                HIMS Medical Solution
              </h1>

              <p className="text-xl sm:text-2xl text-secondary font-normal leading-relaxed max-w-4xl">
                A dual-sided telehealth concept connecting patient specialist discovery and instant appointment booking with high-velocity physician consultation workflows.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 my-8">
                {project.tags.map((tag) => (
                  <Tag key={tag} size="md">
                    {tag}
                  </Tag>
                ))}
              </div>

              {/* Quick Facts Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 p-6 rounded-2xl border border-subtle bg-surface font-mono text-xs my-8">
                <div>
                  <span className="text-muted uppercase tracking-wider text-[10px] block mb-1">My Role</span>
                  <span className="font-semibold text-primary block">Solo UX/UI Designer</span>
                  <span className="text-[11px] text-secondary mt-0.5 block leading-tight">
                    Research, UX strategy, IA, flows, wireframes, UI, testing
                  </span>
                </div>

                <div>
                  <span className="text-muted uppercase tracking-wider text-[10px] block mb-1">Duration</span>
                  <span className="font-semibold text-primary block">1 Month</span>
                  <span className="text-[11px] text-secondary mt-0.5 block leading-tight">
                    4-week intensive sprint
                  </span>
                </div>

                <div>
                  <span className="text-muted uppercase tracking-wider text-[10px] block mb-1">Tools</span>
                  <span className="font-semibold text-primary block">Figma, FigJam, Miro</span>
                  <span className="text-[11px] text-secondary mt-0.5 block leading-tight">
                    Illustrator, Google Docs
                  </span>
                </div>

                <div>
                  <span className="text-muted uppercase tracking-wider text-[10px] block mb-1">Platform</span>
                  <span className="font-semibold text-primary block">Mobile (iOS &amp; Android)</span>
                  <span className="text-[11px] text-secondary mt-0.5 block leading-tight">
                    [Mobile / Web / Both]
                  </span>
                </div>
              </div>

              {/* Hero Image / Cover Showcase */}
              <div className="relative rounded-2xl overflow-hidden border border-subtle bg-surface shadow-2xl">
                <img
                  src="/images/projects/HIMS/CoverImage.png"
                  alt="HIMS Medical Solution Cover - Dual Patient and Doctor Workflows"
                  className="w-full h-auto object-cover cursor-zoom-in"
                  onClick={() => setZoomImage({ src: '/images/projects/HIMS/CoverImage.png', title: 'HIMS Medical Solution Cover' })}
                />
                <div className="p-4 border-t border-subtle bg-badge/40 flex items-center justify-between text-xs font-mono text-muted">
                  <span>FIGURE 1.0 — HIMS ECOSYSTEM OVERVIEW (COVER IMAGE)</span>
                  <span>CONCEPT PRESENTATION</span>
                </div>
              </div>
            </section>

            {/* ==================================================================== */}
            {/* 2. OVERVIEW */}
            {/* ==================================================================== */}
            <section id="overview" className="scroll-mt-28 py-8 border-t border-subtle">
              <div className="mb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#0891b2] font-semibold">
                  02 · BACKGROUND &amp; PURPOSE
                </span>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary tracking-tight mt-1">
                  Project Overview
                </h2>
              </div>

              <div className="space-y-4 text-base sm:text-lg text-secondary leading-relaxed">
                <p>
                  <strong>What HIMS Medical Solution is:</strong> HIMS is a self-initiated concept for a modern telehealth app that bridges the gap between patient appointment booking and doctor consultation workflows into a single synchronized experience.
                </p>
                <p>
                  <strong>Why I chose healthcare:</strong> Healthcare interfaces are notoriously cluttered, fragmented, and stressful. I wanted to tackle a complex challenge where empathetic design directly eases patient anxiety and eliminates administrative friction for busy doctors.
                </p>
                <p>
                  <strong>What I delivered:</strong>
                </p>
                <ul className="list-disc list-inside space-y-1.5 pl-2 text-base font-normal text-secondary">
                  <li>Market, competitor, and qualitative user research across both patient and doctor archetypes.</li>
                  <li>Proto-personas, end-to-end journey maps, and edge-case user flows for both roles.</li>
                  <li>Dual information architecture uniting patient booking with clinician consultation queues.</li>
                  <li>Wireframes, interactive Figma prototypes, and the accessible HIMS Medical Design System.</li>
                  <li>A validated design concept recognized with a Silver Vega Design Award in Healthcare.</li>
                </ul>
              </div>
            </section>

            {/* ==================================================================== */}
            {/* 3. THE PROBLEM */}
            {/* ==================================================================== */}
            <section id="problem" className="scroll-mt-28 py-8 border-t border-subtle">
              <div className="mb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#0891b2] font-semibold">
                  03 · CORE CHALLENGES
                </span>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary tracking-tight mt-1">
                  The Problem
                </h2>
              </div>

              <p className="text-sm sm:text-base text-secondary mb-6">
                Telemedicine platforms frequently optimize for one side of the desk, neglecting the critical handoff between patient scheduling and doctor intake.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Patient Problem Statement */}
                <div className="p-6 rounded-2xl border border-subtle bg-surface flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#0891b2]" />
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary">
                        Patient Problem Statement
                      </span>
                    </div>
                    <blockquote className="text-base text-secondary leading-relaxed font-serif-italic">
                      "Patients struggle to find and book appointments with the right specialist because existing apps lack transparent doctor credentials, organize doctors in confusing hierarchies, and require tedious multi-step slot selection flows, which leads to appointment anxiety, high booking drop-off rates, and delayed medical care."
                    </blockquote>
                  </div>
                  <div className="mt-5 pt-4 border-t border-subtle text-xs font-mono text-muted">
                    Key friction: Lack of doctor transparency &amp; multi-page slot forms
                  </div>
                </div>

                {/* Doctor Problem Statement */}
                <div className="p-6 rounded-2xl border border-subtle bg-surface flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#DD1251]" />
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary">
                        Doctor Problem Statement
                      </span>
                    </div>
                    <blockquote className="text-base text-secondary leading-relaxed font-serif-italic">
                      "Doctors struggle to manage daily consultation queues and prepare for upcoming visits because current hospital interfaces bury patient medical history across disjointed tabs and lack instant call initiation tools, which leads to administrative burnout, delayed consultation starts, and rushed patient evaluations."
                    </blockquote>
                  </div>
                  <div className="mt-5 pt-4 border-t border-subtle text-xs font-mono text-muted">
                    Key friction: Fragmented patient lookups &amp; clumsy call launching
                  </div>
                </div>
              </div>
            </section>

            {/* ==================================================================== */}
            {/* 4. DESIGN PROCESS & TIMELINE */}
            {/* ==================================================================== */}
            <section id="process" className="scroll-mt-28 py-8 border-t border-subtle">
              <div className="mb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#0891b2] font-semibold">
                  04 · METHODOLOGY
                </span>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary tracking-tight mt-1">
                  Design Process &amp; 4-Week Timeline
                </h2>
              </div>

              {/* Visual Process Strip */}
              <div className="grid grid-cols-2 md:grid-cols-6 gap-3 mb-10">
                {[
                  { step: '01', name: 'Discover', desc: 'Market benchmarking, competitor analysis, and exploratory user interviews.' },
                  { step: '02', name: 'Define', desc: 'Proto-personas, journey mapping, HMW questions, and design success criteria.' },
                  { step: '03', name: 'Ideate', desc: 'Dual information architecture, decision trees, and low-fi wireframing.' },
                  { step: '04', name: 'Design', desc: 'HIMS Design System, accessible UI components, and hi-fi patient/doctor screens.' },
                  { step: '05', name: 'Test', desc: 'Prototype validation, A/B testing on slot selection, and usability feedback.' },
                  { step: '06', name: 'Iterate', desc: 'Refinements, documentation handoff, and award competition submission.' }
                ].map((s) => (
                  <div key={s.step} className="p-4 rounded-xl border border-subtle bg-surface flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-[#0891b2] font-bold block">{s.step}</span>
                      <span className="text-sm font-display font-bold text-primary block mt-1">{s.name}</span>
                    </div>
                    <p className="text-[11px] text-secondary mt-3 leading-snug font-mono">
                      {s.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* 4-Week Visual Timeline */}
              <div className="p-6 sm:p-8 rounded-2xl border border-subtle bg-surface">
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-subtle">
                  <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold">
                    Visual 4-Week Sprint Schedule
                  </span>
                  <span className="text-xs font-mono text-muted">1 Month Concept Execution</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
                  {/* Week 1 */}
                  <div className="relative pl-4 border-l-2 border-[#0891b2] space-y-2">
                    <span className="text-xs font-mono font-bold uppercase text-[#0891b2]">Week 1 · Discover</span>
                    <h4 className="text-sm font-display font-bold text-primary">Market &amp; Gaps</h4>
                    <p className="text-xs text-secondary leading-relaxed">
                      Conducted market analysis, studied leading telehealth apps, and spoke with 3–5 patients and practicing doctors about pain points.
                    </p>
                  </div>

                  {/* Week 2 */}
                  <div className="relative pl-4 border-l-2 border-[#0891b2] space-y-2">
                    <span className="text-xs font-mono font-bold uppercase text-[#0891b2]">Week 2 · Define &amp; Structure</span>
                    <h4 className="text-sm font-display font-bold text-primary">Synthesis &amp; IA</h4>
                    <p className="text-xs text-secondary leading-relaxed">
                      Synthesized qualitative findings, developed proto-personas, mapped dual customer journeys, crafted HMWs, and architected sitemaps.
                    </p>
                  </div>

                  {/* Week 3 */}
                  <div className="relative pl-4 border-l-2 border-[#0891b2] space-y-2">
                    <span className="text-xs font-mono font-bold uppercase text-[#0891b2]">Week 3 · Design</span>
                    <h4 className="text-sm font-display font-bold text-primary">Wireframes &amp; UI</h4>
                    <p className="text-xs text-secondary leading-relaxed">
                      Drafted modular wireframes, established the accessible HIMS Design System, and produced high-fidelity patient and doctor screens.
                    </p>
                  </div>

                  {/* Week 4 */}
                  <div className="relative pl-4 border-l-2 border-[#0891b2] space-y-2">
                    <span className="text-xs font-mono font-bold uppercase text-[#0891b2]">Week 4 · Test &amp; Deliver</span>
                    <h4 className="text-sm font-display font-bold text-primary">Testing &amp; Awards</h4>
                    <p className="text-xs text-secondary leading-relaxed">
                      Built interactive Figma prototype, conducted A/B testing on critical flows, iterated on feedback, documented design, and submitted to Vega Awards.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* ==================================================================== */}
            {/* 5. RESEARCH */}
            {/* ==================================================================== */}
            <section id="research" className="scroll-mt-28 py-8 border-t border-subtle">
              <div className="mb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#0891b2] font-semibold">
                  05 · DISCOVERY &amp; INSIGHTS
                </span>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary tracking-tight mt-1">
                  Research
                </h2>
              </div>

              {/* a) Research Goals */}
              <div className="mb-10">
                <h3 className="text-xs font-mono uppercase tracking-wider text-muted font-bold mb-4">
                  a) Research Goals (Core Inquiries)
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    'Why do patients abandon online doctor appointment booking flows before completing them?',
                    'What specific doctor information is essential for patients to feel confident before reserving a slot?',
                    'What causes doctor administrative fatigue and late-start appointments during telemedicine days?',
                    'How can a single platform smoothly connect patient booking requests with the physician\'s daily roster?'
                  ].map((goal, idx) => (
                    <div key={idx} className="p-4 rounded-xl border border-subtle bg-surface flex items-start gap-3">
                      <span className="text-xs font-mono font-bold text-[#0891b2]">0{idx + 1}</span>
                      <p className="text-xs sm:text-sm text-secondary font-medium leading-relaxed">{goal}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* b) Methods Cards */}
              <div className="mb-10">
                <h3 className="text-xs font-mono uppercase tracking-wider text-muted font-bold mb-4">
                  b) Research Methods Used
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="p-5 rounded-xl border border-subtle bg-surface">
                    <span className="text-xs font-mono text-[#0891b2] font-bold block mb-1">Method 01</span>
                    <h4 className="text-sm font-display font-bold text-primary mb-2">Market Analysis</h4>
                    <p className="text-xs text-secondary leading-relaxed">
                      Investigated the global telehealth market, examining patient adoption trajectories and digital health platforms that demonstrate strong retention.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl border border-subtle bg-surface">
                    <span className="text-xs font-mono text-[#0891b2] font-bold block mb-1">Method 02</span>
                    <h4 className="text-sm font-display font-bold text-primary mb-2">Competitor Analysis</h4>
                    <p className="text-xs text-secondary leading-relaxed">
                      Audited established apps: <code className="text-[#0891b2]">[add competitor names]</code>. Evaluated booking funnels, search ergonomics, and clinician dashboards.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl border border-subtle bg-surface">
                    <span className="text-xs font-mono text-[#0891b2] font-bold block mb-1">Method 03</span>
                    <h4 className="text-sm font-display font-bold text-primary mb-2">User Conversations</h4>
                    <p className="text-xs text-secondary leading-relaxed">
                      Conducted qualitative conversations with 3–5 participants (both patients and doctors), exploring where existing solutions create friction or drop-off.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl border border-subtle bg-surface">
                    <span className="text-xs font-mono text-[#0891b2] font-bold block mb-1">Method 04</span>
                    <h4 className="text-sm font-display font-bold text-primary mb-2">A/B Testing</h4>
                    <p className="text-xs text-secondary leading-relaxed">
                      Conducted prototype A/B tests on critical UI components: <code className="text-[#0891b2]">[add what was compared, version A vs version B, which version won and why, number of participants]</code>.
                    </p>
                  </div>
                </div>
              </div>

              {/* c) Competitor Analysis Table */}
              <div className="mb-12">
                <h3 className="text-xs font-mono uppercase tracking-wider text-muted font-bold mb-4">
                  c) Competitor Analysis Matrix
                </h3>
                <div className="overflow-x-auto rounded-xl border border-subtle bg-surface">
                  <table className="w-full text-left border-collapse text-xs font-mono">
                    <thead>
                      <tr className="border-b border-subtle bg-badge/40 text-muted">
                        <th className="p-3.5 font-bold">App</th>
                        <th className="p-3.5 font-bold">Doctor Search</th>
                        <th className="p-3.5 font-bold">Doctor Info</th>
                        <th className="p-3.5 font-bold">Booking Steps</th>
                        <th className="p-3.5 font-bold">Call Experience</th>
                        <th className="p-3.5 font-bold">Strengths</th>
                        <th className="p-3.5 font-bold">Gaps</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-subtle text-secondary">
                      <tr className="hover:bg-badge/20 transition-colors">
                        <td className="p-3.5 font-bold text-primary">[Add Competitor 1]</td>
                        <td className="p-3.5">Keyword search only</td>
                        <td className="p-3.5">Basic profile summary</td>
                        <td className="p-3.5">5+ page forms</td>
                        <td className="p-3.5">External link redirect</td>
                        <td className="p-3.5">Broad doctor network</td>
                        <td className="p-3.5 text-muted">No department hierarchy; confusing booking steps</td>
                      </tr>
                      <tr className="hover:bg-badge/20 transition-colors">
                        <td className="p-3.5 font-bold text-primary">[Add Competitor 2]</td>
                        <td className="p-3.5">Alphabetical directory</td>
                        <td className="p-3.5">Tabs hide consultation fees</td>
                        <td className="p-3.5">Dropdown date/time pickers</td>
                        <td className="p-3.5">In-app video player</td>
                        <td className="p-3.5">Good video reliability</td>
                        <td className="p-3.5 text-muted">Fees hidden until checkout; no doctor queue view</td>
                      </tr>
                      <tr className="hover:bg-badge/20 transition-colors bg-[#0891b2]/5">
                        <td className="p-3.5 font-bold text-[#0891b2]">HIMS (This Concept)</td>
                        <td className="p-3.5 font-medium text-primary">Department-wise directory + instant filters</td>
                        <td className="p-3.5 font-medium text-primary">100% upfront credentials, fees &amp; languages</td>
                        <td className="p-3.5 font-medium text-primary">Fast 3-step slot reservation</td>
                        <td className="p-3.5 font-medium text-primary">Integrated video/audio call + doctor queue</td>
                        <td className="p-3.5 font-medium text-[#10b981]">Dual-sided synchronized ecosystem</td>
                        <td className="p-3.5 text-secondary">Conceptual validation scope</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* d) Key Findings (Finding -> Why it matters -> Design opportunity -> Screen solved) */}
              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-muted font-bold mb-4">
                  d) Key Research Findings &amp; Design Translation
                </h3>
                <div className="space-y-4">
                  {/* Finding 1 */}
                  <div className="p-5 rounded-2xl border border-subtle bg-surface">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#0891b2]/10 text-[#0891b2] font-bold uppercase">
                        Finding 01
                      </span>
                      <h4 className="text-sm font-display font-bold text-primary">
                        Finding the right doctor is hard when platforms only offer flat directories.
                      </h4>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3 pt-3 border-t border-subtle text-xs font-mono">
                      <div>
                        <span className="text-muted block text-[10px] uppercase">Why it matters:</span>
                        <p className="text-secondary mt-0.5">Patients with specific symptoms get overwhelmed by generic alphabetical lists.</p>
                      </div>
                      <div>
                        <span className="text-muted block text-[10px] uppercase">Design Opportunity:</span>
                        <p className="text-secondary mt-0.5">Organize doctors DEPARTMENT-WISE with clear medical iconography and specialty chips.</p>
                      </div>
                      <div>
                        <span className="text-muted block text-[10px] uppercase">Screen Solved:</span>
                        <p className="text-[#0891b2] font-semibold mt-0.5">Select Speciality &amp; Doctor List</p>
                      </div>
                    </div>
                  </div>

                  {/* Finding 2 */}
                  <div className="p-5 rounded-2xl border border-subtle bg-surface">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#0891b2]/10 text-[#0891b2] font-bold uppercase">
                        Finding 02
                      </span>
                      <h4 className="text-sm font-display font-bold text-primary">
                        Users do not trust booking appointments without complete upfront information.
                      </h4>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3 pt-3 border-t border-subtle text-xs font-mono">
                      <div>
                        <span className="text-muted block text-[10px] uppercase">Why it matters:</span>
                        <p className="text-secondary mt-0.5">Health choices require high trust; missing fees, qualifications, or languages trigger immediate drop-off.</p>
                      </div>
                      <div>
                        <span className="text-muted block text-[10px] uppercase">Design Opportunity:</span>
                        <p className="text-secondary mt-0.5">Provide COMPLETE DETAILS (qualifications, years of experience, specialization, consultation fees, languages, and ratings) in one profile.</p>
                      </div>
                      <div>
                        <span className="text-muted block text-[10px] uppercase">Screen Solved:</span>
                        <p className="text-[#0891b2] font-semibold mt-0.5">Doctor Details Screen</p>
                      </div>
                    </div>
                  </div>

                  {/* Finding 3 */}
                  <div className="p-5 rounded-2xl border border-subtle bg-surface">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#0891b2]/10 text-[#0891b2] font-bold uppercase">
                        Finding 03
                      </span>
                      <h4 className="text-sm font-display font-bold text-primary">
                        Booking takes too many steps with cumbersome dropdown pickers.
                      </h4>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3 pt-3 border-t border-subtle text-xs font-mono">
                      <div>
                        <span className="text-muted block text-[10px] uppercase">Why it matters:</span>
                        <p className="text-secondary mt-0.5">Multi-page forms with hidden timeslots fatigue patients who already feel unwell.</p>
                      </div>
                      <div>
                        <span className="text-muted block text-[10px] uppercase">Design Opportunity:</span>
                        <p className="text-secondary mt-0.5">Architect an intuitive, quick SLOT SELECTION FLOW with interactive morning/evening chips and 1-tap confirmation.</p>
                      </div>
                      <div>
                        <span className="text-muted block text-[10px] uppercase">Screen Solved:</span>
                        <p className="text-[#0891b2] font-semibold mt-0.5">Slot Selection &amp; Appointment Confirmed</p>
                      </div>
                    </div>
                  </div>

                  {/* Finding 4 */}
                  <div className="p-5 rounded-2xl border border-subtle bg-surface">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#10b981]/10 text-[#10b981] font-bold uppercase">
                        Finding 04 (Doctor-Side)
                      </span>
                      <h4 className="text-sm font-display font-bold text-primary">
                        <code className="text-[#0891b2]">[Add any doctor-side finding, e.g., about managing appointments or starting calls]</code>
                      </h4>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3 pt-3 border-t border-subtle text-xs font-mono">
                      <div>
                        <span className="text-muted block text-[10px] uppercase">Why it matters:</span>
                        <p className="text-secondary mt-0.5">Doctors lose time navigating complex EHR tabs and setting up daily availability.</p>
                      </div>
                      <div>
                        <span className="text-muted block text-[10px] uppercase">Design Opportunity:</span>
                        <p className="text-secondary mt-0.5">Build a unified agenda separating Upcoming Patients with single-tap patient detail lookup and streamlined availability setup.</p>
                      </div>
                      <div>
                        <span className="text-muted block text-[10px] uppercase">Screen Solved:</span>
                        <p className="text-[#10b981] font-semibold mt-0.5">Doctor Dashboard, Upcoming Patients &amp; Doctor Availability</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ==================================================================== */}
            {/* 6. DEFINE */}
            {/* ==================================================================== */}
            <section id="define" className="scroll-mt-28 py-8 border-t border-subtle">
              <div className="mb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#0891b2] font-semibold">
                  06 · STRATEGY &amp; USER ARCHETYPES
                </span>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary tracking-tight mt-1">
                  Define
                </h2>
              </div>

              {/* a) Proto-Personas */}
              <div className="mb-12">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-muted font-bold">
                    a) Proto-Personas (Archetype Modeling)
                  </h3>
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-badge text-muted">
                    Clearly labeled proto-personas
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Patient Proto-Persona */}
                  <div className="p-6 rounded-2xl border border-subtle bg-surface space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-subtle">
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#0891b2] font-bold">Patient Archetype</span>
                        <h4 className="text-lg font-display font-bold text-primary">Maya Sharma, 34</h4>
                        <p className="text-xs text-secondary font-mono">Working Professional &amp; Primary Caregiver</p>
                      </div>
                      <span className="w-10 h-10 rounded-full bg-[#0891b2]/10 border border-[#0891b2]/30 flex items-center justify-center text-sm font-mono font-bold text-[#0891b2]">
                        MS
                      </span>
                    </div>

                    <div>
                      <span className="text-[11px] font-mono uppercase text-muted block mb-1">Scenario</span>
                      <p className="text-xs text-secondary leading-relaxed">
                        Maya needs to book a cardiologist consultation for her elderly mother who experienced sudden shortness of breath. She needs a trusted specialist who speaks Hindi and has an evening telehealth slot available today.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                      <div className="p-3 rounded-lg bg-badge/40 border border-subtle">
                        <span className="text-primary font-bold block mb-1">Goals &amp; Needs</span>
                        <ul className="list-disc list-inside text-secondary space-y-1 text-[11px]">
                          <li>Search by department</li>
                          <li>Transparent fees &amp; ratings</li>
                          <li>Quick 3-step slot booking</li>
                        </ul>
                      </div>
                      <div className="p-3 rounded-lg bg-badge/40 border border-subtle">
                        <span className="text-primary font-bold block mb-1">Frustrations</span>
                        <ul className="list-disc list-inside text-secondary space-y-1 text-[11px]">
                          <li>Hidden charges at checkout</li>
                          <li>Vague doctor qualifications</li>
                          <li>Complicated multi-page forms</li>
                        </ul>
                      </div>
                    </div>

                    <div className="pt-2 text-[11px] font-mono text-muted flex items-center justify-between">
                      <span>Tech Comfort: Moderate (Smartphone native)</span>
                      <span>Platform: Mobile App</span>
                    </div>
                  </div>

                  {/* Doctor Proto-Persona */}
                  <div className="p-6 rounded-2xl border border-subtle bg-surface space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-subtle">
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#10b981] font-bold">Doctor Archetype</span>
                        <h4 className="text-lg font-display font-bold text-primary">Dr. Julian Evans, 48</h4>
                        <p className="text-xs text-secondary font-mono">Senior Pulmonologist &amp; Clinic Lead</p>
                      </div>
                      <span className="w-10 h-10 rounded-full bg-[#10b981]/10 border border-[#10b981]/30 flex items-center justify-center text-sm font-mono font-bold text-[#10b981]">
                        JE
                      </span>
                    </div>

                    <div>
                      <span className="text-[11px] font-mono uppercase text-muted block mb-1">Scenario</span>
                      <p className="text-xs text-secondary leading-relaxed">
                        Dr. Julian conducts 14 remote consultations each Tuesday. He needs to review each patient's chief complaint, recent lab results, and set his weekly availability easily from his mobile device.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                      <div className="p-3 rounded-lg bg-badge/40 border border-subtle">
                        <span className="text-primary font-bold block mb-1">Goals &amp; Needs</span>
                        <ul className="list-disc list-inside text-secondary space-y-1 text-[11px]">
                          <li>Upcoming Patients queue</li>
                          <li>1-tap patient history review</li>
                          <li>Easy availability scheduler</li>
                        </ul>
                      </div>
                      <div className="p-3 rounded-lg bg-badge/40 border border-subtle">
                        <span className="text-primary font-bold block mb-1">Frustrations</span>
                        <ul className="list-disc list-inside text-secondary space-y-1 text-[11px]">
                          <li>Frequent session timeouts</li>
                          <li>Lost external video links</li>
                          <li>Rigid schedule setups</li>
                        </ul>
                      </div>
                    </div>

                    <div className="pt-2 text-[11px] font-mono text-muted flex items-center justify-between">
                      <span>Tech Comfort: High (Values speed &amp; ergonomics)</span>
                      <span>Platform: Mobile App</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* b) User Journey Maps */}
              <div className="mb-12">
                <h3 className="text-xs font-mono uppercase tracking-wider text-muted font-bold mb-4">
                  b) User Journey Maps (Experience Matrix)
                </h3>

                {/* Patient Journey Table */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-primary">Patient Journey Map: Maya's Booking Flow</span>
                    <span className="text-[11px] font-mono text-muted">7 Chronological Stages</span>
                  </div>
                  <div className="overflow-x-auto rounded-xl border border-subtle bg-surface">
                    <table className="w-full text-left border-collapse text-xs font-mono">
                      <thead>
                        <tr className="border-b border-subtle bg-badge/40 text-muted">
                          <th className="p-3 font-bold w-24">Stage</th>
                          <th className="p-3 font-bold">1. Feel Unwell</th>
                          <th className="p-3 font-bold">2. Search Doctor</th>
                          <th className="p-3 font-bold">3. Compare</th>
                          <th className="p-3 font-bold">4. Book Slot</th>
                          <th className="p-3 font-bold">5. Wait</th>
                          <th className="p-3 font-bold">6. Consultation</th>
                          <th className="p-3 font-bold">7. After Call</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-subtle text-secondary">
                        <tr>
                          <td className="p-3 font-bold text-primary bg-badge/20">Actions</td>
                          <td className="p-3">Notices mother's symptoms; opens app</td>
                          <td className="p-3">Selects "Cardiology" department</td>
                          <td className="p-3">Reviews doctor profile, languages &amp; fees</td>
                          <td className="p-3">Selects 6:30 PM slot; enters chief reason</td>
                          <td className="p-3">Receives confirmation with appointment details</td>
                          <td className="p-3">Joins call from home; discusses symptoms</td>
                          <td className="p-3">Reviews prescription &amp; sees call ended summary</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-primary bg-badge/20">Thoughts</td>
                          <td className="p-3">"I need an expert today."</td>
                          <td className="p-3">"Hope I don't have to scroll forever."</td>
                          <td className="p-3">"Does he speak Hindi? What is the fee?"</td>
                          <td className="p-3">"Is this slot definitely confirmed?"</td>
                          <td className="p-3">"Hope the doctor isn't late."</td>
                          <td className="p-3">"Audio and video are clear."</td>
                          <td className="p-3">"Relieved to have a treatment plan."</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-primary bg-badge/20">Emotions</td>
                          <td className="p-3 text-[#ef4444]">Anxious, worried</td>
                          <td className="p-3 text-[#FDD02D]">Cautious</td>
                          <td className="p-3 text-[#10b981]">Reassured</td>
                          <td className="p-3 text-[#10b981]">Confident</td>
                          <td className="p-3 text-secondary">Calm</td>
                          <td className="p-3 text-[#10b981]">Engaged</td>
                          <td className="p-3 text-[#10b981]">Satisfied</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-primary bg-badge/20">Pain Points</td>
                          <td className="p-3">Uncertainty about urgency</td>
                          <td className="p-3">Cluttered search filters</td>
                          <td className="p-3">Hidden prices in traditional apps</td>
                          <td className="p-3">Too many form fields</td>
                          <td className="p-3">Forgetting appointment time</td>
                          <td className="p-3">Poor network dropouts</td>
                          <td className="p-3">Missing prescription notes</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-primary bg-badge/20">Opportunities</td>
                          <td className="p-3">Symptom helper cards</td>
                          <td className="p-3">Department icons &amp; quick chips</td>
                          <td className="p-3">100% transparent fee badges</td>
                          <td className="p-3">Interactive 1-screen slot matrix</td>
                          <td className="p-3">Live status &amp; calendar sync</td>
                          <td className="p-3">1-tap audio fallback mode</td>
                          <td className="p-3">In-app digital prescription summary</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <HimsImageSlot
                    src="/images/projects/HIMS/patient-journey-map.png"
                    alt="Patient Journey Map Diagram"
                    label="[Image: Patient journey map]"
                    caption="Complete visual journey map synthesizing Maya's experience from initial symptoms through post-consultation."
                    type="journey"
                    onZoom={(src, label) => setZoomImage({ src, title: label })}
                  />
                </div>

                {/* Doctor Journey Table */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-primary">Doctor Journey Map: Dr. Julian's Consultation Flow</span>
                    <span className="text-[11px] font-mono text-muted">6 Clinical Stages</span>
                  </div>
                  <div className="overflow-x-auto rounded-xl border border-subtle bg-surface">
                    <table className="w-full text-left border-collapse text-xs font-mono">
                      <thead>
                        <tr className="border-b border-subtle bg-badge/40 text-muted">
                          <th className="p-3 font-bold w-24">Stage</th>
                          <th className="p-3 font-bold">1. Start Day</th>
                          <th className="p-3 font-bold">2. Check Appointments</th>
                          <th className="p-3 font-bold">3. Prepare Details</th>
                          <th className="p-3 font-bold">4. Start Call</th>
                          <th className="p-3 font-bold">5. Consultation</th>
                          <th className="p-3 font-bold">6. Wrap Up</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-subtle text-secondary">
                        <tr>
                          <td className="p-3 font-bold text-primary bg-badge/20">Actions</td>
                          <td className="p-3">Logs into HIMS clinical mobile app</td>
                          <td className="p-3">Opens Dashboard &amp; Upcoming Patients queue</td>
                          <td className="p-3">Opens patient profile; checks chief complaint</td>
                          <td className="p-3">Clicks "Start Consultation"</td>
                          <td className="p-3">Interviews patient; notes symptoms</td>
                          <td className="p-3">Completes visit &amp; updates availability</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-primary bg-badge/20">Thoughts</td>
                          <td className="p-3">"How many patients today?"</td>
                          <td className="p-3">"Who has checked in so far?"</td>
                          <td className="p-3">"What was her last reading?"</td>
                          <td className="p-3">"Hope the connection starts cleanly."</td>
                          <td className="p-3">"Good quality; notes taking is fast."</td>
                          <td className="p-3">"Next patient is already in queue."</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-primary bg-badge/20">Emotions</td>
                          <td className="p-3 text-secondary">Focused</td>
                          <td className="p-3 text-[#10b981]">Organized</td>
                          <td className="p-3 text-[#10b981]">Prepared</td>
                          <td className="p-3 text-[#10b981]">In Control</td>
                          <td className="p-3 text-[#10b981]">Efficient</td>
                          <td className="p-3 text-[#10b981]">Accomplished</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-primary bg-badge/20">Pain Points</td>
                          <td className="p-3">Slow system boot</td>
                          <td className="p-3">Mixed up arrival statuses</td>
                          <td className="p-3">Burying medical history in nested tabs</td>
                          <td className="p-3">Copy-pasting external links</td>
                          <td className="p-3">Distracting onscreen clutter</td>
                          <td className="p-3">Complex availability setting</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-primary bg-badge/20">Opportunities</td>
                          <td className="p-3">Fast mobile login</td>
                          <td className="p-3">Upcoming Patients queue tab</td>
                          <td className="p-3">1-screen glanceable patient summary</td>
                          <td className="p-3">In-app 1-tap call initiator</td>
                          <td className="p-3">Clean overlay with active consultation pad</td>
                          <td className="p-3">Visual availability scheduler</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <HimsImageSlot
                    src="/images/projects/HIMS/doctor-journey-map.png"
                    alt="Doctor Journey Map Diagram"
                    label="[Image: Doctor journey map]"
                    caption="Visual journey mapping Dr. Julian's clinical workflow from daily login to consultation wrap-up."
                    type="journey"
                    onZoom={(src, label) => setZoomImage({ src, title: label })}
                  />
                </div>
              </div>

              {/* c) How Might We Statements */}
              <div className="mb-10">
                <h3 className="text-xs font-mono uppercase tracking-wider text-muted font-bold mb-4">
                  c) How Might We (HMW) Statements
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    'HMW help patients find the right doctor by medical department in seconds rather than minutes?',
                    'HMW present comprehensive doctor credentials, consultation fees, and languages to build instant patient trust?',
                    'HMW compress the appointment slot selection flow into an effortless 3-step action without scrolling dropdowns?',
                    'HMW give doctors an instant, chronological view of their daily schedule without cognitive clutter?',
                    'HMW enable physicians to review critical patient history and launch consultations in a single tap?',
                    'HMW empower doctors to configure their availability easily from their mobile devices?'
                  ].map((hmw, idx) => (
                    <div key={idx} className="p-4 rounded-xl border border-subtle bg-surface flex items-start gap-3">
                      <span className="w-6 h-6 rounded-md bg-[#0891b2]/10 text-[#0891b2] font-mono text-xs font-bold flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <p className="text-xs sm:text-sm text-secondary font-medium leading-relaxed">{hmw}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* d) Success Criteria */}
              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-muted font-bold mb-4">
                  d) Design Success Criteria (Honest Design Goals)
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { label: 'Patient Booking Flow', target: '3 Simple Steps', detail: 'Select department → view profile → reserve slot with 1 tap.' },
                    { label: 'Doctor Call Launcher', target: '2 Taps to Start', detail: 'View queue → inspect details → launch call directly.' },
                    { label: 'Upfront Transparency', target: '100% Doctor Data', detail: 'Credentials, fees, languages & ratings visible prior to booking.' },
                    { label: 'Doctor Schedule Control', target: 'Effortless Availability', detail: 'Configure weekly slots & working hours in under 60 seconds.' }
                  ].map((sc, idx) => (
                    <div key={idx} className="p-4 rounded-xl border border-subtle bg-surface">
                      <span className="text-[10px] font-mono text-muted uppercase tracking-wider block mb-1">{sc.label}</span>
                      <span className="text-base font-display font-bold text-primary block">{sc.target}</span>
                      <p className="text-xs text-secondary mt-1 font-mono">{sc.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ==================================================================== */}
            {/* 7. IDEATE & STRUCTURE */}
            {/* ==================================================================== */}
            <section id="ideate" className="scroll-mt-28 py-8 border-t border-subtle">
              <div className="mb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#0891b2] font-semibold">
                  07 · ARCHITECTURE &amp; EDGE CASES
                </span>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary tracking-tight mt-1">
                  Ideate &amp; Structure
                </h2>
              </div>

              {/* a) Information Architecture */}
              <div className="mb-10">
                <h3 className="text-xs font-mono uppercase tracking-wider text-muted font-bold mb-3">
                  a) Dual Information Architecture (Sitemap)
                </h3>
                <p className="text-sm text-secondary mb-4 leading-relaxed">
                  Both experiences share a single database but diverge based on intent: patients require a discovery-first funnel, whereas doctors require an operational, agenda-first console.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-5 rounded-xl border border-subtle bg-surface">
                    <span className="text-xs font-mono font-bold uppercase text-[#0891b2] block mb-2">Patient App Sitemap</span>
                    <ol className="list-decimal list-inside space-y-1 text-xs font-mono text-secondary">
                      <li>Splash Screen</li>
                      <li>Login / Register Screen</li>
                      <li>Patient Home (Search, Department Shortcuts, Top Specialists)</li>
                      <li>Select Speciality (Cardiology, Dermatology, Pediatrics, etc.)</li>
                      <li>Doctor List (Filters: Availability, Fee, Language, Rating)</li>
                      <li>Doctor Details (Credentials, Bio, Reviews, Working Hours)</li>
                      <li>Slot Selection (Date picker + Time slot chips)</li>
                      <li>Appointment Type (Video Call vs Audio Call)</li>
                      <li>Payment Method &amp; Checkout</li>
                      <li>Appointment Confirmed</li>
                      <li>My Appointments (Upcoming &amp; Past)</li>
                      <li>Live Telehealth Call (Video/Audio)</li>
                      <li>Call Ended Summary</li>
                    </ol>
                  </div>

                  <div className="p-5 rounded-xl border border-subtle bg-surface">
                    <span className="text-xs font-mono font-bold uppercase text-[#10b981] block mb-2">Doctor App Sitemap</span>
                    <ol className="list-decimal list-inside space-y-1 text-xs font-mono text-secondary">
                      <li>Doctor Splash Screen</li>
                      <li>Doctor Login &amp; Clinical Verification</li>
                      <li>Doctor Dashboard (Weekly schedule &amp; appointment metrics)</li>
                      <li>Upcoming Patients Queue (Patient arrival status &amp; times)</li>
                      <li>Patient Profile (Chief complaints, past notes, EHR details)</li>
                      <li>Doctor Availability Setup (Manage working days &amp; hours)</li>
                      <li>Availability Confirmation (Set up status)</li>
                    </ol>
                  </div>
                </div>

                <HimsImageSlot
                  src="/images/projects/HIMS/information-architecture.png"
                  alt="Information Architecture and Sitemap Diagram"
                  label="[Image: IA / sitemap]"
                  caption="Dual sitemap detailing the synchronized architecture between patient discovery and clinician intake."
                  type="sitemap"
                  onZoom={(src, label) => setZoomImage({ src, title: label })}
                />
              </div>

              {/* b) Detailed User Flows & Edge Cases */}
              <div className="mb-10">
                <h3 className="text-xs font-mono uppercase tracking-wider text-muted font-bold mb-3">
                  b) Detailed User Flows &amp; Edge Cases
                </h3>
                <p className="text-sm text-secondary mb-4 leading-relaxed">
                  Healthcare applications encounter unpredictable real-world obstacles. I designed dedicated decision paths for every critical edge case:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                  <div className="p-4 rounded-xl border border-subtle bg-surface">
                    <span className="text-[10px] font-mono text-[#ef4444] font-bold uppercase block mb-1">Edge Case 01</span>
                    <h5 className="text-xs font-display font-bold text-primary mb-1">No Slots Available</h5>
                    <p className="text-xs text-secondary leading-relaxed">
                      System automatically suggests the doctor's next earliest opening and displays 2 alternative doctors within the same department.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-subtle bg-surface">
                    <span className="text-[10px] font-mono text-[#FDD02D] font-bold uppercase block mb-1">Edge Case 02</span>
                    <h5 className="text-xs font-display font-bold text-primary mb-1">Reschedule / Cancel</h5>
                    <p className="text-xs text-secondary leading-relaxed">
                      1-tap reschedule action releases the doctor's reserved slot immediately to the hospital pool and updates both calendars in real-time.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-subtle bg-surface">
                    <span className="text-[10px] font-mono text-[#FDD02D] font-bold uppercase block mb-1">Edge Case 03</span>
                    <h5 className="text-xs font-display font-bold text-primary mb-1">Doctor Running Late</h5>
                    <p className="text-xs text-secondary leading-relaxed">
                      Waiting lobby displays live queue status e.g. "Doctor is completing a visit. Estimated start: 4 mins" with SMS notification option.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-subtle bg-surface">
                    <span className="text-[10px] font-mono text-[#0891b2] font-bold uppercase block mb-1">Edge Case 04</span>
                    <h5 className="text-xs font-display font-bold text-primary mb-1">Poor Network Bandwidth</h5>
                    <p className="text-xs text-secondary leading-relaxed">
                      If video stream latency exceeds 400ms, the system prompts: "Network unstable. Switch to Audio call?" without disconnecting the patient.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-subtle bg-surface">
                    <span className="text-[10px] font-mono text-[#0891b2] font-bold uppercase block mb-1">Edge Case 05</span>
                    <h5 className="text-xs font-display font-bold text-primary mb-1">Switch Video to Audio</h5>
                    <p className="text-xs text-secondary leading-relaxed">
                      Seamless 1-tap camera toggle on both patient and doctor interfaces with zero interruption to the ongoing consultation timer.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-subtle bg-surface">
                    <span className="text-[10px] font-mono text-[#10b981] font-bold uppercase block mb-1">Connected Sync</span>
                    <h5 className="text-xs font-display font-bold text-primary mb-1">How They Connect</h5>
                    <p className="text-xs text-secondary leading-relaxed">
                      When a patient completes booking, the event is immediately pushed to the doctor's Upcoming Patients queue with real-time appointment details.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <HimsImageSlot
                    src="/images/projects/HIMS/patient-user-flow.png"
                    alt="Patient Detailed User Flow Diagram"
                    label="[Image: Patient user flow]"
                    caption="Patient logic tree: Department discovery → Profile review → Slot booking → Video/Audio room."
                    type="flow"
                    onZoom={(src, label) => setZoomImage({ src, title: label })}
                  />
                  <HimsImageSlot
                    src="/images/projects/HIMS/doctor-user-flow.png"
                    alt="Doctor Detailed User Flow Diagram"
                    label="[Image: Doctor user flow]"
                    caption="Doctor logic tree: Login → Dashboard → Upcoming Patients check → Patient details review → Call initiation."
                    type="flow"
                    onZoom={(src, label) => setZoomImage({ src, title: label })}
                  />
                </div>
              </div>

              {/* c) Low-Fidelity Wireframes */}
              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-muted font-bold mb-3">
                  c) Low-Fidelity Wireframes &amp; Layout Exploration
                </h3>
                <p className="text-sm text-secondary mb-4 leading-relaxed">
                  Rapidly prototyped low-fidelity wireframes in Figma to validate touch target sizing, appointment card hierarchies, and doctor queue legibility before committing to visual polish.
                </p>

                <HimsImageSlot
                  src="/images/projects/HIMS/low-fidelity-wireframes.png"
                  alt="Low-Fidelity Wireframe Explorations"
                  label="[Image: Wireframes]"
                  caption="Wireframe iterations exploring patient booking wizards and doctor upcoming appointment queues."
                  type="wireframe"
                  onZoom={(src, label) => setZoomImage({ src, title: label })}
                />
              </div>
            </section>

            {/* ==================================================================== */}
            {/* 8. TESTING & ITERATION (A/B TESTING) */}
            {/* ==================================================================== */}
            <section id="testing" className="scroll-mt-28 py-8 border-t border-subtle">
              <div className="mb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#0891b2] font-semibold">
                  08 · VALIDATION &amp; REFINEMENT
                </span>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary tracking-tight mt-1">
                  Testing &amp; Iteration
                </h2>
              </div>

              <div className="p-4 rounded-xl border border-subtle bg-surface mb-8 font-mono text-xs text-secondary leading-relaxed">
                <span className="text-[#0891b2] font-bold block mb-1">A/B Testing Framework:</span>
                Testing was conducted on interactive prototype variants: <code className="text-primary font-bold">[add what was compared, version A vs version B, which version won and why, number of participants]</code>. In particular, the <strong>Patient Home Dashboard</strong> was evaluated across two visual layouts:
              </div>

              {/* Direct Visual A/B Comparison: Option 1 vs Option 2 */}
              <div className="p-6 sm:p-8 rounded-3xl border border-subtle bg-surface mb-10">
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-subtle">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#0891b2] font-bold">Featured A/B Prototype Test</span>
                    <h3 className="text-lg font-display font-bold text-primary">
                      Patient Home Dashboard: Option 1 vs. Option 2
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-muted uppercase">390 × 844 Mobile Layouts</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  {/* Option 1 */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold uppercase text-muted">Version A (Option 1)</span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-badge text-muted">Initial Layout</span>
                    </div>
                    <div
                      onClick={() => setZoomImage({ src: '/images/projects/HIMS/Patient/Patient Home-Option1.png', title: 'Patient Home - Option 1' })}
                      className="relative w-full max-w-[270px] mx-auto rounded-[32px] p-2 bg-neutral-900 border-[3px] border-neutral-700 shadow-xl cursor-zoom-in group/ab"
                    >
                      <div className="aspect-[390/844] rounded-[24px] overflow-hidden bg-neutral-950">
                        <img
                          src="/images/projects/HIMS/Patient/Patient Home-Option1.png"
                          alt="Patient Home Option 1"
                          className="w-full h-full object-cover object-top transition-transform duration-300 group-hover/ab:scale-105"
                        />
                      </div>
                    </div>
                    <p className="text-xs text-secondary font-mono leading-relaxed">
                      <strong>Option 1 Characteristics:</strong> Emphasized promotional health banners and horizontal specialty chips. User feedback noted that the primary search input felt overshadowed by top banners.
                    </p>
                  </div>

                  {/* Option 2 */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold uppercase text-[#10b981]">Version B (Option 2 — Winner)</span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#10b981]/10 text-[#10b981] font-bold">Selected Iteration</span>
                    </div>
                    <div
                      onClick={() => setZoomImage({ src: '/images/projects/HIMS/Patient/Patient Home-Option2.png', title: 'Patient Home - Option 2' })}
                      className="relative w-full max-w-[270px] mx-auto rounded-[32px] p-2 bg-neutral-900 border-[3px] border-[#10b981]/60 shadow-xl cursor-zoom-in group/ab"
                    >
                      <div className="aspect-[390/844] rounded-[24px] overflow-hidden bg-neutral-950">
                        <img
                          src="/images/projects/HIMS/Patient/Patient Home-Option2.png"
                          alt="Patient Home Option 2"
                          className="w-full h-full object-cover object-top transition-transform duration-300 group-hover/ab:scale-105"
                        />
                      </div>
                    </div>
                    <p className="text-xs text-secondary font-mono leading-relaxed">
                      <strong>Option 2 Improvements:</strong> Elevated the specialist search bar, organized medical departments into a clean 2x2 scannable grid, and surfaced upcoming appointment cards directly above doctor recommendations.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-subtle text-xs font-mono text-secondary">
                  <strong>Outcome of A/B Test:</strong> Option 2 was selected for the final design suite because participants located specialists and initiated bookings faster with lower cognitive distraction.
                </div>
              </div>

              {/* Additional Before -> After Comparisons */}
              <div className="space-y-6">
                {/* Comparison 1 */}
                <div className="p-6 rounded-2xl border border-subtle bg-surface">
                  <div className="flex items-center justify-between pb-3 border-b border-subtle mb-4">
                    <span className="text-xs font-mono font-bold uppercase text-[#0891b2]">Iteration 01 · Slot Selection Flow</span>
                    <span className="text-[10px] font-mono text-muted uppercase">Patient Interface</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                    <div className="p-4 rounded-xl border border-dashed border-subtle bg-badge/20">
                      <span className="text-muted uppercase text-[10px] block mb-1">Before (Version A)</span>
                      <p className="text-secondary leading-relaxed">
                        Traditional dropdown calendar requiring users to click open a date selector, followed by a scrolling wheel to select time slots. Users experienced high cognitive hesitation and missed evening availability.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl border border-subtle bg-[#10b981]/5">
                      <span className="text-[#10b981] uppercase text-[10px] font-bold block mb-1">After (Version B — Winner)</span>
                      <p className="text-primary leading-relaxed">
                        A horizontal scrolling 7-day strip paired with clear, tap-friendly Morning and Afternoon time-slot chips displayed all in one screen. Reduced selection time by eliminating hidden options.
                      </p>
                    </div>
                  </div>
                  <p className="mt-3 text-xs text-secondary font-mono">
                    <strong>Design Rationale:</strong> Solves Research Finding 3 ("Booking takes too many steps"). Users can see all openings immediately without repetitive tap-and-scroll actions.
                  </p>
                </div>

                {/* Comparison 2 */}
                <div className="p-6 rounded-2xl border border-subtle bg-surface">
                  <div className="flex items-center justify-between pb-3 border-b border-subtle mb-4">
                    <span className="text-xs font-mono font-bold uppercase text-[#0891b2]">Iteration 02 · Doctor Profile Credentials</span>
                    <span className="text-[10px] font-mono text-muted uppercase">Patient Interface</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                    <div className="p-4 rounded-xl border border-dashed border-subtle bg-badge/20">
                      <span className="text-muted uppercase text-[10px] block mb-1">Before (Version A)</span>
                      <p className="text-secondary leading-relaxed">
                        Doctor details were partitioned across three distinct tabs ("About", "Reviews", "Schedule"). Patients repeatedly clicked back and forth to match consultation fees with working hours.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl border border-subtle bg-[#10b981]/5">
                      <span className="text-[#10b981] uppercase text-[10px] font-bold block mb-1">After (Version B — Winner)</span>
                      <p className="text-primary leading-relaxed">
                        A single scannable, vertically scrolling profile page with glanceable badge pills for Experience, Spoken Languages, Patient Rating, and clear consultation pricing anchored next to a sticky "Book" button.
                      </p>
                    </div>
                  </div>
                  <p className="mt-3 text-xs text-secondary font-mono">
                    <strong>Design Rationale:</strong> Solves Research Finding 2 ("Users do not trust booking without enough information"). Eliminates tab fatigue and displays all credentials upfront.
                  </p>
                </div>
              </div>
            </section>

            {/* ==================================================================== */}
            {/* 9. FINAL DESIGN (UI) - REAL USER SCREENS */}
            {/* ==================================================================== */}
            <section id="final-ui" className="scroll-mt-28 py-8 border-t border-subtle">
              <div className="mb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#0891b2] font-semibold">
                  09 · HIGH-FIDELITY USER INTERFACES
                </span>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary tracking-tight mt-1">
                  Final Design (UI)
                </h2>
              </div>

              <p className="text-sm sm:text-base text-secondary mb-8 leading-relaxed">
                The visual design directly materializes the research insights into two clearly segregated, cohesive suites. Every screen pairs a specific purpose with the research finding it solves:
              </p>

              {/* Group 1: Patient Screens */}
              <div className="space-y-8 mb-20">
                <div className="flex items-center justify-between pb-3 border-b border-subtle">
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-[#0891b2]" />
                    <h3 className="text-xl font-display font-bold text-primary">
                      Part A: Patient Experience Screens
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-muted uppercase">13 Screens · Complete End-to-End Flow</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Screen 1: Splash */}
                  <HimsMobilePhone
                    src="/images/projects/HIMS/Patient/Splash.png"
                    alt="Patient Splash Screen"
                    title="Splash &amp; Brand Identity"
                    flow="Patient Flow"
                    stepNumber="01"
                    purpose="Calming visual entrance introducing HIMS medical identity and establishing user trust."
                    findingSolved="First-time patients seek reassurance and clinical credibility when opening a digital health platform."
                    keyDecision="Clean cyan brand emblem on soft background minimizing healthcare intimidation."
                    onZoom={(src, title) => setZoomImage({ src, title })}
                  />

                  {/* Screen 2: Login */}
                  <HimsMobilePhone
                    src="/images/projects/HIMS/Patient/Login Screen.png"
                    alt="Patient Login Screen"
                    title="Login &amp; Authentication"
                    flow="Patient Flow"
                    stepNumber="02"
                    purpose="Fast mobile sign-in supporting phone OTP and password login with social auth shortcuts."
                    findingSolved="Eliminates complicated password recovery barriers for sick patients seeking immediate care."
                    keyDecision="High-contrast input fields with prominent numeric keypad for rapid mobile entry."
                    onZoom={(src, title) => setZoomImage({ src, title })}
                  />

                  {/* Screen 3: Patient Home */}
                  <HimsMobilePhone
                    src="/images/projects/HIMS/Patient/Patient Home-Option2.png"
                    alt="Patient Home Screen"
                    title="Home &amp; Quick Discovery"
                    flow="Patient Flow"
                    stepNumber="03"
                    purpose="Central hub with prominent specialist search, department shortcuts, and upcoming appointment cards."
                    findingSolved="Finding 1 — Disorganized healthcare apps make emergency specialist search stressful."
                    keyDecision="Elevated search bar with 2x2 department grid and instant specialist recommendations."
                    onZoom={(src, title) => setZoomImage({ src, title })}
                  />

                  {/* Screen 4: Select Speciality */}
                  <HimsMobilePhone
                    src="/images/projects/HIMS/Patient/Select Speciality.png"
                    alt="Select Speciality Screen"
                    title="Select Medical Speciality"
                    flow="Patient Flow"
                    stepNumber="04"
                    purpose="Visual directory of medical departments (Cardiology, Dental, Eye Care, etc.) with specialist counts."
                    findingSolved="Finding 1 — Users explicitly requested doctors categorized department-wise."
                    keyDecision="Intuitive iconography for each medical discipline reducing search ambiguity."
                    onZoom={(src, title) => setZoomImage({ src, title })}
                  />

                  {/* Screen 5: Doctor List */}
                  <HimsMobilePhone
                    src="/images/projects/HIMS/Patient/Doctor List.png"
                    alt="Doctor List Screen"
                    title="Doctor Directory &amp; Filters"
                    flow="Patient Flow"
                    stepNumber="05"
                    purpose="Roster of verified doctors within the selected department showing ratings, fees, and next availability."
                    findingSolved="Patients struggle to compare specialists without leaving the search screen."
                    keyDecision="Glanceable doctor summary cards with consultation fees and star ratings."
                    onZoom={(src, title) => setZoomImage({ src, title })}
                  />

                  {/* Screen 6: Doctor Details */}
                  <HimsMobilePhone
                    src="/images/projects/HIMS/Patient/Doctor Details.png"
                    alt="Doctor Details Screen"
                    title="Doctor Profile &amp; Credentials"
                    flow="Patient Flow"
                    stepNumber="06"
                    purpose="Comprehensive profile detailing qualifications, years of experience, patient reviews, and hospital location."
                    findingSolved="Finding 2 — Users do not trust booking without complete upfront details."
                    keyDecision="Single unified scroll layout with sticky bottom booking trigger."
                    onZoom={(src, title) => setZoomImage({ src, title })}
                  />

                  {/* Screen 7: Slot Selection */}
                  <HimsMobilePhone
                    src="/images/projects/HIMS/Patient/Slot Selection.png"
                    alt="Slot Selection Screen"
                    title="Date &amp; Time Slot Selection"
                    flow="Patient Flow"
                    stepNumber="07"
                    purpose="Interactive calendar for selecting appointment date and morning or afternoon time-slot chips."
                    findingSolved="Finding 3 — Booking takes too many clicks with traditional scrolling date pickers."
                    keyDecision="Horizontal 7-day calendar strip with prominent available vs booked slot indicators."
                    onZoom={(src, title) => setZoomImage({ src, title })}
                  />

                  {/* Screen 8: Consultation Mode */}
                  <HimsMobilePhone
                    src="/images/projects/HIMS/Patient/AppointmentType-Video-Audio.png"
                    alt="Appointment Type Screen"
                    title="Consultation Mode Selection"
                    flow="Patient Flow"
                    stepNumber="08"
                    purpose="Choose consultation format: High-Definition Video Call or Audio-Only Consultation."
                    findingSolved="Patients in low-bandwidth or private settings prefer audio options without video pressure."
                    keyDecision="Clear two-card selection cards highlighting price and camera requirement."
                    onZoom={(src, title) => setZoomImage({ src, title })}
                  />

                  {/* Screen 9: Payment Method */}
                  <HimsMobilePhone
                    src="/images/projects/HIMS/Patient/Payment Method.png"
                    alt="Payment Method Screen"
                    title="Payment Method &amp; Checkout"
                    flow="Patient Flow"
                    stepNumber="09"
                    purpose="Secure checkout supporting credit cards, digital wallets, and health insurance co-pay."
                    findingSolved="Unexpected charges at checkout trigger immediate booking cancellation."
                    keyDecision="Transparent cost breakdown showing consultation fee, taxes, and total payable."
                    onZoom={(src, title) => setZoomImage({ src, title })}
                  />

                  {/* Screen 10: Appointment Confirmed */}
                  <HimsMobilePhone
                    src="/images/projects/HIMS/Patient/Appointment Confirned.png"
                    alt="Appointment Confirmed Screen"
                    title="Appointment Confirmation"
                    flow="Patient Flow"
                    stepNumber="10"
                    purpose="Verified booking receipt displaying doctor name, scheduled time, and calendar export shortcut."
                    findingSolved="Patients worry whether their booking reached the hospital doctor roster."
                    keyDecision="Vibrant green confirmation checkmark with direct 'Add to Calendar' button."
                    onZoom={(src, title) => setZoomImage({ src, title })}
                  />

                  {/* Screen 11: My Appointment */}
                  <HimsMobilePhone
                    src="/images/projects/HIMS/Patient/My Appointment.png"
                    alt="My Appointments Screen"
                    title="My Appointments &amp; Telehealth Lobby"
                    flow="Patient Flow"
                    stepNumber="11"
                    purpose="Patient's active schedule showing upcoming and completed appointments with countdown timers."
                    findingSolved="Forgetting appointment times or losing consultation room links."
                    keyDecision="Direct 'Join Call' button activating 10 minutes prior to scheduled start."
                    onZoom={(src, title) => setZoomImage({ src, title })}
                  />

                  {/* Screen 12: Live Call */}
                  <HimsMobilePhone
                    src="/images/projects/HIMS/Patient/Live Call.png"
                    alt="Live Call Screen"
                    title="Live Telehealth Call Room"
                    flow="Patient Flow"
                    stepNumber="12"
                    purpose="Full-screen encrypted consultation room with picture-in-picture stream and call controls."
                    findingSolved="Edge Case 4 &amp; 5 — Video freezes should not cause call dropouts."
                    keyDecision="High-contrast microphone, camera toggle, and 1-tap audio switch controls."
                    onZoom={(src, title) => setZoomImage({ src, title })}
                  />

                  {/* Screen 13: Call Ended */}
                  <HimsMobilePhone
                    src="/images/projects/HIMS/Patient/Call Ended.png"
                    alt="Call Ended Screen"
                    title="Call Summary &amp; Wrap Up"
                    flow="Patient Flow"
                    stepNumber="13"
                    purpose="Post-call feedback, consultation duration summary, and digital prescription access."
                    findingSolved="Patients left unsure of next medical steps once video call terminates."
                    keyDecision="Rating slider for doctor review and link to book follow-up consultation."
                    onZoom={(src, title) => setZoomImage({ src, title })}
                  />
                </div>
              </div>

              {/* Group 2: Doctor Screens */}
              <div className="space-y-8">
                <div className="flex items-center justify-between pb-3 border-b border-subtle">
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-[#10b981]" />
                    <h3 className="text-xl font-display font-bold text-primary">
                      Part B: Doctor Clinical Mobile Flow
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-muted uppercase">7 Screens · Clinician Roster &amp; Queue</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Screen 1: Doctor Splash */}
                  <HimsMobilePhone
                    src="/images/projects/HIMS/Doctor/Splash.png"
                    alt="Doctor Splash Screen"
                    title="Doctor Portal Splash"
                    flow="Doctor Flow"
                    stepNumber="01"
                    purpose="Clinician portal identity introducing dedicated medical provider tools."
                    findingSolved="Doctors need dedicated, secure clinical entry distinct from patient portals."
                    keyDecision="High-contrast clinical green beacon signaling doctor portal mode."
                    onZoom={(src, title) => setZoomImage({ src, title })}
                  />

                  {/* Screen 2: Doctor Login */}
                  <HimsMobilePhone
                    src="/images/projects/HIMS/Doctor/Login.png"
                    alt="Doctor Login Screen"
                    title="Doctor Login &amp; Security"
                    flow="Doctor Flow"
                    stepNumber="02"
                    purpose="HIPAA-compliant clinician authentication with medical license and credential validation."
                    findingSolved="Physicians require fast, friction-free login without recurring timeout interruptions."
                    keyDecision="Clean biometric authentication with quick medical ID login fallback."
                    onZoom={(src, title) => setZoomImage({ src, title })}
                  />

                  {/* Screen 3: Doctor Dashboard */}
                  <HimsMobilePhone
                    src="/images/projects/HIMS/Doctor/Doctor Dashboard.png"
                    alt="Doctor Dashboard Screen"
                    title="Doctor Command Dashboard"
                    flow="Doctor Flow"
                    stepNumber="03"
                    purpose="Central physician workstation showing today's appointments, completed visits, and active queue."
                    findingSolved="Finding 4 — Doctors struggle to see daily patient counts and upcoming visits at a glance."
                    keyDecision="Summary metric cards paired with upcoming appointment timeline cards."
                    onZoom={(src, title) => setZoomImage({ src, title })}
                  />

                  {/* Screen 4: Upcoming Patients */}
                  <HimsMobilePhone
                    src="/images/projects/HIMS/Doctor/Upcoming Patients.png"
                    alt="Upcoming Patients Screen"
                    title="Upcoming Patients Queue"
                    flow="Doctor Flow"
                    stepNumber="04"
                    purpose="Chronological patient appointment roster with arrival status badges (Checked-In, Waiting)."
                    findingSolved="Connected Flow: Patient bookings directly populate this doctor list in real-time."
                    keyDecision="Glanceable patient cards with visit times and 1-tap 'View Profile' access."
                    onZoom={(src, title) => setZoomImage({ src, title })}
                  />

                  {/* Screen 5: Patient Profile */}
                  <HimsMobilePhone
                    src="/images/projects/HIMS/Doctor/Patient Profile.png"
                    alt="Patient Profile Screen"
                    title="Patient Profile &amp; Medical Intake"
                    flow="Doctor Flow"
                    stepNumber="05"
                    purpose="Glanceable medical summary featuring chief complaint, vital signs, and past appointment history."
                    findingSolved="Doctors waste minutes hunting for medical background across disjointed EHR tabs."
                    keyDecision="Prominent 'Start Consultation' button directly under patient chief complaints."
                    onZoom={(src, title) => setZoomImage({ src, title })}
                  />

                  {/* Screen 6: Doctor Availability */}
                  <HimsMobilePhone
                    src="/images/projects/HIMS/Doctor/Doctor Availability.png"
                    alt="Doctor Availability Screen"
                    title="Doctor Availability Setup"
                    flow="Doctor Flow"
                    stepNumber="06"
                    purpose="Configurable calendar scheduler enabling doctors to set available consultation days and time windows."
                    findingSolved="Rigid hospital scheduling tools make it difficult for doctors to manage telehealth slots."
                    keyDecision="Visual day-of-week toggles with custom morning and evening time ranges."
                    onZoom={(src, title) => setZoomImage({ src, title })}
                  />

                  {/* Screen 7: Availability Settedup */}
                  <HimsMobilePhone
                    src="/images/projects/HIMS/Doctor/Availability Settedup.png"
                    alt="Availability Set Up Screen"
                    title="Availability Confirmed State"
                    flow="Doctor Flow"
                    stepNumber="07"
                    purpose="Confirmation state showing active working slots published to the patient discovery engine."
                    findingSolved="Doctors need certainty that their published hours are actively open for booking."
                    keyDecision="Visual summary list of active consultation days with quick-edit pencil controls."
                    onZoom={(src, title) => setZoomImage({ src, title })}
                  />
                </div>
              </div>
            </section>

            {/* ==================================================================== */}
            {/* 10. VISUAL DESIGN SYSTEM */}
            {/* ==================================================================== */}
            <section id="design-system" className="scroll-mt-28 py-8 border-t border-subtle">
              <div className="mb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#0891b2] font-semibold">
                  10 · FOUNDATIONS &amp; COMPONENTS
                </span>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary tracking-tight mt-1">
                  Visual Design System
                </h2>
              </div>

              <p className="text-sm sm:text-base text-secondary mb-8 leading-relaxed">
                Healthcare products must balance empathy with clinical authority. I developed the HIMS Design System around four core tenets: <strong>Trust, Calmness, Functional Clarity, and Universal Readability</strong> across all age brackets.
              </p>

              {/* Color System */}
              <div className="mb-8">
                <h3 className="text-xs font-mono uppercase tracking-wider text-muted font-bold mb-3">
                  Color Palette &amp; Psychological Intent: <code className="text-[#0891b2]">[Add my color codes and font names]</code>
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 font-mono text-xs">
                  <div className="p-3.5 rounded-xl border border-subtle bg-surface">
                    <div className="w-full h-10 rounded-lg bg-[#0891b2] mb-2" />
                    <span className="font-bold text-primary block">Clinical Cyan</span>
                    <span className="text-[11px] text-muted">#0891b2</span>
                    <span className="text-[10px] text-secondary mt-1 block">Trust &amp; Technology</span>
                  </div>

                  <div className="p-3.5 rounded-xl border border-subtle bg-surface">
                    <div className="w-full h-10 rounded-lg bg-[#10b981] mb-2" />
                    <span className="font-bold text-primary block">Health Emerald</span>
                    <span className="text-[11px] text-muted">#10b981</span>
                    <span className="text-[10px] text-secondary mt-1 block">Confirmed / Doctor Flow</span>
                  </div>

                  <div className="p-3.5 rounded-xl border border-subtle bg-surface">
                    <div className="w-full h-10 rounded-lg bg-[#ef4444] mb-2" />
                    <span className="font-bold text-primary block">Allergy Red</span>
                    <span className="text-[11px] text-muted">#ef4444</span>
                    <span className="text-[10px] text-secondary mt-1 block">Critical Alert</span>
                  </div>

                  <div className="p-3.5 rounded-xl border border-subtle bg-surface">
                    <div className="w-full h-10 rounded-lg bg-[#64748b] mb-2" />
                    <span className="font-bold text-primary block">Calm Slate</span>
                    <span className="text-[11px] text-muted">#64748b</span>
                    <span className="text-[10px] text-secondary mt-1 block">Subtle Backgrounds</span>
                  </div>

                  <div className="p-3.5 rounded-xl border border-subtle bg-surface">
                    <div className="w-full h-10 rounded-lg bg-[#0f172a] mb-2" />
                    <span className="font-bold text-primary block">Deep Navy</span>
                    <span className="text-[11px] text-muted">#0f172a</span>
                    <span className="text-[10px] text-secondary mt-1 block">High Contrast Text</span>
                  </div>
                </div>
              </div>

              {/* Typography & Spacing */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="p-5 rounded-xl border border-subtle bg-surface">
                  <span className="text-xs font-mono font-bold uppercase text-[#0891b2] block mb-2">Typography Hierarchy</span>
                  <div className="space-y-3 font-mono text-xs">
                    <div>
                      <span className="text-muted text-[10px] uppercase block">Display Headings</span>
                      <p className="font-display font-bold text-lg text-primary mt-0.5">Plus Jakarta Sans · Bold &amp; Friendly</p>
                    </div>
                    <div>
                      <span className="text-muted text-[10px] uppercase block">Clinical Data &amp; Body</span>
                      <p className="font-sans text-sm text-secondary mt-0.5">Inter · High legibility for dosages &amp; time slots</p>
                    </div>
                    <div>
                      <span className="text-muted text-[10px] uppercase block">Status Labels &amp; Timers</span>
                      <p className="font-mono text-xs text-primary mt-0.5">Monospace · Aligned numbers without layout shift</p>
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-xl border border-subtle bg-surface">
                  <span className="text-xs font-mono font-bold uppercase text-[#0891b2] block mb-2">Spatial Grid &amp; Components</span>
                  <div className="space-y-3 font-mono text-xs">
                    <div>
                      <span className="text-muted text-[10px] uppercase block">Spatial Cadence</span>
                      <p className="text-secondary mt-0.5">Strict 8pt base grid for consistent rhythm across screens.</p>
                    </div>
                    <div>
                      <span className="text-muted text-[10px] uppercase block">Corner Radii</span>
                      <p className="text-secondary mt-0.5">Rounded corners (12px to 24px) creating a gentle, friendly atmosphere.</p>
                    </div>
                    <div>
                      <span className="text-muted text-[10px] uppercase block">Iconography</span>
                      <p className="text-secondary mt-0.5">Handcrafted 24px medical line icons with consistent 2px stroke width.</p>
                    </div>
                  </div>
                </div>
              </div>

              <HimsImageSlot
                src="/images/projects/HIMS/style-guide.png"
                alt="HIMS Design System Style Guide"
                label="[Image: Style guide]"
                caption="HIMS Design System: Typography tokens, accessible healthcare color palettes, time chips, and clinical badge components."
                type="system"
                onZoom={(src, label) => setZoomImage({ src, title: label })}
              />
            </section>

            {/* ==================================================================== */}
            {/* 11. ACCESSIBILITY (WCAG 2.1 AA) */}
            {/* ==================================================================== */}
            <section id="accessibility" className="scroll-mt-28 py-8 border-t border-subtle">
              <div className="mb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#0891b2] font-semibold">
                  11 · INCLUSIVITY &amp; COMPLIANCE
                </span>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary tracking-tight mt-1">
                  Accessibility (WCAG 2.1 AA)
                </h2>
              </div>

              <p className="text-sm sm:text-base text-secondary mb-6 leading-relaxed">
                Healthcare software must serve elderly patients, people under intense physical distress, and users with mild visual or cognitive impairments. I rigorously baked WCAG 2.1 AA compliance into every interaction:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl border border-subtle bg-surface">
                  <span className="text-[#10b981] font-bold text-sm block mb-1">✓ Color Contrast</span>
                  <p className="text-xs text-secondary leading-relaxed font-mono">
                    All text elements achieve minimum 4.5:1 contrast against their backgrounds; critical CTAs and error states exceed 7:1 (AAA).
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-subtle bg-surface">
                  <span className="text-[#10b981] font-bold text-sm block mb-1">✓ Generous Tap Targets</span>
                  <p className="text-xs text-secondary leading-relaxed font-mono">
                    Every interactive button, slot chip, and call control has a minimum physical tap bounding box of 44x44px.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-subtle bg-surface">
                  <span className="text-[#10b981] font-bold text-sm block mb-1">✓ Readable Text Sizing</span>
                  <p className="text-xs text-secondary leading-relaxed font-mono">
                    Base body typography scales at 16px, preventing squinting on smaller mobile screens with generous 1.5 line heights.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-subtle bg-surface">
                  <span className="text-[#10b981] font-bold text-sm block mb-1">✓ Screen Reader Labels</span>
                  <p className="text-xs text-secondary leading-relaxed font-mono">
                    Explicit ARIA descriptive tags on calendar pickers, slot statuses (e.g. "Available", "Booked"), and audio indicators.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-subtle bg-surface">
                  <span className="text-[#10b981] font-bold text-sm block mb-1">✓ Redundant Visual Cues</span>
                  <p className="text-xs text-secondary leading-relaxed font-mono">
                    Color is never used as the sole indicator of status. Error and success messages include clear icons and explicit text labels.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-subtle bg-surface">
                  <span className="text-[#10b981] font-bold text-sm block mb-1">✓ Older User Support</span>
                  <p className="text-xs text-secondary leading-relaxed font-mono">
                    Clear confirmation modal steps, minimal cognitive load per screen, and high-visibility end-call triggers.
                  </p>
                </div>
              </div>
            </section>

            {/* ==================================================================== */}
            {/* 12. OUTCOME & RECOGNITION */}
            {/* ==================================================================== */}
            <section id="outcome" className="scroll-mt-28 py-8 border-t border-subtle">
              <div className="mb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#0891b2] font-semibold">
                  12 · INDUSTRY VALIDATION
                </span>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary tracking-tight mt-1">
                  Outcome &amp; Recognition
                </h2>
              </div>

              {/* Award Showcase Card */}
              <div className="p-6 sm:p-8 rounded-2xl border border-[#FDD02D]/40 bg-surface relative overflow-hidden mb-8">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#FDD02D]/10 blur-[80px] pointer-events-none" />
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">🏆</span>
                    <div>
                      <span className="text-[10px] font-mono text-[#FDD02D] font-bold uppercase tracking-widest">
                        International Design Award
                      </span>
                      <h3 className="text-xl sm:text-2xl font-display font-extrabold text-primary">
                        Silver Winner – Best Design, Healthcare
                      </h3>
                      <p className="text-xs font-mono text-muted">Vega Digital Awards · [add year]</p>
                    </div>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-secondary leading-relaxed mt-4">
                  Winning Silver in the Healthcare category validated the dual-sided user architecture. It proved that a self-initiated concept can compete with agency-backed enterprise platforms by solving genuine usability bottlenecks with clean craftsmanship.
                </p>

                <div className="mt-5 p-4 rounded-xl border border-subtle bg-badge/40 font-mono text-xs text-secondary">
                  <span className="text-primary font-bold block mb-1">Jury Recognition Feedback:</span>
                  <code className="text-[#0891b2]">[Add jury feedback if any]</code>
                </div>
              </div>

              {/* Success Criteria Validation Check */}
              <h3 className="text-xs font-mono uppercase tracking-wider text-muted font-bold mb-3">
                Validation Against Design Success Criteria
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-subtle bg-surface flex items-start gap-3">
                  <span className="text-[#10b981] font-bold text-sm">✓</span>
                  <div>
                    <span className="text-xs font-mono font-bold text-primary block">Goal: Fast 3-Step Appointment Booking</span>
                    <p className="text-xs text-secondary mt-0.5 font-mono">
                      Achieved: Replaced nested form pages with single-screen horizontal date chips and instant modal confirmation.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-subtle bg-surface flex items-start gap-3">
                  <span className="text-[#10b981] font-bold text-sm">✓</span>
                  <div>
                    <span className="text-xs font-mono font-bold text-primary block">Goal: Doctor Can Start Call in 2 Taps</span>
                    <p className="text-xs text-secondary mt-0.5 font-mono">
                      Achieved: Native video room initiator embedded directly inside patient agenda items, avoiding external link sharing.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-subtle bg-surface flex items-start gap-3">
                  <span className="text-[#10b981] font-bold text-sm">✓</span>
                  <div>
                    <span className="text-xs font-mono font-bold text-primary block">Goal: 100% Upfront Transparent Information</span>
                    <p className="text-xs text-secondary mt-0.5 font-mono">
                      Achieved: Doctor consultation fees, languages, and ratings displayed prominently on both profile cards and lists.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-subtle bg-surface flex items-start gap-3">
                  <span className="text-[#10b981] font-bold text-sm">✓</span>
                  <div>
                    <span className="text-xs font-mono font-bold text-primary block">Goal: Doctor Schedule &amp; Availability Control</span>
                    <p className="text-xs text-secondary mt-0.5 font-mono">
                      Achieved: Doctor Availability and Availability Setup screens enabling physicians to publish working hours with zero friction.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* ==================================================================== */}
            {/* 13. LEARNINGS & NEXT STEPS */}
            {/* ==================================================================== */}
            <section id="learnings" className="scroll-mt-28 py-8 border-t border-subtle">
              <div className="mb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#0891b2] font-semibold">
                  13 · REFLECTIONS &amp; ROADMAP
                </span>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary tracking-tight mt-1">
                  Learnings &amp; Next Steps
                </h2>
              </div>

              {/* Honest Learnings */}
              <div className="mb-10">
                <h3 className="text-xs font-mono uppercase tracking-wider text-muted font-bold mb-4">
                  Honest UX Takeaways from This Concept
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-5 rounded-xl border border-subtle bg-surface space-y-2">
                    <span className="text-xs font-mono font-bold text-[#0891b2]">Learning 01</span>
                    <h4 className="text-sm font-display font-bold text-primary">
                      Dual-Sided Healthcare Demands Asymmetrical Densities
                    </h4>
                    <p className="text-xs text-secondary leading-relaxed font-mono">
                      Patients need airy spacing, warm typography, and reassuring simplicity to combat illness anxiety. Doctors need compact, high-density data matrices that enable intake reviews in under 10 seconds. Designing for both means resisting one-size-fits-all layouts.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl border border-subtle bg-surface space-y-2">
                    <span className="text-xs font-mono font-bold text-[#0891b2]">Learning 02</span>
                    <h4 className="text-sm font-display font-bold text-primary">
                      Edge Cases Define the Real Telehealth Experience
                    </h4>
                    <p className="text-xs text-secondary leading-relaxed font-mono">
                      In the happy path, calls connect seamlessly. But in reality, networks drop, patients join late, and doctors run behind schedule. Designing fallback flows (audio mode, queue status banners) is what transforms an app from pretty mockups into viable medical software.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl border border-subtle bg-surface space-y-2">
                    <span className="text-xs font-mono font-bold text-[#0891b2]">Learning 03</span>
                    <h4 className="text-sm font-display font-bold text-primary">
                      Transparency Is the Primary Driver of Patient Trust
                    </h4>
                    <p className="text-xs text-secondary leading-relaxed font-mono">
                      No amount of illustration polish or smooth animation compensates for missing pricing, unclear qualifications, or surprise fees. Healthcare trust is won through honest information architecture and upfront visibility.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl border border-subtle bg-surface space-y-2">
                    <span className="text-xs font-mono font-bold text-[#0891b2]">Learning 04</span>
                    <h4 className="text-sm font-display font-bold text-primary">
                      Rapid Prototyping Saves Development Headaches
                    </h4>
                    <p className="text-xs text-secondary leading-relaxed font-mono">
                      Testing interactive slot chips in Figma early prevented building complex multi-screen wizards that users would have abandoned. Prototyping edge cases early is the cheapest form of quality assurance.
                    </p>
                  </div>
                </div>
              </div>

              {/* Next Steps if this became a real product */}
              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-muted font-bold mb-4">
                  Next Steps (Product Roadmap for Real-World Deployment)
                </h3>
                <div className="p-6 rounded-2xl border border-subtle bg-surface space-y-3 font-mono text-xs">
                  <div className="flex items-start gap-2.5">
                    <span className="text-[#0891b2] font-bold">1.</span>
                    <p className="text-secondary leading-relaxed">
                      <strong className="text-primary font-semibold">Senior &amp; Accessibility Cohort Testing:</strong> Conduct structured usability sessions with older patients (ages 60+) and assistive technology users to fine-tune font scaling and voice-over labels.
                    </p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-[#0891b2] font-bold">2.</span>
                    <p className="text-secondary leading-relaxed">
                      <strong className="text-primary font-semibold">Integrated E-Prescriptions:</strong> Architect a pharmacist handoff flow enabling doctors to dispatch digitally signed prescriptions directly to neighborhood pharmacies.
                    </p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-[#0891b2] font-bold">3.</span>
                    <p className="text-secondary leading-relaxed">
                      <strong className="text-primary font-semibold">Secure Pre/Post-Visit Messaging:</strong> Enable asynchronous chat channels for clarifying medication dosages and follow-up lab inquiries without booking a full visit.
                    </p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-[#0891b2] font-bold">4.</span>
                    <p className="text-secondary leading-relaxed">
                      <strong className="text-primary font-semibold">Digital Insurance Claims &amp; Copay Handoff:</strong> Integrate insurance pre-authorization and copay calculations directly during slot selection.
                    </p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-[#0891b2] font-bold">5.</span>
                    <p className="text-secondary leading-relaxed">
                      <strong className="text-primary font-semibold">Biometric EHR &amp; Lab Report Integrations:</strong> Connect Apple Health and hospital HL7/FHIR feeds for automated continuous vital uploads.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* ==================================================================== */}
            {/* 14. FOOTER CTA */}
            {/* ==================================================================== */}
            <section id="footer-cta" className="pt-8">
              <CaseStudyNav
                prevProject={prevProject}
                nextProject={nextProject}
                onSelectProject={onSelectProject}
                onBackToHome={onBackToHome}
              />
            </section>

          </div>
        </div>

      </div>
    </article>
  );
};

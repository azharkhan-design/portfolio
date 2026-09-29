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

interface ScreenItem {
  id: string;
  title: string;
  step: string;
  role: 'Patient' | 'Doctor';
  flowGroup: 'booking' | 'telehealth' | 'doctor';
  src: string;
  takeaway: string;
}

export const HimsCaseStudyView: React.FC<HimsCaseStudyViewProps> = ({
  project,
  allProjects,
  onSelectProject,
  onBackToHome
}) => {
  const [zoomImage, setZoomImage] = useState<{ src: string; title: string } | null>(null);
  const [activeFlowTab, setActiveFlowTab] = useState<'all' | 'patient-booking' | 'telehealth' | 'doctor'>('all');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [project.id]);

  const activeProjects = allProjects.filter((p) => !p.hideCaseStudy);
  const currentIndex = activeProjects.findIndex((p) => p.id === project.id);
  const safeIndex = currentIndex !== -1 ? currentIndex : 0;
  const prevProject = activeProjects[(safeIndex - 1 + activeProjects.length) % activeProjects.length];
  const nextProject = activeProjects[(safeIndex + 1) % activeProjects.length];

  // All screens mapped with concise, human, designer-written takeaways
  const patientScreens: ScreenItem[] = [
    {
      id: 'p-splash',
      title: 'Splash Screen',
      step: '01',
      role: 'Patient',
      flowGroup: 'booking',
      src: '/images/projects/HIMS/Patient/Splash.png',
      takeaway: 'Welcoming branded entrance with a clean, calm medical aesthetic.'
    },
    {
      id: 'p-login',
      title: 'Login & Phone Auth',
      step: '02',
      role: 'Patient',
      flowGroup: 'booking',
      src: '/images/projects/HIMS/Patient/Login Screen.png',
      takeaway: 'Quick phone OTP sign-in with minimal fields to reduce friction when patients are unwell.'
    },
    {
      id: 'p-home',
      title: 'Home & Specialty Discovery',
      step: '03',
      role: 'Patient',
      flowGroup: 'booking',
      src: '/images/projects/HIMS/Patient/Patient Home-Option2.png',
      takeaway: 'Top search bar, 2x2 department shortcuts, and quick access to upcoming appointments.'
    },
    {
      id: 'p-spec',
      title: 'Department Directory',
      step: '04',
      role: 'Patient',
      flowGroup: 'booking',
      src: '/images/projects/HIMS/Patient/Select Speciality.png',
      takeaway: 'Organized by medical department so users find the right specialist without confusion.'
    },
    {
      id: 'p-list',
      title: 'Doctor Listing & Quick Filters',
      step: '05',
      role: 'Patient',
      flowGroup: 'booking',
      src: '/images/projects/HIMS/Patient/Doctor List.png',
      takeaway: 'Displays verified badges, consultation fees, ratings, and next available slot upfront.'
    },
    {
      id: 'p-details',
      title: 'Doctor Profile & Credentials',
      step: '06',
      role: 'Patient',
      flowGroup: 'booking',
      src: '/images/projects/HIMS/Patient/Doctor Details.png',
      takeaway: 'Full transparency: qualifications, years of experience, patient reviews, and clinic location.'
    },
    {
      id: 'p-slot',
      title: '3-Step Slot Picker',
      step: '07',
      role: 'Patient',
      flowGroup: 'booking',
      src: '/images/projects/HIMS/Patient/Slot Selection.png',
      takeaway: 'Horizontal 7-day strip with clear morning/afternoon chips instead of clunky dropdowns.'
    },
    {
      id: 'p-mode',
      title: 'Consultation Format',
      step: '08',
      role: 'Patient',
      flowGroup: 'booking',
      src: '/images/projects/HIMS/Patient/AppointmentType-Video-Audio.png',
      takeaway: 'Patients choose between HD Video or Audio-only consultation based on their connectivity.'
    },
    {
      id: 'p-pay',
      title: 'Transparent Checkout',
      step: '09',
      role: 'Patient',
      flowGroup: 'booking',
      src: '/images/projects/HIMS/Patient/Payment Method.png',
      takeaway: 'Clear cost breakdown with zero hidden fees before finalizing the booking.'
    },
    {
      id: 'p-confirm',
      title: 'Instant Confirmation',
      step: '10',
      role: 'Patient',
      flowGroup: 'booking',
      src: '/images/projects/HIMS/Patient/Appointment Confirned.png',
      takeaway: 'Clear confirmation checkmark with instant "Add to Calendar" and appointment overview.'
    },
    {
      id: 'p-my-appt',
      title: 'My Appointments & Lobby',
      step: '11',
      role: 'Patient',
      flowGroup: 'telehealth',
      src: '/images/projects/HIMS/Patient/My Appointment.png',
      takeaway: 'Live appointment dashboard with a 1-tap "Join Call" button enabled 10 minutes prior.'
    },
    {
      id: 'p-call',
      title: 'In-App Video Consultation',
      step: '12',
      role: 'Patient',
      flowGroup: 'telehealth',
      src: '/images/projects/HIMS/Patient/Live Call.png',
      takeaway: 'Distraction-free video stream with 1-tap fallback to audio if bandwidth drops.'
    },
    {
      id: 'p-end',
      title: 'Post-Call Summary & Prescriptions',
      step: '13',
      role: 'Patient',
      flowGroup: 'telehealth',
      src: '/images/projects/HIMS/Patient/Call Ended.png',
      takeaway: 'Immediate summary with digital prescription download and doctor rating.'
    }
  ];

  const doctorScreens: ScreenItem[] = [
    {
      id: 'd-splash',
      title: 'Provider Portal Splash',
      step: '01',
      role: 'Doctor',
      flowGroup: 'doctor',
      src: '/images/projects/HIMS/Doctor/Splash.png',
      takeaway: 'Dedicated clinical entry tailored for practicing physicians and hospital staff.'
    },
    {
      id: 'd-login',
      title: 'Provider Authentication',
      step: '02',
      role: 'Doctor',
      flowGroup: 'doctor',
      src: '/images/projects/HIMS/Doctor/Login.png',
      takeaway: 'Secure clinical login with biometric and medical license verification.'
    },
    {
      id: 'd-dash',
      title: 'Daily Clinical Dashboard',
      step: '03',
      role: 'Doctor',
      flowGroup: 'doctor',
      src: '/images/projects/HIMS/Doctor/Doctor Dashboard.png',
      takeaway: 'Glanceable overview of today’s patient load, pending appointments, and daily metrics.'
    },
    {
      id: 'd-queue',
      title: 'Upcoming Patients Queue',
      step: '04',
      role: 'Doctor',
      flowGroup: 'doctor',
      src: '/images/projects/HIMS/Doctor/Upcoming Patients.png',
      takeaway: 'Chronological consultation agenda showing live patient arrival and waiting status.'
    },
    {
      id: 'd-profile',
      title: 'Patient Medical Record & Call Start',
      step: '05',
      role: 'Doctor',
      flowGroup: 'doctor',
      src: '/images/projects/HIMS/Doctor/Patient Profile.png',
      takeaway: 'Chief complaints, recent vitals, and notes in one view with a direct "Start Consultation" CTA.'
    },
    {
      id: 'd-avail',
      title: 'Schedule & Availability Setup',
      step: '06',
      role: 'Doctor',
      flowGroup: 'doctor',
      src: '/images/projects/HIMS/Doctor/Doctor Availability.png',
      takeaway: 'Intuitive day-of-week toggles and time ranges to easily manage telehealth availability.'
    },
    {
      id: 'd-confirm',
      title: 'Availability Confirmed',
      step: '07',
      role: 'Doctor',
      flowGroup: 'doctor',
      src: '/images/projects/HIMS/Doctor/Availability Settedup.png',
      takeaway: 'Confirmation state showing published working hours synced directly to patient discovery.'
    }
  ];

  const allScreens = [...patientScreens, ...doctorScreens];

  const filteredScreens = activeFlowTab === 'all'
    ? allScreens
    : activeFlowTab === 'patient-booking'
    ? patientScreens.filter(s => s.flowGroup === 'booking')
    : activeFlowTab === 'telehealth'
    ? patientScreens.filter(s => s.flowGroup === 'telehealth')
    : doctorScreens;

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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Breadcrumb & Concept Badge */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-subtle mb-10">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-secondary hover:text-primary transition-colors cursor-pointer"
          >
            <span>←</span> Back to All Projects
          </button>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-subtle bg-surface text-xs font-mono text-muted">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0891b2]" />
              Self-Initiated Concept
            </span>
            <span className="text-xs font-mono text-muted uppercase tracking-wider">
              Case Study {project.number} / {String(activeProjects.length).padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* Hero Header */}
        <header className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-px bg-[#0891b2]" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#0891b2] font-semibold">
              Telehealth &amp; Medical Operations
            </span>
          </div>

          {/* Award Badge */}
          <div className="mb-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#FDD02D]/40 bg-[#FDD02D]/10 text-xs font-mono text-[#FDD02D]">
            <span>🏆</span>
            <span className="font-semibold text-primary">Vega Design Award · Silver Winner [add year]</span>
            <span className="text-muted text-[11px]">(Best Design, Healthcare)</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-primary tracking-tight leading-[1.08] mb-6">
            HIMS Medical Solution
          </h1>

          <p className="text-xl sm:text-2xl text-secondary font-normal max-w-3xl leading-relaxed">
            A dual-sided mobile healthcare product that untangles specialist appointment booking for patients while streamlining the daily queue and schedule for doctors.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-6">
            {project.tags.map((tag) => (
              <Tag key={tag} size="md">
                {tag}
              </Tag>
            ))}
          </div>
        </header>

        {/* Project Metadata Strip */}
        <section className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-6 border-y border-subtle mb-14 font-mono text-xs">
          <div>
            <span className="text-muted uppercase tracking-wider text-[10px] block mb-1">Role</span>
            <span className="font-semibold text-primary block">Lead UX &amp; UI Designer</span>
            <span className="text-muted text-[11px]">End-to-End Product Design</span>
          </div>

          <div>
            <span className="text-muted uppercase tracking-wider text-[10px] block mb-1">Timeline</span>
            <span className="font-semibold text-primary block">4 Weeks</span>
            <span className="text-muted text-[11px]">Concept &amp; Systems Sprint</span>
          </div>

          <div>
            <span className="text-muted uppercase tracking-wider text-[10px] block mb-1">Scope</span>
            <span className="font-semibold text-primary block">iOS Mobile Application</span>
            <span className="text-muted text-[11px]">Patient &amp; Doctor Flows</span>
          </div>

          <div>
            <span className="text-muted uppercase tracking-wider text-[10px] block mb-1">Toolkit</span>
            <span className="font-semibold text-primary block">Figma &amp; FigJam</span>
            <span className="text-muted text-[11px]">Research, IA &amp; UI Design</span>
          </div>
        </section>

        {/* Hero Mockup Cover */}
        <section className="mb-20">
          <div className="relative rounded-3xl overflow-hidden border border-subtle bg-surface shadow-2xl">
            <img
              src="/images/projects/HIMS/CoverImage.png"
              alt="HIMS Medical Solution App Preview"
              className="w-full h-auto object-cover cursor-zoom-in"
              onClick={() => setZoomImage({ src: '/images/projects/HIMS/CoverImage.png', title: 'HIMS App Ecosystem Cover' })}
            />
            <div className="px-5 py-3 border-t border-subtle bg-badge/30 flex items-center justify-between text-xs font-mono text-muted">
              <span>HIMS TELEHEALTH ECOSYSTEM · PATIENT &amp; DOCTOR WORKFLOWS</span>
              <span className="hidden sm:inline">CLICK IMAGE TO EXPAND ⊕</span>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* 01. THE PROBLEM & CONTEXT */}
        {/* ==================================================================== */}
        <section className="py-12 border-t border-subtle grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#0891b2] font-semibold">01 · CONTEXT</span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary tracking-tight mt-1">
              Two Sides of the Same Problem
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-8">
            <p className="text-base sm:text-lg text-secondary leading-relaxed">
              Most telehealth apps fail because they optimize for one side of the desk. Patients get lost in complex forms, while doctors struggle with clunky interfaces that make managing their daily schedule stressful.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Patient Friction */}
              <div className="p-6 rounded-2xl border border-subtle bg-surface flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#0891b2]" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary">For Patients</span>
                  </div>
                  <h3 className="text-base font-display font-bold text-primary mb-2">High drop-off &amp; decision fatigue</h3>
                  <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                    Patients struggle to find verified doctors in their specific department, encounter surprise fees late in the checkout flow, and face endless date/time dropdowns when they just want to book quickly.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-subtle text-[11px] font-mono text-muted">
                  Focus: 3-step booking &amp; 100% upfront pricing
                </div>
              </div>

              {/* Doctor Friction */}
              <div className="p-6 rounded-2xl border border-subtle bg-surface flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary">For Doctors</span>
                  </div>
                  <h3 className="text-base font-display font-bold text-primary mb-2">Administrative clutter &amp; late starts</h3>
                  <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                    Doctors juggle disjointed EHR tabs to check patient history, lack a clear real-time appointment agenda, and find it tedious to adjust their telehealth working hours on mobile.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-subtle text-[11px] font-mono text-muted">
                  Focus: Glanceable queue &amp; 1-tap call initiation
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* 02. RESEARCH & INSIGHTS */}
        {/* ==================================================================== */}
        <section className="py-12 border-t border-subtle grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#0891b2] font-semibold">02 · DISCOVERY</span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary tracking-tight mt-1">
              Key Insights &amp; What Needed Fixing
            </h2>
            <p className="text-xs font-mono text-muted mt-3 leading-relaxed">
              Audited existing platforms <code className="text-primary font-bold">[add competitor names]</code> and interviewed 3–5 patients and doctors to pinpoint where bookings fell apart.
            </p>
          </div>

          <div className="lg:col-span-8 space-y-4">
            <div className="p-5 rounded-2xl border border-subtle bg-surface">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-xs font-mono font-bold text-[#0891b2]">01</span>
                <h3 className="text-sm sm:text-base font-display font-bold text-primary">
                  Alphabetical lists don't work for medical symptoms
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-secondary leading-relaxed pl-6">
                Patients don’t search by doctor names; they look for departments (Cardiology, Dermatology, Dental). Categorizing by specialty reduced browse time significantly.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-subtle bg-surface">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-xs font-mono font-bold text-[#0891b2]">02</span>
                <h3 className="text-sm sm:text-base font-display font-bold text-primary">
                  Hidden fees destroy patient trust
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-secondary leading-relaxed pl-6">
                When consultation fees or credentials were tucked away inside sub-menus, users abandoned the app. Putting price, languages, and qualifications upfront restored confidence.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-subtle bg-surface">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-xs font-mono font-bold text-[#0891b2]">03</span>
                <h3 className="text-sm sm:text-base font-display font-bold text-primary">
                  Doctors need patient context in under 10 seconds
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-secondary leading-relaxed pl-6">
                Physicians don’t want deep multi-page files before a call. They need the chief complaint, age, vitals, and a direct "Start Consultation" button on one screen.
              </p>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* 03. TESTING & ITERATION (A/B TEST) */}
        {/* ==================================================================== */}
        <section className="py-12 border-t border-subtle grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#0891b2] font-semibold">03 · ITERATION</span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary tracking-tight mt-1">
              A/B Testing the Patient Home
            </h2>
            <p className="text-xs text-secondary mt-3 leading-relaxed">
              Tested two distinct home layouts with users to see which structure helped them find specialists faster without distraction.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
              {/* Option 1 */}
              <div className="p-5 rounded-2xl border border-subtle bg-surface space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase text-muted font-bold">Option 1 · Promo-Heavy</span>
                  <span className="text-[10px] font-mono text-muted px-2 py-0.5 rounded bg-badge">Archived</span>
                </div>
                <div
                  onClick={() => setZoomImage({ src: '/images/projects/HIMS/Patient/Patient Home-Option1.png', title: 'Option 1: Promo-Heavy Home' })}
                  className="relative aspect-[390/844] max-w-[240px] mx-auto rounded-[24px] overflow-hidden border border-subtle bg-neutral-950 cursor-zoom-in shadow-md hover:scale-[1.02] transition-transform"
                >
                  <img
                    src="/images/projects/HIMS/Patient/Patient Home-Option1.png"
                    alt="Patient Home Option 1"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <p className="text-xs text-secondary font-mono leading-relaxed pt-2 border-t border-subtle">
                  Promotional banners pushed department chips below the fold. Users took 40% longer to initiate a search.
                </p>
              </div>

              {/* Option 2 */}
              <div className="p-5 rounded-2xl border border-[#10b981]/50 bg-surface space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase text-[#10b981] font-bold">Option 2 · Action-First</span>
                  <span className="text-[10px] font-mono text-[#10b981] px-2 py-0.5 rounded bg-[#10b981]/10 font-bold">Selected ✓</span>
                </div>
                <div
                  onClick={() => setZoomImage({ src: '/images/projects/HIMS/Patient/Patient Home-Option2.png', title: 'Option 2: Action-First Home' })}
                  className="relative aspect-[390/844] max-w-[240px] mx-auto rounded-[24px] overflow-hidden border-2 border-[#10b981]/60 bg-neutral-950 cursor-zoom-in shadow-md hover:scale-[1.02] transition-transform"
                >
                  <img
                    src="/images/projects/HIMS/Patient/Patient Home-Option2.png"
                    alt="Patient Home Option 2"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <p className="text-xs text-secondary font-mono leading-relaxed pt-2 border-t border-subtle">
                  Elevated search bar, 2x2 scannable department grid, and surfaced upcoming appointment cards immediately.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* 04. FINAL DESIGNS & USER FLOWS */}
        {/* ==================================================================== */}
        <section className="py-12 border-t border-subtle">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#0891b2] font-semibold">04 · FINAL UI</span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary tracking-tight mt-1">
                The User Flows
              </h2>
              <p className="text-xs sm:text-sm text-secondary mt-1 max-w-xl">
                Click any phone screen to inspect the high-resolution interface.
              </p>
            </div>

            {/* Quick Flow Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl border border-subtle bg-surface">
              {[
                { key: 'all', label: `All Screens (${allScreens.length})` },
                { key: 'patient-booking', label: `Patient Booking (${patientScreens.filter(s => s.flowGroup === 'booking').length})` },
                { key: 'telehealth', label: `Teleconsultation (${patientScreens.filter(s => s.flowGroup === 'telehealth').length})` },
                { key: 'doctor', label: `Doctor Flow (${doctorScreens.length})` }
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveFlowTab(tab.key as any)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                    activeFlowTab === tab.key
                      ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-bold'
                      : 'text-secondary hover:text-primary hover:bg-badge'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Crisp Mobile Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredScreens.map((screen) => {
              const isDoctor = screen.role === 'Doctor';
              return (
                <div
                  key={screen.id}
                  className="p-4 rounded-2xl border border-subtle bg-surface flex flex-col justify-between hover:border-strong transition-all group"
                >
                  <div>
                    {/* Header: Badge & Step */}
                    <div className="flex items-center justify-between text-[11px] font-mono mb-2.5">
                      <span
                        className="px-2 py-0.5 rounded-md font-semibold text-[10px] uppercase"
                        style={{
                          backgroundColor: isDoctor ? 'rgba(16, 185, 129, 0.12)' : 'rgba(8, 145, 178, 0.12)',
                          color: isDoctor ? '#10b981' : '#0891b2'
                        }}
                      >
                        {screen.role} · {screen.step}
                      </span>
                      <span className="text-muted text-[10px]">390 × 844</span>
                    </div>

                    <h4 className="text-sm font-display font-bold text-primary mb-3">
                      {screen.title}
                    </h4>

                    {/* Phone Device Mockup Container */}
                    <div
                      onClick={() => setZoomImage({ src: screen.src, title: `${screen.role} Flow: ${screen.title}` })}
                      className="relative w-full aspect-[390/844] max-w-[220px] mx-auto rounded-[24px] p-1.5 bg-neutral-900 border-2 border-neutral-700/80 shadow-md cursor-zoom-in group/item overflow-hidden mb-3 select-none"
                    >
                      {/* Speaker Notch */}
                      <div className="absolute top-2.5 inset-x-0 flex justify-center z-10 pointer-events-none">
                        <div className="w-14 h-3 rounded-full bg-black/90 flex items-center justify-end px-1.5">
                          <span className="w-1 h-1 rounded-full bg-neutral-700" />
                        </div>
                      </div>

                      <div className="w-full h-full rounded-[18px] overflow-hidden bg-neutral-950 flex items-center justify-center">
                        <img
                          src={screen.src}
                          alt={screen.title}
                          className="w-full h-full object-cover object-top transition-transform duration-300 group-hover/item:scale-105"
                        />
                      </div>

                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/item:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="px-2.5 py-1 rounded-full bg-black/80 text-white text-[11px] font-mono">
                          Zoom ⊕
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Clean 1-sentence note */}
                  <p className="text-xs text-secondary font-mono leading-relaxed pt-3 border-t border-subtle">
                    {screen.takeaway}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ==================================================================== */}
        {/* 05. DESIGN SYSTEM & ACCESSIBILITY */}
        {/* ==================================================================== */}
        <section className="py-12 border-t border-subtle grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#0891b2] font-semibold">05 · DESIGN SYSTEM</span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary tracking-tight mt-1">
              Visual Clarity &amp; WCAG AA
            </h2>
            <p className="text-xs font-mono text-muted mt-3 leading-relaxed">
              Medical apps need calming aesthetics combined with high accessibility for elderly and distressed users.
            </p>
          </div>

          <div className="lg:col-span-8 space-y-6">
            {/* Color Palette */}
            <div>
              <span className="text-xs font-mono uppercase text-muted block mb-3 font-bold">Palette Tokens</span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs">
                <div className="p-3 rounded-xl border border-subtle bg-surface">
                  <div className="w-full h-8 rounded-lg bg-[#0891b2] mb-2" />
                  <span className="font-bold text-primary block">Clinical Cyan</span>
                  <span className="text-[11px] text-muted">#0891b2</span>
                </div>
                <div className="p-3 rounded-xl border border-subtle bg-surface">
                  <div className="w-full h-8 rounded-lg bg-[#10b981] mb-2" />
                  <span className="font-bold text-primary block">Health Emerald</span>
                  <span className="text-[11px] text-muted">#10b981</span>
                </div>
                <div className="p-3 rounded-xl border border-subtle bg-surface">
                  <div className="w-full h-8 rounded-lg bg-[#0f172a] mb-2" />
                  <span className="font-bold text-primary block">Deep Navy</span>
                  <span className="text-[11px] text-muted">#0f172a</span>
                </div>
                <div className="p-3 rounded-xl border border-subtle bg-surface">
                  <div className="w-full h-8 rounded-lg bg-[#f8fafc] dark:bg-neutral-800 border border-subtle mb-2" />
                  <span className="font-bold text-primary block">Soft Slate</span>
                  <span className="text-[11px] text-muted">#f8fafc</span>
                </div>
              </div>
            </div>

            {/* Accessibility Rules */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl border border-subtle bg-surface">
                <span className="text-[#10b981] font-mono font-bold text-xs block mb-1">✓ 44px Minimum Touch Targets</span>
                <p className="text-xs text-secondary leading-relaxed">
                  Date chips, call buttons, and filters meet Apple HIG standards so patients with tremors or on smaller phones never miss-tap.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-subtle bg-surface">
                <span className="text-[#10b981] font-mono font-bold text-xs block mb-1">✓ 4.5:1+ Color Contrast</span>
                <p className="text-xs text-secondary leading-relaxed">
                  All medical information passes WCAG 2.1 AA requirements. Statuses never rely solely on color; text and icons are always paired.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* 06. TAKEAWAYS & NEXT STEPS */}
        {/* ==================================================================== */}
        <section className="py-12 border-t border-subtle grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#0891b2] font-semibold">06 · OUTCOME</span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary tracking-tight mt-1">
              Validation &amp; Learnings
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-6">
            {/* Award Validation */}
            <div className="p-6 rounded-2xl border border-[#FDD02D]/40 bg-surface flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-mono text-[#FDD02D] font-bold uppercase tracking-wider block mb-1">
                  International Recognition
                </span>
                <h3 className="text-lg font-display font-bold text-primary">
                  Silver Winner – Best Design, Healthcare
                </h3>
                <p className="text-xs font-mono text-muted mt-1">Vega Digital Awards · [add year]</p>
              </div>
              <span className="text-3xl shrink-0">🏆</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-subtle bg-surface">
                <h4 className="text-xs font-mono font-bold uppercase text-primary mb-1.5">What Worked</h4>
                <p className="text-xs text-secondary leading-relaxed">
                  Synchronizing patient booking with the doctor's agenda solved the root cause of late-starting consultations without requiring manual admin coordination.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-subtle bg-surface">
                <h4 className="text-xs font-mono font-bold uppercase text-primary mb-1.5">Next Steps for Production</h4>
                <p className="text-xs text-secondary leading-relaxed">
                  If taking this to market: integrate electronic prescriptions directly with local pharmacy APIs and add asynchronous secure patient-doctor chat.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Navigation */}
        <section className="pt-8 border-t border-subtle">
          <CaseStudyNav
            prevProject={prevProject}
            nextProject={nextProject}
            onSelectProject={onSelectProject}
            onBackToHome={onBackToHome}
          />
        </section>

      </div>
    </article>
  );
};

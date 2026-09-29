import React, { useEffect } from 'react';
import type { Project } from '../../types/portfolio';
import { Tag } from '../ui/Tag';
import { ProjectMockup } from '../ui/ProjectMockup';
import { CaseStudyPlaceholder } from './CaseStudyPlaceholder';
import { CaseStudyNav } from './CaseStudyNav';
import { HimsCaseStudyView } from './HimsCaseStudyView';

interface CaseStudyViewProps {
  project: Project;
  allProjects: Project[];
  onSelectProject: (projectId: string) => void;
  onBackToHome: () => void;
}

export const CaseStudyView: React.FC<CaseStudyViewProps> = ({
  project,
  allProjects,
  onSelectProject,
  onBackToHome
}) => {
  if (project.id === 'hims-medical-solution') {
    return (
      <HimsCaseStudyView
        project={project}
        allProjects={allProjects}
        onSelectProject={onSelectProject}
        onBackToHome={onBackToHome}
      />
    );
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [project.id]);

  const activeProjects = allProjects.filter((p) => !p.hideCaseStudy);
  const currentIndex = activeProjects.findIndex((p) => p.id === project.id);
  const safeIndex = currentIndex !== -1 ? currentIndex : 0;
  const prevProject = activeProjects[(safeIndex - 1 + activeProjects.length) % activeProjects.length];
  const nextProject = activeProjects[(safeIndex + 1) % activeProjects.length];

  const cs = project.caseStudy;

  return (
    <article className="min-h-screen pt-8 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Breadcrumb / Back Link */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-subtle mb-10">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-secondary hover:text-primary transition-colors cursor-pointer"
          >
            <span>←</span> Back to All Projects
          </button>

          <div className="flex items-center gap-3">
            {project.externalUrl && (
              <a
                href={project.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-subtle bg-surface hover:border-strong text-xs font-mono font-medium text-primary hover:bg-badge transition-all"
              >
                <span>View on Behance</span>
                <span>↗</span>
              </a>
            )}
            <span className="text-xs font-mono text-muted uppercase tracking-wider">
              Case Study {project.number} / {String(activeProjects.length).padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* Header Hero Section */}
        <header className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-px bg-primary opacity-40"></span>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-muted font-semibold">
              {project.category}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-primary tracking-tight leading-[1.08] mb-6">
            {project.title}
          </h1>

          <p className="text-xl sm:text-2xl text-secondary font-normal max-w-4xl leading-relaxed">
            {project.description}
          </p>

          {/* Tags & Action Buttons */}
          <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Tag key={tag} size="md">
                  {tag}
                </Tag>
              ))}
            </div>

            {project.externalUrl && (
              <a
                href={project.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-xs font-mono font-semibold hover:scale-[1.03] active:scale-95 transition-all shadow-sm cursor-pointer"
              >
                <span>View Full Case Study on Behance</span>
                <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
              </a>
            )}
          </div>
        </header>

        {/* Project Metadata Strip */}
        <section className={`grid grid-cols-2 ${project.externalUrl ? 'sm:grid-cols-5' : 'sm:grid-cols-4'} gap-6 py-8 border-y border-subtle mb-16 font-mono text-xs`}>
          <div>
            <span className="text-muted uppercase tracking-wider text-[10px] block mb-1">Client</span>
            <span className="font-semibold text-primary">{project.client}</span>
          </div>

          <div>
            <span className="text-muted uppercase tracking-wider text-[10px] block mb-1">Industry</span>
            <span className="font-semibold text-primary">{cs.industry}</span>
          </div>

          <div>
            <span className="text-muted uppercase tracking-wider text-[10px] block mb-1">Role</span>
            <span className="font-semibold text-primary">{cs.role}</span>
          </div>

          <div>
            <span className="text-muted uppercase tracking-wider text-[10px] block mb-1">Platform</span>
            <span className="font-semibold text-primary">{cs.platform}</span>
          </div>

          {project.externalUrl && (
            <div>
              <span className="text-muted uppercase tracking-wider text-[10px] block mb-1">Live Presentation</span>
              <a
                href={project.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#0057ff] dark:text-[#38bdf8] hover:underline inline-flex items-center gap-1"
              >
                Behance ↗
              </a>
            </div>
          )}
        </section>

        {/* Hero Product Mockup / Large Frame */}
        <section className="mb-20">
          <div className="mb-4 flex items-center justify-between text-xs font-mono text-muted">
            <span>FIGURE 1.0 — HERO ECOSYSTEM OVERVIEW</span>
            <span>PRODUCTION DEPLOYMENT</span>
          </div>
          <ProjectMockup
            type={project.mockupType}
            title={project.title}
            category={project.category}
            client={project.client}
            imageUrl={project.imageUrl}
            className="w-full shadow-lg"
          />
        </section>

        {/* 01. Project Overview & Challenge */}
        <section className="py-12 border-t border-subtle grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-4">
            <span className="text-xs font-mono uppercase tracking-widest text-muted">01 · CONTEXT</span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary tracking-tight mt-1">
              Project Overview &amp; Challenge
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-6">
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-muted mb-2">The Background</h3>
              <p className="text-base sm:text-lg text-secondary leading-relaxed">
                {cs.overview}
              </p>
            </div>

            <div className="p-6 bg-secondary/40 border border-subtle rounded-sm">
              <h3 className="text-xs font-mono uppercase tracking-wider text-primary font-bold mb-2">The Core Challenge</h3>
              <p className="text-sm sm:text-base text-secondary leading-relaxed">
                {cs.challenge}
              </p>
            </div>
          </div>
        </section>

        {/* 02. Approach & Strategy */}
        <section className="py-12 border-t border-subtle grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-4">
            <span className="text-xs font-mono uppercase tracking-widest text-muted">02 · STRATEGY</span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary tracking-tight mt-1">
              Design Approach
            </h2>
          </div>

          <div className="lg:col-span-8">
            <p className="text-base sm:text-lg text-secondary leading-relaxed">
              {cs.approach}
            </p>
          </div>
        </section>

        {/* 03. Information Architecture */}
        <section className="py-12 border-t border-subtle">
          <div className="mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-muted">03 · STRUCTURE</span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary tracking-tight mt-1">
              {cs.informationArchitecture.title}
            </h2>
            <p className="text-base text-secondary mt-2 max-w-3xl">
              {cs.informationArchitecture.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cs.informationArchitecture.pillars.map((pillar, i) => (
              <div key={i} className="p-6 bg-surface border border-subtle rounded-sm">
                <div className="text-xs font-mono text-muted mb-2">Pillar {String(i + 1).padStart(2, '0')}</div>
                <h3 className="text-base font-display font-bold text-primary mb-4">{pillar.title}</h3>
                <ul className="space-y-2 text-xs sm:text-sm text-secondary">
                  {pillar.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2">
                      <span className="text-primary font-bold">·</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 04. User Flows */}
        <section className="py-12 border-t border-subtle">
          <div className="mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-muted">04 · INTERACTION PATHWAY</span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary tracking-tight mt-1">
              {cs.userFlows.title}
            </h2>
            <p className="text-base text-secondary mt-2 max-w-3xl">
              {cs.userFlows.description}
            </p>
          </div>

          {/* Stepper Flow Diagram */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {cs.userFlows.steps.map((step, sIdx) => (
              <div
                key={sIdx}
                className="relative p-5 bg-surface border border-subtle rounded-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-subtle mb-3">
                    <span className="text-[10px] font-mono text-muted uppercase">Stage {sIdx + 1}</span>
                    <span className="text-xs font-mono font-bold text-primary">0{sIdx + 1}</span>
                  </div>
                  <h3 className="text-sm font-display font-bold text-primary mb-2">{step.stage}</h3>
                  <p className="text-xs text-secondary mb-3 leading-relaxed">{step.action}</p>
                </div>
                <div className="pt-3 border-t border-subtle text-[11px] font-mono text-emerald-600 dark:text-emerald-400">
                  ✓ {step.outcome}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 05. Wireframes & Exploration */}
        <section className="py-12 border-t border-subtle">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
            <div className="lg:col-span-4">
              <span className="text-xs font-mono uppercase tracking-widest text-muted">05 · WIREFRAMES</span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary tracking-tight mt-1">
                Wireframe Exploration
              </h2>
            </div>
            <div className="lg:col-span-8">
              <p className="text-base text-secondary leading-relaxed mb-4">
                {cs.wireframes.description}
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-secondary font-mono">
                {cs.wireframes.highlights.map((h, hIdx) => (
                  <li key={hIdx} className="p-3 bg-secondary/30 border border-subtle rounded-sm flex items-start gap-2">
                    <span className="text-primary font-bold">▦</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <CaseStudyPlaceholder
            label="WIREFRAME EXPLORATION"
            subtitle="Low-Fidelity Density &amp; Navigation Testing"
            type="wireframe"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
              <div className="p-4 border border-dashed border-subtle rounded-sm bg-badge/30">
                <div className="text-[10px] text-muted uppercase pb-2 border-b border-subtle">Layout Concept A</div>
                <div className="space-y-2 mt-3">
                  <div className="h-4 bg-border-subtle/80 rounded-xs"></div>
                  <div className="h-16 bg-border-subtle/40 rounded-xs border border-subtle"></div>
                  <div className="h-4 bg-border-subtle/60 rounded-xs w-3/4"></div>
                </div>
              </div>
              <div className="p-4 border border-dashed border-subtle rounded-sm bg-badge/30">
                <div className="text-[10px] text-muted uppercase pb-2 border-b border-subtle">Layout Concept B (Selected)</div>
                <div className="space-y-2 mt-3">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-12 bg-border-subtle/60 rounded-xs"></div>
                    <div className="h-12 bg-border-subtle/60 rounded-xs"></div>
                  </div>
                  <div className="h-10 bg-border-subtle/40 rounded-xs"></div>
                </div>
              </div>
              <div className="p-4 border border-dashed border-subtle rounded-sm bg-badge/30">
                <div className="text-[10px] text-muted uppercase pb-2 border-b border-subtle">Mobile Viewport</div>
                <div className="space-y-2 mt-3 max-w-[120px] mx-auto">
                  <div className="h-20 bg-border-subtle/60 rounded-xs border border-subtle"></div>
                  <div className="h-3 bg-border-subtle/80 rounded-xs"></div>
                </div>
              </div>
            </div>
          </CaseStudyPlaceholder>
        </section>

        {/* 06. Design System Architecture */}
        <section className="py-12 border-t border-subtle">
          <div className="mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-muted">06 · DESIGN SYSTEM</span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary tracking-tight mt-1">
              Centralized Design Language
            </h2>
            <p className="text-base text-secondary mt-2 max-w-3xl">
              {cs.designSystem.summary}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="p-6 bg-surface border border-subtle rounded-sm">
              <h3 className="text-xs font-mono uppercase tracking-wider text-muted mb-4">Core Components</h3>
              <ul className="space-y-2 text-xs sm:text-sm text-secondary font-mono">
                {cs.designSystem.components.map((comp, cIdx) => (
                  <li key={cIdx} className="flex items-center gap-2">
                    <span className="text-primary font-bold">❖</span>
                    <span>{comp}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 bg-surface border border-subtle rounded-sm">
              <h3 className="text-xs font-mono uppercase tracking-wider text-muted mb-4">Design Tokens</h3>
              <div className="space-y-3 font-mono text-xs">
                {cs.designSystem.tokens.map((token, tIdx) => (
                  <div key={tIdx} className="p-2.5 bg-badge/40 rounded-sm border border-subtle">
                    <div className="text-[10px] text-muted uppercase">{token.category}</div>
                    <div className="text-primary font-medium mt-0.5">{token.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 07. Visual Design & Key Screens */}
        <section className="py-12 border-t border-subtle">
          <div className="mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-muted">07 · VISUAL DESIGN &amp; SCREENS</span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary tracking-tight mt-1">
              Key Interfaces &amp; Production Screens
            </h2>
            <p className="text-base text-secondary mt-2 max-w-3xl">
              {cs.visualDesign.philosophy}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {cs.keyScreens.screens.map((screen, sIdx) => (
              <div key={sIdx} className="border border-subtle bg-surface rounded-sm p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-subtle mb-3">
                    <span className="text-xs font-mono font-bold text-primary uppercase">{screen.title}</span>
                    <span className="text-[10px] font-mono text-muted uppercase px-2 py-0.5 bg-badge rounded">{screen.type}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-secondary mb-4 leading-relaxed">{screen.description}</p>
                </div>
                <CaseStudyPlaceholder
                  label={screen.title}
                  subtitle={`Platform Screen · ${screen.type}`}
                  type={screen.type === 'mobile' ? 'mobile' : 'screen'}
                />
              </div>
            ))}
          </div>
        </section>

        {/* 08. Outcome, Impact & Learnings */}
        <section className="py-12 border-t border-subtle grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Outcomes */}
          <div className="lg:col-span-6">
            <span className="text-xs font-mono uppercase tracking-widest text-muted">08 · RESULTS</span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary tracking-tight mt-1 mb-6">
              Outcome &amp; Business Impact
            </h2>

            <div className="space-y-4">
              {cs.outcomeImpact.map((outcome, oIdx) => (
                <div key={oIdx} className="p-4 bg-secondary/30 border border-subtle rounded-sm flex items-start gap-3">
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold font-mono">✓</span>
                  <p className="text-sm sm:text-base text-secondary leading-relaxed">{outcome}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Learnings */}
          <div className="lg:col-span-6">
            <span className="text-xs font-mono uppercase tracking-widest text-muted">09 · REFLECTIONS</span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary tracking-tight mt-1 mb-6">
              Product Learnings
            </h2>

            <div className="space-y-4">
              {cs.learnings.map((learning, lIdx) => (
                <div key={lIdx} className="p-4 bg-surface border border-subtle rounded-sm flex items-start gap-3">
                  <span className="text-primary font-bold font-mono">★</span>
                  <p className="text-sm sm:text-base text-secondary leading-relaxed">{learning}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* External Case Study Banner */}
        {project.externalUrl && (
          <section className="my-14 p-6 sm:p-8 rounded-2xl bg-surface border border-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#92D0AB] font-semibold block mb-1">
                Visual Deep Dive
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-primary tracking-tight">
                View the complete {project.title} presentation on Behance
              </h3>
              <p className="text-xs sm:text-sm text-secondary mt-1 max-w-xl">
                Explore full high-resolution mockups, complete flow diagrams, design systems, and interactive UI showcases.
              </p>
            </div>
            <a
              href={project.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-xs font-mono font-semibold hover:scale-105 active:scale-95 transition-all shadow-md shrink-0 cursor-pointer"
            >
              <span>Open on Behance</span>
              <span>↗</span>
            </a>
          </section>
        )}

        {/* Bottom Case Study Navigation */}
        <CaseStudyNav
          prevProject={prevProject}
          nextProject={nextProject}
          onSelectProject={onSelectProject}
          onBackToHome={onBackToHome}
        />
      </div>
    </article>
  );
};

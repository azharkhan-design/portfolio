import React from 'react';
import type { Project } from '../../types/portfolio';

interface CaseStudyNavProps {
  prevProject: Project;
  nextProject: Project;
  onSelectProject: (projectId: string) => void;
  onBackToHome: () => void;
}

export const CaseStudyNav: React.FC<CaseStudyNavProps> = ({
  prevProject,
  nextProject,
  onSelectProject,
  onBackToHome
}) => {
  return (
    <div className="pt-16 pb-8 border-t border-subtle">
      <div className="flex items-center justify-between pb-6 mb-8 border-b border-subtle">
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-muted">
          EXPLORE MORE WORK
        </span>
        <button
          onClick={onBackToHome}
          className="text-xs font-mono uppercase tracking-wider text-secondary hover:text-primary transition-colors cursor-pointer"
        >
          All Selected Projects ↑
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Previous Project */}
        <button
          onClick={() => onSelectProject(prevProject.id)}
          className="text-left p-6 border border-subtle hover:border-strong bg-surface rounded-sm transition-all group cursor-pointer"
        >
          <span className="text-[10px] font-mono uppercase tracking-widest text-muted flex items-center gap-1">
            <span>←</span> Previous Case Study ({prevProject.number})
          </span>
          <h4 className="text-xl font-display font-bold text-primary tracking-tight mt-2 group-hover:translate-x-0.5 transition-transform">
            {prevProject.title}
          </h4>
          <p className="text-xs text-secondary mt-1 font-mono uppercase truncate">
            {prevProject.category}
          </p>
        </button>

        {/* Next Project */}
        <button
          onClick={() => onSelectProject(nextProject.id)}
          className="text-left p-6 border border-subtle hover:border-strong bg-surface rounded-sm transition-all group cursor-pointer"
        >
          <span className="text-[10px] font-mono uppercase tracking-widest text-muted flex items-center gap-1 justify-between">
            <span>Next Case Study ({nextProject.number})</span>
            <span>→</span>
          </span>
          <h4 className="text-xl font-display font-bold text-primary tracking-tight mt-2 group-hover:translate-x-0.5 transition-transform">
            {nextProject.title}
          </h4>
          <p className="text-xs text-secondary mt-1 font-mono uppercase truncate">
            {nextProject.category}
          </p>
        </button>
      </div>
    </div>
  );
};

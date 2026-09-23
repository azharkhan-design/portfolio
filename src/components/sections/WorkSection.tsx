import React, { useState, useEffect, useRef } from 'react';
import type { Project } from '../../types/portfolio';
import { WorkCard } from '../ui/WorkCard';

interface WorkSectionProps {
  projects: Project[];
  onSelectProject: (projectId: string) => void;
}

export const WorkSection: React.FC<WorkSectionProps> = ({
  projects,
  onSelectProject
}) => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set([0, 1]));
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setVisibleItems((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [projects.length]);

  return (
    <section id="work" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8 sm:mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center -space-x-1">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FDD02D] shadow-xs" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#DD1251] shadow-xs" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#92D0AB] shadow-xs" />
            </div>
            <span className="text-[14px] font-mono uppercase tracking-[0.25em] text-[#92D0AB] font-semibold">
              SELECTED PROJECTS
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-primary">
                Selected Work
              </h2>
              <p className="mt-2 text-base sm:text-lg text-secondary font-normal max-w-2xl">
                Curated platforms, enterprise products, and design systems delivering measurable business impact.
              </p>
            </div>

            <div className="text-xs font-mono text-muted uppercase tracking-wider hidden sm:flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FDD02D]" />
              <span>{String(projects.length).padStart(2, '0')} Case Studies</span>
            </div>
          </div>
        </div>

        {/* 2-Column Grid of Showcase Project Cards with on-scroll entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, idx) => {
            const isVisible = visibleItems.has(idx);

            return (
              <div
                key={project.id}
                data-index={idx}
                ref={(el) => {
                  itemRefs.current[idx] = el;
                }}
                className={`transition-all duration-700 ease-out transform-gpu ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: `${(idx % 2) * 120}ms`,
                }}
              >
                <WorkCard
                  project={project}
                  onSelectProject={onSelectProject}
                />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

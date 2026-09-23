import React, { useRef, useState } from 'react';
import type { Project } from '../../types/portfolio';
import { ProjectMockup } from './ProjectMockup';

interface WorkCardProps {
  project: Project;
  onSelectProject: (projectId: string) => void;
}

export const WorkCard: React.FC<WorkCardProps> = ({ project, onSelectProject }) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Subtle 3D tilt calculation (max 3 degrees for clean restrained feel)
    const rotX = ((y - centerY) / centerY) * -3;
    const rotY = ((x - centerX) / centerX) * 3;

    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  const gradientBackdrop = project.backdropColor || 'from-[#1e3a8a] via-[#1d4ed8] to-[#172554]';

  const handleCardClick = () => {
    if (project.externalUrl) {
      window.open(project.externalUrl, '_blank', 'noopener,noreferrer');
    } else {
      onSelectProject(project.id);
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleCardClick}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      className="group relative rounded-3xl border border-subtle bg-surface dark:bg-[#0c0d10] text-primary p-3.5 sm:p-4 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden flex flex-col justify-between"
    >
      {/* Top Colorful Showcase Stage with Full-Bleed Image Filling Width & Height */}
      <div className="relative w-full aspect-[16/10] sm:aspect-[16/9.8] rounded-2xl overflow-hidden bg-surface-elevated dark:bg-neutral-950 flex items-center justify-center">
        {project.imageUrl ? (
          <div className="w-full h-full overflow-hidden relative">
            <img
              src={project.imageUrl}
              alt={`${project.client} · ${project.title}`}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-600 ease-out"
            />
            {/* Subtle bottom gradient shadow on hover for cinematic depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ) : (
          /* Vector Mockup Fallback */
          <div
            className={`w-full h-full p-4 sm:p-6 pb-0 flex items-end justify-center bg-gradient-to-br ${gradientBackdrop} relative`}
          >
            <div className="absolute inset-0 bg-radial-vignette opacity-20 pointer-events-none" />
            <div
              className={`w-full max-w-[94%] bg-surface dark:bg-[#14151a] rounded-t-xl shadow-2xl border-t border-x border-subtle/40 dark:border-white/10 overflow-hidden transform transition-all duration-500 ease-out ${
                isHovered ? '-translate-y-1 scale-[1.02]' : 'translate-y-2'
              }`}
            >
              <ProjectMockup
                type={project.mockupType}
                title={project.title}
                category={project.category}
                client={project.client}
                interactive={true}
                className="border-none shadow-none rounded-none aspect-[16/10]"
              />
            </div>
          </div>
        )}
      </div>

      {/* Bottom Content Area */}
      <div className="p-4 sm:p-5 pt-5 flex flex-col justify-between flex-1">
        <div>
          {/* Title with Category in Parens */}
          <h3 className="text-lg sm:text-xl font-display font-bold text-primary tracking-tight group-hover:text-primary/90 transition-colors">
            {project.title}{' '}
            <span className="text-xs sm:text-sm font-mono text-secondary font-normal">
              ({project.shortCategory || project.category.split('/')[0].trim()})
            </span>
          </h3>

          {/* Description */}
          <p className="text-xs sm:text-sm text-secondary font-normal leading-relaxed line-clamp-2 mt-2 mb-5">
            {project.description}
          </p>
        </div>

        {/* Bottom Pill Buttons Row & Beacon Indicator */}
        <div className="flex items-center justify-between gap-3 pt-2">
          {/* Pill Tags */}
          <div className="flex flex-wrap items-center gap-2">
            {/* Interactive View Case Study Button */}
            {project.externalUrl ? (
              <a
                href={project.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="group/btn relative inline-flex items-center gap-2 px-4 py-2 rounded-full border border-subtle bg-white dark:bg-neutral-900/90 text-xs font-mono font-semibold hover:bg-neutral-900 dark:hover:bg-white hover:border-neutral-900 dark:hover:border-white transition-all duration-300 hover:scale-[1.04] active:scale-95 cursor-pointer overflow-hidden select-none"
              >
                {/* Moving Sheen Light Beam Wipe on Hover */}
                <span
                  className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/30 dark:via-black/15 to-transparent pointer-events-none"
                  aria-hidden="true"
                />

                {/* Pulsing Accent Dot */}
                <span className="w-1.5 h-1.5 rounded-full bg-[#92D0AB] transition-transform duration-300 group-hover/btn:scale-125 shrink-0" />

                {/* Text Label - Explicit Contrast for Light & Dark Themes */}
                <span className="relative z-10 tracking-tight text-neutral-900 group-hover/btn:text-white dark:text-white dark:group-hover/btn:text-black font-semibold transition-colors duration-200">
                  View Case Study
                </span>

                {/* Dual Sliding Arrow Micro-Interaction */}
                <span className="relative z-10 w-3.5 h-3.5 overflow-hidden inline-flex items-center justify-center shrink-0 text-neutral-900 group-hover/btn:text-white dark:text-white dark:group-hover/btn:text-black transition-colors duration-200">
                  <span className="absolute inset-0 flex items-center justify-center text-xs transition-all duration-300 transform group-hover/btn:translate-x-3 group-hover/btn:-translate-y-3 group-hover/btn:opacity-0">
                    ↗
                  </span>
                  <span className="absolute inset-0 flex items-center justify-center text-xs transition-all duration-300 transform -translate-x-3 translate-y-3 opacity-0 group-hover/btn:translate-x-0 group-hover/btn:translate-y-0 group-hover/btn:opacity-100">
                    ↗
                  </span>
                </span>
              </a>
            ) : (
              <span
                className="group/btn relative inline-flex items-center gap-2 px-4 py-2 rounded-full border border-subtle bg-white dark:bg-neutral-900/90 text-xs font-mono font-semibold hover:bg-neutral-900 dark:hover:bg-white hover:border-neutral-900 dark:hover:border-white transition-all duration-300 hover:scale-[1.04] active:scale-95 cursor-pointer overflow-hidden select-none"
              >
                {/* Moving Sheen Light Beam Wipe on Hover */}
                <span
                  className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/30 dark:via-black/15 to-transparent pointer-events-none"
                  aria-hidden="true"
                />

                {/* Pulsing Accent Dot */}
                <span className="w-1.5 h-1.5 rounded-full bg-[#92D0AB] transition-transform duration-300 group-hover/btn:scale-125 shrink-0" />

                {/* Text Label - Explicit Contrast for Light & Dark Themes */}
                <span className="relative z-10 tracking-tight text-neutral-900 group-hover/btn:text-white dark:text-white dark:group-hover/btn:text-black font-semibold transition-colors duration-200">
                  View Case Study
                </span>

                {/* Dual Sliding Arrow Micro-Interaction */}
                <span className="relative z-10 w-3.5 h-3.5 overflow-hidden inline-flex items-center justify-center shrink-0 text-neutral-900 group-hover/btn:text-white dark:text-white dark:group-hover/btn:text-black transition-colors duration-200">
                  <span className="absolute inset-0 flex items-center justify-center text-xs transition-all duration-300 transform group-hover/btn:translate-x-3 group-hover/btn:-translate-y-3 group-hover/btn:opacity-0">
                    ↗
                  </span>
                  <span className="absolute inset-0 flex items-center justify-center text-xs transition-all duration-300 transform -translate-x-3 translate-y-3 opacity-0 group-hover/btn:translate-x-0 group-hover/btn:translate-y-0 group-hover/btn:opacity-100">
                    ↗
                  </span>
                </span>
              </span>
            )}

            {project.metrics && project.metrics[0] && (
              <span className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-full border border-subtle bg-badge/60 text-[11px] font-mono text-secondary">
                <span className="text-primary font-semibold">{project.metrics[0].value}</span>
              </span>
            )}
          </div>

          {/* Beacon live pulse */}
          <div className="flex items-center gap-1.5 text-xs font-mono text-secondary shrink-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

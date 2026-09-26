import React, { useState, useEffect, useRef } from 'react';
import { EXPERIENCES } from '../../data/experience';

interface ToolItem {
  id: string;
  name: string;
  group: 'DESIGN' | 'COLLABORATION & PROJECT' | 'AI & DESIGN';
  category: string;
  iconSrc: string;
}

const EXP_ACCENT_COLORS = ['#92D0AB', '#FDD02D', '#DD1251', '#92D0AB'];

export const ExperienceSection: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set([0]));
  const [hoveredTool, setHoveredTool] = useState<string | null>(null);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [cardMousePos, setCardMousePos] = useState<{ x: number; y: number } | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCardMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setHoveredIdx(index);
  };

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
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Ordered strictly: DESIGN -> COLLABORATION & PROJECT -> AI & DESIGN
  const tools: ToolItem[] = [
    // 1. DESIGN
    {
      id: 'figma',
      name: 'Figma',
      group: 'DESIGN',
      category: 'Design Systems & UI',
      iconSrc: '/images/tools/figma.svg'
    },
    {
      id: 'figjam',
      name: 'FigJam',
      group: 'DESIGN',
      category: 'Whiteboarding & Diagrams',
      iconSrc: '/images/tools/figjam.svg'
    },
    {
      id: 'adobexd',
      name: 'Adobe XD',
      group: 'DESIGN',
      category: 'UI/UX Prototyping',
      iconSrc: '/images/tools/adobexd.svg'
    },
    {
      id: 'sketch',
      name: 'Sketch',
      group: 'DESIGN',
      category: 'Digital Product Design',
      iconSrc: '/images/tools/sketch.svg'
    },
    {
      id: 'photoshop',
      name: 'Photoshop',
      group: 'DESIGN',
      category: 'Visual & Raster Craft',
      iconSrc: '/images/tools/photoshop.svg'
    },
    {
      id: 'illustrator',
      name: 'Illustrator',
      group: 'DESIGN',
      category: 'Vector Graphics',
      iconSrc: '/images/tools/illustrator.svg'
    },
    {
      id: 'balsamiq',
      name: 'Balsamiq',
      group: 'DESIGN',
      category: 'Low-Fi Wireframing',
      iconSrc: '/images/tools/balsamiq.svg'
    },

    // 2. COLLABORATION & PROJECT
    {
      id: 'jira',
      name: 'Jira',
      group: 'COLLABORATION & PROJECT',
      category: 'Sprint & Backlog Planning',
      iconSrc: '/images/tools/jira.svg'
    },
    {
      id: 'miro',
      name: 'Miro',
      group: 'COLLABORATION & PROJECT',
      category: 'Collaborative Canvas',
      iconSrc: '/images/tools/miro.svg'
    },
    {
      id: 'slack',
      name: 'Slack',
      group: 'COLLABORATION & PROJECT',
      category: 'Team Communication',
      iconSrc: '/images/tools/slack.svg'
    },

    // 3. AI & DESIGN
    {
      id: 'chatgpt',
      name: 'ChatGPT',
      group: 'AI & DESIGN',
      category: 'Generative AI Strategy',
      iconSrc: '/images/tools/chatgpt.svg'
    },
    {
      id: 'claude',
      name: 'Claude',
      group: 'AI & DESIGN',
      category: 'AI Synthesis & Logic',
      iconSrc: '/images/tools/claude.svg'
    },
    {
      id: 'claude-design',
      name: 'Claude Design',
      group: 'AI & DESIGN',
      category: 'AI Design Artifacts',
      iconSrc: '/images/tools/claude-design.svg'
    },
    {
      id: 'figma-make',
      name: 'Figma Make',
      group: 'AI & DESIGN',
      category: 'AI Design Generation',
      iconSrc: '/images/tools/figma-make.svg'
    },
    {
      id: 'ux-pilot',
      name: 'UX Pilot',
      group: 'AI & DESIGN',
      category: 'AI UX Flow Analysis',
      iconSrc: '/images/tools/uxpilot.svg'
    },
    {
      id: 'lovable',
      name: 'Lovable',
      group: 'AI & DESIGN',
      category: 'AI Fullstack Prototyping',
      iconSrc: '/images/tools/lovable.svg'
    },
    {
      id: 'antigravity',
      name: 'Antigravity',
      group: 'AI & DESIGN',
      category: 'Agentic AI Architecture',
      iconSrc: '/images/tools/antigravity.png'
    }
  ];

  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Experience Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Bold Statement & Philosophy */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Section label with 3 Overlapping Circles */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center -space-x-1">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FDD02D] shadow-xs" title="Gold · Clarity" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#DD1251] shadow-xs" title="Crimson · Speed" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#92D0AB] shadow-xs" title="Mint · Teamwork" />
              </div>
              <span className="text-[14px] font-mono uppercase tracking-[0.25em] text-[#92D0AB] font-semibold">
                WORK EXPERIENCE
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary tracking-tight leading-[1.15] mb-6">
              Obsessed with making complex software feel{' '}
              <span className="font-serif italic font-normal text-primary">
                ridiculously simple.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-secondary font-normal leading-relaxed max-w-xl">
              Untangling complex enterprise workflows, eliminating cognitive friction, and architecting design systems that scale across multi-tier products.
            </p>

            {/* 3-Color Pillars Footer Matching Philosophy */}
            <div className="mt-8 pt-6 border-t border-subtle flex flex-wrap items-center gap-5 text-xs font-mono text-muted uppercase tracking-wider">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#92D0AB]" />
                15+ Years of Impact
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#DD1251]" />
                Enterprise &amp; SaaS
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FDD02D]" />
                Global Scale
              </span>
            </div>
          </div>

          {/* Right Column: Stacked Experience Cards with On-Scroll Entrance & Hover Interaction */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            {EXPERIENCES.map((exp, index) => {
              const isVisible = visibleItems.has(index);
              const isHovered = hoveredIdx === index;
              const isAnyHovered = hoveredIdx !== null;
              const accentColor = EXP_ACCENT_COLORS[index % EXP_ACCENT_COLORS.length];

              return (
                <div
                  key={index}
                  data-index={index}
                  ref={(el) => {
                    itemRefs.current[index] = el;
                  }}
                  onMouseMove={(e) => handleCardMouseMove(e, index)}
                  onMouseEnter={(e) => handleCardMouseMove(e, index)}
                  onMouseLeave={() => {
                    setHoveredIdx(null);
                    setCardMousePos(null);
                  }}
                  style={{
                    transitionDelay: `${index * 80}ms`,
                  }}
                  className={`group relative rounded-2xl border border-subtle p-4 sm:p-5 transition-all duration-300 transform-gpu cursor-default select-none flex items-center justify-between gap-4 overflow-hidden ${
                    isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  } ${
                    isHovered
                      ? 'scale-[1.01] -translate-y-0.5'
                      : isAnyHovered
                      ? 'opacity-40'
                      : 'opacity-100'
                  }`}
                >
                  {/* Dynamic Cursor Spotlight Glow within Card */}
                  {isHovered && cardMousePos && (
                    <div
                      className="absolute pointer-events-none rounded-full blur-2xl transition-opacity duration-200"
                      style={{
                        width: '260px',
                        height: '260px',
                        left: `${cardMousePos.x - 130}px`,
                        top: `${cardMousePos.y - 130}px`,
                        background: `radial-gradient(circle, ${accentColor}25 0%, ${accentColor}08 45%, transparent 75%)`,
                      }}
                    />
                  )}

                  {/* Left Active Color Indicator Bar on Hover */}
                  <div
                    className={`absolute left-0 top-3.5 bottom-3.5 w-1 rounded-r-full transition-all duration-300 ${
                      isHovered ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-50'
                    }`}
                    style={{ backgroundColor: accentColor }}
                  />

                  {/* Left: Logo & Job Details */}
                  <div className="flex items-center gap-3.5 sm:gap-4 min-w-0 relative z-10">
                    {/* Company Logo Icon Badge */}
                    <div
                      className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white dark:bg-neutral-900 p-2 flex items-center justify-center shrink-0 border border-subtle select-none overflow-hidden transition-all duration-300 ${
                        isHovered ? 'scale-105' : ''
                      }`}
                    >
                      {exp.logoImage ? (
                        <img
                          src={exp.logoImage}
                          alt={exp.company}
                          className={`w-full h-full object-contain ${
                            exp.company.toLowerCase().includes('tanisha') || exp.company.toLowerCase().includes('fore')
                              ? 'invert dark:invert-0'
                              : ''
                          }`}
                        />
                      ) : (
                        <span className="font-display font-extrabold text-[11px] sm:text-xs text-neutral-900 dark:text-white uppercase tracking-wider">
                          {exp.logoText || exp.company.slice(0, 3)}
                        </span>
                      )}
                    </div>

                    {/* Role & Company info */}
                    <div className="min-w-0">
                      <h3 className="text-sm sm:text-base font-display font-bold text-primary tracking-tight truncate group-hover:text-primary transition-colors">
                        {exp.role}
                      </h3>
                      <div className="text-xs font-mono text-muted mt-0.5 flex items-center gap-1.5 truncate">
                        <span className="truncate">{exp.company}</span>
                        <span className="w-1 h-1 rounded-full bg-[#DD1251]/80 shrink-0" />
                        <span className="shrink-0">{exp.employmentType || 'Full Time'}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Date / Period */}
                  <div className="shrink-0 text-right relative z-10">
                    <span className={`text-xs sm:text-sm font-mono font-medium transition-colors ${
                      isHovered ? 'text-primary' : 'text-secondary'
                    }`}>
                      {exp.period}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Seamless Tool Icon Marquee Grouped by Design -> Collab -> AI */}
        <div className="mt-6 sm:mt-8">
          <div
            className="stack-loop-container group relative overflow-hidden select-none cursor-pointer pt-16 pb-3"
            style={{
              maskImage:
                'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.3) 2%, black 6%, black 94%, rgba(0,0,0,0.3) 98%, transparent 100%)',
              WebkitMaskImage:
                'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.3) 2%, black 6%, black 94%, rgba(0,0,0,0.3) 98%, transparent 100%)',
            }}
          >
            <div
              className="flex w-fit animate-stack-marquee items-center"
              style={{ animationPlayState: hoveredTool ? 'paused' : undefined }}
            >
              
              {/* Set 1 */}
              <div className="flex items-center gap-4 sm:gap-5 px-2 shrink-0">
                {tools.map((tool, idx) => {
                  const isHovered = hoveredTool === `1-${tool.id}`;
                  const nextTool = tools[idx + 1];
                  const isGroupBoundary = (nextTool && nextTool.group !== tool.group) || idx === tools.length - 1;

                  return (
                    <React.Fragment key={`1-${tool.id}`}>
                      <div
                        onMouseEnter={() => setHoveredTool(`1-${tool.id}`)}
                        onMouseLeave={() => setHoveredTool(null)}
                        className="relative group/tool shrink-0 flex flex-col items-center"
                      >
                        {/* Floating Tooltip with Name & Category Group */}
                        <div
                          className={`absolute bottom-full mb-2.5 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg bg-surface-elevated border border-subtle text-primary shadow-2xl pointer-events-none transition-all duration-200 z-30 whitespace-nowrap text-center ${
                            isHovered
                              ? 'opacity-100 scale-100 translate-y-0'
                              : 'opacity-0 scale-90 translate-y-2'
                          }`}
                        >
                          <div className="font-display font-semibold text-xs text-primary leading-tight">
                            {tool.name}
                          </div>
                          <div className="text-[9px] font-mono text-[#92D0AB] uppercase tracking-wider font-semibold mt-0.5">
                            {tool.group}
                          </div>
                          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-surface-elevated border-r border-b border-subtle rotate-45" />
                        </div>

                        {/* Tool Rounded Squircle Button */}
                        <div
                          className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl border flex items-center justify-center p-2.5 sm:p-3 transition-all duration-200 transform-gpu cursor-pointer select-none ${
                            isHovered
                              ? 'bg-surface border-white/50 shadow-xl scale-110 -translate-y-1'
                              : 'bg-surface/50 border-subtle hover:border-neutral-700/60 dark:hover:border-white/20'
                          }`}
                        >
                          <img
                            src={tool.iconSrc}
                            alt={tool.name}
                            className="w-6 h-6 sm:w-7 sm:h-7 object-contain select-none pointer-events-none"
                            loading="eager"
                          />
                        </div>
                      </div>

                      {/* Subtle Group Divider */}
                      {isGroupBoundary && (
                        <div className="h-6 w-px bg-neutral-700/40 dark:bg-white/10 mx-1 shrink-0 rounded-full select-none" />
                      )}
                    </React.Fragment>
                  );
                })}
              </div>

              {/* Set 2 for Seamless Repeating Loop */}
              <div className="flex items-center gap-4 sm:gap-5 px-2 shrink-0" aria-hidden="true">
                {tools.map((tool, idx) => {
                  const isHovered = hoveredTool === `2-${tool.id}`;
                  const nextTool = tools[idx + 1];
                  const isGroupBoundary = (nextTool && nextTool.group !== tool.group) || idx === tools.length - 1;

                  return (
                    <React.Fragment key={`2-${tool.id}`}>
                      <div
                        onMouseEnter={() => setHoveredTool(`2-${tool.id}`)}
                        onMouseLeave={() => setHoveredTool(null)}
                        className="relative group/tool shrink-0 flex flex-col items-center"
                      >
                        {/* Floating Tooltip */}
                        <div
                          className={`absolute bottom-full mb-2.5 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg bg-surface-elevated border border-subtle text-primary shadow-2xl pointer-events-none transition-all duration-200 z-30 whitespace-nowrap text-center ${
                            isHovered
                              ? 'opacity-100 scale-100 translate-y-0'
                              : 'opacity-0 scale-90 translate-y-2'
                          }`}
                        >
                          <div className="font-display font-semibold text-xs text-primary leading-tight">
                            {tool.name}
                          </div>
                          <div className="text-[9px] font-mono text-[#92D0AB] uppercase tracking-wider font-semibold mt-0.5">
                            {tool.group}
                          </div>
                          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-surface-elevated border-r border-b border-subtle rotate-45" />
                        </div>

                        {/* Tool Rounded Squircle Button */}
                        <div
                          className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl border flex items-center justify-center p-2.5 sm:p-3 transition-all duration-200 transform-gpu cursor-pointer select-none ${
                            isHovered
                              ? 'bg-surface border-white/50 shadow-xl scale-110 -translate-y-1'
                              : 'bg-surface/50 border-subtle hover:border-neutral-700/60 dark:hover:border-white/20'
                          }`}
                        >
                          <img
                            src={tool.iconSrc}
                            alt={tool.name}
                            className="w-6 h-6 sm:w-7 sm:h-7 object-contain select-none pointer-events-none"
                            loading="eager"
                          />
                        </div>
                      </div>

                      {/* Subtle Group Divider */}
                      {isGroupBoundary && (
                        <div className="h-6 w-px bg-neutral-700/40 dark:bg-white/10 mx-1 shrink-0 rounded-full select-none" />
                      )}
                    </React.Fragment>
                  );
                })}
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

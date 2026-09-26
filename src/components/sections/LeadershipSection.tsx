import React, { useState, useEffect, useRef } from 'react';

interface Principle {
  title: string;
  statement: string;
  tag: string;
  color: string;
  icon: (color: string) => React.ReactNode;
}

// 01: Teamwork - Connected rings & bridge
const IconAlignment = (color: string) => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="8.5" cy="12" r="5" />
    <circle cx="15.5" cy="12" r="5" />
    <path d="M12 8.5v7" stroke={color} strokeWidth="2.2" />
  </svg>
);

// 02: Clarity - Clean diamond star of simplicity
const IconClarity = (color: string) => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2.5l2.5 6 6 2.5-6 2.5-2.5 6-2.5-6-6-2.5 6-2.5z" fill={color} fillOpacity="0.25" stroke={color} strokeWidth="1.8" />
  </svg>
);

// 03: Speed - Modular blocks building velocity
const IconSystems = (color: string) => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" rx="2" />
    <rect x="14" y="3" width="7" height="7" rx="2" stroke={color} fill={color} fillOpacity="0.3" />
    <rect x="14" y="14" width="7" height="7" rx="2" />
    <rect x="3" y="14" width="7" height="7" rx="2" />
  </svg>
);

// 04: Research - Target & compass
const IconDirection = (color: string) => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="8.5" />
    <polygon points="12 6.5 15 12 12 10.5 9 12 12 6.5" fill={color} stroke={color} strokeWidth="1.2" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
  </svg>
);

// 05: Quality - Diamond of craft
const IconCraft = (color: string) => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 3.5h12l4 5.5-10 11.5L2 9z" fill={color} fillOpacity="0.25" stroke={color} strokeWidth="1.8" />
    <path d="M2 9h20" stroke="currentColor" opacity="0.5" />
  </svg>
);

const PRINCIPLES: Principle[] = [
  {
    title: 'Bring Teams Together',
    statement: 'Connecting product, engineering, and business early so everyone builds toward the same goal without confusion.',
    tag: 'Teamwork',
    color: '#92D0AB', // Mint
    icon: IconAlignment
  },
  {
    title: 'Make Hard Things Simple',
    statement: 'Turning messy workflows and confusing screens into clear, easy steps anyone can understand.',
    tag: 'Clarity',
    color: '#FDD02D', // Gold
    icon: IconClarity
  },
  {
    title: 'Ship Faster with Systems',
    statement: 'Creating reusable design pieces so designers and developers can build faster with fewer mistakes.',
    tag: 'Speed',
    color: '#DD1251', // Crimson
    icon: IconSystems
  },
  {
    title: 'Decide with Real Data',
    statement: 'Listening to real users and checking actual metrics before making big product choices.',
    tag: 'Research',
    color: '#92D0AB', // Mint
    icon: IconDirection
  },
  {
    title: 'Care About Quality & People',
    statement: 'Paying close attention to small design details while teaching and helping other designers grow.',
    tag: 'Quality',
    color: '#FDD02D', // Gold
    icon: IconCraft
  }
];

export const LeadershipSection: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [cardMousePos, setCardMousePos] = useState<{ x: number; y: number } | null>(null);
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set([0, 1]));
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

  return (
    <section id="leadership" className="py-20 md:py-32 relative overflow-hidden">
      {/* Subtle Ambient Radial Lighting with the 3 Colors */}
      <div className="absolute top-1/4 -left-24 w-96 h-96 bg-gradient-to-br from-[#92D0AB]/8 via-[#FDD02D]/5 to-[#DD1251]/4 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Sticky Editorial Manifesto (5 Cols) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            {/* Section label with 3-Color Micro Beacon */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center -space-x-1">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FDD02D] shadow-xs" title="Gold · Clarity" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#DD1251] shadow-xs" title="Crimson · Speed" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#92D0AB] shadow-xs" title="Mint · Teamwork" />
              </div>
              <span className="text-[14px] font-mono uppercase tracking-[0.25em] text-[#92D0AB] font-semibold">
                PHILOSOPHY
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-primary tracking-tight leading-[1.15] mb-6">
              How I think,<br />
              <span className="font-serif italic font-normal text-primary">
                work &amp; lead.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-secondary font-normal leading-relaxed max-w-md">
              Good design is not just about making things look nice. It is about making hard tools easy to use, helping teams move faster together, and building products that actually help people.
            </p>

            {/* 3-Color Philosophy Pillars Footer */}
            <div className="mt-8 pt-6 border-t border-subtle flex flex-wrap items-center gap-5 text-xs font-mono text-muted uppercase tracking-wider">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#92D0AB]" />
                Teamwork
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#DD1251]" />
                Speed
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FDD02D]" />
                Quality
              </span>
            </div>
          </div>

          {/* Right Column: Principles with Light Borders (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col gap-3.5 sm:gap-4">
            {PRINCIPLES.map((principle, idx) => {
              const isVisible = visibleItems.has(idx);
              const isHovered = hoveredIdx === idx;
              const isAnyHovered = hoveredIdx !== null;

              return (
                <div
                  key={principle.title}
                  data-index={idx}
                  ref={(el) => {
                    itemRefs.current[idx] = el;
                  }}
                  onMouseMove={(e) => handleCardMouseMove(e, idx)}
                  onMouseEnter={(e) => handleCardMouseMove(e, idx)}
                  onMouseLeave={() => {
                    setHoveredIdx(null);
                    setCardMousePos(null);
                  }}
                  className={`group relative rounded-2xl border border-subtle p-4 sm:p-5 transition-all duration-300 transform-gpu cursor-default select-none flex items-start gap-4 sm:gap-5 overflow-hidden ${
                    isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-4'
                  } ${
                    isHovered
                      ? 'scale-[1.01] -translate-y-0.5'
                      : isAnyHovered
                      ? 'opacity-40'
                      : 'opacity-100'
                  }`}
                  style={{
                    transitionDelay: `${idx * 40}ms`,
                  }}
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
                        background: `radial-gradient(circle, ${principle.color}25 0%, ${principle.color}08 45%, transparent 75%)`,
                      }}
                    />
                  )}

                  {/* Left Active Color Indicator Bar on Hover */}
                  <div
                    className={`absolute left-0 top-3.5 bottom-3.5 w-1 rounded-r-full transition-all duration-300 ${
                      isHovered ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-50'
                    }`}
                    style={{ backgroundColor: principle.color }}
                  />

                  {/* Bigger Prominent Left Icon Container */}
                  <div
                    className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center shrink-0 border transition-all duration-300 relative z-10 ${
                      isHovered
                        ? 'scale-105 shadow-sm'
                        : 'bg-surface/70 border-subtle/50 text-muted'
                    }`}
                    style={{
                      backgroundColor: isHovered ? `${principle.color}20` : undefined,
                      borderColor: isHovered ? `${principle.color}60` : undefined,
                      color: isHovered ? principle.color : undefined
                    }}
                  >
                    {principle.icon(principle.color)}
                  </div>

                  {/* Right Content Area: Title, Pill & Simple English Statement */}
                  <div className="flex-1 min-w-0 relative z-10">
                    
                    {/* Title & Tag Pill */}
                    <div className="flex items-center justify-between gap-3 mb-1.5">
                      <h3 className="text-base sm:text-lg font-display font-bold text-primary tracking-tight group-hover:text-primary transition-colors">
                        {principle.title}
                      </h3>

                      <span
                        className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full border transition-all shrink-0 select-none"
                        style={{
                          backgroundColor: isHovered ? `${principle.color}15` : undefined,
                          borderColor: isHovered ? `${principle.color}40` : undefined,
                          color: isHovered ? principle.color : undefined
                        }}
                      >
                        {principle.tag}
                      </span>
                    </div>

                    {/* Simple English Statement */}
                    <p className="text-xs sm:text-sm text-secondary leading-relaxed font-normal group-hover:text-primary transition-colors">
                      {principle.statement}
                    </p>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

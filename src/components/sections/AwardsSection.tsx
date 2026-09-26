import React, { useState } from 'react';
import { AWARDS, type AwardItem } from '../../data/awards';
import { SectionHeader } from '../ui/SectionHeader';

const AWARD_ACCENT_COLORS = ['#92D0AB', '#DD1251', '#FDD02D'];

export const AwardsSection: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [cardMousePos, setCardMousePos] = useState<{ x: number; y: number } | null>(null);
  const [stageMousePos, setStageMousePos] = useState<{ x: number; y: number } | null>(null);
  const [isStageHovered, setIsStageHovered] = useState<boolean>(false);

  const activeAward: AwardItem = AWARDS[activeIdx] || AWARDS[0];

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>, idx: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCardMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setHoveredIdx(idx);
    setActiveIdx(idx);
  };

  const handleStageMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setStageMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section id="awards" className="py-20 md:py-32 relative overflow-hidden">
      {/* Subtle background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#92D0AB]/5 blur-[160px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8 sm:mb-10">
          <SectionHeader
            label="HONORS & RECOGNITION"
            title={
              <>
                Industry{' '}
                <span className="font-serif italic font-normal text-primary">
                  awards.
                </span>
              </>
            }
            subtitle="Industry recognitions celebrating excellence in fintech UX and product design leadership."
            className="mb-0"
          />
        </div>

        {/* Split Stage Layout */}
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch relative z-10">
            
            {/* Left Column: 3 Interactive Equal-Height Award Tiles (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col gap-3.5 h-full justify-between">
              {AWARDS.map((award, idx) => {
                const isSelected = activeIdx === idx;
                const isCardHovered = hoveredIdx === idx;
                const isAnyHovered = hoveredIdx !== null;
                const isActive = isAnyHovered ? isCardHovered : isSelected;
                const accentColor = AWARD_ACCENT_COLORS[idx % AWARD_ACCENT_COLORS.length];

                return (
                  <div
                    key={award.id}
                    onClick={() => setActiveIdx(idx)}
                    onMouseMove={(e) => handleCardMouseMove(e, idx)}
                    onMouseEnter={(e) => handleCardMouseMove(e, idx)}
                    onMouseLeave={() => {
                      setHoveredIdx(null);
                      setCardMousePos(null);
                    }}
                    className={`group relative flex-1 rounded-2xl border border-subtle p-4 sm:p-5 transition-all duration-300 transform-gpu cursor-pointer select-none flex items-start gap-3.5 sm:gap-4 overflow-hidden ${
                      isActive
                        ? 'scale-[1.01] -translate-y-0.5'
                        : isAnyHovered
                        ? 'opacity-40'
                        : 'opacity-90'
                    }`}
                  >
                    {/* Dynamic Cursor Spotlight Glow within Card */}
                    {hoveredIdx === idx && cardMousePos && (
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

                    {/* Left Active Color Indicator Bar on Hover/Active */}
                    <div
                      className={`absolute left-0 top-3.5 bottom-3.5 w-1 rounded-r-full transition-all duration-300 ${
                        isActive ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-50'
                      }`}
                      style={{ backgroundColor: accentColor }}
                    />

                    {/* Company / Award Logo Icon Badge */}
                    <div
                      className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white dark:bg-neutral-900 p-2 flex items-center justify-center shrink-0 border border-subtle select-none overflow-hidden transition-all duration-300 relative z-10 ${
                        isActive ? 'scale-105' : ''
                      }`}
                    >
                      {award.logo ? (
                        <img
                          src={award.logo}
                          alt={award.issuer}
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <span className="text-lg">🏆</span>
                      )}
                    </div>

                    {/* Right Content Area */}
                    <div className="flex-1 min-w-0 flex flex-col justify-between h-full relative z-10">
                      <div>
                        {/* Category Pill & Index */}
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <span
                            className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full border transition-colors shrink-0"
                            style={{
                              borderColor: isActive ? `${accentColor}60` : undefined,
                              color: isActive ? accentColor : undefined,
                              backgroundColor: isActive ? `${accentColor}15` : undefined
                            }}
                          >
                            {award.category}
                          </span>
                          <span className="text-xs font-mono text-muted">
                            {String(idx + 1).padStart(2, '0')}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-sm sm:text-base font-display font-bold text-primary tracking-tight transition-colors line-clamp-2">
                          {award.title}
                        </h3>
                      </div>

                      {/* Issuer & Arrow */}
                      <div className="text-xs font-mono text-muted mt-2.5 flex items-center justify-between gap-2">
                        <span className="truncate flex items-center gap-1.5">
                          {award.id === 'unlocked-award' ? (
                            <>
                              <span>Unlocked Awards</span>
                              <span className="w-1.5 h-1.5 rounded-full bg-[#DD1251] shrink-0" />
                              <span>Inkspell Media</span>
                            </>
                          ) : (
                            <span>{award.issuer}</span>
                          )}
                        </span>
                        <span className={`shrink-0 transition-transform duration-300 ${isActive ? 'translate-x-1 text-primary' : 'opacity-40'}`}>
                          →
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Column: Full-Bleed Visual Stage Matching Left Height (7 Cols) */}
            <div className="lg:col-span-7 flex flex-col h-full">
              <div
                onMouseMove={handleStageMouseMove}
                onMouseEnter={() => setIsStageHovered(true)}
                onMouseLeave={() => {
                  setIsStageHovered(false);
                  setStageMousePos(null);
                }}
                className="relative rounded-2xl overflow-hidden border border-subtle bg-black shadow-2xl flex-1 flex flex-col justify-end transition-all duration-500 transform-gpu min-h-[380px] sm:min-h-[420px]"
              >
                {/* Dynamic Cursor Spotlight Glow within Photo Stage */}
                {isStageHovered && stageMousePos && (
                  <div
                    className="absolute pointer-events-none rounded-full blur-3xl transition-opacity duration-200 z-10"
                    style={{
                      width: '340px',
                      height: '340px',
                      left: `${stageMousePos.x - 170}px`,
                      top: `${stageMousePos.y - 170}px`,
                      background: 'radial-gradient(circle, rgba(146, 208, 171, 0.20) 0%, rgba(253, 208, 45, 0.12) 40%, transparent 75%)',
                    }}
                  />
                )}
                
                {/* Full-Bleed High-Res Image Filling 100% Height & Width */}
                <img
                  key={activeAward.id}
                  src={activeAward.image}
                  alt={activeAward.title}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out"
                />

                {/* Cinematic Gradient Overlay for Crisp Text Legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-transparent pointer-events-none" />

                {/* Bottom Content Layer */}
                <div className="relative z-20 p-5 sm:p-6 bg-gradient-to-t from-neutral-950 via-neutral-950/90 to-transparent">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[11px] font-mono font-semibold text-[#FDD02D] bg-[#FDD02D]/20 px-2.5 py-0.5 rounded-full border border-[#FDD02D]/30 backdrop-blur-sm">
                      {activeAward.badge}
                    </span>
                  </div>

                  <h4 className="text-base sm:text-xl font-display font-bold text-white tracking-tight leading-snug mb-2">
                    {activeAward.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-neutral-300 font-normal leading-relaxed">
                    {activeAward.citation}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

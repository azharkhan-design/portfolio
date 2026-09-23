import React, { useRef, useState } from 'react';
import type { ExpertiseItem } from '../../types/portfolio';

interface ExpertiseCardProps {
  item: ExpertiseItem;
  index?: number;
  isActive?: boolean;
  onClick?: () => void;
}

export const ExpertiseCard: React.FC<ExpertiseCardProps> = ({
  item,
  isActive = false,
  onClick
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const accentColor = item.accentColor || '#92D0AB';

  const renderIcon = (id: string) => {
    switch (id) {
      case 'product-design':
        return (
          // End-to-end product / layer compass
          <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        );
      case 'ux-strategy':
        return (
          // UX Discovery & Strategy: Strategic navigation compass / north star
          <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="currentColor" fillOpacity="0.2" />
          </svg>
        );
      case 'visual-design':
        return (
          // Visual Design & Craft: Vector pen tool & precision anchor
          <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 19l7-7 3 3-7 7-3-3z" />
            <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
            <path d="M2 2l7.586 7.586" />
            <circle cx="11" cy="11" r="2" />
          </svg>
        );
      case 'fintech-saas':
        return (
          // Legacy FinTech & SaaS
          <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
            <rect x="2" y="5" width="20" height="14" rx="2" />
            <line x1="2" y1="10" x2="22" y2="10" />
            <path d="M6 15h2M12 15h6" />
          </svg>
        );
      case 'design-systems':
        return (
          // Design systems: Modular token cube
          <svg className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
            <line x1="12" y1="22.08" x2="12" y2="12" />
          </svg>
        );
      case 'research-testing':
        return (
          // User research & testing: Heuristic search & benchmark
          <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
            <path d="M11 8v6M8 11h6" />
          </svg>
        );
      case 'wireframing-prototyping':
        return (
          // Wireframing & prototyping: Layout blueprint & motion
          <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <line x1="3" y1="9" x2="21" y2="9" />
            <line x1="9" y1="21" x2="9" y2="9" />
            <polygon points="14 13 17 15 14 17 14 13" fill="currentColor" />
          </svg>
        );
      case 'ai-assisted-design':
        return (
          // AI-assisted design: Intelligent neural spark / wand
          <svg className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        );
      default:
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
            <circle cx="12" cy="12" r="10" />
          </svg>
        );
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePos(null);
      }}
      onClick={onClick}
      className={`group relative rounded-2xl border transition-all duration-300 transform-gpu cursor-pointer overflow-hidden p-5 sm:p-6 flex flex-col select-none h-full ${
        isActive
          ? 'border-[#92D0AB] bg-surface shadow-xl ring-1 ring-[#92D0AB]/40'
          : 'border-subtle bg-surface/50 hover:border-neutral-700/80 dark:hover:border-white/20 hover:bg-surface/85 hover:shadow-xl hover:-translate-y-1'
      }`}
    >
      {/* 1. Dynamic Cursor Spotlight Glow Layer */}
      {mousePos && (
        <div
          className="absolute pointer-events-none rounded-full blur-2xl transition-opacity duration-300 -z-0"
          style={{
            width: '220px',
            height: '220px',
            left: `${mousePos.x - 110}px`,
            top: `${mousePos.y - 110}px`,
            background: `radial-gradient(circle, ${accentColor}24 0%, rgba(255, 255, 255, 0.04) 45%, transparent 70%)`,
            opacity: isHovered ? 1 : 0,
          }}
        />
      )}

      {/* Main Content Area */}
      <div>
        {/* 2. Top Row: Number Index, Category Micro-Badge & Domain Icon */}
        <div className="flex items-center justify-between mb-4 relative z-10">
          <div className="flex items-center gap-2">
            {item.number && (
              <span className="text-xs font-mono font-bold text-muted/80 tracking-wider">
                {item.number}
              </span>
            )}
            <span
              className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full border transition-colors"
              style={{
                color: accentColor,
                backgroundColor: `${accentColor}14`,
                borderColor: `${accentColor}33`,
              }}
            >
              {item.category}
            </span>
          </div>

          <div
            className="w-8 h-8 rounded-lg bg-black/5 dark:bg-white/5 border border-subtle flex items-center justify-center transition-all duration-200"
            style={{
              color: isHovered ? accentColor : undefined,
              borderColor: isHovered ? `${accentColor}55` : undefined,
            }}
          >
            {renderIcon(item.id)}
          </div>
        </div>

        {/* 3. Title */}
        <div className="relative z-10 mb-2.5">
          <h3 className="text-lg sm:text-[19px] font-display font-bold text-primary tracking-tight group-hover:text-[#92D0AB] transition-colors duration-200">
            {item.title}
          </h3>
        </div>

        {/* 4. Description */}
        <p className="relative z-10 text-xs sm:text-[13.5px] text-secondary leading-relaxed font-normal">
          {item.description}
        </p>
      </div>
    </div>
  );
};

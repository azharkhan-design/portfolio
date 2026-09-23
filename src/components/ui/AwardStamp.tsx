import React from 'react';
import { useSmoothScroll } from '../../context/SmoothScroll';

interface AwardStampProps {
  className?: string;
  onNavigate?: (sectionId: string) => void;
}

export const AwardStamp: React.FC<AwardStampProps> = ({ className = '', onNavigate }) => {
  const { scrollTo } = useSmoothScroll();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('awards');
    } else {
      const el = document.getElementById('awards');
      if (el) scrollTo(el, { offset: -50, duration: 1.2 });
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`group relative cursor-pointer select-none inline-flex items-center justify-center transition-transform duration-300 hover:scale-110 active:scale-95 ${className}`}
      title="Best Design Award Winner — Click to view Honors & Awards"
    >
      {/* Outer Ambient Glow */}
      <div className="absolute inset-0 rounded-full bg-[#FDD02D]/15 blur-md group-hover:bg-[#FDD02D]/30 transition-all duration-500" />

      {/* Rotating Badge Container */}
      <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full border border-[#FDD02D]/40 bg-surface/80 backdrop-blur-md shadow-lg flex items-center justify-center overflow-hidden">
        
        {/* Rotating Circular Text */}
        <svg
          className="w-full h-full animate-[spin_18s_linear_infinite] group-hover:[animation-play-state:paused] transform-gpu"
          viewBox="0 0 100 100"
        >
          <defs>
            <path
              id="stampCirclePath"
              d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
            />
          </defs>
          <text
            className="text-[8.8px] font-mono font-bold uppercase tracking-[0.24em] fill-current text-primary/80 group-hover:text-[#FDD02D] transition-colors"
          >
            <textPath href="#stampCirclePath" startOffset="0%">
              ★ BEST DESIGN AWARD WINNER ★ UNLOCKED ★
            </textPath>
          </text>
        </svg>

        {/* Center Trophy / Medal Emblem */}
        <div className="absolute inset-0 m-auto w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#FDD02D]/15 border border-[#FDD02D]/40 flex flex-col items-center justify-center shadow-xs group-hover:bg-[#FDD02D] group-hover:text-black transition-all duration-300">
          <span className="text-base sm:text-lg leading-none transform group-hover:scale-115 transition-transform duration-300">
            🏆
          </span>
        </div>

      </div>

      {/* Floating Hover Indicator Badge */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-surface-elevated border border-subtle text-primary text-[9px] font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-md">
        View Award ↗
      </div>
    </div>
  );
};

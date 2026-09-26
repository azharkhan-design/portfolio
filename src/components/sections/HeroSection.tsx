import React from 'react';
import BorderGlow from '../ui/BorderGlow';
import { FlickeringGrid } from '../ui/FlickeringGrid';
import { KineticName } from '../ui/KineticName';
import { TypewriterText, type TypewriterSequenceItem } from '../ui/TypewriterText';
import { LogoLoop } from '../ui/LogoLoop';
import { AwardStamp } from '../ui/AwardStamp';
import { useTheme } from '../../context/ThemeContext';

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
}

const HERO_SEQUENCE: TypewriterSequenceItem[] = [
  { type: 'phrase', text: 'I Research + I Design + I Lead' },
  {
    type: 'rotating-slot',
    prefix: 'I Architect',
    suffix: 'Platforms',
    slots: [
      'Finance & Banking',
      'Enterprise SaaS',
      'Healthcare',
      'Education',
      'E-commerce',
      'Real Estate'
    ],
    slotDuration: 2200,
  },
  { type: 'phrase', text: 'I Build Scalable Design Systems' },
  { type: 'phrase', text: 'I Turn Complexity into Simple Clarity' },
];

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section
      id="hero"
      className="relative min-h-[96vh] sm:min-h-screen flex flex-col justify-between pt-28 sm:pt-32 md:pt-36 pb-0 overflow-hidden"
    >
      {/* Top Edge Pixel Grid Animation (inspired by aryankarma.com) */}
      <div className="absolute top-0 left-0 right-0 h-[110px] sm:h-[135px] overflow-hidden pointer-events-none z-0 select-none">
        <div
          className="h-full w-full"
          style={{
            maskImage: 'linear-gradient(to bottom, black 0%, rgba(0,0,0,0.85) 30%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 0%, rgba(0,0,0,0.85) 30%, transparent 100%)',
          }}
        >
          <FlickeringGrid
            squareSize={3}
            gridGap={5}
            flickerChance={0.25}
            colors={['#FDD02D', '#DD1251', '#92D0AB']}
            transitionSpeed={0.22}
            maxOpacity={isDark ? 0.36 : 0.25}
          />
        </div>
      </div>

      {/* Subtle Background Ambient Radial Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[500px] bg-neutral-200/40 dark:bg-neutral-800/20 blur-[140px] rounded-full pointer-events-none -z-10" />

      {/* Floating Rotating Award Stamp (Top-Right of Hero Banner) */}
      <div className="hidden md:block absolute top-28 sm:top-32 right-6 lg:right-16 z-20">
        <AwardStamp onNavigate={onNavigate} />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto py-8 flex flex-col items-center justify-center text-center">

        {/* Award Winner Badge Chip */}
        <div className="mb-3">
          <button
            onClick={() => onNavigate('awards')}
            className="group/badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#FDD02D]/40 bg-[#FDD02D]/10 hover:bg-[#FDD02D]/20 text-xs font-mono text-primary cursor-pointer shadow-xs transition-all hover:scale-105"
            title="Click to view Award Details"
          >
            <span className="text-sm">🏆</span>
            <span className="font-semibold text-primary dark:text-[#f5f5f5]">Best Design Award Winner</span>
            <span className="text-[#FDD02D] font-medium group-hover/badge:translate-x-0.5 transition-transform flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DD1251] shrink-0" />
              <span>Unlocked Awards ↗</span>
            </span>
          </button>
        </div>

        {/* Big Kinetic Animated Name with Staggered Entrance */}
        <div className="mb-2 flex flex-col items-center">
          <span className="text-[16px] font-mono uppercase tracking-[0.2em] text-muted mb-2">
            Hi I'am
          </span>
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[6rem] text-primary leading-[1.02] tracking-tighter">
            <KineticName name="Azhar.Khan" />
          </h1>
          <span className="text-[12px] font-mono font-semibold uppercase tracking-[0.15em] text-[#92D0AB] mt-2.5 flex items-center justify-center gap-2">
            <span>Lead Product Designer</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#DD1251] shrink-0" />
            <span>15+ years</span>
          </span>
        </div>

        {/* Apple-style Dynamic Subtext Animation */}
        <div className="flex items-center justify-center text-2xl sm:text-3xl md:text-4xl font-display font-semibold text-secondary tracking-tight mb-8">
          <TypewriterText
            sequence={HERO_SEQUENCE}
            duration={3400}
            className="text-primary text-center"
          />
        </div>

        {/* Designed Across Geographical Badges */}
        <div className="mb-10 w-full flex flex-col items-center justify-center">
          <div className="flex items-center gap-2.5 mb-3.5">
            <div className="flex items-center -space-x-1">
              <span className="w-2 h-2 rounded-full bg-[#FDD02D] shadow-xs" />
              <span className="w-2 h-2 rounded-full bg-[#DD1251] shadow-xs" />
              <span className="w-2 h-2 rounded-full bg-[#92D0AB] shadow-xs" />
            </div>
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-muted font-medium">
              DESIGNED ACROSS
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-subtle bg-surface text-xs font-mono text-secondary hover:text-primary shadow-xs transition-all">
              <span className="text-sm">🇺🇸</span>
              <span>USA</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-subtle bg-surface text-xs font-mono text-secondary hover:text-primary shadow-xs transition-all">
              <span className="text-sm">🇸🇦</span>
              <span>KSA</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-subtle bg-surface text-xs font-mono text-secondary hover:text-primary shadow-xs transition-all">
              <span className="text-sm">🇦🇪</span>
              <span>Dubai</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-subtle bg-surface text-xs font-mono text-secondary hover:text-primary shadow-xs transition-all">
              <span className="text-sm">🇦🇪</span>
              <span>Abu Dhabi</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-subtle bg-surface text-xs font-mono text-secondary hover:text-primary shadow-xs transition-all">
              <span className="text-sm">🇮🇳</span>
              <span>India</span>
            </span>
          </div>
        </div>

        {/* Let's Talk CTA Button */}
        <div className="flex items-center justify-center">
          {isDark ? (
            <BorderGlow
              edgeSensitivity={30}
              glowColor="40 80 80"
              backgroundColor="#0c0d10"
              borderRadius={22}
              glowRadius={35}
              glowIntensity={1.2}
              coneSpread={28}
              animated={false}
              colors={['#c084fc', '#f472b6', '#38bdf8']}
              onClick={() => onNavigate('contact')}
              className="cursor-pointer group hover:scale-[1.03] active:scale-[0.98] transition-transform duration-300 shadow-md hover:shadow-lg"
            >
              <button
                onClick={() => onNavigate('contact')}
                className="relative z-10 w-full inline-flex items-center justify-center gap-2.5 px-8 py-3.5 sm:px-10 sm:py-4 text-sm sm:text-base font-display font-semibold text-primary dark:text-[#f5f5f5] cursor-pointer"
              >
                <span>Let's Talk</span>
                <span
                  className="text-base sm:text-lg transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-secondary dark:text-neutral-400 group-hover:text-primary dark:group-hover:text-white"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </button>
            </BorderGlow>
          ) : (
            /* Light Theme: Luxury Obsidian Pill with Tracing Mint Border Beam & Dual-Arrow Swap */
            <div
              onClick={() => onNavigate('contact')}
              className="group relative p-[1.5px] rounded-[22px] overflow-hidden cursor-pointer hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 select-none inline-flex"
            >
              {/* Tracing border beam */}
              <span
                className="absolute inset-[-250%] animate-border-beam pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    'conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent 270deg, #92D0AB 360deg)',
                }}
                aria-hidden="true"
              />

              {/* Inner Obsidian Button */}
              <button
                onClick={() => onNavigate('contact')}
                className="relative z-10 w-full inline-flex items-center justify-center gap-3 px-8 py-3.5 sm:px-10 sm:py-4 rounded-[20px] bg-neutral-900 text-white font-display font-semibold text-sm sm:text-base tracking-tight hover:bg-neutral-800 transition-all duration-300 cursor-pointer overflow-hidden shadow-none"
              >
                {/* Moving Sheen Light Beam Wipe on Hover */}
                <span
                  className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"
                  aria-hidden="true"
                />

                {/* Pulsing Mint Accent Dot */}
                <span className="w-2 h-2 rounded-full bg-[#92D0AB] group-hover:scale-125 transition-transform duration-300 shrink-0" />

                {/* Text */}
                <span className="relative z-10 tracking-tight">Let's Talk</span>

                {/* Dual Sliding Arrow Micro-Interaction */}
                <span className="relative z-10 w-4 h-4 overflow-hidden inline-flex items-center justify-center shrink-0">
                  <span className="absolute inset-0 flex items-center justify-center text-sm sm:text-base transition-all duration-300 transform group-hover:translate-x-3 group-hover:-translate-y-3 group-hover:opacity-0 text-neutral-300">
                    ↗
                  </span>
                  <span className="absolute inset-0 flex items-center justify-center text-sm sm:text-base transition-all duration-300 transform -translate-x-3 translate-y-3 opacity-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 text-[#92D0AB]">
                    ↗
                  </span>
                </span>
              </button>
            </div>
          )}
        </div>

      </div>

      {/* Infinite Animated Logo Loop Strip Anchored at the Edge Base */}
      <div className="w-full relative z-10 mt-auto">
        <LogoLoop />
      </div>
    </section>
  );
};

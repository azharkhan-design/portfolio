import React, { useState } from 'react';

interface ToolItem {
  id: string;
  name: string;
  category: string;
  icon: React.ReactNode;
}

export const StackSection: React.FC = () => {
  const [hoveredTool, setHoveredTool] = useState<string | null>(null);

  const tools: ToolItem[] = [
    {
      id: 'figma',
      name: 'Figma',
      category: 'Design Systems & UI',
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 38 57" fill="none">
          <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
          <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
          <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
          <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
          <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
        </svg>
      )
    },
    {
      id: 'framer',
      name: 'Framer',
      category: 'Interactive Web & UI',
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z"/>
        </svg>
      )
    },
    {
      id: 'photoshop',
      name: 'Photoshop',
      category: 'Visual & Raster Craft',
      icon: (
        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#001E36] border border-[#31A8FF]/40 text-[#31A8FF] flex items-center justify-center font-bold text-xs sm:text-sm font-mono tracking-tighter">
          Ps
        </div>
      )
    },
    {
      id: 'aftereffects',
      name: 'After Effects',
      category: 'Motion Design & Lottie',
      icon: (
        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#00005B] border border-[#9999FF]/40 text-[#9999FF] flex items-center justify-center font-bold text-xs sm:text-sm font-mono tracking-tighter">
          Ae
        </div>
      )
    },
    {
      id: 'illustrator',
      name: 'Illustrator',
      category: 'Vector Graphics',
      icon: (
        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#330000] border border-[#FF9A00]/40 text-[#FF9A00] flex items-center justify-center font-bold text-xs sm:text-sm font-mono tracking-tighter">
          Ai
        </div>
      )
    },
    {
      id: 'analytics',
      name: 'Google Analytics',
      category: 'Telemetry & UX Metrics',
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none">
          <path d="M18 20V10" stroke="#F9AB00" strokeWidth="3" strokeLinecap="round"/>
          <path d="M12 20V4" stroke="#E37400" strokeWidth="3" strokeLinecap="round"/>
          <path d="M6 20V15" stroke="#F9AB00" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      id: 'chatgpt',
      name: 'ChatGPT / OpenAI',
      category: 'Generative AI Strategy',
      icon: (
        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#10A37F]/15 border border-[#10A37F]/40 flex items-center justify-center p-1">
          <svg className="w-full h-full text-[#10A37F]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1683a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4947zM3.6 18.3047a4.4708 4.4708 0 0 1-.535-3.0141l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.14-1.6455z"/>
          </svg>
        </div>
      )
    },
    {
      id: 'claude',
      name: 'Claude / Anthropic',
      category: 'AI Architecture & Logic',
      icon: (
        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#D97706]/15 border border-[#D97706]/40 flex items-center justify-center p-1 text-[#D97706]">
          <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"/>
          </svg>
        </div>
      )
    },
    {
      id: 'midjourney',
      name: 'Midjourney',
      category: 'Generative Visual Direction',
      icon: (
        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-sky-500/15 border border-sky-400/40 flex items-center justify-center p-1 text-sky-400">
          <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3L2 12h5v8h10v-8h5L12 3z"/>
          </svg>
        </div>
      )
    },
    {
      id: 'linear',
      name: 'Linear / Trello',
      category: 'Product Roadmapping',
      icon: (
        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#5E6AD2]/15 border border-[#5E6AD2]/40 text-[#5E6AD2] flex items-center justify-center p-1">
          <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM9 17H6V7h3v10zm5-4h-3V7h3v6zm5 2h-3V7h3v8z"/>
          </svg>
        </div>
      )
    }
  ];

  return (
    <section id="stack" className="py-12 md:py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center -space-x-1">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FDD02D] shadow-xs" title="Gold" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#DD1251] shadow-xs" title="Crimson" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#92D0AB] shadow-xs" title="Mint" />
          </div>
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#92D0AB] font-semibold">
            STACK &amp; AI TOOLING
          </span>
        </div>

        {/* Seamless Infinite Auto-Scroll Track with Ample Top Clearance for Floating Tooltips */}
        <div
          className="stack-loop-container group relative overflow-hidden select-none cursor-pointer pt-14 pb-4"
          style={{
            maskImage:
              'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.3) 2%, black 8%, black 92%, rgba(0,0,0,0.3) 98%, transparent 100%)',
            WebkitMaskImage:
              'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.3) 2%, black 8%, black 92%, rgba(0,0,0,0.3) 98%, transparent 100%)',
          }}
        >
          <div className="flex w-fit animate-stack-marquee group-hover:[animation-play-state:paused] items-center">
            
            {/* Set 1 */}
            <div className="flex items-center gap-6 sm:gap-8 px-4 shrink-0">
              {tools.map((tool) => {
                const isHovered = hoveredTool === `1-${tool.id}`;

                return (
                  <div
                    key={`1-${tool.id}`}
                    onMouseEnter={() => setHoveredTool(`1-${tool.id}`)}
                    onMouseLeave={() => setHoveredTool(null)}
                    className="relative group/tool shrink-0 flex flex-col items-center"
                  >
                    {/* Floating Tooltip with Arrow Pointer */}
                    <div
                      className={`absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg bg-surface-elevated border border-subtle text-primary shadow-2xl pointer-events-none transition-all duration-200 z-30 whitespace-nowrap text-center ${
                        isHovered
                          ? 'opacity-100 scale-100 translate-y-0'
                          : 'opacity-0 scale-90 translate-y-2'
                      }`}
                    >
                      <span className="font-display font-semibold text-xs text-primary">
                        {tool.name}
                      </span>
                      {/* Arrow indicator */}
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-surface-elevated border-r border-b border-subtle rotate-45" />
                    </div>

                    {/* Tool Rounded Button */}
                    <div
                      className={`w-13 h-13 sm:w-15 sm:h-15 rounded-2xl border flex items-center justify-center p-3 transition-all duration-300 transform-gpu cursor-pointer select-none ${
                        isHovered
                          ? 'bg-surface border-white/50 shadow-xl scale-115 -translate-y-1'
                          : 'bg-surface/60 border-subtle hover:border-neutral-700/60 dark:hover:border-white/20'
                      }`}
                    >
                      {tool.icon}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Set 2 for Seamless Repeating Loop */}
            <div className="flex items-center gap-6 sm:gap-8 px-4 shrink-0" aria-hidden="true">
              {tools.map((tool) => {
                const isHovered = hoveredTool === `2-${tool.id}`;

                return (
                  <div
                    key={`2-${tool.id}`}
                    onMouseEnter={() => setHoveredTool(`2-${tool.id}`)}
                    onMouseLeave={() => setHoveredTool(null)}
                    className="relative group/tool shrink-0 flex flex-col items-center"
                  >
                    {/* Floating Tooltip with Arrow Pointer */}
                    <div
                      className={`absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg bg-surface-elevated border border-subtle text-primary shadow-2xl pointer-events-none transition-all duration-200 z-30 whitespace-nowrap text-center ${
                        isHovered
                          ? 'opacity-100 scale-100 translate-y-0'
                          : 'opacity-0 scale-90 translate-y-2'
                      }`}
                    >
                      <span className="font-display font-semibold text-xs text-primary">
                        {tool.name}
                      </span>
                      {/* Arrow indicator */}
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-surface-elevated border-r border-b border-subtle rotate-45" />
                    </div>

                    {/* Tool Rounded Button */}
                    <div
                      className={`w-13 h-13 sm:w-15 sm:h-15 rounded-2xl border flex items-center justify-center p-3 transition-all duration-300 transform-gpu cursor-pointer select-none ${
                        isHovered
                          ? 'bg-surface border-white/50 shadow-xl scale-115 -translate-y-1'
                          : 'bg-surface/60 border-subtle hover:border-neutral-700/60 dark:hover:border-white/20'
                      }`}
                    >
                      {tool.icon}
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

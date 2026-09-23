import React, { useState } from 'react';
import { TESTIMONIALS, type Testimonial } from '../../data/testimonials';

export const TestimonialsSection: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="testimonials" className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="flex items-center -space-x-1">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FDD02D] shadow-xs" title="Gold" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#DD1251] shadow-xs" title="Crimson" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#92D0AB] shadow-xs" title="Mint" />
            </div>
            <span className="text-[14px] font-mono uppercase tracking-[0.25em] text-[#92D0AB] font-semibold">
              TESTIMONIALS
            </span>
          </div>
        </div>

        {/* Seamless Infinite Auto-Scroll Track with Left & Right Gradient Fade Masks */}
        <div
          className="testimonials-loop-container group relative overflow-hidden select-none cursor-pointer py-2"
          style={{
            maskImage:
              'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.3) 2%, black 8%, black 92%, rgba(0,0,0,0.3) 98%, transparent 100%)',
            WebkitMaskImage:
              'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.3) 2%, black 8%, black 92%, rgba(0,0,0,0.3) 98%, transparent 100%)',
          }}
        >
          <div className="flex w-fit animate-testimonials-marquee group-hover:[animation-play-state:paused] items-stretch">
            
            {/* Set 1 */}
            <div className="flex items-stretch gap-5 sm:gap-6 px-3 shrink-0">
              {TESTIMONIALS.map((item: Testimonial) => {
                const isHovered = hoveredId === `1-${item.id}`;

                return (
                  <div
                    key={`1-${item.id}`}
                    onMouseEnter={() => setHoveredId(`1-${item.id}`)}
                    onMouseLeave={() => setHoveredId(null)}
                    className={`group/card relative w-[290px] sm:w-[360px] md:w-[390px] shrink-0 rounded-3xl p-6 sm:p-7 flex flex-col justify-between border transition-all duration-400 transform-gpu cursor-default ${
                      isHovered
                        ? 'bg-surface-elevated border-neutral-700/80 dark:border-white/20 shadow-2xl scale-[1.02] -translate-y-1'
                        : 'bg-surface/80 border-subtle hover:border-neutral-700/60 dark:hover:border-white/20'
                    }`}
                  >
                    {/* Rating Stars */}
                    <div>
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(item.rating)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FDD02D] fill-[#FDD02D] drop-shadow-xs"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        ))}
                      </div>

                      {/* Testimonial Quote */}
                      <blockquote className="text-xs sm:text-sm text-secondary/90 leading-relaxed font-normal mb-5 group-hover/card:text-primary transition-colors">
                        "{item.quote}"
                      </blockquote>
                    </div>

                    {/* Author Info */}
                    <div className="flex items-center gap-3 pt-4 border-t border-subtle/60">
                      <img
                        src={item.avatar}
                        alt={item.author}
                        className="w-9 h-9 rounded-full object-cover border border-subtle group-hover/card:border-[#FDD02D] transition-colors"
                      />
                      <div>
                        <h4 className="text-xs sm:text-sm font-display font-bold text-primary tracking-tight">
                          {item.author}
                        </h4>
                        <p className="text-[11px] font-mono text-muted flex items-center flex-wrap">
                          <span>{item.role}</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-[#92D0AB] inline-block shrink-0 mx-1.5" />
                          <span className="text-secondary">{item.company}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Set 2 for Infinite Seamless Repeating Loop */}
            <div className="flex items-stretch gap-5 sm:gap-6 px-3 shrink-0" aria-hidden="true">
              {TESTIMONIALS.map((item: Testimonial) => {
                const isHovered = hoveredId === `2-${item.id}`;

                return (
                  <div
                    key={`2-${item.id}`}
                    onMouseEnter={() => setHoveredId(`2-${item.id}`)}
                    onMouseLeave={() => setHoveredId(null)}
                    className={`group/card relative w-[290px] sm:w-[360px] md:w-[390px] shrink-0 rounded-3xl p-6 sm:p-7 flex flex-col justify-between border transition-all duration-400 transform-gpu cursor-default ${
                      isHovered
                        ? 'bg-surface-elevated border-neutral-700/80 dark:border-white/20 shadow-2xl scale-[1.02] -translate-y-1'
                        : 'bg-surface/80 border-subtle hover:border-neutral-700/60 dark:hover:border-white/20'
                    }`}
                  >
                    {/* Rating Stars */}
                    <div>
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(item.rating)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FDD02D] fill-[#FDD02D] drop-shadow-xs"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        ))}
                      </div>

                      {/* Testimonial Quote */}
                      <blockquote className="text-xs sm:text-sm text-secondary/90 leading-relaxed font-normal mb-5 group-hover/card:text-primary transition-colors">
                        "{item.quote}"
                      </blockquote>
                    </div>

                    {/* Author Info */}
                    <div className="flex items-center gap-3 pt-4 border-t border-subtle/60">
                      <img
                        src={item.avatar}
                        alt={item.author}
                        className="w-9 h-9 rounded-full object-cover border border-subtle group-hover/card:border-[#FDD02D] transition-colors"
                      />
                      <div>
                        <h4 className="text-xs sm:text-sm font-display font-bold text-primary tracking-tight">
                          {item.author}
                        </h4>
                        <p className="text-[11px] font-mono text-muted flex items-center flex-wrap">
                          <span>{item.role}</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-[#92D0AB] inline-block shrink-0 mx-1.5" />
                          <span className="text-secondary">{item.company}</span>
                        </p>
                      </div>
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

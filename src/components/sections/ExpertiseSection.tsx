import React, { useState, useEffect, useRef } from 'react';
import { EXPERTISE_ITEMS } from '../../data/leadership';
import { SectionHeader } from '../ui/SectionHeader';
import { ExpertiseCard } from '../ui/ExpertiseCard';

const DOMAINS = [
  'Finance & Banking',
  'Enterprise Software',
  'Education',
  'Travel',
  'Agriculture',
  'Real Estate',
  'HR & Recruitment',
  'Healthcare',
  'Automotive',
  'E-commerce',
  'Matrimonial',
  'Security & Defence',
  'Hospital Management',
];

export const ExpertiseSection: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set([0, 1, 2, 3, 4, 5]));
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
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="expertise" className="py-24 md:py-32 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-neutral-200/20 dark:bg-neutral-800/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-10">
          <SectionHeader
            label="CAPABILITIES & DOMAINS"
            title={
              <>
                What I bring to{' '}
                <span className="font-serif italic font-normal text-primary">
                  the table.
                </span>
              </>
            }
            subtitle="Six core capabilities honed across 15+ years and 13+ industry domains — augmented with modern AI tooling (Claude, ChatGPT, Figma Make) for 3x velocity."
            className="mb-0"
          />
        </div>

        {/* Grid of Interactive Capabilities Cards with Staggered On-Scroll Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 items-stretch">
          {EXPERTISE_ITEMS.map((item, index) => {
            const isVisible = visibleItems.has(index);

            return (
              <div
                key={item.id}
                data-index={index}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                style={{
                  transitionDelay: `${(index % 3) * 80}ms`,
                }}
                className={`transition-all duration-500 ease-out transform-gpu flex flex-col ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
              >
                <ExpertiseCard
                  item={item}
                  index={index}
                  isActive={selectedId === item.id}
                  onClick={() => setSelectedId(selectedId === item.id ? null : item.id)}
                />
              </div>
            );
          })}
        </div>

        {/* Infinite Horizontal Looping Domains Marquee */}
        <div className="mt-8 sm:mt-12 domains-loop-container overflow-hidden relative">
          <div
            className="relative w-full overflow-hidden flex items-center"
            style={{
              maskImage:
                'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.8) 6%, black 14%, black 86%, rgba(0,0,0,0.8) 94%, transparent 100%)',
              WebkitMaskImage:
                'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.8) 6%, black 14%, black 86%, rgba(0,0,0,0.8) 94%, transparent 100%)',
            }}
          >
            <div className="flex w-fit animate-domains-marquee items-center">
              {/* Set 1 */}
              <div className="flex items-center gap-2.5 sm:gap-3 px-3 shrink-0">
                {DOMAINS.map((domain, idx) => (
                  <span
                    key={`domain-1-${idx}`}
                    className="text-xs sm:text-[13px] font-mono px-3.5 py-1.5 rounded-full bg-surface/60 border border-subtle text-secondary hover:text-primary hover:border-neutral-600 dark:hover:border-white/30 hover:bg-surface/90 hover:scale-[1.03] transition-all duration-200 cursor-pointer select-none whitespace-nowrap shadow-2xs"
                  >
                    {domain}
                  </span>
                ))}
              </div>

              {/* Set 2 for Seamless Infinite Loop */}
              <div className="flex items-center gap-2.5 sm:gap-3 px-3 shrink-0" aria-hidden="true">
                {DOMAINS.map((domain, idx) => (
                  <span
                    key={`domain-2-${idx}`}
                    className="text-xs sm:text-[13px] font-mono px-3.5 py-1.5 rounded-full bg-surface/60 border border-subtle text-secondary hover:text-primary hover:border-neutral-600 dark:hover:border-white/30 hover:bg-surface/90 hover:scale-[1.03] transition-all duration-200 cursor-pointer select-none whitespace-nowrap shadow-2xs"
                  >
                    {domain}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useEffect, useRef, useState } from 'react';

interface MetricPill {
  value: string;
  label: string;
}

interface AboutPageViewProps {
  onBackToHome: () => void;
  onNavigate: (sectionId: string) => void;
}

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

export const AboutPageView: React.FC<AboutPageViewProps> = ({
  onBackToHome,
  onNavigate,
}) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });
  const [scrollYOffset, setScrollYOffset] = useState(0);
  const pageRef = useRef<HTMLDivElement | null>(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  useEffect(() => {
    let rafId: number;

    const handleScroll = () => {
      if (!pageRef.current) return;
      const rect = pageRef.current.getBoundingClientRect();
      const windowH = window.innerHeight;
      const totalDist = windowH + rect.height;
      const currentPos = windowH - rect.top;
      const progress = Math.max(0, Math.min(1, currentPos / totalDist));
      const parallax = (progress - 0.5) * 36;
      setScrollYOffset(parallax);
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    const tiltX = (0.5 - y) * 12;
    const tiltY = (x - 0.5) * 12;

    setRotate({ x: tiltX, y: tiltY });
    setGlarePos({ x: x * 100, y: y * 100 });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
  };

  const metrics: MetricPill[] = [
    { value: '15+', label: 'Years Exp' },
    { value: '12+', label: 'Enterprise Platforms' },
    { value: '3x', label: 'Design Awards' },
    { value: 'AI-First', label: 'Velocity' },
  ];


  return (
    <div ref={pageRef} className="pt-28 sm:pt-36 pb-20 md:pb-28 min-h-screen relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-neutral-200/20 dark:bg-neutral-800/15 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Breadcrumb / Return to Portfolio Navigation */}
        <div className="flex items-center justify-between gap-4 mb-8 sm:mb-10 pb-4 border-b border-subtle">
          <button
            onClick={onBackToHome}
            data-cursor="nav"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono uppercase tracking-wider text-secondary hover:text-primary transition-all duration-200 group cursor-pointer"
          >
            <span className="inline-block transition-transform duration-200 group-hover:-translate-x-1">
              ←
            </span>
            <span>Back to Portfolio</span>
          </button>

          <div className="flex items-center gap-2 text-xs font-mono text-muted">
            <span>Home</span>
            <span>/</span>
            <span className="text-primary font-medium">About Me</span>
          </div>
        </div>

        {/* Section Label */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center -space-x-1">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FDD02D] shadow-xs" title="Gold" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#DD1251] shadow-xs" title="Crimson" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#92D0AB] shadow-xs" title="Mint" />
          </div>
          <span className="text-[14px] font-mono uppercase tracking-[0.25em] text-[#92D0AB] font-semibold">
            ABOUT ME
          </span>
        </div>

        {/* Top Row: Narrative on Left & Photo on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12 sm:mb-14">
          
          {/* Left Column (7 cols): Main Headline & Human Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Main Headline */}
            <h1 className="text-2xl sm:text-3xl lg:text-[38px] font-display font-bold text-primary tracking-tight leading-[1.18] mb-6">
              Designing complex systems with human clarity and{' '}
              <span className="font-serif italic font-normal text-primary">
                AI-driven velocity.
              </span>
            </h1>

            {/* Core Human Narrative */}
            <p className="text-base sm:text-[17px] text-primary/95 leading-relaxed mb-4 font-normal">
              I combine AI with strategic product thinking to eliminate repetitive manual tasks and focus time where it matters most: solving complex user workflows and driving measurable business outcomes.
            </p>

            <p className="text-sm sm:text-base text-secondary leading-relaxed font-normal mb-6">
              With 15+ years of experience across the USA, UAE, and India, I specialize in creating clean, modern, and intuitive digital experiences, with a strong focus on UI, visual design, and UX. I’ve worked across 15+ industries, designing web, mobile, and enterprise products from concept to final delivery.
            </p>

            {/* Quick Action Pills */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onNavigate('work')}
                className="px-4 py-2 rounded-full text-xs font-mono font-medium bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-md hover:scale-[1.02] active:scale-95 transition-all duration-200 cursor-pointer"
              >
                View Selected Work →
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="px-4 py-2 rounded-full text-xs font-mono font-medium bg-surface border border-subtle text-secondary hover:text-primary hover:border-strong active:scale-95 transition-all duration-200 cursor-pointer"
              >
                Get in Touch
              </button>
            </div>

          </div>

          {/* Right Column (5 cols): Photo with 3D perspective tilt */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div
              style={{
                transform: `translate3d(0, ${-scrollYOffset}px, 0)`,
                transition: 'transform 0.15s cubic-bezier(0.2, 0.8, 0.2, 1)',
              }}
              className="w-full max-w-sm sm:max-w-md lg:max-w-[380px]"
            >
              <div
                style={{
                  perspective: 1000,
                }}
                className="relative"
              >
                {/* 3D Interactive Card Frame */}
                <div
                  onMouseMove={handleMouseMove}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={handleMouseLeave}
                  style={{
                    transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale(${isHovered ? 1.025 : 1})`,
                    transition: isHovered
                      ? 'transform 0.12s ease-out'
                      : 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)',
                    transformStyle: 'preserve-3d',
                  }}
                  className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/4.3] bg-neutral-900 shadow-2xl transition-shadow duration-300 hover:shadow-[0_24px_50px_rgba(0,0,0,0.5)] cursor-pointer select-none group transform-gpu"
                >
                  <img
                    src="/images/azhar-khan.jpg"
                    alt="Azhar Khan - Lead UI/UX & Product Designer"
                    style={{
                      transform: `scale(${isHovered ? 1.06 : 1.01}) translate3d(${rotate.y * -0.6}px, ${rotate.x * 0.6}px, 0)`,
                      transition: isHovered ? 'transform 0.12s ease-out' : 'transform 0.6s ease-out',
                    }}
                    className="w-full h-full object-cover object-center pointer-events-none transform-gpu will-change-transform"
                  />

                  {/* Specular Light Sheen reacting to cursor movement */}
                  <div
                    className="absolute inset-0 pointer-events-none transition-opacity duration-300"
                    style={{
                      opacity: isHovered ? 0.38 : 0,
                      background: `radial-gradient(circle 360px at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.32) 0%, rgba(255,255,255,0.08) 45%, transparent 75%)`,
                      mixBlendMode: 'overlay',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Full-Width Infinite Horizontal Looping Domains Marquee */}
        <div className="mb-10 sm:mb-12 domains-loop-container overflow-hidden relative w-full">
          <div
            className="relative w-full overflow-hidden flex items-center"
            style={{
              maskImage:
                'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.8) 4%, black 12%, black 88%, rgba(0,0,0,0.8) 96%, transparent 100%)',
              WebkitMaskImage:
                'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.8) 4%, black 12%, black 88%, rgba(0,0,0,0.8) 96%, transparent 100%)',
            }}
          >
            <div className="flex w-fit animate-domains-marquee items-center">
              {/* Set 1 */}
              <div className="flex items-center gap-2.5 sm:gap-3 px-3 shrink-0">
                {DOMAINS.map((domain, idx) => (
                  <span
                    key={`about-domain-1-${idx}`}
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
                    key={`about-domain-2-${idx}`}
                    className="text-xs sm:text-[13px] font-mono px-3.5 py-1.5 rounded-full bg-surface/60 border border-subtle text-secondary hover:text-primary hover:border-neutral-600 dark:hover:border-white/30 hover:bg-surface/90 hover:scale-[1.03] transition-all duration-200 cursor-pointer select-none whitespace-nowrap shadow-2xs"
                  >
                    {domain}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>


        {/* Bottom Minimalist Metrics Ribbon */}
        <div className="pt-6 border-t border-subtle flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-muted">
          <div className="flex flex-wrap items-center gap-3 sm:gap-5">
            {metrics.map((m, idx) => {
              const dotColors = ['#92D0AB', '#DD1251', '#FDD02D'];
              return (
                <div key={idx} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: dotColors[idx % dotColors.length] }} />
                  <span className="hover:text-primary transition-colors cursor-default">
                    <strong className="text-primary font-semibold">{m.value}</strong> {m.label}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="text-secondary/80 font-medium flex items-center gap-1.5">
            <span>Noida. Gurugram. Delhi</span>
          </div>
        </div>

      </div>
    </div>
  );
};

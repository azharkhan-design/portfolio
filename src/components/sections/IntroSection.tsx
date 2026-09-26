import React, { useEffect, useRef, useState } from 'react';

interface MetricPill {
  value: string;
  label: string;
}

export const IntroSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  // 3D Tilt & Specular Sheen on Hover
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });

  // Scroll-Driven Interactive Parallax Offset
  const [scrollYOffset, setScrollYOffset] = useState(0);

  useEffect(() => {
    let rafId: number;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowH = window.innerHeight;

      // Calculate progress of section passing through the viewport
      const totalDist = windowH + rect.height;
      const currentPos = windowH - rect.top;
      const progress = Math.max(0, Math.min(1, currentPos / totalDist));

      // Gentle interactive parallax float (-18px to +18px)
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

    // Smooth tilt angles (-8deg to +8deg)
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

  const highlights = [
    {
      title: 'AI-Accelerated Velocity',
      desc: 'Rapid synthesis, automated variations, and fast prototyping to focus on high-leverage product strategy.',
      accent: '#92D0AB',
      icon: (
        <svg className="w-4 h-4 text-[#92D0AB]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        </svg>
      )
    },
    {
      title: 'Complex Enterprise UX',
      desc: 'Simplifying high-density workflows across healthcare (Cura Patient), education (Stride), and real estate (Wasl).',
      accent: '#FDD02D',
      icon: (
        <svg className="w-4 h-4 text-[#FDD02D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      )
    },
    {
      title: 'Design Systems & Code',
      desc: 'Production-grade tokens and auto-layout architectures built for zero-loss engineering handoff.',
      accent: '#DD1251',
      icon: (
        <svg className="w-4 h-4 text-[#DD1251]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      )
    },
  ];

  return (
    <section ref={sectionRef} id="about" className="py-20 md:py-28 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center -space-x-1">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FDD02D] shadow-xs" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#DD1251] shadow-xs" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#92D0AB] shadow-xs" />
          </div>
          <span className="text-[14px] font-mono uppercase tracking-[0.25em] text-[#92D0AB] font-semibold">
            ABOUT ME
          </span>
        </div>

        {/* Top Row: Narrative on Left (Headline + Quote + Paragraph) & Photo on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-10 sm:mb-12">
          
          {/* Left Column (7 cols): Main Headline, AI Quote, Human Paragraph */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Main Headline */}
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-display font-bold text-primary tracking-tight leading-[1.18] mb-6">
              Designing complex systems with human clarity and{' '}
              <span className="font-serif italic font-normal text-primary">
                AI-driven velocity.
              </span>
            </h2>

            {/* Core Human Narrative: Direct, impactful, and easy to scan */}
            <p className="text-sm sm:text-base text-primary/95 leading-relaxed mb-4 font-normal">
              I combine AI with strategic product thinking to eliminate repetitive manual tasks and focus time where it matters most: solving complex user workflows and driving measurable business outcomes.
            </p>

            <p className="text-xs sm:text-sm text-secondary leading-relaxed font-normal">
              Over 15+ years across USA, UAE, and India, I’ve specialized in turning dense B2B SaaS, healthcare portals, and enterprise platforms into clear, intuitive experiences.
            </p>

          </div>

          {/* Right Column (5 cols): Photo aligned with the top section */}
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
                    loading="lazy"
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

        {/* Below Row: 3 Horizontal Value Pillar Cards Full-Width */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 mb-10">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="group flex flex-col items-start gap-3 p-4 sm:p-5 rounded-2xl bg-surface/50 border border-subtle/80 hover:border-neutral-700/60 dark:hover:border-white/25 hover:bg-surface/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-default"
            >
              <div className="w-8 h-8 rounded-lg bg-black/5 dark:bg-white/5 border border-subtle flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-200">
                {item.icon}
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-display font-semibold text-primary group-hover:text-[#92D0AB] transition-colors duration-200 mb-1">
                  {item.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-secondary/90 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Minimalist Metrics Ribbon */}
        <div className="pt-5 border-t border-subtle flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-muted">
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
    </section>
  );
};

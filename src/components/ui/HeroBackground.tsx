import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  baseAlpha: number;
  alpha: number;
  color: string;
}

export const HeroBackground: React.FC<{ className?: string }> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const spotlightRef = useRef<HTMLDivElement | null>(null);
  const coreSpotlightRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = 0;
    let height = 0;

    // Smooth lerping coordinates
    const mouse = {
      targetX: -1000,
      targetY: -1000,
      currentX: -1000,
      currentY: -1000,
      radius: 150,
      targetOpacity: 0.25,
      currentOpacity: 0.25,
      isHovered: false
    };

    const handleResize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);

      // Default resting center for ambient light
      if (!mouse.isHovered) {
        mouse.targetX = width * 0.5;
        mouse.targetY = height * 0.42;
        if (mouse.currentX === -1000) {
          mouse.currentX = mouse.targetX;
          mouse.currentY = mouse.targetY;
        }
      }
    };

    handleResize();

    // Floating particles (minimal, light count)
    const particleCount = Math.min(Math.max(Math.floor((width * height) / 22000), 22), 36);
    const particleColors = [
      'rgba(255, 255, 255, ',
      'rgba(146, 208, 171, ', // brand mint
      'rgba(253, 208, 45, ',  // brand gold
      'rgba(255, 255, 255, '
    ];

    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        size: Math.random() * 1.5 + 0.8,
        baseAlpha: Math.random() * 0.25 + 0.12,
        alpha: Math.random() * 0.25 + 0.12,
        color: particleColors[i % particleColors.length]
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (x >= -50 && x <= rect.width + 50 && y >= -50 && y <= rect.height + 50) {
        mouse.targetX = x;
        mouse.targetY = y;
        mouse.targetOpacity = 0.85;
        mouse.isHovered = true;
      } else {
        mouse.isHovered = false;
        mouse.targetX = width * 0.5;
        mouse.targetY = height * 0.42;
        mouse.targetOpacity = 0.25;
      }
    };

    const handleMouseLeave = () => {
      mouse.isHovered = false;
      mouse.targetX = width * 0.5;
      mouse.targetY = height * 0.42;
      mouse.targetOpacity = 0.25;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    // Render Animation Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth lerp cursor tracking (light, fluid spring effect)
      mouse.currentX += (mouse.targetX - mouse.currentX) * 0.075;
      mouse.currentY += (mouse.targetY - mouse.currentY) * 0.075;
      mouse.currentOpacity += (mouse.targetOpacity - mouse.currentOpacity) * 0.05;

      // Update DOM cursor spotlight positions via GPU transform
      if (spotlightRef.current) {
        spotlightRef.current.style.transform = `translate3d(${mouse.currentX}px, ${mouse.currentY}px, 0)`;
        spotlightRef.current.style.opacity = `${mouse.currentOpacity}`;
      }
      if (coreSpotlightRef.current) {
        coreSpotlightRef.current.style.transform = `translate3d(${mouse.currentX}px, ${mouse.currentY}px, 0)`;
        coreSpotlightRef.current.style.opacity = `${mouse.currentOpacity * 1.1}`;
      }

      // Draw and update gentle floating particles with elastic cursor deflection
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        // Wrap boundaries
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        // Interactive elastic repulsion from cursor
        if (mouse.isHovered) {
          const dx = mouse.currentX - p.x;
          const dy = mouse.currentY - p.y;
          const dist = Math.hypot(dx, dy);

          if (dist < mouse.radius && dist > 0) {
            const force = (1 - dist / mouse.radius);
            p.x -= (dx / dist) * force * 1.1;
            p.y -= (dy / dist) * force * 1.1;
            p.alpha = Math.min(p.baseAlpha + force * 0.45, 0.75);
          } else {
            p.alpha += (p.baseAlpha - p.alpha) * 0.03;
          }
        } else {
          p.alpha += (p.baseAlpha - p.alpha) * 0.03;
        }

        // Draw particle dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none z-0 ${className}`}
      aria-hidden="true"
    >
      {/* 1. Minimal Clean Dot Grid */}
      <div
        className="absolute inset-0 figjam-grid opacity-35"
        style={{
          maskImage: 'radial-gradient(ellipse at 50% 45%, black 40%, rgba(0,0,0,0.6) 70%, transparent 95%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 45%, black 40%, rgba(0,0,0,0.6) 70%, transparent 95%)'
        }}
      />

      {/* 2. Outer Smooth Ambient Cursor Spotlight (Brand Mint + Warm Gold Halo) */}
      <div
        ref={spotlightRef}
        className="absolute -top-[320px] -left-[320px] w-[640px] h-[640px] rounded-full pointer-events-none blur-[100px] transition-opacity duration-300"
        style={{
          background: 'radial-gradient(circle, rgba(146, 208, 171, 0.08) 0%, rgba(253, 208, 45, 0.035) 40%, transparent 70%)',
          willChange: 'transform, opacity'
        }}
      />

      {/* 3. Inner Clean White Spotlight Glow */}
      <div
        ref={coreSpotlightRef}
        className="absolute -top-[160px] -left-[160px] w-[320px] h-[320px] rounded-full pointer-events-none blur-[60px] transition-opacity duration-300"
        style={{
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.065) 0%, rgba(255, 255, 255, 0.015) 50%, transparent 75%)',
          willChange: 'transform, opacity'
        }}
      />

      {/* 4. Canvas Layer for Smooth Floating Ethereal Micro-Particles */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 block w-full h-full"
      />

      {/* 5. Bottom Vignette Fade into Page Background */}
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[var(--bg-primary)] via-[var(--bg-primary)]/40 to-transparent pointer-events-none" />
    </div>
  );
};

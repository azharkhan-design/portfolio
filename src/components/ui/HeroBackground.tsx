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

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = 0;
    let height = 0;

    // Mouse position for gentle particle deflection only
    const mouse = {
      x: -2000,
      y: -2000,
      radius: 120,
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
    };

    handleResize();

    // Floating particles (minimal, light count)
    const particleCount = Math.min(Math.max(Math.floor((width * height) / 24000), 20), 32);
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
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        size: Math.random() * 1.4 + 0.8,
        baseAlpha: Math.random() * 0.2 + 0.1,
        alpha: Math.random() * 0.2 + 0.1,
        color: particleColors[i % particleColors.length]
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        mouse.x = x;
        mouse.y = y;
        mouse.isHovered = true;
      } else {
        mouse.isHovered = false;
        mouse.x = -2000;
        mouse.y = -2000;
      }
    };

    const handleMouseLeave = () => {
      mouse.isHovered = false;
      mouse.x = -2000;
      mouse.y = -2000;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    // Render Animation Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw and update gentle floating particles with elastic cursor deflection
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        // Wrap boundaries smoothly
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        // Subtle elastic deflection when cursor is near (no spotlight beam)
        if (mouse.isHovered) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.hypot(dx, dy);

          if (dist < mouse.radius && dist > 0) {
            const force = 1 - dist / mouse.radius;
            p.x -= (dx / dist) * force * 1.2;
            p.y -= (dy / dist) * force * 1.2;
            p.alpha = Math.min(p.baseAlpha + force * 0.35, 0.65);
          } else {
            p.alpha += (p.baseAlpha - p.alpha) * 0.03;
          }
        } else {
          p.alpha += (p.baseAlpha - p.alpha) * 0.03;
        }

        // Draw soft particle dot
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
      {/* 1. Minimal Clean Dot Grid with soft vignette */}
      <div
        className="absolute inset-0 figjam-grid opacity-30"
        style={{
          maskImage: 'radial-gradient(ellipse at 50% 45%, black 40%, rgba(0,0,0,0.5) 70%, transparent 95%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 45%, black 40%, rgba(0,0,0,0.5) 70%, transparent 95%)'
        }}
      />

      {/* 2. Canvas Layer for Smooth Floating Ethereal Micro-Particles */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 block w-full h-full"
      />

      {/* 3. Bottom Vignette Fade into Page Background */}
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[var(--bg-primary)] via-[var(--bg-primary)]/40 to-transparent pointer-events-none" />
    </div>
  );
};

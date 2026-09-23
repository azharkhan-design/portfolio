import React, { useEffect, useRef } from 'react';
import { useTheme } from '../../context/ThemeContext';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  baseAlpha: number;
  alpha: number;
}

export const HeroCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    // Track mouse position over entire window / hero
    const mouse = {
      x: -2000,
      y: -2000,
      radius: 140,
      isHovered: false
    };

    const updateDimensions = () => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      width = canvas.width = rect.width || window.innerWidth;
      height = canvas.height = rect.height || window.innerHeight;
    };

    updateDimensions();

    // Soft floating particles count
    const particleCount = Math.min(Math.max(Math.floor((width * height) / 18000), 25), 50);
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        size: Math.random() * 1.8 + 1,
        baseAlpha: Math.random() * 0.25 + 0.15,
        alpha: Math.random() * 0.25 + 0.15
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      if (
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom &&
        e.clientX >= rect.left &&
        e.clientX <= rect.right
      ) {
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
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
    window.addEventListener('resize', updateDimensions);

    // Animation Render Loop (Clean floating particles without cursor lines)
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const activeIsDark = document.documentElement.classList.contains('dark') || theme === 'dark';
      const rgb = activeIsDark ? '255, 255, 255' : '0, 0, 0';

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move particle gently
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around boundaries smoothly
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        // Smooth subtle cursor repulsion without any connecting lines
        if (mouse.isHovered) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.hypot(dx, dy);

          if (dist < mouse.radius && dist > 0) {
            const force = (1 - dist / mouse.radius);
            p.x -= (dx / dist) * force * 0.6;
            p.y -= (dy / dist) * force * 0.6;
            p.alpha = Math.min(p.baseAlpha + force * 0.35, 0.7);
          } else {
            p.alpha += (p.baseAlpha - p.alpha) * 0.03;
          }
        } else {
          p.alpha += (p.baseAlpha - p.alpha) * 0.03;
        }

        // Draw soft particle dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb}, ${p.alpha})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', updateDimensions);
    };
  }, [theme]);

  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0"
      aria-hidden="true"
    >
      {/* Light, Clean FigJam-Style Geometric Dotted Grid */}
      <div className="absolute inset-0 figjam-grid" />

      {/* Soft Vignette Mask */}
      <div className="absolute inset-0 bg-hero-mask pointer-events-none" />

      {/* HTML5 Canvas for Clean Ambient Floating Particles */}
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
      />
    </div>
  );
};

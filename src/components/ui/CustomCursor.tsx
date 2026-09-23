import React, { useEffect, useRef, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [hasFinePointer, setHasFinePointer] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isClicking, setIsClicking] = useState<boolean>(false);
  const [cursorState, setCursorState] = useState<'default' | 'pointer' | 'nav'>('default');

  const dotRef = useRef<HTMLDivElement>(null);
  const haloRef = useRef<HTMLDivElement>(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const haloPos = useRef({ x: -100, y: -100 });
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // Only initialize on devices with mouse/trackpad (pointer: fine)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setHasFinePointer(mediaQuery.matches);

    const handlePointerChange = (e: MediaQueryListEvent) => {
      setHasFinePointer(e.matches);
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handlePointerChange);
    } else {
      mediaQuery.addListener(handlePointerChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handlePointerChange);
      } else {
        mediaQuery.removeListener(handlePointerChange);
      }
    };
  }, []);

  useEffect(() => {
    if (!hasFinePointer) return;

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      if (!isVisible) setIsVisible(true);

      // Instantly position the central precision dot
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      const target = e.target as HTMLElement | null;
      if (!target) {
        setCursorState('default');
        return;
      }

      // Check if hovering on navigation elements
      const isNav = Boolean(
        target.closest(
          '[data-cursor="nav"], [data-nav="true"], nav, nav button, nav a, header button, header a, footer nav button, footer a'
        )
      );

      if (isNav) {
        setCursorState('nav');
        return;
      }

      // Check if hovering on general interactive elements (buttons, links, cards)
      const isInteractive = Boolean(
        target.closest(
          'button, a, [role="button"], [role="link"], select, .cursor-pointer, [data-cursor="pointer"]'
        )
      );

      if (isInteractive) {
        setCursorState('pointer');
        return;
      }

      setCursorState('default');
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Smooth fluid physics for the trailing ambient halo
    const animateHalo = () => {
      const dx = mousePos.current.x - haloPos.current.x;
      const dy = mousePos.current.y - haloPos.current.y;

      haloPos.current.x += dx * 0.20;
      haloPos.current.y += dy * 0.20;

      if (haloRef.current) {
        haloRef.current.style.transform = `translate3d(${haloPos.current.x}px, ${haloPos.current.y}px, 0)`;
      }

      rafId.current = requestAnimationFrame(animateHalo);
    };

    rafId.current = requestAnimationFrame(animateHalo);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [hasFinePointer, isVisible]);

  if (!hasFinePointer) return null;

  return (
    <>
      {/* Soft Trailing Ambient Micro-Halo (Fluid Inertia) */}
      <div
        ref={haloRef}
        className="fixed top-0 left-0 pointer-events-none z-[99998] will-change-transform"
        style={{ transform: 'translate3d(-100px, -100px, 0)' }}
      >
        <div
          className={`-translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none transition-all duration-300 ease-out ${
            !isVisible ? 'opacity-0' : 'opacity-100'
          } ${
            cursorState === 'nav'
              ? 'w-10 h-10 bg-neutral-900/10 dark:bg-white/20 blur-xs scale-110'
              : cursorState === 'pointer'
              ? 'w-8 h-8 bg-neutral-900/10 dark:bg-white/15 blur-2xs'
              : 'w-6 h-6 bg-neutral-900/5 dark:bg-white/10 blur-2xs'
          } ${isClicking ? 'scale-75' : ''}`}
        />
      </div>

      {/* Immediate Precision Ambient Glow Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[99999] will-change-transform"
        style={{ transform: 'translate3d(-100px, -100px, 0)' }}
      >
        <div
          className={`-translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none transition-all duration-200 ease-out ${
            !isVisible ? 'opacity-0' : 'opacity-100'
          } ${
            cursorState === 'nav'
              ? 'w-3.5 h-3.5 bg-neutral-900 dark:bg-white shadow-[0_0_16px_rgba(0,0,0,0.35)] dark:shadow-[0_0_18px_rgba(255,255,255,0.7),0_0_32px_rgba(255,255,255,0.3)]'
              : cursorState === 'pointer'
              ? 'w-3 h-3 bg-neutral-900 dark:bg-white shadow-[0_0_12px_rgba(0,0,0,0.25)] dark:shadow-[0_0_14px_rgba(255,255,255,0.55),0_0_24px_rgba(255,255,255,0.2)]'
              : 'w-2 h-2 bg-neutral-900 dark:bg-white shadow-[0_0_8px_rgba(0,0,0,0.2)] dark:shadow-[0_0_10px_rgba(255,255,255,0.45)]'
          } ${isClicking ? 'scale-75' : 'scale-100'}`}
        />
      </div>
    </>
  );
};

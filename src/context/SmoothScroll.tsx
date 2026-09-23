import React, { createContext, useContext, useEffect, useRef, useState, useCallback } from 'react';
import Lenis from 'lenis';

interface SmoothScrollContextType {
  scrollTo: (target: string | HTMLElement | number, options?: { offset?: number; duration?: number; immediate?: boolean }) => void;
  resize: () => void;
  lenis: Lenis | null;
}

const SmoothScrollContext = createContext<SmoothScrollContextType>({
  scrollTo: () => {},
  resize: () => {},
  lenis: null,
});

export const SmoothScrollProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const lenisRef = useRef<Lenis | null>(null);
  const [lenisInstance, setLenisInstance] = useState<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis smooth scroll engine
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential ease-out
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.05,
      touchMultiplier: 1.5,
      infinite: false,
    });

    lenisRef.current = lenis;
    setLenisInstance(lenis);

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
      setLenisInstance(null);
    };
  }, []);

  const resize = useCallback(() => {
    if (lenisRef.current) {
      lenisRef.current.resize();
    }
  }, []);

  const scrollTo = useCallback((target: string | HTMLElement | number, options?: { offset?: number; duration?: number; immediate?: boolean; easing?: (t: number) => number }) => {
    if (lenisRef.current) {
      lenisRef.current.resize();

      let resolvedTarget: string | HTMLElement | number = target;
      if (typeof target === 'string') {
        if (target === '0' || target === 'top' || target === 'hero') {
          resolvedTarget = 0;
        } else if (target.startsWith('#')) {
          resolvedTarget = target;
        } else {
          const el = document.getElementById(target);
          resolvedTarget = el || `#${target}`;
        }
      }

      lenisRef.current.scrollTo(resolvedTarget, {
        offset: options?.offset ?? -70,
        duration: options?.duration ?? 1.35,
        immediate: options?.immediate ?? false,
        easing: options?.easing ?? ((t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))),
      });
    } else {
      if (typeof target === 'string') {
        const el = target.startsWith('#') ? document.querySelector(target) : document.getElementById(target);
        if (el) {
          el.scrollIntoView({ behavior: options?.immediate ? 'instant' : 'smooth' });
        } else if (target === '0' || target === 'top' || target === 'hero') {
          window.scrollTo({ top: 0, behavior: options?.immediate ? 'instant' : 'smooth' });
        }
      } else if (typeof target === 'number') {
        window.scrollTo({ top: target, behavior: options?.immediate ? 'instant' : 'smooth' });
      } else if (target instanceof HTMLElement) {
        target.scrollIntoView({ behavior: options?.immediate ? 'instant' : 'smooth' });
      }
    }
  }, []);

  return (
    <SmoothScrollContext.Provider value={{ scrollTo, resize, lenis: lenisInstance }}>
      {children}
    </SmoothScrollContext.Provider>
  );
};

export const useSmoothScroll = () => useContext(SmoothScrollContext);

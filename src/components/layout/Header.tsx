import React, { useState, useEffect } from 'react';
import { MobileMenu } from './MobileMenu';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
  activeSection?: string;
  isCaseStudy?: boolean;
  isAboutPage?: boolean;
  onBackToHome?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onNavigate,
  activeSection = 'hero',
  isCaseStudy = false,
  isAboutPage = false,
  onBackToHome
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'work', label: 'Work' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <>
      <header className="fixed top-4 sm:top-6 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
        <div
          className={`pointer-events-auto flex items-center justify-between gap-3 sm:gap-6 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full border border-subtle transition-all duration-300 ${
            isScrolled
              ? 'bg-overlay/95 backdrop-blur-xl shadow-lg shadow-black/5 dark:shadow-black/40'
              : 'bg-overlay/85 backdrop-blur-md shadow-md shadow-black/5'
          }`}
        >
          {/* Left: Logo & Home Link (Borderless) with Micro Animation */}
          <button
            onClick={() => ((isCaseStudy || isAboutPage) && onBackToHome ? onBackToHome() : onNavigate('hero'))}
            className="flex items-center group cursor-pointer p-1 transition-transform duration-200 hover:-translate-y-0.5 active:scale-95"
            data-cursor="nav"
            aria-label="Azhar Khan Portfolio Home"
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
              <img
                src="/images/Logo/AzharLogo.svg"
                alt="Azhar Khan Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </button>

          {/* Desktop Center Navigation with Micro Animations */}
          {isCaseStudy ? (
            <button
              onClick={onBackToHome}
              data-cursor="nav"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[14px] font-mono uppercase tracking-wider text-secondary hover:text-primary hover:bg-badge/60 hover:-translate-y-0.5 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <span className="transition-transform duration-200 inline-block hover:-translate-x-1">←</span> Back to All Projects
            </button>
          ) : (
            <nav className="hidden md:flex items-center gap-1" aria-label="Main Navigation">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  data-cursor="nav"
                  className={`group relative px-3.5 py-1.5 rounded-full text-[14px] font-medium transition-all duration-200 cursor-pointer ${
                    activeSection === item.id
                      ? 'bg-black/[0.03] text-primary dark:bg-white/[0.03] dark:text-white font-semibold border border-black/[0.04] dark:border-white/[0.06]'
                      : 'text-secondary hover:text-primary hover:bg-badge/60 hover:-translate-y-0.5 active:scale-95'
                  }`}
                >
                  <span className="relative z-10 inline-block transition-transform duration-200 group-hover:scale-105">
                    {item.label}
                  </span>
                </button>
              ))}
            </nav>
          )}

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
            data-cursor="nav"
            className="p-1.5 md:hidden text-primary rounded-full hover:bg-badge hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Fullscreen Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onNavigate={onNavigate}
        activeSection={activeSection}
      />
    </>
  );
};

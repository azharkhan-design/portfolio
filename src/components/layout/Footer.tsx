import React from 'react';
import { useSmoothScroll } from '../../context/SmoothScroll';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { scrollTo } = useSmoothScroll();

  const scrollToTop = () => {
    scrollTo(0, { duration: 1.4 });
  };

  return (
    <footer className="w-full border-t border-subtle bg-primary py-12 md:py-16 mt-20 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-subtle">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden p-1.5 border border-subtle bg-surface flex items-center justify-center shrink-0 shadow-xs">
              <img
                src="/images/Logo/AzharLogo.svg"
                alt="Azhar Khan Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <span className="text-xl font-display font-bold tracking-tight text-primary">
                AZHAR KHAN
              </span>
              <p className="text-xs font-mono uppercase tracking-wider text-muted mt-0.5">
                Lead UI/UX &amp; Product Designer · 15+ Years
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-mono uppercase tracking-wider text-secondary">
            <button
              onClick={() => onNavigate('work')}
              data-cursor="nav"
              className="hover:text-primary transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
            >
              Work
            </button>
            <button
              onClick={() => onNavigate('about')}
              data-cursor="nav"
              className="hover:text-primary transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => onNavigate('experience')}
              data-cursor="nav"
              className="hover:text-primary transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
            >
              Experience
            </button>
            <button
              onClick={() => onNavigate('contact')}
              data-cursor="nav"
              className="hover:text-primary transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
            >
              Contact
            </button>
          </div>

          <button
            onClick={scrollToTop}
            data-cursor="nav"
            className="group flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-muted hover:text-primary transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Back to top</span>
            <span className="transition-transform group-hover:-translate-y-1 text-[#92D0AB]">↑</span>
          </button>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8 text-xs text-muted font-mono">
          <div>
            <span>Designed with intention. Built for clarity.</span>
          </div>
          <div>
            <span>© 2026 Azhar Khan. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

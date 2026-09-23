import React, { useEffect } from 'react';
import { ThemeToggle } from '../ui/ThemeToggle';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  onNavigate,
  activeSection
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const navLinks = [
    { id: 'work', label: 'Work', number: '01' },
    { id: 'about', label: 'About', number: '02' },
    { id: 'experience', label: 'Experience', number: '03' },
    { id: 'leadership', label: 'Leadership', number: '04' },
    { id: 'contact', label: 'Contact', number: '05' }
  ];

  return (
    <div
      className="fixed inset-0 z-50 bg-primary/95 backdrop-blur-xl flex flex-col justify-between p-6 sm:p-10 transition-all duration-300"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
    >
      {/* Header bar inside menu */}
      <div className="flex items-center justify-between border-b border-subtle pb-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full overflow-hidden p-1 border border-subtle bg-surface flex items-center justify-center shrink-0">
            <img
              src="/images/Logo/AzharLogo.svg"
              alt="Azhar Khan Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <div className="text-sm font-bold tracking-tight font-display text-primary">AZHAR KHAN</div>
            <div className="text-[11px] text-muted uppercase font-mono tracking-wider">Lead UI/UX Designer</div>
          </div>
        </div>
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="p-2 border border-subtle hover:border-strong transition-colors rounded-full"
        >
          <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Nav List with Micro Animations */}
      <nav className="flex flex-col gap-6 my-auto py-8">
        {navLinks.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              onNavigate(item.id);
              onClose();
            }}
            data-cursor="nav"
            className={`flex items-baseline justify-between text-left group transition-all duration-200 cursor-pointer ${
              activeSection === item.id ? 'translate-x-2' : 'hover:translate-x-3'
            }`}
          >
            <span className="text-3xl sm:text-4xl font-display font-semibold tracking-tight text-primary group-hover:text-[#92D0AB] transition-colors duration-200">
              {item.label}
            </span>
            <span className="text-xs font-mono text-muted tracking-widest flex items-center gap-2">
              <span>{item.number}</span>
              <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-[#DD1251]">
                →
              </span>
            </span>
          </button>
        ))}
      </nav>

      {/* Bottom info & theme switch */}
      <div className="border-t border-subtle pt-6 flex items-center justify-between">
        <div className="text-xs text-muted font-mono">
          <span>15+ Years Experience</span>
        </div>
        <ThemeToggle />
      </div>
    </div>
  );
};

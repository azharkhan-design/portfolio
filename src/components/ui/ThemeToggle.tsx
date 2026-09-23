import React from 'react';
import { useTheme } from '../../context/ThemeContext';

export const ThemeToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
      className={`fixed bottom-5 left-5 sm:bottom-6 sm:left-6 z-40 group flex items-center gap-2 px-3.5 py-2 rounded-full bg-surface/85 backdrop-blur-xl border border-subtle hover:border-strong shadow-lg hover:shadow-xl text-primary transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer select-none ${className}`}
      title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} mode`}
    >
      <span className="sr-only">Toggle theme</span>
      
      {/* ◐ Contrast Circle Icon */}
      <svg
        className="w-4 h-4 transition-transform duration-500 group-hover:rotate-180 text-primary"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3a9 9 0 0 1 0 18z" fill="currentColor" />
      </svg>
      
      <span className="text-[12px] font-mono uppercase tracking-wider text-secondary group-hover:text-primary transition-colors">
        {theme === 'light' ? 'Dark' : 'Light'}
      </span>
    </button>
  );
};

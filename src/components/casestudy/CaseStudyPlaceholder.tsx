import React from 'react';

interface CaseStudyPlaceholderProps {
  label: string;
  subtitle?: string;
  type?: 'wireframe' | 'system' | 'flow' | 'screen' | 'mobile';
  className?: string;
  children?: React.ReactNode;
}

export const CaseStudyPlaceholder: React.FC<CaseStudyPlaceholderProps> = ({
  label,
  subtitle,
  type = 'screen',
  className = '',
  children
}) => {
  return (
    <div
      className={`relative w-full rounded-sm border border-subtle bg-surface overflow-hidden ${className}`}
    >
      {/* Top Header Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-subtle bg-badge/50 text-[11px] font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-700"></span>
          <span className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-700"></span>
          <span className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-700"></span>
          <span className="ml-2 font-medium text-secondary uppercase tracking-wider">{label}</span>
        </div>
        {subtitle && <span className="text-muted text-[10px] uppercase tracking-widest">{subtitle}</span>}
      </div>

      {/* Body Content */}
      <div className="p-6 md:p-8">
        {children ? (
          children
        ) : (
          <div className="py-12 flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 rounded-sm border border-subtle flex items-center justify-center text-muted mb-3 font-mono text-sm">
              {type === 'wireframe' ? '▦' : type === 'system' ? '❖' : type === 'flow' ? '⇋' : '▣'}
            </div>
            <p className="text-xs font-mono uppercase tracking-widest text-primary font-semibold">
              {label}
            </p>
            {subtitle && (
              <p className="text-xs text-muted font-mono mt-1 max-w-md">
                {subtitle}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

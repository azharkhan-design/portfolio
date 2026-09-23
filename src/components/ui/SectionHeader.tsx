import React from 'react';

interface SectionHeaderProps {
  label?: string;
  title: React.ReactNode;
  subtitle?: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
  action?: React.ReactNode;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  label,
  title,
  subtitle,
  description,
  align = 'left',
  className = '',
  action
}) => {
  return (
    <div className={`mb-8 sm:mb-10 ${align === 'center' ? 'text-center' : 'text-left'} ${className}`}>
      {label && (
        <div className={`flex items-center gap-3 mb-3 ${align === 'center' ? 'justify-center' : ''}`}>
          <div className="flex items-center -space-x-1">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FDD02D] shadow-xs" title="Gold" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#DD1251] shadow-xs" title="Crimson" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#92D0AB] shadow-xs" title="Mint" />
          </div>
          <span className="text-[14px] font-mono uppercase tracking-[0.25em] text-[#92D0AB] font-semibold">
            {label}
          </span>
        </div>
      )}
      
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight text-primary leading-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-2 text-base md:text-lg text-secondary font-normal max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>
        
        {action && <div className="shrink-0 mt-4 md:mt-0">{action}</div>}
      </div>

      {description && (
        <p className="mt-4 text-sm md:text-base text-muted max-w-3xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

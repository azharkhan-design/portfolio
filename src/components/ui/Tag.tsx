import React from 'react';

interface TagProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'subtle' | 'mono';
  size?: 'sm' | 'md';
  className?: string;
}

export const Tag: React.FC<TagProps> = ({
  children,
  variant = 'default',
  size = 'md',
  className = ''
}) => {
  const sizeClasses = {
    sm: 'text-[11px] px-2 py-0.5 tracking-wider',
    md: 'text-xs px-2.5 py-1 tracking-wide'
  };

  const variantClasses = {
    default: 'bg-badge text-secondary border border-subtle',
    accent: 'bg-primary text-primary border border-strong font-medium',
    subtle: 'text-muted border border-subtle bg-transparent',
    mono: 'font-mono text-muted bg-surface border border-subtle'
  };

  return (
    <span
      className={`inline-flex items-center rounded-sm uppercase font-medium transition-colors ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

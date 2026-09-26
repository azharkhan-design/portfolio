import React, { useState, useEffect } from 'react';

interface KineticNameProps {
  name?: string;
  className?: string;
}

export const KineticName: React.FC<KineticNameProps> = ({
  name = 'Azhar Khan',
  className = ''
}) => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger staggered entrance animation on mount
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  const parts = name.split(/[. ]+/);
  let charCounter = 0;

  return (
    <div
      className={`inline-flex flex-wrap items-baseline justify-center select-none ${className}`}
    >
      {parts.map((part, partIdx) => {
        return (
          <React.Fragment key={partIdx}>
            <span className="inline-flex items-baseline font-display font-extrabold tracking-tighter">
              {part.split('').map((char, charIdx) => {
                const globalIdx = charCounter++;
                const isHovered = hoveredIdx === globalIdx;
                const isNeighbor = hoveredIdx !== null && Math.abs(hoveredIdx - globalIdx) === 1;

                // Stagger delay on initial load (45ms per letter)
                const entranceDelay = globalIdx * 45;

                return (
                  <span
                    key={charIdx}
                    onMouseEnter={() => setHoveredIdx(globalIdx)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    className="inline-block cursor-default transition-all transform-gpu"
                    style={{
                      opacity: isLoaded ? 1 : 0,
                      filter: isLoaded ? 'blur(0px)' : 'blur(8px)',
                      transform: !isLoaded
                        ? 'translateY(28px) scale(0.9)'
                        : isHovered
                        ? 'translateY(-10px) scale(1.15) rotate(-2deg)'
                        : isNeighbor
                        ? 'translateY(-4px) scale(1.05)'
                        : 'translateY(0px) scale(1)',
                      transitionDelay: isLoaded ? '0ms' : `${entranceDelay}ms`,
                      transitionDuration: isLoaded ? '250ms' : '600ms',
                      transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
                    }}
                  >
                    {char}
                  </span>
                );
              })}
            </span>

            {partIdx < parts.length - 1 && (
              <span className="inline-block w-[0.25em]" aria-hidden="true" />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

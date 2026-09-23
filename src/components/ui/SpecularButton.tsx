import React, { useState, useEffect, useRef } from 'react';

interface SpecularButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  size?: 'md' | 'lg';
}

export const SpecularButton: React.FC<SpecularButtonProps> = ({
  children,
  onClick,
  className = '',
  size = 'lg',
  ...props
}) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [angle, setAngle] = useState(0);
  const [proximityOpacity, setProximityOpacity] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!buttonRef.current) return;
      const rect = buttonRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;
      const dist = Math.hypot(dx, dy);

      const proximityLimit = 250; // Proximity = 250px from screenshot

      if (dist < proximityLimit) {
        // Calculate angle towards mouse
        const rawAngle = (Math.atan2(dy, dx) * 180) / Math.PI;
        // Normalize angle (0 to 360)
        const normalizedAngle = (rawAngle + 90 + 360) % 360;
        setAngle(normalizedAngle);

        // Smooth proximity intensity ramp
        const proximityFactor = Math.max(0, 1 - dist / proximityLimit);
        setProximityOpacity(proximityFactor);
      } else {
        setProximityOpacity(0);
      }
    };

    window.addEventListener('mousemove', handleGlobalMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleGlobalMouseMove);
  }, []);

  const sizeClasses =
    size === 'lg'
      ? 'px-8 py-3.5 sm:px-10 sm:py-4 text-sm sm:text-base'
      : 'px-6 py-2.5 sm:px-8 sm:py-3 text-xs sm:text-sm';

  // Config parameters from screenshot:
  // Highlight: #ffffff, Edge: #525252, Radius: 18px, Thickness: 1px, Shine Size: 10deg, Shine Fade: 40deg
  const shineSize = 10;
  const shineFade = 40;
  const halfShine = shineSize / 2;
  const halfFade = halfShine + shineFade;

  const conicGradient = `conic-gradient(from ${angle}deg at 50% 50%, transparent 0deg, transparent ${360 - halfFade}deg, rgba(255, 255, 255, ${isHovered ? 1 : 0.85}) ${360 - halfShine}deg, #ffffff 0deg, rgba(255, 255, 255, ${isHovered ? 1 : 0.85}) ${halfShine}deg, transparent ${halfFade}deg, transparent 360deg)`;

  return (
    <div
      className={`relative inline-flex p-[1px] rounded-[18px] transition-transform duration-300 transform-gpu ${
        isHovered ? 'scale-[1.02]' : 'scale-100'
      }`}
      style={{
        background: '#525252',
      }}
    >
      {/* Dynamic Specular Border Shine Beam (Follows Mouse with 250px proximity) */}
      <div
        className="absolute inset-0 rounded-[18px] pointer-events-none transition-opacity duration-300"
        style={{
          background: conicGradient,
          opacity: isHovered ? 1 : proximityOpacity,
        }}
      />

      {/* Subtle Specular Ambient Glow when hovered */}
      <div
        className="absolute -inset-1 rounded-[22px] blur-md pointer-events-none transition-opacity duration-500"
        style={{
          background: conicGradient,
          opacity: isHovered ? 0.35 : proximityOpacity * 0.15,
        }}
      />

      {/* Inner Button Container */}
      <button
        ref={buttonRef}
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`group relative z-10 w-full inline-flex items-center justify-center gap-2.5 rounded-[17px] bg-[#0c0d10] dark:bg-[#08080a] text-[#f5f5f5] font-display font-medium tracking-tight transition-all duration-200 cursor-pointer select-none overflow-hidden active:scale-[0.98] ${sizeClasses} ${className}`}
        style={{
          boxShadow: isHovered
            ? '0 10px 30px -5px rgba(0, 0, 0, 0.6), inset 0 1px 0 0 rgba(255, 255, 255, 0.12)'
            : '0 4px 15px -3px rgba(0, 0, 0, 0.4), inset 0 1px 0 0 rgba(255, 255, 255, 0.06)',
        }}
        {...props}
      >
        {/* Subtle Top Glass Rim Reflection */}
        <div
          className="absolute top-0 inset-x-4 h-[1px] pointer-events-none"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.25) 50%, transparent 100%)',
          }}
        />

        {/* Button Content */}
        <span className="relative z-10 text-[#f5f5f5]">
          {children || "Let's Talk"}
        </span>

        {/* Diagonal Arrow Icon */}
        <span
          className="relative z-10 text-base sm:text-lg transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-neutral-400 group-hover:text-white"
          aria-hidden="true"
        >
          ↗
        </span>
      </button>
    </div>
  );
};

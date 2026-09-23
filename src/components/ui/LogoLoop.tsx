import React from 'react';

interface ProjectLogoItem {
  name: string;
  src: string;
  className?: string;
}

const LOGOS: ProjectLogoItem[] = [
  {
    name: 'Big Language Solutions',
    src: '/images/projects/Logo/LRN_BIG.svg',
    className: 'h-5 sm:h-6 max-w-[135px] sm:max-w-[155px]',
  },
  {
    name: 'CuraPatient',
    src: '/images/projects/Logo/CuraPatientLogo.svg',
    className: 'h-6.5 sm:h-8 max-w-[160px] sm:max-w-[185px]',
  },
  {
    name: 'Saal.ai',
    src: '/images/projects/Logo/SaalLogo.svg',
    className: 'h-5 sm:h-6',
  },
  {
    name: 'Yatra',
    src: '/images/projects/Logo/YatraLogo.svg',
    className: 'h-6.5 sm:h-8',
  },
  {
    name: 'Bajaj Finserv',
    src: '/images/projects/Logo/BFL.svg',
    className: 'h-6.5 sm:h-8 max-w-[135px] sm:max-w-[160px]',
  },
  {
    name: 'DriveFocus',
    src: '/images/projects/Logo/DriveFocus.png',
    className: 'h-8.5 sm:h-10.5',
  },
  {
    name: 'Othena',
    src: '/images/projects/Logo/Othenalogo.svg',
    className: 'h-5.5 sm:h-6.5 max-w-[135px] sm:max-w-[155px]',
  },
  {
    name: 'Growers Agritech',
    src: '/images/projects/Logo/GrowersLogo.svg',
    className: 'h-4.5 sm:h-5.5 max-w-[130px]',
  },
  {
    name: 'K12 Stride Learning',
    src: '/images/projects/Logo/k12-logo.svg',
    className: 'h-5 sm:h-6',
  },
  {
    name: 'Yamaha',
    src: '/images/projects/Logo/yamaha.svg',
    className: 'h-5 sm:h-6.5 max-w-[130px] sm:max-w-[150px]',
  },
  {
    name: 'GulfHR Cloud',
    src: '/images/projects/Logo/GulfHRLogo.png',
    className: 'h-6 sm:h-7.5 max-w-[130px] sm:max-w-[150px]',
  },
  {
    name: 'Wasl Dubai Properties',
    src: '/images/projects/Logo/WaslLogo.png',
    className: 'h-5 sm:h-6',
  },
];

export const LogoLoop: React.FC = () => {
  const renderLogoSet = (setKey: string, isHidden = false) => (
    <div
      className="flex items-center gap-12 sm:gap-16 px-6 shrink-0"
      aria-hidden={isHidden || undefined}
    >
      {LOGOS.map((logo, idx) => (
        <div
          key={`${setKey}-${idx}`}
          className="brand-logo-item flex items-center justify-center transition-transform duration-300 transform hover:scale-110 cursor-pointer"
          title={logo.name}
        >
          <img
            src={logo.src}
            alt={logo.name}
            className={`brand-logo-img w-auto object-contain max-w-[140px] sm:max-w-[160px] ${logo.className || 'h-5 sm:h-6'}`}
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );

  return (
    <div className="logo-loop-container group w-full py-[38px] sm:py-[42px] overflow-hidden relative select-none bg-surface/20 backdrop-blur-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-4 md:gap-8">
        
        {/* Left Fixed Heading Text: "Brands I have worked with" */}
        <div className="shrink-0 flex items-center pr-0 md:pr-4 z-20">
          <span className="text-xs sm:text-[13px] font-normal text-muted/80 tracking-tight whitespace-nowrap">
            Brands I have worked with
          </span>
        </div>

        {/* Right Infinite Seamless Scrolling Container with Deep Opacity Fade Masks */}
        <div
          className="relative flex-1 w-full overflow-hidden flex items-center"
          style={{
            maskImage:
              'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.3) 5%, rgba(0,0,0,0.8) 12%, black 22%, black 78%, rgba(0,0,0,0.8) 88%, rgba(0,0,0,0.3) 95%, transparent 100%)',
            WebkitMaskImage:
              'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.3) 5%, rgba(0,0,0,0.8) 12%, black 22%, black 78%, rgba(0,0,0,0.8) 88%, rgba(0,0,0,0.3) 95%, transparent 100%)',
          }}
        >
          {/* Marquee Animation Track */}
          <div className="flex w-fit animate-logo-marquee group-hover:[animation-play-state:paused] items-center">
            {renderLogoSet('set-1', false)}
            {renderLogoSet('set-2', true)}
            {renderLogoSet('set-3', true)}
          </div>
        </div>

      </div>
    </div>
  );
};

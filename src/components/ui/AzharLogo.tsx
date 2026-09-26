import React from 'react';

interface AzharLogoProps {
  className?: string;
}

export const AzharLogo: React.FC<AzharLogoProps> = ({
  className = 'w-full h-full'
}) => {
  return (
    <svg
      viewBox="0 0 209 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`azhar-logo ${className}`}
      aria-hidden="true"
    >
      {/* Gold Triangle (Bottom-Left) */}
      <path
        className="logo-gold"
        d="M29.268 161.055C30.0378 159.721 31.9623 159.721 32.7321 161.055L56.1147 201.555C56.8845 202.888 55.9223 204.555 54.3827 204.555H7.61731C6.07771 204.555 5.11546 202.888 5.88526 201.555L29.268 161.055Z"
      />
      {/* Mint Triangle (Top-Right) */}
      <path
        className="logo-mint"
        d="M156.922 27.9785C156.921 26.8735 157.817 25.9776 158.922 25.9779L204.076 25.9905C205.858 25.991 206.75 28.145 205.49 29.4048L160.348 74.5461C159.089 75.8059 156.935 74.914 156.934 73.1325L156.922 27.9785Z"
      />
      {/* Crimson Quadrilateral (Center Main Stem) */}
      <path
        className="logo-crimson"
        d="M60.5117 98.1302C60.1939 97.5405 60.1924 96.8308 60.5077 96.2397L96.2404 29.2699C96.9848 27.8747 98.9775 27.8545 99.75 29.2343L196.325 201.724C197.07 203.056 196.109 204.698 194.583 204.701L119.225 204.837C118.488 204.838 117.81 204.434 117.46 203.786L60.5117 98.1302Z"
      />
    </svg>
  );
};

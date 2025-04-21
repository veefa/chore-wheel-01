// src/components/WheelComponent.tsx
import React from 'react';

const WheelComponent: React.FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="508" height="508" viewBox="0 0 508 508" fill="none">
      <g filter="url(#filter0_d_0_1)">
        <circle cx="254" cy="250" r="250" fill="#040C1B" />
        <circle cx="254" cy="250" r="249" stroke="#040C1B" strokeWidth="2" />
      </g>
      {/* Wheel Lines */}
      <path d="M6 250L502 250" stroke="#273C62" strokeWidth="3" strokeLinecap="round" />
      <path d="M39.4267 374.75L468.975 126.75" stroke="#273C62" strokeWidth="3" strokeLinecap="round" />
      <path d="M128.28 463.2L376.28 33.6514" stroke="#273C62" strokeWidth="3" strokeLinecap="round" />
      <path d="M254 2L254 498" stroke="#273C62" strokeWidth="3" strokeLinecap="round" />
      <path d="M39 127L468.549 375" stroke="#273C62" strokeWidth="3" strokeLinecap="round" />
      <path d="M129.876 35.8775L377.876 465.426" stroke="#273C62" strokeWidth="3" strokeLinecap="round" />
      <circle cx="254" cy="248" r="15" fill="#273C62" />
      <defs>
        <filter id="filter0_d_0_1" x="0" y="0" width="508" height="508" filterUnits="userSpaceOnUse">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" />
        </filter>
      </defs>
    </svg>
  );
};

export default WheelComponent;
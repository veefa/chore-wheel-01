// src/components/ChoreWheel.tsx
import React, { useState } from 'react';
import WheelComponent from './WheelComponent';

const ChoreWheel: React.FC = () => {
  const [angle, setAngle] = useState(0); // Total rotation angle
  const [spinning, setSpinning] = useState(false);

  const handleSpin = () => {
    if (spinning) return;

    setSpinning(true);
    const randomRotation = 360 * 6 + Math.floor(Math.random() * 360); // 6 full spins + random

    setAngle((prevAngle) => prevAngle + randomRotation);

    // Finish spin after 3s (same as CSS transition duration)
    setTimeout(() => {
      setSpinning(false);
    }, 3000);
  };

  return (
    <div className="flex flex-col items-center">
      {/* Triangle Pointer */}
      <div className="relative w-[500px] h-[500px]">
        <div className="top-[-20px] left-1/2 absolute text-3xl -translate-x-1/2 transform">
          ▲
        </div>

        {/* Wheel with rotation */}
        <div
          className="transition-transform duration-[3000ms] ease-out"
          style={{ transform: `rotate(${angle}deg)` }}
        >
          <WheelComponent />
        </div>
      </div>

      <button
        onClick={handleSpin}
        disabled={spinning}
        className={`bg-blue-600 hover:bg-blue-700 mt-6 px-4 py-2 rounded-xl text-white transition ${
          spinning ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        {spinning ? 'Spinning...' : 'Spin the Wheel'}
      </button>
    </div>
  );
};

export default ChoreWheel;
// src/components/ChoreWheel.tsx

import React, { useState } from 'react';
import WheelSVG from '../assets/wheelSvg.svg';

const ChoreWheel: React.FC = () => {
  // List of chores to label around the wheel
  const tasks = ['Dishes', 'Laundry', 'Trash', 'Vacuum', 'Cooking', 'Shopping'];

  // Track the rotation angle of the wheel
  const [angle, setAngle] = useState(0);

  // Track whether the wheel is spinning
  const [spinning, setSpinning] = useState(false);

  // Handle spin button click
  const handleSpin = () => {
    if (spinning) return; // Prevent double spins

    setSpinning(true);

    // Calculate a spin of 5 full turns + random extra angle
    const randomSpin = 360 * 5 + Math.floor(Math.random() * 360);
    setAngle((prevAngle) => prevAngle + randomSpin);

    // Reset spinning state after animation ends (3s)
    setTimeout(() => {
      setSpinning(false);
    }, 3000);
  };

  return (
    <div className="flex flex-col items-center">
      {/* Outer wheel container with fixed size */}
      <div className="relative w-[500px] h-[500px]">
        {/* Triangle pointer at top center */}
        <div className="top-[-20px] left-1/2 z-10 absolute text-black text-xl -translate-x-1/2 transform">
          ▲
        </div>

        {/* Rotating SVG wheel */}
        <div
          className="w-full h-full transition-transform duration-[3000ms] ease-out"
          style={{ transform: `rotate(${angle}deg)` }}
        >
          <WheelSVG />

          {/* Task labels positioned evenly around the wheel */}
          {tasks.map((task, index) => {
            const rotate = (360 / tasks.length) * index;

            return (
              <div
                key={task}
                className="top-1/2 left-1/2 absolute font-medium text-white text-sm origin-center"
                style={{
                  // Rotate and move label outward, then unrotate to keep it upright
                  transform: `rotate(${rotate}deg) translateY(-220px) rotate(-${rotate}deg)`,
                }}
              >
                {task}
              </div>
            );
          })}
        </div>
      </div>

      {/* Spin button */}
      <button
        onClick={handleSpin}
        disabled={spinning}
        className={`mt-6 px-4 py-2 rounded-xl text-white transition ${
          spinning ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-950 hover:bg-blue-800'
        }`}
      >
        {spinning ? 'Spinning...' : 'Spin the Wheel'}
      </button>
    </div>
  );
};

export default ChoreWheel;
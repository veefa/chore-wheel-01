// src/components/ChoreWheel.tsx
import React, { useState } from 'react';
import WheelComponent from './WheelComponent';

const ChoreWheel: React.FC = () => {
  
  const [angle, setAngle] = useState(0); // Total rotation angle
  const [spinning, setSpinning] = useState(false);

  const tasks = ['Dishes', 'Laundry', 'Trash', 'Vacuum', 'Cooking', 'Shopping', 'Cleaning', 'Organizing', 'Gardening', 'Self-Care', 'Car Wash', 'Exercise']


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
        <div className="top-1/2 left-[510px] absolute text-slate-800 text-3xl rotate-180 -translate-y-1/2">
          ▶
        </div>

        {/* Wheel with rotation */}
        <div
          className="transition-transform duration-[3000ms] ease-out"
          style={{ transform: `rotate(${angle}deg)` }}
        >
          <WheelComponent tasks={tasks}/>
        </div>
      </div>

      <button
        onClick={handleSpin}
        disabled={spinning}
        className={`bg-slate-800 hover:bg-gray-700 mt-6 px-4 py-2 rounded-xl text-slate-400 transition ${
          spinning ? 'opacity-50 cursor' : ''
        }`}
      >
        {spinning ? 'Spinning...' : 'Spin the Wheel'}
      </button>
    </div>
  );
};

export default ChoreWheel;
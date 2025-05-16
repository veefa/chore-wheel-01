// src/components/ChoreWheel.tsx
import React, { useState } from "react";
import WheelComponent from "./WheelComponent";

const ChoreWheel: React.FC = () => {
  const [angle, setAngle] = useState(0); // Total rotation angle
  const [spinning, setSpinning] = useState(false);

  const tasks = [
    "Dishes",
    "Laundry",
    "Trash",
    "Vacuum",
    "Cooking",
    "Shopping",
    "Cleaning",
    "Organizing",
    "Gardening",
    "Self-Care",
    "Car Wash",
    "Exercise",
  ];
  const [selectedTask, setSelectedTask] = useState<string | null>(null);

  const handleSpin = () => {
    if (spinning) return;

    setSpinning(true);
    const fullSpins = 6 * 360; // Number of full spins before stopping
    const randomRotation = Math.floor(Math.random() * 360); // Random rotation for final position
    const totalRotation = angle + fullSpins + randomRotation; // Total rotation angle

    setAngle(totalRotation);

    // Finish spin after 3s (same as CSS transition duration)
    setTimeout(() => {
      setSpinning(false);

      //calculate the index of the selected task
      const normalizedAngle = totalRotation % 360;
      const sliceAngle = 360 / tasks.length;

      // Since the pointer is at the top, reverse direction
      const rawIndex = Math.floor(((360 - normalizedAngle) % 360) / sliceAngle);
      const index = (rawIndex + 3) % tasks.length; // Adjust by 3 slices
      const task = tasks[index];
      setSelectedTask(task);
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
        style={{ transform: `rotate(${angle}deg)` }}>
        <WheelComponent tasks={tasks} />
      </div>
      </div>
      {/* Spin Button */}
      <button
      onClick={handleSpin}
      disabled={spinning}
      className={`bg-slate-800 hover:bg-gray-700 mt-6 px-4 py-2 rounded-xl text-slate-400 transition ${
        spinning ? "opacity-50 cursor-not-allowed" : ""
      }`}>
      {spinning ? "Spinning..." : "Spin the Wheel"}
      </button>
      {/* Selected Task Popup Notification */}
      {selectedTask && (
      <div className="z-50 fixed inset-0 flex justify-center items-center">
        <div className="relative bg-white shadow-lg px-8 py-6 border border-slate-200 rounded-xl text-slate-700 text-xl">
        {/* Dismiss Button */}
        <button
          className="top-2 right-2 absolute flex items-center text-slate-400 hover:text-red-500 text-base"
          onClick={() => setSelectedTask(null)}
          aria-label="Dismiss"
        >
           <span className="ml-1">❌</span>
        </button>
        <div className="mt-6">
          Selected Task: <span className="font-bold">{selectedTask}</span>
        </div>
        </div>
      </div>
      )}
    </div>
  );
};

export default ChoreWheel;

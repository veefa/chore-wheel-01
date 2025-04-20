// src/App.tsx

import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [spinning, setSpinning] = useState(false);

  // Dummy tasks
  const tasks = ['Wash Dishes', 'Vacuum Floor', 'Do Laundry', 'Take Out Trash'];

  const handleSpin = () => {
    setSpinning(true);

    // Stop spinning after 2 seconds
    setTimeout(() => {
      setSpinning(false);
      // Later we'll randomly select a task here
    }, 2000);
  };

  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 p-4 min-h-screen">
      <div className="bg-white shadow-xl p-6 rounded-2xl w-full max-w-md">
        <h1 className="mb-6 font-bold text-gray-800 text-3xl text-center">Chore Wheel</h1>

        {/* Chore Wheel */}
        <div
          className={`w-64 h-64 bg-blue-400 rounded-full mb-6 flex items-center justify-center transition-transform duration-1000 ease-out ${
            spinning ? 'animate-spin' : ''
          }`}
        >
          <span className="font-semibold text-white text-xl">Spin Me!</span>
        </div>

        {/* Task List */}
        <div className="mb-6">
          <h2 className="mb-2 font-medium text-gray-700 text-lg">Chores:</h2>
          <ul className="space-y-2">
            {tasks.map((task, index) => (
              <li
                key={index}
                className="bg-gray-200 shadow-sm px-3 py-2 rounded-lg text-gray-800"
              >
                {task}
              </li>
            ))}
          </ul>
        </div>

        {/* Controls */}
        <div className="flex justify-center gap-4">
          <button
            onClick={handleSpin}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl text-white transition-colors"
          >
            Spin
          </button>
          <button
            className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-xl text-white transition-colors"
          >
            Complete Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
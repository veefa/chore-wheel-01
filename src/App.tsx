import React from 'react';
import './index.css';

const App: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 h-screen">
      <div className="bg-white shadow-lg p-6 rounded-xl w-80">
        <h1 className="mb-4 font-bold text-gray-700 text-3xl text-center">Chore Wheel</h1>

        {/* Chore Wheel */}
        <div className="flex justify-center items-center bg-blue-300 mb-6 rounded-full w-full h-64">
          <span className="font-semibold text-white text-2xl">Spin Me!</span>
        </div>

        {/* Task List */}
        <div className="mb-6">
          <ul className="space-y-2">
            <li className="bg-gray-200 p-2 rounded">Task 1</li>
            <li className="bg-gray-200 p-2 rounded">Task 2</li>
            <li className="bg-gray-200 p-2 rounded">Task 3</li>
            <li className="bg-gray-200 p-2 rounded">Task 4</li>
          </ul>
        </div>

        {/* Buttons */}
        <div className="flex justify-center space-x-4">
          <button className="bg-blue-500 px-4 py-2 rounded text-white">Spin</button>
          <button className="bg-green-500 px-4 py-2 rounded text-white">Complete Task</button>
        </div>
      </div>
    </div>
  );
}

export default App;
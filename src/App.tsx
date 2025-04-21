import React from 'react';
import ChoreWheel from '../src/components/ChoreWheel';

const App: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 bg-gray-100 min-h-screen">
      <h1 className="font-bold text-gray-800 text-3xl">Chore Wheel App</h1>
      <ChoreWheel />
    </div>
  );
};

export default App;
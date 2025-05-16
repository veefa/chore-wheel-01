// src/App.tsx
import React from "react";
import ChoreWheel from "./components/ChoreWheel";

const App: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-slate-400 p-2 sm:p-4 w-full min-h-dvh overflow-x-hidden">
      <h1 className="mb-6 font-bold text-slate-900 text-2xl sm:text-3xl text-center">
        Chore Wheel App
      </h1>
      <ChoreWheel />
    </div>
  );
};

export default App;

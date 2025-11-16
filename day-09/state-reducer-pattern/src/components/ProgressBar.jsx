import React from "react";
import { useProgress } from "../context/ProgressContext";

const ProgressBar = () => {
  const { progress, step, totalSteps } = useProgress();

  return (
    <div className="w-full p-2">
      <div className="flex justify-between text-sm font-semibold mb-1">
        <span>
          Step {step + 1} / {totalSteps}
        </span>
        <span>{progress}%</span>
      </div>

      <div className="w-full bg-gray-300 h-3 rounded-xl overflow-hidden">
        <div
          className="h-3 bg-green-600 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;

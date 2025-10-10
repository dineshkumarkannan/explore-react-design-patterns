import React, { useState } from "react";

const Toggle = ({ render }) => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="flex flex-col gap-2.5 items-center">
      <button
        onClick={() => setIsOn(!isOn)}
        className={`relative w-16 h-9 rounded-full transition-colors duration-300 ${
          isOn ? "bg-green-500" : "bg-gray-400"
        }`}
      >
        <span
          className={`absolute top-1 left-1 w-7 h-7 rounded-full bg-white transition-transform duration-300 ${
            isOn ? "translate-x-7" : "translate-x-0"
          }`}
        />
      </button>
      <div>{render(isOn)}</div>
    </div>
  );
};

export default Toggle;

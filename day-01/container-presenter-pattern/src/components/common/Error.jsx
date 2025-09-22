import React from "react";

const Error = ({ title, message, onRetry }) => {
  return (
    <div className="w-[80%] bg-red-100 p-2 flex flex-col gap-1.5">
      <h4 className="text-3xl text-red-400">{title}</h4>
      <p className="text-xl">{message}</p>
      <button
        className="w-[fit-content] border-1 border-red-500 rounded-xl py-2 px-4 bg-red-300 text-red-700"
        onClick={onRetry}
      >
        Retry
      </button>
    </div>
  );
};

export default Error;

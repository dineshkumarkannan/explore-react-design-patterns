import React, { useEffect } from "react";

const SuccessToast = ({ message, onClose, duration = 3000 }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return (
    <div className="fixed top-5 right-5 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 animate-slide-in">
      <span>✅</span>
      <span>{message}</span>
      <button
        onClick={onClose}
        className="ml-3 text-white font-bold hover:text-gray-200"
      >
        ✖
      </button>
    </div>
  );
};

export default SuccessToast;

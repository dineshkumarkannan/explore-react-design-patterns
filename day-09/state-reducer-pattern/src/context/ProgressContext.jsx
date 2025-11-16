import React, { createContext, useContext, useState } from "react";

const ProgressContext = createContext(null);

export const ProgressProvider = ({ children, totalSteps = 3 }) => {
  const [step, setStep] = useState(0);

  const next = () => setStep((s) => Math.min(s + 1, totalSteps - 1));
  const previous = () => setStep((s) => Math.max(s - 1, 0));
  const goTo = (index) =>
    setStep(() => Math.max(0, Math.min(index, totalSteps - 1)));

  const progress = Math.round(((step + 1) / totalSteps) * 100);

  return (
    <ProgressContext.Provider
      value={{ step, next, previous, goTo, progress, totalSteps }}
    >
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error("useProgress must be used inside ProgressProvider");
  return ctx;
};

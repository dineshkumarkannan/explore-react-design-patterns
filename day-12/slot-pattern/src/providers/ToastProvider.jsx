import { useCallback, useRef, useState } from "react";

import { ToastContext } from "../context/ToastContext";
import { ToastViewport } from "../components/ToastViewport";

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);
  const templatesRef = useRef({});

  const registerTemplate = useCallback((name, component) => {
    templatesRef.current[name] = component;
  }, []);

  const showToast = useCallback(({ template, slots, duration = 3000 }) => {
    const ToastTemplate = templatesRef.current[template];
    if (!ToastTemplate) {
      return;
    }

    const id = crypto.randomUUID();
    setToasts((prev) => [...prev, { id, ToastTemplate, slots }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, duration);
  }, []);

  return (
    <ToastContext.Provider value={{ registerTemplate, showToast }}>
      {children}
      <ToastViewport toasts={toasts} />
    </ToastContext.Provider>
  );
}

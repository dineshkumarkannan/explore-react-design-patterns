import { useEffect, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useTheme = () => {
  const [storeValue, setStoreValue] = useLocalStorage("theme");

  const [theme, setTheme] = useState(() => {
    if (storeValue) {
      return storeValue;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  const toggleTheme = () => {
    const newTheme = storeValue === "light" ? "dark" : "light";
    setTheme(newTheme);
    setStoreValue(newTheme);
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return [theme, toggleTheme];
};

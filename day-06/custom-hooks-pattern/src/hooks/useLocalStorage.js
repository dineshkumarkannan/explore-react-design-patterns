import { useCallback, useEffect, useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const readValue = useCallback(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (err) {
      console.warn(`Error, key ${key} :`, err);
      return initialValue;
    }
  }, [key, initialValue]);
  const [storedValue, setSetStoredValue] = useState(readValue());

  const updateValue = useCallback(
    (val) => {
      try {
        if (!val) throw new Error("Value should be valid!");

        setSetStoredValue(val);
        window.localStorage.setItem(key, JSON.stringify(val));
      } catch (err) {
        console.warn(`Error, key ${key} :`, err);
      }
    },
    [key, storedValue]
  );

  const clearValue = useCallback(() => {
    window.localStorage.removeItem(key);
    setSetStoredValue(initialValue);
  }, [key, initialValue]);

  useEffect(() => {
    if (!key) return;

    setSetStoredValue(readValue());
  }, [key, readValue]);

  return [storedValue, updateValue, clearValue];
};

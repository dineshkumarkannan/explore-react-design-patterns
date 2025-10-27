import { useCallback } from "react";

export const useClipBoard = () => {
  const writeText = useCallback(async (value) => {
    try {
      if (!value) throw new Error(`Value should be valid.`);
      if (navigator) {
        await navigator.clipboard.writeText(value);
        alert("Value Copied!");
      }
    } catch (err) {
      console.warn(err?.message);
      alert(err?.message);
    }
  }, []);

  const readText = useCallback(async () => {
    const text = await navigator.clipboard.readText();
    console.log(text);
    return text;
  }, []);

  return [writeText, readText];
};

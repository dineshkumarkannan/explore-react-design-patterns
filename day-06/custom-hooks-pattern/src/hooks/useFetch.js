import { useEffect, useRef, useState } from "react";

export const useFetch = (url, requestOptions = {}) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const abortControllerRef = useRef(null);

  async function fetchCall() {
    if (!url) return;

    setIsPending(true);
    setIsError(false);
    setIsSuccess(false);
    setErrorMessage("");

    abortControllerRef.current = new AbortController();

    try {
      const apiRes = await fetch(url, {
        ...requestOptions,
        signal: abortControllerRef.current.signal,
      });
      if (!apiRes.ok) throw new Error(`Request failed: ${apiRes.status}`);
      const resData = await apiRes.json();
      setData(resData);
      setIsSuccess(true);
    } catch (err) {
      if (err.name === "AbortError") return;
      setErrorMessage(err.message || "Something went wrong!");
      setIsError(true);
    } finally {
      setIsPending(false);
    }
  }

  useEffect(() => {
    fetchCall();

    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, [url, JSON.stringify(requestOptions)]);

  return {
    data,
    isPending,
    isError,
    errorMessage,
    isSuccess,
  };
};

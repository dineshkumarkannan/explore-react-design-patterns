import { useEffect } from "react";
import { eventBus } from "../lib/eventBus";

export const useEvent = (event, callback) => {
  useEffect(() => {
    const unsubscribe = eventBus.subscribe(event, callback);
    return () => unsubscribe();
  }, [event, callback]);
};

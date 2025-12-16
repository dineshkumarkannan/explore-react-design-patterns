import { useCallback, useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => {
    console.log("Child clicked");
  }, []);

  return (
    <div className="p-2 flex gap-4">
      <button className="bg-amber-400" onClick={() => setCount((c) => c + 1)}>
        Increment
      </button>
      <Child onClick={handleClick} />
    </div>
  );
};

export default Parent;

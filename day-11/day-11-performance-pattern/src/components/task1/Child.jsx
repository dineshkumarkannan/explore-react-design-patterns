import { memo } from "react";

const Child = memo(({ onClick }) => {
  console.log("Child render");
  return (
    <button className=" bg-indigo-400 text-gray-100" onClick={onClick}>
      Click
    </button>
  );
});

export default Child;

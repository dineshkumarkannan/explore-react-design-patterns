import React, { useState } from "react";

const Toggle = ({ children }) => {
  const [isOn, setIsOn] = useState(false);
  const toggle = () => setIsOn((prev) => !prev);

  return (
    <div className="flex flex-col gap-1.5 items-center">
      <div>{children({ isOn, toggle })}</div>
    </div>
  );
};

export default Toggle;

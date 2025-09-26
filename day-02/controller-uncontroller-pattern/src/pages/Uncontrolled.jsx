import { useState } from "react";
import UncontrolledWithoutRef from "../components/UncontrolledWithoutRef";
import UncontrolledWithRef from "../components/UncontrolledWithRef";

const Uncontrolled = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <>
      <div className="flex justify-center mb-5">
        <button
          className={`px-4 py-2  ${
            toggle ? "bg-indigo-300 underline" : "bg-indigo-200"
          }`}
          onClick={() => setToggle(true)}
        >
          With Ref
        </button>
        <button
          className={`px-4 py-2  ${
            !toggle ? "bg-indigo-300 underline" : "bg-indigo-200"
          }`}
          onClick={() => setToggle(false)}
        >
          Without Ref
        </button>
      </div>

      {toggle ? <UncontrolledWithRef /> : <UncontrolledWithoutRef />}
    </>
  );
};

export default Uncontrolled;

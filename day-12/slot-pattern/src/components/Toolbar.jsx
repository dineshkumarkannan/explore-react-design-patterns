import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";

const Toolbar = ({ slots = {} }) => {
  const ref = useRef();
  const [collapsed, setCollapsed] = useState(
    window.innerWidth < 600 ? true : false
  );
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const resizeFn = () => {
      setCollapsed(window.innerWidth < 600);
    };
    window.addEventListener("resize", resizeFn);
    return () => {
      window.removeEventListener("resize", resizeFn);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="flex flex-col gap-2.5 px-2 py-3 border-[1px] border-gray-500 rounded-s relative"
    >
      <div className="flex justify-between">
        <div>{slots.start}</div>
        {!collapsed && <div className="">{slots.center}</div>}

        {collapsed ? (
          <button
            className="right-1.5 hover:cursor-pointer"
            onClick={() => setOpen((v) => !v)}
          >
            ⠇
          </button>
        ) : (
          <div className="right-1.5">{slots.end}</div>
        )}
      </div>
      {collapsed && open && (
        <div className="flex flex-col gap-1.5 justify-center items-center hover:cursor-pointer">
          <h3 className="hover:bg-gray-400">Overflow</h3>
          <div className="hover:bg-gray-400">{slots.center}</div>
        </div>
      )}
    </div>
  );
};

export default Toolbar;

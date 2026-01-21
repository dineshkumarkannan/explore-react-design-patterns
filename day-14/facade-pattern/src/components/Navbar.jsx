import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="m-0 w-[inherit] h-[content-fit] py-[1rem]">
      <ul className="flex flex-col justify-center items-center gap-3 text-2xl md:text-2xl md:flex-row md:gap-10">
        <li>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? "text-amber-800 font-bold" : ""
            }
          >
            Task 1
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/task2"}
            className={({ isActive }) =>
              isActive ? "text-amber-800 font-bold" : ""
            }
          >
            Task 2
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/task3"}
            className={({ isActive }) =>
              isActive ? "text-amber-800 font-bold" : ""
            }
          >
            Task 3
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

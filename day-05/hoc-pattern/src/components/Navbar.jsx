import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="m-0 w-[inherit] h-[content-fit] bg-amber-300 py-[1rem]">
      <ul className="flex flex-col justify-center items-center gap-3 text-2xl md:text-3xl md:flex-row md:gap-10">
        <li>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? "text-amber-800 font-bold" : ""
            }
          >
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/admin"}
            className={({ isActive }) =>
              isActive ? "text-amber-800 font-bold" : ""
            }
          >
            Admin
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/reports"}
            className={({ isActive }) =>
              isActive ? "text-amber-800 font-bold" : ""
            }
          >
            Reports
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

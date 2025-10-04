import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <ul className="flex flex-col justify-center md:flex-row md:gap-2">
      <li className=" bg-indigo-200 py-2 px-4 font-bold text-indigo-700">
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? "underline" : "")}
        >
          Home
        </NavLink>
      </li>
      <li className="bg-indigo-200 py-2 px-4 font-bold text-indigo-700">
        <NavLink
          to={"/controlled"}
          className={({ isActive }) => (isActive ? "underline" : "")}
        >
          Controlled Component
        </NavLink>
      </li>
      <li className=" bg-indigo-200 py-2 px-4 font-bold text-indigo-700">
        <NavLink
          to={"/uncontrolled"}
          className={({ isActive }) => (isActive ? "underline" : "")}
        >
          Uncontrolled Component
        </NavLink>
      </li>
      <li className=" bg-indigo-200 py-2 px-4 font-bold text-indigo-700">
        <NavLink
          to={"/actionformstate"}
          className={({ isActive }) => (isActive ? "underline" : "")}
        >
          Used Action form state
        </NavLink>
      </li>
    </ul>
  );
};

export default Navbar;

import React, { useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

const Navbar = () => {
  const [theme, toggleTheme] = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <ul className="hidden md:flex space-x-5 text-gray-700 dark:text-gray-200 font-medium">
          <li>
            <NavLink
              href="#home"
              className="hover:text-blue-600 dark:hover:text-blue-400"
              to={"/"}
            >
              User Details
            </NavLink>
          </li>
          <li>
            <NavLink
              href="#home"
              className="hover:text-blue-600 dark:hover:text-blue-400"
              to={"/posts"}
            >
              Posts Details
            </NavLink>
          </li>
          <li>
            <NavLink
              href="#home"
              className="hover:text-blue-600 dark:hover:text-blue-400"
              to={"/clip-board"}
            >
              Clip board
            </NavLink>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun size={20} className="text-yellow-400" />
            ) : (
              <Moon size={20} className="text-gray-600" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 dark:text-gray-200 focus:outline-none"
            onClick={() => toggleMenu()}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-sm">
          <ul className="flex flex-col space-y-3 px-6 py-4 text-gray-700 dark:text-gray-200 font-medium">
            <li>
              <NavLink
                href="#home"
                className="hover:text-blue-600 dark:hover:text-blue-400"
                to={"/"}
                onClick={toggleMenu}
              >
                User Details
              </NavLink>
            </li>
            <li>
              <NavLink
                href="#home"
                className="hover:text-blue-600 dark:hover:text-blue-400"
                to={"/posts"}
                onClick={toggleMenu}
              >
                Posts Details
              </NavLink>
            </li>
            <li>
              <NavLink
                href="#home"
                className="hover:text-blue-600 dark:hover:text-blue-400"
                to={"/clip-board"}
                onClick={toggleMenu}
              >
                Clip Board
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

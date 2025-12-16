import { Navigate, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-gray-700 p-4 text-white">
      <ul className="flex justify-center">
        <li className="mx-4">
          <NavLink to="/task1">Task 1</NavLink>
        </li>
        <li className="mx-4">
          <NavLink to="/task2">Task 2</NavLink>
        </li>
        <li className="mx-4">
          <NavLink to="/task3">Task 3</NavLink>
        </li>
        <li className="mx-4">
          <NavLink to="/task4">Task 4</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

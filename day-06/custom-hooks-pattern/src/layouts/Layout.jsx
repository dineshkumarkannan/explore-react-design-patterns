import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-[25%] md:mt-[5%] bg-bgContrast">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;

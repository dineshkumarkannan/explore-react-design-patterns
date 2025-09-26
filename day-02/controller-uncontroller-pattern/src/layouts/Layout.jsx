import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="w-[100vw] md:p-[5%] lg:py-[5%]">
      <Navbar />
      <div className="p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;

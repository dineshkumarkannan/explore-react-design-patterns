import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="w-[vw] h-[wh] mt-[1rem] mx-[2rem] md:mx-[10%] lg:mx-[20%]">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;

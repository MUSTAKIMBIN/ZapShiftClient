import React from "react";
import { Outlet } from "react-router";
import Footer from "../../pages/shared/Footer/Footer";
import Navber from "../../pages/shared/Navber/Navber";

const RootLayout = () => {
  return (
    <div className="max-w-7xl mx-auto bg-[#eaeced6c]">
      <Navber></Navber>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;

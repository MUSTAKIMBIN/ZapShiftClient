import React from "react";
import Logo from "../../Components/Logo/Logo";
import { Outlet } from "react-router";
import authImg from "../../assets/authImage.png";

const AuthLayout = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Logo></Logo>
      <div className="flex flex-col-reverse md:flex-row md:text-center md:justify-between">
        <div className="w-1/2">
          <Outlet></Outlet>
        </div>
        <div className="w-1/2 bg-[#FAFDF0] h-full">
          <img src={authImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;

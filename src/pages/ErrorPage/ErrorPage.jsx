import React from "react";
import errorImg from "../../assets/error.png";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="flex flex-col text-center justify-center">
      <div className="grid place-items-center">
        <img src={errorImg} alt="" />
      </div>
      <Link to={"/"}>
        <button className="btn bg-primary">Go Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;

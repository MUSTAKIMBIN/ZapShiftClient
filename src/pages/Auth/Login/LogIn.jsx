import React from "react";
import { Link } from "react-router";

const LogIn = () => {
  return (
    <div className="w-2/3 py-10 mx-auto">
      <form>
        <fieldset className="fieldset ">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <div>
            <Link to={"/register"}>
              <p className="">
                Don't Have an Account{" "}
                <span className="text-blue-700">Register</span>
              </p>
            </Link>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </form>
    </div>
  );
};

export default LogIn;

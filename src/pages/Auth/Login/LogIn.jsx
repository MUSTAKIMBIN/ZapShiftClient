import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import useAuth from "../../../Hooks/useAuth";
import toast from "react-hot-toast";

const LogIn = () => {
  const { register, handleSubmit } = useForm();
  const { signInUser } = useAuth();
  const handleLogin = (data) => {
    // console.log(data);
    signInUser(data.email, data.password)
      .then((res) => {
        console.log(res.user);
        toast.success("Login Successful");
      })
      .catch((err) => {
        console.log(err.message);
        toast.error(err.message);
      });
  };
  return (
    <div className="w-2/3 py-10 mx-auto">
      <form onSubmit={handleSubmit(handleLogin)}>
        <fieldset className="fieldset ">
          {/* email */}
          <label className="label">Email</label>
          <input
            type="email"
            className="input"
            {...register("email")}
            placeholder="Email"
          />
          {/* password */}
          <label className="label">Password</label>
          <input
            type="password"
            className="input"
            {...register("password")}
            placeholder="Password"
          />
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

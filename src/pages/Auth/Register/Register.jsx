import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const handleRegistration = (data) => {
    console.log(data);
  };
  return (
    <div className="w-2/3 py-10 mx-auto">
      <form onSubmit={handleSubmit(handleRegistration)}>
        <fieldset className="fieldset">
          {/* email */}
          <label className="label">Email</label>
          <input
            type="email"
            {...register("email")}
            className="input"
            placeholder="Email"
          />
          {/* password */}
          <label className="label">Password</label>
          <input
            type="password"
            {...register("password")}
            className="input"
            placeholder="Password"
          />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <div>
            <Link to={"/login"}>
              <p className="">
                Already Have an Account{" "}
                <span className="text-blue-700">LogIn</span>
              </p>
            </Link>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </form>
    </div>
  );
};

export default Register;

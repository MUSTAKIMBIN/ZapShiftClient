import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import useAuth from "../../../Hooks/useAuth";
import toast from "react-hot-toast";
import SocialLogin from "../SocialLogin/SocialLogin";
import axios from "axios";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { registerUser, updateUserProfile } = useAuth();

  const handleRegistration = (data) => {
    console.log(data, data.image[0]);
    const profileImage = data.image[0];
    registerUser(data.email, data.password)
      .then((res) => {
        console.log(res.user);
        // store the imgae and get the url
        const formData = new FormData();
        formData.append("image", profileImage);

        const imageApiURl = `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_Image_host
        }`;

        axios.post(imageApiURl, formData).then((res) => {
          console.log(`after imgae upload `, res.data.data.display_url);
          const updataeProfile = {
            displayName: data.name,
            photoURL: res.data.data.display_url,
          };
          updateUserProfile(updataeProfile)
            .then(() => {
              console.log("user profile updated");
            })
            .catch((err) => {
              console.log(err.message);
            });
        });
        // update user profile
        toast.success("Registration Successful");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="w-2/3 py-10 mx-auto">
      <form onSubmit={handleSubmit(handleRegistration)}>
        <fieldset className="fieldset">
          {/* Image */}
          <label className="label">Image</label>
          <input
            type="file"
            {...register("image", { required: true })}
            className="file-input"
            placeholder="Your name"
          />

          {errors.image?.type === "required" && (
            <p className="text-red-500">Image is required</p>
          )}

          {/* Name */}
          <label className="label">Name</label>
          <input
            type="text"
            {...register("name", { required: true })}
            className="input"
            placeholder="Your name"
          />
          {errors.neme?.type === "required" && (
            <p className="text-red-500">Name is required</p>
          )}
          {/* email */}
          <label className="label">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input"
            placeholder="Email"
          />
          {errors.email?.type === "required" && (
            <p className="text-red-500">Email is required</p>
          )}
          {/* password */}
          <label className="label">Password</label>
          <input
            type="password"
            {...register("password", {
              required: true,
              minLength: 6,
              // pattern:
              // /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_\-+={}[\]|:;"'<>,.?/~`]).+$/,
            })}
            className="input"
            placeholder="Password"
          />
          {errors.password?.type === "required" && (
            <p className="text-red-600">Password is required</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-600">
              Password must be 6 charecter or lognger
            </p>
          )}
          {/* {errors.password?.type === "pattern" && (
            <p className="text-red-600">
              Password must have uppercase, lowercase, number and special
            </p>
          )} */}
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
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
        <SocialLogin></SocialLogin>
      </form>
    </div>
  );
};

export default Register;

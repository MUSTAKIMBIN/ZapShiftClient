import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout/RootLayout";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Covarage from "../pages/Covarage/Covarage";
import AboutUs from "../pages/AboutUs/AboutUs";
import LogIn from "../pages/Auth/Login/LogIn";
import Register from "../pages/Auth/Register/Register";
import AuthLayout from "../Layout/AuthLayout/AuthLayout";
import BeARider from "../pages/BeARider/BeARider";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "aboutUs",
        Component: AboutUs,
      },
      {
        path: "coverage",
        Component: Covarage,
        loader: () => fetch(`/serviceCenter.json`).then((res) => res.json()),
      },
      {
        path: "beArider",
        Component: BeARider,
      },
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "login",
        Component: LogIn,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
]);

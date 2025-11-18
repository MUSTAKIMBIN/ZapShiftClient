import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout/RootLayout";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Covarage from "../pages/Covarage/Covarage";
import AboutUs from "../pages/AboutUs/AboutUs";

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
    ],
  },
]);

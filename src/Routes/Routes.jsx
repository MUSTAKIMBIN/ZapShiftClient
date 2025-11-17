import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
  },
]);

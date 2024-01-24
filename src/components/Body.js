import React, { useEffect } from "react";
import Authentication from "../components/Authentication";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useDispatch } from "react-redux";

const Body = () => {
  const appRoutes = createBrowserRouter([
    {
      path: "/",
      element: <Authentication />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRoutes} />
    </div>
  );
};

export default Body;

import { FunctionComponent, ReactElement } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { BaseLayout } from "@/components/layout";

import Posts from "@/pages/posts";
import Home from "@/pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
  {
    path: "/posts",
    element: <BaseLayout />,
    children: [
      {
        path: "",
        element: <Posts />,
      },
    ],
  },
]);

const Router: FunctionComponent = (): ReactElement => (
  <RouterProvider router={router} fallbackElement={<div>Loading...</div>} />
);

export default Router;

import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layouts/Layout";
import { AboutMePage, CareerPathPage, TechnologiesPage } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    //   errorElement: <NotFountPage />,
    children: [
      {
        path: "/",
        element: <AboutMePage />,
      },
      {
        path: "/career",
        element: <CareerPathPage />,
      },
      {
        path: "/technologies",
        element: <TechnologiesPage />,
      },
    ],
  },
  {
    path: "*",
    element: <AboutMePage />,
  },
]);

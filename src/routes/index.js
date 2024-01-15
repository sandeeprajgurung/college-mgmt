import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { webRoutes } from "./web";
import AppLayout from "../components/layout/appLayout";
import OnlineAddmissionForm from "../pages/addmission/onlineAddmissionForm";
import HomeIndex from "../pages/home";
import DashboardIndex from "../pages/dashboard";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: webRoutes.home,
        element: <HomeIndex />,
      },
      {
        path: webRoutes.dashboard,
        element: <DashboardIndex />,
      },
      {
        path: webRoutes.onlineAddmissionForm,
        element: <OnlineAddmissionForm />,
      },
    ],
  },
]);

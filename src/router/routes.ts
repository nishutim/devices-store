import React from "react";
import { IRoute } from "../models";
import RouteNames from "./RouteNames";
const LoginPage = React.lazy(() => import("../pages/LoginPage"));
const AdminPage = React.lazy(() => import("../pages/AdminPage"));
const DevicesPage = React.lazy(() => import("../pages/DevicesPage"));
const DevicePage = React.lazy(() => import("../pages/DevicePage"));

export const publicRoutes: IRoute[] = [
   {
      path: RouteNames.DEVICES,
      Component: DevicesPage
   },
   {
      path: RouteNames.DEVICES + '/:id',
      Component: DevicePage
   },
   {
      path: RouteNames.LOGIN,
      Component: LoginPage
   },
   {
      path: RouteNames.REGISTRATION,
      Component: LoginPage
   }
];

export const privateRoutes: IRoute[] = [
   {
      path: RouteNames.DEVICES,
      Component: DevicesPage
   },
   {
      path: RouteNames.DEVICES + '/:id',
      Component: DevicePage
   },
   {
      path: RouteNames.ADMIN,
      Component: AdminPage
   }
];
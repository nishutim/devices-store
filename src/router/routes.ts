import React from "react";
import { IRoute } from "../models";
import RouteNames from "./RouteNames";
const LoginPage = React.lazy(() => import("../pages/LoginPage"));
const AdminPage = React.lazy(() => import("../pages/AdminPage"));
const DevicesPage = React.lazy(() => import("../pages/DevicesPage"));
const DeviceInfoPage = React.lazy(() => import("../pages/DeviceInfoPage"));

export const publicRoutes: IRoute[] = [
   {
      path: RouteNames.DEVICES,
      Component: DevicesPage
   },
   {
      path: RouteNames.DEVICES + '/:id',
      Component: DeviceInfoPage
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
      Component: DeviceInfoPage
   },
   {
      path: RouteNames.ADMIN,
      Component: AdminPage
   }
];
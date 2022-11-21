import { IRoute } from "../models";
import RouteNames from "./RouteNames";
import LoginPage from "../pages/LoginPage";
import AdminPage from "../pages/AdminPage";
import DevicesPage from "../pages/DevicesPage";
import DevicePage from "../pages/DevicePage";

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
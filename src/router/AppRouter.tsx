import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAppSelector } from "../hooks/redux";
import { auth_selectIsAuth } from "../store/reducers/auth/selectors";
import RouteNames from "./RouteNames";
import { privateRoutes, publicRoutes } from "./routes";

const AppRouter = () => {
   const isAuth = useAppSelector(auth_selectIsAuth);

   return (
      isAuth ?
         <Routes>
            <Route path={RouteNames.HOME} element={<Navigate to={RouteNames.DEVICES} />} />
            {privateRoutes.map(({ path, Component }) => (
               <Route key={path} path={path} element={<Component />} />
            ))}
            <Route path={RouteNames.BAD_URL} element={<Navigate to={RouteNames.DEVICES} />} />
         </Routes>
         :
         <Routes>
            <Route path={RouteNames.HOME} element={<Navigate to={RouteNames.LOGIN} />} />
            {publicRoutes.map(({ path, Component }) => (
               <Route key={path} path={path} element={<Component />} />
            ))}
            <Route path={RouteNames.BAD_URL} element={<Navigate to={RouteNames.LOGIN} />} />
         </Routes>
   );
}

export default AppRouter;
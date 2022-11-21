import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Preloader from "../components/Preloader";
import { useAppSelector } from "../hooks/redux";
import { auth_selectIsAuth } from "../store/reducers/auth/selectors";
import RouteNames from "./RouteNames";
import { privateRoutes, publicRoutes } from "./routes";

const AppRouter = () => {
   const isAuth = useAppSelector(auth_selectIsAuth);

   return (
      isAuth ?
         <Suspense fallback={<Preloader />}>
            <Routes>
               <Route path={RouteNames.HOME} element={<Navigate to={RouteNames.DEVICES} />} />
               {privateRoutes.map(({ path, Component }) => (
                  <Route key={path} path={path} element={<Component />} />
               ))}
               <Route path={RouteNames.BAD_URL} element={<Navigate to={RouteNames.DEVICES} />} />
            </Routes>
         </Suspense>
         :
         <Suspense fallback={<Preloader />}>
            <Routes>
               <Route path={RouteNames.HOME} element={<Navigate to={RouteNames.LOGIN} />} />
               {publicRoutes.map(({ path, Component }) => (
                  <Route key={path} path={path} element={<Component />} />
               ))}
               <Route path={RouteNames.BAD_URL} element={<Navigate to={RouteNames.LOGIN} />} />
            </Routes>
         </Suspense>
   );
}

export default AppRouter;
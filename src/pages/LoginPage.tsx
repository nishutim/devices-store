import React, { useCallback } from "react";
import { useLocation } from "react-router-dom";
import { useAppDispatch } from "../hooks/redux";
import { login, registration } from "../store/reducers/auth/thunk-creators";
import RouteNames from '../router/RouteNames';
import Page from "../components/Page";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
   const { pathname } = useLocation();

   const isLoginPage = pathname === RouteNames.LOGIN;

   const dispatch = useAppDispatch();

   const handleFormSubmit = useCallback(async (email: string, password: string, setStatus: (status: string) => void) => {
      const action = isLoginPage ? login : registration;
      await dispatch(action(email, password, setStatus));
   }, [isLoginPage]);

   return (
      <Page className="justify-content-center align-items-center">
         <LoginForm
            isLoginPage={isLoginPage}
            onSubmit={handleFormSubmit} />
      </Page>
   );
}

export default LoginPage;
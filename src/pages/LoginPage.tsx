import React from "react";
import { useLocation } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import Page from "../components/Page";
import { useAppDispatch } from "../hooks/redux";
import { login, registration } from "../store/reducers/auth/thunk-creators";

const LoginPage = () => {
   const { pathname } = useLocation();

   const isLoginPage = pathname === '/login';
   const titleText = isLoginPage ? 'Authorisation' : 'Registration';
   const paraText = isLoginPage ? 'Still don\'t have an account?' : 'Already have an account?';
   const linkText = isLoginPage ? 'Sign up' : 'Sign in';
   const linkPath = isLoginPage ? '/registration' : '/login';
   const btnText = isLoginPage ? 'Sign in' : 'Sign up';

   const dispatch = useAppDispatch();

   const handleFormSubmit = async (email: string, password: string, setStatus: (status: string) => void) => {
      const action = isLoginPage ? login : registration;
      await dispatch(action(email, password, setStatus));
   }

   return (
      <Page className="justify-content-center align-items-center">
         <LoginForm
            titleText={titleText}
            paraText={paraText}
            linkText={linkText}
            linkPath={linkPath}
            btnText={btnText}
            onSubmit={handleFormSubmit} />
      </Page>
   );
}

export default LoginPage;
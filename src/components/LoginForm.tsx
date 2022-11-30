import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import { NavLink } from "react-router-dom";
import { Button, Form, Stack } from "react-bootstrap";

interface Props {
   isLoginPage: boolean
   onSubmit: (email: string, password: string, setStatus: (status: string) => void) => Promise<void>
}

const LoginForm: FC<Props> = ({ isLoginPage, onSubmit }) => {
   const [email, setEmail] = useState('');
   const [pass, setPass] = useState('');
   const [status, setStatus] = useState('');
   const [disableBtn, setDisableBtn] = useState(false);

   const titleText = isLoginPage ? 'Authorisation' : 'Registration';
   const paraText = isLoginPage ? 'Still don\'t have an account?' : 'Already have an account?';
   const linkText = isLoginPage ? 'Sign up' : 'Sign in';
   const linkPath = isLoginPage ? '/registration' : '/login';
   const btnText = isLoginPage ? 'Sign in' : 'Sign up';

   const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
   }

   const handlePassChange = (e: ChangeEvent<HTMLInputElement>) => {
      setPass(e.target.value);
   }

   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setDisableBtn(true);
      await onSubmit(email, pass, setStatus);
      setDisableBtn(false);
   }

   return (
      <Form onSubmit={handleSubmit} className="loginForm">
         <h2 className="loginFormTitle">{titleText}</h2>
         {status && <p className="formStatus">{status}</p>}
         <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
               type="email"
               value={email}
               onChange={handleEmailChange}
               placeholder="Enter email" />
         </Form.Group>
         <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
               type="password"
               value={pass}
               onChange={handlePassChange}
               placeholder="Enter password" />
         </Form.Group>
         <Stack className="d-flex flex-row justify-content-between align-items-center">
            <p className="loginFormLink">{paraText} <NavLink to={linkPath}>{linkText}</NavLink></p>
            <Button disabled={disableBtn} variant="primary" type="submit">
               {btnText}
            </Button>
         </Stack>
      </Form>
   );
}

export default LoginForm;
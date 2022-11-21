import jwtDecode from 'jwt-decode';
import AuthService from '../../../services/authService';
import { AppDispatch } from './../../index';
import { IUser } from '../../../models';
import { AuthActions } from '.';

export const registration = (email: string, password: string, setStatus: (status: string) => void) => async (dispatch: AppDispatch) => {
   try {
      const data = await AuthService.registration(email, password);
      if (data.token) {
         localStorage.setItem('token', data.token);
         const userData: IUser = jwtDecode(data.token);
         dispatch(AuthActions.loginSuccess(userData));
      } else {
         setStatus(data.message)
      }
   } catch (e: any) {
      alert(e.message)
   }
}

export const login = (email: string, password: string, setStatus: (status: string) => void) => async (dispatch: AppDispatch) => {
   try {
      const data = await AuthService.login(email, password);
      if (data.token) {
         localStorage.setItem('token', data.token);
         const userData: IUser = jwtDecode(data.token);
         dispatch(AuthActions.loginSuccess(userData));
      } else {
         setStatus(data.message)
      }
   } catch (e: any) {
      alert(e.message)
   }
}

export const logout = () => async (dispatch: AppDispatch) => {
   try {
      localStorage.removeItem('token');
      dispatch(AuthActions.logoutSuccess());
   } catch (e: any) {
      alert(e.message)
   }
}

export const checkAuth = () => async (dispatch: AppDispatch) => {
   try {
      if (localStorage.getItem('token')) {
         const { token } = await AuthService.checkAuth();
         localStorage.setItem('token', token);
         const userData: IUser = jwtDecode(token);
         dispatch(AuthActions.loginSuccess(userData));
      }
   } catch (e: any) {
      alert(e.message);
   }
}
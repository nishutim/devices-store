import { $axios, $axiosAuth } from "../http";
import { IAuthResponse } from "../models";

class AuthService {
   static registration = async (email: string, password: string) => {
      const { data } = await $axios.post<IAuthResponse>('/user/registration', { email, password, role: 'ADMIN' });
      return data;
   }

   static login = async (email: string, password: string) => {
      const { data } = await $axios.post<IAuthResponse>('/user/login', { email, password });
      return data;
   }

   static checkAuth = async () => {
      const { data } = await $axiosAuth.get<IAuthResponse>('/user/auth');
      return data;
   }
}

export default AuthService;
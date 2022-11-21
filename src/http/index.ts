import axios from "axios";

const API_URL = 'http://localhost:5000/api';

export const $axios = axios.create({
   // withCredentials: true,
   baseURL: API_URL
});

export const $axiosAuth = axios.create({
   // withCredentials: true,
   baseURL: API_URL
});

$axiosAuth.interceptors.request.use(config => {
   const token = localStorage.getItem('token');
   config.headers = config.headers ?? {};
   config.headers.authorization = `Bearer ${token}`;
   return config;
});
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL + 'api';

export const $axios = axios.create({
   baseURL: API_URL
});

export const $axiosAuth = axios.create({
   baseURL: API_URL
});

$axiosAuth.interceptors.request.use(config => {
   const token = localStorage.getItem('token');
   config.headers = config.headers ?? {};
   config.headers.authorization = `Bearer ${token}`;
   return config;
});
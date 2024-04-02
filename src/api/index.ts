import axios from 'axios';
import Cookies from 'js-cookie';

export const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
});

api.interceptors.request.use(function (config) {
    const token = Cookies.get('meetFlow.token');
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
});

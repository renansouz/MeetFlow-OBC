import axios from 'axios';
import Cookies from 'js-cookie';

import { env } from '@/env';

export function setupAPIClient() {
  const token = Cookies.get('meetFlow.token');
  console.log('token setupAPIClient', token);
  const api = axios.create({
    baseURL: env.VITE_BASE_URL,
    headers: { authorization: `Bearer ${token}` },
    withCredentials: true,
  });
  console.log('api setupAPIClient', api);
  return api;
}

export const api = setupAPIClient();

export function updateToken() {
  const token = Cookies.get('meetFlow.token');
  console.log('token updateToken', token);
  if (token) {
    console.log('token updateToken if', token);
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    console.log('token updateToken else', token);
    delete api.defaults.headers.common['Authorization'];
  }
}

updateToken();

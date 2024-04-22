import axios from 'axios';
import { parse } from 'cookie';

import { env } from '@/env';

export function setupAPIClient() {
  const cookies = parse(document.cookie);
  console.log('cookies setupAPIClient', cookies);
  const token = cookies['meetFlow.token'];
  console.log('token setupAPIClient', token);
  const api = axios.create({
    baseURL: env.VITE_BASE_URL,
    headers: { authorization: `Bearer ${token}` },
    withCredentials: true,
  });
  return api;
}

export const api = setupAPIClient();

export function updateToken() {
  const cookies = parse(document.cookie);
  const token = cookies['meetFlow.token'];
  if (token) {
    console.log('token updateToken if', token);
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    console.log('token updateToken else', token);
    delete api.defaults.headers.common['Authorization'];
  }
}

updateToken();

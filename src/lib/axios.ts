import axios from 'axios';
import Cookies from 'js-cookie';

import { env } from '@/env';

export function setupAPIClient() {
  const token = Cookies.get('meetFlow.token');
  const api = axios.create({
    baseURL: env.VITE_BASE_URL,
    headers: { authorization: `Bearer ${token}` },
    withCredentials: true,
  });
  return api;
}

export const api = setupAPIClient();

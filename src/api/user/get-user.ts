import Cookies from 'js-cookie';

import { api } from '@/lib/axios';

export interface GetUserResponse {
  user: {
    _id: string;
    email: string;
    name: string;
    role: string;
    active: boolean;
    photoUrl: string | null;
  };
}

export async function getUser() {
  const refreshToken = Cookies.get('meetFlow.refreshToken');
  const response = await api.get<GetUserResponse>('/account/whoami', {
    headers: { refreshtoken: refreshToken },
  });

  return response.data;
}

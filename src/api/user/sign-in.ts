import Cookies from 'js-cookie';

import { api } from '@/lib/axios';

export interface SignInBody {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  role: 'client' | 'professional';
}

interface SignUpResponse {
  accessToken: string;
  user: {
    _id: string;
    name: string;
    active: boolean;
  };
}

export async function signIn({ name, email, password, passwordConfirmation, role }: SignInBody) {
  const response = await api.post<SignUpResponse>('/auth/signup', {
    name,
    email,
    password,
    passwordConfirmation,
    role,
  });

  const {
    accessToken,
    user: { _id },
  } = response.data;
  Cookies.set('meetFlow.token', accessToken, { expires: 30, path: '/' });
  Cookies.set('meetFlow.user', JSON.stringify(_id), { expires: 30, path: '/' });
  return response.data;
}

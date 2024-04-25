import Cookies from 'js-cookie';
import React, { createContext, useContext, useEffect, useState } from 'react';

import { env } from '@/env';
import { api, updateToken } from '@/lib/axios';

export type User = {
  email: string;
  name: string;
  role: string;
  _id: string;
};

type AuthContextData = {
  login(email: string, password: string): Promise<User>;
  loginGoogle: (role: 'client' | 'professional' | '') => void;
  isAuthenticated: boolean;
  user: User | null;
  logout: () => void;
};
const AuthContext = createContext({} as AuthContextData);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const isAuthenticated = !!user;

  const logout = () => {
    signOut();
    setUser(null);
  };

  useEffect(() => {
    const userComingFromCookie = Cookies.get('meetFlow.user');
    const refreshToken = Cookies.get('meetFlow.refreshToken');
    console.log('userComingFromCookie', userComingFromCookie);
    const parsedUser = userComingFromCookie ? JSON.parse(userComingFromCookie) : null;
    console.log('parsedUser', parsedUser);

    if (parsedUser && refreshToken) {
      setUser(parsedUser);
    } else {
      signOut();
    }
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const response = await api.post('auth/login', {
        email,
        password,
        passwordConfirmation: password,
      });
      const { accessToken: token, refreshToken, user: userComing } = response?.data || {};
      Cookies.set('meetFlow.token', token, { expires: 30, path: '/' });
      Cookies.set('meetFlow.refreshToken', refreshToken, { expires: 30, path: '/' });
      Cookies.set('meetFlow.user', JSON.stringify(userComing), { expires: 30, path: '/' });

      setUser(userComing);
      api.defaults.timeout = 3000;
      api.defaults.headers['authorization'] = `Bearer ${token}`;

      return userComing;
    } catch (error) {
      throw error;
    }
  };

  const loginGoogle = (role: 'client' | 'professional' | '') => {
    window.location.href = `${env.VITE_BASE_URL}/auth/google?role=${role}`;
    updateToken(); // Atualize o token no cliente axios após o login com o Google
  };

  return (
    <AuthContext.Provider value={{ login, loginGoogle, isAuthenticated, user, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextData => useContext(AuthContext);

export function signOut() {
  Cookies.remove('meetFlow.token');
  Cookies.remove('meetFlow.refreshToken');
  Cookies.remove('meetFlow.user');
  Cookies.remove('session');
}

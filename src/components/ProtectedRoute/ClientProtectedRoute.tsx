import { ReactNode } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '@/context/auth-provider';

type ProtectedRouteType = {
    children: ReactNode;
};

export const ClientProtectedRoute = ({ children }: ProtectedRouteType) => {
    const { user } = useAuth();
    console.log(user);
    return user && user.role === 'client' ? children : <Navigate to={'/login'} />;
};

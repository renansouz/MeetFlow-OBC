import { ReactNode } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '@/context/auth-provider';

type ProtectedRouteType = {
    children: ReactNode;
};

export const ClientProtectedRoute = ({ children }: ProtectedRouteType) => {
    const { user } = useAuth();
    return user && user.role === 'client' ? <Outlet /> : <Navigate to={'/login'} />;
};

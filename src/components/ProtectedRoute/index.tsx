import { ReactNode, useEffect } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';

import { useAuth } from '@/context/auth-provider';

type ProtectedRouteType = {
    children: ReactNode;
    particular?: 'client' | 'professional';
    fallbackRoute?: string;
};

export const ProtectedRoute = ({ children, particular, fallbackRoute = '/login' }: ProtectedRouteType) => {
    const { user } = useAuth();
    return user === null || user?.role === particular ? <Navigate to={fallbackRoute} replace /> : <Outlet />;
};

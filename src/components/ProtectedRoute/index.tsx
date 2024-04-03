import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '@/context/auth-provider';

type ProtectedRouteType = {
    particular?: 'client' | 'professional';
    fallbackRoute?: string;
};

export const ProtectedRoute = ({ particular, fallbackRoute = '/login' }: ProtectedRouteType) => {
    const { user } = useAuth();
    return user === null || user?.role === particular ? (
        <Navigate to={fallbackRoute} replace />
    ) : (
        <Outlet />
    );
};

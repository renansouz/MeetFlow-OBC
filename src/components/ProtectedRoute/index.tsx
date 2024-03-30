import { ReactNode, useEffect } from 'react';
import { useNavigate, Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '@/context/auth-provider';

type ProtectedRouteType = {
    children: ReactNode;
    particular?: 'client' | 'professional';
    fallbackRoute?:string;
};

export const ProtectedRoute = ({ children, particular ,fallbackRoute='/login' }: ProtectedRouteType) => {
    const {user} = useAuth();
    return user && user.role === particular ? <Outlet/> : <Navigate to={fallbackRoute} replace/>  
};

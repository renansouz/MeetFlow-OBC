import { ReactNode, useEffect } from 'react';
import { useNavigate, Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '@/context/auth-provider';

type ProtectedRouteType = {
    children: ReactNode;
};

export const ProtectedRoute = ({ children }: ProtectedRouteType) => {
    const {isAuth} = useAuth();
    return isAuth ? <Outlet/> : <Navigate to={"/login"} replace/>  
};

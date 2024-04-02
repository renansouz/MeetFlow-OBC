import { ReactNode } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth, User } from '@/context/auth-provider';
import Cookies from 'js-cookie';

type ProtectedRouteType = {
    children: ReactNode;
};

export const ProfessionalProtectedRoute = ({ children }: ProtectedRouteType) => {
    
    const userComingFromCookie = Cookies.get('meetFlow.user');
    const user = userComingFromCookie ? JSON.parse(userComingFromCookie) : null;

    console.log(user);

    return user.role === 'profesional' ? children : <Navigate to={'/professional/register'} />;
};

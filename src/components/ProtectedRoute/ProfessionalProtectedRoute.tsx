import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

type ProtectedRouteType = {
    children: ReactNode;
};

export const ProfessionalProtectedRoute = ({ children }: ProtectedRouteType) => {
    const userComingFromCookie = Cookies.get('meetFlow.user');
    const user = userComingFromCookie ? JSON.parse(userComingFromCookie) : null;

    console.log(user.role);

    return user.role === 'professional' ? children : <Navigate to={'/professional/register'} />;
};

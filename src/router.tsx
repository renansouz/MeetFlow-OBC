import { createBrowserRouter } from 'react-router-dom';

import { AppLayout } from './_layouts/AppLayout';
import { AuthLayout } from './_layouts/auth';
import { NotFound } from './pages/404';
import { Home } from './pages/Home';
import { Dashboard } from './pages/professional/Dashboard';
import { ProfessionalRegister } from './pages/professional/ProfessionalRegister';
import { UserLogin } from './pages/user/UserLogin';
import { UserProfile } from './pages/user/UserProfile';
import { UserRegister } from './pages/user/UserRegister';
import { UserDashboard } from './pages/user/UserDashboard';


export const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
        ],
    },
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/user/profile',
                element: <UserProfile />,
            },
        ],
    },
    {
        path:'/user/dashboard',
        element:<UserDashboard/>
    },
    {
        path: '/',
        element: <AuthLayout />,
        children: [
            {
                path: '/professional/register',
                element: <ProfessionalRegister />,
            },
        ],
    },
    {
        path: '/',
        element: <AuthLayout />,
        children: [
            {
                path: '/register',
                element: <UserRegister />,
            },
        ],
    },
    {
        path: '/',
        element: <AuthLayout />,
        children: [
            {
                path: '/login',
                element: <UserLogin />,
            },
        ],
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
    },
    {
        path: '*',
        element: <NotFound />,
    },
]);

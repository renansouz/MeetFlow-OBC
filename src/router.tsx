import { createBrowserRouter } from 'react-router-dom';

import { AppLayout } from './_layouts/AppLayout';
import { AuthLayout } from './_layouts/auth';
import { NotFound } from './pages/404';
import { Home } from './pages/Home';
import { ProfessionalRegister } from './pages/professional/ProfessionalRegister';
import { UserLogin } from './pages/user/UserLogin';
import { UserProfile } from './pages/user/UserProfile';
import { UserRegister } from './pages/user/UserRegister';
import { UserDashboard } from './pages/user/UserDashboard';
import { UserDashboardLayout } from './_layouts/UserDashboardLayout';
import { ProfessionalDashboardLayout } from './_layouts/ProfessionalDashboardLayout';
import { ProfessionalDashboard } from './pages/professional/ProfessionalDashboard';


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
        path:'/',
        element:<UserDashboardLayout/>,
        children: [
            {
                path:'/user/dashboard',
                element:<UserDashboard/>
            }
        ]
    },
    {
        path:'/',
        element:<ProfessionalDashboardLayout/>,
        children: [
            {
                path:'/professional/dashboard',
                element:<ProfessionalDashboard/>
            }
        ]
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
        path: '*',
        element: <NotFound />,
    },
]);

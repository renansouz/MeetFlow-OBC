import { createBrowserRouter } from 'react-router-dom';

import { AppLayout } from './_layouts/AppLayout';
import { AuthLayout } from './_layouts/auth';
import { NotFound } from './pages/404';
import { Dashboard } from './pages/Dashboard';
import { Home } from './pages/Home';
import { Login } from './pages/Login/Login';
import { Register } from './pages/Register';

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
                element: <Login />,
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

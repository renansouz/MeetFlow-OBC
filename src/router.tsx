import { createBrowserRouter } from 'react-router-dom';
import { RouteObject } from 'react-router-dom';

import { AppLayout } from './_layouts/AppLayout';
import { AuthLayout } from './_layouts/auth';
import { ProfessionalDashboardLayout } from './_layouts/ProfessionalDashboardLayout';
import { UserDashboardLayout } from './_layouts/UserDashboardLayout';
import { NotFound } from './pages/404';
import { Home } from './pages/Home';
import { ProfessionalDashboard } from './pages/professional/ProfessionalDashboard';
import { ProfessionalRegister } from './pages/professional/ProfessionalRegister';
import { UserDashboard } from './pages/user/UserDashboard';
import { ProfessionalProfile } from './pages/user/UserDashboard/pages/ProfessionalProfile';
import { Services } from './pages/user/UserDashboard/pages/Services';
import { UserLogin } from './pages/user/UserLogin';
import { UserProfile } from './pages/user/UserProfile';
import { UserRegister } from './pages/user/UserRegister';

const authRoutes: RouteObject[] = [
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
];

const dashBoardRoutes: RouteObject[] = [
    {
        path: '/',
        element: <UserDashboardLayout />,
        children: [
            {
                path: '/dashboard',
                element: <UserDashboard />,
            },
        ],
    },
    {
        path: '/',
        element: <UserDashboardLayout />,
        children: [{ path: '/dashboard/services', element: <Services /> }],
    },
    {
        path: '/',
        element: <UserDashboardLayout />,
        children: [{ path: '/dashboard/myschedules', element: <div>schedules</div> }],
    },
    {
        path: '/',
        element: <ProfessionalDashboardLayout />,
        children: [
            {
                path: '/professional/dashboard',
                element: <ProfessionalDashboard />,
            },
        ],
    },

    {
        path: '/',
        element: <UserDashboardLayout />,
        children: [{ path: '/dashboard/profile', element: <ProfessionalProfile /> }],
    },
];

const appRoutes: RouteObject[] = [
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
];

export const router = createBrowserRouter([
    ...appRoutes,
    ...authRoutes,
    ...dashBoardRoutes,
    {
        path: '*',
        element: <NotFound />,
    },
]);

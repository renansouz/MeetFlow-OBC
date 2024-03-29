import { createBrowserRouter } from 'react-router-dom';
import { RouteObject } from 'react-router-dom';

import { AppLayout } from './_layouts/AppLayout';
import { AuthLayout } from './_layouts/Auth';
import { ProfessionalDashboardLayout } from './_layouts/ProfessionalDashboardLayout';
import { UserDashboardLayout } from './_layouts/UserDashboardLayout';
import { NotFound } from './pages/404';
import { Home } from './pages/Home';
import { ProfessionalDashboard } from './pages/professional/Dashboard';
import { Clients } from './pages/professional/Dashboard/pages/ProfessionalClients';
import { ProfessionalOwnProfile } from './pages/professional/Dashboard/pages/ProfessionalOwnProfile';
import { ProfessionalRegister } from './pages/professional/ProfessionalRegister';
import { ClientDashboard } from './pages/user/ClientDashboard';
import { MySchedules } from './pages/user/ClientDashboard/pages/MySchedule';
import { Services } from './pages/user/ClientDashboard/pages/ProfessionalCard';
import { ProfessionalProfile } from './pages/user/ClientDashboard/pages/ProfessionalProfile';
import { ClientLogin } from './pages/user/ClientLogin';
import { ClientRegister } from './pages/user/ClientRegister';

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
                element: <ClientRegister />,
            },
        ],
    },
    {
        path: '/',
        element: <AuthLayout />,
        children: [
            {
                path: '/login',
                element: <ClientLogin />,
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
                element: <ClientDashboard />,
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
        children: [{ path: '/dashboard/myschedules', element: <MySchedules /> }],
    },
    {
        path: '/',
        element: <UserDashboardLayout />,
        children: [{ path: '/dashboard/profile', element: <ProfessionalProfile /> }],
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
        element: <ProfessionalDashboardLayout />,
        children: [
            {
                path: '/professional/profile',
                element: <ProfessionalOwnProfile />,
            },
        ],
    },
    {
        path: '/',
        element: <ProfessionalDashboardLayout />,
        children: [
            {
                path: '/professional/meus-agendamentos',
                element: <Clients />,
            },
        ],
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

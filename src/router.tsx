import { createBrowserRouter } from 'react-router-dom';

import { AuthLayout } from '@/_layouts/AuthLayout';
import { DashboardLayout } from '@/_layouts/DashboardLayout';
import { LandingPage } from '@/pages';
import { NotFound } from '@/pages/404';
import { ClientRegister } from '@/pages/auth';
import { ProfessionalRegister } from '@/pages/auth';
import { ClientLogin } from '@/pages/auth';
import { DashboardClient } from '@/pages/dashboard/client';
import { MySchedules } from '@/pages/dashboard/client';
import { ProfessionalProfile } from '@/pages/dashboard/client';
import { Services } from '@/pages/dashboard/client';
import { Profile } from '@/pages/dashboard/professional';
import { DashboardProfessional } from '@/pages/dashboard/professional';
import { Clients } from '@/pages/dashboard/professional/ProfessionalClients';

import { AppLayout } from './_layouts/AppLayout';
import { ProtectedRoute } from './components/ProtectedRoute';

export const RouterWrapper = (): any => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <AppLayout />,
            children: [
                {
                    path: '/',
                    element: <LandingPage />,
                },
            ],
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
                    path: 'client/register',
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
        {
            path: '/',
            element: <DashboardLayout userType="client" />,
            children: [
                {
                    path: '/dashboard',
                    element: <DashboardClient />,
                },
            ],
        },
        {
            path: '/',
            element: <DashboardLayout userType="client" />,
            children: [{ path: '/dashboard/services', element: <Services /> }],
        },
        {
            path: '/',
            element: <DashboardLayout userType="client" />,
            children: [
                {
                    path: '/dashboard/myschedules',
                    element: <MySchedules />,
                },
            ],
        },
        {
            path: '/',
            element: <DashboardLayout userType="client" />,
            children: [{ path: '/dashboard/profile/:_id', element: <ProfessionalProfile /> }],
        },
        {
            path: '/',
            element: <DashboardLayout userType="professional" />,
            children: [
                {
                    path: '/professional/dashboard',
                    element: <DashboardProfessional />,
                },
            ],
        },
        {
            path: '/',
            element: <DashboardLayout userType="professional" />,
            children: [
                {
                    path: '/professional/profile',
                    element: <Profile />,
                },
            ],
        },
        {
            path: '/',
            element: <DashboardLayout userType="professional" />,
            children: [
                {
                    path: '/professional/myschedules',
                    element: <Clients />,
                },
            ],
        },
        {
            path: '*',
            element: <NotFound />,
        },
    ]);

    return router;
};

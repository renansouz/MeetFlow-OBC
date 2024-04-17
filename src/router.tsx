import { createBrowserRouter } from 'react-router-dom';

import { AuthLayout } from '@/_layouts/AuthLayout';
import { DashboardLayout } from '@/_layouts/DashboardLayout';
import { LandingPage } from '@/pages';
import { NotFound } from '@/pages/404';
import { ClientRegister } from '@/pages/auth';
import { ProfessionalRegister } from '@/pages/auth';
import { ClientLogin } from '@/pages/auth';
import { ProfessionalRegisterGoogle } from '@/pages/auth/ProfessionalRegisterGoogle';
import { DashboardClient } from '@/pages/dashboard/client';
import { MySchedules } from '@/pages/dashboard/client';
import { ProfessionalProfile } from '@/pages/dashboard/client';
import { Services } from '@/pages/dashboard/client';
import { Profile } from '@/pages/dashboard/professional';
import { DashboardProfessional } from '@/pages/dashboard/professional';
import { Clients } from '@/pages/dashboard/professional/ProfessionalClients';

import { AppLayout } from './_layouts/AppLayout';
import { ProtectedRoute } from './components/ProtectedRoute';

const authRoutes = [
  {
    path: '/professional/register',
    element: <ProfessionalRegister />,
  },
  {
    path: '/professional/register/google',
    element: <ProfessionalRegisterGoogle />,
  },
  {
    path: 'client/register',
    element: <ClientRegister />,
  },
  {
    path: '/login',
    element: <ClientLogin />,
  },
];

const clientRoutes = [
  {
    path: '/dashboard',
    element: <ProtectedRoute component={DashboardClient} />,
  },
  {
    path: '/dashboard/services',
    element: <ProtectedRoute component={Services} />,
  },
  {
    path: '/dashboard/myschedules',
    element: <ProtectedRoute component={MySchedules} />,
  },
  {
    path: '/dashboard/profile/:_id/:scheduleId',
    element: <ProtectedRoute component={ProfessionalProfile} />,
  },
];

const professionalRoutes = [
  {
    path: '/professional/dashboard',
    element: <ProtectedRoute component={DashboardProfessional} />,
  },
  {
    path: '/professional/profile',
    element: <ProtectedRoute component={Profile} />,
  },
  {
    path: '/professional/myschedules',
    element: <ProtectedRoute component={Clients} />,
  },
];

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
      children: authRoutes,
    },
    {
      path: '/',
      element: <DashboardLayout userType="client" />,
      children: clientRoutes,
    },
    {
      path: '/',
      element: <DashboardLayout userType="professional" />,
      children: professionalRoutes,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ]);

  return router;
};

import { createBrowserRouter } from 'react-router-dom';
import { AppLayout } from './_layouts/AppLayout';
import { AuthLayout } from './_layouts/auth';
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
import { ProfessionalProfile } from './pages/user/ClientDashboard/pages/ProfessionalProfile';
import { Services } from './pages/user/ClientDashboard/pages/Services';
import { ClientLogin } from './pages/UserLogin';
import { ClientRegister } from './pages/user/ClientRegister';
import { ProfessionalProtectedRoute } from './components/ProtectedRoute/ProfessionalProtectedRoute';
import { RouterProps } from 'react-router-dom';

export const RouterWrapper = (): any => {
    const router = createBrowserRouter([
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
            children: [
                {
                    path: '/dashboard/myschedules',
                    element: <MySchedules />,
                },
            ],
        },
        {
            path: '/',
            element: <UserDashboardLayout />,
            children: [{ path: '/dashboard/profile/:_id', element: <ProfessionalProfile /> }],
        },
        {
            path: '/',
            element: <ProfessionalDashboardLayout />,
            children: [
                {
                    path: '/professional/dashboard',
                    element: (
                        <ProfessionalProtectedRoute>
                            <ProfessionalDashboard />
                        </ProfessionalProtectedRoute>
                    ),
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

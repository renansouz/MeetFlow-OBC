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
        element: <AuthLayout />,
        children: [
            {
                path: '/register',
                element: <Register />,
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

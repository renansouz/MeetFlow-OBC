import { createBrowserRouter } from 'react-router-dom';

import { AppLayout } from './_layouts/AppLayout';
import { AuthLayout } from './_layouts/auth';
import { NotFound } from './pages/404';
import { Home } from './pages/Home/Home';
import { Register } from './pages/Register/Register';

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
        path: '*',
        element: <NotFound />,
    },
]);

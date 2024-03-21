import { createBrowserRouter } from 'react-router-dom';

import { AppLayout } from './_layouts/AppLayout';
import { AuthLayout } from './_layouts/auth';
import { Home } from './pages/Home/Home';
import { Register } from './pages/Register/Register';
import { NotFound } from './pages/404';
import { Dashboard } from './pages/Dashboard/Dashboard';

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
        path:"/dashboard",
        element:<Dashboard/>
    },
    {
        path:"*",
        element:<NotFound/>
    }
]);

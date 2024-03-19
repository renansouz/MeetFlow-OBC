import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/AppLayout';
import { AuthLayout } from './pages/_layouts/auth';
import { Dashboard } from './pages/app/dashboard';
import { SignIn } from './pages/auth/sign-in';

export const router = createBrowserRouter([

  {



  },
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />,
      }
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: '/sign-in',
        element: <SignIn />,
      },
    ],
  },
])
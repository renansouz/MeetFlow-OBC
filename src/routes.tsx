import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/AppLayout';
import { AuthLayout } from './pages/_layouts/auth';
import { Home } from './pages/Home/Home';

export const router = createBrowserRouter([

  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      }
    ],
  }

])
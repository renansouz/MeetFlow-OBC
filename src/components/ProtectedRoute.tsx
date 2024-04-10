import { useNavigate } from 'react-router-dom';

import { useAuth } from '@/context/auth-provider';

type ProtectedRouteType = {
  component: React.FC;
  particular?: 'client' | 'professional';
};

export const ProtectedRoute = ({ component: Component, particular }: ProtectedRouteType) => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  if (!isAuthenticated || user?.role === particular) {
    navigate('/login');
    return null;
  }

  return <Component />;
};

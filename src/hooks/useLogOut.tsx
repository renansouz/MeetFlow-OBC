import { useNavigate } from 'react-router-dom';

import { useAuth } from '@/context/auth-provider';

export const useLogOut = () => {
    const { isAuth, setAuth } = useAuth();
    const navigate = useNavigate();

    const logOut = () => {
        if (isAuth) {
            setAuth(false);
            navigate('/');
            sessionStorage.removeItem('refreshToken');
        }
    };

    return logOut;
};

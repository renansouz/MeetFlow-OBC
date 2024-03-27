import axios from 'axios';
import { AxiosError } from 'axios';
import { useEffect } from 'react';
import { useAuth } from '@/context/auth-provider';

export const useUserData = () => {
    const { isAuth } = useAuth();
    const token = sessionStorage.getItem('refreshToken');
    const fetchUserData = async () => {

        console.log(token);

        if (isAuth) {
            try {
                const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/account/user`,{headers:{'refreshtoken': token}});
                console.log(res);
            } catch (error) {
                if (error instanceof AxiosError) {
                    console.log(error);
                }
            }
        }
    };

    useEffect(() => {
        fetchUserData();
    }, []);
};

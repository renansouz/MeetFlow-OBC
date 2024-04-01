import Cookies from 'js-cookie';
import { api } from '.';

export const getCurrentUserData = async () => {
    try {
        const refreshToken = Cookies.get('meetFlow.refreshToken');
        const response = await api.get('/account/user', { headers: { refreshToken: refreshToken } });
        return response.data;
    } catch (error) {
        throw error;
    }
};

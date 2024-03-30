import axios from 'axios';
import { AxiosError } from 'axios';

import { RegisterFormData } from '@/pages/user/ClientRegister';
import { UserRole } from '@/types/UserRole';
import { UserType } from '@/types/userType';
const refreshtoken = sessionStorage.getItem('refreshToken');

export class userAPI {
    static async fetchUserData() {
        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/account/user`, { headers: { refreshtoken: refreshtoken } });
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    static async createUser(userData: RegisterFormData, userRole: UserRole) {
        const data = { ...userData, role: 'client' };
        try {
            const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/auth/signup`, data);
            return res;
        } catch (error) {
            throw error;
        }
    }
}

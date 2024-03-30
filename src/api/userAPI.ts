import { api } from '.';
import { RegisterFormData } from '@/pages/user/ClientRegister';
import { UserRole } from '@/types/UserRole';
import { UserType } from '@/types/userType';
import Cookies from 'js-cookie';

export class userAPI {
    static async fetchUserData() {
        try {
            const refreshToken = Cookies.get('meetFlow.refreshToken');
            const response = await api.get('/account/user', {headers: {refreshToken: refreshToken}});
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    static async fetchProfileData(_id : string | undefined){
        try{
            const response = await api.get(`/user/load?_id=${_id}`);
            return response.data;
        }catch (error){
            throw error;
        }
    }

    static async createUser(userData: RegisterFormData, userRole: UserRole) {
        const data = { ...userData, role: 'client' };
        try {
            const res = await api.post('/auth/signup', data);
            return res;
        } catch (error) {
            throw error;
        }
    }

    static async fetchProfessionals() {
        try {
            const res = await api.get('/user/loadProfessional');
            return res.data;
        } catch (error) {
            throw error;
        }
    }
}

import { RegisterFormData } from '@/pages/user/ClientRegister';
import { api } from '.';
import { Role } from '@/context/auth-provider';

export class userAPI {
    static async fetchProfileData(_id: string | undefined) {
        try {
            const response = await api.get(`/user/load?_id=${_id}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    static async createUser(userData: RegisterFormData, role: Role) {
        const data = { ...userData, role };
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

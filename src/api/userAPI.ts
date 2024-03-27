import { UserType } from '@/types/userType';
import axios from 'axios';
import { AxiosError } from 'axios';

const refreshtoken = sessionStorage.getItem('refreshToken');

export class userAPI {
    
    static async fetchUserData() {
        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/account/user`,{headers:{'refreshtoken':refreshtoken}})
            if (!response) {
                throw new Error('Erro ao fazer a requisição:');
            }
            const data = await response.data;
            return data;
        } catch (error) {
            console.error('Erro:', error);
        }
    }
    

}



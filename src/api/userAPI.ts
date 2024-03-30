import axios from 'axios';
import Cookies from 'js-cookie';

export class userAPI {
    static async fetchUserData() {
        try {
            const refreshToken = Cookies.get('meetFlow.refreshToken');

            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/account/whoami`, { headers: { refreshtoken: refreshToken } });
            if (!response) {
                throw new Error('Erro ao fazer a requisição:');
            }
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}

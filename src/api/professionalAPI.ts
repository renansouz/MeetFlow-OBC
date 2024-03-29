import { api } from '.';

const refreshtoken = sessionStorage.getItem('refreshToken');
const currentSignupAcessToken = sessionStorage.getItem('currentSignupAcessToken');

export class professionalAPI {
    static async createSchedule(scheduleData: any) {
        try {
            const response = await api.post('/schedule/add', scheduleData, { headers: { acessToken: currentSignupAcessToken } });
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}

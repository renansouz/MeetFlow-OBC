import { api } from '.';

export class professionalAPI {
    static async createSchedule(scheduleData: any) {
        const currentSignupAcessToken = sessionStorage.getItem('currentSignupAcessToken');

        try {
            console.log(scheduleData);

            const response = await api.post('/schedule/add', scheduleData, { headers: { Authorization: `Bearer ${currentSignupAcessToken}` } });

            return response.data;
        } catch (error) {
            throw error;
        }
    }
}

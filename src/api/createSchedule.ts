import { api } from ".";
import { ScheduleFormData } from '@/pages/professional/ProfessionalRegister/step';

export async function createSchedule(scheduleData: ScheduleFormData) {
    const currentSignupAcessToken = sessionStorage.getItem('currentSignupAcessToken');
    console.log(currentSignupAcessToken);
    try {
        const response = await api.post('/schedule/add', scheduleData, { headers: { Authorization: `Bearer ${currentSignupAcessToken}` } });
        return response.data;
    } catch (error) {
        throw error;
    }
}
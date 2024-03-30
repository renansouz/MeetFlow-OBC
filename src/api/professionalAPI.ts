import { api } from '.';
import { ScheduleFormData } from '@/pages/professional/ProfessionalRegister/step';
import { updateUserFormData } from '@/pages/professional/ProfessionalRegister/step';

export class professionalAPI {
    static async createSchedule(scheduleData: ScheduleFormData) {
        const currentSignupAcessToken = sessionStorage.getItem('currentSignupAcessToken');
        try {
            console.log(scheduleData);
            const response = await api.post('/schedule/add', scheduleData, { headers: { Authorization: `Bearer ${currentSignupAcessToken}` } });
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    static async updateUser(userData:updateUserFormData,id:string | undefined) {
        try{
            const response = await api.put(`/user/update?_id=${id}`, userData)
        }catch(error){
            throw error 
        }

    }

}

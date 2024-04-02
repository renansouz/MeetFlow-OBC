import { api } from '@/lib/axios';
import { updateUserFormData } from '@/pages/professional/ProfessionalRegister/step';

export async function updateProfile(_id: string | null, userData: updateUserFormData) {
    try {
        const currentSignupAcessToken = sessionStorage.getItem('currentSignupAcessToken');
        const response = await api.patch(`/user/update?_id=${_id}`, userData, { headers: { Authorization: `Bearer ${currentSignupAcessToken}` } });
        return response.data;
    } catch (error) {
        throw error;
    }
}

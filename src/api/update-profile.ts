import { api } from '@/lib/axios';
import { updateUserFormData } from '@/pages/professional/ProfessionalRegister/step';

export async function updateProfile(_id: string | undefined, userData: updateUserFormData) {
    try {
        const response = await api.patch(`/user/update?_id=${_id}`, userData);
        return response.data;
    } catch (error) {
        throw error;
    }
}

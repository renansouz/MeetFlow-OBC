import { NewServiceFormData } from '@/pages/professional/Dashboard/components/ProfessionalAside';
import { api } from '.';

export const createService = async (serviceData: NewServiceFormData) => {
    try {
        const res = await api.post('/service/add', serviceData);
    } catch (error) {
        throw error;
    }
};

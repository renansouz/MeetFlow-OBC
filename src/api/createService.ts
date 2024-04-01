import { NewServiceFormData } from '@/pages/professional/Dashboard/components/ProfessionalAside';
import axios from 'axios';
import { api } from '.';
import Cookies from 'js-cookie';

export const createService = async (serviceData: NewServiceFormData) => {
    try {
        const res = await api.post('/service/add', serviceData);
    } catch (error) {
        throw error;
    }
};

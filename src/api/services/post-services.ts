import { api } from '@/lib/axios';

export interface ServiceInBody {
    name: string;
    description: string;
    price: number;
    duration: number;
}
export interface ServiceInResponse {
    _id: string;
    name: string;
    description: string;
    price: number;
    duration: number;
    appointmentsTotal: number;
    active: boolean;
    createdAt: string;
    createById: string;
}

export async function createService({ name, description, price, duration }: ServiceInBody) {
    await api.post<ServiceInResponse>('service/add', { name, description, price, duration });
}

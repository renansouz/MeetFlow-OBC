import { api } from '@/lib/axios';

export interface ServiceInBody {
    name: string;
    description: string;
    price: number;
    duration: number;
}

export async function createService({ name, description, price, duration }: ServiceInBody) {
    await api.post('service/add', { name, description, price, duration });
}

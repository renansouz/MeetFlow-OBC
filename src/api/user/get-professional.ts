import { api } from '@/lib/axios';

export interface Professional {
    _id: string;
    name: string;
    email?: string;
    role?: string;
    active?: boolean;
    myScheduleId?: string | null;
    appointmentsTotal?: number;
    occupationArea: string | null;
    headLine: string | null;
    photoUrl?: string | null;
    serviceIds?: string[];
    createdAt?: Date | null;
}

export interface GetProfessionalResponse {
    data: Professional[];
}

export async function getProfessional() {
    const response = await api.get<GetProfessionalResponse>('/user/loadProfessional');
    console.log('response', response.data);
    return response.data;
}

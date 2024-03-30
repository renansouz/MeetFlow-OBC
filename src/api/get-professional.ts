import { api } from '@/lib/axios';

export interface ProfessionalData {
    _id: string;
    name: string;
    email: string;
    role: string;
    myScheduleId: string | null;
    appointmentsTotal: number;
    occupationArea: string | null;
    photoUrl: string | null;
    serviceIds: string[];
    createdAt: Date | null;
}
export interface GetProfessionalResponse {
    data: ProfessionalData[];
}

export async function getProfessional() {
    const response = await api.get<GetProfessionalResponse>('/user/loadProfessional');

    return response.data;
}

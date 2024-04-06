import { api } from '@/lib/axios';

export interface GetServiceByPageParams {
    page?: number;
    sortBy?: string;
    typeSort?: string;
    limit?: number;
    userId?: string;
}

export interface GetService {
    _id: string;
    name: string;
    description: string;
    price: number;
    duration: number;
    appointmentTotal: number;
    active: boolean;
    createdById: string;
    createdAt: Date;
}

export interface GetServiceByPageResponse {
    services: GetService[];
    total: number;
}

export async function getServiceByPage({ userId, page }: GetServiceByPageParams) {
    const response = await api.get<GetServiceByPageResponse>('/service/loadByPage', {
        params: {
            userId,
            page,
            sortBy: 'createdAt',
            typeSort: 'desc',
            limit: 10,
        },
    });

    return response.data;
}

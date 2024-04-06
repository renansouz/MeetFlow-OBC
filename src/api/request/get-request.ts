import { api } from '@/lib/axios';

export interface GetRequestParams {
    _id?: string;
}

export interface GetRequestResponse {
    _id: string;
    message: string;
    duration: number;
    serviceId: string;
    scheduleId: number;
    clientId: number;
    initDate: string;
    endDate: string;
    status: string;
    active: boolean;
    haveRecurrence: boolean;
    createdById: string;
    createdAt: string;
}

export async function getRequest(_id: GetRequestParams) {
    const response = await api.get<GetRequestResponse>('/request/load', { params: _id });

    return response.data;
}

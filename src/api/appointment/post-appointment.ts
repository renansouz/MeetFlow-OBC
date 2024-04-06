import { api } from '@/lib/axios';

export interface AppointmentInBody {
    message: string;
    serviceId: string;
    scheduleId: string;
    clientId: string;
    requestId: string;
    initDate: string;
    endDate: string;
    status: string;
}
export interface AppointmentInResponse {
    _id: string;
    message: string;
    serviceId: string;
    scheduleId: string;
    clientId: string;
    requestId: string;
    initDate: string;
    endDate: string;
    status: string;
    active: boolean;
    createdById: string;
    createdAt: string;
}

export async function createAppointment({}: AppointmentInBody) {
    await api.post<AppointmentInResponse>('appointment/add', {});
}

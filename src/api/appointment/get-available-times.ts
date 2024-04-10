import { api } from '@/lib/axios';

export interface GetAppointmentLoadAvailableTimesParams {
    serviceId: string;
    scheduleId: string;
    date: string | Date;
}

export interface GetAppointmentLoadAvailableTimesResponse {
    timeAvailableProfessional: string[];
    timeAvailable: string[];
}

export async function getAppointmentLoadAvailableTimes({
    serviceId,
    scheduleId,
    date,
}: GetAppointmentLoadAvailableTimesParams) {
    const response = await api.get<GetAppointmentLoadAvailableTimesResponse>(
        '/appointment/loadAvailableTimes',
        {
            params: {
                serviceId,
                scheduleId,
                date,
            },
        }
    );

    return response.data;
}

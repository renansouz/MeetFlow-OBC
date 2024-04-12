import { api } from '@/lib/axios';

export interface GetAppointmentByPageParams {
  page?: number;
  sortBy?: string;
  limit?: number;
  typeSort?: string;
  userId?: string;
  status?: string;
}

export interface GetAppointment {
  _id: string;
  message: string;
  serviceId: string;
  serviceName: string;
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

export interface GetAppointmentByPageResponse {
  appointments: GetAppointment[];
  total: number;
}

export async function getAppointmentByPage({ userId, page }: GetAppointmentByPageParams) {
  const response = await api.get<GetAppointmentByPageResponse>('/appointment/loadByPage', {
    params: {
      userId,
      page,
      sortBy: 'createdAt',
      typeSort: 'desc',
      status: 'confirmado',
    },
  });

  return response.data;
}

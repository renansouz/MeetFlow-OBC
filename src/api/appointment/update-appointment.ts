import { api } from '@/lib/axios';

export interface UpdateAppointmentBody {
  status?: string;
  message?: string;
  active?: boolean;
  haveRecurrence?: boolean;
}

export interface UpdateAppointmentRequest {
  _id: string;
  data: UpdateAppointmentBody;
}

export interface UpdateAppointmentResponse {
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
  haveRecurrence: boolean;
  createdById: string;
  createdAt: string;
}

export async function updateAppointment({ _id, data }: UpdateAppointmentRequest) {
  const response = await api.patch<UpdateAppointmentResponse>('/appointment/update', {
    params: {
      _id,
    },
    data,
  });

  return response.data;
}

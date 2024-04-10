import { api } from '@/lib/axios';

export interface UpdateScheduleBody {
  name?: string;
  description?: string;
  days1?: {
    sunday1?: boolean;
    monday1?: boolean;
    tuesday1?: boolean;
    wednesday1?: boolean;
    thursday1?: boolean;
    friday1?: boolean;
    saturday1?: boolean;
  };
  minimumTimeForReSchedule?: number;
  hourStart1?: string;
  hourEnd1?: string;
  hourLunchStart1?: string;
  hourLunchEnd1?: string;
}

export interface UpdateScheduleRequest {
  _id: string;
  data: UpdateScheduleBody;
}

export interface UpdateScheduleResponse {
  _id: string;
  name: string;
  description: string;
  days1: {
    sunday1: boolean;
    monday1: boolean;
    tuesday1: boolean;
    wednesday1: boolean;
    thursday1: boolean;
    friday1: boolean;
    saturday1: boolean;
  };
  minimumTimeForReSchedule?: number;
  hourStart1: string;
  hourEnd1: string;
  hourLunchStart1?: string;
  hourLunchEnd1?: string;
  appointmentTotal: number;
  active: boolean;
  createdById: string;
  createdAt: Date;
}

export async function updateSchedule({ _id, data }: UpdateScheduleRequest) {
  const response = await api.patch<UpdateScheduleResponse>('/schedule/update', {
    params: {
      _id,
    },
    data,
  });

  return response.data;
}

import { api } from '@/lib/axios';

export interface GetScheduleParams {
  _id?: string;
}

export interface GetScheduleResponse {
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
}

export async function getSchedule(_id: GetScheduleParams) {
  const response = await api.get<GetScheduleResponse>('/schedule/load', { params: _id });

  return response.data;
}

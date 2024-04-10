import { api } from '@/lib/axios';

export interface RequestInBody {
  message: string;
  serviceId: string;
  scheduleId: number;
  clientId: number;
  duration: number;
  initDate: string;
  endDate: string;
  haveRecurrence: boolean;
  status: string;
}
export interface RequestInResponse {
  _id: string;
  message: string;
  serviceId: string;
  scheduleId: number;
  clientId: number;
  duration: number;
  initDate: string;
  endDate: string;
  status: string;
  active: boolean;
  haveRecurrence: boolean;
  createdById: string;
  createdAt: string;
}

export async function createRequest({}: RequestInBody) {
  await api.post<RequestInResponse>('request/add', {});
}

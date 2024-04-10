import { api } from '@/lib/axios';

export interface RequestInBody {
  message?: string | null;
  serviceId: string;
  scheduleId: string;
  clientId: string;
  professionalId: string;
  duration: number;
  initDate: string | Date;
  endDate: string | Date;
  haveRecurrence?: boolean | null;
  status?: string | null;
}
export interface RequestInResponse {
  _id: string;
  message: string;
  serviceId: string;
  scheduleId: string;
  clientId: string;
  professionalId: string;
  duration: number;
  initDate: string | Date;
  endDate: string | Date;
  status: string;
  active: boolean;
  haveRecurrence: boolean;
  createdById: string;
  createdAt: string;
}

export async function createRequest({
  message,
  serviceId,
  scheduleId,
  clientId,
  professionalId,
  duration,
  initDate,
  endDate,
  haveRecurrence,
  status,
}: RequestInBody) {
  await api.post<RequestInResponse>('request/add', {
    message,
    serviceId,
    scheduleId,
    clientId,
    professionalId,
    duration,
    initDate,
    endDate,
    haveRecurrence,
    status,
  });
}

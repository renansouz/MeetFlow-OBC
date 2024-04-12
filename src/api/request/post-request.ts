import { api } from '@/lib/axios';

export interface RequestInBody {
  message?: string | null;
  serviceId: string;
  serviceName: string;
  scheduleId: string;
  clientId: string;
  clientName?: string;
  professionalId: string;
  duration: number;
  initDate: string | Date;
  endDate: string | Date;
  haveRecurrence?: boolean | null;
  status?: string | null;
  active: boolean;
}
export interface RequestInResponse {
  _id: string;
  message: string;
  serviceId: string;
  serviceName: string;
  scheduleId: string;
  clientId: string;
  clientName?: string;
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
  serviceName,
  scheduleId,
  clientId,
  clientName,
  professionalId,
  duration,
  initDate,
  endDate,
  haveRecurrence,
  status,
  active,
}: RequestInBody) {
  await api.post<RequestInResponse>('request/add', {
    message,
    serviceId,
    serviceName,
    scheduleId,
    clientId,
    clientName,
    professionalId,
    duration,
    initDate,
    endDate,
    haveRecurrence,
    status,
    active: active || true,
  });
}

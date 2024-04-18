import { api } from '@/lib/axios';

export interface AppointmentInBody {
  message: string;
  serviceId: string;
  serviceName: string;
  scheduleId: string;
  clientId: string;
  clientName: string;
  clientEmail: string;
  professionalId: string;
  requestId: string;
  initDate: string;
  endDate: string;
  haveRecurrence?: boolean | null;
  status: string;
  active: boolean;
}
export interface AppointmentInResponse {
  _id: string;
  message: string;
  serviceId: string;
  serviceName: string;
  scheduleId: string;
  clientId: string;
  clientName: string;
  clientEmail: string;
  professionalId: string;
  requestId: string;
  initDate: string;
  endDate: string;
  status: string;
  haveRecurrence: boolean;
  active: boolean;
  createdById: string;
  createdAt: string;
}

export async function createAppointment({
  message,
  serviceId,
  serviceName,
  scheduleId,
  clientId,
  clientName,
  clientEmail,
  professionalId,
  requestId,
  initDate,
  endDate,
  status,
  active,
  haveRecurrence,
}: AppointmentInBody) {
  await api.post<AppointmentInResponse>('appointment/add', {
    message,
    serviceId,
    serviceName,
    scheduleId,
    professionalId: professionalId || scheduleId,
    clientId,
    clientName,
    clientEmail,
    requestId,
    initDate,
    endDate,
    status,
    active,
    haveRecurrence,
  });
}

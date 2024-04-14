import { api } from '@/lib/axios';

export interface UpdateRequestBody {
  status?: string;
  message?: string;
  active?: boolean;
  cancelled?: boolean;
  haveRecurrence?: boolean;
}

export interface UpdateRequestRequest {
  _id: string;
  data: UpdateRequestBody;
}

export interface UpdateRequestResponse {
  _id: string;
  message: string;
  duration: number;
  serviceId: string;
  scheduleId: string;
  clientId: string;
  initDate: string;
  endDate: string;
  status: string;
  active: boolean;
  haveRecurrence: boolean;
  createdById: string;
  createdAt: string;
}

export async function updateRequest({ _id, data }: UpdateRequestRequest) {
  const response = await api.patch<UpdateRequestResponse>(`/request/update?_id=${_id}`, data);

  return response.data;
}

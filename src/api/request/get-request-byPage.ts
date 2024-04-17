import { api } from '@/lib/axios';

export interface GetRequestByPageParams {
  page?: number;
  sortBy?: string;
  limit?: number;
  typeSort?: string;
  userId?: string;
  status?: string;
  createdById?: string;
}

export interface GetRequest {
  _id: string;
  message: string;
  duration: number;
  serviceId: string;
  serviceName: string;
  scheduleId: string;
  clientId: string;
  clientName: string;
  clientEmail: string;
  initDate: string;
  endDate: string;
  status: string;
  active: boolean;
  haveRecurrence: boolean;
  createdById: string;
  createdAt: string;
}

export interface GetRequestByPageResponse {
  requests: GetRequest[];
  total: number;
}

export async function getRequestByPage({
  userId,
  page,
  status,
  createdById,
}: GetRequestByPageParams) {
  const response = await api.get<GetRequestByPageResponse>('/request/loadByPage', {
    params: {
      userId,
      page,
      status,
      createdById,
      sortBy: 'createdAt',
      typeSort: 'desc',
    },
  });

  return response.data;
}

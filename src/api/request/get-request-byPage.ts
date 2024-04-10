import { api } from '@/lib/axios';

export interface GetRequestByPageParams {
  page?: number;
  sortBy?: string;
  limit?: number;
  typeSort?: string;
  userId?: string;
}

export interface GetRequest {
  _id: string;
  message: string;
  duration: number;
  serviceId: string;
  scheduleId: number;
  clientId: number;
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

export async function getRequestByPage({ userId, page }: GetRequestByPageParams) {
  const response = await api.get<GetRequestByPageResponse>('/request/loadByPage', {
    params: {
      userId,
      page,
      sortBy: 'createdAt',
      typeSort: 'desc',
      limit: 10,
    },
  });

  return response.data;
}

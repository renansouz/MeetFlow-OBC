import { api } from '@/lib/axios';

export interface GetClientParams {
  _id?: string;
}

export interface GetClientResponse {
  _id: string;
  name: string;
  email: string;
  phone: string;
  active: number;
  createdById: string;
  userId: number;
  clientId: number;
  createdAt: string;
}

export async function getClient(_id: GetClientParams) {
  const response = await api.get<GetClientResponse>('/client/load', { params: _id });

  return response.data;
}

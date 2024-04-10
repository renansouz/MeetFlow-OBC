import { api } from '@/lib/axios';

export interface GetProfileParams {
  _id?: string;
}

export interface GetProfileResponse {
  _id: string;
  name: string;
  email: string;
  serviceIds: string[];
  scheduleId: string | null;
  myScheduleId: string | null;
  photoUrl?: string;
  headLine: string;
  occupationArea: string;
  appointmentsTotal: number;
  createdAt: Date | null;
}

export async function getProfile(_id: GetProfileParams) {
  const response = await api.get<GetProfileResponse>('/user/load', { params: _id });

  return response.data;
}

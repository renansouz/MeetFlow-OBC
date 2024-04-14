import { api } from '@/lib/axios';

export interface Professional {
  _id: string;
  name: string;
  email?: string;
  role?: string;
  active?: boolean;
  myScheduleId?: string | null;
  appointmentsTotal?: number;
  occupationArea: string | null;
  headLine: string | null;
  photoUrl?: string | null;
  serviceIds?: string[];
  createdAt?: Date | null;
  isLoadingProfessional?: boolean;
}

export interface GetProfessionalResponse {
  data: Professional[];
}

export async function getProfessional() {
  const response = await api.get<GetProfessionalResponse>('/user/loadProfessional');
  return response.data;
}

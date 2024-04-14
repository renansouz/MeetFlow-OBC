import { api } from '@/lib/axios';

export interface UpdateServiceBody {
  name?: string;
  description: string;
  price: number;
  duration: number;
  active: boolean;
}

export interface UpdateServiceRequest {
  _id: string;
  data: UpdateServiceBody;
}

export interface UpdateServiceResponse {
  _id: string;
  name: string;
  description: string;
  price: number;
  duration: number;
  appointmentTotal: number;
  active: boolean;
  createdById: string;
  createdAt: Date;
}

export async function updateService({ _id, data }: UpdateServiceRequest) {
  const response = await api.patch<UpdateServiceResponse>('/service/update', {
    params: {
      _id,
    },
    data,
  });

  return response.data;
}

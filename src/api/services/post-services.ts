import { api } from '@/lib/axios';

export interface ServiceInBody {
  name: string;
  description: string;
  price: number;
  duration: number;
  active?: boolean;
}
export interface ServiceInResponse {
  _id: string;
  name: string;
  description: string;
  price: number;
  duration: number;
  appointmentsTotal: number;
  active: boolean;
  createdAt: string;
  createById: string;
}

export async function createService({ name, description, price, duration, active }: ServiceInBody) {
  await api.post<ServiceInResponse>('service/add', {
    name,
    description,
    price,
    duration,
    active: active || true,
  });
}

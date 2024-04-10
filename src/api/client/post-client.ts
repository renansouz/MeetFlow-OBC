import { api } from '@/lib/axios';

export interface ClientInBody {
  name: string;
  phone: string;
  email: string;
}
export interface ClientInResponse {
  _id: string;
  name: string;
  email: string;
  phone: string;
  active: boolean;
  createdAt: string;
  createById: string;
}

export async function createClient({ name, phone, email }: ClientInBody) {
  await api.post<ClientInResponse>('client/add', { name, phone, email });
}

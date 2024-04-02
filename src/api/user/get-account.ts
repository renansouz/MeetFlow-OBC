import { api } from '@/lib/axios';

export interface GetAccountResponse {}

export async function getAccount() {
    const response = await api.get<GetAccountResponse>('/user/loadAccount');

    return response.data;
}

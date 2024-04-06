import { api } from '@/lib/axios';

export interface DeleteRequestInParams {
    _id: string;
}

export async function deleteRequest({ _id }: DeleteRequestInParams) {
    await api.delete('request/delete', {
        params: {
            _id,
        },
    });
}

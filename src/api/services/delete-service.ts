import { api } from '@/lib/axios';

export interface DeleteServiceInParams {
    _id: string;
}

export async function deleteService({ _id }: DeleteServiceInParams) {
    await api.delete('service/delete', {
        params: {
            _id,
        },
    });
}

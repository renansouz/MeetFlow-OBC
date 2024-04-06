import { api } from '@/lib/axios';

export interface DeletePhotoInParams {
    url: string;
}

export async function deletePhoto({ url }: DeletePhotoInParams) {
    await api.delete('photo/delete', {
        params: {
            url,
        },
    });
}

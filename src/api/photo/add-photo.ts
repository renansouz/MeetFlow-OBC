import { api } from '@/lib/axios';

export interface AddPhotoResponse {
    _id: string;
    url: string;
    title: string;
    createdAt: string;
}

export async function addPhoto(file: File) {
    const formData = new FormData();
    formData.append('file', file);

    const response = await api.post<AddPhotoResponse>('/photo/add', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });

    return response.data;
}

import Cookies from 'js-cookie';

import { api } from '@/lib/axios';

export interface UpdateProfileBody {
    name?: string;
    email?: string;
    headLine?: string;
    password?: string;
    occupationArea?: string;
    photoUrl?: string;
}

export interface UpdateProfileResponse {
    _id: string;
    name: string;
    email: string;
    serviceIds: string[];
    scheduleId: string | null;
    myScheduleId: string | null;
    headLine: string | null;
    photoUrl?: string | null;
    occupationArea: string;
}

export async function updateProfile(data: UpdateProfileBody) {
    const _id = Cookies.get('meetFlow.user');
    const parsedId = _id ? JSON.parse(_id) : null;
    const token = Cookies.get('meetFlow.token');

    const response = await api.patch<UpdateProfileResponse>(`/user/update?_id=${parsedId}`, data, { headers: { Authorization: `Bearer ${token}` } });
    return response.data;
}

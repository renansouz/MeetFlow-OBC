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
  serviceIds: string[] | undefined;
  scheduleId: string | undefined;
  myScheduleId: string;
  headLine: string;
  photoUrl?: string | undefined;
  occupationArea: string;
}

export async function updateProfile(data: UpdateProfileBody) {
  const user = Cookies.get('meetFlow.user');
  console.log('user', user);
  const parsedUser = user ? JSON.parse(user) : null;
  console.log('parsedId', parsedUser);
  const token = Cookies.get('meetFlow.token');

  const response = await api.patch<UpdateProfileResponse>(
    `/user/update?_id=${parsedUser._id}`,
    data,
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return response.data;
}

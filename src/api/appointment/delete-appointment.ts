import { api } from '@/lib/axios';

export interface DeleteAppointmentInParams {
  _id: string;
}

export async function deleteAppointment({ _id }: DeleteAppointmentInParams) {
  await api.delete('appointment/delete', {
    params: {
      _id,
    },
  });
}

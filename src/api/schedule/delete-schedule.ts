import { api } from '@/lib/axios';

export interface DeleteScheduleInParams {
    _id: string;
}

export async function deleteSchedule({ _id }: DeleteScheduleInParams) {
    await api.delete('schedule/delete', {
        params: {
            _id,
        },
    });
}

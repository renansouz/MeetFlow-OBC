import { api } from '@/lib/axios';

export interface ScheduleInBody {
    name?: string;
    description?: string;
    days1: any;
    hourStart1: string;
    hourEnd1: string;
    hourLunchStart1?: string;
    hourLunchEnd1?: string;
}

export async function createSchedule({ name, description, days1, hourStart1, hourLunchStart1, hourLunchEnd1, hourEnd1 }: ScheduleInBody) {
    await api.post('schedule/add', { name, description, days1, hourStart1, hourLunchStart1, hourLunchEnd1, hourEnd1 });
}

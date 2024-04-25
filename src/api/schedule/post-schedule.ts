import Cookies from 'js-cookie';

import { api } from '@/lib/axios';

export interface ScheduleInBody {
  days1: {
    monday1: boolean;
    tuesday1: boolean;
    wednesday1: boolean;
    thursday1: boolean;
    friday1: boolean;
    saturday1: boolean;
    sunday1: boolean;
  };
  hourStart1: string;
  hourEnd1: string;
  hourLunchStart1?: string;
  hourLunchEnd1?: string;
}

export async function createSchedule({
  days1,
  hourStart1,
  hourLunchStart1,
  hourLunchEnd1,
  hourEnd1,
}: ScheduleInBody) {
  const token = Cookies.get('meetFlow.token');
  await api.post(
    'schedule/add',
    { days1, hourStart1, hourLunchStart1, hourLunchEnd1, hourEnd1 },
    { headers: { Authorization: `Bearer ${token}` } }
  );
}

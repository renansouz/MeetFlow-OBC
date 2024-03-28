import { ScheduleType } from "@/types/ScheduleType";
import axios from "axios";

const refreshtoken = sessionStorage.getItem('refreshToken');

export class professionalAPI {

    static async createSchedule(scheduleData: ScheduleType) {
        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/schedule/add`, scheduleData, {headers:{refreshtoken: refreshtoken}});
            return response.data;
        } catch (error) {
            throw error
        }

    }  




}
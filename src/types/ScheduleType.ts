export type ScheduleType = {
    days1: {
        monday: boolean;
        sunday1: boolean;
        thursday1: boolean;
        wednesday1: boolean;
        tuesday1: boolean;
        friday1: boolean;
        saturday1: boolean;
    };
    hourStart1: string;
    hourEnd1:string;
    hourLunchStart1?:string;
    hourLunchEnd1?:string;
    minimumTimeForReSchedule:number;
};

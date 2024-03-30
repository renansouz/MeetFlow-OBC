import { zodResolver } from '@hookform/resolvers/zod';
import { AxiosError } from 'axios';
import { Controller, useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import { z } from 'zod';

import { professionalAPI } from '@/api/professionalAPI';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { dayHours } from '@/utils/dayHours';

type stepProps = {
    currentStepState: number;
    setCurrentStepState: (int: number) => void;
};

const createScheduleSchema = z.object({
    name: z.string(),
    days: z.object({
        monday1: z.boolean(),
        tuesday1: z.boolean(),
        wensday1: z.boolean(),
        thursday1: z.boolean(),
        friday1: z.boolean(),
        saturday1: z.boolean(),
        sunday1: z.boolean(),
    }),
    hourStart1: z.string({ required_error: 'Campo obrigatório' }),
    hourEnd1: z.string({ required_error: 'Campo obrigatório' }),
    hourLunchStart1: z.string(),
    hourLunchEnd1: z.string(),
});

export type ScheduleFormData = z.infer<typeof createScheduleSchema>;

export const Step2 = ({ setCurrentStepState, currentStepState }: stepProps) => {
    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<ScheduleFormData>({ resolver: zodResolver(createScheduleSchema) });

    const createNewSchedule = async (scheduleData: ScheduleFormData) => {
        try {
            const res = await professionalAPI.createSchedule(scheduleData);
        } catch (error) {
            if (error instanceof AxiosError) {
                toast.error(error.response?.data.message);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit(createNewSchedule)}>
            <ToastContainer />
            <div className="flex flex-col items-center justify-center">
                <h2 className="mt-20 text-black">Horários disponíveis</h2>
                <div className="flex items-center justify-center gap-10 py-10 ">
                    <div>
                        <Controller
                            name="hourStart1"
                            control={control}
                            render={({ field: { name, onChange, value, disabled } }) => {
                                return (
                                    <Select name={name} onValueChange={onChange} value={value} disabled={disabled}>
                                        <SelectTrigger className="w-[180px] bg-white text-black">
                                            <SelectValue placeholder="00:00" />
                                        </SelectTrigger>
                                        <SelectContent className="w-[180px] bg-white text-black">
                                            {dayHours.map((day) => (
                                                <SelectItem key={day} value={day} {...register('hourStart1')}>
                                                    {day}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                );
                            }}
                        ></Controller>
                    </div>
                    <div>
                        <p className="text-black">até</p>
                    </div>
                    <div>
                        <Controller
                            name="hourEnd1"
                            control={control}
                            render={({ field: { name, onChange, value, disabled } }) => {
                                return (
                                    <Select name={name} onValueChange={onChange} value={value} disabled={disabled}>
                                        <SelectTrigger className="w-[180px] bg-white text-black">
                                            <SelectValue placeholder="00:00" />
                                        </SelectTrigger>
                                        <SelectContent className="w-[180px] bg-white text-black">
                                            {dayHours.map((day) => (
                                                <SelectItem value={day}>{day}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                );
                            }}
                        ></Controller>
                    </div>
                </div>
                <div className="flex gap-x-12">
                    {errors.hourEnd1 && <p className="text-red-600">{errors.hourEnd1.message}</p>}
                    {errors.hourStart1 && <p className="text-red-600">{errors.hourStart1.message}</p>}
                </div>
            </div>
            <div>
                <h2 className="text-center text-black">Dias disponiveis</h2>
                <div className="mt-5 flex flex-wrap justify-center gap-5">
                    <div className="flex flex-col items-center justify-center gap-2">
                        <input type="checkbox" id="" {...register('days.sunday1')} />
                        <label htmlFor="" className="block text-black">
                            Domingo
                        </label>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <input type="checkbox" id="" {...register('days.monday1')} defaultChecked />
                        <label htmlFor="" className="block text-black">
                            Segunda
                        </label>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <input type="checkbox" id="" {...register('days.tuesday1')} defaultChecked />
                        <label htmlFor="" className="block text-black">
                            Terça
                        </label>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <input type="checkbox" id="" {...register('days.wensday1')} defaultChecked />
                        <label htmlFor="" className="block text-black">
                            Quarta
                        </label>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <input type="checkbox" id="" {...register('days.thursday1')} defaultChecked />
                        <label htmlFor="" className="block text-black">
                            Quinta
                        </label>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <input type="checkbox" id="" {...register('days.friday1')} defaultChecked />
                        <label htmlFor="" className="block text-black">
                            Sexta
                        </label>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <input type="checkbox" id="" {...register('days.saturday1')} />
                        <label htmlFor="" className="block text-black">
                            Sábado
                        </label>
                    </div>
                </div>
                <div className="absolute bottom-10 mt-20  flex w-full justify-center gap-40">
                    <Button variant={'costumize'} onClick={() => setCurrentStepState(currentStepState - 1)}>
                        Voltar
                    </Button>
                    <Button type="submit">Continuar</Button>
                </div>
            </div>
        </form>
    );
};

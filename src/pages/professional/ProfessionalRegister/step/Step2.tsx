import { zodResolver } from '@hookform/resolvers/zod';
import { AxiosError } from 'axios';
import { MoveLeft, MoveRight } from 'lucide-react';
import { Controller, useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { dayHours } from '@/utils/dayHours';
import { createSchedule } from '@/api/createSchedule';


type stepProps = {
    currentStepState: number;
    setCurrentStepState: (int: number) => void;
};

const createScheduleSchema = z.object({
    days1: z.object({
        monday1: z.boolean(),
        tuesday1: z.boolean(),
        wednesday1: z.boolean(),
        thursday1: z.boolean(),
        friday1: z.boolean(),
        saturday1: z.boolean(),
        sunday1: z.boolean(),
    }),
    hourStart1: z.string({ required_error: 'Campo obrigatório' }),
    hourEnd1: z.string({ required_error: 'Campo obrigatório' }),
});

export type ScheduleFormData = z.infer<typeof createScheduleSchema>;

export const Step2 = ({ setCurrentStepState, currentStepState }: stepProps) => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<ScheduleFormData>({ resolver: zodResolver(createScheduleSchema) });

    const createNewSchedule = async (scheduleData: ScheduleFormData) => {
        try {
            await createSchedule(scheduleData);
            setCurrentStepState(3);
        } catch (error) {
            if (error instanceof AxiosError) {
                toast.error(error.response?.data.message);
            }
        }
    };

    return (
        <form className="" onSubmit={handleSubmit(createNewSchedule)}>
            <ToastContainer />
            <div className="flex flex-col items-center justify-start">
                <span className="text-4xl text-foreground">Horários disponíveis</span>
                <div className="flex items-center justify-center gap-10 py-10 ">
                    <div>
                        <Controller
                            name="hourStart1"
                            control={control}
                            render={({ field: { name, onChange, value, disabled } }) => {
                                return (
                                    <Select name={name} onValueChange={onChange} value={value} disabled={disabled}>
                                        <SelectTrigger className="w-[180px] bg-card text-foreground">
                                            <SelectValue placeholder="00:00" />
                                        </SelectTrigger>
                                        <SelectContent className="w-[180px] bg-card text-foreground">
                                            {dayHours.map((day) => (
                                                <SelectItem value={day} {...register('hourStart1')}>
                                                    {day}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                );
                            }}
                        ></Controller>
                        {errors.hourStart1 && <p>{errors.hourStart1.message}</p>}
                    </div>
                    <div>
                        <p className="text-foreground">até</p>
                    </div>
                    <div>
                        <Controller
                            name="hourEnd1"
                            control={control}
                            render={({ field: { name, onChange, value, disabled } }) => {
                                return (
                                    <Select name={name} onValueChange={onChange} value={value} disabled={disabled}>
                                        <SelectTrigger className="w-[180px] bg-card text-foreground">
                                            <SelectValue placeholder="00:00" />
                                        </SelectTrigger>
                                        <SelectContent className="w-[180px] bg-card text-foreground">
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
                <div className="flex gap-x-12">{errors.hourEnd1 && <p className="text-red-600">{errors.hourEnd1.message}</p>}</div>
            </div>
            <div className="flex flex-col">
                <span className="items-center justify-center text-center text-4xl text-foreground">Dias disponiveis</span>
                <div className="mt-5 flex flex-wrap justify-center gap-1">
                    <div className="flex flex-col items-center justify-center gap-2 border-2 bg-card p-4">
                        <input
                            className="h-6 w-6 appearance-none rounded-md border-2 border-indigo-800 checked:border-indigo-800 checked:bg-indigo-600"
                            type="checkbox"
                            id=""
                            {...register('days1.sunday1')}
                        />
                        <label htmlFor="" className="block text-xl text-foreground">
                            Domingo
                        </label>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2 border-2 bg-card p-4">
                        <input
                            className="h-6 w-6 appearance-none rounded-md border-2 border-indigo-800 checked:border-indigo-800 checked:bg-indigo-600"
                            type="checkbox"
                            id=""
                            {...register('days1.monday1')}
                            defaultChecked
                        />
                        <label htmlFor="" className="block text-xl text-foreground">
                            Segunda
                        </label>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2 border-2 bg-card p-4">
                        <input
                            className="h-6 w-6 appearance-none rounded-md border-2 border-indigo-800 checked:border-indigo-800 checked:bg-indigo-600"
                            type="checkbox"
                            id=""
                            {...register('days1.tuesday1')}
                            defaultChecked
                        />
                        <label htmlFor="" className="block text-xl text-foreground">
                            Terça
                        </label>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2 border-2 bg-card p-4">
                        <input
                            className="h-6 w-6 appearance-none rounded-md border-2 border-indigo-800 checked:border-indigo-800 checked:bg-indigo-600"
                            type="checkbox"
                            id=""
                            {...register('days1.wednesday1')}
                            defaultChecked
                        />
                        <label htmlFor="" className="block text-xl text-foreground">
                            Quarta
                        </label>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2 border-2 bg-card p-4">
                        <input
                            className="h-6 w-6 appearance-none rounded-md border-2 border-indigo-800 checked:border-indigo-800 checked:bg-indigo-600"
                            type="checkbox"
                            id=""
                            {...register('days1.thursday1')}
                            defaultChecked
                        />
                        <label htmlFor="" className="block text-xl text-foreground">
                            Quinta
                        </label>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2 border-2 bg-card p-4">
                        <input
                            className="h-6 w-6 appearance-none rounded-md border-2 border-indigo-800 checked:border-indigo-800 checked:bg-indigo-600"
                            type="checkbox"
                            id=""
                            {...register('days1.friday1')}
                            defaultChecked
                        />
                        <label htmlFor="" className="block text-xl text-foreground">
                            Sexta
                        </label>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2 border-2 bg-card p-4">
                        <input
                            className="h-6 w-6 appearance-none rounded-md border-2 border-indigo-800 checked:border-indigo-800 checked:bg-indigo-600"
                            type="checkbox"
                            id=""
                            {...register('days1.saturday1')}
                        />
                        <label htmlFor="" className="block text-xl text-foreground">
                            Sábado
                        </label>
                    </div>
                </div>
                <div className="mt-5 flex w-full justify-center gap-40">
                    <Button onClick={() => setCurrentStepState(currentStepState - 1)}>
                        <MoveLeft className="mr-3" />
                        Voltar
                    </Button>
                    <Button type="submit">
                        Continuar
                        <MoveRight className="ml-3" />
                    </Button>
                </div>
            </div>
        </form>
    );
};

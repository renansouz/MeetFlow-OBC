import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { MoveLeft, MoveRight } from 'lucide-react';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

import { createSchedule } from '@/api/schedule';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { dayHours } from '@/utils/dayHours';

type stepProps = {
  currentStepState: number;
  setCurrentStepState: (int: number) => void;
};

const dayNames = {
  sunday1: 'Domingo',
  monday1: 'Segunda',
  tuesday1: 'Terça',
  wednesday1: 'Quarta',
  thursday1: 'Quinta',
  friday1: 'Sexta',
  saturday1: 'Sábado',
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
  } = useForm<ScheduleFormData>({
    resolver: zodResolver(createScheduleSchema),
  });

  const { mutateAsync: createScheduleFn } = useMutation({
    mutationFn: createSchedule,
  });

  async function createNewSchedule(scheduleData: ScheduleFormData) {
    try {
      await createScheduleFn(scheduleData);
      setCurrentStepState(3);
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message, {
          className: 'w-full text-xl h-20 flex items-center justify-center gap-x-2 ',
          position: 'top-right',
        });
      }
    }
  }

  return (
    <form onSubmit={handleSubmit(createNewSchedule)}>
      <div className="flex flex-col items-center justify-start">
        <span className="text-4xl text-foreground">Horários disponíveis</span>
        <div className="flex items-center justify-center gap-10 py-10 ">
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
                    {dayHours.map((hourStart) => (
                      <SelectItem key={hourStart} value={hourStart} {...register('hourStart1')}>
                        {hourStart}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              );
            }}
            rules={{ required: 'Campo obrigatório' }}
          ></Controller>
          {errors.hourStart1 && <p>{errors.hourStart1.message}</p>}
          <p className="text-foreground">até</p>
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
                    {dayHours.map((hourEnd) => (
                      <SelectItem key={hourEnd} value={hourEnd}>
                        {hourEnd}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              );
            }}
            rules={{ required: 'Campo obrigatório' }}
          ></Controller>
        </div>
        <div className="flex gap-x-12">
          {errors.hourEnd1 && <p className="text-red-600">{errors.hourEnd1.message}</p>}
        </div>
      </div>
      <div className="flex flex-col">
        <span className="items-center justify-center text-center text-4xl text-foreground">
          Dias disponiveis
        </span>
        <div className="mt-5 flex flex-wrap justify-center gap-1">
          {Object.entries(dayNames).map(([key, value]) => (
            <div
              key={key}
              className="flex flex-col items-center justify-center gap-2 border-2 bg-card p-4"
            >
              <input
                className="h-6 w-6 appearance-none rounded-md border-2 border-indigo-800 checked:border-indigo-800 checked:bg-indigo-600"
                type="checkbox"
                {...register(`days1.${key}`)}
              />
              <label className="block text-xl text-foreground">{value}</label>
            </div>
          ))}
        </div>
        {errors.days1 && <p className="text-red-600">{errors.days1.message}</p>}

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

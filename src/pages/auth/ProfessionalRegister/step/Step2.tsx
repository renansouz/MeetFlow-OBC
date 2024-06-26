import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import Cookies from 'js-cookie';
import { MoveRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import { toast } from 'sonner';
import { z } from 'zod';

import { getProfile, getUser } from '@/api';
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
  monday1: 'Segunda',
  tuesday1: 'Terça',
  wednesday1: 'Quarta',
  thursday1: 'Quinta',
  friday1: 'Sexta',
  saturday1: 'Sábado',
  sunday1: 'Domingo',
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
  hourLunchStart1: z.string().optional(),
  hourLunchEnd1: z.string().optional(),
});

export type ScheduleFormData = z.infer<typeof createScheduleSchema>;

export const Step2 = ({ setCurrentStepState }: stepProps) => {
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

  // Pegar o token do usuário da URL
  const location = useLocation();
  const userId = new URLSearchParams(location.search).get('userId');
  const refreshToken = new URLSearchParams(location.search).get('refreshToken');

  // Set the refreshToken in cookies if it is not null
  if (refreshToken) {
    Cookies.set('meetFlow.refreshToken', refreshToken, { expires: 30, path: '/' });
  }

  // Buscar os dados do usuário
  const { data: user } = useQuery({
    queryKey: ['user', userId],
    queryFn: () => getProfile({ _id: userId ?? '' }),
    staleTime: Infinity,
    enabled: !!userId,
  });

  // Atualizar os tokens
  const { data: tokens } = useQuery({
    queryKey: ['tokens'],
    queryFn: () => getUser(),
    staleTime: Infinity,
    enabled: !!refreshToken,
  });

  useEffect(() => {
    if (user && tokens) {
      // Definir os cookies
      Cookies.set('meetFlow.user', JSON.stringify(user), { expires: 30, path: '/' });
      Cookies.set('meetFlow.token', tokens.accessToken, { expires: 30, path: '/' });
      if (refreshToken) {
        Cookies.set('meetFlow.refreshToken', refreshToken, { expires: 30, path: '/' });
      }
    }
  }, [user, tokens]);

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

  const [showLunchTime, setShowLunchTime] = useState(false);

  return (
    <form
      className="flex h-full  flex-col items-center justify-center gap-y-8"
      onSubmit={handleSubmit(createNewSchedule)}
    >
      <div className="flex flex-col items-center justify-center gap-y-8">
        <span className="text-foreground">Horários disponíveis</span>
        <div className="flex items-center justify-center gap-10">
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
                      <SelectItem key={hourStart} value={hourStart}>
                        {hourStart}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              );
            }}
            rules={{ required: 'Campo obrigatório' }}
          ></Controller>
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
        <div className="flex flex-col ">
          <div className="flex items-center justify-center gap-2">
            <input
              className="h-5 w-5 appearance-none rounded-md border-2 border-indigo-800 checked:border-indigo-800 checked:bg-indigo-600"
              type="checkbox"
              id="checkbox"
              onChange={(e) => setShowLunchTime(e.target.checked)}
            />
            <label className="text-sm" htmlFor="checkbox">
              Adicionar horário de almoço
            </label>
          </div>
          <div
            className={`flex flex-col items-center justify-center gap-y-8 ${showLunchTime ? 'flex' : 'hidden'}`}
          >
            <span className="mt-10 text-foreground">Horário de almoço</span>
            <div className="flex items-center justify-center gap-10">
              <Controller
                name="hourLunchStart1"
                control={control}
                render={({ field: { name, onChange, value, disabled } }) => {
                  return (
                    <Select name={name} onValueChange={onChange} value={value} disabled={disabled}>
                      <SelectTrigger className="w-[180px] bg-card text-foreground">
                        <SelectValue placeholder="00:00" />
                      </SelectTrigger>
                      <SelectContent className="w-[180px] bg-card text-foreground">
                        {dayHours.map((hourStart) => (
                          <SelectItem key={hourStart} value={hourStart}>
                            {hourStart}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  );
                }}
                rules={{ required: 'Campo obrigatório' }}
              ></Controller>
              <p className="text-foreground">até</p>
              <Controller
                name="hourLunchEnd1"
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
          </div>
        </div>
        <div className="flex gap-x-12">
          {errors.hourEnd1 && <p className="text-red-600">{errors.hourEnd1.message}</p>}
        </div>
      </div>
      <div className="flex flex-col gap-y-8">
        <span className="items-center justify-center text-center text-foreground">
          Dias disponiveis
        </span>
        <div className="flex flex-wrap justify-center gap-2 ">
          {Object.entries(dayNames).map(([key, value]) => (
            <div
              key={key}
              className="flex w-1/6 flex-col items-center justify-center gap-2 border-2 bg-card p-2"
            >
              <input
                className="h-5 w-5 appearance-none rounded-md border-2 border-indigo-800 checked:border-indigo-800 checked:bg-indigo-600"
                type="checkbox"
                {...register(`days1.${key}` as any)}
              />
              <label className="block text-foreground">{value}</label>
            </div>
          ))}
        </div>
        {errors.days1 && <p className="text-red-600">{errors.days1.message}</p>}
      </div>
      <div className="flex w-full justify-center gap-y-8">
        <Button className="text-white" type="submit">
          Continuar
          <MoveRight className="ml-3" />
        </Button>
      </div>
    </form>
  );
};

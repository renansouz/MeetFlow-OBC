import { zodResolver } from '@hookform/resolvers/zod';
import { AxiosError } from 'axios';
import { MoveLeft } from 'lucide-react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { z } from 'zod';

import { updateProfile } from '@/api/user';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Ocuppations } from '@/utils/Occupation';

type stepProps = {
  currentStepState: number;
  setCurrentStepState: (int: number) => void;
};

const UpdateUserSchema = z.object({
  headLine: z.string({ required_error: 'Campo obrigatório' }),
  occupationArea: z.string({ required_error: 'Campo obrigatório' }),
});

export type updateUserFormData = z.infer<typeof UpdateUserSchema>;

export const Step3 = ({ setCurrentStepState, currentStepState }: stepProps) => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<updateUserFormData>({ resolver: zodResolver(UpdateUserSchema) });

  const updateUser = async (updateData: updateUserFormData) => {
    try {
      const res = await updateProfile(updateData);
      console.log(res);
      navigate('/login');
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message, {
          className: 'w-full text-xl h-20 flex items-center justify-center gap-x-2 ',
          position: 'top-right',
        });
      }
    } finally {
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit(updateUser)}>
      <div className="flex flex-col items-center gap-5">
        <label htmlFor="" className="text-2xl text-foreground">
          Selecione sua área de atuação
        </label>
        <Controller
          name="occupationArea"
          control={control}
          render={({ field: { name, onChange, value, disabled } }) => {
            return (
              <Select name={name} onValueChange={onChange} value={value} disabled={disabled}>
                <SelectTrigger className="h-14 w-[90%] rounded-lg bg-card text-xl hover:border-indigo-400">
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent className="rounded-lg bg-card  text-xl">
                  {Ocuppations.map((ocupattion) => {
                    return (
                      <SelectItem value={ocupattion} {...register('occupationArea')}>
                        {ocupattion}
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
            );
          }}
        ></Controller>
        {errors.occupationArea && <p className="text-red-500">{errors.occupationArea.message}</p>}
        <label htmlFor="" className="text-2xl text-foreground">
          Escreva palavras chaves sobre seu serviço
        </label>
        <Input
          {...register('headLine')}
          className="h-14 w-[90%] rounded-lg bg-card py-2 text-xl focus:border-indigo-400"
          placeholder="Ex: Legislação, Direito"
        />
        {errors.headLine && <p className="text-red-500">{errors.headLine.message}</p>}
      </div>
      <div className="mt-20  flex w-full justify-center gap-40">
        <Button onClick={() => setCurrentStepState(currentStepState - 1)}>
          <MoveLeft className="mr-3" />
          Voltar
        </Button>
        <Button variant={'success'} type="submit">
          Concluir
        </Button>
      </div>
    </form>
  );
};

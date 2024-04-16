import { zodResolver } from '@hookform/resolvers/zod';
import { AxiosError } from 'axios';
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

const UpdateUserSchema = z.object({
  headLine: z.string({ required_error: 'Campo obrigatório' }),
  occupationArea: z.string({ required_error: 'Campo obrigatório' }),
});

export type updateUserFormData = z.infer<typeof UpdateUserSchema>;

type stepProps = {
  currentStepState: number;
  setCurrentStepState: (int: number) => void;
};

export const Step3 = ({}: stepProps) => {
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
    <form
      className="my-5 flex h-full  flex-col items-center justify-center gap-y-8 pt-[15%]"
      onSubmit={handleSubmit(updateUser)}
    >
      <div className="my-24 flex flex-col items-center justify-center">
        <div className="flex w-4/5 flex-col items-center justify-center gap-y-8">
          <label htmlFor="" className="text-xl text-foreground">
            Selecione sua área de atuação
          </label>
          <Controller
            name="occupationArea"
            control={control}
            render={({ field: { name, onChange, value, disabled } }) => {
              return (
                <Select name={name} onValueChange={onChange} value={value} disabled={disabled}>
                  <SelectTrigger className="h-10 w-[90%] rounded-lg bg-card text-sm hover:border-indigo-400">
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent className="rounded-lg bg-card">
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
          {!errors.occupationArea && <p className="text-sm text-card">.</p>}
          {errors.occupationArea && (
            <p className="text-sm text-red-500">{errors.occupationArea.message}</p>
          )}
        </div>
        <div className="flex w-4/5 flex-col items-center justify-center gap-y-8">
          <label htmlFor="" className="text-center text-xl text-foreground">
            Escreva palavras chaves sobre seu serviço
          </label>
          <Input
            {...register('headLine')}
            className="h-10 w-[90%] rounded-lg bg-card py-2 focus:border-indigo-400"
            placeholder="Ex: Legislação, Direito"
          />
          {errors.headLine && <p className="text-red-500">{errors.headLine.message}</p>}
        </div>
      </div>
      <div className="flex w-full justify-center gap-y-8">
        <Button className="h-12 w-40" variant={'success'} type="submit">
          Concluir
        </Button>
      </div>
    </form>
  );
};

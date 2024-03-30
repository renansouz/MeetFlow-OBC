import { MoveLeft, MoveRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { z } from 'zod';
import { professionalAPI } from '@/api/professionalAPI';
import { zodResolver } from '@hookform/resolvers/zod';
import { AxiosError } from 'axios';
import { Controller, useForm } from 'react-hook-form';
import { Ocuppations } from '@/utils/Occupation';
import { useAuth } from '@/context/auth-provider';
import { toast, ToastContainer } from 'react-toastify';

type stepProps = {
    currentStepState: number;
    setCurrentStepState: (int: number) => void;
};

const UpdateUserSchema = z.object({
    description: z.string({ required_error: 'Campo obrigatório' }),
    occupation: z.string({ required_error: 'Campo obrigatório' }),
});

export type updateUserFormData = z.infer<typeof UpdateUserSchema>;

export const Step3 = ({ setCurrentStepState, currentStepState }: stepProps) => {

    const {user} = useAuth();

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<updateUserFormData>({ resolver: zodResolver(UpdateUserSchema) });

    const updataUser = async (updateData:updateUserFormData) => {
        try {
            const res = await professionalAPI.updateUser(updateData, user?._id );
        } catch (error) {
            if(error instanceof AxiosError){
                toast.error(error.message)
            }
        }
    };

    return (
        <form onSubmit={handleSubmit(updataUser)}>
            <ToastContainer position='bottom-right' />
            <div className="flex flex-col items-center gap-5">
                <label htmlFor="" className="text-2xl text-foreground">
                    Escreva uma breve descrição do seu serviço
                </label>
                <Textarea
                    {...register('description')}
                    className="row-span-35 h-32 w-[90%] resize-none  rounded-lg bg-card px-8 py-2 text-xl focus:border-indigo-400"
                    placeholder="Digite aqui..."
                />
                {errors.description && <p className="text-red-500">{errors.description.message}</p>}
                <label htmlFor="" className="text-2xl text-foreground">
                    Selecione sua área de atuação
                </label>
                <Controller
                    name="occupation"
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
                                            <SelectItem value={ocupattion} {...register('occupation')}>
                                                {ocupattion}
                                            </SelectItem>
                                        );
                                    })}
                                </SelectContent>
                            </Select>
                        );
                    }}
                ></Controller>
                {errors.occupation && <p className="text-red-500">{errors.occupation.message}</p>}
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

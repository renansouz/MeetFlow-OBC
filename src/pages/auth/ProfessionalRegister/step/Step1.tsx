import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { MoveRight } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import { z } from 'zod';

import { signIn } from '@/api';
import { Input } from '@/components/Input';
import { Button } from '@/components/ui/button';

type stepProps = {
    currentStepState: number;
    setCurrentStepState: (int: number) => void;
};

export const Step1 = ({ setCurrentStepState }: stepProps) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const createUserSchema = z
        .object({
            name: z.string(),
            email: z.string().email({ message: 'Digite um e-mail válido' }),
            password: z.string().min(5, { message: 'A senha deve possuir no mínimo 5 caracteres' }),
            passwordConfirmation: z
                .string()
                .min(5, { message: 'A senha deve possuir no mínimo 5 caracteres' }),
        })
        .refine((data) => data.password === data.passwordConfirmation, {
            message: 'As senhas não coincidem',
            path: ['passwordConfirmation'],
        });

    type RegisterFormData = z.infer<typeof createUserSchema>;

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<RegisterFormData>({ resolver: zodResolver(createUserSchema) });

    const { mutateAsync: authenticate } = useMutation({
        mutationFn: signIn,
    });

    async function handleSignUp(userData: RegisterFormData) {
        try {
            await authenticate({
                email: userData.email,
                password: userData.password,
                passwordConfirmation: userData.passwordConfirmation,
                name: userData.name,
                role: 'professional',
            });
            setCurrentStepState(2);
        } catch (error) {
            if (error instanceof AxiosError) {
                toast.error(error.response?.data.message, {
                    className: 'w-full h-20 flex items-center justify-center gap-x-2 ',
                    position: 'top-right',
                });
            }
        } finally {
            reset();
        }
    }

    return (
        <div className="flex p-5">
            <form
                className="flex h-full flex-col items-center justify-center gap-5 px-10"
                onSubmit={handleSubmit(handleSignUp)}
            >
                <section className="w-ful">
                    <label htmlFor="name" className="block py-1 font-bold text-foreground">
                        Nome
                    </label>
                    <Input
                        className="w-[20rem] rounded-xl border-2 border-slate-700 bg-card py-4 pl-4 text-foreground focus:border-indigo-300"
                        placeholder="Digite seu nome"
                        id="name"
                        {...register('name')}
                    />
                </section>

                <section>
                    <label htmlFor="email" className="block py-1 font-bold text-foreground">
                        Endereço de e-mail
                    </label>

                    <Input
                        className="w-[20rem] rounded-xl border-2 border-slate-700 bg-card py-4 pl-4 text-foreground focus:border-indigo-300"
                        placeholder="Digite seu e-mail"
                        id="email"
                        {...register('email')}
                    />
                    {errors.email && (
                        <p className="py-0.5 text-sm text-red-500">{errors.email.message}</p>
                    )}
                </section>

                <section>
                    <label htmlFor="password" className="block py-1 font-bold text-foreground">
                        Senha
                    </label>
                    <Input
                        className="w-[20rem] rounded-xl border-2 border-slate-700 bg-card py-4 pl-4 text-foreground focus:border-indigo-300"
                        id="password"
                        placeholder="Digite sua senha"
                        type={showPassword ? 'text' : 'password'}
                        {...register('password', { required: true })}
                    />
                    {errors.password && (
                        <p className="py-0.5 text-sm text-red-500">{errors.password.message}</p>
                    )}
                </section>
                <section>
                    <label
                        htmlFor="passwordConfirmation"
                        className="block py-1 font-bold text-foreground"
                    >
                        Confirme sua senha
                    </label>
                    <Input
                        className="w-[20rem] rounded-xl border-2 border-slate-700 bg-card py-4 pl-4 text-foreground focus:border-indigo-300"
                        id="passwordConfirmation"
                        placeholder="Digite sua senha novamente"
                        type={showPassword ? 'text' : 'password'}
                        {...register('passwordConfirmation')}
                    />
                    {errors.passwordConfirmation && (
                        <p className="py-0.5 text-sm text-red-500">
                            {errors.passwordConfirmation.message}
                        </p>
                    )}
                </section>
                <section className="flex items-center justify-center gap-3 ">
                    <input
                        className="h-6 w-6 appearance-none rounded-md border-2 border-indigo-800 checked:border-indigo-800 checked:bg-indigo-600"
                        type="checkbox"
                        id="checkbox"
                        onClick={togglePasswordVisibility}
                    />
                    <label htmlFor="checkbox">Mostrar senha</label>
                </section>
                <div className="flex w-full justify-center">
                    <p className="text-foreground">
                        Já possui uma conta?{' '}
                        <Link to={'/login'} className="text-blue-700 hover:underline">
                            Entrar
                        </Link>
                    </p>
                </div>
                <div className="mt-5  flex justify-center gap-40">
                    <Button type="submit">
                        Continuar
                        <MoveRight className="ml-3" />
                    </Button>
                </div>
            </form>
        </div>
    );
};

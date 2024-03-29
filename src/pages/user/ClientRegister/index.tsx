import { zodResolver } from '@hookform/resolvers/zod';
import axios, { AxiosError } from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { z } from 'zod';

import { userAPI } from '@/api/userAPI';
import { Input } from '@/components/Input';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/context/theme-provider';
import DarkLogo from '@/public/img/only-logo-black.svg';
import LightLogo from '@/public/img/only-logo-white.svg';

import { BackGroundDiv, FormDiv } from './styles';

type passwordAppearenceType = 'text' | 'password';

const createUserSchema = z
    .object({
        name: z.string(),
        email: z.string().email({ message: 'Digite um e-mail válido' }),
        password: z.string().min(5, { message: 'A senha deve possuir no mínimo 5 caracteres' }),
        passwordConfirmation: z.string().min(5, { message: 'A senha deve possuir no mínimo 5 caracteres' }),
    })
    .refine((data) => data.password === data.passwordConfirmation, {
        message: 'As senhas não conhecidem',
        path: ['passwordConfirmation'],
    });

export type RegisterFormData = z.infer<typeof createUserSchema>;

export const ClientRegister = () => {
    const navigate = useNavigate();
    const { theme } = useTheme();

    async function handleSignUp(userData: RegisterFormData) {
        try {
            await userAPI.createUser(userData, 'client');
            toast.success('Conta criada com sucesso');
            setTimeout(() => {
                navigate('/dashboard/services');
            }, 1500);
        } catch (error) {
            if (error instanceof AxiosError) {
                toast.error(error.response?.data.message);
            }
        } finally {
            reset();
        }
    }
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<RegisterFormData>({ resolver: zodResolver(createUserSchema) });

    const [passswordAppearenceState, setpasswordAppearenceState] = useState<passwordAppearenceType>('password');
    const handlePasswordAppearence = () => (passswordAppearenceState === 'password' ? setpasswordAppearenceState('text') : setpasswordAppearenceState('password'));

    return (
        <div className="flex justify-center h-full items-center bg-card">
            <ToastContainer position="bottom-right" theme={theme} />
            <div className=" w-1/2 max-h-screen">
                <FormDiv className="h-full " onSubmit={handleSubmit(handleSignUp)}>
                    <div className="flex flex-col items-center justify-center gap-4 h-full">
                        <Link to={'/'}>
                            <img src={theme === 'dark' ? LightLogo : DarkLogo} alt="" className="w-24 max-sm:w-20" />
                        </Link>
                        <h1 className="max-sm:text-xl text-3xl font-bold">Criar uma conta!</h1>

                        <div className="flex flex-col items-center justify-center gap-3">
                            <section>
                                <label htmlFor="" className="block py-2  font-semibold" id="name">
                                    Nome
                                </label>
                                <Input
                                    className="focus:border-indigo-200 w-[21rem] max-md:w-[18rem] bg-background p-3 border rounded-lg"
                                    placeholder="Digite seu nome"
                                    id="name"
                                    {...register('name')}
                                />
                            </section>
                            <section>
                                <label htmlFor="" className="block py-2  font-semibold" id="email">
                                    Endereço de e-mail
                                </label>
                                <Input
                                    className="focus:border-indigo-200 w-[21rem] max-md:w-[18rem] bg-background p-3 border rounded-lg"
                                    placeholder="Digite seu email"
                                    id="email"
                                    {...register('email')}
                                />
                                {errors.email && <p className="text-red-500 py-0.5 text-sm">{errors.email.message}</p>}
                            </section>
                            <section>
                                <label htmlFor="" className="block py-2  font-semibold" id="password">
                                    Senha
                                </label>
                                <Input
                                    className="focus:border-indigo-200 w-[21rem] max-md:w-[18rem] bg-background p-3 border rounded-lg"
                                    placeholder="Digite sua senha"
                                    id="password"
                                    {...register('password')}
                                />
                                {errors.password && <p className="text-red-500 py-0.5 text-sm">{errors.password.message}</p>}
                            </section>
                            <section>
                                <label htmlFor="" className="block py-2  font-semibold" id="confirmPassword">
                                    Confirme sua senha
                                </label>
                                <Input
                                    className="focus:border-indigo-200 w-[21rem] max-md:w-[18rem] bg-background p-3 border rounded-lg"
                                    placeholder="Digite sua senha novamente"
                                    id="passwordConfirmation"
                                    {...register('passwordConfirmation')}
                                />
                                {errors.passwordConfirmation && <p className="text-red-500 py-0.5 text-sm">{errors.passwordConfirmation.message}</p>}
                            </section>
                            <section className="flex justify-center items-center gap-3 ">
                                <input
                                    className="appearance-none h-6 w-6 border-2 border-indigo-800 checked:bg-indigo-600 checked:border-indigo-800 rounded-md"
                                    type="checkbox"
                                    name=""
                                    id=""
                                    onClick={() => {
                                        toast.success('sucess');
                                    }}
                                />
                                <label htmlFor="">Mostrar senha</label>
                            </section>
                            <Button className="mt-[10%] w-full" type="submit" disabled={isSubmitting}>
                                Cadastrar
                            </Button>
                            <div className="flex gap-2">
                                <p className="max-sm:text-sm">Já possui uma conta? </p>
                                <Link to={'/login'} className="text-blue-700 hover:underline">
                                    Entrar
                                </Link>
                            </div>
                        </div>
                    </div>
                </FormDiv>
            </div>
            <div className="flex h-full w-1/2 items-center justify-center max-lg:hidden">
                <BackGroundDiv>
                    <h1 className="p-4 text-center font-poppins-start text-7xl font-semibold text-white max-xl:text-5xl max-sm:text-4xl">Facilite sua agenda com o MeetFlow</h1>

                    <p className="w-2/3 text-center text-white">
                        Encontre serviços, agende compromissos e simplifique sua vida com o MeetFlow. A maneira mais fácil de conectar-se com profissionais e organizarsua agenda. Experimente
                        agora!
                    </p>
                </BackGroundDiv>
            </div>
        </div>
    );
};

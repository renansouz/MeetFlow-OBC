import { zodResolver } from '@hookform/resolvers/zod';
import { AxiosError } from 'axios';
import { Lock, User } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { z } from 'zod';
import { Input } from '@/components/Input';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/auth-provider';
import { useTheme } from '@/context/theme-provider';
import DarkLogo from '@/public/img/Logo.svg';
import LightLogo from '@/public/img/Logo-light.svg';

import { BackGroundDiv } from './styles';

type passwordAppearenceType = 'text' | 'password';

const createUserSchema = z.object({
    email: z.string().email({ message: 'Digite um e-mail válido' }),
    password: z.string().min(5, { message: 'A senha deve possuir no mínimo 5 caracteres' }),
});

type LoginFormData = z.infer<typeof createUserSchema>;

export const ClientLogin = () => {
    const { login } = useAuth();
    const { theme } = useTheme();
    const navigate = useNavigate();

    const [passswordAppearenceState, setpasswordAppearenceState] = useState<passwordAppearenceType>('password');
    const handlePasswordAppearence = () => (passswordAppearenceState === 'password' ? setpasswordAppearenceState('text') : setpasswordAppearenceState('password'));

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<LoginFormData>({ resolver: zodResolver(createUserSchema) });

    const handleLogin = async (userData: LoginFormData) => {
        try {
            await login(userData.email, userData.password);
            navigate('/dashboard/services');
        } catch (error) {
            if (error instanceof AxiosError) {
                toast.error(error.response?.data.message);
            }
        } finally {
            reset();
        }
    };

    return (
        <div className="flex h-screen bg-card max-xl:items-center max-xl:justify-center">
            <div className="m-10 mt-[6%] w-2/6 px-10 max-xl:m-0 max-xl:flex max-xl:min-w-[30rem] max-xl:flex-col max-xl:items-center max-xl:justify-center max-xl:rounded-xl max-xl:border-2 max-xl:p-0 max-sm:h-full max-sm:w-full  max-sm:border-0">
                <ToastContainer position="bottom-right" theme={theme} />
                <div className=" flex flex-col items-center justify-center max-sm:mr-5">
                    <Link to={'/'}>
                        <img src={theme === 'dark' ? DarkLogo : LightLogo} alt="" className="w-96" />
                    </Link>
                    <h1 className="items-center justify-center text-center font-bold">Entrar na sua conta!</h1>
                </div>
                <form action="" onSubmit={handleSubmit(handleLogin)} className="flex flex-col items-center justify-center gap-8 px-10 py-10 max-sm:w-[90%]">
                    <section>
                        <label htmlFor="" className="block py-2 font-bold ">
                            Endereço de e-mail
                        </label>
                        <div
                            tabIndex={0}
                            className="group flex w-[20rem] items-center justify-between gap-2 rounded-lg border border-foreground px-3 py-2 shadow-sm focus-within:border-primary focus:border-primary max-sm:w-[20rem]"
                        >
                            <User className="text-foreground/90" />
                            <Input
                                className="w-[16rem] flex-1 border-0 bg-transparent p-0 text-foreground placeholder-zinc-600 focus:border-primary"
                                placeholder="Digite seu email"
                                id="email"
                                {...register('email')}
                            />
                        </div>
                        {errors.email && <p className="py-2 text-red-500">{errors.email.message}</p>}
                    </section>
                    <section>
                        <label htmlFor="" className="block py-2 font-bold ">
                            Senha
                        </label>
                        <div className="group flex w-[20rem] items-center justify-between gap-2 rounded-lg border border-foreground px-3 py-2 shadow-sm focus-within:border-primary focus:border-primary max-sm:w-[20rem]">
                            <Lock className="w-[16rem] text-foreground/90" />
                            <Input
                                type={passswordAppearenceState}
                                className="w-[16rem] flex-1 border-0 bg-transparent p-0 text-foreground placeholder-zinc-600 focus:border-primary"
                                placeholder="Digite sua senha"
                                id="password"
                                {...register('password')}
                            />
                        </div>
                        {errors.password && <p className="py-2 text-red-500">{errors.password.message}</p>}
                    </section>
                    <section className="flex items-center justify-center gap-2">
                        <input
                            className="h-6 w-6 appearance-none rounded-md border-2 border-indigo-800 checked:border-indigo-800 checked:bg-indigo-600"
                            type="checkbox"
                            name=""
                            id=""
                            onClick={handlePasswordAppearence}
                        />
                        <label htmlFor="">Mostrar senha</label>
                    </section>
                    <Button className="max-sm:96 mt-0 w-64" type="submit">
                        Entrar
                    </Button>
                    <p className="">
                        Não possui uma conta?{' '}
                        <Link to={'/register'} className="text-blue-700 hover:underline">
                            Cadastre-se
                        </Link>
                    </p>
                </form>
            </div>
            <div className="flex h-full w-4/6 items-center justify-center max-xl:hidden">
                <BackGroundDiv></BackGroundDiv>
            </div>
        </div>
    );
};

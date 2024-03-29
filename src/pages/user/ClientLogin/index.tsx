import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { AxiosError } from 'axios';
import { Lock, User } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { z } from 'zod';
import 'react-toastify/dist/ReactToastify.css';
import { Input } from '@/components/Input';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
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
    const { setAuth } = useAuth();

    const { theme } = useTheme();
    const navigate = useNavigate();

    const [passswordAppearenceState, setpasswordAppearenceState] = useState<passwordAppearenceType>('password');
    const handlePasswordAppearence = () => (passswordAppearenceState === 'password' ? setpasswordAppearenceState('text') : setpasswordAppearenceState('password'));

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<LoginFormData>({ resolver: zodResolver(createUserSchema) });

    const handleLogin = async (userData: LoginFormData) => {
        try {
            const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/auth/login`, userData);
            const { refreshToken } = res.data;
            sessionStorage.setItem('refreshToken', refreshToken);
            setAuth(true);
            navigate('/dashboard/services');
        } catch (error) {
            if (error instanceof AxiosError) {
                toast.error(error.response?.data.message);
            }
        }finally{
            reset();
        }
    };

    return (
        <div className="flex bg-card h-screen max-xl:justify-center max-xl:items-center">
            <div className="px-10 w-2/6 m-10 mt-[6%] max-sm:w-full max-sm:h-full max-sm:border-0 max-xl:min-w-[30rem] max-xl:flex max-xl:flex-col max-xl:justify-center max-xl:items-center max-xl:border-2 max-xl:rounded-xl max-xl:p-0  max-xl:m-0">
                <ToastContainer position="bottom-right" theme={theme} />
                <div className=" flex flex-col items-center justify-center max-sm:mr-5">
                    <Link to={'/'}>
                        <img src={theme === 'dark' ? DarkLogo : LightLogo} alt="" className="w-96" />
                    </Link>
                    <h1 className="max-sm:text-xl text-center justify-center items-center text-3xl font-bold">Entrar na sua conta!</h1>
                </div>
                <form action="" onSubmit={handleSubmit(handleLogin)} className="max-sm:w-[90%] flex flex-col items-center justify-center gap-8 py-10 px-10">
                    <section>
                        <label htmlFor="" className="block py-2 font-bold ">
                            Endereço de e-mail
                        </label>
                        <div className="max-sm:w-[20rem] flex mx-1 w-80 items-center gap-2 rounded-lg border border-foreground px-3 py-2 shadow-sm">
                            <User className="text-foreground/90" />
                            <Input className="flex-1 border-0 bg-transparent p-0 text-foreground placeholder-zinc-600" placeholder="Digite seu email" id="email" {...register('email')} />
                        </div>
                        {errors.email && <p className="text-red-500 py-2">{errors.email.message}</p>}
                    </section>
                    <section>
                        <label htmlFor="" className="block py-2 font-bold ">
                            Senha
                        </label>
                        <div className="max-sm:w-[20rem] flex mx-1 w-80 items-center gap-2 rounded-lg border border-foreground px-3 py-2 shadow-sm">
                            <Lock className="text-foreground/90" />
                            <Input
                                className="flex-1 border-0 bg-transparent p-0 text-foreground placeholder-zinc-600"
                                placeholder="Digite sua senha"
                                id="password"
                                {...register('password')}
                            />
                        </div>
                        {errors.password && <p className="text-red-500 py-2">{errors.password.message}</p>}
                    </section>
                    <section className="flex gap-2 justify-center items-center">
                        <input
                            className="appearance-none h-6 w-6 border-2 border-indigo-800 checked:bg-indigo-600 checked:border-indigo-800 rounded-md"
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

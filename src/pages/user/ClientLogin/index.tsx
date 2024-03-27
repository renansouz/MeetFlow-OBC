import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input } from '@/components/Input';
import { InputPassword } from '@/components/Input/InputPassword';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/context/theme-provider';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/auth-provider';
import DarkLogo from '@/public/img/Logo.svg';
import LightLogo from '@/public/img/Logo-light.svg';
import { BackGroundDiv, FormDiv } from './styles';


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
        formState: { errors, isSubmitting },
    } = useForm<LoginFormData>({ resolver: zodResolver(createUserSchema) });

    const handleLogin = async (userData: LoginFormData) => {
        try {
            let res = await axios.post(`${import.meta.env.VITE_BASE_URL}/auth/login`, userData);
            const { refreshToken } = res.data;
            sessionStorage.setItem('refreshToken', refreshToken);
            setAuth(true);
            navigate('/dashboard/services');
        } catch (error) {
            if (error instanceof AxiosError) {
                toast.error(error.response?.data.message);
            }
        }
    };

    return (
        <div className="h-screen ">
            <BackGroundDiv>
                <ToastContainer position="bottom-right" theme={theme} />
                <div className="bg-background px-10 py-10 rounded-2xl">
                    <div className=" flex flex-col items-center justify-center ">
                        <Link to={'/'}>
                            <img src={theme === 'dark' ? DarkLogo : LightLogo} alt="" className="w-96" />
                        </Link>
                        <h2 className=" text-2xl">Entrar na sua conta!</h2>
                    </div>
                    <form action="" onSubmit={handleSubmit(handleLogin)} className="flex flex-col items-center justify-center gap-8 py-10 px-10">
                        <section>
                            <label htmlFor="" className="block py-2 font-bold ">
                                Endereço de e-mail
                            </label>
                            <Input placeholder="Digite seu email" id="email" {...register('email')} />
                            {errors.email && <p className="text-red-500 py-2">{errors.email.message}</p>}
                        </section>
                        <section>
                            <label htmlFor="" className="block py-2 font-bold ">
                                Senha
                            </label>
                            <Input placeholder="Digite sua senha" id="password" {...register('password')} />
                            {errors.password && <p className="text-red-500 py-2">{errors.password.message}</p>}
                        </section>
                        <section className="flex gap-2 ">
                            <input type="checkbox" name="" id="" onClick={handlePasswordAppearence} />
                            <label htmlFor="">Mostrar senha</label>
                        </section>
                        <Button className="max-sm:96 mt-0 w-64 sm:w-96" type="submit">
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
            </BackGroundDiv>
        </div>
    );
};

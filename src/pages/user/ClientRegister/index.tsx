import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { z } from 'zod';
import { Input } from '@/components/Input';
import { ThemeToggle } from '@/components/theme/theme-toggle';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/context/theme-provider';
import DarkLogo from '@/public/img/only-logo-black.svg';
import LightLogo from '@/public/img/only-logo-white.svg';
import { BackGroundDiv, FormDiv } from './styles';
import axios, { AxiosError } from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type passwordAppearenceType = 'text' | 'password';

const createUserSchema = z.object({
    name: z.string(),
    email: z.string().email({ message: 'Digite um e-mail válido' }),
    password: z.string().min(5, { message: 'A senha deve possuir no mínimo 5 caracteres' }),
    passwordConfirmation: z.string().min(5, { message: 'A senha deve possuir no mínimo 5 caracteres' }),
});

type RegisterFormData = z.infer<typeof createUserSchema>;

export const ClientRegister = () => {
    const { theme } = useTheme();

    async function handleSignUp(userData: RegisterFormData) {
        const data = { ...userData, role: 'client' };
        try {
            await axios.post(`${import.meta.env.VITE_BASE_URL}/auth/signup`, data);
        } catch (error) {
            if (error instanceof AxiosError) {
                toast.error(error.response?.data.message);
            }
        }
    }

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<RegisterFormData>({ resolver: zodResolver(createUserSchema) });

    const [passswordAppearenceState, setpasswordAppearenceState] = useState<passwordAppearenceType>('password');
    const handlePasswordAppearence = () => (passswordAppearenceState === 'password' ? setpasswordAppearenceState('text') : setpasswordAppearenceState('password'));

    return (
        <div className="flex items-center justify-center">
            <div className="h-screen w-1/2 ">
                <ToastContainer position="bottom-right" theme={theme} />
                <FormDiv onSubmit={handleSubmit(handleSignUp)}>
                    <div className="flex flex-col items-center justify-center gap-3">
                        <div className="flex justify-start w-full">
                            <ThemeToggle />
                        </div>
                        <Link to={'/'}>
                            <img src={theme === 'dark' ? LightLogo : DarkLogo} alt="" className="w-full" />
                        </Link>
                        <h2 className=" text-2xl">Criar uma conta!</h2>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-3 py-10">
                        <section>
                            <label htmlFor="" className="block py-2 font-bold" id="name">
                                Nome
                            </label>
                            <Input placeholder="Digite seu nome" id="name" {...register('name')} />
                            {errors.email && <p className="text-red-500 py-0.5 text-sm">{errors.email.message}</p>}
                        </section>
                        <section>
                            <label htmlFor="" className="block py-2 font-bold" id="email">
                                Endereço de e-mail
                            </label>
                            <Input placeholder="Digite seu email" id="email" {...register('email')} />
                            {errors.email && <p className="text-red-500 py-0.5 text-sm">{errors.email.message}</p>}
                        </section>
                        <section>
                            <label htmlFor="" className="block py-2 font-bold" id="password">
                                Senha
                            </label>
                            <Input placeholder="Digite sua senha" id="password" {...register('password')} />
                            {errors.password && <p className="text-red-500 py-0.5 text-sm">{errors.password.message}</p>}
                        </section>
                        <section>
                            <label htmlFor="" className="block py-2 font-bold" id="confirmPassword">
                                Confirme sua senhna
                            </label>
                            <Input placeholder="Digite sua senha novamente" id="passwordConfirmation" {...register('passwordConfirmation')} />
                            {errors.passwordConfirmation && <p className="text-red-500 py-0.5 text-sm">{errors.passwordConfirmation.message}</p>}
                        </section>
                        <section className="flex gap-2 ">
                            <input
                                type="checkbox"
                                name=""
                                id=""
                                onClick={() => {
                                    toast.success('sucess');
                                }}
                            />
                            <label htmlFor="">Mostrar senha</label>
                        </section>
                        <Button className="mt-5 w-96 max-sm:w-64" type="submit" disabled={isSubmitting}>
                            Cadastrar
                        </Button>
                    </div>
                    <div className="flex gap-2">
                        <p>Já possui uma conta? </p>
                        <Link to={'/login'} className="text-blue-700 hover:underline">
                            Entrar
                        </Link>
                    </div>
                </FormDiv>
            </div>
            <div className="flex h-screen w-1/2 items-center justify-center max-lg:hidden">
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

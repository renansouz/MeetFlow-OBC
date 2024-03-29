import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input } from '@/components/Input';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { userAPI } from '@/api/userAPI';
import { toast, ToastContainer } from 'react-toastify';
import { useTheme } from '@/context/theme-provider';
import { AxiosError } from 'axios';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import {AxiosResponse} from "axios"

type stepProps = {
    currentStepState:number
    setCurrentStepState: (int: number) => void;
};

export const Step1 = ({ setCurrentStepState, currentStepState }: stepProps) => {
    const { theme } = useTheme();
    const navigate = useNavigate();

    type passwordAppearenceType = 'password' | 'text';
    const [passwordAppearence, setPasswordAppearence] = useState<passwordAppearenceType>('password');
    const handlePasswordAppearence = () => (passwordAppearence === 'password' ? setPasswordAppearence('text') : setPasswordAppearence('password'));

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

    type RegisterFormData = z.infer<typeof createUserSchema>;

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<RegisterFormData>({ resolver: zodResolver(createUserSchema) });

    async function handleSignUp(userData: RegisterFormData) {
        try {
            const res: AxiosResponse = await userAPI.createUser(userData, 'client');
            sessionStorage.setItem('currentSignupAcessToken', res.data?.accessToken);
            setCurrentStepState(2)
        } catch (error) {
            if (error instanceof AxiosError) {
                toast.error(error.response?.data.message);
            }
        } finally {
            reset();
        }
    }

    return (
        <div className="">
            <ToastContainer position="bottom-right" theme={theme} />
            <form className="mt-24 flex w-full flex-col items-center justify-center gap-5 px-10" onSubmit={handleSubmit(handleSignUp)}>
                <section className="w-ful">
                    <label htmlFor="" className="block py-1 font-bold text-black">
                        Nome
                    </label>
                    <Input placeholder="Digite seu nome" id="user" {...register('name')} />
                </section>

                <section>
                    <label htmlFor="" className="block py-1 font-bold text-black">
                        Endereço de e-mail
                    </label>

                    <Input placeholder="Digite seu e-mail" id="email" {...register('email')} />
                    {errors.email && <p className="text-red-500 py-0.5 text-sm">{errors.email.message}</p>}
                </section>

                <section>
                    <label htmlFor="" className="block py-1 font-bold text-black">
                        Senha
                    </label>
                    <Input id="password" placeholder="Digite sua senha" {...register('password', { required: true })} />
                    {errors.password && <p className="text-red-500 py-0.5 text-sm">{errors.password.message}</p>}
                </section>
                <section>
                    <label htmlFor="" className="block py-1 font-bold text-black">
                        Confirme sua senha
                    </label>
                    <Input id="passwordConfirmation" placeholder="Digite sua senha novamente" {...register('passwordConfirmation')} />
                    {errors.passwordConfirmation && <p className="text-red-500 py-0.5 text-sm">{errors.passwordConfirmation.message}</p>}
                </section>
                <section className="flex gap-2 text-black">
                    <input type="checkbox" name="" id="" onClick={handlePasswordAppearence} />
                    <label htmlFor="">Mostrar senha</label>
                </section>
                <div className="flex w-full justify-center">
                    <p className="text-black">
                        Já possui uma conta?{' '}
                        <Link to={'/login'} className="text-blue-700 hover:underline">
                            Entrar
                        </Link>
                    </p>
                </div>
                <div className="flex justify-center mt-20  gap-40 absolute bottom-10">
                    <Button variant={'costumize'} onClick={() => navigate("/")}>Voltar</Button>
                    <Button type="submit">Continuar</Button>
                </div>
            </form>
        </div>
    );
};

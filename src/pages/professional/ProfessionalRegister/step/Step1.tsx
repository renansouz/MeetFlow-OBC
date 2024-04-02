import 'react-toastify/dist/ReactToastify.css';
import { zodResolver } from '@hookform/resolvers/zod';
import { AxiosError } from 'axios';
import { AxiosResponse } from 'axios';
import { MoveRight } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { z } from 'zod';
import { signIn } from '@/api/sign-in';
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
        formState: { errors },
    } = useForm<RegisterFormData>({ resolver: zodResolver(createUserSchema) });

    async function handleSignUp(userData: RegisterFormData) {
        const SignInBody = { ...userData, role: 'client' };

        try {
            const res = await signIn(SignInBody);
            sessionStorage.setItem('currentSignupAcessToken', res.accessToken);
            sessionStorage.setItem('userID', res.user._id);
            setCurrentStepState(2);
        } catch (error) {
            if (error instanceof AxiosError) {
                toast.error(error.response?.data.message);
            }
        } finally {
            reset();
        }
    }

    return (
        <div className="flex p-5">
            <form className="flex h-full flex-col items-center justify-center gap-5 px-10" onSubmit={handleSubmit(handleSignUp)}>
                <section className="w-ful">
                    <label htmlFor="" className="block py-1 font-bold text-foreground">
                        Nome
                    </label>
                    <Input
                        className="w-[20rem] rounded-xl border-2 border-slate-700 bg-card py-4 pl-4 text-foreground focus:border-indigo-300"
                        placeholder="Digite seu nome"
                        id="user"
                        {...register('name')}
                    />
                </section>

                <section>
                    <label htmlFor="" className="block py-1 font-bold text-foreground">
                        Endereço de e-mail
                    </label>

                    <Input
                        className="w-[20rem] rounded-xl border-2 border-slate-700 bg-card py-4 pl-4 text-foreground focus:border-indigo-300"
                        placeholder="Digite seu e-mail"
                        id="email"
                        {...register('email')}
                    />
                    {errors.email && <p className="py-0.5 text-sm text-red-500">{errors.email.message}</p>}
                </section>

                <section>
                    <label htmlFor="" className="block py-1 font-bold text-foreground">
                        Senha
                    </label>
                    <Input
                        className="w-[20rem] rounded-xl border-2 border-slate-700 bg-card py-4 pl-4 text-foreground focus:border-indigo-300"
                        id="password"
                        placeholder="Digite sua senha"
                        type={showPassword ? 'text' : 'password'}
                        {...register('password', { required: true })}
                    />
                    {errors.password && <p className="py-0.5 text-sm text-red-500">{errors.password.message}</p>}
                </section>
                <section>
                    <label htmlFor="" className="block py-1 font-bold text-foreground">
                        Confirme sua senha
                    </label>
                    <Input
                        className="w-[20rem] rounded-xl border-2 border-slate-700 bg-card py-4 pl-4 text-foreground focus:border-indigo-300"
                        id="passwordConfirmation"
                        placeholder="Digite sua senha novamente"
                        type={showPassword ? 'text' : 'password'}
                        {...register('passwordConfirmation')}
                    />
                    {errors.passwordConfirmation && <p className="py-0.5 text-sm text-red-500">{errors.passwordConfirmation.message}</p>}
                </section>
                <section className="flex items-center justify-center gap-3 ">
                    <input
                        className="h-6 w-6 appearance-none rounded-md border-2 border-indigo-800 checked:border-indigo-800 checked:bg-indigo-600"
                        type="checkbox"
                        onClick={togglePasswordVisibility} // Chama a função para alternar a visibilidade da senha
                    />
                    <label htmlFor="">Mostrar senha</label>
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

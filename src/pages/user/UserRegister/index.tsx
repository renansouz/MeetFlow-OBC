import { zodResolver } from '@hookform/resolvers/zod';
import { Lock, User } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { z } from 'zod';

import { Input } from '@/components/Input';
import { ThemeToggle } from '@/components/theme/theme-toggle';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/context/theme-provider';
import DarkLogo from '@/public/Logo.png';
import LightLogo from '@/public/Logo-light.png';

import { BackGroundDiv, FormDiv } from './styles';
type passwordAppearenceType = 'text' | 'password';

const createUserSchema = z.object({
    email: z.string().email({ message: 'Digite um e-mail válido' }),
    password: z.string().min(5, { message: 'A senha deve possuir no mínimo 5 caracteres' }),
    confirmPassword: z.string().min(5, { message: 'A senha deve possuir no mínimo 5 caracteres' }),
});

type RegisterFormData = z.infer<typeof createUserSchema>;

export const UserRegister = () => {
    async function handleSignUp(data: RegisterFormData) {
        setTimeout(() => {
            console.log(data);
        }, 2000);
    }

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<RegisterFormData>({ resolver: zodResolver(createUserSchema) });

    const { theme } = useTheme();

    const [passswordAppearenceState, setpasswordAppearenceState] = useState<passwordAppearenceType>('password');
    const handlePasswordAppearence = () => (passswordAppearenceState === 'password' ? setpasswordAppearenceState('text') : setpasswordAppearenceState('password'));

    return (
        <div className="flex items-center justify-center">
            <div className="h-screen w-1/2 ">
                <FormDiv onSubmit={handleSubmit(handleSignUp)}>
                    <ThemeToggle />

                    <div className="flex flex-col items-center justify-center">
                        <Link to={'/'}>
                            <img src={theme === 'dark' ? DarkLogo : LightLogo} alt="" className="w-96" />
                        </Link>
                        <h2 className=" text-2xl">Criar uma conta!</h2>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-8 py-10">
                        <section>
                            <label htmlFor="" className="block py-2 font-bold ">
                                Endereço de e-mail
                            </label>
                            <Input icon={<User />} placeholder="Digite seu email" id="email" {...register('email')} />
                            {errors.email && <p>{errors.email.message}</p>}
                        </section>
                        <section>
                            <label htmlFor="" className="block py-2 font-bold ">
                                Senha
                            </label>
                            <Input icon={<Lock />} placeholder="Digite sua senha" id="password" {...register('password')} />
                            {errors.password && <p>{errors.password.message}</p>}
                        </section>
                        <section>
                            <label htmlFor="" className="block py-2 font-bold ">
                                Confirme sua senhna
                            </label>
                            <Input icon={<Lock />} placeholder="Digite sua senha novamente" id="confirmpPassword" {...register('confirmPassword')} />
                            {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
                        </section>
                        <section className="flex gap-2 ">
                            <input type="checkbox" name="" id="" onClick={handlePasswordAppearence} />
                            <label htmlFor="">Mostrar senha</label>
                        </section>
                        <Button className="mt-5 w-96 max-sm:w-64" type="submit" disabled={isSubmitting}>
                            Entrar
                        </Button>
                    </div>
                    <div>
                        <p>Já possui uma conta? </p>
                        <Link to={'/login'} className="text-blue-700 hover:underline">
                            Entrar
                        </Link>
                    </div>
                </FormDiv>
            </div>
            <div className="flex h-screen w-1/2 items-center justify-center max-lg:hidden">
                <BackGroundDiv>
                    <h1 className="p-4 text-center font-lexend-start text-7xl font-semibold text-white max-xl:text-5xl max-sm:text-4xl">Facilite sua agenda com o MeetFlow</h1>
                    <p className="w-2/3 text-center text-white">
                        Encontre serviços, agende compromissos e simplifique sua vida com o MeetFlow. A maneira mais fácil de conectar-se com profissionais e organizarsua agenda. Experimente
                        agora!
                    </p>
                </BackGroundDiv>
            </div>
        </div>
    );
};

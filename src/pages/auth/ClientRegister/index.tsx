import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { z } from 'zod';

import { signIn } from '@/api';
import { Input } from '@/components/Input';
import { useTheme } from '@/components/theme/theme-provider';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useAuth } from '@/context/auth-provider';
import LightLogo from '@/public/Logo.svg';
import DarkLogo from '@/public/Logo-light.svg';

import { BackGroundDiv } from './styles';

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

export type RegisterFormData = z.infer<typeof createUserSchema>;

export const ClientRegister = () => {
  const { loginGoogle } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const navigate = useNavigate();
  const { theme } = useTheme();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
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
        role: 'client',
      });
      toast.success('Conta criada com sucesso', {
        className: 'w-full text-xl h-20 flex items-center justify-center gap-x-2 ',
        position: 'top-right',
        action: {
          label: 'Ir para login',
          onClick: () => navigate('/login'),
        },
      });
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message, {
          className: 'w-full text-xl h-20 flex items-center justify-center gap-x-2 ',
          position: 'top-right',
        });
      }
    } finally {
      reset();
    }
  }

  return (
    <div className="flex min-h-screen w-full bg-card max-lg:items-center">
      <div className="flex h-full w-1/2 items-center justify-center max-lg:hidden">
        <BackGroundDiv>
          <h1 className="text-center text-5xl font-bold text-white">
            SEJA BEM VINDO AO <br /> MEET FLOW
          </h1>
        </BackGroundDiv>
      </div>
      <div className="min-h-full w-1/2 max-lg:w-full">
        <div className="flex h-full flex-col items-center justify-center border pb-10">
          <form
            className="flex flex-col items-center justify-center"
            onSubmit={handleSubmit(handleSignUp)}
          >
            <div className="flex h-full flex-col items-center justify-center">
              <Link to={'/'}>
                <img src={theme === 'dark' ? LightLogo : DarkLogo} alt="" className="h-28" />
              </Link>
              <div className="flex flex-col items-center justify-center gap-y-4">
                <h1 className="text-xl font-bold">Criar uma conta!</h1>
                <div className="flex flex-col">
                  <section>
                    <label className="block font-semibold" htmlFor="name">
                      Nome
                    </label>
                    <Input
                      className="w-[20rem] rounded-md border border-border bg-card py-3 pl-4 text-sm text-foreground focus:border-indigo-300"
                      placeholder="Digite seu nome"
                      id="name"
                      {...register('name')}
                    />
                    <p className="text-card">.</p>
                  </section>
                  <section>
                    <label className="block font-semibold" htmlFor="email">
                      Endereço de e-mail
                    </label>
                    <Input
                      className="w-[20rem] rounded-md border border-border bg-card py-3 pl-4 text-sm text-foreground focus:border-indigo-300"
                      placeholder="Digite seu email"
                      id="email"
                      {...register('email')}
                    />
                    {!errors.email && <p className="py-0.5 text-sm text-card">.</p>}
                    {errors.email && (
                      <p className="py-0.5 text-sm text-red-500">{errors.email.message}</p>
                    )}
                  </section>
                  <section>
                    <label className="block font-semibold" htmlFor="password">
                      Senha
                    </label>
                    <Input
                      className="w-[20rem] rounded-md border border-border bg-card py-3 pl-4 text-sm text-foreground focus:border-indigo-300"
                      placeholder="Digite sua senha"
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      {...register('password')}
                    />
                    {!errors.password && <p className="py-0.5 text-sm text-card">.</p>}
                    {errors.password && (
                      <p className="py-0.5 text-sm text-red-500">{errors.password.message}</p>
                    )}
                  </section>
                  <section>
                    <label className="block font-semibold" htmlFor="passwordConfirmation">
                      Confirme sua senha
                    </label>
                    <Input
                      className="w-[20rem] rounded-md border border-border bg-card py-3 pl-4 text-sm text-foreground focus:border-indigo-300"
                      placeholder="Digite sua senha novamente"
                      id="passwordConfirmation"
                      type={showPassword ? 'text' : 'password'}
                      {...register('passwordConfirmation')}
                    />
                    {!errors.passwordConfirmation && <p className="py-0.5 text-sm text-card">.</p>}
                    {errors.passwordConfirmation && (
                      <p className="py-0.5 text-sm text-red-500">
                        {errors.passwordConfirmation.message}
                      </p>
                    )}
                  </section>
                  <section className="flex items-center justify-center gap-2">
                    <input
                      className="h-5 w-5 appearance-none rounded-md border-2 border-indigo-800 checked:border-indigo-800 checked:bg-indigo-600"
                      type="checkbox"
                      id="checkbox"
                      onClick={togglePasswordVisibility}
                    />
                    <label htmlFor="checkbox">Mostrar senha</label>
                  </section>
                </div>
                <div className="flex flex-col gap-y-1">
                  <Button className="w-[20rem]" type="submit" disabled={isSubmitting}>
                    Cadastrar
                  </Button>
                  <div className="flex w-[20rem] flex-col items-center justify-center">
                    <div className="my-2 flex items-center justify-center gap-2">
                      <Separator className="w-1/3" />
                      <span className="w-[19rem] text-center text-sm italic">ou se preferir</span>
                      <Separator className="w-1/3" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <Button
            className="mb-5 flex w-[20rem] items-center justify-center gap-2 border bg-card text-foreground hover:bg-primary/10"
            onClick={async () => loginGoogle()}
          >
            <img className="h-5 w-5" src="https://logopng.com.br/logos/google-37.svg" alt="" />
            Entre com Google
          </Button>
          <div className="flex items-center justify-center gap-2">
            <p className="text-base max-sm:text-sm">Já possui uma conta? </p>
            <Link to={'/login'} className="text-blue-700 hover:underline">
              Entrar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

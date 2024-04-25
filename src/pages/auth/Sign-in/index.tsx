import { zodResolver } from '@hookform/resolvers/zod';
import { AxiosError } from 'axios';
import { Lock, User } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { z } from 'zod';

import { Input } from '@/components/Input';
import { useTheme } from '@/components/theme/theme-provider';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useAuth } from '@/context/auth-provider';
import DarkLogo from '@/public/Logo.svg';
import LightLogo from '@/public/Logo-light.svg';

import { BackGroundDiv } from './styles';

type passwordAppearanceType = 'text' | 'password';

const createUserSchema = z.object({
  email: z.string().email({ message: 'Digite um e-mail válido' }),
  password: z.string().min(5, { message: 'A senha deve possuir no mínimo 5 caracteres' }),
});

type LoginFormData = z.infer<typeof createUserSchema>;

export const ClientLogin = () => {
  const { loginGoogle, login, isAuthenticated } = useAuth();
  const { theme } = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard/services');
    }
  }, [isAuthenticated]);

  const [passwordAppearanceState, setPasswordAppearanceState] =
    useState<passwordAppearanceType>('password');
  const handlePasswordAppearance = () =>
    passwordAppearanceState === 'password'
      ? setPasswordAppearanceState('text')
      : setPasswordAppearanceState('password');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginFormData>({ resolver: zodResolver(createUserSchema) });

  const handleLogin = async (userData: LoginFormData) => {
    try {
      const user = await login(userData.email, userData.password);
      if (user?.role === 'professional') {
        navigate('/professional/dashboard');
      } else {
        navigate('/dashboard/services');
      }
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
  };

  return (
    <div className="flex min-h-screen w-full bg-card max-lg:items-center">
      <div className="flex h-full w-1/2 items-center justify-center max-xl:hidden">
        <BackGroundDiv>
          <h1 className="text-center text-5xl font-bold text-white">
            SEJA BEM VINDO AO <br /> MEET FLOW
          </h1>
        </BackGroundDiv>
      </div>
      <div className="my-10 flex min-h-full w-1/2 justify-center max-xl:w-full max-md:my-0">
        <div className="flex w-2/3 flex-col items-center justify-center rounded-xl border bg-card pb-10 max-md:w-full max-md:border-none">
          <Link to={'/'}>
            <img src={theme === 'dark' ? DarkLogo : LightLogo} alt="" className="h-28" />
          </Link>
          <Button
            className="mb-5 flex w-[20rem] items-center justify-center gap-2 border bg-card text-foreground hover:bg-primary/10"
            onClick={async () => loginGoogle('')}
          >
            <img className="h-5 w-5" src="https://logopng.com.br/logos/google-37.svg" alt="" />
            Entre com Google
          </Button>
          <div className="flex items-center justify-center gap-2">
            <Separator className="w-1/3" />
            <span className="w-80 text-center text-sm italic">ou se preferir</span>
            <Separator className="w-1/3" />
          </div>
          <form
            onSubmit={handleSubmit(handleLogin)}
            className="flex w-2/3 flex-col items-center justify-center rounded-xl pb-10 max-md:w-full max-md:border-none"
          >
            <div className="flex w-full flex-col items-center justify-center">
              <h1 className="my-5 text-xl font-bold">Entrar na sua conta!</h1>
              <div className="flex w-full flex-col items-center justify-center gap-y-1">
                <div className="flex flex-col items-center">
                  <div className="flex flex-col gap-y-4 pb-5">
                    <section>
                      <label htmlFor="" className="block pb-2 font-bold ">
                        Endereço de e-mail
                      </label>
                      <div
                        tabIndex={0}
                        className="group flex w-[20rem] gap-2 rounded-md border border-border bg-card py-3 pl-2 text-sm text-foreground focus:border-indigo-300"
                      >
                        <User className="h-5 w-5 text-muted-foreground" />
                        <Input
                          className="w-[16rem] flex-1 border-0 bg-transparent p-0 text-foreground placeholder-zinc-600 focus:border-primary"
                          placeholder="Digite seu email"
                          id="email"
                          {...register('email')}
                        />
                      </div>
                      {!errors.email && <p className="text-sm text-card">.</p>}
                      {errors.email && (
                        <p className="text-sm text-red-500">{errors.email.message}</p>
                      )}
                    </section>
                    <section>
                      <label htmlFor="" className="block pb-2 font-bold ">
                        Senha
                      </label>
                      <div className="group flex w-[20rem] gap-2 rounded-md border border-border bg-card py-3 pl-2 text-sm text-foreground focus:border-indigo-300">
                        <Lock className="h-5 w-5 text-muted-foreground" />
                        <Input
                          type={passwordAppearanceState}
                          className="w-[16rem] flex-1 border-0 bg-transparent p-0 text-foreground placeholder-zinc-600 focus:border-primary"
                          placeholder="Digite sua senha"
                          id="password"
                          {...register('password')}
                        />
                      </div>
                      {!errors.password && <p className="text-sm text-card">.</p>}
                      {errors.password && (
                        <p className="text-sm text-red-500">{errors.password.message}</p>
                      )}
                    </section>
                    <section className="flex items-center justify-center gap-2">
                      <input
                        className="h-6 w-6 appearance-none rounded-md border-2 border-indigo-800 checked:border-indigo-800 checked:bg-indigo-600"
                        type="checkbox"
                        name=""
                        id=""
                        onClick={handlePasswordAppearance}
                      />
                      <label htmlFor="">Mostrar senha</label>
                    </section>
                  </div>
                </div>
                <div className="flex flex-col gap-y-1">
                  <Button className="max-sm:96 w-64w-[20rem] mt-0" type="submit">
                    Entrar
                  </Button>
                  <div className="mt-2 flex items-center justify-center gap-2">
                    <p className="text-base max-sm:text-sm">Não possui uma conta?</p>
                    <Link to={'/client/register'} className="text-blue-700 hover:underline">
                      Cadastre-se
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

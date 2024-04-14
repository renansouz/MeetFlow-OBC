import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import {
  Calendar,
  ChevronDown,
  Home,
  Layers,
  LifeBuoy,
  LogOut,
  Menu,
  PersonStanding,
  Plus,
  Settings,
  User,
  Users,
} from 'lucide-react';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { IMaskInput } from 'react-imask';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import { z } from 'zod';

import { createService } from '@/api';
import { AsideItem } from '@/components/asideItem';
import { useTheme } from '@/components/theme/theme-provider';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Textarea } from '@/components/ui/textarea';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useAuth } from '@/context/auth-provider';
import Logo from '@/public/Logo.svg';
import LightLogo from '@/public/Logo-light.svg';
import LogoMenor from '@/public/only-logo-white.svg';

const createUserSchema = z.object({
  name: z.string(),
  description: z.string().min(5, { message: 'descrição pequena' }),
  duration: z.coerce.number().min(15, { message: 'tempo mínimo 15 minutos' }),
  price: z.string().transform((value) => parseFloat(value.replace('R$ ', '').replace(',', '.'))),
});

type LoginFormData = z.infer<typeof createUserSchema>;

export const ProfessionalAside = () => {
  const { setTheme, theme } = useTheme();
  const { logout } = useAuth();
  const queryClient = useQueryClient();
  const [isCustomDuration, setIsCustomDuration] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    reset,
    setValue,
    formState: { errors },
  } = useForm<LoginFormData>({ resolver: zodResolver(createUserSchema) });

  const { mutateAsync: crateServiceFn } = useMutation({
    mutationFn: createService,
    onSuccess: () => {
      // Forçar a query 'servicesProfile' a ser recarregada
      queryClient.invalidateQueries({ queryKey: ['servicesProfile'] });
    },
  });

  const handleCreateService = async (userData: LoginFormData) => {
    try {
      await crateServiceFn({
        name: userData.name,
        description: userData.description,
        duration: userData.duration,
        price: userData.price,
      });

      toast.success('Serviço criado com sucesso!', {
        className: 'w-full text-xl h-20 flex items-center justify-center gap-x-2 ',
        position: 'top-right',
      });
      // setAuth(true);
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
    <>
      <aside className="bg-slate flex h-screen w-auto flex-col items-center justify-between border-r-2 bg-card py-8 max-lg:px-4 max-lg:py-4 max-sm:border-0 max-sm:px-0 ">
        <div className=" flex flex-col gap-y-10 max-lg:gap-0 max-sm:hidden">
          <div className="flex flex-col gap-y-1">
            <img
              src={theme === 'dark' ? Logo : LightLogo}
              alt=""
              className="mb-0 h-20 max-lg:hidden"
            />
            <img
              src={theme === 'dark' ? LogoMenor : LightLogo}
              alt=""
              className="img mb-10 h-11 items-center lg:hidden"
            />
            <Dialog>
              <DialogTrigger>
                <Button className="mx-2 mb-5 flex w-11/12 items-center justify-center rounded-full bg-indigo-700 px-5 hover:bg-indigo-800 max-lg:px-0">
                  <Plus className="mr-2 text-indigo-100" />
                  <p className="text-lg text-indigo-50 max-lg:hidden">Criar</p>
                </Button>
              </DialogTrigger>
              <DialogContent className="p-6 ">
                <DialogHeader className="gap-3">
                  <DialogTitle>Crie um novo serviço</DialogTitle>
                  <DialogDescription className="mb-10">
                    Preencha todos os campos abaixo para criar um novo serviço. Clique em 'Salvar'
                    quando estiver pronto.
                  </DialogDescription>
                </DialogHeader>
                <form action="" onSubmit={handleSubmit(handleCreateService)} className="">
                  <section className="flex flex-col py-2">
                    <div className="flex justify-between">
                      <label htmlFor="" className="block py-1 font-bold text-black">
                        <span className="text-foreground">Nome:</span>
                      </label>
                      <Input
                        className=" w-[70%]"
                        placeholder="Insira o nome do serviço"
                        id="user"
                        {...register('name')}
                      />
                    </div>
                    <div className="flex items-center justify-center">
                      {errors.name && <p className="py-2 text-red-500">{errors.name.message}</p>}
                    </div>
                  </section>
                  <section className="flex flex-col py-2">
                    <div className="flex justify-between ">
                      <label htmlFor="" className="block py-1 font-bold text-black">
                        <span className="text-foreground">Descrinção:</span>
                      </label>
                      <Textarea
                        className="row-span-30 w-[70%]  resize-none"
                        placeholder="Insira uma descrinção para este serviço"
                        id="user"
                        {...register('description')}
                      />
                    </div>
                    <div className="flex items-center justify-center">
                      {errors.description && (
                        <p className="py-2 text-red-500">{errors.description.message}</p>
                      )}
                    </div>
                  </section>
                  <section className="flex flex-col py-2">
                    <div className="flex flex-wrap justify-between ">
                      <label htmlFor="" className="block py-1 font-bold text-black">
                        <span className="text-foreground">Duração:</span>
                      </label>

                      <Controller
                        name="duration"
                        control={control}
                        render={({ field: { name, onChange, value, disabled } }) => {
                          return (
                            <>
                              <Select
                                name={name}
                                onValueChange={(val) => {
                                  if (val === 'custom') {
                                    setIsCustomDuration(true);
                                  } else {
                                    setIsCustomDuration(false);
                                    onChange(val);
                                  }
                                }}
                                value={isCustomDuration ? 'custom' : value}
                                disabled={disabled}
                              >
                                <SelectTrigger className=" w-[70%] text-muted-foreground" id="user">
                                  <SelectValue placeholder="Duração deste serviço" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="15">15 minutos</SelectItem>
                                  <SelectItem value="30">30 minutos</SelectItem>
                                  <SelectItem value="60">1 hora</SelectItem>
                                  <SelectItem value="120">2 horas</SelectItem>
                                  <SelectItem value="custom">Personalizado</SelectItem>
                                </SelectContent>
                              </Select>
                              {isCustomDuration && (
                                <Input
                                  className="ml-auto mt-3 w-[70%]"
                                  type="number"
                                  min="1"
                                  onChange={(e) => onChange(e.target.value)}
                                  placeholder="Duração em minutos"
                                />
                              )}
                            </>
                          );
                        }}
                      ></Controller>
                    </div>
                    <div className="flex items-center justify-center">
                      {errors.duration && (
                        <p className="py-2 text-red-500">{errors.duration.message}</p>
                      )}
                    </div>
                  </section>
                  <section className="flex flex-col py-2">
                    <div className="flex justify-between ">
                      <label htmlFor="" className="block py-1 font-bold text-black">
                        <span className="text-foreground">Preço:</span>
                      </label>
                      <IMaskInput
                        mask="R$ num"
                        blocks={{
                          num: {
                            mask: Number,
                            scale: 2,
                            thousandsSeparator: '.',
                            padFractionalZeros: true,
                          },
                        }}
                        className="flex h-10 w-[70%] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Adicione um valor para este serviço"
                        id="price"
                        onAccept={(value) => setValue('price', value)} // Atualiza o valor do campo de preço sempre que ele muda
                      />
                    </div>
                    <div className="flex items-center justify-center">
                      {errors.price && <p className="py-2 text-red-500">{errors.price.message}</p>}
                    </div>
                  </section>
                  <div className="mt-5 flex justify-end">
                    <Button
                      type="submit"
                      className=" flex w-32 items-center justify-center bg-indigo-700 text-indigo-50 hover:bg-indigo-800"
                    >
                      Continuar
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <AsideItem link="/professional/profile" title="Perfil" icon={User} />
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p>Perfil</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <AsideItem
                    link="/professional/myschedules"
                    title="Agendamentos"
                    icon={PersonStanding}
                  />
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p>Agendamentos</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <AsideItem
                    link="/professional/disponibilidade"
                    title="Disponibilidade"
                    icon={Calendar}
                  />
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p>disponibilidade</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
        <div className="mt-[10%] flex w-full flex-col gap-y-1 max-lg:gap-0 max-sm:hidden">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <AsideItem link="/register" title="Suporte" icon={LifeBuoy} />
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>Suporte</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <Dialog>
            <DialogTrigger>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant={'ghost'}
                      className="flex h-11 w-full items-center justify-start gap-3 px-10 py-7 max-lg:justify-center max-lg:px-0"
                    >
                      <Settings className="text-primary-foreground" />
                      <p className="text-primary-foreground max-lg:hidden">Configurações</p>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="right">
                    <p>Configurações</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Configurações</DialogTitle>
                <DialogDescription>
                  Personalize a aparência da página de acordo com seu gosto visual. Escolha entre
                  uma variedade de temas cuidadosamente criados para tornar sua experiência de
                  navegação mais agradável e personalizada.
                </DialogDescription>
              </DialogHeader>
              <label htmlFor="theme-select">Escolha o Tema:</label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Tema" />
                </SelectTrigger>
                <SelectContent className="flex flex-col">
                  <Button
                    className="w-full items-start justify-between bg-background p-2 text-lg text-foreground hover:bg-primary"
                    onClick={() => setTheme('light')}
                    value={'light'}
                  >
                    Claro
                    <ChevronDown />
                  </Button>
                  <Button
                    className="w-full items-start justify-between bg-background p-2 text-lg text-foreground hover:bg-primary"
                    onClick={() => setTheme('dark')}
                    value={'dark'}
                  >
                    Escuro
                    <ChevronDown />
                  </Button>
                </SelectContent>
              </Select>
            </DialogContent>
          </Dialog>

          <Button
            asChild
            className="flex h-11 items-center justify-start gap-3 bg-inherit px-10 py-7 hover:bg-inherit max-lg:justify-center max-lg:px-0"
            onClick={() => logout()}
          >
            <Link className="justify-center gap-x-5" to={'/'}>
              <span className="text-lg text-red-500 max-lg:hidden">Sair</span>
              <LogOut className="text-red-500" />
            </Link>
          </Button>
        </div>
      </aside>
      <div className="absolute left-2 top-1 h-10 items-center rounded-md bg-secondary sm:hidden">
        <Sheet>
          <SheetTrigger>
            <Menu className="h-10 w-10" />
          </SheetTrigger>
          <SheetContent side={'left'} className="fixed">
            <div className="flex flex-col justify-between">
              <div className="flex flex-col gap-y-10  ">
                <div className="flex flex-col gap-y-1">
                  <Link to={''}>
                    <img
                      src={theme === 'dark' ? Logo : LightLogo}
                      alt=""
                      className=" mb-14 h-14 max-sm:w-24"
                    />
                  </Link>
                  <AsideItem link="/" title="Serviços" icon={Home} />
                  <AsideItem link="/register" title="Meus Agendamentos" icon={Layers} />
                  <AsideItem link="/error" title="Grupos" icon={Users} />
                </div>
              </div>
              <div className="flex w-full flex-col gap-y-1 max-lg:gap-0">
                <AsideItem link="/" title="fazer uma conta" icon={User} />
                <AsideItem link="/register" title="Suporte" icon={LifeBuoy} />
                <Button
                  variant={'ghost'}
                  className="flex h-11 items-center justify-start gap-3 px-10 py-7"
                >
                  <Settings className="text-violet-700" />
                  <p className="text-violet-700">Configurações</p>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

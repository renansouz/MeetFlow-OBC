import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { ChevronDown, Home, Menu, Plus, Settings, Timer } from 'lucide-react';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { IMaskInput } from 'react-imask';
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

const createUserSchema = z.object({
  name: z.string(),
  description: z.string().min(5, { message: 'descrição pequena' }),
  duration: z.coerce.number().min(15, { message: 'tempo mínimo 15 minutos' }),
  price: z
    .string()
    .transform((value) => parseFloat(value.replace('R$ ', '').replace('.', '').replace(',', '.'))),
});

type LoginFormData = z.infer<typeof createUserSchema>;

export const ProfessionalAside = () => {
  const { setTheme } = useTheme();
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

  const { mutateAsync: createServiceFn } = useMutation({
    mutationFn: createService,
    onSuccess: () => {
      // Forçar a query 'servicesProfile' a ser recarregada
      queryClient.invalidateQueries({ queryKey: ['servicesProfile'] });
    },
  });

  const handleCreateService = async (userData: LoginFormData) => {
    try {
      await createServiceFn({
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
    <div className="fixed h-screen">
      <aside className="flex h-[91.5%] w-[16rem] flex-col items-center justify-between border-r-2 bg-card py-8 max-lg:w-16 max-lg:px-4 max-lg:py-4 max-sm:hidden max-sm:border-0 max-sm:px-0 ">
        <div className=" flex flex-col gap-y-10 max-lg:gap-0 max-sm:hidden">
          <div className="flex flex-col items-center justify-center gap-y-1">
            <Dialog>
              <DialogTrigger className="flex w-full justify-center">
                <Button className="mx-2.5 mb-5 flex w-10/12 items-center justify-center rounded-full bg-primary px-5 hover:bg-primary/90 max-lg:mx-0 max-lg:w-12 max-lg:px-0">
                  <Plus className="mr-2 h-6 w-6 text-indigo-100 max-lg:mr-0" />
                  <p className="text-base text-indigo-50 max-lg:hidden">Criar</p>
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
                      {!errors.name && <p className=" text-sm text-card">.</p>}
                      {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
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
                      {!errors.description && <p className="text-sm text-card">.</p>}
                      {errors.description && (
                        <p className="text-sm text-red-500">{errors.description.message}</p>
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
                                    onChange(Number(val));
                                  }
                                }}
                                value={isCustomDuration ? 'custom' : String(value)} // Converta o valor para string aqui
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
                      {!errors.duration && <p className="text-sm text-card">.</p>}
                      {errors.duration && (
                        <p className="text-sm text-red-500">{errors.duration.message}</p>
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
                        onAccept={(value) => setValue('price', value as any)} // Atualiza o valor do campo de preço sempre que ele muda
                      />
                    </div>
                    <div className="flex items-center justify-center">
                      {!errors.price && <p className="text-sm text-card">.</p>}
                      {errors.price && (
                        <p className="text-sm text-red-500">{errors.price.message}</p>
                      )}
                    </div>
                  </section>
                  <div className="mt-5 flex justify-end">
                    <Button type="submit" className=" flex w-32 items-center justify-center">
                      Continuar
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="flex w-full">
                  <AsideItem link="/professional/services" title="Serviços" icon={Home} />
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p>Serviços</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="flex w-full">
                  <AsideItem link="/professional/myschedules" title="Solicitações" icon={Timer} />
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p>Solicitações</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            {/* <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="flex w-full">
                  <AsideItem
                    link="/professional/disponibilidade"
                    title="Disponibilidade"
                    icon={Calendar}
                  />
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p className="text-sm">disponibilidade</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider> */}
          </div>
        </div>
        <div className="mt-[10%] flex w-full flex-col gap-y-1 max-lg:gap-0 max-sm:hidden">
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
                    <p className="text-sm">Configurações</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Configurações</DialogTitle>
                <DialogDescription>
                  Personalize a aparência da página de acordo com seu gosto visual. Escolha entre um
                  dos nossos temas cuidadosamente criados para tornar sua experiência de navegação
                  mais agradável e personalizada.
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
        </div>
      </aside>
      <div className="absolute -top-16 left-2 h-10  rounded-md bg-secondary sm:hidden">
        <Sheet>
          <SheetTrigger>
            <Menu className="h-10 w-10 bg-card text-foreground" />
          </SheetTrigger>
          <SheetContent side={'left'} className="fixed">
            <div className="flex h-full flex-col justify-between">
              <div className=" mt-20 flex flex-col gap-y-10">
                <div className="flex flex-col items-center justify-center gap-y-1">
                  <Dialog>
                    <DialogTrigger>
                      <Button className="mx-2.5 mb-5 flex w-60 items-center justify-center rounded-full bg-primary px-5 hover:bg-primary/90">
                        <Plus className="mr-2 h-6 w-6 text-indigo-100 " />
                        <p className="text-base text-indigo-50">Criar</p>
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="p-6 ">
                      <DialogHeader className="gap-3">
                        <DialogTitle>Crie um novo serviço</DialogTitle>
                        <DialogDescription className="mb-10">
                          Preencha todos os campos abaixo para criar um novo serviço. Clique em
                          'Salvar' quando estiver pronto.
                        </DialogDescription>
                      </DialogHeader>
                      <form action="" onSubmit={handleSubmit(handleCreateService)} className="">
                        <section className="flex  flex-col py-2">
                          <div className=" flex justify-between">
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
                            {!errors.name && <p className=" text-sm text-card">.</p>}
                            {errors.name && (
                              <p className="text-sm text-red-500">{errors.name.message}</p>
                            )}
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
                            {!errors.description && <p className="text-sm text-card">.</p>}
                            {errors.description && (
                              <p className="text-sm text-red-500">{errors.description.message}</p>
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
                                          onChange(Number(val));
                                        }
                                      }}
                                      value={isCustomDuration ? 'custom' : String(value)} // Converta o valor para string aqui
                                      disabled={disabled}
                                    >
                                      <SelectTrigger
                                        className=" w-[70%] text-muted-foreground"
                                        id="user"
                                      >
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
                            {!errors.duration && <p className="text-sm text-card">.</p>}
                            {errors.duration && (
                              <p className="text-sm text-red-500">{errors.duration.message}</p>
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
                              onAccept={(value) => setValue('price', value as any)} // Atualiza o valor do campo de preço sempre que ele muda
                            />
                          </div>
                          <div className="flex items-center justify-center">
                            {!errors.price && <p className="text-sm text-card">.</p>}
                            {errors.price && (
                              <p className="text-sm text-red-500">{errors.price.message}</p>
                            )}
                          </div>
                        </section>
                        <div className="mt-5 flex justify-end">
                          <Button type="submit" className=" flex w-32 items-center justify-center">
                            Continuar
                          </Button>
                        </div>
                      </form>
                    </DialogContent>
                  </Dialog>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="flex w-10 items-center justify-center gap-2 ">
                        <AsideItem link="/professional/services" title="Serviços" icon={Home} />
                        Serviços
                      </TooltipTrigger>
                      <TooltipContent side="right">
                        <p>Serviços</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="flex w-10 items-center justify-center gap-2">
                        <AsideItem
                          link="/professional/myschedules"
                          title="Solicitações"
                          icon={Timer}
                        />
                        Solicitações
                      </TooltipTrigger>
                      <TooltipContent side="right">
                        <p>Solicitações</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  {/* <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="flex w-10 items-center justify-center gap-2">
                        <AsideItem
                          link="/professional/disponibilidade"
                          title="Disponibilidade"
                          icon={Calendar}
                        />
                        Disponibilidade
                      </TooltipTrigger>
                      <TooltipContent side="right">
                        <p className="text-sm">disponibilidade</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider> */}
                </div>
              </div>
              <Dialog>
                <DialogTrigger>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant={'ghost'}
                          className="flex w-full items-center justify-start gap-1 px-10 py-7"
                        >
                          <Settings className="min-w-8 text-primary-foreground" />
                          <p className="text-primary-foreground">Configurações</p>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent side="right">
                        <p className="text-sm">Configurações</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Configurações</DialogTitle>
                    <DialogDescription>
                      Personalize a aparência da página de acordo com seu gosto visual. Escolha
                      entre um dos nossos temas cuidadosamente criados para tornar sua experiência
                      de navegação mais agradável e personalizada.
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
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

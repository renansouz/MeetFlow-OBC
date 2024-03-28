import { Calendar, Home, Layers, LifeBuoy, LogOut, Menu, Plus, Settings, User, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Textarea } from '@/components/ui/textarea';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useTheme } from '@/context/theme-provider';
import Logo from '@/public/img/Logo.svg';
import LightLogo from '@/public/img/Logo-light.svg';
import LogoMenor from '@/public/img/only-logo-white.svg';

import { AsideItem } from './asideItem';

export const ProfessionalAside = () => {
    const { theme } = useTheme();
    return (
        <>
            <aside className="flex h-screen w-auto flex-col border-r-2 py-8 items-center justify-between max-lg:px-4 max-lg:py-4 bg-slate bg-slate-950 max-sm:border-0 max-sm:px-0 ">
                <div className=" flex flex-col gap-y-10 max-lg:gap-0 max-sm:hidden">
                    <div className="flex flex-col gap-y-1">
                        <Link to={'/'}>
                            <img src={theme === 'dark' ? Logo : LightLogo} alt="" className="max-lg:hidden h-20 mb-0" />
                        </Link>
                        <Link to={'/'}>
                            <img src={theme === 'dark' ? LogoMenor : LightLogo} alt="" className="lg:hidden img h-11 items-center mb-10" />
                        </Link>

                        <Dialog>
                            <DialogTrigger>
                                <Button className="mb-5 max-lg:px-0 bg-indigo-700 mx-2 px-5 hover:bg-indigo-800 flex w-11/12 items-center justify-center rounded-full">
                                    <Plus />
                                    <p className="max-lg:hidden">Create</p>
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="p-6 ">
                                <DialogHeader className="gap-3">
                                    <DialogTitle>Crie um novo serviço</DialogTitle>
                                    <DialogDescription className="mb-10">
                                        Preencha todos os campos abaixo para criar um novo serviço. Clique em 'Salvar' quando estiver pronto.
                                    </DialogDescription>
                                    <div className="flex gap-6 justify-between">
                                        <span>Nome:</span>
                                        <Input className="w-80" placeholder="Insira o nome do serviço" />
                                    </div>
                                    <div className="flex gap-6 justify-between">
                                        <span>Descrinção:</span>
                                        <Textarea className="w-80 resize-none row-span-3" placeholder="Insira uma descrinção para este serviço" />
                                    </div>
                                    <div className="flex gap-6 justify-between">
                                        <span>Duração:</span>
                                        <Input className="w-80" placeholder="Inisra a duração deste serviço" />
                                    </div>
                                    <div className="flex gap-6 justify-between">
                                        <span>Preço:</span>
                                        <Input className="w-80" placeholder="adicione um valor para este serviço" />
                                    </div>
                                    <div className="flex justify-end">
                                        <Button type="submit" className=" w-32 justify-center items-center flex bg-indigo-700 hover:bg-indigo-800">
                                            Salvar
                                        </Button>
                                    </div>
                                </DialogHeader>
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
                                    <AsideItem link="/register" title="Meus Agendamentos" icon={Home} />
                                </TooltipTrigger>
                                <TooltipContent side="right">
                                    <p>Meus Agendamentos</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>

                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <AsideItem link="/error" title="Meus calendário" icon={Calendar} />
                                </TooltipTrigger>
                                <TooltipContent side="right">
                                    <p>Meu calendário</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                </div>
                <div className="mt-[10%] flex flex-col gap-y-1 max-lg:gap-0 w-full max-sm:hidden">
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

                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button variant={'ghost'} className="h-11 flex items-center justify-start gap-3 px-10 py-7 max-lg:px-0 max-lg:justify-center">
                                    <Settings className="text-violet-700" />
                                    <p className="text-violet-700 max-lg:hidden">Configurações</p>
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent side="right">
                                <p>Configurações</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>

                    <Button asChild className="bg-inherit hover:bg-inherit h-11 flex items-center justify-start gap-3 px-10 py-7 max-lg:px-0 max-lg:justify-center ">
                        <Link className="justify-center gap-x-5" to={''}>
                            <span className="max-lg:hidden text-lg text-red-500">Sair</span>
                            <LogOut className="text-red-500" />
                        </Link>
                    </Button>
                </div>
            </aside>
            <div className="items-center top-1 left-2 sm:hidden h-10 absolute bg-secondary rounded-md">
                <Sheet>
                    <SheetTrigger>
                        <Menu className="h-10 w-10" />
                    </SheetTrigger>
                    <SheetContent side={'left'} className="fixed">
                        <div className="flex flex-col justify-between">
                            <div className="flex flex-col gap-y-10  ">
                                <div className="flex flex-col gap-y-1">
                                    <Link to={''}>
                                        <img src={theme === 'dark' ? Logo : LightLogo} alt="" className=" h-14 mb-14 max-sm:w-24" />
                                    </Link>
                                    <AsideItem link="/" title="Serviços" icon={Home} />
                                    <AsideItem link="/register" title="Meus Agendamentos" icon={Layers} />
                                    <AsideItem link="/error" title="Grupos" icon={Users} />
                                </div>
                            </div>
                            <div className="flex flex-col gap-y-1 max-lg:gap-0 w-full">
                                <AsideItem link="/" title="fazer uma conta" icon={User} />
                                <AsideItem link="/register" title="Suporte" icon={LifeBuoy} />
                                <Button variant={'ghost'} className="h-11 flex items-center justify-start gap-3 px-10 py-7">
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

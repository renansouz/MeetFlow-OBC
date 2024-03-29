import { ChevronDown, Home, Layers, LifeBuoy, Menu, Settings, User, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useAuth } from '@/context/auth-provider';
import { useTheme } from '@/context/theme-provider';
import Logo from '@/public/img/logo.svg';
import LightLogo from '@/public/img/logo-light.svg';
import LogoMenor from '@/public/img/only-logo-white.svg';

import { AsideItem } from './AsideItem';
import { ClientMenu } from './ClientMenu';

export const ClientAside = () => {
    const { isAuth } = useAuth();
    const { theme } = useTheme();
    const { setTheme } = useTheme();

    return (
        <>
            <aside className=" bg-slate flex h-screen w-auto flex-col items-center justify-between border-r-2 bg-card py-8 max-lg:px-4 max-lg:py-4 max-sm:border-0 max-sm:px-0 ">
                <div className=" flex flex-col gap-y-10 max-lg:gap-0 max-sm:hidden">
                    <div className="flex flex-col gap-y-1">
                        <Link to={'/'}>
                            <img src={theme === 'dark' ? Logo : LightLogo} alt="" className="mb-0 h-20 max-lg:hidden" />
                        </Link>
                        <Link to={'/'}>
                            <img src={theme === 'dark' ? LogoMenor : LightLogo} alt="" className="img mb-10 h-11 items-center lg:hidden" />
                        </Link>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <AsideItem link="/dashboard/services" title="Serviços" icon={Home} />
                                </TooltipTrigger>
                                <TooltipContent side="right">
                                    <p>Serviços</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>

                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <AsideItem link="/dashboard/myschedules" title="Meus Agendamentos" icon={Layers} />
                                </TooltipTrigger>
                                <TooltipContent side="right">
                                    <p>Meus Agendamentos</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>

                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <AsideItem link="/error" title="Grupos" icon={Users} />
                                </TooltipTrigger>
                                <TooltipContent side="right">
                                    <p>Grupos</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                </div>
                <div className="mt-[10%] flex w-full flex-col gap-y-1 max-lg:gap-0 max-sm:hidden">
                    {!isAuth && (
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <AsideItem link="" title="fazer uma conta" icon={User} />
                                </TooltipTrigger>
                                <TooltipContent side="right">
                                    <p>Fazer uma conta</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    )}

                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <AsideItem link="" title="Suporte" icon={LifeBuoy} />
                            </TooltipTrigger>
                            <TooltipContent side="right">
                                <p>Suporte</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    {isAuth ? (
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <Button variant={'ghost'} className="flex h-11 items-center justify-start gap-3 px-10 py-7 max-lg:justify-center max-lg:px-0" asChild>
                                        <ClientMenu />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent side="right">
                                    <p>Usuário</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    ) : (
                        <Dialog>
                            <DialogTrigger>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Button variant={'ghost'} className="flex h-11 w-full items-center justify-start gap-3 px-10 py-7 max-lg:justify-center max-lg:px-0">
                                                <Settings className="text-violet-700" />
                                                <p className="text-violet-700 max-lg:hidden">Configurações</p>
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
                                        Personalize a aparência da página de acordo com seu gosto visual. Escolha entre uma variedade de temas cuidadosamente criados para tornar sua
                                        experiência de navegação mais agradável e personalizada.
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
                    )}
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
                                    <Link to={'/'}>
                                        <img src={theme === 'dark' ? Logo : LightLogo} alt="" className=" mb-14 h-14" />
                                    </Link>
                                    <AsideItem link="/" title="Serviços" icon={Home} />
                                    <AsideItem link="/register" title="Meus Agendamentos" icon={Layers} />
                                    <AsideItem link="/error" title="Grupos" icon={Users} />
                                </div>
                            </div>
                            <div className="flex w-full flex-col gap-y-1 max-lg:gap-0">
                                <AsideItem link="/" title="fazer uma conta" icon={User} />
                                <AsideItem link="/register" title="Suporte" icon={LifeBuoy} />
                                <Button variant={'ghost'} className="flex h-11 items-center justify-start gap-3 px-10 py-7">
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

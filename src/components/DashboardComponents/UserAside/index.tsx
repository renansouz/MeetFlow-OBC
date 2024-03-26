import { Home, Layers, LifeBuoy, Menu, Settings, User, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useTheme } from '@/context/theme-provider';
import Logo from '@/public/img/Logo.svg';
import LightLogo from '@/public/img/Logo-light.svg';
import LogoMenor from '@/public/img/only-logo-white.svg';

import { AsideItem } from './AsideItem';

export const UserAside = () => {
    const { theme } = useTheme();

    return (
        <>
            <aside className=" flex h-screen w-auto flex-col border-r-2 py-8 items-center justify-between max-lg:px-4 max-lg:py-4 max-sm:border-0">
                <div className=" flex flex-col gap-y-10 max-lg:gap-0 max-sm:hidden">
                    <div className="flex flex-col gap-y-1">
                        <Link to={'/'}>
                            <img src={theme === 'dark' ? Logo : LightLogo} alt="" className="max-lg:hidden h-20 mb-0" />
                        </Link>
                        <Link to={'/'}>
                            <img src={theme === 'dark' ? LogoMenor : LightLogo} alt="" className="lg:hidden img h-11 items-center mb-10" />
                        </Link>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <AsideItem link="/" title="Serviços" icon={Home} />
                                </TooltipTrigger>
                                <TooltipContent side="right">
                                    <p>Serviços</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>

                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <AsideItem link="/register" title="Meus Agendamentos" icon={Layers} />
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
                <div className="mt-[10%] flex flex-col gap-y-1 max-lg:gap-0 w-full max-sm:hidden">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <AsideItem link="/" title="fazer uma conta" icon={User} />
                            </TooltipTrigger>
                            <TooltipContent side="right">
                                <p>Fazer uma conta</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>

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
                </div>
            </aside>
            <div className="items-center top-2 left-2 sm:hidden mt-5">
                <Sheet>
                    <SheetTrigger>
                        <Menu className="h-10 w-10" />
                    </SheetTrigger>
                    <SheetContent side={'left'} className="fixed">
                        <div className="flex flex-col justify-between">
                            <div className="flex flex-col gap-y-10  ">
                                <div className="flex flex-col gap-y-1">
                                    <Link to={'/'}>
                                        <img src={theme === 'dark' ? Logo : LightLogo} alt="" className=" h-14 mb-14" />
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

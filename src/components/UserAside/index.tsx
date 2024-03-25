import { Home, Layers, LifeBuoy, Settings, User, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Separator } from '@/components/ui/separator';
import { useTheme } from '@/context/theme-provider';
import Logo from '@/public/img/Logo.svg';
import LightLogo from '@/public/img/Logo-light.svg';

import { AsideItem } from './AsideItem';

export const UserAside = () => {
    const { theme } = useTheme();

    return (
        <aside className="flex h-screen flex-col border-r-2 px-5 py-8">
            <nav className="flex flex-col gap-16">
                <div className=" w-full">
                    <Link to={'/'}>
                        <img src={theme === 'dark' ? Logo : LightLogo} alt="" className="img h-28" />
                    </Link>
                </div>

                <div className="flex flex-col gap-1">
                    <AsideItem title="Serviços" icon={Home} />
                    <AsideItem title="Meus Agenndamentos" icon={Layers} />
                    <AsideItem title="Grupos" icon={Users} />
                </div>
            </nav>
            <div className=" flex w-full flex-col gap-1">
                <Link to={'/register'}>
                    <Button variant={'ghost'} className="flex w-full items-center justify-start gap-3 px-10 py-7">
                        <User />
                        <p>Fazer um conta</p>
                    </Button>
                </Link>
                <Button variant={'ghost'} className="flex items-center justify-start gap-3 px-10 py-7">
                    <LifeBuoy />
                    <p>Suporte</p>
                </Button>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant={'ghost'} className="flex items-center justify-start gap-3 px-10 py-7">
                            <Settings className="text-violet-700" />
                            <p className="text-violet-700">Configurações</p>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem>Theme</DropdownMenuItem>
                        <Separator orientation="horizontal" />
                        <DropdownMenuItem>Others</DropdownMenuItem>
                        <Separator orientation="horizontal" />
                        <DropdownMenuItem>Theme</DropdownMenuItem>
                        <Separator orientation="horizontal" />
                        <DropdownMenuItem>Others</DropdownMenuItem>
                        <Separator orientation="horizontal" />
                        <DropdownMenuItem>Theme</DropdownMenuItem>
                        <Separator orientation="horizontal" />
                        <DropdownMenuItem>Others</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </aside>
    );
};

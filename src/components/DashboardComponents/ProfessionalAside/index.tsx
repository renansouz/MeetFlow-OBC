import { Home, Layers, LifeBuoy, LogOut, Plus, Settings, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Separator } from '@/components/ui/separator';
import { useTheme } from '@/context/theme-provider';
import Logo from '@/public/img/Logo.svg';
import LightLogo from '@/public/img/Logo-light.svg';

export const ProfessionalAside = () => {
    const { theme } = useTheme();

    return (
        <aside className="flex  h-screen w-2/12 flex-col justify-between border-r-2 pb-8 pt-2">
            <div className="flex flex-col gap-14">
                <div className=" w-full">
                    <Link to={'/'}>
                        <img src={theme === 'dark' ? Logo : LightLogo} alt="" className="img h-28" />
                    </Link>
                </div>
                <div className="flex items-center justify-center  px-5">
                    <Button className="flex w-full items-center justify-center rounded-full">
                        <Plus />
                        <p>Create</p>
                    </Button>
                </div>
                <div className="flex flex-col gap-5">
                    <Button variant={'ghost'} className="flex items-center justify-start gap-3 px-10">
                        <Home />
                        <p>Serviços</p>
                    </Button>
                    <Button variant={'ghost'} className="flex items-center justify-start gap-3 px-10">
                        <Layers />
                        <p>Meus agendamentos</p>
                    </Button>
                    <Button variant={'ghost'} className="flex items-center justify-start gap-3 px-10">
                        <Users />
                        <p>Grupos</p>
                    </Button>
                </div>
            </div>
            <div className="flex w-full flex-col gap-5">
                <Button variant={'ghost'} className="flex items-center justify-start gap-3 px-10">
                    <LifeBuoy />
                    <p>Suporte</p>
                </Button>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant={'ghost'} className="flex items-center justify-start gap-3 px-10">
                            <Settings className="text-violet-700 " />
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
                <div className="mt-10 flex items-center justify-center gap-3">
                    <Button variant={'ghost'}>
                        <p className="text-xl ">Sair</p>
                        <LogOut />
                    </Button>
                </div>
            </div>
        </aside>
    );
};

import { Home, Layers, LifeBuoy, Settings, User, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger } from '@/components/ui/menubar';
import { useTheme } from '@/context/theme-provider';
import Logo from '@/public/img/Logo.png';
import LightLogo from '@/public/img/Logo-light.png';

export const UserDashboard = () => {
    const { theme } = useTheme();

    return (
        <div>
            <div className="flex">
                <aside className="flex  h-screen w-2/12 flex-col justify-between border-r-2 pb-8 pt-2">
                    <div className="flex flex-col gap-16">
                        <div className=" w-full">
                            <Link to={'/'}>
                                <img src={theme === 'dark' ? Logo : LightLogo} alt="" className="img h-28" />
                            </Link>
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
                    <div className=" flex w-full flex-col gap-5 ">
                        <Button variant={'ghost'} className="flex items-center justify-start gap-3 px-10">
                            <User />
                            <p>Fazer um conta</p>
                        </Button>
                        <Button variant={'ghost'} className="flex items-center justify-start gap-3 px-10">
                            <LifeBuoy />
                            <p>Suporte</p>
                        </Button>
                        <Menubar className="w-full border-none">
                            <MenubarMenu>
                                <MenubarTrigger className="hover  flex w-full border-none bg-white">
                                    <Button variant={'ghost'} className=" ">
                                        <Settings className="text-violet-700 " />
                                        <p className="text-violet-700">Configurações</p>
                                    </Button>
                                </MenubarTrigger>
                                <MenubarContent>
                                    <MenubarItem>
                                        New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                                    </MenubarItem>
                                    <MenubarItem>New Window</MenubarItem>
                                    <MenubarSeparator />
                                    <MenubarItem>Share</MenubarItem>
                                    <MenubarSeparator />
                                    <MenubarItem>Print</MenubarItem>
                                </MenubarContent>
                            </MenubarMenu>
                        </Menubar>
                    </div>
                </aside>
                <div></div>
            </div>
        </div>
    );
};

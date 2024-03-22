import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ThemeToggle } from '../theme/theme-toggle';
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarTrigger } from '@/components/ui/menubar';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useAuth } from '@/context/auth-provider';

export const Authenticated = () => {

    const { setAuth } = useAuth()

    const logout = () => {
        setAuth(false);
    };

    return (
        <div>
            <div className="flex gap-10 max-lg:hidden">
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                <Link to={'/'}>Início</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                <Link to={'/about'}>Sobre Nós</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                <Link to={'/login'}>Área do Profissional</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background bg-indigo-600 px-6 py-2 text-white">
                                <Link to={'/register'}>Agende Agora!</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem></NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                <Menubar className="gap-0 border-none">
                    <div>
                        <ThemeToggle />
                    </div>
                    <MenubarMenu>
                        <MenubarTrigger>
                            <Avatar>
                                <AvatarImage className="w-10 rounded-full" src="https://github.com/miqueiasmartinsf.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </MenubarTrigger>
                        <MenubarContent>
                            <MenubarItem>Ver perfil</MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem>Editar</MenubarItem>
                            <MenubarSeparator />
                            <div onClick={() => logout()}>
                                <MenubarItem>Sair</MenubarItem>
                            </div>
                        </MenubarContent>
                    </MenubarMenu>
                </Menubar>
            </div>
            <div className="lg:hidden">
                <Sheet>
                    <SheetTrigger>
                        <Menu />
                    </SheetTrigger>
                    <SheetContent className="absolute">
                        <div className="mt-20 flex flex-col items-center ">
                            <Link to={'/'} className="w-full rounded-md border-solid p-4 text-center hover:bg-indigo-700">
                                Início
                            </Link>
                            <Separator />
                            <Link to={'/about'} className="w-full rounded-md border-solid p-4 text-center hover:bg-indigo-700">
                                Sobre nós
                            </Link>
                            <Separator />
                            <Link to={'/login'} className="w-full rounded-md border-solid p-4 text-center hover:bg-indigo-700">
                                Área do Profissional
                            </Link>
                            <Separator />
                            <Link to={'/register'} className="w-full rounded-md border-solid p-4 text-center hover:bg-indigo-700">
                                Agende Agora!
                            </Link>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    );
};

import { ChevronDown, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useTheme } from '@/context/theme-provider';
import Logo from '@/public/img/Logo.svg';
import LightLogo from '@/public/img/Logo-light.svg';

import { ThemeToggle } from '../theme/theme-toggle';
import { Button } from '../ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Select, SelectContent, SelectTrigger, SelectValue } from '../ui/select';

export const Header = () => {
    //const { setAuth, isAuth } = useAuth();

    const { theme } = useTheme();
    const { setTheme } = useTheme();

    return (
        <div className="relative border-b bg-card">
            <div className="flex max-h-24 items-center justify-between gap-6 px-6">
                <Link to={'/'}>
                    <img src={theme === 'dark' ? Logo : LightLogo} alt="" className="max-h-28" />
                </Link>
                <div>
                    <div className="mr-8 flex gap-5 text-xl max-lg:hidden">
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                        <Link to={'/'}>Início</Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                        <Link to={'/about'}>Sobre</Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                        <a href="#profissional">Profissional</a>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                        <Link to={'/login'}>Entrar</Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>

                                <Dialog>
                                    <DialogTrigger>
                                        <NavigationMenuItem>
                                            <NavigationMenuLink
                                                asChild
                                                className="group ml-10 inline-flex h-10 w-max items-center justify-center rounded-md bg-indigo-600 px-6 py-2 text-white"
                                            >
                                                <Button>Agendar</Button>
                                            </NavigationMenuLink>
                                        </NavigationMenuItem>
                                    </DialogTrigger>
                                    <DialogContent className="gap-6 p-12">
                                        <DialogHeader className="flex">
                                            <DialogTitle className="mb-2 items-center justify-center text-center font-bold">Seja bem-vindo ao MeetFLow!</DialogTitle>
                                            <DialogDescription className="text-center">
                                                Estamos felizes por você estar aqui. Para desfrutar ao máximo de nossos serviços, recomendamos criar uma conta. Se preferir, vocês também pode
                                                entrar sem fazer login.
                                            </DialogDescription>
                                        </DialogHeader>

                                        <div className="mt-10 flex flex-col items-center justify-center gap-6">
                                            <Link
                                                className="item-center flex  w-full justify-center rounded-2xl border-2 border-indigo-800 bg-indigo-400 p-4 text-xl text-background hover:bg-indigo-500 "
                                                to={'/login'}
                                            >
                                                <span className="font-medium">Fazer LogIn</span>
                                            </Link>
                                            <Link
                                                to={'/dashboard/services'}
                                                className=" item-center flex w-full justify-center p-4 font-medium text-foreground hover:text-indigo-600 hover:underline"
                                            >
                                                <span>Entrar sem Login</span>
                                            </Link>
                                        </div>
                                    </DialogContent>
                                </Dialog>

                                <NavigationMenuItem></NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                        <div>
                            <ThemeToggle />
                        </div>
                    </div>
                    <div className="mr-8 lg:hidden">
                        <Sheet>
                            <SheetTrigger>
                                <Menu className="h-10 w-10" />
                            </SheetTrigger>
                            <SheetContent className="fixed">
                                <div className="mt-20 flex flex-col items-center ">
                                    <Link to={'/'} className="w-full rounded-md border-solid p-4 text-center hover:bg-accent">
                                        Início
                                    </Link>
                                    <Separator />
                                    <Separator />

                                    <Link to={'/'} className="w-full rounded-md border-solid p-4 text-center hover:bg-accent ">
                                        Sobre
                                    </Link>
                                    <Separator />
                                    <Separator />
                                    <Link to={'/'} className="w-full rounded-md border-solid p-4 text-center hover:bg-accent ">
                                        Área do Profissional
                                    </Link>
                                    <Separator />
                                    <Select>
                                        <SelectTrigger className="flex w-full justify-center rounded-none border-x-0 py-7 hover:bg-accent">
                                            <SelectValue placeholder="Tema" />
                                        </SelectTrigger>
                                        <SelectContent className="flex flex-col">
                                            <Button
                                                className="w-full items-start justify-center bg-background p-2 text-sm text-foreground hover:bg-primary"
                                                onClick={() => setTheme('light')}
                                                value={'light'}
                                            >
                                                <span>Claro</span>
                                                <ChevronDown />
                                            </Button>
                                            <Button
                                                className="w-full items-start justify-center bg-background p-2 text-sm text-foreground hover:bg-primary"
                                                onClick={() => setTheme('dark')}
                                                value={'dark'}
                                            >
                                                <span>Escuro</span>
                                                <ChevronDown />
                                            </Button>
                                        </SelectContent>
                                    </Select>
                                    <Separator />

                                    <Link to={'/login'} className="w-full rounded-md border-solid p-4 text-center hover:bg-accent">
                                        <span className="hover:text-indigo-600 hover:underline">Entrar</span>
                                    </Link>
                                    <Separator />
                                    <Separator />

                                    <Button asChild>
                                        <Link to={'/register'} className="mt-10 w-full rounded-md border-solid bg-indigo-700 p-4 text-center hover:bg-indigo-800 ">
                                            Agende Agora!
                                        </Link>
                                    </Button>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </div>
    );
};

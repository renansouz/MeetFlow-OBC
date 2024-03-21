import { Link } from 'react-router-dom';

import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger } from '@/components/ui/menubar';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { useTheme } from '@/context/theme-provider';
import Logo from '@/public/Logo.png';
import LightLogo from '@/public/Logo-light.png';

import { ThemeToggle } from '../theme/theme-toggle';

export function Header() {
    const { theme } = useTheme();

    return (
        <div className="border-b px-28 max-xl:hidden">
            <div className="h-26 flex items-center justify-between gap-6 px-6">
                <Link to={'/'}>
                    <img src={theme === 'dark' ? Logo : LightLogo} alt="" className="img h-20" />
                </Link>
                <div className="flex">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                    <Link to={'/'}>Home</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                    <Link to={'/about'}>About</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                    <Link to={'/login'}>Entrar</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background bg-indigo-600 px-6 py-2 text-white">
                                    <Link to={'/register'}>Começar</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                    <div className="ml-10">
                        <ThemeToggle />
                    </div>
                    <Menubar>
                        <MenubarMenu>
                            <MenubarTrigger>File</MenubarTrigger>
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
            </div>
        </div>
    );
}

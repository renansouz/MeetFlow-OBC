import { Link } from 'react-router-dom';

import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { useTheme } from '@/context/theme-provider';
import Logo from '@/public/Logo.png';
import LightLogo from '@/public/Logo-light.png';

import { ThemeToggle } from '../theme/theme-toggle';

export function Header() {
    const { theme } = useTheme();

    return (
        <div className="border-b px-28">
            <div className="h-26 flex items-center justify-between gap-6 px-6">
                <Link to={'/'}>
                    <img src={theme === 'dark' ? Logo : LightLogo} alt="" className="img h-20" />
                </Link>
                <div className="flex max-lg:hidden">
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
                </div>
                <button className="group mx-2 block rounded px-4 py-3 hover:bg-gray-200 focus:outline-none lg:hidden">
                    <div className="mb-2 h-1 w-8 bg-gray-600"></div>
                    <div className="mb-2 h-1 w-8 bg-gray-600"></div>
                    <div className="mb-2 h-1 w-8 bg-gray-600"></div>
                    <div className="absolute -right-full top-0 h-screen w-8/12 border bg-black opacity-0 transition-all duration-300 group-focus:right-0 group-focus:opacity-100">
                        <ul className="flex w-full cursor-pointer flex-col items-center pt-10 text-base">
                            <li className="w-full px-6 py-4 hover:bg-gray-200">Home</li>
                            <li className="w-full px-6 py-4 hover:bg-gray-200">About</li>
                            <li className="w-full px-6 py-4 hover:bg-gray-200">Menu</li>
                        </ul>
                    </div>
                </button>
            </div>
        </div>
    );
}

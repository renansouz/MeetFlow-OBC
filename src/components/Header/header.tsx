import { ThemeToggle } from '../theme/theme-toggle';
import { Link } from 'react-router-dom';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';

import Logo from '@/public/Logo.png';
import LightLogo from '@/public/Logo-light.png';

import { useTheme } from '@/context/theme-provider';

export function Header() {
    const { theme } = useTheme();

    return (
        <div className="border-b px-28">
            <div className="flex h-26 items-center gap-6 px-6 justify-between">
                <Link to={'/'}>
                    <img src={theme === 'dark' ? Logo : LightLogo} alt="" className="h-20 img" />
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
                                <NavigationMenuLink asChild className="bg-indigo-600 group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-6 py-2 text-white">
                                    <Link to={'/register'}>Começar</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                    <div className="ml-10">
                        <ThemeToggle />
                    </div>
                </div>
                <button className="block lg:hidden py-3 px-4 mx-2 rounded focus:outline-none hover:bg-gray-200 group">
                    <div className="w-8 h-1 bg-gray-600 mb-2"></div>
                    <div className="w-8 h-1 bg-gray-600 mb-2"></div>
                    <div className="w-8 h-1 bg-gray-600 mb-2"></div>
                    <div className="absolute top-0 -right-full h-screen w-8/12 bg-black border opacity-0 group-focus:right-0 group-focus:opacity-100 transition-all duration-300">
                        <ul className="flex flex-col items-center w-full text-base cursor-pointer pt-10">
                            <li className="hover:bg-gray-200 py-4 px-6 w-full">Home</li>
                            <li className="hover:bg-gray-200 py-4 px-6 w-full">About</li>
                            <li className="hover:bg-gray-200 py-4 px-6 w-full">Menu</li>
                        </ul>
                    </div>
                </button>
            </div>
        </div>
    );
}

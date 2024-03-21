import { ThemeToggle } from "../theme/theme-toggle";
import { Link } from "react-router-dom";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import Logo from "@/public/Logo.png";
import LightLogo from "@/public/Logo-light.png";

import { useTheme } from "@/context/theme-provider";

export function Header() {
    const { theme } = useTheme();

    return (
        <div className="border-b px-28">
            <div className="flex h-26 items-center gap-6 px-6 justify-between">
                <Link to={"/"}>
                    <img
                        src={theme === "dark" ? Logo : LightLogo}
                        alt=""
                        className="h-20 img"
                    />
                </Link>
                <div className="flex">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    asChild
                                    className={navigationMenuTriggerStyle()}
                                >
                                    <Link to={"/"}>Home</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    asChild
                                    className={navigationMenuTriggerStyle()}
                                >
                                    <Link to={"/asd"}>About</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    asChild
                                    className={navigationMenuTriggerStyle()}
                                >
                                    <Link to={"/asd"}>Entrar</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    asChild
                                    className="bg-indigo-600 group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-6 py-2 text-white"
                                >
                                    <Link to={"/cadastro"}>Começar</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                    <div className="ml-10">
                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </div>
    );
}

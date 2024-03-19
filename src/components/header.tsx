import { ThemeToggle } from "./theme/theme-toggle";
import { Link } from "react-router-dom";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function Header() {
    return (
        <div className="border-b px-28">
            <div className="flex h-16 items-center gap-6 px-6 justify-between">
                <h1 className=" text-3xl">Meet Flow</h1>
                <div className="flex">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    className={navigationMenuTriggerStyle()}
                                >
                                    <Link to={"/"}>Home</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    className={navigationMenuTriggerStyle()}
                                >
                                    <Link to={"/asd"}>About</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    className={navigationMenuTriggerStyle()}
                                >
                                    <Link to={"/asd"}>Entrar</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink className="bg-indigo-600 group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-6 py-2">
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

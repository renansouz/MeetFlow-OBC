import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useLogOut } from '@/hooks/useLogOut';
import { useEffect } from 'react';
import { getUserData } from '@/utils/getUserData';
import { useAuth } from '@/context/auth-provider';
import { useUserData } from '@/hooks/useUserData';

export const UserMenu = () => {
    
    const logOut = useLogOut();

    useUserData();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant={'ghost'} className="h-11 flex items-center justify-start gap-3 px-10 py-7 max-lg:px-0 max-lg:justify-center">
                    <Avatar>
                        <AvatarImage src="https://github.com/miqueiasmartinsf.png" className="w-10" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    Usuário padrão
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem onClick={() => logOut()}>
                    <p className="text-red-600">Sair</p>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

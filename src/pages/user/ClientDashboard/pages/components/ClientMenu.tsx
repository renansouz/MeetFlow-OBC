import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { userAPI } from '@/api/userAPI';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useAuth } from '@/context/auth-provider';
import { UserType } from '@/types/userType';

import { AlertDialogContainer } from './AlertDialogContainer';

export const ClientMenu = () => {
    const [userData, setUserData] = useState<UserType | undefined>();
    const navigate = useNavigate();
    const { signOut } = useAuth();

    const handleLogout = () => {
        signOut();
        navigate('/');
    };

    useEffect(() => {
        console.log('fetch');
        const getUserData = async () => {
            const res = await userAPI.fetchUserData();
            const { user } = await res;
            setUserData(user);
        };

        getUserData();
    }, []);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant={'ghost'} className="flex h-11 w-full items-center justify-start gap-3 px-8 py-7 max-lg:justify-center max-lg:px-0">
                    <Avatar>
                        <AvatarImage src={userData?.photoUrl} className="w-10" />
                        <AvatarFallback>{userData?.name.slice(0, 1)}</AvatarFallback>
                    </Avatar>
                    <div className="flex w-44 flex-col justify-start max-sm:visible sm:hidden lg:block">
                        <h2 className="overflow-hidden overflow-ellipsis whitespace-nowrap text-left text-sm">rebererva</h2>
                        <p className="overflow-hidden overflow-ellipsis whitespace-nowrap text-left text-xs">rerewdsfsdfrwererewr</p>
                        {userData && <h2 className="overflow-hidden overflow-ellipsis whitespace-nowrap text-left text-sm">{userData.name}</h2>}
                        {userData && <p className="overflow-hidden overflow-ellipsis whitespace-nowrap text-left text-xs">{userData.email}</p>}
                    </div>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Editar perfil</DropdownMenuItem>
                <Button variant={'ghost'} asChild>
                    <AlertDialogContainer triger="Sair" alertMessage="Deseja realmente sair?" description="Você será redirecionado para o início" callback={handleLogout} />
                </Button>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

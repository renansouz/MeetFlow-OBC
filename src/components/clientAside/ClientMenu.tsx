import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { getUser } from '@/api';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Skeleton } from '@/components/ui/skeleton';
import { useAuth } from '@/context/auth-provider';
import { env } from '@/env';

import { AlertDialogContainer } from './AlertDialogContainer';

export const ClientMenu = () => {
    const navigate = useNavigate();
    const { logout } = useAuth();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    const { data: profile, isLoading: isLoadingProfile } = useQuery({
        queryKey: ['profile'],
        queryFn: getUser,
        staleTime: Infinity,
    });

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant={'ghost'}
                    className="flex h-11 w-full items-center justify-start gap-3 px-8 py-7 max-lg:justify-center max-lg:px-0"
                >
                    <Avatar>
                        {isLoadingProfile ? (
                            <Skeleton className="h-10 w-10" />
                        ) : profile?.user.photoUrl ? (
                            <AvatarImage
                                src={`${env.VITE_URL_R2CLOUDFLARE}${profile?.user.photoUrl}`}
                                className="w-10"
                            />
                        ) : (
                            <AvatarFallback>
                                {profile?.user?.name?.slice(0, 1).toUpperCase()}
                            </AvatarFallback>
                        )}
                    </Avatar>
                    <div className="flex w-44 flex-col justify-start max-sm:visible sm:hidden lg:block">
                        {isLoadingProfile ? (
                            <Skeleton className="20px w-full" />
                        ) : (
                            profile && (
                                <h2 className="overflow-hidden overflow-ellipsis whitespace-nowrap text-left text-sm">
                                    {profile.user.name}
                                </h2>
                            )
                        )}
                        {isLoadingProfile ? (
                            <Skeleton className="20px w-full" />
                        ) : (
                            profile && (
                                <p className="overflow-hidden overflow-ellipsis whitespace-nowrap text-left text-xs">
                                    {profile.user.email}
                                </p>
                            )
                        )}
                    </div>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Editar perfil</DropdownMenuItem>
                <Button variant={'ghost'} asChild>
                    <AlertDialogContainer
                        triger="Sair"
                        alertMessage="Deseja realmente sair?"
                        description="Você será redirecionado para o início"
                        callback={handleLogout}
                    />
                </Button>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

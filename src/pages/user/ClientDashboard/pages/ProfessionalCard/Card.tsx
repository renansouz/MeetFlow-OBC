import { Avatar } from '@radix-ui/react-avatar';
import { LucideCalendarPlus } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

import { CardData } from '.';

export const CardProfessional = ({ profile_pic, description, name, categorie }: CardData) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timeout);
    }, []);
    return (
        <div>
            {loading ? (
                <Skeleton className="z-0 h-80 w-64 gap-y-12 rounded-md" />
            ) : (
                <Card className="flex w-64 flex-col items-center gap-y-12 rounded-md shadow-2xl">
                    <CardHeader className="h-20 w-full items-center rounded-tl-md rounded-tr-md bg-indigo-300">
                        <Avatar>
                            <AvatarImage src={profile_pic} className="w-24 rounded-full" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </CardHeader>
                    <div className="flex-col text-center">
                        <CardContent className="flex flex-col items-center">
                            <h2 className="max-w-full overflow-hidden overflow-ellipsis whitespace-nowrap text-center font-bold" style={{ maxWidth: '200px' }}>
                                {name}
                            </h2>
                            <span className="max-w-full overflow-hidden overflow-ellipsis whitespace-nowrap font-light" style={{ maxWidth: '200px' }}>
                                {description}
                            </span>
                            <span className="mt-6 ">{categorie}</span>
                        </CardContent>
                        <Button asChild className="mb-10 bg-primary text-lg font-light text-foreground hover:bg-indigo-400" variant={'default'}>
                            <Link to={'/dashboard/profile'} className="px-6">
                                <LucideCalendarPlus className="mr-3 h-5 w-5" />
                                Agendar
                            </Link>
                        </Button>
                    </div>
                </Card>
            )}
        </div>
    );
};

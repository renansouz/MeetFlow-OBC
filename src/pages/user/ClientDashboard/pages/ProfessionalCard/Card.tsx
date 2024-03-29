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
                <Skeleton className="w-64 h-80 rounded-md z-0 gap-y-12" />
            ) : (
                <Card className="shadow-2xl w-64 rounded-md flex flex-col items-center gap-y-12">
                    <CardHeader className="bg-indigo-300 h-20 rounded-tl-md rounded-tr-md w-full items-center">
                        <Avatar>
                            <AvatarImage src={profile_pic} className="rounded-full w-24" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </CardHeader>
                    <div className="flex-col text-center">
                        <CardContent className="flex flex-col items-center">
                            <h2 className="text-center font-bold whitespace-nowrap overflow-hidden overflow-ellipsis max-w-full" style={{ maxWidth: '200px' }}>
                                {name}
                            </h2>
                            <span className="font-light whitespace-nowrap overflow-hidden overflow-ellipsis max-w-full" style={{ maxWidth: '200px' }}>
                                {description}
                            </span>
                            <span className="mt-6 ">{categorie}</span>
                        </CardContent>
                        <Button asChild className="text-lg font-light text-foreground mb-10 bg-primary hover:bg-indigo-400" variant={'default'}>
                            <Link to={'/dashboard/profile'} className="px-6">
                                <LucideCalendarPlus className="w-5 h-5 mr-3" />
                                Agendar
                            </Link>
                        </Button>
                    </div>
                </Card>
            )}
        </div>
    );
};
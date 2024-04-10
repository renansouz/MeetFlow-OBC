import { Avatar } from '@radix-ui/react-avatar';
import { LucideCalendarPlus } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Professional } from '@/api';
import { AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { env } from '@/env';

export const ProfessionalCard = ({
    photoUrl,
    headLine,
    name,
    occupationArea,
    _id,
    myScheduleId,
}: Professional) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timeout);
    }, []);
    return (
        <div>
            {loading ? (
                <Skeleton className="z-0 h-80 w-64 gap-y-12 rounded-md" />
            ) : (
                <Card className="flex w-64 flex-col items-center gap-y-12 rounded-md shadow-2xl max-sm:h-72 max-sm:w-44">
                    <CardHeader className="h-20 w-full items-center rounded-tl-md rounded-tr-md bg-indigo-300">
                        <Avatar>
                            {photoUrl ? (
                                <AvatarImage
                                    src={`${env.VITE_URL_R2CLOUDFLARE}${photoUrl}`}
                                    className="w-24 rounded-full"
                                />
                            ) : (
                                <AvatarFallback className="h-24 w-24 rounded-full">
                                    {name.slice(0, 1).toUpperCase()}
                                </AvatarFallback>
                            )}
                        </Avatar>
                    </CardHeader>
                    <div className="flex-col text-center">
                        <CardContent className="flex flex-col items-center">
                            <p
                                className="max-w-full overflow-hidden overflow-ellipsis whitespace-nowrap text-center font-bold max-sm:w-40"
                                style={{ maxWidth: '200px' }}
                            >
                                {name}
                            </p>
                            <span
                                className="max-w-full overflow-hidden overflow-ellipsis whitespace-nowrap text-sm font-light max-sm:w-40"
                                style={{ maxWidth: '200px' }}
                            >
                                {headLine}
                            </span>
                            <span className="mt-6 max-sm:mt-2 max-sm:text-base">
                                {occupationArea}
                            </span>
                        </CardContent>
                        <Button
                            asChild
                            className="mb-10 bg-primary text-lg font-light text-foreground hover:bg-primary/80 max-sm:mb-5"
                            variant={'default'}
                        >
                            <Link to={`/dashboard/profile/${_id}/${myScheduleId}`} className="px-6">
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

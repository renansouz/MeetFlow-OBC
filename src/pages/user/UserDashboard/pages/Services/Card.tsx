import { Avatar } from '@radix-ui/react-avatar';
import { LucideCalendarPlus } from 'lucide-react';
import { Link } from 'react-router-dom';

import { AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

import { CardData } from '.';

export const CardProfessional = ({ profile_pic, description, name, categorie }: CardData) => {
    return (
        <Card className="shadow-2xl w-72   rounded-md flex flex-col items-center gap-y-12 bg-slate-900 ">
            <CardHeader className="bg-indigo-500 h-20 rounded-tl-md rounded-tr-md w-full items-center">
                <Avatar>
                    <AvatarImage src={profile_pic} className="rounded-full w-24 " />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </CardHeader>
            <CardContent className="text-center">
                <h2 className="text-center ">{name}</h2>
                <p className="font-light">{description}</p>
                <p className="my-6 ">{categorie}</p>
                <Button asChild className="text-lg font-light" variant={'default'}>
                    <Link to={''} className="px-6 ">
                        <LucideCalendarPlus className="w-5 h-5 mr-3" />
                        Agendar
                    </Link>
                </Button>
            </CardContent>
        </Card>
    );
};

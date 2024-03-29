import { CalendarDays, Clock, Hourglass, Star } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export const ServicesCard = () => {
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
                <Skeleton className="w-90% m-10 h-72 p-3" />
            ) : (
                <Card className="m-10 p-3 max-xl:m-0 max-xl:mb-10 max-xl:p-0">
                    <CardHeader>
                        <div className="flex flex-row items-center justify-between">
                            <div className="flex">
                                <CardTitle>Responsividade em Tailwind</CardTitle>
                            </div>
                            <div className="justify-cener flex items-center max-lg:hidden">
                                <Star className="text-yellow-500" />
                                <Star className="text-yellow-500" />
                                <Star className="text-yellow-500" />
                                <Star className="text-yellow-500" />
                                <Star className="text-yellow-500" />
                                <span className="font-extralight">(10)</span>
                            </div>
                        </div>
                        <CardDescription className="w-[80%] text-base text-primary-foreground">Agendamento com: Renan de Souza Silva</CardDescription>
                        <CardDescription className="w-[80%]">
                            especialista em Tailwind. Entre em contato para agendar sua primeira aula e leve seus projetos web para o próximo nível
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="mt-10 flex justify-between">
                        <div className="flex gap-3 max-xl:flex-col">
                            <Card className="fflex flex h-12 items-center justify-center gap-2 rounded-md border-2 border-border px-4">
                                <Hourglass className="text-indigo-500" />2 horas
                            </Card>
                            <Card className="fflex flex h-12 items-center justify-center gap-2 rounded-md border-2 border-border px-4">
                                <CalendarDays className="text-indigo-500" />
                                11/05/2024
                            </Card>
                            <Card className="fflex flex h-12 items-center justify-center gap-2 rounded-md border-2 border-border px-4">
                                <Clock className="text-indigo-500" /> 11:00h ás 13:00h
                            </Card>
                        </div>
                        <Button asChild className="hover:bg-indigo-80 max-mlg:text-base font-liht bg-indigo-700  text-lg" variant={'default'}>
                            <Link to={''} className="px-6 max-xl:ml-2 max-xl:mt-16 max-xl:px-2">
                                Entrar na reunião
                            </Link>
                        </Button>
                    </CardContent>
                </Card>
            )}
        </div>
    );
};

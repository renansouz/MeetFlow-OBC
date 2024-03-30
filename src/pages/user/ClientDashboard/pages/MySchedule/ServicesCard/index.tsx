import { CalendarDays, Clock, Hourglass, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const ServicesCard = () => {
    return (
        <Card className="bg-background p-3 m-10">
            <CardHeader>
                <div className="flex justify-between items-center flex-row">
                    <div className="flex">
                        <CardTitle>Responsividade em Tailwind</CardTitle>
                    </div>
                    <div className="flex">
                        <Star className="text-yellow-500" />
                        <Star className="text-yellow-500" />
                        <Star className="text-yellow-500" />
                        <Star className="text-yellow-500" />
                        <Star className="text-yellow-500" />
                        <span className="font-extralight">(10)</span>
                    </div>
                </div>
                <CardDescription className="w-[80%] text-base text-foreground">Agendamento com: Renan de Souza Silva</CardDescription>
                <CardDescription className="w-[80%]">especialista em Tailwind. Entre em contato para agendar sua primeira aula e leve seus projetos web para o próximo nível</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-between mt-10">
                <div className="flex gap-3">
                    <Card className="border-border border-2 px-4 py-3 flex items-center justify-center rounded-full gap-2">
                        <Hourglass className="text-indigo-500" />2 horas
                    </Card>
                    <Card className="border-border border-2 px-4 py-3  flex items-center justify-center rounded-full gap-3">
                        <CalendarDays className="text-indigo-500" />
                        11 de abril de 2024 <Clock className="text-indigo-500" /> 11:00h
                    </Card>
                </div>
                <Button asChild className="text-lg font-light bg-indigo-700 hover:bg-indigo-800" variant={'default'}>
                    <Link to={''} className="px-6">
                        Entrar na reunião
                    </Link>
                </Button>
            </CardContent>
        </Card>
    );
};

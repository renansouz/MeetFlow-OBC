import { DollarSign, Hourglass, LucideCalendarPlus, Star } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export const ProfessionalService = ({ onServiceClick } : any ) => {
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
                <Skeleton className="m-10 h-64 w-[90%] p-3" />
            ) : (
                <Card className="m-10 p-3">
                    <CardHeader>
                        <div className="flex flex-row items-center justify-between">
                            <div className="flex">
                                <CardTitle>Responsividade em Tailwind</CardTitle>
                            </div>
                            <div className="flex items-center justify-center">
                                <Star className="text-yellow-500" />
                                <Star className="text-yellow-500" />
                                <Star className="text-yellow-500" />
                                <Star className="text-yellow-500" />
                                <Star className="text-yellow-500" />
                                <span className="font-extralight">(10)</span>
                            </div>
                        </div>
                        <CardDescription className="w-[80%]">
                            especialista em Tailwind. Entre em contato para agendar sua primeira aula e leve seus projetos web para o próximo nível
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="mt-10 flex justify-between">
                        <div className="flex gap-3">
                            <Card className="flex items-center justify-center gap-2 rounded-full border-2 border-border px-4 py-3">
                                <Hourglass className="text-foreground" />2 horas
                            </Card>
                            <Card className="flex items-center justify-center gap-2 rounded-full border-2 border-border px-4 py-3">
                                <DollarSign className="text-foreground" /> R$100,00
                            </Card>
                        </div>

                        <Button onClick={onServiceClick} asChild className="bg-indigo-700 text-lg font-light hover:bg-indigo-800" variant={'default'}>
                            <Link to={''} className="px-6">
                                <LucideCalendarPlus className="mr-3 h-5 w-5" />
                                Agendar
                            </Link>
                        </Button>
                    </CardContent>
                </Card>
            )}
        </div>
    );
};

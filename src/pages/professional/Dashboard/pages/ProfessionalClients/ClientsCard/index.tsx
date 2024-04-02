import { CalendarDays, Clock, Hourglass, Mail, Phone, User2 } from 'lucide-react';
import { useEffect, useState } from 'react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export const ClientsCard = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div>
            {loading ? (
                <Skeleton className="m-10 h-[247px] w-[60%] p-3" />
            ) : (
                <Card className="m-10 w-[50%] cursor-pointer bg-background ">
                    <CardHeader>
                        <CardTitle>Responsividade em tailwind</CardTitle>

                        <CardDescription className=" text-base text-indigo-400/80">
                            Solicitação feita por: <span className="text-foreground">miqueias falcão</span>
                        </CardDescription>
                    </CardHeader>

                    <CardContent className="flex justify-between">
                        <div className="flex flex-col items-start justify-center gap-3">
                            <Card className="flex h-12 items-center justify-center gap-2 rounded-md border-2 border-border px-4">
                                <CalendarDays className="text-indigo-500" />
                                11 de abril de 2024
                            </Card>

                            <Card className="flex h-12 items-center justify-center gap-2 rounded-md border-2 border-border px-4">
                                <Clock className="text-indigo-500" />
                                11:00h à 13:00h
                            </Card>
                        </div>

                        <div className="flex flex-col items-start justify-center">
                            <div className="flex items-center justify-center">
                                <User2 className="m-2" />

                                <span>Miqueias falcão nascimento</span>
                            </div>

                            <div className="flex items-center justify-center">
                                <Phone className="m-2" />

                                <span>+55 31 7321-9539</span>
                            </div>

                            <div className="flex items-center justify-center">
                                <Mail className="m-2" />

                                <span>wesleyDoBack@dev.com</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            )}
        </div>
    );
};

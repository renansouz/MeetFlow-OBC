import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

import { ClientsCard } from './ClientsCard';
import { ScheduleCard } from './ScheduleCard';

export function Clients() {
    return (
        <>
            {/* <div className="flex h-lvh w-full items-center justify-center">
                <h1 className="text-center">Você ainda não possui clientes</h1>
            </div> */}

            <Card className="m-[3%] p-5 ">
                <CardHeader>
                    <CardTitle>Agendamentos Pendentes</CardTitle>
                    <CardDescription>
                        Verifique todos os seus agendamentos pendentes
                    </CardDescription>
                </CardHeader>
                <ScheduleCard />
                <ScheduleCard />
                <CardHeader>
                    <CardTitle>Clientes Confirmados</CardTitle>
                    <CardDescription>
                        Verifique todos os seus agendamentos confirmados
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <ClientsCard />
                </CardContent>
            </Card>
        </>
    );
}

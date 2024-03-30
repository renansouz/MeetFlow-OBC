import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

import { ServicesCard } from './ServicesCard';

export function MySchedules() {
    return (
        <>
            <Card className="m-[10%] p-24 hidden">
                <CardContent className="flex justify-center items-center">
                    <p className="text-2xl text-center">Você precisa de uma conta para ter acesso a página meus agendamentos</p>
                </CardContent>
            </Card>

            <Card className="m-[5%] p-5 max-sm:m-0 max-sm:p-0 max-sm:pt-10">
                <CardHeader>
                    <CardTitle>Meus agendamentos</CardTitle>
                    <CardDescription>Verifique todos os seus agendamentos pendentes</CardDescription>
                </CardHeader>
                <CardContent>
                    <ServicesCard />
                    <ServicesCard />
                    <ServicesCard />
                </CardContent>
            </Card>
        </>
    );
}

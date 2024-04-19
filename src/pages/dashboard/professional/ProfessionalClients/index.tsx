import { useQuery } from '@tanstack/react-query';

import { getProfile } from '@/api';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/context/auth-provider';

import { ClientsConfirmed } from './clientsConfirmed';
import { ClientsPending } from './clientsPending';

export function Clients() {
  const { user } = useAuth();

  const { data: profile } = useQuery({
    queryKey: ['profile'],
    queryFn: () => getProfile({ _id: user?._id }),
    staleTime: Infinity,
    enabled: !!user,
  });

  const myScheduleId = profile?.myScheduleId;

  return (
    <>
      <Card className="mx-[5%] mt-10 p-5 ">
        <CardHeader>
          <CardTitle>Solicitações Pendentes</CardTitle>
          <CardDescription>Verifique todos os seus agendamentos pendentes</CardDescription>
        </CardHeader>
        <ClientsPending scheduleId={myScheduleId || ''} />

        <CardHeader>
          <CardTitle>Clientes Confirmados</CardTitle>
          <CardDescription>Verifique todos os seus agendamentos confirmados</CardDescription>
        </CardHeader>
        <CardContent>
          <ClientsConfirmed scheduleId={myScheduleId || ''} />
        </CardContent>
      </Card>
    </>
  );
}

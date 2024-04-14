import { useQuery } from '@tanstack/react-query';

import { getProfile } from '@/api';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/context/auth-provider';

import { ClientsConfirmed } from './clientsConfirmed';
import { ClientsPending } from './clientsPending';

export function Clients() {
  const { user } = useAuth();

  const { data: profile, isLoading: isLoadingProfile } = useQuery({
    queryKey: ['profile'],
    queryFn: () => getProfile({ _id: user?._id }),
    staleTime: Infinity,
    enabled: !!user,
  });

  const myScheduleId = profile?.myScheduleId;

  return (
    <>
      {/* <div className="flex h-lvh w-full items-center justify-center">
                <h1 className="text-center">Você ainda não possui clientes</h1>
            </div> */}

      <Card className="m-[3%] p-5 ">
        <CardHeader>
          <CardTitle>Agendamentos Pendentes</CardTitle>
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

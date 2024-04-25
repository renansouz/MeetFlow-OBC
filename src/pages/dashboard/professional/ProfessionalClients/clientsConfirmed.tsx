import { useQueries, useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import { CalendarDays, Clock, Mail, Phone, User2 } from 'lucide-react';

import { getAppointmentByPage } from '@/api';
import { getClient } from '@/api/client/get-client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

interface ClientsConfirmedProps {
  scheduleId: string;
}

export const ClientsConfirmed = ({ scheduleId }: ClientsConfirmedProps) => {
  const { data: servicesScheduled, isLoading: isLoadingServiceAppointment } = useQuery({
    queryKey: ['servicesScheduled', scheduleId],
    queryFn: () => getAppointmentByPage({ userId: scheduleId, page: 1 }),
    staleTime: Infinity,
    enabled: !!scheduleId,
  });

  const clientsId = servicesScheduled?.appointments?.map(
    (serviceScheduled) => serviceScheduled.clientId
  );

  const clientQueries = useQueries({
    queries:
      clientsId?.map((clientId) => ({
        queryKey: ['client', clientId],
        queryFn: () => getClient({ _id: clientId }),
        staleTime: Infinity,
        enabled: !!clientId,
      })) || [],
  });

  return (
    <div>
      {isLoadingServiceAppointment ? (
        <Skeleton className="m-10 h-[247px] w-[60%] p-3" />
      ) : (servicesScheduled?.appointments?.length ?? 0) > 0 ? (
        servicesScheduled?.appointments?.map((serviceScheduled, index) => (
          <Card
            key={serviceScheduled._id}
            className="m-10 w-[80%] bg-background p-3 hover:border-primary max-md:m-0 max-md:w-[95%] max-sm:mb-2"
          >
            <CardHeader>
              <CardTitle>{serviceScheduled.serviceName}</CardTitle>
            </CardHeader>

            <CardContent className="flex justify-between max-sm:flex-col">
              <div className="flex flex-col items-start justify-center gap-3">
                <Card className="flex h-12 items-center justify-center gap-2 rounded-md border-2 border-border px-4">
                  <CalendarDays className="text-indigo-500" />
                  {dayjs(serviceScheduled?.initDate).format('DD [de] MMMM [de] YYYY')}
                </Card>

                <Card className="flex h-12 items-center justify-center gap-2 rounded-md border-2 border-border px-4">
                  <Clock className="text-indigo-500" />
                  {dayjs(serviceScheduled?.initDate).format('HH:mm')}h as {''}
                  {dayjs(serviceScheduled?.endDate).format('HH:mm')}h
                </Card>
              </div>

              <div className="flex flex-col items-start justify-center">
                <div className="flex w-full items-center justify-start overflow-hidden">
                  <User2 className="m-2" />
                  <span className="truncate">{clientQueries[index].data?.name}</span>
                </div>

                <div className="flex w-full items-center justify-start overflow-hidden">
                  <Phone className="m-2" />

                  <span>{clientQueries[index].data?.phone}</span>
                </div>

                <div className="flex w-full items-center justify-start overflow-hidden">
                  <Mail className="m-2" />

                  <span className="truncate">{clientQueries[index].data?.email}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))
      ) : (
        <div className="flex h-48 w-full items-center justify-center">
          <p className="text-center italic">Você ainda não possui clientes</p>
        </div>
      )}
    </div>
  );
};

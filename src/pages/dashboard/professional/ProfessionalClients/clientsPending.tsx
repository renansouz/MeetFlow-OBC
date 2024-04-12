import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import dayjs from 'dayjs';
import { CalendarDays, Clock, Hourglass } from 'lucide-react';

import { createAppointment, getRequestByPage, updateRequest, UpdateRequestRequest } from '@/api';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

interface ClientsPendingProps {
  scheduleId: string;
}

export const ClientsPending = ({ scheduleId }: ClientsPendingProps) => {
  const queryClient = useQueryClient();

  const { data: servicesRequest, isLoading: isLoadingServiceRequest } = useQuery({
    queryKey: ['servicesRequest', scheduleId],
    queryFn: () => getRequestByPage({ userId: scheduleId, page: 1 }),
    staleTime: Infinity,
    enabled: !!scheduleId,
  });

  const { mutateAsync: crateAppointmentFn } = useMutation({
    mutationFn: createAppointment,
    // onSuccess: () => {
    //   // Forçar a query 'servicesProfile' a ser recarregada
    //   queryClient.invalidateQueries({ queryKey: ['servicesProfile'] });
    // },
  });

  const { mutateAsync: updateRequestFn } = useMutation({
    mutationFn: updateRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['servicesRequest'] });
    },
  });

  return (
    <div>
      {isLoadingServiceRequest ? (
        <Skeleton className="m-10 h-[247px] w-[60%] p-3" />
      ) : (servicesRequest?.requests?.length ?? 0) > 0 ? (
        servicesRequest?.requests?.map((serviceRequest) => (
          <Card key={serviceRequest._id} className="m-10 w-[60%] bg-background p-3">
            <CardHeader>
              <CardTitle>{serviceRequest.serviceName}</CardTitle>
              <div className="text-base text-indigo-400/80">
                <p>
                  Solicitação feita por:
                  <span className="ml-2 text-foreground">{serviceRequest.clientName}</span>
                </p>
                <p>
                  Mensagem:
                  <span className="ml-2 text-foreground">{serviceRequest?.message}</span>
                </p>
              </div>
            </CardHeader>

            <CardContent className="flex justify-between">
              <div className="flex gap-3">
                <Card className="flex h-12 items-center justify-center gap-2 rounded-md border-2 border-border px-4">
                  <Hourglass className="text-indigo-500" />
                  {serviceRequest?.duration} minutos
                </Card>

                <Card className="flex h-12 items-center justify-center gap-2 rounded-md border-2 border-border px-4">
                  <CalendarDays className="text-indigo-500" />
                  {dayjs(serviceRequest?.initDate).format('DD [de] MMMM [de] YYYY')}
                </Card>

                <Card className="flex h-12 items-center justify-center gap-2 rounded-md border-2 border-border px-4">
                  <Clock className="text-indigo-500" />
                  {dayjs(serviceRequest?.initDate).format('HH:mm')}h
                </Card>
              </div>

              <div className="flex items-center gap-x-3">
                <AlertDialog>
                  <AlertDialogTrigger asChild className="w-full">
                    <Button variant={'success'} className="">
                      Aceitar
                    </Button>
                  </AlertDialogTrigger>

                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Confirmação de agendamento</AlertDialogTitle>
                      <AlertDialogDescription>
                        Deseja confirmar o agendamento com {serviceRequest.clientName}?
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancelar</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={async () => {
                          await crateAppointmentFn({
                            message: serviceRequest.message,
                            serviceId: serviceRequest.serviceId,
                            serviceName: serviceRequest.serviceName,
                            scheduleId: scheduleId,
                            professionalId: scheduleId,
                            clientId: serviceRequest.clientId,
                            requestId: serviceRequest._id,
                            initDate: serviceRequest.initDate,
                            endDate: serviceRequest.endDate,
                            status: 'confirmado',
                            haveRecurrence: serviceRequest.haveRecurrence,
                            active: true,
                          });

                          const updateRequestData: UpdateRequestRequest = {
                            _id: serviceRequest._id,
                            data: {
                              status: 'confirmado',
                            },
                          };

                          await updateRequestFn(updateRequestData);
                        }}
                      >
                        Confirmar
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>

                <AlertDialog>
                  <AlertDialogTrigger asChild className="w-full">
                    <Button variant={'destructive'}>Recusar</Button>
                  </AlertDialogTrigger>

                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Recusa de agendamento</AlertDialogTitle>
                      <AlertDialogDescription>
                        Deseja recusar o agendamento com {serviceRequest.clientName}?
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancelar</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={async () => {
                          const updateRequestData: UpdateRequestRequest = {
                            _id: serviceRequest._id,
                            data: {
                              status: 'cancelado_profissional',
                              active: false,
                            },
                          };

                          await updateRequestFn(updateRequestData);
                        }}
                      >
                        Confirmar
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </CardContent>
          </Card>
        ))
      ) : (
        <div className="flex h-lvh w-full items-center justify-center">
          <h1 className="text-center">Você ainda não possui clientes</h1>
        </div>
      )}
    </div>
  );
};

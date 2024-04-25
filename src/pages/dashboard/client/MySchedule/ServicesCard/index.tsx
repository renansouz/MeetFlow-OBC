import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import { CalendarDays, Clock, Hourglass } from 'lucide-react';
import { Link } from 'react-router-dom';

import { getRequestByPage } from '@/api';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { useAuth } from '@/context/auth-provider';

export const ServicesCard = () => {
  const { user } = useAuth();

  const { data: servicesClientRequest, isLoading: isLoadingServiceClientRequest } = useQuery({
    queryKey: ['servicesRequest', user?._id],
    queryFn: () => getRequestByPage({ createdById: user?._id, page: 1 }),
    staleTime: Infinity,
    enabled: !!user?._id,
  });

  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      {isLoadingServiceClientRequest ? (
        <Skeleton className="w-90% m-10 h-72 p-3" />
      ) : (
        servicesClientRequest?.requests?.map((serviceClientRequest) => (
          <Card className="my-3 flex w-2/5 min-w-[30rem] flex-col">
            <CardHeader>
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col">
                  <CardTitle>{serviceClientRequest.serviceName}</CardTitle>
                  <CardDescription>com: wesleyA</CardDescription>
                </div>
                <div className="flex items-center justify-center">
                  <span className="text-sm">Status: {serviceClientRequest.status}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex items-end justify-between gap-5">
              <div className="flex flex-col items-start gap-2">
                <div className="flex w-full items-center justify-center gap-2 rounded-md border p-2">
                  <Hourglass className="h-5 w-5 text-primary" />
                  <span className="text-sm">{serviceClientRequest.duration} minutos</span>
                </div>
                <div className="flex w-full items-center justify-center gap-2 rounded-md border p-2">
                  <CalendarDays className="h-5 w-5 text-primary" />
                  <span className="text-sm">
                    {dayjs(serviceClientRequest.initDate).format('DD [de] MMMM [de] YYYY')}
                  </span>
                </div>
                <div className="flex w-full items-center justify-center gap-2 rounded-md border p-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="text-sm">
                    {dayjs(serviceClientRequest?.initDate).format('HH:mm')}h as{' '}
                  </span>
                  <span className="text-sm">
                    {dayjs(serviceClientRequest?.endDate).format('HH:mm')}h
                  </span>
                </div>
              </div>
              <Button asChild className="flex cursor-not-allowed">
                <Link to={''}>Entrar na reunião</Link>
              </Button>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );
};

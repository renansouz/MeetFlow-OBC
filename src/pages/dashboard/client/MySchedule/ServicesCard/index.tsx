import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import { CalendarDays, Clock, Hourglass } from 'lucide-react';
import { Link } from 'react-router-dom';

import { getRequestByPage } from '@/api';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { useAuth } from '@/context/auth-provider';

export const ServicesCard = () => {
  const { user } = useAuth();

  const { data: servicesClientRequest, isLoading: isLoadingServiceClientRequest } = useQuery({
    queryKey: ['servicesRequest', user?._id],
    queryFn: () => getRequestByPage({ createdById: user?._id, page: 1, status: 'confirmado' }),
    staleTime: Infinity,
    enabled: !!user?._id,
  });

  return (
    <div>
      {isLoadingServiceClientRequest ? (
        <Skeleton className="w-90% m-10 h-72 p-3" />
      ) : (
        servicesClientRequest?.requests?.map((serviceClientRequest) => (
          <Card className="m-10 p-3 max-xl:m-0 max-xl:mb-10 max-xl:p-0">
            <CardHeader>
              <div className="flex flex-row items-center justify-between">
                <div className="flex">
                  <CardTitle>{serviceClientRequest.serviceName}</CardTitle>
                </div>
                <div className="flex items-center justify-center max-lg:hidden">
                  <span>Status: {serviceClientRequest.status}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="mt-10 flex justify-between">
              <div className="flex gap-3 max-xl:flex-col">
                <Card className="flex h-12 items-center justify-center gap-2 rounded-md border-2 border-border px-4">
                  <Hourglass className="text-indigo-500" />
                  {serviceClientRequest.duration} minutos
                </Card>
                <Card className="flex h-12 items-center justify-center gap-2 rounded-md border-2 border-border px-4">
                  <CalendarDays className="text-indigo-500" />
                  {dayjs(serviceClientRequest.initDate).format('DD [de] MMMM [de] YYYY')}
                </Card>
                <Card className="flex h-12 items-center justify-center gap-2 rounded-md border-2 border-border px-4">
                  <Clock className="text-indigo-500" />
                  {dayjs(serviceClientRequest?.initDate).format('HH:mm')}h as{' '}
                  {dayjs(serviceClientRequest?.endDate).format('HH:mm')}h
                </Card>
              </div>
              <Button
                asChild
                className="hover:bg-indigo-80 max-mlg:text-base font-liht bg-indigo-700  text-lg"
                variant={'default'}
              >
                <Link to={''} className="px-6 max-xl:ml-2 max-xl:mt-16 max-xl:px-2">
                  Entrar na reunião
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );
};

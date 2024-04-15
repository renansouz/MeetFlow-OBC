import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { getServiceByPage, ServiceInResponse } from '@/api';
import { getProfile } from '@/api/user/get-profile';
import { ProfessionalService } from '@/components/professionalService';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { env } from '@/env';

import { ScheduleForm } from './ScheduleForm';

export function ProfessionalProfile() {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedService, setSelectedService] = useState<any | null>(null);

  const handleServiceClick = (service: ServiceInResponse) => {
    setSelectedService(service);
    setShowCalendar(true);
  };

  const { _id } = useParams();

  const { data: professional, isLoading: isLoadingProfile } = useQuery({
    queryKey: ['profile', _id],
    queryFn: () => getProfile({ _id }),
    staleTime: Infinity,
    enabled: !!_id,
  });

  const { data: services, isLoading: isLoadingService } = useQuery({
    queryKey: ['servicesProfile', _id],
    queryFn: () => getServiceByPage({ userId: _id, page: 1 }),
    staleTime: Infinity,
    enabled: !!_id,
  });

  console.log('services', services);

  return (
    <Card className="my-14 ml-[3%] w-[80%] min-w-[20rem] pb-10 max-xl:m-0 max-xl:w-full">
      <CardHeader className="h-32 w-full rounded-tl-md rounded-tr-md bg-indigo-300 pt-14 max-lg:rounded-none">
        <Avatar className="h-36 w-full rounded-full">
          {isLoadingProfile ? (
            <Skeleton className="h-36 w-36 rounded-full" />
          ) : professional?.photoUrl ? (
            professional?.photoUrl.includes('lh3.googleusercontent.com') ? (
              <AvatarImage
                className="ml-5 w-36 rounded-full border-4 border-background"
                src={professional.photoUrl}
              />
            ) : (
              <AvatarImage
                className="ml-5 w-36 rounded-full border-4 border-background"
                src={`${env.VITE_URL_R2CLOUDFLARE}${professional.photoUrl}`}
              />
            )
          ) : (
            <AvatarFallback className="ml-5 w-36 rounded-full border-4 border-background">
              {professional?.name.slice(0, 1)}
            </AvatarFallback>
          )}
        </Avatar>
      </CardHeader>
      <CardContent className="mt-20 flex w-full flex-col gap-y-2 border-b-2">
        <CardTitle className="ml-6 text-left text-xl font-bold " style={{ maxWidth: '600px' }}>
          {professional?.name}
        </CardTitle>
        <CardDescription className="ml-6 w-full font-light">
          {professional?.headLine}
        </CardDescription>
        <span className="ml-5 mt-3 font-bold text-indigo-600/90">
          + {professional?.appointmentsTotal} agendamentos
        </span>

        {/* SERVIÇOS */}
        <h2 className=" ml-10 mt-10 flex items-center justify-start text-3xl font-light max-md:mx-10">
          Serviços de {professional?.name}
        </h2>
        <div className="flex gap-x-5">
          {!showCalendar &&
            services &&
            (isLoadingService ? (
              <Skeleton className="m-10 h-64 w-[90%] p-3" />
            ) : (
              <ProfessionalService services={services} onServiceClick={handleServiceClick} />
            ))}
        </div>
      </CardContent>

      {/* CALENDÁRIO */}
      {showCalendar && (
        <>
          <h2 className="mb-10 mt-10 flex items-center justify-center text-3xl font-light max-md:mx-10">
            Escolha uma data para agendar com {professional?.name}
          </h2>
          <ScheduleForm selectedService={selectedService} />
        </>
      )}
    </Card>
  );
}

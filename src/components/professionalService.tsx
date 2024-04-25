import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Hourglass, Trash, WalletMinimal } from 'lucide-react';

import { deleteService, DeleteServiceInParams, GetServiceByPageResponse } from '@/api';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { convertMinutesToHours } from '@/utils/convertMinutesToHours';

import { AlertDialogContainer } from './clientAside/AlertDialogContainer';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';

interface ProfessionalServiceProps {
  services?: GetServiceByPageResponse;
  onServiceClick?: (service: any) => void;
}

export const ProfessionalService = ({ services, onServiceClick }: ProfessionalServiceProps) => {
  const queryClient = useQueryClient();

  const { mutateAsync: deleteServiceFn } = useMutation({
    mutationFn: ({ _id }: DeleteServiceInParams) => deleteService({ _id }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['servicesProfile'] });
    },
  });

  return (
    <>
      <Carousel className="mx-auto w-11/12 max-sm:mx-0">
        <CarouselContent>
          {services &&
            services?.services.map((service) => (
              <CarouselItem className="max-xl:basis-2/3 max-md:basis-full">
                <Card
                  className="group m-1 cursor-pointer border-primary hover:opacity-80"
                  onClick={() => onServiceClick && onServiceClick(service)}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between gap-x-3">
                      <CardTitle>{service.name}</CardTitle>
                      <div className="cursor-pointer items-center justify-center rounded-full bg-red-400 p-2 opacity-0 group-hover:opacity-100">
                        <AlertDialogContainer
                          triger={<Trash className="text-red-950" />}
                          alertMessage="Tem certeza que quer deletar este serviço?"
                          description={`Você está prestes a deletar o serviço ${service.name}. Esta ação é irreversível.`}
                          callback={() => deleteServiceFn({ _id: service._id })}
                        />
                      </div>
                    </div>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="my-4 flex justify-between">
                    <div className="flex gap-3">
                      <p className="flex items-center justify-center gap-2 rounded-md border border-primary px-3 py-2">
                        <Hourglass className="text-foreground" />
                        {convertMinutesToHours(service.duration)}
                      </p>
                      <p className="flex items-center justify-center gap-2 rounded-md border border-primary px-3 py-2">
                        <WalletMinimal className="text-foreground" /> R${service.price}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious className="max-sm:hidden" />
        <CarouselNext />
      </Carousel>
    </>
  );
};

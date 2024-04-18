import { Hourglass, Trash, WalletMinimal } from 'lucide-react';

import { GetServiceByPageResponse } from '@/api';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

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
  return (
    <>
      <Carousel className="mx-auto w-11/12">
        <CarouselContent>
          {services &&
            services?.services.map((service) => (
              <CarouselItem className="max-xl:basis-2/3 max-md:basis-full">
                <Card
                  className="group m-1 cursor-pointer border-indigo-900 hover:opacity-80"
                  onClick={() => onServiceClick && onServiceClick(service)}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between gap-x-3">
                      <CardTitle>{service.name}</CardTitle>
                      <div className="cursor-pointer items-center justify-center rounded-full bg-red-400 p-2 opacity-0 group-hover:opacity-100">
                        <Trash className="text-red-950 " />
                      </div>
                    </div>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="my-4 flex justify-between">
                    <div className="flex gap-3">
                      <p className="flex items-center justify-center gap-2 rounded-md border-2 border-indigo-900 px-3 py-2">
                        <Hourglass className="text-foreground" />
                        {service.duration} mins
                      </p>
                      <p className="flex items-center justify-center gap-2 rounded-md border-2 border-indigo-900 px-3 py-2">
                        <WalletMinimal className="text-foreground" /> R${service.price}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
};

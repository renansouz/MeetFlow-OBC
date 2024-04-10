import { DollarSign, Hourglass, LucideCalendarPlus, Star } from 'lucide-react';

import { GetServiceByPageResponse } from '@/api';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface ProfessionalServiceProps {
  services?: GetServiceByPageResponse;
  onServiceClick?: (service: any) => void;
}

export const ProfessionalService = ({ services, onServiceClick }: ProfessionalServiceProps) => {
  return (
    <>
      {services &&
        services?.services.map((service) => (
          <Card className="m-10 border-indigo-900 p-3">
            <CardHeader>
              <div className="flex items-center justify-between gap-x-3">
                <CardTitle>{service.name}</CardTitle>
                <div className="flex items-center justify-center">
                  <Star className="text-yellow-500" />
                  <Star className="text-yellow-500" />
                  <Star className="text-yellow-500" />
                  <Star className="text-yellow-500" />
                  <Star className="text-yellow-500" />
                  <span className="font-extralight">(10)</span>
                </div>
              </div>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
            <CardContent className="my-4 flex justify-between">
              <div className="flex gap-3">
                <p className="flex items-center justify-center gap-2 rounded-full border-2 border-indigo-900 px-4 py-3">
                  <Hourglass className="text-foreground" />
                  {service.duration} horas
                </p>
                <p className="flex items-center justify-center gap-2 rounded-full border-2 border-indigo-900 px-4 py-3">
                  <DollarSign className="text-foreground" /> R${service.price}
                </p>
              </div>
            </CardContent>

            <div className="flex justify-end">
              <Button
                onClick={() => onServiceClick && onServiceClick(service)}
                className="text-lg font-light"
                variant={'outline'}
              >
                <LucideCalendarPlus className="mr-3 h-5 w-5" />
                Agendar
              </Button>
            </div>
          </Card>
        ))}
    </>
  );
};

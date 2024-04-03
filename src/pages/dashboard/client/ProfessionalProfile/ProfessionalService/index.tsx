/* eslint-disable prettier/prettier */
import { DollarSign, Hourglass, LucideCalendarPlus, Star } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { GetServiceByPageResponse } from '@/api';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

interface ProfessionalServiceProps {
  services?: GetServiceByPageResponse; // Substitua ServiceType pelo tipo correto
  onServiceClick?: () => void;
}

export const ProfessionalService = ({ services, onServiceClick }: ProfessionalServiceProps) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading ? (
        <Skeleton className="m-10 h-64 w-[90%] p-3" />
      ) : (
        services &&
        services?.services.map((service) => (
          <Card className="m-10 p-3">
            <CardHeader>
              <div className="flex flex-row items-center justify-between">
                <div className="flex">
                  <CardTitle>{service.name}</CardTitle>
                </div>
                <div className="flex items-center justify-center">
                  <Star className="text-yellow-500" />
                  <Star className="text-yellow-500" />
                  <Star className="text-yellow-500" />
                  <Star className="text-yellow-500" />
                  <Star className="text-yellow-500" />
                  <span className="font-extralight">(10)</span>
                </div>
              </div>
              <CardDescription className="w-[80%]">{service.description}</CardDescription>
            </CardHeader>
            <CardContent className="mt-10 flex justify-between">
              <div className="flex gap-3">
                <Card className="flex items-center justify-center gap-2 rounded-full border-2 border-border px-4 py-3">
                  <Hourglass className="text-foreground" />
                  {service.duration} horas
                </Card>
                <Card className="flex items-center justify-center gap-2 rounded-full border-2 border-border px-4 py-3">
                  <DollarSign className="text-foreground" /> R${service.price}
                </Card>
              </div>

              <Button onClick={onServiceClick} asChild className="bg-indigo-700 text-lg font-light hover:bg-indigo-800" variant={'default'}>
                <Link to={''} className="px-6">
                  <LucideCalendarPlus className="mr-3 h-5 w-5" />
                  Agendar
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))
      )}
    </>
  );
};

import { AxiosError } from 'axios';
import dayjs from 'dayjs';
import { BriefcaseBusiness, CalendarCheck2, ContactRound, DollarSign, HourglassIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { userAPI } from '@/api/userAPI';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Skeleton } from '@/components/ui/skeleton';
import { CalendarProfessional } from './Calendar';
import { ProfessionalService } from './ProfessionalService';
import { Container, TimePicker, TimePickerHeader, TimePickerItem, TimePickerList } from './styles';
import { getProfile } from '@/api/get-profile';

interface Availability {
    possibleTimes: number[];
    availableTimes: number[];
}

export function ProfessionalProfile() {
    const { _id } = useParams();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timeout);
    }, []);

    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [availability, setAvailability] = useState<Availability>({
        possibleTimes: [9, 10, 11, 14, 15, 16, 17], // Horários disponíveis fictícios
        availableTimes: [9, 10, 14], // Horários disponíveis fictícios
    });

    const isDateSelected = !!selectedDate; // Aqui é utilizado para verificar se a data foi selecionada habilitando o TimePicker

    // Mostrar somente se o dia da semana estiver selecionado (SelectedDate) - Responsável por mostrar dia por escrito
    const weekDay = selectedDate ? dayjs(selectedDate).format('dddd') : null;
    const describedDate = selectedDate ? dayjs(selectedDate).format('DD[ de ]MMMM') : null;

    const selectedDateWithoutTime = selectedDate ? dayjs(selectedDate).format('YYYY-MM-DD') : null;

    const onSelectDateTime = (param: Date) =>
        void function handleSelectTime(hour: number) {
            const dateWithTime = new Date(selectedDate!);
            dateWithTime.setHours(hour);
            onSelectDateTime(dateWithTime);
        };

    useEffect(() => {
        async function getProfileData() {
            try {
                const profile = await getProfile( _id );
                console.log('Profile data:', profile);
            } catch (error) {
                if (error instanceof AxiosError) {
                    console.log(error.message);
                }
            }
        }

        getProfileData();
    }, []);

    return (
        <Card className="my-16 ml-[6%] w-[70%] min-w-[20rem] pb-10 max-xl:m-0 max-xl:w-full">
            <CardHeader className="h-32 w-full rounded-tl-md rounded-tr-md bg-indigo-300 pt-14 max-lg:rounded-none">
                <Avatar className="h-36 w-full rounded-full">
                    <AvatarImage src="https://github.com/renansouz.png" className="ml-5 w-36 rounded-full border-4 border-background" />
                    <AvatarFallback className="ml-5 w-36 rounded-full border-4 border-background">CN</AvatarFallback>
                </Avatar>
            </CardHeader>
            <CardContent className="mt-20 flex w-full flex-col gap-y-2 border-b-2">
                <CardTitle className="ml-6 text-left font-bold " style={{ maxWidth: '600px' }}>
                    {}
                </CardTitle>
                <CardDescription className="ml-6 w-full font-light">Olá me chamo Renan, caso queira aprender tailwind, agende uma reunião comigo!</CardDescription>
                <span className="ml-5 mt-3 font-bold text-indigo-600/90">+ 10 agendamentos</span>
            </CardContent>
            {/* SERVIÇOS */}
            <ProfessionalService />
            {/* calendário */}
            <h2 className="mb-10 mt-10 flex items-center justify-center font-light max-md:mx-10">Escolha uma data para agendar com Renan</h2>
            <Container isTimePickerOpen={isDateSelected}>
                {loading ? (
                    <Skeleton className="z-0 mx-2 h-[40rem] w-[40rem] gap-y-12 rounded-[2rem]" />
                ) : (
                    <CalendarProfessional selectedDate={selectedDate} onDateSelected={setSelectedDate} />
                )}

                {isDateSelected && (
                    <TimePicker>
                        <TimePickerHeader>
                            {weekDay} <span>{describedDate}</span>
                        </TimePickerHeader>
                        <TimePickerList>
                            {availability.possibleTimes.map((hour) => (
                                <TimePickerItem key={hour} onClick={() => handleSelectTime(hour)} disabled={!availability.availableTimes.includes(hour)}>
                                    {String(hour).padStart(2, '0')}:00h
                                </TimePickerItem>
                            ))}
                        </TimePickerList>
                        <Dialog>
                            <DialogTrigger>
                                <Button className="flex w-full p-2">Solicitar Agendamento</Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader className="gap-1">
                                    <DialogTitle className="text-xl font-bold">Confirmação de Agendamento</DialogTitle>
                                    <DialogDescription className="border-b-2 pb-5">Por favor, confirme os detalhes do seu agendamento antes de prosseguir.</DialogDescription>
                                    <DialogHeader className="m-6 flex flex-col gap-4 py-5 text-lg">
                                        <div className="flex justify-between gap-4 border-b-2 pb-4">
                                            <ContactRound className="text-foreground" />
                                            <span className="w-1/2 font-bold">Profissional:</span>
                                            <span className="w-1/2">Renan</span>
                                        </div>
                                        <div className="flex justify-between gap-4 border-b-2 pb-4">
                                            <BriefcaseBusiness className="text-foreground" />
                                            <span className="w-1/2 font-bold">Serviço:</span>
                                            <span className="w-1/2">Tailwind</span>
                                        </div>
                                        <div className="flex justify-between gap-4 border-b-2 pb-4">
                                            <HourglassIcon className="text-foreground" />
                                            <span className="w-1/2 font-bold">Duração:</span>
                                            <span className="w-1/2">2 Horas</span>
                                        </div>
                                        <div className="flex justify-between gap-4 border-b-2 pb-4">
                                            <CalendarCheck2 className="text-foreground" />
                                            <span className="w-1/2 font-bold">Data e Hora:</span>
                                            <span className="w-1/2">11/04/2024 ás 11:11</span>
                                        </div>
                                        <div className="flex justify-between gap-4 border-b-2 pb-4">
                                            <DollarSign className="text-foreground" />
                                            <span className="w-1/2 font-bold">Valor:</span>
                                            <span className="w-1/2">R$100</span>
                                        </div>
                                    </DialogHeader>
                                    <div className="m-10 flex justify-between">
                                        <Button variant={'destructive'}>Não confirmar</Button>
                                        <Button variant={'success'}>confirmar</Button>
                                    </div>
                                </DialogHeader>
                            </DialogContent>
                        </Dialog>
                    </TimePicker>
                )}
            </Container>
        </Card>
    );
}

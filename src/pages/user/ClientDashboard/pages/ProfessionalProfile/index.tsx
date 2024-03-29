import dayjs from 'dayjs';
import { BriefcaseBusiness, CalendarCheck2, ContactRound, DollarSign, HourglassIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Skeleton } from '@/components/ui/skeleton';

import { CalendarProfessional } from './Calendar';
import { ProfessionalService } from './ProfessionalService';
import { Container, TimePicker, TimePickerHeader, TimePickerItem, TimePickerList } from './styles';

interface Availability {
    possibleTimes: number[];
    availableTimes: number[];
}

export function ProfessionalProfile() {
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

    function handleSelectTime(hour: number) {
        const dateWithTime = new Date(selectedDate!);
        dateWithTime.setHours(hour);
        onSelectDateTime(dateWithTime);
    }
    return (
        <Card className="w-[70%] min-w-[20rem] ml-[6%] my-16 pb-10 max-xl:w-full max-xl:m-0">
            <CardHeader className="bg-indigo-300 h-32 rounded-tl-md rounded-tr-md w-full pt-14 max-lg:rounded-none">
                <Avatar className="w-full rounded-full h-36">
                    <AvatarImage src="https://github.com/renansouz.png" className="ml-5 border-4 border-background rounded-full w-36" />
                    <AvatarFallback className="ml-5 border-4 border-background rounded-full w-36">CN</AvatarFallback>
                </Avatar>
            </CardHeader>
            <CardContent className="flex flex-col mt-20 w-full gap-y-2 border-b-2">
                <CardTitle className="text-left font-bold ml-6 " style={{ maxWidth: '600px' }}>
                    RENAN DE SOUZA SILVA
                </CardTitle>
                <CardDescription className="font-light w-full ml-6">Olá me chamo Renan, caso queira aprender tailwind, agende uma reunião comigo!</CardDescription>
                <span className="font-bold mt-3 ml-5 text-indigo-600/90">+ 10 agendamentos</span>
            </CardContent>
            {/* SERVIÇOS */}
            <ProfessionalService />
            {/* calendário */}
            <h2 className="mt-10 flex justify-center items-center text-2xl max-lg:text-xl max-md:text-lg max-md:mx-10 mb-10 font-light">Escolha uma data para agendar com Renan</h2>
            <Container isTimePickerOpen={isDateSelected}>
                {loading ? (
                    <Skeleton className="mx-2 w-[40rem] h-[40rem] rounded-[2rem] z-0 gap-y-12" />
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
                                <Button className="p-2 flex w-full">Solicitar Agendamento</Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader className="gap-1">
                                    <DialogTitle className="text-xl font-bold">Confirmação de Agendamento</DialogTitle>
                                    <DialogDescription className="border-b-2 pb-5">Por favor, confirme os detalhes do seu agendamento antes de prosseguir.</DialogDescription>
                                    <DialogHeader className="text-lg flex flex-col m-6 gap-4 py-5">
                                        <div className="flex justify-between gap-4 border-b-2 pb-4">
                                            <ContactRound className="text-foreground" />
                                            <span className="w-1/2 text-xl font-bold">Profissional:</span>
                                            <span className="w-1/2 text-xl">Renan</span>
                                        </div>
                                        <div className="flex justify-between gap-4 border-b-2 pb-4">
                                            <BriefcaseBusiness className="text-foreground" />
                                            <span className="w-1/2 text-xl font-bold">Serviço:</span>
                                            <span className="w-1/2 text-xl">Tailwind</span>
                                        </div>
                                        <div className="flex justify-between gap-4 border-b-2 pb-4">
                                            <HourglassIcon className="text-foreground" />
                                            <span className="w-1/2 text-xl font-bold">Duração:</span>
                                            <span className="w-1/2 text-xl">2 Horas</span>
                                        </div>
                                        <div className="flex justify-between gap-4 border-b-2 pb-4">
                                            <CalendarCheck2 className="text-foreground" />
                                            <span className="w-1/2 text-xl font-bold">Data e Hora:</span>
                                            <span className="w-1/2 text-xl">11/04/2024 ás 11:11</span>
                                        </div>
                                        <div className="flex justify-between gap-4 border-b-2 pb-4">
                                            <DollarSign className="text-foreground" />
                                            <span className="w-1/2 text-xl font-bold">Valor:</span>
                                            <span className="w-1/2 text-xl">R$100</span>
                                        </div>
                                    </DialogHeader>
                                    <div className="flex justify-between m-10">
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

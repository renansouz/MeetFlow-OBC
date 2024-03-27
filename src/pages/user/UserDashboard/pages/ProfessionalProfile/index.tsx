import { Avatar } from '@radix-ui/react-avatar';
import dayjs from 'dayjs';
import { DollarSign, Hourglass, LucideCalendarPlus, Star } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { CalendarProfessional } from '@/pages/user/UserDashboard/pages/ProfessionalProfile/Calendar';

import { ProfessionalService } from './ProfessionalService';
import { Container, TimePicker, TimePickerHeader, TimePickerItem, TimePickerList } from './styles';

interface Availability {
    possibleTimes: number[];
    availableTimes: number[];
}

export function ProfessionalProfile() {
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
                <Avatar>
                    <AvatarImage src="https://github.com/renansouz.png" className="ml-5 border-4 border-slate-950 rounded-full w-36" />
                    <AvatarFallback className="ml-5 border-4 border-slate-950 rounded-full w-36">CN</AvatarFallback>
                </Avatar>
            </CardHeader>
            <CardContent className="flex flex-col mt-20 w-full gap-y-2 border-b-2">
                <CardTitle className="text-left font-bold ml-6 " style={{ maxWidth: '600px' }}>
                    RENAN DE SOUZA SILVA
                </CardTitle>
                <CardDescription className="font-light w-full ml-6">Olá me chamo Renan, caso queira aprender tailwind, agende uma reunião comigo!</CardDescription>
                <span className="font-bold mt-3 ml-5 text-indigo-300">+ 10 agendamentos</span>
            </CardContent>

            {/* SERVIÇOS */}
            <Card className="bg-slate-900 p-3 m-10">
                <CardHeader>
                    <div className="flex justify-between items-center flex-row">
                        <div className="flex">
                            <CardTitle>Responsividade em Tailwind</CardTitle>
                        </div>
                        <div className="flex">
                            <Star className="text-yellow-500" />
                            <Star className="text-yellow-500" />
                            <Star className="text-yellow-500" />
                            <Star className="text-yellow-500" />
                            <Star className="text-yellow-500" />
                            <span className="font-extralight">(10)</span>
                        </div>
                    </div>
                    <CardDescription className="w-[80%]">
                        especialista em Tailwind. Entre em contato para agendar sua primeira aula e leve seus projetos web para o próximo nível
                    </CardDescription>
                </CardHeader>
                <CardContent className="flex justify-between mt-10">
                    <div className="flex gap-3">
                        <Card className="border-slate-600 border-2 px-4 py-3 flex items-center justify-center rounded-full gap-2">
                            <Hourglass className="text-indigo-300" />2 horas
                        </Card>
                        <Card className="border-slate-600 border-2 px-4 py-3 flex items-center justify-center rounded-full gap-2">
                            <DollarSign className="text-indigo-300" /> R$100,00
                        </Card>
                    </div>

                    <Dialog>
                        <DialogTrigger className="px-6 h-11 flex justify-center items-center bg-indigo-700 hover:bg-indigo-800 rounded-lg">
                            <LucideCalendarPlus className="w-5 h-5 mr-3" />
                            <span className="font-light text-xl">Agendar</span>
                        </DialogTrigger>
                        <DialogContent className="w-max[90rem]">
                            <DialogHeader className="flex flex-col ">
                                <DialogTitle>Agendamento</DialogTitle>
                                <DialogDescription>Escolha uma data para agendar com Renan</DialogDescription>
                                <Container className="max-w-5" isTimePickerOpen={isDateSelected}>
                                    <CalendarProfessional selectedDate={selectedDate} onDateSelected={setSelectedDate} />
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
                                            <Button className="p-2 m-5 flex ml-[32%]">Pagar agora</Button>
                                        </TimePicker>
                                    )}
                                </Container>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                </CardContent>
            </Card>
            <ProfessionalService />

            {/* CALENDARIO PRONTO
                <h2 className="mt-10 flex justify-center items-center text-2xl max-lg:text-xl max-md:text-lg max-md:mx-10 mb-10 font-light">Escolha uma data para agendar com Renan</h2>

                <Container isTimePickerOpen={isDateSelected}>
                    <CalendarProfessional selectedDate={selectedDate} onDateSelected={setSelectedDate} />
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
                        </TimePicker>
                    )}
                </Container> */}
        </Card>
    );
}

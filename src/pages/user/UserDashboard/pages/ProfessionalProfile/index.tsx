import { Avatar } from '@radix-ui/react-avatar';
import dayjs from 'dayjs';
import { useState } from 'react';

import { AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarProfessional } from '@/pages/user/UserDashboard/pages/ProfessionalProfile/Calendar';

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
        <>
            <Card className="w-[80%] ml-28 my-16 pb-10">
                <CardHeader className="bg-indigo-300 h-32 rounded-tl-md rounded-tr-md w-full pt-14">
                    <Avatar>
                        <AvatarImage src="https://github.com/renansouz.png" className="ml-5 border-4 border-slate-950 rounded-full w-36" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </CardHeader>
                <CardContent className="flex flex-col mt-20 w-full gap-y-2 ml-5">
                    <CardTitle className="text-left font-bold " style={{ maxWidth: '200px' }}>
                        RENAN DE SOUZA
                    </CardTitle>
                    <CardDescription className="font-light w-full">Olá me chamo Renan, caso queira aprender tailwind, agende uma reunião comigo!</CardDescription>
                    <span>+ 10 agendamentos</span>
                    <span className="mt-6 ">{}</span>
                </CardContent>
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
                </Container>
            </Card>
        </>
    );
}

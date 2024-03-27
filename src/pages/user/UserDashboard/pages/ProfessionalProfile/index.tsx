import { Avatar } from '@radix-ui/react-avatar';
import dayjs from 'dayjs';
import { useState } from 'react';

import { AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
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
        <>
            <Card className="w-[70%] max-xl:h-[120%] h-[72rem] min-w-[20rem] ml-[6%] my-16 pb-10 max-xl:w-full max-xl:m-0">
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
                <ProfessionalService />
                <ProfessionalService />
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
        </>
    );
}

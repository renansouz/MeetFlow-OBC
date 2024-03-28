import dayjs from 'dayjs';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useMemo, useState } from 'react';

import { getWeekDays } from '@/utils/get-week-day';

import { CalendarActions, CalendarBody, CalendarContainer, CalendarDay, CalendarHeader, CalendarTitle } from './styles';

interface CalendarWeek {
    week: number;
    days: Array<{
        date: dayjs.Dayjs;
        disabled: boolean;
    }>;
}

type CalendarWeeks = CalendarWeek[];

interface BlockedDates {
    blockedWeekDays: number[];
    blockedDates: number[];
}

interface CalendarProps {
    selectedDate: Date | null;
    onDateSelected: (date: Date) => void;
}

export function CalendarProfessional({ selectedDate, onDateSelected }: CalendarProps) {
    const [blockedDates, setBlockedDates] = useState<BlockedDates>({ blockedWeekDays: [1, 2], blockedDates: [1, 2] });

    // Referente aos meses do ano
    const [currentDate, setCurrentDate] = useState(() => {
        return dayjs().set('date', 1);
    });

    function handlePreviousMonth() {
        const previousMonth = currentDate.subtract(1, 'month'); // Subtrai 1 mês da data atual

        setCurrentDate(previousMonth);
    }

    function handleNextMonth() {
        const nextMonth = currentDate.add(1, 'month'); // Adiciona 1 mês da data atual

        setCurrentDate(nextMonth);
    }

    const shortWeekDays = getWeekDays({ short: true });

    const currentMonth = currentDate.format('MMMM');
    const currentYear = currentDate.format('YYYY');

    //   const { data: blockedDates } = useQuery<BlockedDates>({ // Chamada que bloqueia os dias da semana
    //     queryKey: ['blocked-dates', currentDate.get('year'), currentDate.get('month')],
    //     queryFn: async () => {
    //       const response = await api.get(`/users/${username}/blocked-dates`, {
    //         params: {
    //           year: currentDate.get('year'),
    //           month: currentDate.get('month') + 1,
    //         },
    //       })

    //       return response.data
    //     },
    //     })

    // Referente aos dias da semana
    const calendarWeeks = useMemo(() => {
        // useMemo é utilizado para evitar que a função seja executada toda vez que o componente for renderizado
        if (!blockedDates) {
            return [];
        }

        console.log('calendarWeeks ~ blockedDates', blockedDates);

        const daysInMonthArray = Array.from({
            length: currentDate.daysInMonth(), // daysInMonth() retorna o número de dias do mês
        }).map((_, i) => {
            return currentDate.set('date', i + 1);
        });

        const firstWeekDay = currentDate.get('day');

        const previousMonthFillArray = Array.from({
            // O dia da semana sempre me retorna o que falta para preencher a linha
            length: firstWeekDay,
        })
            .map((_, i) => {
                return currentDate.subtract(i + 1, 'day');
            })
            .reverse();

        const lastDayInCurrentMonth = currentDate.set(
            // pegando o último dia do mês
            'date',
            currentDate.daysInMonth()
        );
        const lastWeekDay = lastDayInCurrentMonth.get('day');

        const nextMonthFillArray = Array.from({
            length: 7 - (lastWeekDay + 1),
        }).map((_, i) => {
            return lastDayInCurrentMonth.add(i + 1, 'day');
        });

        const calendarDays = [
            // Pegando todos os dias do mes e formatando eles
            ...previousMonthFillArray.map((date) => {
                return { date, disabled: true };
            }),
            ...daysInMonthArray.map((date) => {
                return {
                    date,
                    disabled:
                        date.endOf('day').isBefore(new Date()) || // Verificando se o dia já passou - endOf('day') retorna o final do dia - isBefore() verifica se a data é antes da data passada
                        blockedDates.blockedWeekDays.includes(date.get('day')) || // Verificando se o dia da semana está disponível para atendimento
                        blockedDates.blockedDates.includes(date.get('date')),
                };
            }),
            ...nextMonthFillArray.map((date) => {
                return { date, disabled: true };
            }),
        ];

        const calendarWeeks = calendarDays.reduce<CalendarWeeks>((weeks, _, i, original) => {
            // Calculando as semanas do mês
            const isNewWeek = i % 7 === 0; // Verificando se é uma nova semana - Se cheguei ne um numero divisível por 7

            if (isNewWeek) {
                weeks.push({
                    week: i / 7 + 1,
                    days: original.slice(i, i + 7),
                });
            }

            return weeks;
        }, []);

        return calendarWeeks;
    }, [currentDate, blockedDates]);

    return (
        <CalendarContainer>
            <CalendarHeader>
                <CalendarActions>
                    <button onClick={handlePreviousMonth} title="Previous month">
                        <ChevronLeft />
                    </button>
                    <CalendarTitle>
                        {currentMonth} <span>{currentYear}</span>
                    </CalendarTitle>
                    <button onClick={handleNextMonth} title="Next month" className="border-2">
                        <ChevronRight />
                    </button>
                </CalendarActions>
            </CalendarHeader>

            <CalendarBody>
                <thead>
                    <tr>
                        {shortWeekDays.map((weekDay) => (
                            <th key={weekDay}>{weekDay}.</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {calendarWeeks.map(({ week, days }) => {
                        return (
                            <tr key={week}>
                                {days.map(({ date, disabled }) => {
                                    return (
                                        <td key={date.toString()}>
                                            <CalendarDay onClick={() => onDateSelected(date.toDate())} disabled={disabled}>
                                                {date.get('date')}
                                            </CalendarDay>
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </CalendarBody>
        </CalendarContainer>
    );
}

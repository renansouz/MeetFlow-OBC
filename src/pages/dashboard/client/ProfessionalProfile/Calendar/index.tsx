import { Avatar, AvatarImage } from '@radix-ui/react-avatar';
import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import { ArrowLeft, ChevronLeft, ChevronRight, Clock, Phone, Wallet2 } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getProfile, getSchedule, ServiceInResponse } from '@/api';
import { AvatarFallback } from '@/components/ui/avatar';
import { Skeleton } from '@/components/ui/skeleton';
import { env } from '@/env';
import { getWeekDays } from '@/utils/get-week-day';

import {
  CalendarActions,
  CalendarBody,
  CalendarContainer,
  CalendarDay,
  CalendarHeader,
  CalendarTitle,
} from './styles';

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
  serviceSelected: ServiceInResponse;
  onDateSelected: (date: Date) => void;
}

export function CalendarProfessional({ onDateSelected, serviceSelected }: CalendarProps) {
  const { scheduleId } = useParams();
  const [blockedDates, setBlockedDates] = useState<BlockedDates>({
    blockedWeekDays: [],
    blockedDates: [], // Bloquear dias específicos
  });

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

  const { data: schedule, isLoading: isLoadingSchedule } = useQuery({
    queryKey: ['schedule', scheduleId],
    queryFn: () => getSchedule({ _id: scheduleId }),
    staleTime: Infinity,
    enabled: !!scheduleId,
  });

  const { data: professional, isLoading: isLoadingProfile } = useQuery({
    queryKey: ['profile', schedule?.createdById],
    queryFn: () => getProfile({ _id: schedule?.createdById }),
    staleTime: Infinity,
    enabled: !!schedule,
  });

  console.log('schedule', schedule);

  function mapDaysToBlockedWeekDays(schedule: any): number[] {
    const weekDays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const blockedWeekDays: number[] = [];

    const days1 = schedule.days1;
    for (let i = 0; i < weekDays.length; i++) {
      const day = weekDays[i] + '1';
      if (days1[day] === false) {
        blockedWeekDays.push(i);
      }
    }

    return blockedWeekDays;
  }

  // Referente aos dias da semana
  const calendarWeeks = useMemo(() => {
    // useMemo é utilizado para evitar que a função seja executada toda vez que o componente for renderizado
    if (!blockedDates) {
      return [];
    }

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

  useEffect(() => {
    if (schedule) {
      const blockedWeekDays = mapDaysToBlockedWeekDays(schedule);
      setBlockedDates({ ...blockedDates, blockedWeekDays });
    }
  }, [schedule]);
  return (
    <div className="ml-5 flex w-4/5 rounded-3xl border bg-card shadow-xl">
      <div className="ml-5 flex h-full min-w-[15rem] flex-col">
        <div className="mb-5 mt-10 flex items-center justify-start gap-2">
          <div className="flex w-full cursor-pointer items-center justify-start gap-2 rounded-md p-2 hover:bg-primary/10">
            <div>
              <ArrowLeft />
            </div>
            <Avatar>
              {isLoadingProfile ? (
                <Skeleton className="h-36 w-36 rounded-full" />
              ) : professional?.photoUrl ? (
                professional?.photoUrl.includes('lh3.googleusercontent.com') ? (
                  <AvatarImage className="w-9 rounded-full" src={professional.photoUrl} />
                ) : (
                  <AvatarImage
                    className="w-9 rounded-full"
                    src={`${env.VITE_URL_R2CLOUDFLARE}${professional.photoUrl}`}
                  />
                )
              ) : (
                <AvatarFallback className="w-9 rounded-full">
                  {professional?.name.slice(0, 1)}
                </AvatarFallback>
              )}
            </Avatar>
            <span>{professional?.name}</span>
          </div>
        </div>
        <span className="text-lg font-bold">{serviceSelected.name}</span>
        <div className="my-5 flex items-center gap-3">
          <Clock className="h-5 w-5" />
          <span className="text-sm">{serviceSelected.duration} mins</span>
        </div>
        <div className="mb-5 flex items-center gap-3">
          <Wallet2 className="h-5 w-5" />
          <span className="text-sm">R$ {serviceSelected.price}</span>
        </div>
        <div className="flex items-center gap-3">
          <Phone className="h-5 w-5" />
          <span className="text-sm">Cal Video</span>
        </div>
      </div>
      <div className="flex h-full items-center justify-end">
        <CalendarContainer>
          {isLoadingSchedule ? (
            <Skeleton className="h-80 w-80" />
          ) : (
            <>
              <CalendarHeader>
                <CalendarActions>
                  <button onClick={handlePreviousMonth} title="Previous month">
                    <ChevronLeft />
                  </button>
                  <CalendarTitle>
                    {currentMonth} <span>{currentYear}</span>
                  </CalendarTitle>
                  <button onClick={handleNextMonth} title="Next month">
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
                              <CalendarDay
                                onClick={() => onDateSelected(date.toDate())}
                                disabled={disabled}
                              >
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
            </>
          )}
        </CalendarContainer>
      </div>
    </div>
  );
}

import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import utc from 'dayjs-plugin-utc';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { getAppointmentLoadAvailableTimes, ServiceInResponse } from '@/api';

import { CalendarProfessional } from '../../Calendar';
import { Container, TimePicker, TimePickerHeader, TimePickerItem, TimePickerList } from './styles';

dayjs.extend(utc);
interface CalendarStepProps {
  onSelectDateTime: (date: Date) => void;
  serviceSelected: ServiceInResponse;
}

export function CalendarStep({ onSelectDateTime, serviceSelected }: CalendarStepProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const isDateSelected = !!selectedDate; // Aqui é utilizado para verificar se a data foi selecionada habilitando o TimePicker

  // Mostrar somente se o dia da semana estiver selecionado (SelectedDate) - Responsável por mostrar dia por escrito
  const weekDay = selectedDate ? dayjs(selectedDate).format('dddd') : null;
  const describedDate = selectedDate ? dayjs(selectedDate).format('DD[ de ]MMMM') : null;
  const selectedDateWithoutTime = selectedDate ? dayjs(selectedDate).format('YYYY-MM-DD') : null;
  const { scheduleId } = useParams();

  const { data: availability } = useQuery<any>({
    queryKey: ['availability', selectedDateWithoutTime || serviceSelected._id],
    queryFn: () =>
      getAppointmentLoadAvailableTimes({
        serviceId: serviceSelected._id,
        scheduleId: scheduleId!,
        date: selectedDateWithoutTime!,
      }),
    enabled: !!selectedDate && !!scheduleId,
  });

  function handleSelectTime(hour: number) {
    const dateWithTime = dayjs
      .utc(selectedDate) // Objeto que tem a data selecionada juntamente com o horário
      .set('hour', hour)
      .startOf('hour')
      .toDate();
    onSelectDateTime(dateWithTime); // Função que recebe a data PARA O COMPONENTE PAI
  }

  return (
    <Container isTimePickerOpen={isDateSelected}>
      <CalendarProfessional selectedDate={selectedDate} onDateSelected={setSelectedDate} />
      {isDateSelected && (
        <TimePicker>
          <TimePickerHeader>
            {weekDay} {''} {describedDate}
          </TimePickerHeader>

          <TimePickerList>
            {availability?.timeAvailable.map((item: { time: string }) => {
              const time = dayjs(item.time);
              const hour = dayjs(item.time).hour();
              const minute = time.minute();
              const key = `${hour}:${minute}`;
              return (
                <TimePickerItem key={key} onClick={() => handleSelectTime(hour)}>
                  {String(hour).padStart(2, '0')}:{String(minute).padStart(2, '0')}h
                </TimePickerItem>
              );
            })}
          </TimePickerList>
        </TimePicker>
      )}
    </Container>
  );
}

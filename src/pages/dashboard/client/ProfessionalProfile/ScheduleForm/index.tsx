import { useState } from 'react';

import { ServiceInResponse } from '@/api';

import { CalendarStep } from './CalendarStep';
import { ConfirmStep } from './ConfirmStep';

interface ScheduleFormProps {
  selectedService: ServiceInResponse | null;
  onBackClick: () => void;
}

export const ScheduleForm = ({ selectedService, onBackClick }: ScheduleFormProps) => {
  const [selectedDateTime, setSelectedDateTime] = useState<Date | null>();

  function handleClearSelectedDateTime() {
    setSelectedDateTime(null);
  }

  if (selectedDateTime) {
    return (
      <ConfirmStep
        serviceSelected={selectedService!} // Serviço que vem do ProfessionalProfile
        schedulingDate={selectedDateTime} // Data que vem do CalendarStep
        onCancelConfirmation={handleClearSelectedDateTime}
      />
    );
  }

  return (
    <CalendarStep
      serviceSelected={selectedService!} // Serviço que vem do ProfessionalProfile
      onSelectDateTime={setSelectedDateTime}
      onBackClick={onBackClick}
    />
  );
};

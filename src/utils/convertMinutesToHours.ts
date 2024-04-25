export const convertMinutesToHours = (minutes: number) => {
  if (minutes < 60) {
    return `${minutes} minutos`;
  } else {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    if (remainingMinutes > 0) {
      return `${hours} hora${hours > 1 ? 's' : ''} e ${remainingMinutes} minutos`;
    } else {
      return `${hours} hora${hours > 1 ? 's' : ''}`;
    }
  }
};

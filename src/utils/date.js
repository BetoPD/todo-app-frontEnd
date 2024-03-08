import { format } from 'date-fns';

export function getDate() {
  const currentDate = new Date();
  return format(currentDate, 'yyyy-MM-dd');
}


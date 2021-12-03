export const filterByTime = (date: Date, type: string) => {
  const DAY = 24 * 60 * 60 * 1000;
  const WEEK = 7 * 24 * 60 * 60 * 1000;
  const now = new Date();
  const today = new Date().setHours(0, 0, 0, 0);

  switch (type) {
    case 'today':
      return today === new Date(date.getTime()).setHours(0, 0, 0, 0);
    case 'yesterday':
      return today === new Date(date.getTime()).setHours(0, 0, 0, 0) + DAY;
    case 'week':
      return today < new Date(date.getTime()).setHours(0, 0, 0, 0) + WEEK;
    case 'month':
      return now.getMonth() === date.getMonth() && now.getFullYear() === date.getFullYear();
    case 'lastMonth':
      return now.getMonth() - 1 === date.getMonth() && now.getFullYear() === date.getFullYear();
    default:
      return true;
  }
};

export const filterByNum = (str: string, type: string) => str.includes(type);

export const filterByDuration = (duration: number, type: string) => {
  switch (type) {
    case '1':
      return duration < 60 * 1;
    case '3':
      return duration < 60 * 3;
    case '5':
      return duration < 60 * 5;
    case '10':
      return duration < 60 * 10;
    default:
      return true;
  }
};

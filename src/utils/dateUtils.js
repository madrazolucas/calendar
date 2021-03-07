import moment from 'moment';

export function getWeekdays() {
  const weekdayLongName = moment.weekdays();
  const weekdayShortName = moment.weekdaysShort();

  return weekdayLongName.map((day, index) => ({
    longName: day,
    shortName: weekdayShortName[index],
  }));
}

export function getMonthYearDateText(date) {
  return {
    month: moment(date).format('MMMM'),
    year: moment(date).year(),
  };
}

export function getCurrentDate() {
  const currentDate = moment();
  const { month, year } = getMonthYearDateText(currentDate);

  return {
    date: currentDate,
    month,
    year,
  };
}

export function getNextMonthDate(date) {
  return moment(date).add(1, 'months');
}

export function getPreviousMonthDate(date) {
  return moment(date).subtract(1, 'months');
}

export default {
  getWeekdays,
  getCurrentDate,
  getMonthYearDateText,
};

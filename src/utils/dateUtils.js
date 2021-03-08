import moment from 'moment';
import { DAYS_IN_WEEK } from '../constants';

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

export function getCurrentMonthCalendarizableDays(date) {
  const baseDate = moment(date);
  const month = Number(baseDate.format('M'));
  const year = Number(baseDate.format('YYYY'));

  const amountOfDays = baseDate.daysInMonth() + 1;
  const weekdayOfFirstDayOfCurrentMonth = Number(
    baseDate.startOf('month').day()
  );
  const lastDayOfPreviousMonth = Number(
    getPreviousMonthDate(baseDate).endOf('month').format('D')
  );

  let lastMonthDays = [];
  if (weekdayOfFirstDayOfCurrentMonth > 0) {
    lastMonthDays = [...Array(weekdayOfFirstDayOfCurrentMonth)]
      .map((_, index) => ({
        isEnabled: false,
        number: lastDayOfPreviousMonth - index,
      }))
      .reverse();
  }

  const currentMonthDays = [...Array(amountOfDays).keys()].map((day) => ({
    number: day,
    isEnabled: true,
    month,
    year,
  }));
  currentMonthDays.shift();

  const calendarDays = lastMonthDays.concat(currentMonthDays);

  const nextMonthAmount = DAYS_IN_WEEK - (calendarDays.length % DAYS_IN_WEEK);
  const nextMonthDays = [...Array(nextMonthAmount).keys()].map((day) => ({
    number: day + 1,
    isEnabled: false,
  }));

  return calendarDays.concat(nextMonthDays);
}

export function buildMomentDateFromString({ date, time }) {
  const dateValue = `${date.day}-${date.month}-${date.year} ${time.hour}:${time.minutes}`;

  console.log(dateValue);
  console.log(moment(dateValue, 'D-M-YYYY HH:mm'));

  return moment(dateValue, 'D-M-YYYY HH:mm');
}

export function buildCurrentTimeMomentDateFromString({ date }) {
  const hour = moment().format('HH');
  const minutes = moment().format('mm');
  return buildMomentDateFromString({ date, time: { hour, minutes } });
}

export default {
  buildCurrentTimeMomentDateFromString,
  buildMomentDateFromString,
  getWeekdays,
  getCurrentDate,
  getMonthYearDateText,
  getCurrentMonthCalendarizableDays,
};

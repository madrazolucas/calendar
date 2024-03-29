import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import WeekDaysHeader from '../WeekDaysHeader';
import CalendarDay from '../CalendarDay';
import { getCurrentMonthCalendarizableDays } from '../../utils/dateUtils';
import { CALENDAR_ROW_HEIGHT, DAYS_IN_WEEK } from '../../constants';

const getCalendarRowHeight = (daysAmount) => {
  switch (daysAmount / DAYS_IN_WEEK) {
    case 4:
      return CALENDAR_ROW_HEIGHT.LARGE;

    case 5:
      return CALENDAR_ROW_HEIGHT.MEDIUM;

    case 6:
      return CALENDAR_ROW_HEIGHT.SMALL;

    default:
      return CALENDAR_ROW_HEIGHT.MEDIUM;
  }
};

const CalendarGrid = ({ date }) => {
  const calendarDays = getCurrentMonthCalendarizableDays(date);
  const rowHeight = getCalendarRowHeight(calendarDays.length);

  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      justify="center"
      spacing={0}
    >
      <WeekDaysHeader />
      {calendarDays.map((day) => (
        <CalendarDay
          key={`${day.number}.${day.month}.${day.year}`}
          day={day.number}
          month={day.month}
          year={day.year}
          isEnabled={day.isEnabled}
          height={rowHeight}
          handleSelectedReminderClick={() => {}}
        />
      ))}
    </Grid>
  );
};

CalendarGrid.propTypes = {
  date: PropTypes.instanceOf(Object).isRequired,
};

export default CalendarGrid;

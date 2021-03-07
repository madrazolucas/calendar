import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import WeekdaysHeader from '../WeekdaysHeader';
import CalendarDay from '../CalendarDay';
import { getCurrentMonthCalendarizableDays } from '../../utils/dateUtils';

const CalendarGrid = ({ date }) => {
  const calendarDays = getCurrentMonthCalendarizableDays(date);

  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      justify="center"
      spacing={0}
    >
      <WeekdaysHeader />
      {calendarDays.map((day) => (
        <CalendarDay date={day.number} isEnabled={day.isEnabled} />
      ))}
    </Grid>
  );
};

CalendarGrid.propTypes = {
  date: PropTypes.instanceOf(Object).isRequired,
};

export default CalendarGrid;

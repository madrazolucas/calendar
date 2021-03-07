import React from 'react';
import { Grid } from '@material-ui/core';
import WeekDaysHeader from '../WeekDaysHeader';

const CalendarGrid = () => (
  <Grid
    container
    direction="row"
    justify="center"
    alignItems="center"
    spacing={0}
  >
    <WeekDaysHeader />
  </Grid>
);

export default CalendarGrid;

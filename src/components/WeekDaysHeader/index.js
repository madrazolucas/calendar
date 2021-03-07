import React from 'react';
import { Card, Grid } from '@material-ui/core';
import { getWeekdays } from '../../utils/dateUtils';
import useStyles from '../../hooks/CalendarCellStyle';

const WeekDaysHeader = () => {
  const classes = useStyles();
  return (
    <>
      {getWeekdays().map((day) => (
        <Card variant="outlined" className={[classes.cell, classes.headerCell]}>
          <Grid item className={classes.fullText}>
            {day.longName}
          </Grid>
          <Grid item className={classes.shortText}>
            {day.shortName}
          </Grid>
        </Card>
      ))}
    </>
  );
};

export default WeekDaysHeader;

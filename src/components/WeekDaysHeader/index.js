import React from 'react';
import { Card, Grid, withStyles } from '@material-ui/core';
import { getWeekDays } from '../../utils/dateUtils';
import useCalendarCommonStyles from '../../hooks/useCalendarCommonStyles';
import styles from './styles';

const WeekDaysHeader = ({ classes }) => {
  const commonClasses = useCalendarCommonStyles();
  const cardClasses = [commonClasses.cell, classes.headerCell];

  return getWeekDays().map((day) => (
    <Card key={day.longName} variant="outlined" className={cardClasses}>
      <Grid item className={classes.fullText}>
        {day.longName}
      </Grid>
      <Grid item className={classes.shortText}>
        {day.shortName}
      </Grid>
    </Card>
  ));
};

export default withStyles(styles)(WeekDaysHeader);

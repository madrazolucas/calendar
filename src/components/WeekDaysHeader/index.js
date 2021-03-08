import React from 'react';
import { Card, Grid, withStyles } from '@material-ui/core';
import { getWeekdays } from '../../utils/dateUtils';
import useCalendarCommonStyles from '../../hooks/useCalendarCommonStyles';
import styles from './styles';

const WeekdaysHeader = ({ classes }) => {
  const commonClasses = useCalendarCommonStyles();

  return getWeekdays().map((day) => (
    <Card
      variant="outlined"
      className={[commonClasses.cell, classes.headerCell]}
    >
      <Grid item className={classes.fullText}>
        {day.longName}
      </Grid>
      <Grid item className={classes.shortText}>
        {day.shortName}
      </Grid>
    </Card>
  ));
};

export default withStyles(styles)(WeekdaysHeader);

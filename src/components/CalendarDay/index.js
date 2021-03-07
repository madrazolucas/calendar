import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Grid } from '@material-ui/core';
import useStyles from '../../hooks/CalendarCellStyle';

const CalendarDay = ({ date }) => {
  const classes = useStyles();
  return (
    <Card variant="outlined" className={[classes.cell]}>
      <CardContent>
        <Grid item direction="column" justify="center">
          <p>{date}</p>
        </Grid>
      </CardContent>
    </Card>
  );
};

CalendarDay.propTypes = {
  date: PropTypes.instanceOf(Object).isRequired,
};

export default CalendarDay;

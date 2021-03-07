import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Grid } from '@material-ui/core';
import useStyles from '../../hooks/CalendarCellStyle';

const CalendarDay = ({ date, isEnabled, height }) => {
  const classes = useStyles();

  return (
    <Card variant="outlined" className={[classes.cell]} style={{ height }}>
      <CardContent>
        <Grid item direction="column" justify="center">
          <p>{date}</p>
          <p>{isEnabled}</p>
        </Grid>
      </CardContent>
    </Card>
  );
};

CalendarDay.propTypes = {
  date: PropTypes.instanceOf(Object).isRequired,
  height: PropTypes.string.isRequired,
  isEnabled: PropTypes.bool,
};

CalendarDay.defaultProps = {
  isEnabled: false,
};

export default CalendarDay;

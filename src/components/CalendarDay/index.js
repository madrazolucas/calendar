import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Grid, withStyles } from '@material-ui/core';
import useCommonStyles from '../../hooks/CalendarCellStyle';
import styles from './styles';

const CalendarDay = ({ date, isEnabled, height, classes }) => {
  const commonClasses = useCommonStyles();
  const cardClasses = isEnabled
    ? [commonClasses.cell]
    : [commonClasses.cell, classes.cardDisabled];

  return (
    <Card variant="outlined" className={cardClasses} style={{ height }}>
      <CardContent>
        <Grid item direction="column" justify="center">
          <p className={[classes.cardText]}>{date}</p>
          <p>{isEnabled}</p>
        </Grid>
      </CardContent>
    </Card>
  );
};

CalendarDay.propTypes = {
  date: PropTypes.instanceOf(Object).isRequired,
  classes: PropTypes.instanceOf(Object),
  height: PropTypes.string.isRequired,
  isEnabled: PropTypes.bool,
};

CalendarDay.defaultProps = {
  isEnabled: false,
  classes: {},
};

export default withStyles(styles)(CalendarDay);

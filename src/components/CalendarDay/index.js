import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Grid, withStyles } from '@material-ui/core';
import RemindersContext from '../../context/remindersContext';
import CalendarReminders from '../CalendarReminders';
import useCalendarCommonStyles from '../../hooks/useCalendarCommonStyles';
import styles from './styles';

const CalendarDay = ({
  day,
  month,
  year,
  isEnabled,
  height,
  classes,
  handleSelectedReminderClick,
}) => {
  const commonClasses = useCalendarCommonStyles();
  const { handleSelectedRemindersChange } = useContext(RemindersContext);
  const cardClasses = isEnabled
    ? [commonClasses.cell, classes.cardCalendarDay]
    : [commonClasses.cell, classes.cardDisabled];

  const handleReminderClick = ({ reminder, selectedDate }) => {
    if (reminder) {
      handleSelectedReminderClick({ reminder, selectedDate });
    } else {
      handleSelectedRemindersChange(selectedDate);
    }
  };

  const getRemindersFromDate = () => {
    const { reminders } = useContext(RemindersContext);
    return reminders.filter(
      (reminder) =>
        reminder.date.day === day &&
        reminder.date.month === month &&
        reminder.date.year === year
    );
  };

  return (
    <Card
      variant="outlined"
      className={cardClasses}
      style={{ height }}
      onClick={
        isEnabled
          ? () => handleReminderClick({ selectedDate: { day, month, year } })
          : {}
      }
    >
      <CardContent className={classes.cardContent}>
        <Grid item direction="column" justify="center">
          <p className={[classes.cardText]}>{day}</p>
          <CalendarReminders reminders={getRemindersFromDate()} />
        </Grid>
      </CardContent>
    </Card>
  );
};

CalendarDay.propTypes = {
  day: PropTypes.string.isRequired,
  month: PropTypes.string,
  year: PropTypes.string,
  classes: PropTypes.instanceOf(Object),
  height: PropTypes.string.isRequired,
  isEnabled: PropTypes.bool,
  handleSelectedReminderClick: PropTypes.func.isRequired,
};

CalendarDay.defaultProps = {
  isEnabled: false,
  month: null,
  year: null,
  classes: {},
};

export default withStyles(styles)(CalendarDay);

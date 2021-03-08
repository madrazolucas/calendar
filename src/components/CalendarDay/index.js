import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Grid, withStyles } from '@material-ui/core';
import RemindersContext from '../../context/remindersContext';
import CalendarReminders from '../CalendarReminders';
import useCalendarCommonStyles from '../../hooks/useCalendarCommonStyles';
import styles from './styles';

const CalendarDay = ({ day, month, year, isEnabled, height, classes }) => {
  const commonClasses = useCalendarCommonStyles();
  const {
    handleSelectedRemindersDateChange,
    handleSelectedReminderChange,
  } = useContext(RemindersContext);

  const cardClasses = isEnabled
    ? [commonClasses.cell, classes.cardCalendarDay]
    : [commonClasses.cell, classes.cardDisabled];

  const handleReminderClick = ({ reminder, selectedDate }) => {
    if (reminder) {
      handleSelectedReminderChange(reminder);
      handleSelectedRemindersDateChange(selectedDate);
    } else {
      handleSelectedRemindersDateChange(selectedDate);
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
          <CalendarReminders
            reminders={getRemindersFromDate()}
            handleViewReminderClick={(reminder) =>
              handleReminderClick({ reminder, selectedDate: reminder.date })
            }
          />
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
};

CalendarDay.defaultProps = {
  isEnabled: false,
  month: null,
  year: null,
  classes: {},
};

export default withStyles(styles)(CalendarDay);

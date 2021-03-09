import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Grid, withStyles } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import RemindersContext from '../../context/remindersContext';
import CalendarReminders from '../CalendarReminders';
import useCalendarCommonStyles from '../../hooks/useCalendarCommonStyles';
import { compareRemindersTime } from '../../utils/dateUtils';
import styles from './styles';

const CalendarDay = ({ day, month, year, isEnabled, height, classes }) => {
  const commonClasses = useCalendarCommonStyles();
  const {
    reminders,
    handleRemindersChange,
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

  const handleDeleteAllRemindersByDate = () => {
    const remindersToUpdate = [...reminders];
    const remindersFilteredByDate = remindersToUpdate.filter(
      (reminderValue) =>
        reminderValue.date.day !== day &&
        reminderValue.date.month !== month &&
        reminderValue.date.year !== year
    );
    handleRemindersChange(remindersFilteredByDate);
  };

  const getRemindersFromDate = () => {
    const filteredByDateReminders = reminders.filter(
      (reminder) =>
        reminder.date.day === day &&
        reminder.date.month === month &&
        reminder.date.year === year
    );

    return filteredByDateReminders.sort(compareRemindersTime);
  };

  const dayReminders = getRemindersFromDate();

  return (
    <Card
      variant="outlined"
      className={cardClasses}
      style={{ height }}
      onClick={
        isEnabled
          ? () => handleReminderClick({ selectedDate: { day, month, year } })
          : () => {}
      }
    >
      <CardContent className={classes.cardContent}>
        <Grid item>
          <div className={classes.cardHeader}>
            <p className={[classes.cardText]}>{day}</p>
            {!!dayReminders.length && (
              <IconButton
                size="small"
                aria-label="delete"
                onClick={(event) => {
                  event.stopPropagation();
                  handleDeleteAllRemindersByDate();
                }}
              >
                <DeleteIcon />
              </IconButton>
            )}
          </div>
          <CalendarReminders
            reminders={dayReminders}
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
  day: PropTypes.number.isRequired,
  month: PropTypes.number,
  year: PropTypes.number,
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

import React from 'react';
import PropTypes from 'prop-types';
import { Card, withStyles } from '@material-ui/core';
import styles from './styles';

const CalendarReminders = ({ reminders, classes }) =>
  reminders.map((reminder) => (
    <Card
      key={reminder.title}
      className={classes.reminderBlock}
      style={{ backgroundColor: reminder.color }}
      onClick={() => {}}
    >
      <p className={classes.reminderTitle}>{reminder.title}</p>
    </Card>
  ));

CalendarReminders.propTypes = {
  reminders: PropTypes.instanceOf(Array).isRequired,
};

export default withStyles(styles)(CalendarReminders);

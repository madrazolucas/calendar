import React from 'react';
import PropTypes from 'prop-types';
import { DialogContent } from '@material-ui/core';

const ReminderInformation = ({ reminder }) => (
  <>
    <DialogContent>
      <p>{reminder.title}</p>
    </DialogContent>
  </>
);

ReminderInformation.propTypes = {
  reminder: PropTypes.instanceOf(Object).isRequired,
};

export default ReminderInformation;

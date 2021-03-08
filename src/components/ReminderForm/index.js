import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

const ReminderForm = ({ selectedDate }) => (
  <>
    <p>{`${selectedDate.day} ${selectedDate.day} ${selectedDate.day}`}</p>
    <TextField
      autoFocus
      fullWidth
      margin="dense"
      id="title"
      label="Title"
      type="text"
    />
    <TextField margin="dense" id="city" label="City" type="text" />
  </>
);

ReminderForm.propTypes = {
  selectedDate: PropTypes.instanceOf(Object).isRequired,
};

export default ReminderForm;

import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import MomentUtils from '@date-io/moment';
import ColorPicker from 'material-ui-color-picker';
import {
  KeyboardTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import { Button, DialogActions } from '@material-ui/core';
import RemindersContext from '../../context/remindersContext';
import { getCurrentTime } from '../../utils/dateUtils';

const ReminderForm = ({ selectedDate, handleClose, reminder }) => {
  const { reminders, handleRemindersChange } = useContext(RemindersContext);

  // Form inputs as component state
  const [title, setTitle] = useState(reminder ? reminder.title : '');
  const [selectedTime, setSelectedTime] = useState(
    reminder ? reminder.time : getCurrentTime()
  );
  const [selectedColor, setSelectedColor] = useState(
    reminder ? reminder.color : '#0011aa'
  );
  const [city, setCity] = useState(
    reminder && reminder.city ? reminder.city : ''
  );
  const [titleHasError, setTitleHasError] = useState(false);

  const resetFormState = () => {
    setTitle('');
    setCity('');
    setSelectedColor('#0011aa');
    setTitleHasError(false);
  };

  const handleSaveReminder = () => {
    const reminderToAdd = {
      title,
      city,
      time: selectedTime,
      color: selectedColor,
      date: selectedDate,
    };

    if (reminder) {
      const remindersToUpdate = [...reminders];
      const reminderToModifyIndex = remindersToUpdate.findIndex(
        (savedRemider) => savedRemider.title === reminder.title
      );
      if (reminderToModifyIndex !== -1) {
        remindersToUpdate[reminderToModifyIndex] = reminderToAdd;
      }
      handleRemindersChange(remindersToUpdate);
    } else {
      handleRemindersChange([...reminders, reminderToAdd]);
    }

    resetFormState();
    handleClose();
  };

  const handleTitleChange = (event) => {
    setTitleHasError(event.target.value.length > 30);
    setTitle(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  return (
    <form autoComplete="off">
      <TextField
        fullWidth
        id="title-input"
        label="Title"
        value={title}
        error={titleHasError}
        helperText={`${title.length}/30`}
        onChange={handleTitleChange}
        margin="normal"
        required
      />
      <TextField
        id="city-input"
        label="City"
        value={city}
        helperText={city.length === 0 ? 'Search a city' : ''}
        onChange={handleCityChange}
        margin="normal"
        style={{ marginRight: 18 }}
      />
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <KeyboardTimePicker
          id="time-picker"
          label="Time"
          value={selectedTime}
          onChange={handleTimeChange}
          margin="normal"
        />
      </MuiPickersUtilsProvider>
      <div style={{ height: 286, marginTop: 18 }}>
        <ColorPicker
          name="color-picker"
          defaultValue={selectedColor}
          value={selectedColor}
          label="Color"
          onChange={(value) => handleColorChange(value)}
        />
      </div>
      <DialogActions>
        <Button onClick={() => handleClose()} color="secondary">
          Close
        </Button>
        <Button
          color="primary"
          disabled={titleHasError || title.length === 0}
          onClick={() => handleSaveReminder()}
        >
          {reminder ? 'Modify' : 'Create'}
        </Button>
      </DialogActions>
    </form>
  );
};

ReminderForm.propTypes = {
  selectedDate: PropTypes.instanceOf(Object).isRequired,
  reminder: PropTypes.instanceOf(Object),
  handleClose: PropTypes.func.isRequired,
};

ReminderForm.defaultProps = {
  reminder: null,
};

export default ReminderForm;

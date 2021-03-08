import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import TextField from '@material-ui/core/TextField';
import MomentUtils from '@date-io/moment';
import ColorPicker from 'material-ui-color-picker';
import {
  KeyboardTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import { Button, DialogActions } from '@material-ui/core';
import RemindersContext from '../../context/remindersContext';

const ReminderForm = ({ selectedDate, handleClose }) => {
  const { reminders, handleRemindersChange } = useContext(RemindersContext);

  const [title, setTitle] = useState('');
  const [city, setCity] = useState('');
  const [selectedTime, setSelectedTime] = useState({});
  const [selectedColor, setSelectedColor] = useState('#0011aa');
  const [titleHasError, setTitleHasError] = useState(false);

  const resetFormState = () => {
    setTitle('');
    setCity('');
    setSelectedColor('#0011aa');
    setTitleHasError(false);
  };

  const handleSaveReminder = () => {
    handleRemindersChange([
      ...reminders,
      {
        title,
        city,
        time: selectedTime,
        color: selectedColor,
        date: selectedDate,
      },
    ]);
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
    const hour = moment(time).format('HH');
    const minutes = moment(time).format('mm');
    setSelectedTime({ hour, minutes });
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
          Create
        </Button>
      </DialogActions>
    </form>
  );
};

ReminderForm.propTypes = {
  selectedDate: PropTypes.instanceOf(Object).isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default ReminderForm;

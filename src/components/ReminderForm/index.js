import React, { useState } from 'react';
import moment from 'moment';
import TextField from '@material-ui/core/TextField';
import MomentUtils from '@date-io/moment';
import ColorPicker from 'material-ui-color-picker';
import {
  KeyboardTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

const ReminderForm = () => {
  const [title, setTitle] = useState('');
  const [city, setCity] = useState('');
  const [selectedTime, setSelectedTime] = useState({});
  const [selectedColor, setSelectedColor] = useState('#ddee00');
  const [titleHasError, setTitleHasError] = useState(false);

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
      />
      <TextField
        id="city-input"
        label="City"
        value={city}
        helperText={city.length === 0 ? 'Search a city' : ''}
        onChange={handleCityChange}
        margin="normal"
        style={{ marginRight: 16 }}
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
    </form>
  );
};

export default ReminderForm;

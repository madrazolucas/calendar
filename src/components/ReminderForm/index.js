import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import MomentUtils from '@date-io/moment';
import ColorPicker from 'material-ui-color-picker';
import {
  KeyboardTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Button, DialogActions, Typography } from '@material-ui/core';
import RemindersContext from '../../context/remindersContext';
import { getCurrentTime } from '../../utils/dateUtils';
import { fetchCities, fetchWeather } from '../../services/weatherService';

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
  const [citySearch, setCitySearch] = useState(
    reminder && reminder.city ? reminder.city : ''
  );
  const [titleHasError, setTitleHasError] = useState(false);
  const [cities, setCities] = useState([]);
  const [weatherInformation, setWeatherInformation] = useState(null);

  useEffect(() => {
    if (citySearch.length) fetchCities(citySearch, setCities);
  }, [citySearch]);

  useEffect(() => {
    if (city.length) fetchWeather(city, setWeatherInformation);
  }, [city]);

  const resetFormState = () => {
    setTitle('');
    setCity('');
    setCities([]);
    setCitySearch('');
    setSelectedColor('#0011aa');
    setWeatherInformation(null);
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

  const handleCitySearchChange = ({ event, cityInput }) => {
    const newValue = cityInput || '';
    if (event && event.type === 'change') {
      setCitySearch(newValue);
      setWeatherInformation(null);
    }
  };

  const handleCityChange = ({ cityInput }) => {
    const cityValue = cityInput || '';
    setCity(cityValue);
    setCitySearch(cityValue);
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
      <Autocomplete
        id="city-selector-input"
        options={cities.map((cityOption) => cityOption.name)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="City"
            helperText={city.length === 0 ? 'Search a city' : ''}
          />
        )}
        inputValue={citySearch}
        loading={cities.length === 0 && citySearch.length > 0}
        onChange={(_, cityInput) => handleCityChange({ cityInput })}
        onInputChange={(event, cityInput) =>
          handleCitySearchChange({ event, cityInput })
        }
      />
      {weatherInformation && (
        <Typography variant="body2" gutterBottom style={{ paddingTop: 8 }}>
          {`Weather in this city: ${weatherInformation}`}
        </Typography>
      )}
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

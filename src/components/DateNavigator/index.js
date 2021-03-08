import React from 'react';
import PropTypes from 'prop-types';
import { IconButton } from '@material-ui/core';
import ChevronRightRoundedIcon from '@material-ui/icons/ChevronRightRounded';
import ChevronLeftRoundedIcon from '@material-ui/icons/ChevronLeftRounded';
import {
  getMonthYearDateText,
  getNextMonthDate,
  getPreviousMonthDate,
} from '../../utils/dateUtils';

const navigateMonth = ({ date, isNextMonthNavigation, handleDateChange }) => {
  const newDate = isNextMonthNavigation
    ? getNextMonthDate(date)
    : getPreviousMonthDate(date);

  const { month, year } = getMonthYearDateText(newDate);

  handleDateChange({
    date: newDate,
    month,
    year,
  });
};

const DateNavigator = ({ date, month, year, handleDateChange }) => (
  <div className="date-navigator__container">
    <IconButton
      aria-label="left"
      onClick={() =>
        navigateMonth({ date, isNextMonthNavigation: false, handleDateChange })
      }
    >
      <ChevronLeftRoundedIcon />
    </IconButton>
    <p className="date-navigator__text">
      {month} {year}
    </p>
    <IconButton
      aria-label="right"
      onClick={() =>
        navigateMonth({ date, isNextMonthNavigation: true, handleDateChange })
      }
    >
      <ChevronRightRoundedIcon />
    </IconButton>
  </div>
);

DateNavigator.propTypes = {
  month: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  date: PropTypes.instanceOf(Object).isRequired,
  handleDateChange: PropTypes.func.isRequired,
};

export default DateNavigator;

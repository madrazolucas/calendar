import React from 'react';
import PropTypes from 'prop-types';
import { IconButton } from '@material-ui/core';
import ChevronRightRoundedIcon from '@material-ui/icons/ChevronRightRounded';
import ChevronLeftRoundedIcon from '@material-ui/icons/ChevronLeftRounded';
import './styles.scss';

const DateNavigator = ({ month, year }) => (
  <div className="date-navigator__container">
    <IconButton aria-label="left" onClick={() => {}}>
      <ChevronLeftRoundedIcon />
    </IconButton>
    <p>
      {month}
      {year}
    </p>
    <IconButton aria-label="right" onClick={() => {}}>
      <ChevronRightRoundedIcon />
    </IconButton>
  </div>
);

DateNavigator.propTypes = {
  month: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
};

export default DateNavigator;

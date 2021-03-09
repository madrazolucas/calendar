import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  withStyles,
} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import ReminderForm from '../ReminderForm';
import RemindersContext from '../../context/remindersContext';
import styles from './styles';

const ReminderModal = ({ selectedReminder, selectedDate, classes }) => {
  const {
    handleSelectedRemindersDateChange,
    handleSelectedReminderChange,
  } = useContext(RemindersContext);

  const dateText = selectedDate
    ? `${selectedDate.day}/${selectedDate.month}/${selectedDate.year}`
    : '';

  const handleClose = () => {
    handleSelectedRemindersDateChange(null);
    handleSelectedReminderChange(null);
  };

  return (
    <Dialog
      fullWidth
      open={!!selectedDate}
      maxWidth="sm"
      aria-labelledby="max-width-dialog"
    >
      {selectedDate && (
        <>
          <div className={classes.header}>
            <DialogTitle id="max-width-dialog-title">Reminder</DialogTitle>
            <IconButton aria-label="close" onClick={() => handleClose()}>
              <CloseIcon />
            </IconButton>
          </div>
          {!selectedReminder && (
            <>
              <DialogContent>
                <DialogContentText>
                  {`Add a new reminder - ${dateText}`}
                </DialogContentText>
                {selectedDate && (
                  <ReminderForm
                    selectedDate={selectedDate}
                    handleClose={handleClose}
                  />
                )}
              </DialogContent>
            </>
          )}
          {selectedReminder && (
            <>
              <DialogContent>
                <DialogContentText>
                  {`Modify reminder - ${dateText}`}
                </DialogContentText>
                {selectedDate && (
                  <ReminderForm
                    reminder={selectedReminder}
                    selectedDate={selectedDate}
                    handleClose={handleClose}
                  />
                )}
              </DialogContent>
            </>
          )}
        </>
      )}
    </Dialog>
  );
};

ReminderModal.propTypes = {
  selectedReminder: PropTypes.instanceOf(Object),
  selectedDate: PropTypes.instanceOf(Object),
  classes: PropTypes.instanceOf(Object).isRequired,
};

ReminderModal.defaultProps = {
  selectedReminder: null,
  selectedDate: null,
};

export default withStyles(styles)(ReminderModal);

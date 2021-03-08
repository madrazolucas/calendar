import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  withStyles,
} from '@material-ui/core';
import ReminderForm from '../ReminderForm';
import ReminderInformation from '../ReminderInformation';
import RemindersContext from '../../context/remindersContext';
import styles from './styles';

const ReminderModal = ({ reminderInformation, selectedDate }) => {
  const { handleSelectedRemindersChange } = useContext(RemindersContext);

  const handleClose = () => {
    handleSelectedRemindersChange(null);
  };

  return (
    <Dialog
      fullWidth
      open={!!selectedDate}
      maxWidth="md"
      aria-labelledby="max-width-dialog"
    >
      {selectedDate && (
        <>
          <DialogTitle id="max-width-dialog-title">Reminder</DialogTitle>
          {!reminderInformation && (
            <>
              <DialogContent>
                <DialogContentText>
                  Add a new reminder -
                  {` ${selectedDate.day}/${selectedDate.month}/${selectedDate.year}`}
                </DialogContentText>
                {selectedDate && <ReminderForm selectedDate={selectedDate} />}
              </DialogContent>
              <DialogActions>
                <Button onClick={() => handleClose()} color="secondary">
                  Close
                </Button>
                <Button onClick={() => {}} color="primary">
                  Create
                </Button>
              </DialogActions>
            </>
          )}
          {reminderInformation && (
            <>
              <DialogContent>
                <DialogContentText>
                  Visualize the information of the created reminder.
                </DialogContentText>
                <ReminderInformation />
              </DialogContent>
              <DialogActions>
                <Button onClick={() => {}} color="primary">
                  Close
                </Button>
              </DialogActions>
            </>
          )}
        </>
      )}
    </Dialog>
  );
};

ReminderModal.propTypes = {
  reminderInformation: PropTypes.instanceOf(Object),
  selectedDate: PropTypes.instanceOf(Object).isRequired,
};

ReminderModal.defaultProps = {
  reminderInformation: null,
};

export default withStyles(styles)(ReminderModal);

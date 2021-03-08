import React, { useState } from 'react';
import RemindersContext from '../../context/remindersContext';
import DateNavigator from '../../components/DateNavigator';
import CalendarGrid from '../../components/CalendarGrid';
import ReminderModal from '../../components/ReminderModal';
import { getCurrentDate } from '../../utils/dateUtils';

const CalendarView = () => {
  const { month, year, date } = getCurrentDate();
  const [selectedDate, setSelectedDate] = useState({ date, month, year });
  const [reminders, setReminders] = useState([]);
  const [selectedReminderDate, setSelectedReminderDate] = useState(null);

  return (
    <>
      <DateNavigator
        month={selectedDate.month}
        year={selectedDate.year}
        date={selectedDate.date}
        handleDateChange={setSelectedDate}
      />
      <RemindersContext.Provider
        value={{
          reminders,
          selectedReminderDate,
          handleRemindersChange: setReminders,
          handleSelectedRemindersChange: setSelectedReminderDate,
        }}
      >
        <CalendarGrid date={selectedDate.date} />
        <ReminderModal selectedDate={selectedReminderDate} />
      </RemindersContext.Provider>
    </>
  );
};

export default CalendarView;

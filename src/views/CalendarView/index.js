import React, { useState } from 'react';
import DateNavigator from '../../components/DateNavigator';
import CalendarGrid from '../../components/CalendarGrid';
import { getCurrentDate } from '../../utils/dateUtils';

const CalendarView = () => {
  const { month, year, date } = getCurrentDate();
  const [selectedDate, setSelectedDate] = useState({ date, month, year });

  return (
    <>
      <DateNavigator
        month={selectedDate.month}
        year={selectedDate.year}
        date={selectedDate.date}
        handleDateChange={setSelectedDate}
      />
      <CalendarGrid />
    </>
  );
};

export default CalendarView;

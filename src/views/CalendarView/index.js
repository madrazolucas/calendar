import React from 'react';
import DateNavigator from '../../components/DateNavigator';
import CalendarGrid from '../../components/CalendarGrid';

const CalendarView = () => (
  <>
    <DateNavigator month="March" year="2021" />
    <CalendarGrid />
  </>
);

export default CalendarView;

import React from 'react';
import ReactDOM from 'react-dom';
import CalendarView from './views/CalendarView';
import './styles.scss';

ReactDOM.render(
  <React.StrictMode>
    <CalendarView />
  </React.StrictMode>,
  document.getElementById('root')
);

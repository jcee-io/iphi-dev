import React from 'react';
import CalendarNode from './CalendarNode';

const CalendarRow = ({ row }) => (
  <div className="calendar-row">
    {row.map(day => <CalendarNode day={day} />)}
  </div>
);

export default CalendarRow;

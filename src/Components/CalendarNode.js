import React from 'react';

const CalendarNode = ({ day }) => (
  <div className="calendar-node">
    {day.date}
  </div>
);

export default CalendarNode;

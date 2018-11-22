import React, { Component } from 'react';
import '../styles/Calendar.css';
import CalendarDates from 'calendar-dates';

const { getMatrix } = new CalendarDates();

class Calendar extends Component {
  constructor(props) {
    super(props);

    this.date = new Date();
    console.log(this.date);

  }

  async componentDidMount() {
    console.log(await getMatrix(this.date));
  }
  render () {
    return (
      <div className="Calendar">
      </div>
    );
  }
}


export default Calendar;

import React, { Component } from 'react';
import '../styles/Calendar.css';
import CalendarDates from 'calendar-dates';
import { NavLink } from 'react-router-dom';
import CalendarRow from '../Components/CalendarRow';
const { getMatrix } = new CalendarDates();

class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rows: [],
      matrix: [],
      month: null,
      year: null,
      events: {},
    };

  }

  componentDidMount() {
    this.date = new Date();

    this.applyDate();
  }

  onNavigatorClick = event => {
    if(event.target.className === 'prev-month') {
      this.date.setMonth(this.date.getMonth() - 1);
    } else {
      this.date.setMonth(this.date.getMonth() + 1);
    }

    this.applyDate();
  };

  applyDate = async () => {
    const month = this.date.toLocaleString('en-us', {
      month: "long"
    });
    const year = this.date.getFullYear();

    const matrix = await getMatrix(this.date);


    const rows = matrix.map(row => {
      let hasCurrent = false;
      row.forEach(node => {

        if(node.type === 'previous' || node.type === 'next') {
          node.date = null;
        } else if (node.type === 'current') {
          hasCurrent = true;
        }
      });

      return hasCurrent ? <CalendarRow row={row} /> : null;
    });


    await this.setState({ month, rows, year });

    this.fetchEvents();
  };

  fetchEvents = async () => {
    const { year } = this.state;
    const month = this.date.getMonth();

    const options = {
      method: 'GET',
      params: { month, year },
      mode: 'no-cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      }
    }

    const events = {};
    const res = await fetch(`/iphi2/calendar.php?month=${month}&year=${year}`);
    const { data } = await res.json();

    data.calEvents.forEach(event => {
      const date = new Date(event.event_date);
      const day = date.getDate();
      events[day] = events[day] || [];

      events[day].push(event);
    });

    console.log(events);
  };

  render () {
    return (
      <div className="Calendar">
        <div className="container">
          <div className="header">
            <span>{this.state.month + ' ' + this.state.year}</span>
            <div className="navigators">
              <span onClick={this.onNavigatorClick} className="prev-month" to="#">{'<'}</span>
              <span onClick={this.onNavigatorClick} className="next-month" to="#">{'>'}</span>
            </div>
          </div>
          <div className="row-container">
            {this.state.rows}
          </div>
        </div>
      </div>
    );
  }
}


export default Calendar;

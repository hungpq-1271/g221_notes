import React, { Component } from 'react'
import ReactDOM from "react-dom";
import styled from 'styled-components'
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import bootstrapPlugin from "@fullcalendar/bootstrap";
import interactionPlugin from "@fullcalendar/interaction";
import MediaQuery from 'react-responsive'

import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/bootstrap/main.css";
import "./dashbroad.css";

export default class DashBroad extends Component {
  constructor(props) {
    super(props);

    const events = [
        {
            title: '5',
            description: 'Tasks',
            start: '2019-07-01',
            color: 'red',
        },
        {
            title: '10',
            description: 'Tasks',
            start: '2019-07-01',
        },
        {
            title: '10',
            description: 'Tasks',
            start: '2019-07-19T16:00:00',
        },
    ];
    this.state = {
      events,
    };
  }
  
  render() {
    const events = this.state
    return (
      <div id="calendar" className="container" ref="calendar">
        <FullCalendar
          selectable={true}
          defaultView="dayGridMonth"
          height={650}
          header={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,dayGridWeek'
          }}
          prev="fa-chevron-left"
          next="fa-chevron-right"
          plugins={[interactionPlugin, dayGridPlugin, bootstrapPlugin]}
          themeSystem="bootstrap"
          weekends={true}
          dateClick={this.DateClick}
          displayEventTime={true}
          timeZone="UTC"
          events= {events}
          eventRender={this.EventDetail}
        />
      </div>
    );
  }
  EventDetail = ({ event, el }) => {
    const content = (
      <div>
        <MediaQuery maxDeviceWidth={540}>
          {event.title}
        </MediaQuery>
        <MediaQuery minDeviceWidth={540}>
          {event.title} {event.extendedProps.description}
        </MediaQuery>
      </div>
    );
    ReactDOM.render(content, el);
    return el;
  };
  DateClick = (info) => {
    console.log('Clicked on: ' + info.dateStr);
  }
}

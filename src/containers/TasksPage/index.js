import React, { Component } from 'react'
import mobiscroll from "libs/mobiscroll/js/mobiscroll.react.min.js"
import TasksClick from "./components/TasksClick"

import "libs/mobiscroll/css/mobiscroll.react.min.css"

mobiscroll.settings = {
  theme: 'ios'
}

export default class DashBroad extends Component {
  constructor(props) {
    super(props)
    
    mobiscroll.util.getJson('https://trial.mobiscroll.com/events/', (events) => {
        this.setState({ myEvents: events})
    }, 'jsonp')

    this.state = {
      view: 'month',
      myEvents: [] ,
      calView: {
        calendar: { type: 'month', labels: true },
      },
      height: 490
    }
  }
  
  changeView = (event) => {
    var view
    var calHeight
    switch (event.target.value) {
      case 'month':
        view = {
          calendar: { type: 'month', labels: true },
        }
        calHeight = 490
        break
      case 'week':
        view = {
          calendar: { type: 'week' },
          eventList: { type: 'day' }
        }
        calHeight = 70
        break
    }
  
    this.setState({
      view: event.target.value,
      calView: view,
      height: calHeight,
    })
  }
  
  render () {
    return (
      <div id="content">
        <div className="md-switching-view-cont">
          <mobiscroll.Form>
            <mobiscroll.Segmented value="month" name="view" checked={this.state.view === 'month'} onChange={this.changeView}>
              Month
            </mobiscroll.Segmented>
            <mobiscroll.Segmented value="week" name="view" checked={this.state.view === 'week'} onChange={this.changeView}>
              Week
            </mobiscroll.Segmented>
          </mobiscroll.Form>
          <div className="md-switching-view-cal-cont">
            <mobiscroll.Eventcalendar
              ref="calendar"
              display="inline"
              view={this.state.calView}
              data={this.state.myEvents}
              marked={this.state.myEvents}
              onEventSelect={TasksClick}
              calendarHeight={this.state.height}
            />
          </div>
        </div>
      </div>
    )
  }    
}

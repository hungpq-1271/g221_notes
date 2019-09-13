import React from 'react'

import View from './View'

export default class TasksByDay extends React.Component {
  constructor() {
    super()
    this.state = {
      activeIndex: 0
    }
  }

  handleChange = (_, activeIndex) => this.setState({ activeIndex })

  render() {
    const { activeIndex } = this.state
    return <View
      activeIndex={activeIndex}
      onChange={this.handleChange}
    />
  }
}

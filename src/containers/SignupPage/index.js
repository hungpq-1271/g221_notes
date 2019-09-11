import React, { Component } from 'react'

import View from './View'

export default class SignupPage extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      passwordConfirmation: '',
    }
  }

  handleInputChange = e => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSignup = e => {
    e.preventDefault()
    // TODO: make sign up request
  }

  render() {
    return <View
      onChange={this.handleInputChange}
      onSignup={this.handleSignup}
    />
  }
}

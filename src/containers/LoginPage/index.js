import React, { Component } from 'react'
import axios from 'axios'
import View from './View'

export default class LoginPage extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
      isLogin: false
    }
  }

  handleInputChange = e => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleLogin = e => {
    e.preventDefault()
    axios.post("base_url/auth/login",{
      username: this.state.username,
      password: this.state.password
    }).then((res) => {
      // save jwt to local storage
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <View onChange={this.handleInputChange} handleLogin={this.handleLogin} />
    )
  }
}

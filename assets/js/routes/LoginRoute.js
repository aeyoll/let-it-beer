import React, { Component } from 'react'
import Login from '../components/login/login'

class LoginRoute extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    this.props.actions.updateAppTitle('Login')
    this.props.actions.updateAppClass('')
  }

  render() {
    return (
      <div></div>
    )
  }
}

export default LoginRoute

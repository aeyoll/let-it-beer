import React, { Component } from 'react'
import Login from '../components/login/login'

class LoginRoute extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    this.props.actions.updateTitle('Login')
  }

  handleLogin = (email, password) => {
    const router = this.context.router;
    this.props.login(email, password, router);
  }

  render() {
    return (
      <div>
        <Login
          auth={this.props}
          handleLogin={this.handleLogin}
         />
      </div>
    )
  }
}

export default Login

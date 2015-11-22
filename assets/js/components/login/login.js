import React, { Component } from 'react'

import Button from '../button/button'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: ''
    }
  }

  handleChange = field => e => {
    e.preventDefault()
    this.setState({ [field]: e.target.value })
  }

  handleLogin = e => {
    e.preventDefault()
    const { username, password } = this.state

    this.props.auth.authActions.login(username, password)
  }

  render() {
    const { auth: { statusText } } = this.props
    const { username, password } = this.state

    return (
      <div>
        {statusText
          ? <div>{statusText}</div>
          : null}

        <form onSubmit={this.handleLogin}>
          <label htmlFor="username">Username</label>

          <input
            styleName="input"
            value={username}
            onChange={this.handleChange('username')}
            id="username"
            type="username"
            placeholder="Username"
            required
          />

          <label htmlFor="password">Password</label>
          <input
            styleName="input"
            value={password}
            onChange={this.handleChange('password')}
            id="password"
            type="password"
            placeholder="Password"
            required
          />

          <Button
            type="submit"
            label="Login"
          ></Button>
        </form>
      </div>
    )
  }
}

export default Login

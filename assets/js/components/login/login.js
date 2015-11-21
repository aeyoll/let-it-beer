import React, { Component } from 'react'

class Login extends Component {
  constructor() {
    super()

    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = field => e => {
    e.preventDefault();
    this.setState({ [field]: e.target.value });
  }

  handleLogin = e => {
    e.preventDefault();
    const { email, password } = this.state;

    this.props.handleLogin(email, password);
  }

  render() {
    const { auth: { error } } = this.props
    const { email, password } = this.state

    return (
      <div>
        {error
          ? <div>{error.message}</div>
          : null}

        <form onSubmit={this.handleLogin}>
          <label htmlFor="email">E-mail</label>

          <input
            styleName="input"
            value={email}
            onChange={this.handleChange('email')}
            id="email"
            type="email"
            placeholder="Email"
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

          <button
            styleName="btn"
            type="submit"
          >
          Login
          </button>
        </form>
      </div>
    )
  }
}

export default Login

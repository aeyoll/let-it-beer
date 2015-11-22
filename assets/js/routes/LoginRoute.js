// React
import React, { Component } from 'react'

// Components
import Login from '../components/login/login'

// Redux
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as AuthActions from '../ducks/auth'

class LoginRoute extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    this.props.actions.updateAppTitle('Login')
    this.props.actions.updateAppClass('')
  }

  handleLogin = (username, password) => {
    const router = this.context.router;
    this.props.authActions.login(username, password, router);
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

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

function mapDispatchToProps(dispatch) {
  return {
    authActions: bindActionCreators(AuthActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginRoute)

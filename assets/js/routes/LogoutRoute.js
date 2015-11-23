// React
import React, { Component } from 'react'

// Redux
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as AuthActions from '../ducks/auth'

class LogoutRoute extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    this.props.authActions.logout()
    this.props.history.pushState(null, `/`)
  }

  render() {
    return (
      <div></div>
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
)(LogoutRoute)

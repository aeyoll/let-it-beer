// React
import React, { Component } from 'react'

// Redux
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as AppActions from '../ducks/app'
import * as AuthActions from '../ducks/auth'

// Components
import Navigation from '../components/navigation/navigation'
import Title from '../components/title/title'

// Styles
import normalize from 'normalize.css'
import styles from '../../scss/app.scss'

class App extends Component {
  render() {
    const { app, actions } = this.props

    let className = styles.main

    if (app.style && styles[app.style] !== undefined) {
      className += ` ${styles[app.style]}`;
    }

    return (
      <div className={className}>
        <Navigation isAuthenticated={this.props.auth.isAuthenticated}></Navigation>

        <div className={styles.container}>
          <Title title={app.title}></Title>

          <div className={styles.content}>
            {React.cloneElement(this.props.children, { actions })}
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    app: state.app,
    auth: state.auth
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(AppActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

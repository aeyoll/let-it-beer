// React
import React, { Component } from 'react'

// Redux
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../actions/index'

// Components
import Navigation from '../components/navigation/navigation'
import Title from '../components/title/title'

// Styles
import normalize from 'normalize.css'
import styles from '../../scss/app.scss'

class App extends Component {
  render() {
    const { title, style, actions } = this.props

    let className = styles.main

    if (style && styles[style] !== undefined) {
      className += ` ${styles[style]}`;
    }

    return (
      <div className={className}>
        <Navigation></Navigation>

        <div className={styles.container}>
          <Title title={title}></Title>

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
    title: state.title,
    style: state.style
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

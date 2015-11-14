// React
import React, { Component } from 'react'

// Redux
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as TitleActions from '../actions/title'

// Components
import Navigation from '../components/navigation/navigation'
import Title from '../components/title/title'

// Styles
import normalize from 'normalize.css'
import styles from '../../scss/app.scss'

class App extends Component {
  render() {
    const { title, actions } = this.props

    return (
      <div>
        <Navigation></Navigation>

        <div className={styles.container}>
          <Title title={title}></Title>

          {React.cloneElement(this.props.children, { actions })}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    title: state.title
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TitleActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

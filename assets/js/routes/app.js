import React, { Component } from 'react'
import Navigation from '../components/navigation/navigation'

// Styles
import styles from '../../scss/app.scss'

class App extends Component {
  render() {
    return (
      <div>
        <Navigation></Navigation>

        <h1 className={styles.title}>Let it beer!</h1>
        {this.props.children}
      </div>
    )
  }
}

export default App

import React, { Component } from 'react'
import Navigation from '../components/navigation/navigation'
import Title from '../components/title/title'

// Styles
import styles from '../../scss/app.scss'

class App extends Component {
  constructor() {
    super()

    this.props = {
      title: 'Let it beer!'
    }
  }

  render() {
    return (
      <div className={styles.container}>
        <Title title={this.props.title}></Title>
        <Navigation></Navigation>

        <h1 className={styles.title}>Let it beer!</h1>
        {this.props.children}
      </div>
    )
  }
}

export default App

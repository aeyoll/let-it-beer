import React, { Component } from 'react'
import styles from './title.scss'

class Title extends Component {
  render() {
    return (
      <div className={styles.common}>{this.props.title}</div>
    )
  }
}

export default Title

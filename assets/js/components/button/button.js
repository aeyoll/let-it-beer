import React, { Component } from 'react'
import styles from './button.scss'

class Button extends Component {
  render() {
    return (
      <button className={styles.normal} type="submit">{this.props.message}</button>
    )
  }
}

export default Button

import React, { Component } from 'react'
import { Link } from 'react-router'
import styles from './navigation.scss'

class Navigation extends Component {
  render() {
    return (
      <ul className={styles.common}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/list">List your beers</Link></li>
        <li><Link to="/search">Search a beer</Link></li>
      </ul>
    )
  }
}

export default Navigation

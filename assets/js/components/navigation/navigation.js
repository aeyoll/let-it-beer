import React, { Component } from 'react'
import { Link } from 'react-router'
import styles from './navigation.scss'

class Navigation extends Component {
  render() {
    return (
      <ul className={styles.common}>
        <li className={styles.item}><Link to="/">Home</Link></li>
        <li className={styles.item}><Link to="/list">List your beers</Link></li>
        <li className={styles.item}><Link to="/search">Search a beer</Link></li>
      </ul>
    )
  }
}

export default Navigation

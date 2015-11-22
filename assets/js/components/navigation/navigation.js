import React, { Component } from 'react'
import { Link } from 'react-router'
import styles from './navigation.scss'

class Navigation extends Component {
  render() {
    return (
      <ul className={styles.common}>
        <li><Link to="/" className={styles.item} activeClassName={styles.active}>Home</Link></li>

        {this.props.isAuthenticated ? (
          <li><Link to="/logout/" className={styles.item} activeClassName={styles.active}>Logout</Link></li>
        ) : (
          <li><Link to="/login/" className={styles.item} activeClassName={styles.active}>Login</Link></li>
        )}

        <li><Link to="/list/" className={styles.item} activeClassName={styles.active}>List your beers</Link></li>
        <li><Link to="/search/" className={styles.item} activeClassName={styles.active}>Search a beer</Link></li>
      </ul>
    )
  }
}

export default Navigation

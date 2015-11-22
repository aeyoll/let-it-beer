import React, { Component } from 'react'
import { Link } from 'react-router'
import styles from './navigation.scss'

class Navigation extends Component {
  render() {
    let links
    let defaultLinks = [
      { to: '/', label: 'Home' }
    ]
    let extraLinks = []

    if (this.props.isAuthenticated) {
      extraLinks = [
        { to: '/logout/', label: 'Logout' },
        { to: '/list/', label: 'List your beers' },
        { to: '/search/', label: 'Search a beer' }
      ]
    } else {
      extraLinks = [
        { to: '/login/', label: 'Login' },
      ]
    }

    links = defaultLinks.concat(extraLinks)

    return (
      <ul className={styles.common}>
        {links.map((link) => {
          return <li key={link.label}><Link to={link.to} className={styles.item} activeClassName={styles.active}>{link.label}</Link></li>
        })}
      </ul>
    )
  }
}

export default Navigation

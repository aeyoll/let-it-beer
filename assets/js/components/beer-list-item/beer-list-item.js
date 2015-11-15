import React, { Component } from 'react'
import { Link } from 'react-router'

import Button from '../button/button'

import styles from './beer-list-item.scss'

class BeerListItem extends Component {
  render() {
    return (
      <div className={styles.common}>
        <Link className={styles.infos} to={`/beer/${this.props.beer.id}/`}>
          <div className={styles.title}>{this.props.beer.name}</div>
          <div className={styles.subtitle}>{this.props.beer.style}</div>
        </Link>

        <div className={styles.actions}>
          <Button label="Delete"></Button>
        </div>
      </div>
    )
  }
}

export default BeerListItem

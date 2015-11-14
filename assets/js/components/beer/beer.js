import React, { Component } from 'react'
import styles from './beer.scss'

class Beer extends Component {
  render() {
    return (
      <div className={styles.common}>
        <div className={styles.style}>{this.props.beer.style}</div>
        <div className={styles.description}>{this.props.beer.description}</div>
        <div className={styles.photo}><img src={this.props.beer.img_url} alt={this.props.beer.name} /></div>
        <div className={styles.abv}>abv: {this.props.beer.abv}</div>
        <div className={styles.ibu}>ibu: {this.props.beer.ibu}</div>
        <div className={styles.num_ratings}>num_ratings: {this.props.beer.num_ratings}</div>
        <div className={styles.overall_rating}>overall_rating: {this.props.beer.overall_rating}</div>
        <div className={styles.seasonal}>seasonal: {this.props.beer.seasonal}</div>
      </div>
    )
  }
}

export default Beer

import React, { Component } from 'react'
import styles from './beer.scss'

class Beer extends Component {
  render() {
    return (
      <div className={styles.common}>
        <h1>{this.props.beer.name}</h1>
        <div><img src={this.props.beer.img_url} alt={this.props.beer.name} /></div>
        <div>{this.props.beer.description}</div>
        <div>style: {this.props.beer.style}</div>
        <div>abv: {this.props.beer.abv}</div>
        <div>ibu: {this.props.beer.ibu}</div>
        <div>name: {this.props.beer.name}</div>
        <div>num_ratings: {this.props.beer.num_ratings}</div>
        <div>overall_rating: {this.props.beer.overall_rating}</div>
        <div>seasonal: {this.props.beer.seasonal}</div>
      </div>
    )
  }
}

export default Beer

import React, { Component } from 'react'
import $ from 'jquery'
import styles from './search-results-item.scss'

class SearchResultsItem extends Component {
  constructor() {
    super()

    this.handleBeerAdd = this.handleBeerAdd.bind(this)
  }

  handleBeerAdd() {
    this.props.onBeerAdd(this.props.beer)
  }

  hasBeerInCollection(collection, beer) {
    return collection.find(function (cbeer) {
      return cbeer.url === beer.url
    })
  }

  render() {
    let userBeers = this.props.userBeers
    let beer      = this.props.beer
    let addButton = ''

    if (!this.hasBeerInCollection(userBeers, beer)) {
      addButton = <button onClick={this.handleBeerAdd}>Add to my beers</button>
    }

    return (
      <div>{this.props.beer.name} {addButton}</div>
    )
  }
}

export default SearchResultsItem

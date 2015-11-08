import React, { Component } from 'react'
import BeerListItem from '../beer-list-item/beer-list-item'

class BeerList extends Component {
  render() {
    return (
      <div>
        {this.props.beers.map((beer) => {
          return <BeerListItem beer={beer} key={beer.id} />
        })}
      </div>
    )
  }
}

export default BeerList

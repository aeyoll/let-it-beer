import React, { Component } from 'react';
import { Link } from 'react-router'

class BeerListItem extends Component {
  render() {
    return (
      <div><Link to={`/beer/${this.props.beer.id}`}>{this.props.beer.name}</Link></div>
    );
  }
}

export default BeerListItem;

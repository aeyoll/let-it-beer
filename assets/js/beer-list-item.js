import React, { Component } from 'react';

class BeerListItem extends Component {
  render() {
    return (
      <div>{this.props.beer.name}</div>
    );
  }
}

export default BeerListItem;

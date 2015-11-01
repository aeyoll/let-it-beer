import React, { Component } from 'react';
import BeerListItem from './beer-list-item';

class BeerList extends Component {
  render() {
    this.props.beers.forEach(function(beer) {
      rows.push(<BeerListItem beer={beer} key={beer.name} />);
    });

    return (
      <div>
        <h2>My beers</h2>
        {this.props.beers.map((beer) => {
          return <BeerListItem beer={beer} key={beer.name} />;
        })}
      </div>
    );
  }
}

export default BeerList;

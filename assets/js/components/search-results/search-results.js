import React, { Component } from 'react';
import SearchResultsItem from '../search-results-item/search-results-item';

class SearchResults extends Component {
  render() {
    return (
      <div>
        {this.props.beers.map((beer) => {
          return <SearchResultsItem beer={beer} userBeers={this.props.userBeers} key={beer.url} onBeerAdd={this.props.onBeerAdd} />;
        })}
      </div>
    );
  }
}

export default SearchResults;

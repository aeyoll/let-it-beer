import React, { Component } from 'react';
import SearchResultsItem from '../search-results-item/search-results-item';

class SearchResults extends Component {
  render() {
    return (
      <div>
        {this.props.beers.map((beer) => {
          return <SearchResultsItem beer={beer} key={beer.url} />;
        })}
      </div>
    );
  }
}

export default SearchResults;

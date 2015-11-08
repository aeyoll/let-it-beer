import React, { Component } from 'react';

class SearchResultsItem extends Component {
  render() {
    return (
      <div>{this.props.beer.name}</div>
    );
  }
}

export default SearchResultsItem;

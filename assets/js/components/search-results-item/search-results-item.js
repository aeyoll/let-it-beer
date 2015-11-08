import React, { Component } from 'react';
import $ from 'jquery'

class SearchResultsItem extends Component {
  constructor() {
    super();

    this.handleBeerAdd = this.handleBeerAdd.bind(this);
  }

  handleBeerAdd() {
    $.post('/api/beers/', this.props.beer);
  }

  render() {
    return (
      <div>{this.props.beer.name} <button onClick={this.handleBeerAdd}>Add to my beers</button></div>
    );
  }
}

export default SearchResultsItem;

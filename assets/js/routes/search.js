import React, { Component } from 'react'
import SearchBar from '../components/search-bar/search-bar'
import BeerList from '../components/beer-list/beer-list'

class Search extends Component {
  constructor() {
    super();

    this.state = {
      query: 'summit extra pale ale',
      beers: []
    };

    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleUserSubmit = this.handleUserSubmit.bind(this);
  }

  handleUserInput(query) {
    this.setState({
      query: query
    });
  }

  handleUserSubmit(beers) {
    this.setState({
      beers: beers
    });
  }

  render() {
    return (
      <div>
        <h1>Search a beer</h1>
        <SearchBar query={this.state.query} onUserInput={this.handleUserInput} onUserSubmit={this.handleUserSubmit}></SearchBar>
        <BeerList beers={this.state.beers}></BeerList>
      </div>
    );
  }
}

export default Search;

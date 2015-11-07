import React, { Component } from 'react'
import SearchBar from '../components/search-bar/search-bar'


class Search extends Component {
  render() {
    return (
      <div>
        <h1>Search a beer</h1>
        <SearchBar></SearchBar>
      </div>
    );
  }
}

export default Search;
